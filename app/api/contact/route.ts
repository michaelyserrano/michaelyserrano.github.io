import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { z } from "zod";

import { siteConfig } from "@/config/site";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
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

  const { name, email, message } = parsed.data;
  const toEmail = siteConfig.contactEmail;
  const fromEmail =
    process.env.SENDGRID_FROM_EMAIL || siteConfig.contactEmail;

  sgMail.setApiKey(apiKey);

  const html = `
    <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
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
