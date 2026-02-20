"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { siteConfig } from "@/config/site";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function fallbackMailto(data: ContactFormValues) {
  window.location.href = `mailto:${siteConfig.contactEmail}?subject=Portfolio contact from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(data.message + "\n\nReply-to: " + data.email)}`;
}

export function ContactSheet() {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const handleSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        if (res.status === 503) {
          toast({
            title: "Contact form not configured",
            description: "Opening your email client instead.",
            variant: "default",
          });
          fallbackMailto(data);
        } else {
          toast({
            title: "Could not send",
            description: json.error ?? "Something went wrong. Try emailing directly.",
            variant: "destructive",
          });
        }
        return;
      }

      toast({
        title: "Message sent",
        description: "I'll get back to you soon.",
      });
      form.reset();
      setOpen(false);
    } catch {
      toast({
        title: "Something went wrong",
        description: "Opening your email client instead.",
        variant: "destructive",
      });
      fallbackMailto(data);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="default"
          size="sm"
          className="rounded-full"
          aria-label="Contact Michael Serrano"
        >
          Contact
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Get in touch</SheetTitle>
          <SheetDescription>
            Send a message or reach out via the links below.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="mt-6 space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message..."
                      className="min-h-[120px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Sending…" : "Send message"}
            </Button>
          </form>
        </Form>
        <div className="mt-6 flex gap-4 border-t pt-4">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Icons.gitHub className="h-5 w-5" /> GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Icons.linkedin className="h-5 w-5" /> LinkedIn
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
