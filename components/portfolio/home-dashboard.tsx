"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { EducationCard } from "@/components/education/education-card";
import { ProjectsSection } from "@/components/projects/projects-section";
import Timeline from "@/components/experience/timeline";
import { education } from "@/config/education";
import { experiences } from "@/config/experience";
import { Projects } from "@/config/projects";

export function HomeDashboard() {
  return (
    <div className="flex flex-col h-[480px] max-h-[50vh] min-h-[360px] overflow-hidden rounded-xl border border-border bg-background/95 shadow-md">
      {/* 1. Compact header strip - no full hero, just a thin bar */}
      <div className="flex-none shrink-0 h-14 flex items-center border-b border-border bg-muted/20 px-4">
        <p className="text-sm font-medium text-muted-foreground truncate">
          <span className="text-foreground font-semibold">Michael Serrano</span>
          {" · "}
          MIT 6-14 MEng · Incoming @ Roblox (Sept 2026)
        </p>
      </div>

      {/* 2. Three-panel area - fixed height so page can show Skills below */}
      <div className="flex-1 min-h-0 w-full flex">
        <ResizablePanelGroup
          direction="horizontal"
          className="flex-1 min-h-0 w-full"
        >
          {/* LEFT PANEL: Status & Education */}
          <ResizablePanel
            defaultSize="20%"
            minSize={15}
            className="min-h-0 bg-muted/30"
          >
          <ScrollArea className="h-full p-3">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Status
                </h3>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                  <p className="text-xs font-medium">
                    Incoming @ Roblox (Sept 2026)
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Education
                </h3>
                {education.map((entry) => (
                  <EducationCard key={entry.id} entry={entry} />
                ))}
              </div>
            </div>
          </ScrollArea>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* MIDDLE PANEL: Primary Content (Projects) */}
        <ResizablePanel
          defaultSize="50%"
          minSize={30}
          className="min-h-0 min-w-0"
        >
          <ScrollArea className="h-full p-4">
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex items-center justify-between border-b border-border/80 pb-2">
                <h2 className="text-lg font-bold tracking-tight">
                  Active Repositories
                </h2>
                <Badge variant="outline" className="text-xs">{Projects.length} Projects</Badge>
              </div>
              <ProjectsSection projects={Projects} />
            </div>
          </ScrollArea>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* RIGHT PANEL: Experience Timeline */}
        <ResizablePanel
          defaultSize="30%"
          minSize={20}
          className="min-h-0 min-w-0 bg-muted/10"
        >
          <ScrollArea className="h-full p-4">
            <div className="space-y-4">
              <h2 className="text-base font-bold border-b border-border/80 pb-2">
                Activity Log
              </h2>
              <Timeline experiences={experiences} />
            </div>
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
      </div>
    </div>
  );
}
