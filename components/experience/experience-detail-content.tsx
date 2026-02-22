"use client";

import Image from "next/image";

import { Icons } from "@/components/common/icons";
import ChipContainer from "@/components/ui/chip-container";
import { ExperienceInterface } from "@/config/experience";

export const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

export const getDurationText = (
  startDate: Date,
  endDate: Date | "Present"
): string => {
  const startYear = getYearFromDate(startDate);
  const endYear =
    typeof endDate === "string" ? "Present" : getYearFromDate(endDate);
  if (endYear === "Present" || startYear !== endYear) {
    return `${startYear} - ${endYear}`;
  }
  return startYear;
};

interface ExperienceDetailContentProps {
  experience: ExperienceInterface;
}

export function ExperienceDetailContent({
  experience,
}: ExperienceDetailContentProps) {
  return (
    <div className="pr-4 space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        {experience.logo && (
          <div className="w-14 h-14 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={56}
              height={56}
              className="w-full h-full object-contain p-2"
            />
          </div>
        )}
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
          {getDurationText(experience.startDate, experience.endDate)}
        </span>
        {experience.companyUrl && (
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
          >
            <Icons.externalLink className="w-4 h-4" /> Visit company
          </a>
        )}
      </div>
      <p className="text-muted-foreground">{experience.location}</p>

      <div>
        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
          Role Summary
        </h3>
        <div className="space-y-2">
          {experience.description.map((desc, idx) => (
            <p key={idx} className="text-sm leading-relaxed">
              {desc}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
          Key Achievements
        </h3>
        <ul className="space-y-3">
          {experience.achievements.map((achievement, idx) => {
            // Extract the tag and the text
            const match = achievement.match(/^\[(.*?)\]\s*(.*)/);
            const tag = match ? match[1].trim() : null;
            const text = match ? match[2] : achievement;

            // UI Trick 1: Detect if this bullet starts a new group (e.g., switching from MEng to Undergrad)
            const prevMatch = idx > 0 ? experience.achievements[idx - 1].match(/^\[(.*?)\]/) : null;
            const prevTag = prevMatch ? prevMatch[1].trim() : null;
            const isNewTagGroup = tag && tag !== prevTag && idx !== 0;

            return (
              <li
                key={idx}
                // If it's a new group, add top margin, padding, and a subtle border line
                className={`text-sm leading-relaxed flex items-start gap-3 ${
                  isNewTagGroup ? "mt-5 pt-3 border-t border-border/50" : ""
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-sm" />
                <div className="flex-1">
                  {tag && (
                    // UI Trick 2: Themed badges instead of gray ones
                    <span className="mr-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  )}
                  {/* Slightly fade the text so the badge pops more */}
                  <span className="text-foreground/80">{text}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
          Technologies & Skills
        </h3>
        <ChipContainer textArr={experience.skills} />
      </div>
    </div>
  );
}
