"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SkillsCard from "@/components/skills/skills-card";
import { skills } from "@/config/skills";

export function SkillsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="font-semibold">
          View All Skills
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Technical Skills</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            A comprehensive overview of my technical stack, languages, and tools.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <SkillsCard skills={skills} groupByCategory />
        </div>
      </DialogContent>
    </Dialog>
  );
}
