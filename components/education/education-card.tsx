"use client";

import { AnimatedSection } from "@/components/common/animated-section";
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
          <ul className="mt-2 space-y-1">
            {entry.degrees.map((degree, idx) => (
              <li
                key={idx}
                className="text-sm leading-relaxed flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                {degree}
              </li>
            ))}
          </ul>
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
            <p className="mt-2 text-sm text-foreground">
              {entry.coursework.join(", ")}.
            </p>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
