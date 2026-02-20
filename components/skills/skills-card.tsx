import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
  groupByCategory?: boolean;
}

const CATEGORY_ORDER = [
  "Machine Learning & Data",
  "Frontend & Full-Stack",
  "Backend & Databases",
  "DevOps & Tools",
  "Languages",
] as const;

function SkillChip({ skill }: { skill: skillsInterface }) {
  return (
    <div className="flex items-center gap-2 rounded-md border bg-background px-2.5 py-1.5 text-sm transition-colors hover:bg-muted/50">
      <skill.icon size={18} className="shrink-0 text-muted-foreground" />
      <span className="font-medium">{skill.name}</span>
    </div>
  );
}

export default function SkillsCard({
  skills,
  groupByCategory = false,
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
      <div className="space-y-5">
        {sortedCategories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          if (categorySkills.length === 0) return null;
          return (
            <section key={category}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill, id) => (
                  <SkillChip key={`${skill.name}-${id}`} skill={skill} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, id) => (
        <SkillChip key={`${skill.name}-${id}`} skill={skill} />
      ))}
    </div>
  );
}
