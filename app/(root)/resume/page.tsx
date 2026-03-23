"use client";
import { siteConfig } from "@/config/site";
import { useEffect } from "react";

export default function ResumePage() {
  const url = siteConfig.resumePdfUrl ?? "/";

  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return <div>Redirecting to the resume...</div>;
}
