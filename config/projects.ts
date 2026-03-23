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
    type: "Startup",
    category: ["Full Stack", "Backend", "Product Strategy"],
    shortDescription:
      "CEO & Co-Founder of an AI-commerce infrastructure platform — wrapping arbitrary e-commerce websites in deterministic, agent-callable APIs via the Model Context Protocol so any AI agent can transact on them without custom integration.",
    websiteLink: "#",
    techStack: ["Go", "Typescript", "React", "Next.js", "PostgreSQL", "Redis", "Python", "Docker", "Playwright", "Three.js"],
    startDate: new Date("2025-11-01"),
    endDate: new Date(),
    companyLogoImg: "/projects/rindler/rindler_logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Rindler is the translation layer between AI and commerce. It wraps arbitrary e-commerce websites in deterministic, agent-callable APIs so any LLM agent can transact on them without requiring direct browser automation or custom per-site integration. The key insight is treating agent navigation as a distributed systems problem — not an AI problem. The platform is agent-agnostic by design — the MCP server is self-documenting enough that any model can use it correctly without custom prompt engineering.",
      ],
      bullets: [
        "[ Leadership ] Drive product vision, business strategy, fundraising, and go-to-market as CEO & Co-Founder.",
        "[ Backend ] Built a Go MCP server with OAuth 2.0 PKCE authentication, SSRF-safe proxy, and dual PostgreSQL databases for management and runtime data.",
        "[ Infrastructure ] Engineered a Playwright-based worker fleet with Redis task queues (asynq) for resilient, self-healing browser automation in ephemeral containers.",
        "[ Ingest Engine ] Designed the site-mapping pipeline: an interactive overlay captures user interactions and synthesizes them into Atomic Node schemas with guardrail, execution, sync, and rollback phases.",
        "[ Frontend ] Built the public site with React 19, Vite, Three.js, and Framer Motion, and an internal dashboard with Next.js 16 for backend testing and telemetry.",
        "[ Agent Testing ] Created a Python clean-room benchmarking arena with unified telemetry to compare browser automation agent frameworks. Shipt simulation validated the architecture: 4x faster (407s → 98s) and 6x cheaper ($1.54 → $0.26) than raw open-source agents.",
      ],
    },
  },
  {
    id: "charak",
    companyName: "Charak",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Lead Developer & Architect of a privacy-first medical AI platform for reasoning over fragmented health records. Built as a secure, offline-first desktop app with SMART on FHIR, multi-model LLM support (cloud and local), and vision-based document analysis.",
    techStack: ["Rust", "Typescript", "React", "Tailwind CSS", "Tauri", "Firebase"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/charak/charak_demo_1.png",
    pagesInfoArr: [
      {
        title: "FHIR Integration & Consent",
        description:
          "Patients securely authenticate with Epic, Cerner, and other healthcare providers via industry-standard SMART on FHIR. OAuth2/PKCE ensures credentials never touch the app — users exercise granular consent over exactly which records are imported into their local vault.",
        imgArr: [
          "/projects/charak/charak_demo_1.png",
          "/projects/charak/charak_demo_2.png",
        ],
      },
      {
        title: "Patient Dashboard",
        description:
          "A unified, time-series view of the patient's comprehensive medical history, cleanly normalized from multiple provider networks (Epic, Cerner) into one intuitive interface with FHIR R4 data standardization.",
        imgArr: [
          "/projects/charak/charak_demo_3.png",
        ],
      },
      {
        title: "Conversational Local AI",
        description:
          "A chat interface supporting side-by-side model comparison across cloud (Gemini, GPT-4o) and local runtimes (Ollama, LM Studio, llama.cpp, LocalAI). Patients query their encrypted medical context with full provenance — every AI answer cites the exact medical records used.",
        imgArr: [
          "/projects/charak/charak_demo_4.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Charak is a privacy-first, offline-capable desktop application for coherent medical reasoning over fragmented health records. Named after the ancient Indian physician Charaka, it empowers patients with complex conditions to aggregate data from multiple providers, track competing hypotheses, and prepare for clinical encounters — all without compromising data privacy. Patient data lives locally by default; cloud services are strictly opt-in.",
      ],
      bullets: [
        "[ Frontend ] Built a secure, cross-platform desktop client using Tauri 2 and React 19 with full offline functionality.",
        "[ Backend ] Engineered a Rust-based SMART on FHIR client handling OAuth2/PKCE flows, CORS-bypassing FHIR requests, and secure token storage for Epic and Cerner EHR systems.",
        "[ Data Pipeline ] Created local OCR and document extraction workflows using Tesseract.js and PDF.js with vision model support (LLaVA) for analyzing scanned medical documents entirely offline.",
        "[ AI Integration ] Unified four local model runtimes (Ollama, LM Studio, llama.cpp, LocalAI) with consent-gated cloud APIs (Gemini, GPT-4o), enabling side-by-side model comparison and fully offline operation.",
      ],
    },
  },
  {
    id: "conceptq",
    companyName: "ConceptQ",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "An MIT CSAIL research tool — a human-in-the-loop educational assessment generator that surfaces the AI's extracted knowledge structure for instructor review before question generation. Extracts concept dependency graphs from course materials and generates Bloom's Taxonomy–aligned quizzes via RAG.",
    techStack: ["Python", "FastAPI", "Typescript", "React", "Next.js", "PostgreSQL", "Redis", "Docker", "Celery"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-05-01"),
    companyLogoImg: "/projects/concept-q/conceptq_demo_1.png",
    pagesInfoArr: [
      {
        title: "ConceptQ Platform",
        description:
          "The landing experience introduces educators to the Human-in-the-Loop workflow, emphasizing human augmentation over autonomous AI generation.",
        imgArr: ["/projects/concept-q/conceptq_demo_1.png"],
      },
      {
        title: "Lecture Dashboard & Generation",
        description:
          "The central workspace where instructors upload PDFs, scanned images (with OCR), or plain text. The system extracts concepts via a map-reduce LLM pipeline, and instructors configure Bloom's Taxonomy parameters before generation.",
        imgArr: ["/projects/concept-q/conceptq_demo_2.png"],
      },
      {
        title: "The Calibration Interface",
        description:
          "An interactive React Flow canvas with Dagre auto-layout where educators act as the 'human-in-the-loop'. Instructors visually prune irrelevant concepts, rename nodes, and correct prerequisite edges — ensuring the AI's knowledge structure matches pedagogical intent before a single question is generated.",
        imgArr: ["/projects/concept-q/conceptq_demo_3.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "ConceptQ is a Human-in-the-Loop (HITL) educational workbench built to solve the alignment gap between LLM statistical probabilities and actual pedagogical intent. The core innovation is surfacing the AI's extracted knowledge structure for human review before question generation — instructors prune, rename, and restructure the concept graph on an interactive canvas, then questions are generated via RAG against source passages and streamed live to the browser.",
      ],
      bullets: [
        "[ Backend ] Built a two-service architecture with FastAPI and Celery workers orchestrated by Docker Compose, using dual PostgreSQL databases (frontend via Prisma, backend via SQLAlchemy) and Redis for task queuing and real-time event streaming.",
        "[ Data Engineering ] Engineered a map-reduce LLM pipeline to extract hierarchical concept graphs from documents, with NetworkX Louvain community detection for clustering and pgvector for semantic passage retrieval.",
        "[ Frontend ] Implemented a Next.js 14 interface with React Flow and Dagre for visual graph editing, live SSE-based question streaming, and role-based access control (Admin, User, Viewer).",
        "[ AI Integration ] Designed Bloom's Taxonomy-constrained prompts with RAG grounding to generate questions at multiple cognitive levels, with source-text citations for factual accuracy.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
