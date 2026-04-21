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
      "CEO & Co-Founder. Rindler turns any e-commerce website into a structured API that AI agents can use to browse, search, and buy, without the site needing to change anything. Built on the Model Context Protocol.",
    websiteLink: "#",
    techStack: ["Go", "Typescript", "React", "Next.js", "PostgreSQL", "Redis", "Python", "Docker", "Playwright", "Three.js", "CI/CD", "GitHub Actions", "Sentry", "Cloudflare", "Railway", "Clerk", "Vite", "Tailwind CSS"],
    startDate: new Date("2025-11-01"),
    endDate: new Date(),
    companyLogoImg: "/projects/rindler/rindler_logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Rindler turns any e-commerce website into a clean API that AI agents can transact through, no custom integration or per-site wrappers needed. We treat agent navigation as a distributed systems problem, not an AI problem: most agent failures come from brittle browser state, not bad reasoning. The MCP server is agent-agnostic. Any model can pick up our tools and use them correctly without special prompting.",
      ],
      bullets: [
        "[ Leadership ] Product vision, business strategy, fundraising, and go-to-market.",
        "[ Backend ] Go MCP server with OAuth 2.0 PKCE, JWT authentication, AES-256-GCM cookie encryption, SSRF-safe proxy, and dual PostgreSQL databases (control plane + data plane).",
        "[ Infrastructure ] Playwright worker fleet with Redis/asynq priority queues and ephemeral browser containers. Deployed on Railway with Cloudflare Pages/Workers at the edge. GitHub Actions CI/CD gates PRs before auto-deploy.",
        "[ Reliability ] Sentry error tracking with panic recovery middleware, structured logging (slog) with breadcrumbs, sliding-window rate limiting, and a self-healing ClickResilient execution loop with automatic fallback promotion.",
        "[ Ingest Engine ] 5-stage data pipeline (discover, analyze, assemble, score, write) that captures user interactions via an interactive overlay and converts them into Atomic Node schemas (guardrail → execution → sync → rollback).",
        "[ Frontend ] Public site (React 19, Vite, Three.js, Framer Motion, Tailwind CSS) and internal dashboard (Next.js 16, Clerk auth) with real-time session monitoring, usage analytics, and auto-provisioning.",
        "[ AI/ML Engineering ] MCP protocol server built from scratch, Claude API integration, LLM-driven site analysis, agent-agnostic tool design, and Playwright browser automation with tiered bot-detection evasion and residential proxy routing.",
        "[ Agent Testing ] Python benchmarking arena for comparing browser automation agents. Shipt simulation: 4x faster (407s → 98s), 6x cheaper ($1.54 → $0.26) vs. raw open-source agents.",
      ],
    },
  },
  {
    id: "charak",
    companyName: "Charak",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Lead Developer & Architect. A desktop app that pulls your health records from Epic, Cerner, and other providers into one place, then lets you chat with local or cloud AI models about your own medical history. Works fully offline.",
    techStack: ["Rust", "Typescript", "React", "Tailwind CSS", "Tauri", "Firebase"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/charak/charak_demo_1.png",
    pagesInfoArr: [
      {
        title: "FHIR Integration & Consent",
        description:
          "Patients log in to their healthcare providers (Epic, Cerner, etc.) through SMART on FHIR. Credentials never touch the app since OAuth2/PKCE handles everything. Users choose exactly which records to import.",
        imgArr: [
          "/projects/charak/charak_demo_1.png",
          "/projects/charak/charak_demo_2.png",
        ],
      },
      {
        title: "Patient Dashboard",
        description:
          "All your medical history from different providers, normalized into a single timeline. Conditions, medications, labs, and procedures across networks show up in one view.",
        imgArr: [
          "/projects/charak/charak_demo_3.png",
        ],
      },
      {
        title: "Conversational Local AI",
        description:
          "Chat with AI about your health records using cloud models (Gemini, GPT-4o) or fully local ones (Ollama, LM Studio, llama.cpp). Compare models side-by-side. Every answer cites the specific records it drew from.",
        imgArr: [
          "/projects/charak/charak_demo_4.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Charak is a desktop app that helps patients make sense of their scattered health records. Named after the ancient Indian physician Charaka, it aggregates data from multiple healthcare providers, lets you ask AI questions about your own medical history, and keeps everything on your device by default. Cloud is opt-in, never required.",
      ],
      bullets: [
        "[ Frontend ] Cross-platform desktop client with Tauri 2 and React 19. Works fully offline.",
        "[ Backend ] Rust-based SMART on FHIR client that handles OAuth2/PKCE, bypasses CORS for FHIR requests, and stores tokens securely. Tested against Epic and Cerner sandboxes.",
        "[ Data Pipeline ] Local OCR (Tesseract.js) and PDF extraction (PDF.js) for scanned documents. Vision models like LLaVA can analyze medical images without leaving the device.",
        "[ AI Integration ] Supports four local runtimes (Ollama, LM Studio, llama.cpp, LocalAI) and cloud APIs (Gemini, GPT-4o). Models can be compared side-by-side on the same query.",
      ],
    },
  },
  {
    id: "conceptq",
    companyName: "ConceptQ",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "An MIT CSAIL research tool. Instructors upload course materials, the system extracts a concept graph, and instructors edit it on a visual canvas before any quiz questions are generated. Questions are Bloom's Taxonomy-aligned and grounded in the source text.",
    techStack: ["Python", "FastAPI", "Typescript", "React", "Next.js", "PostgreSQL", "Redis", "Docker", "Celery"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-05-01"),
    companyLogoImg: "/projects/concept-q/conceptq_demo_1.png",
    pagesInfoArr: [
      {
        title: "ConceptQ Platform",
        description:
          "The landing page explains the workflow: upload materials, review the extracted concept graph, then generate questions. The instructor stays in control at every step.",
        imgArr: ["/projects/concept-q/conceptq_demo_1.png"],
      },
      {
        title: "Lecture Dashboard & Generation",
        description:
          "Instructors upload PDFs, scanned images (with OCR), or plain text. The system extracts concepts through a map-reduce LLM pipeline, and instructors pick Bloom's Taxonomy levels before generating questions.",
        imgArr: ["/projects/concept-q/conceptq_demo_2.png"],
      },
      {
        title: "The Calibration Interface",
        description:
          "An interactive React Flow canvas with Dagre auto-layout. Instructors prune irrelevant concepts, rename nodes, and fix prerequisite edges so the graph actually matches what they teach before any questions are generated.",
        imgArr: ["/projects/concept-q/conceptq_demo_3.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "ConceptQ lets instructors review and edit the AI's understanding of their course material before any quiz questions are generated. The system extracts a concept graph from uploaded documents, instructors fix it on a visual canvas, and then questions are generated via RAG against the actual source text. Questions stream live to the browser as they're created.",
      ],
      bullets: [
        "[ Backend ] Two-service architecture: FastAPI + Celery workers, orchestrated with Docker Compose. Dual PostgreSQL databases (Prisma for frontend, SQLAlchemy for backend) and Redis for task queues and event streaming.",
        "[ Data Engineering ] Map-reduce LLM pipeline extracts concept graphs from documents. NetworkX handles community detection (Louvain) for clustering, pgvector handles semantic passage retrieval.",
        "[ Frontend ] Next.js 14 with React Flow and Dagre for the graph editor. Questions stream live via SSE. Role-based access control (Admin, User, Viewer).",
        "[ AI Integration ] Bloom's Taxonomy-constrained prompts with RAG grounding. Questions cite their source passages for traceability.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
