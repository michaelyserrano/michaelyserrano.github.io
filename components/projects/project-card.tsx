"use client";

import Image from "next/image";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import ProjectDescription from "@/components/projects/project-description";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { ProjectInterface } from "@/config/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = React.useState(false);
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <div className="relative p-6 w-full bg-background border border-border rounded-lg h-full flex flex-col">
      <div className="relative w-full h-[200px] flex-shrink-0 rounded-lg border border-border overflow-hidden bg-muted">
        {!imgLoaded && (
          <Skeleton className="absolute inset-0 rounded-lg" />
        )}
        <Image
          className={cn(
            "rounded-lg border border-border object-cover transition-opacity duration-200",
            imgLoaded ? "opacity-100" : "opacity-0"
          )}
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          onLoad={() => setImgLoaded(true)}
        />
      </div>
      <div className="pt-5 space-y-3 flex flex-col flex-grow">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground flex-grow">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="default" className="mt-2 w-full sm:w-auto">
              Read more
              <Icons.chevronRight className="w-4 ml-1" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] w-[90vw] max-h-[90vh] flex flex-col p-0">
            <DialogHeader className="px-6 pt-6 pb-2">
              <DialogTitle className="text-2xl">{project.companyName}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="flex-1 min-h-0 max-h-[70vh] px-6 pb-6">
              <div className="pr-4 space-y-6">
                <div className="flex flex-wrap gap-2">
                  <ChipContainer textArr={project.category} />
                </div>
                <p className="text-muted-foreground">
                  {project.shortDescription}
                </p>
                <div className="relative w-full aspect-video rounded-lg border border-border overflow-hidden bg-muted">
                  <Image
                    src={project.companyLogoImg}
                    alt={project.companyName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 800px) 90vw, 800px"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    Tech Stack
                  </h3>
                  <ChipContainer textArr={project.techStack} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    Description
                  </h3>
                  <ProjectDescription
                    paragraphs={project.descriptionDetails.paragraphs}
                    bullets={project.descriptionDetails.bullets}
                  />
                </div>
                {project.pagesInfoArr.length > 0 && (
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-3">
                      Architecture & Details
                    </h3>
                    {project.pagesInfoArr.map((page, ind) => (
                      <div key={ind} className="mb-6">
                        <h4 className="flex items-center font-heading text-base font-medium mt-3 mb-2">
                          <Icons.star className="h-4 w-4 mr-2 text-primary" />
                          {page.title}
                        </h4>
                        {page.description && (
                          <p className="text-sm text-muted-foreground mb-3">
                            {page.description}
                          </p>
                        )}
                        {page.imgArr?.length > 0 && (
                          <div className="grid gap-3">
                            {page.imgArr.map((img, i) => (
                              <div
                                key={i}
                                className="relative w-full aspect-video rounded-md border overflow-hidden bg-muted"
                              >
                                <Image
                                  src={img}
                                  alt={`${page.title} ${i + 1}`}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 800px) 90vw, 720px"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
