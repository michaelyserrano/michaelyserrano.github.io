import React from "react";

const ProjectDescription: React.FC<{
  paragraphs: string[];
  bullets: string[];
}> = ({ paragraphs, bullets }) => {
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p className="mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      {bullets.map((bullet, index) => (
        <p className="mb-4" key={index}>
          {bullet}
        </p>
      ))}
    </div>
  );
};

export default ProjectDescription;
