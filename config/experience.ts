import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "roblox",
    position: "Machine Learning Intern",
    company: "Roblox",
    location: "San Mateo, CA",
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-08-01"),
    description: [
      "Account Safety team. The team was bottlenecked by small, manually labeled datasets that forced simple regression models (anything deeper would overfit), and fragmented notebooks made metrics unreliable."
    ],
    achievements: [
      "Introduced Weak Supervision (Snorkel) to programmatically generate training data at scale, removing the manual labeling bottleneck entirely.",
      "Built a centralized MLOps ingestion workflow as a single source of truth. Restored trust in metrics and compressed the model release cycle from months to one hour.",
      "With larger datasets available, deployed deeper architectures and enabled hot-swapping models in production. Alt-account detection recall improved from 94% to 96%."
    ],
    skills: ["Python", "PyTorch", "TensorFlow", "AWS"],
    companyUrl: "https://www.roblox.com",
    logo: "/experience/roblox_logo.png",
  },
  {
    id: "mit-csail",
    position: "Researcher, Agentic AI",
    company: "MIT CSAIL",
    location: "Cambridge, MA",
    startDate: new Date("2025-01-01"),
    endDate: "Present",
    description: [
      "Working on Savaal, an open-source AI quiz generation toolkit. Started as the developer who built and shipped the original web app, now leading its transition into an autonomous voice-interactive educational agent."
    ],
    achievements: [
      "[ MEng ] Building an agent that can conduct Socratic oral exams with deep retrieval, using MCP and vNMF architectures.",
      "[ MEng ] Designing a LangGraph state machine for the agent's planning, memory, and decision-making.",
      "[ Undergrad ] Built and deployed the full-stack web app (Next.js 15 + FastAPI + Celery). The PdfQuizAgent does retrieval, generation, self-critique, and curation in a multi-step loop.",
      "[ Undergrad ] Built pgvector semantic search, group-based access controls, source-text citations, live SSE streaming, and Weave-based LLM tracing."
    ],
    skills: ["Python", "Typescript", "React", "Next.js", "PostgreSQL", "FastAPI", "Redis", "Docker"],
    companyUrl: "https://www.csail.mit.edu",
    logo: "/experience/csail_logo.jpg",
  },
  {
    id: "ipn",
    position: "Researcher, Post-Quantum Cryptography",
    company: "Instituto Politécnico Nacional",
    location: "Mexico City, Mexico",
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-09-01"),
    description: [
      "Researched post-quantum cryptographic algorithms for securing medical device authentication against future quantum computing attacks."
    ],
    achievements: [
      "Built a custom TLS 1.3 implementation with a post-quantum authentication signature.",
      "Found and documented vulnerabilities in existing data protection protocols under quantum threat models."
    ],
    skills: ["Python", "Typescript"],
    companyUrl: "https://www.ipn.mx",
    logo: "/experience/IPN_logo.png",
  },
  {
    id: "mit-sloan",
    position: "Research Assistant, Algorithmic Pricing",
    company: "MIT Sloan School of Management",
    location: "Cambridge, MA",
    startDate: new Date("2023-01-02"),
    endDate: new Date("2023-05-01"),
    description: [
      "Research on using reinforcement learning for dynamic pricing strategies."
    ],
    achievements: [
      "Surveyed and implemented Deep Q-Network (DQN) approaches for algorithmic pricing.",
      "Built pricing simulations and evaluated how different RL strategies performed on profitability metrics."
    ],
    skills: ["Python", "TensorFlow", "PyTorch"],
    companyUrl: "https://mitsloan.mit.edu",
    logo: "/experience/MITSloan_logo.png",
  },
  {
    id: "better-off-social",
    position: "Machine Learning Intern",
    company: "Better Off Social",
    location: "New York City, NY",
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-08-01"),
    description: [
      "Built ML models for matchmaking and event group partitioning at a social events startup."
    ],
    achievements: [
      "Trained a Graph Convolutional Network (GCN) to partition event attendees into compatible groups, using synthetic data generation to supplement limited real data.",
      "Refactored the core matching algorithm. 54x speed-up.",
      "Deployed the new algorithm to production. 99.2% group satisfaction rating from users."
    ],
    skills: ["Python", "PyTorch", "TensorFlow"],
    companyUrl: "https://www.betteroffsocial.com",
    logo: "/experience/betteroff_logo.png",
  },
];
