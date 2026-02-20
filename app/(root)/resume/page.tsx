"use client";
import { siteConfig } from "@/config/site";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ResumePage() {
  const router = useRouter();
  const url = siteConfig.resumePdfUrl ?? "/";

  useEffect(() => {
    if (url.startsWith("http")) {
      window.location.href = url;
    } else {
      router.replace(url);
    }
  }, [url, router]);

  return <div>Redirecting to the resume...</div>;
}
