"use client";

import { ClientOnly } from "@/components/common/client-only";
import { CommandPalette } from "@/components/common/command-palette";
import { FloatingDock } from "@/components/common/floating-dock";

/**
 * Wraps FloatingDock and CommandPalette in ClientOnly so Radix Dialog/Sheet
 * (and their aria-controls IDs) only render after hydration, avoiding mismatch.
 */
export function DockAndCommand() {
  return (
    <ClientOnly>
      <FloatingDock />
      <CommandPalette />
    </ClientOnly>
  );
}
