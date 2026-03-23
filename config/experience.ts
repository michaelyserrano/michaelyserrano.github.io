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
      "Worked within the Account Safety team to overcome critical training data bottlenecks and fragmented evaluation metrics. Spearheaded the transition from simple regression models trained on manual labels to deeper architectures utilizing programmatically generated datasets."
    ],
    achievements: [
      "Introduced and operationalized a Weak Supervision approach using Snorkel to programmatically generate massive datasets, effectively bypassing the manual labeling bottleneck.",
      "Architected a centralized MLOps ingestion workflow as a single source of truth, restoring trust in metrics and compressing the model release cycle from months to just one hour.",
      "Unlocked the ability to hot-swap models in production and deploy deeper architectures, improving alt-account detection recall from 94% to 96%."
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
      "Leading the continuous evolution of 'Savaal', an open-source AI quiz generation toolkit published by MIT researchers. Transitioning it from a deployed document-based assessment tool into an autonomous, voice-interactive educational agent."
    ],
    achievements: [
      "[ MEng ] Transitioning the platform into a dynamic agent capable of deep retrieval and Socratic oral exams using MCP and vNMF architectures.",
      "[ MEng ] Engineering a LangGraph state machine to orchestrate the agent's executive functions, including planning, memory, and decision-making.",
      "[ Undergrad ] Built and deployed a production monorepo (Next.js 15 + FastAPI + Celery) with agentic question generation — a PdfQuizAgent performs semantic retrieval, generation, self-critique, and curation in multi-step workflows.",
      "[ Undergrad ] Engineered core backend systems including pgvector semantic search, group-based access controls, source-text citations, SSE-based live streaming, and Weave observability for LLM tracing."
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
      "Researched and evaluated lightweight cryptographic algorithms to ensure secure medical device authentication and defend internet communications against quantum computing threats."
    ],
    achievements: [
      "Developed a custom TLS 1.3 protocol implementation featuring a post-quantum authentication signature.",
      "Identified and addressed vulnerabilities in data protection protocols to enhance overall cybersecurity against quantum attacks."
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
      "Conducted research on dynamic pricing strategies, specifically focusing on the application of reinforcement learning models to optimize algorithmic pricing."
    ],
    achievements: [
      "Designed and extracted comprehensive information on Deep Q-Network (DQN) algorithms for dynamic pricing.",
      "Implemented and evaluated the accuracy of simulations to systematically gauge the efficacy and profitability of various pricing strategies."
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
      "Developed machine learning solutions to optimize user matchmaking and event group partitioning, significantly enhancing algorithmic performance and user satisfaction."
    ],
    achievements: [
      "Built and trained a Graph Convolutional Network (GCN) model, alongside repurposing algorithms for synthetic data generation, to partition event attendees into highly compatible groups.",
      "Refactored the core matching algorithm codebase and documentation, yielding a 54x computational speed-up.",
      "Achieved a 99.2% group satisfaction rating from users through the deployment of the new ML matching algorithm."
    ],
    skills: ["Python", "PyTorch", "TensorFlow"],
    companyUrl: "https://www.betteroffsocial.com",
    logo: "/experience/betteroff_logo.png",
  },
];
