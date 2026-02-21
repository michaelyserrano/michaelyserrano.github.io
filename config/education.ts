export interface DegreeEntry {
  /** Degree type, e.g. "Master of Engineering (MEng)" or "Bachelor of Science" */
  type: string;
  /** Major(s), e.g. "Computer Science" or "Computer Science, Economics, and Data Science" */
  major: string;
  /** Expected graduation, e.g. "August 2026" */
  expected?: string;
}

export interface CourseworkGroup {
  category: string;
  courses: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  location: string;
  degrees: DegreeEntry[];
  coursework?: CourseworkGroup[];
  /** Optional logo path (e.g. "/experience/MIT_logo.png") for visual anchor */
  logo?: string;
}

export const education: EducationEntry[] = [
  {
    id: "mit",
    institution: "Massachusetts Institute of Technology (MIT)",
    location: "Cambridge, MA",
    logo: "/experience/MIT_logo.png",
    degrees: [
      {
        type: "Master of Engineering",
        major: "Computer Science, Economics, and Data Science",
        expected: "May 2026",
      },
      {
        type: "Bachelor of Science",
        major: "Computer Science, Economics, and Data Science",
        expected: "Dec 2025",
      },
      {
        type: "Bachelor of Science",
        major: "Physics",
        expected: "Dec 2025",
      },
    ],
    coursework: [
      {
        category: "Computer Science & AI",
        courses: [
          "Machine Learning",
          "Advanced Algorithms",
          "Optimization Methods",
          "Ethical ML",
          "Inference and Causal ML",
          "Multimodal AI",
          "Mathematical Modeling",
          "Numerical Algorithms for ML",
          "Statistics",
        ],
      },
      {
        category: "Economics",
        courses: [
          "Microeconomics & Public Policy",
          "Game Theory",
          "Econometrics",
          "Behavioral Economics",
          "Labor Economics",
          "International Cooperation",
          "Industrial Organization",
          "Corporate Finance",
        ],
      },
      {
        category: "Physics",
        courses: [
          "Quantum Physics",
          "Statistical Mechanics",
          "Special Relativity",
          "Wave Mechanics",
          "Advanced Classical Mechanics",
          "Experimental Physics",
        ],
      },
    ],
  },
];
