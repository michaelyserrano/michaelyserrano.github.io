"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EducationCard } from "@/components/education/education-card";
import { ProjectsSection } from "@/components/projects/projects-section";
import Timeline from "@/components/experience/timeline";
import SkillsCard from "@/components/skills/skills-card";
import { pagesConfig } from "@/config/pages";
import type { EducationEntry } from "@/config/education";
import type { ExperienceInterface } from "@/config/experience";
import type { ProjectInterface } from "@/config/projects";
import { skills } from "@/config/skills";

const TAB_IDS = ["projects", "experience", "education", "skills"] as const;
type TabId = (typeof TAB_IDS)[number];

const TAB_LABELS: Record<TabId, string> = {
  projects: pagesConfig.projects.title,
  experience: pagesConfig.experience.title,
  education: "Education",
  skills: "Skills",
};

interface SpotlightSectionProps {
  projects: ProjectInterface[];
  experiences: ExperienceInterface[];
  education: EducationEntry[];
}

const transition = { duration: 0.25, ease: "easeOut" };

export function SpotlightSection({
  projects,
  experiences,
  education,
}: SpotlightSectionProps) {
  const [activeTab, setActiveTab] = useState<TabId>("projects");

  return (
    <section id="spotlight" className="w-full container max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Navigation hub */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {TAB_IDS.map((tabId) => (
          <Button
            key={tabId}
            variant={activeTab === tabId ? "default" : "outline"}
            size="sm"
            className="rounded-lg"
            onClick={() => setActiveTab(tabId)}
          >
            {TAB_LABELS[tabId]}
          </Button>
        ))}
      </div>

      {/* Dynamic content card */}
      <Card className="overflow-hidden border-border bg-muted/50 shadow-sm">
        <CardContent className="p-6 md:p-8 pt-6 min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={transition}
              className="w-full"
            >
              {activeTab === "projects" && (
                <ProjectsSection projects={projects} />
              )}

              {activeTab === "experience" && (
                <Timeline experiences={experiences} />
              )}

              {activeTab === "education" && (
                <div className="mx-auto max-w-2xl space-y-4">
                  {education.map((entry) => (
                    <EducationCard key={entry.id} entry={entry} />
                  ))}
                </div>
              )}

              {activeTab === "skills" && (
                <div className="space-y-6">
                  <SkillsCard skills={skills} groupByCategory />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </section>
  );
}
