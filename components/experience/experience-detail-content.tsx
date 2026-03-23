"use client";

import Image from "next/image";

import { Icons } from "@/components/common/icons";
import { TaggedBulletList } from "@/components/common/tagged-bullet-list";
import ChipContainer from "@/components/ui/chip-container";
import { ExperienceInterface } from "@/config/experience";

import { getDurationText, getYearFromDate } from "@/lib/utils";

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
        <TaggedBulletList bullets={experience.achievements} />
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
