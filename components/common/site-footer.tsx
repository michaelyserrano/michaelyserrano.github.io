import * as React from "react";

import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer id="page-footer" className={cn(className)}>
      {/* Just enough height so the fixed nav bar rests here without covering cards (bottom-6 + bar ≈ 4.5rem) */}
      <div className="container mt-4 h-[4.5rem]" />
    </footer>
  );
}
