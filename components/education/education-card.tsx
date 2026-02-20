"use client";

import { AnimatedSection } from "@/components/common/animated-section";
import { Badge } from "@/components/ui/badge";
import { EducationEntry } from "@/config/education";

interface EducationCardProps {
  entry: EducationEntry;
}

export function EducationCard({ entry }: EducationCardProps) {
  return (
    <AnimatedSection
      direction="up"
      className="rounded-lg border bg-background p-6 transition-all duration-300"
    >
      <h3 className="text-lg font-bold text-foreground">{entry.institution}</h3>
      <p className="text-sm text-muted-foreground mt-1">{entry.location}</p>
      <div className="mt-4 space-y-3">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Degrees
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {entry.degrees.map((degree, idx) => (
              <Badge key={idx} variant="secondary" className="font-normal">
                {degree}
              </Badge>
            ))}
          </div>
        </div>
        {entry.researchFocus && (
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Research Focus
            </h4>
            <p className="mt-2 text-sm text-foreground">
              {entry.researchFocus}
            </p>
          </div>
        )}
        {entry.coursework && entry.coursework.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Coursework Highlights
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {entry.coursework.map((course, idx) => (
                <Badge key={idx} variant="outline" className="font-normal">
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
