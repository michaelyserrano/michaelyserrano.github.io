import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { z } from "zod";

import { siteConfig } from "@/config/site";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email").max(254, "Email is too long"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(5000, "Message is too long"),
});

// --- In-memory rate limiter: 3 requests per 10 minutes per IP ---
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 3;
const rateLimitMap = new Map<string, number[]>();

// Clean up stale entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of Array.from(rateLimitMap.entries())) {
    const valid = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, valid);
    }
  }
}, 5 * 60 * 1000);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX) {
    rateLimitMap.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

/** Strip newlines / carriage returns to prevent email header injection. */
function stripNewlines(str: string): string {
  return str.replace(/[\r\n]+/g, " ").trim();
}

/** HTML-escape a string for safe inclusion in an HTML email body. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  // --- Rate limiting ---
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Contact form is not configured (missing SENDGRID_API_KEY)." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { email, message } = parsed.data;
  // Sanitise name: strip newlines (header injection) and HTML-escape for the body
  const name = stripNewlines(parsed.data.name);
  const safeName = escapeHtml(name);

  const toEmail = siteConfig.contactEmail;
  const fromEmail =
    process.env.SENDGRID_FROM_EMAIL || siteConfig.contactEmail;

  sgMail.setApiKey(apiKey);

  const html = `
    <p><strong>From:</strong> ${safeName} &lt;${escapeHtml(email)}&gt;</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space: pre-wrap; font-family: inherit;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
  `.trim();

  try {
    await sgMail.send({
      to: toEmail,
      from: { email: fromEmail, name: "Portfolio Contact Form" },
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\nMessage:\n${message}`,
      html,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SendGrid error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email directly." },
      { status: 500 }
    );
  }
}
