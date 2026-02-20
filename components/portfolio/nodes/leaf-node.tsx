"use client";

import { memo, useRef, useState, useCallback } from "react";
import type { NodeProps } from "@xyflow/react";
import { cn } from "@/lib/utils";
import { GraphNodeTooltip } from "@/components/portfolio/graph-node-tooltip";

export type LeafNodeData = {
  label: string;
  /** For tooltip / quick-peek content */
  tooltip?: {
    role?: string;
    company?: string;
    date?: string;
    summary?: string;
    institution?: string;
    degrees?: string;
    shortDescription?: string;
    category?: string;
    skills?: string[];
  };
  isFocused?: boolean;
};

function LeafNodeComponent({ data, selected }: NodeProps) {
  const { label, isFocused, tooltip } = (data ?? {}) as LeafNodeData;
  const [hover, setHover] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const onMouseEnter = useCallback(() => {
    setHover(true);
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      setCoords({ x: rect.left + rect.width / 2, y: rect.top });
    }
  }, []);

  const onMouseLeave = useCallback(() => setHover(false), []);

  const tooltipContent = tooltip && (
    <div className="space-y-1.5">
      {tooltip.role && (
        <p className="font-semibold text-foreground">{tooltip.role}</p>
      )}
      {tooltip.company && (
        <p className="text-muted-foreground">{tooltip.company}</p>
      )}
      {tooltip.institution && (
        <p className="font-medium text-foreground">{tooltip.institution}</p>
      )}
      {tooltip.date && (
        <p className="text-xs text-muted-foreground">{tooltip.date}</p>
      )}
      {tooltip.degrees && (
        <p className="text-xs text-muted-foreground line-clamp-2">
          {tooltip.degrees}
        </p>
      )}
      {tooltip.summary && (
        <p className="text-xs text-muted-foreground line-clamp-3">
          {tooltip.summary}
        </p>
      )}
      {tooltip.shortDescription && (
        <p className="text-xs text-muted-foreground line-clamp-3">
          {tooltip.shortDescription}
        </p>
      )}
      {tooltip.category && (
        <p className="text-xs text-muted-foreground">{tooltip.category}</p>
      )}
      {tooltip.skills && tooltip.skills.length > 0 && (
        <p className="text-xs text-muted-foreground">
          {tooltip.skills.slice(0, 5).join(", ")}
          {tooltip.skills.length > 5 ? "…" : ""}
        </p>
      )}
    </div>
  );

  return (
    <>
      <div
        ref={ref}
        className={cn(
          "rounded-lg border border-border/70 bg-background/90 px-4 py-2 text-sm shadow-md backdrop-blur-sm",
          "cursor-pointer font-medium text-foreground transition-colors hover:bg-accent/50",
          (selected || isFocused) &&
            "ring-2 ring-primary ring-offset-2 ring-offset-background"
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {label}
      </div>
      {hover && tooltipContent && (
        <GraphNodeTooltip
          content={tooltipContent}
          x={coords.x}
          y={coords.y}
        />
      )}
    </>
  );
}

export const LeafNode = memo(LeafNodeComponent);
