import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "rindler",
    companyName: "Rindler",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "Backend"],
    shortDescription:
      "Co-founder of an agentic web navigation tool. Co-designed the core server infrastructure and scalable agent runtime, while leading MVP development and frontend architecture.",
    websiteLink: "#",
    techStack: [
      "Typescript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Go",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/rindler/rindler_logo.png",
    pagesInfoArr: [
      {
        title: "MVP & Telemetry Architecture",
        description:
          "Engineered the frontend experience and telemetry pipelines to capture high-fidelity interaction data, directly feeding the system's self-healing backup strategies.",
        imgArr: [],
      },
      {
        title: "Server & Agent Runtime",
        description:
          "Co-designed a scalable, Go-based worker fleet and execution environment integrating MCP to seamlessly and securely connect AI agents with target web interfaces.",
        imgArr: [],
      },
      {
        title: "Infrastructure & Data Isolation",
        description:
          "Built with an enterprise-grade architecture featuring strict control and data plane isolation (PostgreSQL), and auto-scaling worker queues (Redis) for pristine, isolated session management.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I contribute to the company's overarching vision, business strategy, and fundraising roadmap. My technical focus is driving execution and the core product experience. I spearheaded the initial MVP and engineered comprehensive telemetry tools that capture user and agent interactions on client sites, transforming them into reliable action nodes that inform the platform's self-healing execution pathways.",
        "Beyond the client-facing systems, I co-designed the server infrastructure. This involved structuring an Ingest Engine for robust schema generation and a scalable, Go-based Agent Runtime. This runtime utilizes the Model Context Protocol (MCP) and secure ephemeral containers to safely bridge AI agents with complex web applications.",
      ],
      bullets: [],
    },
  },
  {
    id: "charak",
    companyName: "Charak",
    type: "Personal",
    category: ["Full Stack", "Frontend", "Backend"],
    shortDescription:
      "Lead Developer & Architect of a patient-first medical AI platform that reasons over fragmented health records. Built as a secure, local-first desktop application featuring multi-model LLM integrations.",
    techStack: ["Rust", "Typescript", "React", "Tailwind CSS", "Tauri"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"), // Consider updating to "Present" if your type supports it, or extending the date
    companyLogoImg: "/projects/charak/charak_demo_1.png",
    pagesInfoArr: [
      {
        title: "FHIR Integration & Consent",
        description:
          "Secure authentication and data fetching from portals like Epic and MyChart, giving patients granular control over shared information.",
        imgArr: [
          "/projects/charak/charak_demo_1.png", // Logging into MyChart
          "/projects/charak/charak_demo_2.png", // Sharing information/Consent
        ],
      },
      {
        title: "Patient Dashboard",
        description:
          "Normalizes aggregated medical data into a time-series format for comprehensive, on-device viewing.",
        imgArr: [
          "/projects/charak/charak_demo_3.png", // Seeing patient information
        ],
      },
      {
        title: "Conversational Local AI",
        description:
          "A RAG interface supporting complex, hypothesis-driven Q&A without data ever leaving the user's machine.",
        imgArr: [
          "/projects/charak/charak_demo_4.png", // Asking local models for advice
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I engineered a robust SMART on FHIR integration to securely retrieve records from provider portals, paired with custom OCR pipelines for unstructured documents. The system defaults to local runtimes (Ollama, LM Studio) for completely offline processing, while offering a consent-gated mechanism for advanced reasoning via cloud models (Gemini 2.5 Pro, OpenAI) so patients retain absolute control over their medical context.",
      ],
      bullets: [],
    },
  },
  {
    id: "conceptq",
    companyName: "ConceptQ",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "An educational assessment generator built at MIT SERC that mitigates AI hallucination by anchoring generation to human-curated concept dependency graphs.",
    techStack: [
      "Python",
      "FastAPI",
      "Typescript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-05-01"),
    companyLogoImg: "/projects/concept-q/conceptq_demo_1.png",
    pagesInfoArr: [
      {
        title: "ConceptQ Platform",
        description:
          "The landing experience designed to bridge the gap between statistical AI generation and actual pedagogical intent.",
        imgArr: ["/projects/concept-q/conceptq_demo_1.png"],
      },
      {
        title: "Lecture Dashboard & Generation",
        description:
          "The primary workspace where instructors upload materials and configure Bloom's Taxonomy–level prompts to generate targeted multiple-choice questions.",
        imgArr: ["/projects/concept-q/conceptq_demo_2.png"],
      },
      {
        title: "The Calibration Interface",
        description:
          "An interactive graph editor allowing users to visually prune irrelevant concepts and correct prerequisite edges before finalizing assessments.",
        imgArr: ["/projects/concept-q/conceptq_demo_3.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "ConceptQ is a Human-in-the-Loop (HITL) workbench that shifts the focus from autonomous generation to human augmentation. I engineered a map-reduce LLM pipeline that parses multi-format documents (PDF, OCR) into structured adjacency lists, backed by a sub-second, in-memory vector store utilizing sentence-aware chunking and cosine similarity.",
      ],
      bullets: [],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
