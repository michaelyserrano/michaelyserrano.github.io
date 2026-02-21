import { slugify } from "@/lib/spotlight-targets";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
  groupByCategory?: boolean;
  highlightCardId?: string | null;
}

const CATEGORY_ORDER = [
  "Machine Learning & Data",
  "Frontend & Full-Stack",
  "Backend & Databases",
  "DevOps & Tools",
  "Languages",
] as const;

function SkillChip({
  skill,
  id,
}: {
  skill: skillsInterface;
  id?: string;
}) {
  return (
    <div
      id={id}
      className="flex items-center gap-2.5 rounded-lg border bg-background px-4 py-2.5 text-base transition-colors hover:bg-muted/50"
    >
      <skill.icon size={22} className="shrink-0 text-muted-foreground" />
      <span className="font-medium">{skill.name}</span>
    </div>
  );
}

export default function SkillsCard({
  skills,
  groupByCategory = false,
  highlightCardId,
}: SkillsCardProps) {
  if (groupByCategory) {
    const categories = Array.from(
      new Map(skills.map((s) => [s.category, s.category])).values()
    );
    const sortedCategories = [...categories].sort(
      (a, b) =>
        CATEGORY_ORDER.indexOf(a as (typeof CATEGORY_ORDER)[number]) -
        CATEGORY_ORDER.indexOf(b as (typeof CATEGORY_ORDER)[number])
    );

    return (
      <div className="space-y-6">
        {sortedCategories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          if (categorySkills.length === 0) return null;
          return (
            <section key={category}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill, idx) => (
                  <SkillChip
                    key={`${skill.name}-${idx}`}
                    skill={skill}
                    id={`spotlight-card-skills-${slugify(skill.name)}`}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, idx) => (
        <SkillChip
          key={`${skill.name}-${idx}`}
          skill={skill}
          id={`spotlight-card-skills-${slugify(skill.name)}`}
        />
      ))}
    </div>
  );
}
