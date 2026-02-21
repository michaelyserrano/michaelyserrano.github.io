"use client";

import Link from "next/link";
import { Search } from "lucide-react";

import { ContactSheet } from "@/components/common/contact-sheet";
import { ModeToggle } from "@/components/common/mode-toggle";
import { useSpotlightStore } from "@/store/spotlight-store";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function FloatingDock() {
  const setCommandPaletteOpen = useSpotlightStore((s) => s.setCommandPaletteOpen);

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 z-50 -translate-x-1/2",
        "flex items-center gap-4 rounded-2xl border border-border/80 bg-background/80 px-4 py-3 shadow-lg backdrop-blur-md",
        "ring-1 ring-black/5 dark:ring-white/5"
      )}
    >
      <button
        type="button"
        onClick={() => setCommandPaletteOpen(true)}
        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Open command palette"
      >
        <Search className="h-4 w-4" />
        <kbd className="hidden rounded border bg-muted/80 px-1.5 font-mono text-xs sm:inline">
          ⌘K
        </kbd>
      </button>
      <Link
        href={siteConfig.resumePdfUrl ?? "/resume"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        Resume
      </Link>
      <ContactSheet />
      <ModeToggle />
    </div>
  );
}
