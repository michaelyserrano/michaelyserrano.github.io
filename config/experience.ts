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
      "Identified a critical training data bottleneck in the Account Safety team that forced the use of simple regression models and caused fragmented, untrustworthy metrics.",
      "Introduced and operationalized a Weak Supervision approach using Snorkel to programmatically generate massive datasets, effectively bypassing the manual labeling bottleneck.",
      "Architected a centralized MLOps ingestion workflow as a single source of truth, compressing the model release cycle from months to just one hour.",
      "Unlocked the ability to hot-swap models in production and deploy deeper architectures, improving alt-account detection recall from 94% to 96%.",
    ],
    achievements: [
      "Identified critical training data bottleneck; introduced Weak Supervision with Snorkel to generate large-scale labeled data and bypass manual labeling.",
      "Architected centralized MLOps ingestion workflow as single source of truth, reducing model release cycle from months to one hour.",
      "Enabled hot-swap of models in production and deeper architectures; improved alt-account detection recall from 94% to 96%.",
    ],
    skills: ["Python", "PyTorch", "TensorFlow", "AWS"],
    companyUrl: "https://www.roblox.com",
    logo: "/experience/roblox_logo.png",
  },
  {
    id: "mit-csail",
    position: "MEng Researcher, Agentic AI",
    company: "MIT CSAIL",
    location: "Cambridge, MA",
    startDate: new Date("2025-01-01"),
    endDate: "Present",
    description: [
      "Transitioning \"Savaal,\" a concept-driven question generation system, into an autonomous, stateful, and voice-interactive educational agent.",
      "The system is designed to diagnose conceptual gaps via deep retrieval and administer Socratic oral examinations.",
      "Implemented the Model Context Protocol (MCP) and Von Neumann Multi-Agent System (vNMF) architectures to transform the static tool into a dynamic agent.",
      "Utilized a LangGraph state machine to orchestrate the agent's executive functions, providing planning, memory, and decision-making capabilities.",
    ],
    achievements: [
      "Transitioning Savaal from concept-driven question generator to autonomous, stateful, voice-interactive educational agent.",
      "Implementing MCP and vNMF architectures to transform static tool into dynamic agent; deep retrieval and Socratic oral examinations.",
      "Orchestrating agent executive functions (planning, memory, decision-making) via LangGraph state machine.",
    ],
    skills: ["Python", "Typescript", "React", "Next.js"],
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
      "Assessed lightweight algorithms for medical device authentications and transmissions.",
      "Developed a TLS 1.3 protocol implementation featuring a post-quantum authentication signature.",
      "Focused on data protection to enhance internet communication cybersecurity against quantum attacks.",
    ],
    achievements: [
      "Assessed lightweight algorithms for medical device authentication and secure transmissions.",
      "Developed TLS 1.3 implementation with post-quantum authentication signature for quantum-resistant communication security.",
      "Focused on data protection to enhance cybersecurity against quantum attacks.",
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
      "Designed and extracted information on Deep Q-Network dynamic pricing algorithms.",
      "Implemented and assessed the accuracy of simulations that gauge the efficacy of pricing strategies.",
    ],
    achievements: [
      "Designed and extracted information on DQN dynamic pricing algorithms.",
      "Implemented and assessed simulation accuracy for evaluating pricing strategy efficacy.",
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
      "Built and trained a GCN model to partition event attendees into compatible groups.",
      "Repurposed pre-existing algorithms to generate synthetic data for model training.",
      "Refactored matching algorithm codebase and documentation, yielding a 54x speed-up.",
      "Yielded a 99.2% group satisfaction rating from users with the ML matching algorithm.",
    ],
    achievements: [
      "Built and trained a GCN model to partition event attendees into compatible groups.",
      "Repurposed pre-existing algorithms for synthetic data generation; refactored matching codebase and docs for 54x speed-up.",
      "Achieved 99.2% group satisfaction rating from users with the ML matching algorithm.",
    ],
    skills: ["Python", "PyTorch", "TensorFlow"],
    companyUrl: "https://www.betteroffsocial.com",
    logo: "/experience/betteroff_logo.png",
  },
];
