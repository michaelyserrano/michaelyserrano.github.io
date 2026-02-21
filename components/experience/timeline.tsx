"use client";

import Image from "next/image";
import React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExperienceInterface } from "@/config/experience";
import {
  ExperienceDetailContent,
  getDurationText,
} from "@/components/experience/experience-detail-content";

interface TimelineProps {
  experiences: ExperienceInterface[];
  highlightCardId?: string | null;
}

const Timeline: React.FC<TimelineProps> = ({ experiences, highlightCardId }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedExperience, setSelectedExperience] =
    React.useState<ExperienceInterface | null>(null);

  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.endDate === "Present" ? new Date() : a.endDate;
    const dateB = b.endDate === "Present" ? new Date() : b.endDate;
    return dateB.getTime() - dateA.getTime();
  });

  const openDetail = (experience: ExperienceInterface) => {
    setSelectedExperience(experience);
    setOpen(true);
  };

  return (
    <div className="space-y-4">
      {sortedExperiences.map((experience, index) => (
        <AnimatedSection
          key={experience.id}
          id={`spotlight-card-experience-${experience.id}`}
          delay={0.1 * (index + 1)}
          direction="up"
        >
          <div className="w-full p-6 bg-background border border-border rounded-lg transition-all duration-300 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex items-start gap-4 flex-1 min-w-0">
              {experience.logo && (
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {experience.position}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary border border-primary/20 w-fit">
                    {getDurationText(
                      experience.startDate,
                      experience.endDate
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-muted-foreground">
                    {experience.company}
                  </span>
                  {experience.companyUrl && (
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icons.externalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {experience.location}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {experience.description[0]}
                </p>
              </div>
            </div>
            <Button
              variant="default"
              size="sm"
              className="rounded-lg w-full sm:w-auto font-semibold shadow-sm hover:shadow-md transition-shadow"
              onClick={() => openDetail(experience)}
            >
              View Details
              <Icons.chevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </AnimatedSection>
      ))}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[800px] w-[90vw] max-h-[90vh] !flex flex-col overflow-hidden p-0">
          {selectedExperience && (
            <>
              <DialogHeader className="flex-shrink-0 px-6 pt-6 pb-2">
                <DialogTitle className="text-xl">
                  {selectedExperience.position} at {selectedExperience.company}
                </DialogTitle>
              </DialogHeader>
              <ScrollArea className="flex-1 min-h-0 overflow-y-auto px-6 pb-6">
                <ExperienceDetailContent experience={selectedExperience} />
              </ScrollArea>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Timeline;
