import { Icons } from "@/components/common/icons";

export type SkillCategory =
  | "Machine Learning & Data"
  | "Frontend & Full-Stack"
  | "Backend & Databases"
  | "DevOps & Tools"
  | "Languages";

export interface skillsInterface {
  name: string;
  description: string;
  icon: any;
  category: SkillCategory;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description: "ML pipelines, research, backend services.",
    icon: Icons.python,
    category: "Machine Learning & Data",
  },
  {
    name: "PyTorch",
    description: "Deep learning, graph neural networks.",
    icon: Icons.pytorch,
    category: "Machine Learning & Data",
  },
  {
    name: "TensorFlow",
    description: "Scalable ML models.",
    icon: Icons.tensorflow,
    category: "Machine Learning & Data",
  },
  {
    name: "scikit-learn",
    description: "Classical ML, preprocessing, evaluation.",
    icon: Icons.laptop,
    category: "Machine Learning & Data",
  },
  {
    name: "Pandas",
    description: "Data manipulation and feature engineering.",
    icon: Icons.laptop,
    category: "Machine Learning & Data",
  },
  {
    name: "NumPy",
    description: "Numerical computing for ML and research.",
    icon: Icons.laptop,
    category: "Machine Learning & Data",
  },
  {
    name: "LangChain",
    description: "LLM applications and chains.",
    icon: Icons.laptop,
    category: "Machine Learning & Data",
  },
  {
    name: "Matplotlib",
    description: "Data visualization and plotting.",
    icon: Icons.laptop,
    category: "Machine Learning & Data",
  },
  {
    name: "Seaborn",
    description: "Statistical data visualization.",
    icon: Icons.laptop,
    category: "Machine Learning & Data",
  },
  {
    name: "OpenCV",
    description: "Computer vision and image processing.",
    icon: Icons.laptop,
    category: "Machine Learning & Data",
  },
  {
    name: "TypeScript",
    description: "Type-safe frontend and full-stack.",
    icon: Icons.typescript,
    category: "Frontend & Full-Stack",
  },
  {
    name: "React",
    description: "Interactive UIs and web applications.",
    icon: Icons.react,
    category: "Frontend & Full-Stack",
  },
  {
    name: "Next.js",
    description: "Full-stack React, SSR, API routes.",
    icon: Icons.nextjs,
    category: "Frontend & Full-Stack",
  },
  {
    name: "Node.js",
    description: "Server-side JavaScript, APIs, tooling.",
    icon: Icons.nodejs,
    category: "Frontend & Full-Stack",
  },
  {
    name: "Tailwind",
    description: "Utility-first CSS framework.",
    icon: Icons.tailwindcss,
    category: "Frontend & Full-Stack",
  },
  {
    name: "Go",
    description: "High-performance backend services and MCP servers.",
    icon: Icons.laptop,
    category: "Backend & Databases",
  },
  {
    name: "Rust",
    description: "Secure, high-performance systems and desktop apps.",
    icon: Icons.laptop,
    category: "Backend & Databases",
  },
  {
    name: "FastAPI",
    description: "High-performance Python APIs.",
    icon: Icons.laptop,
    category: "Backend & Databases",
  },
  {
    name: "Celery",
    description: "Distributed task queues for async processing.",
    icon: Icons.laptop,
    category: "Backend & Databases",
  },
  {
    name: "SQL",
    description: "Database design, queries, analytics.",
    icon: Icons.mysql,
    category: "Backend & Databases",
  },
  {
    name: "PostgreSQL",
    description: "Relational DB for production.",
    icon: Icons.mysql,
    category: "Backend & Databases",
  },
  {
    name: "Redis",
    description: "In-memory cache and data store.",
    icon: Icons.laptop,
    category: "Backend & Databases",
  },
  {
    name: "Kafka",
    description: "Event streaming and message broker.",
    icon: Icons.laptop,
    category: "Backend & Databases",
  },
  {
    name: "Docker",
    description: "Containerization and deployment.",
    icon: Icons.docker,
    category: "DevOps & Tools",
  },
  {
    name: "Git",
    description: "Version control and CI/CD.",
    icon: Icons.github,
    category: "DevOps & Tools",
  },
  {
    name: "Cloudflare Workers",
    description: "Edge serverless and workers.",
    icon: Icons.laptop,
    category: "DevOps & Tools",
  },
  {
    name: "English",
    description: "Native",
    icon: Icons.user,
    category: "Languages",
  },
  {
    name: "Spanish",
    description: "Fluent",
    icon: Icons.user,
    category: "Languages",
  },
  {
    name: "Chinese",
    description: "Beginner",
    icon: Icons.user,
    category: "Languages",
  },
];

const categoryOrder: SkillCategory[] = [
  "Machine Learning & Data",
  "Frontend & Full-Stack",
  "Backend & Databases",
  "DevOps & Tools",
  "Languages",
];

export const skills = skillsUnsorted;

export const skillsByCategory = categoryOrder.map((category) => ({
  category,
  skills: skills.filter((s) => s.category === category),
}));

export const featuredSkills = skills.slice(0, 6);
