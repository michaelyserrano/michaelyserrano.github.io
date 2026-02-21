import type { SpotlightTabId } from "@/lib/spotlight-tab-url";
import { Projects } from "@/config/projects";
import { experiences } from "@/config/experience";
import { skills } from "@/config/skills";
import { education } from "@/config/education";

/** URL-safe slug: lowercase, spaces to hyphen. Keeps dots (e.g. "Next.js" → "next.js"). */
export function slugify(s: string): string {
  return s.toLowerCase().replace(/\s+/g, "-").trim();
}

export interface SpotlightTarget {
  tab: SpotlightTabId;
  cardId: string;
  label: string;
  keywords: string[];
}

export function getSpotlightTargets(): SpotlightTarget[] {
  const targets: SpotlightTarget[] = [];

  for (const project of Projects) {
    targets.push({
      tab: "projects",
      cardId: project.id,
      label: project.companyName,
      keywords: [project.companyName, project.id],
    });
  }

  for (const exp of experiences) {
    const keywords = [exp.company, exp.id];
    if (exp.id === "mit-csail") keywords.push("Savaal", "savaal");
    targets.push({
      tab: "experience",
      cardId: exp.id,
      label: exp.company,
      keywords,
    });
  }

  for (const skill of skills) {
    const slug = slugify(skill.name);
    targets.push({
      tab: "skills",
      cardId: slug,
      label: skill.name,
      keywords: [skill.name, slug],
    });
  }

  for (const entry of education) {
    targets.push({
      tab: "education",
      cardId: entry.id,
      label: entry.institution,
      keywords: [entry.institution, entry.id],
    });
  }

  return targets;
}
