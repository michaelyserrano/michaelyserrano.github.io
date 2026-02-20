"use client";

import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface GraphNodeTooltipProps {
  content: React.ReactNode;
  x: number;
  y: number;
  className?: string;
}

export function GraphNodeTooltip({
  content,
  x,
  y,
  className,
}: GraphNodeTooltipProps) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className={cn(
        "pointer-events-none fixed z-[1000] max-w-[280px] rounded-xl border border-border/80 bg-background/90 px-4 py-3 text-sm shadow-xl backdrop-blur-md",
        "ring-1 ring-black/5 dark:ring-white/5",
        className
      )}
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -100%) translateY(-12px)",
      }}
    >
      {content}
    </div>,
    document.body
  );
}
