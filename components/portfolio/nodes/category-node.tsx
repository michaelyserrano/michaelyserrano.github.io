"use client";

import { memo } from "react";
import type { NodeProps } from "@xyflow/react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type CategoryNodeData = {
  label: string;
  categoryId: string;
  expanded?: boolean;
  isFocused?: boolean;
};

function CategoryNodeComponent({ data, selected }: NodeProps) {
  const { label, isFocused } = (data ?? {}) as CategoryNodeData;

  return (
    <motion.div
      className={cn(
        "rounded-xl border border-border/80 bg-background/80 px-5 py-3 shadow-lg backdrop-blur-md",
        "ring-1 ring-black/5 dark:ring-white/5",
        "cursor-pointer select-none font-medium text-foreground transition-colors hover:bg-accent/50",
        (selected || isFocused) && "ring-2 ring-primary ring-offset-2 ring-offset-background"
      )}
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {label}
    </motion.div>
  );
}

export const CategoryNode = memo(CategoryNodeComponent);
