"use client";

import { AnimatedSection } from "@/components/common/animated-section";
import { ProjectInterface } from "@/config/projects";
import ProjectCard from "./project-card";

interface ProjectsSectionProps {
  projects: ProjectInterface[];
  highlightCardId?: string | null;
}

export function ProjectsSection({ projects, highlightCardId }: ProjectsSectionProps) {
  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch mt-6">
        {projects.map((project, index) => (
          <AnimatedSection
            key={project.id}
            id={`spotlight-card-projects-${project.id}`}
            delay={0.05 * (index % 6)}
            direction="up"
            className="h-full w-full min-w-0"
          >
            <ProjectCard
              project={project}
              isHighlighted={highlightCardId === project.id}
            />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
