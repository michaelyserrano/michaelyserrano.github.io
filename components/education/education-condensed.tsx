"use client";

import { Badge } from "@/components/ui/badge";
import { EducationEntry } from "@/config/education";
import { cn } from "@/lib/utils";

interface EducationCondensedProps {
  entry: EducationEntry;
  className?: string;
}

export function EducationCondensed({ entry, className }: EducationCondensedProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-muted/50 p-4 transition-all duration-300",
        className
      )}
    >
      <h3 className="text-sm font-bold text-foreground">{entry.institution}</h3>
      <p className="text-xs text-muted-foreground mt-0.5">{entry.location}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {entry.degrees.slice(0, 2).map((degree, idx) => (
          <Badge key={idx} variant="secondary" className="text-xs font-normal">
            {degree.length > 40 ? `${degree.slice(0, 40)}…` : degree}
          </Badge>
        ))}
      </div>
      {entry.researchFocus ? (
        <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
          {entry.researchFocus}
        </p>
      ) : null}
    </div>
  );
}
