import React from "react";

import { TaggedBulletList } from "@/components/common/tagged-bullet-list";

const ProjectDescription: React.FC<{
  paragraphs: string[];
  bullets: string[];
}> = ({ paragraphs, bullets }) => {
  return (
    <div className="space-y-4">
      <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {bullets.length > 0 && (
        <div className="mt-6">
          <TaggedBulletList bullets={bullets} />
        </div>
      )}
    </div>
  );
};

export default ProjectDescription;
