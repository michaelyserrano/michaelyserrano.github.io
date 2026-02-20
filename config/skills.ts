import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Primary language for ML pipelines, research, and backend services.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "PyTorch",
    description:
      "Deep learning and graph neural networks for research and production models.",
    rating: 5,
    icon: Icons.pytorch,
  },
  {
    name: "TensorFlow",
    description:
      "Building and deploying scalable machine learning models.",
    rating: 5,
    icon: Icons.tensorflow,
  },
  {
    name: "scikit-learn",
    description:
      "Classical ML, preprocessing, and model evaluation.",
    rating: 5,
    icon: Icons.laptop,
  },
  {
    name: "Pandas",
    description:
      "Data manipulation, analysis, and feature engineering.",
    rating: 5,
    icon: Icons.laptop,
  },
  {
    name: "NumPy",
    description:
      "Numerical computing and array operations for ML and research.",
    rating: 5,
    icon: Icons.laptop,
  },
  {
    name: "Snorkel (Weak Supervision)",
    description:
      "Programmatic labeling and weak supervision for large-scale training data.",
    rating: 4,
    icon: Icons.laptop,
  },
  {
    name: "OpenCV",
    description:
      "Computer vision and image processing for ML pipelines.",
    rating: 4,
    icon: Icons.laptop,
  },
  {
    name: "TypeScript",
    description:
      "Type-safe frontend and full-stack development with React and Next.js.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "React",
    description:
      "Building interactive UIs and full-stack web applications.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Full-stack React framework with SSR, routing, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "Node.js",
    description:
      "Server-side JavaScript for APIs and tooling.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "FastAPI",
    description:
      "High-performance Python APIs for ML and web services.",
    rating: 5,
    icon: Icons.laptop,
  },
  {
    name: "SQL",
    description:
      "Database design, queries, and analytics for structured data.",
    rating: 5,
    icon: Icons.mysql,
  },
  {
    name: "PostgreSQL",
    description:
      "Relational database for production applications and analytics.",
    rating: 5,
    icon: Icons.mysql,
  },
  {
    name: "Docker",
    description:
      "Containerization and reproducible deployment of ML and web services.",
    rating: 4,
    icon: Icons.docker,
  },
  {
    name: "Git",
    description:
      "Version control, collaboration, and CI/CD workflows.",
    rating: 5,
    icon: Icons.github,
  },
  {
    name: "English",
    description: "Native",
    rating: 5,
    icon: Icons.user,
  },
  {
    name: "Spanish",
    description: "Fluent",
    rating: 5,
    icon: Icons.user,
  },
  {
    name: "Chinese",
    description: "Beginner",
    rating: 2,
    icon: Icons.user,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
