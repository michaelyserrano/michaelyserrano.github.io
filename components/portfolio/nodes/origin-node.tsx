"use client";

import Image from "next/image";
import { memo } from "react";
import type { NodeProps } from "@xyflow/react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type OriginNodeData = {
  name: string;
  tagline: string;
  imageUrl: string;
};

function OriginNodeComponent({ data, selected }: NodeProps) {
  const { name, tagline, imageUrl } = (data ?? {}) as OriginNodeData;

  return (
    <motion.div
      className={cn(
        "flex flex-col items-center rounded-2xl border border-border/80 bg-background/80 p-6 shadow-xl backdrop-blur-md",
        "min-w-[220px] ring-1 ring-black/5 dark:ring-white/5",
        selected && "ring-2 ring-primary"
      )}
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-primary bg-muted">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <h2 className="mt-3 font-heading text-lg font-bold text-foreground">
        {name}
      </h2>
      <p className="mt-1 max-w-[200px] text-center text-xs text-muted-foreground">
        {tagline}
      </p>
    </motion.div>
  );
}

export const OriginNode = memo(OriginNodeComponent);
