import React from "react";

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
        <ul className="space-y-3 mt-6">
          {bullets.map((bullet, idx) => {
            // Extract the tag and the text
            const match = bullet.match(/^\[(.*?)\]\s*(.*)/);
            const tag = match ? match[1].trim() : null;
            const text = match ? match[2] : bullet;

            // Detect if this bullet starts a new group
            const prevMatch = idx > 0 ? bullets[idx - 1].match(/^\[(.*?)\]/) : null;
            const prevTag = prevMatch ? prevMatch[1].trim() : null;
            const isNewTagGroup = tag && tag !== prevTag && idx !== 0;

            return (
              <li
                key={idx}
                className={`text-sm leading-relaxed flex items-start gap-3 ${
                  isNewTagGroup ? "mt-5 pt-3 border-t border-border/50" : ""
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-sm" />
                <div className="flex-1">
                  {tag && (
                    <span className="mr-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  )}
                  <span className="text-foreground/80">{text}</span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ProjectDescription;
