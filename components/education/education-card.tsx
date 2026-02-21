"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { Badge } from "@/components/ui/badge";
import { EducationEntry } from "@/config/education";

interface EducationCardProps {
  entry: EducationEntry;
}

export function EducationCard({ entry }: EducationCardProps) {
  return (
    <AnimatedSection direction="up" className="w-full">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
        {/* Visual Anchor: Logo – object-contain + padding so the full logo is visible */}
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md border bg-muted p-1">
          {entry.logo ? (
            <Image
              src={entry.logo}
              alt={`${entry.institution} logo`}
              fill
              className="object-contain"
            />
          ) : (
            <span
              className="flex h-full w-full items-center justify-center text-sm font-semibold text-muted-foreground"
              aria-hidden
            >
              {entry.institution
                .split(/\s+/)
                .map((w) => w[0])
                .filter((_, i, a) => i === 0 || i === a.length - 1)
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </span>
          )}
        </div>

        <div className="flex-1 space-y-1.5">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <div>
              <h3 className="font-semibold text-xl leading-tight tracking-tight">
                {entry.institution}
              </h3>
              <p className="text-base text-muted-foreground mt-1.5">
                {entry.location}
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            {/* Degrees – aligned badges (transparent border on default/secondary to match outline height) */}
            <div className="space-y-2.5">
              {entry.degrees.map((degree, idx) => (
                <div
                  key={idx}
                  className="flex flex-wrap items-center gap-1.5"
                >
                  <Badge
                    variant="default"
                    className="h-7 flex items-center border border-transparent px-3 py-1 text-sm font-semibold"
                  >
                    {degree.type}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="h-7 flex items-center border border-transparent px-3 py-1 text-sm font-medium"
                  >
                    {degree.major}
                  </Badge>
                  {degree.expected && (
                    <Badge
                      variant="outline"
                      className="h-7 flex items-center px-3 py-1 text-sm text-muted-foreground"
                    >
                      {degree.expected}
                    </Badge>
                  )}
                </div>
              ))}
            </div>

            {/* Coursework – grouped by discipline, 2-column grid */}
            {entry.coursework && entry.coursework.length > 0 && (
              <div className="mt-4 border-t border-border/50 pt-4 space-y-3">
                <span className="text-base font-semibold text-foreground">
                  Selected Coursework
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                  {entry.coursework.map((group, idx) => (
                    <div key={idx} className="space-y-2">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        {group.category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {group.courses.map((course, cIdx) => (
                          <Badge
                            key={cIdx}
                            variant="secondary"
                            className="font-normal text-sm bg-muted/50 hover:bg-muted border border-transparent"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
