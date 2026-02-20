export interface EducationEntry {
  id: string;
  institution: string;
  location: string;
  degrees: string[];
  researchFocus?: string;
  coursework?: string[];
}

export const education: EducationEntry[] = [
  {
    id: "mit",
    institution: "Massachusetts Institute of Technology (MIT)",
    location: "Cambridge, MA",
    degrees: [
      "Master of Engineering (MEng) in Computer Science (Expected August 2026)",
      "Bachelor of Science in Computer Science, Economics, and Data Science & Bachelor of Science in Physics (Expected June 2026)",
    ],
    researchFocus:
      "Agentic AI architectures, human-in-the-loop (HITL) educational engines, and private, local-first medical LLMs.",
    coursework: [
      "Introduction to Machine Learning",
      "Introduction to Algorithms",
      "Optimization Methods in Business Analytics",
      "Microeconomic Theory and Public Policy",
      "Game Theory for Strategic Advantage",
    ],
  },
];
