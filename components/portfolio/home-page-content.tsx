"use client";

import { useGraphStore } from "@/store/graph-store";
import { NodeGraphCanvas } from "@/components/portfolio/node-graph-canvas";
import { RecruiterLayout } from "@/components/portfolio/recruiter-layout";

export function HomePageContent() {
  const isGraphMode = useGraphStore((s) => s.isGraphMode);

  if (isGraphMode) {
    return (
      <div className="h-screen w-full">
        <NodeGraphCanvas />
      </div>
    );
  }

  return <RecruiterLayout />;
}
