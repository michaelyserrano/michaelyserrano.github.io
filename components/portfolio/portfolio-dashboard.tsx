"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { EducationCondensed } from "@/components/education/education-condensed";
import { ProjectsSection } from "@/components/projects/projects-section";
import Timeline from "@/components/experience/timeline";
import ContributionCard from "@/components/contributions/contribution-card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { education } from "@/config/education";
import { experiences } from "@/config/experience";
import { featuredContributions } from "@/config/contributions";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";
import { ProjectInterface } from "@/config/projects";
import { ExperienceInterface } from "@/config/experience";
import { contributionsInterface } from "@/config/contributions";

function NowBadge() {
  const current = experiences.filter((e) => e.endDate === "Present");
  const primary = current[0];
  if (!primary) return null;
  return (
    <div className="rounded-lg border border-border bg-muted/50 px-3 py-2">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Now
      </p>
      <p className="text-sm font-semibold text-foreground mt-0.5">
        {primary.company}
      </p>
      <p className="text-xs text-muted-foreground">{primary.position}</p>
    </div>
  );
}

interface PortfolioDashboardProps {
  projects: ProjectInterface[];
  experiencesData: ExperienceInterface[];
  contributions: contributionsInterface[];
}

export function PortfolioDashboard({
  projects,
  experiencesData,
  contributions,
}: PortfolioDashboardProps) {
  const tabItems = [
    {
      value: "projects",
      label: "Projects",
      content: (
        <div className="p-4 md:p-0">
          <ProjectsSection projects={projects} />
          <div className="flex justify-center mt-6">
            <Link href="/projects">
              <Button variant="outline" className="rounded-xl">
                <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
              </Button>
            </Link>
          </div>
        </div>
      ),
    },
    {
      value: "experience",
      label: "Experience",
      content: (
        <div className="p-4 md:p-0">
          <Timeline experiences={experiencesData} />
          <div className="flex justify-center mt-6">
            <Link href="/experience">
              <Button variant="outline" className="rounded-xl">
                <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
              </Button>
            </Link>
          </div>
        </div>
      ),
    },
    {
      value: "contributions",
      label: "Contributions",
      content: (
        <div className="p-4 md:p-0">
          <ContributionCard contributions={contributions} />
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Desktop: resizable panels */}
      <div className="hidden md:block h-[calc(100vh-12rem)] min-h-[32rem] w-full">
        <motion.div
          className="h-full rounded-xl border border-border bg-background overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ResizablePanelGroup
            id="portfolio-dashboard"
            orientation="horizontal"
            className="h-full"
          >
            {/* Left: Navigation / Status */}
            <ResizablePanel
              id="left"
              defaultSize={22}
              minSize={16}
              maxSize={30}
              className="bg-muted/50 border-r border-border flex flex-col"
            >
              <div className="p-4 space-y-4 flex flex-col h-full min-h-0">
                <NowBadge />
                <div className="flex-1 min-h-0 overflow-hidden">
                  <ScrollArea className="h-full">
                    <div className="space-y-4 pr-2">
                      {education.map((entry) => (
                        <EducationCondensed key={entry.id} entry={entry} />
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />

            {/* Middle: Projects */}
            <ResizablePanel
              id="main"
              defaultSize={48}
              minSize={30}
              className="flex flex-col min-w-0"
            >
              <div className="p-4 border-b border-border bg-muted/30">
                <h2 className="font-heading text-xl font-semibold">
                  {pagesConfig.projects.title}
                </h2>
                {pagesConfig.projects.description ? (
                  <p className="text-sm text-muted-foreground mt-1">
                    {pagesConfig.projects.description}
                  </p>
                ) : null}
              </div>
              <ScrollArea className="flex-1 min-h-0">
                <div className="p-4">
                  <ProjectsSection projects={projects} />
                  <div className="flex justify-center mt-6">
                    <Link href="/projects">
                      <Button variant="outline" className="rounded-xl">
                        <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollArea>
            </ResizablePanel>
            <ResizableHandle withHandle />

            {/* Right: Experience + Contributions (vertical split) */}
            <ResizablePanel
              id="right"
              defaultSize={30}
              minSize={22}
              maxSize={45}
              className="flex flex-col min-w-0 bg-muted/50 border-l border-border"
            >
              <ResizablePanelGroup orientation="vertical" className="flex-1 min-h-0">
                <ResizablePanel id="experience-panel" defaultSize={55} minSize={30}>
                  <div className="p-4 border-b border-border bg-muted/30 h-full flex flex-col min-h-0">
                    <h2 className="font-heading text-lg font-semibold shrink-0">
                      {pagesConfig.experience.title}
                    </h2>
                    <ScrollArea className="flex-1 min-h-0 mt-2">
                      <Timeline experiences={experiencesData} />
                    </ScrollArea>
                    <div className="shrink-0 pt-2">
                      <Link href="/experience">
                        <Button variant="outline" size="sm" className="rounded-lg w-full">
                          View All <Icons.chevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle direction="vertical" />
                <ResizablePanel id="contributions-panel" defaultSize={45} minSize={25}>
                  <div className="p-4 h-full flex flex-col min-h-0">
                    <h2 className="font-heading text-lg font-semibold shrink-0">
                      {pagesConfig.contributions.title}
                    </h2>
                    <ScrollArea className="flex-1 min-h-0 mt-2">
                      <ContributionCard contributions={contributions} />
                    </ScrollArea>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </motion.div>
      </div>

      {/* Mobile: stacked tabs */}
      <motion.div
        className="md:hidden w-full"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      >
        <div className="rounded-lg border border-border bg-muted/50 p-4 mb-4">
          <NowBadge />
          <div className="mt-3">
            {education.slice(0, 1).map((entry) => (
              <EducationCondensed key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
        <ResponsiveTabs items={tabItems} defaultValue="projects" />
      </motion.div>
    </>
  );
}
