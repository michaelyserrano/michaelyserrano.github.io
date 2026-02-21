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
      "Co-founder of an agentic web navigation tool — defining vision, business strategy, fundraising, and leading product and frontend architecture with agent telemetry for self-healing execution.",
    websiteLink: "#",
    techStack: ["Typescript", "React", "Next.js", "Node.js", "AWS"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Vision & Product",
        description:
          "Company vision, business strategy, fundraising roadmap, and agent telemetry for user and agent interaction analysis to inform self-healing execution.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Rindler is an agentic web navigation tool I co-founded. I define the company's overarching vision, business strategy, and fundraising roadmap. I lead the product experience and frontend architecture by building the robust user interface. I develop the agent telemetry tools designed to capture and analyze user and agent interactions on client sites to inform self-healing execution.",
      ],
      bullets: [
        "Define the company's overarching vision, business strategy, and fundraising roadmap for an agentic web navigation tool.",
        "Lead the product experience and frontend architecture by building the robust user interface.",
        "Develop the agent telemetry tools designed to capture and analyze user and agent interactions on client sites to inform self-healing execution.",
      ],
    },
  },
  {
    id: "charak",
    companyName: "Charak",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Lead Developer & Architect of a patient-first medical AI platform for reasoning over fragmented health records. Built as a secure, local-first desktop app with SMART on FHIR and multi-model LLM integrations.",
    techStack: ["Rust", "Typescript", "React", "Tailwind CSS", "Tauri"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"), // Consider updating to "Present" if your type supports it, or extending the date
    companyLogoImg: "/projects/charak/charak_demo_1.png",
    pagesInfoArr: [
      {
        title: "FHIR Integration & Consent",
        description:
          "Engineered a SMART on FHIR integration using Rust to securely authenticate and fetch data from provider portals (like Epic/MyChart), ensuring patients have granular control over what information they share.",
        imgArr: [
          "/projects/charak/charak_demo_1.png", // Logging into MyChart
          "/projects/charak/charak_demo_2.png", // Sharing information/Consent
        ],
      },
      {
        title: "Patient Dashboard",
        description:
          "Architected a local-first desktop system where all aggregated medical data is normalized into a time-series-friendly format, allowing patients to easily view their health records securely on-device.",
        imgArr: [
          "/projects/charak/charak_demo_3.png", // Seeing patient information
        ],
      },
      {
        title: "Conversational Local AI",
        description:
          "Developed a conversational RAG interface supporting a dynamic multi-model LLM architecture. By utilizing local models, patients can ask complex questions and receive tailored, hypothesis-driven advice without their data ever leaving their machine.",
        imgArr: [
          "/projects/charak/charak_demo_4.png", // Asking local models for advice
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I am the Lead Developer and Architect of Charak, a private, patient-first platform designed to support coherent medical reasoning over fragmented health records. I am spearheading the product's overarching vision to help patients with complex conditions make sense of their medical history, track competing hypotheses, and prepare for clinical encounters without compromising their data privacy.",
        "To achieve strict privacy constraints, I architected Charak as a local-first desktop application utilizing Tauri 2, React 19, and a Rust backend. I engineered a robust SMART on FHIR integration to securely retrieve records from major provider portals, alongside custom OCR and PDF extraction pipelines for unstructured medical documents.",
        "For the core reasoning engine, I built a flexible, multi-model LLM integration. By default, the system utilizes local runtimes like Ollama and LM Studio for completely offline, encrypted data processing. For advanced reasoning tasks, I implemented a consent-gated mechanism to securely interface with cloud models like Gemini 2.5 Pro and OpenAI, ensuring patients maintain absolute control over their medical context."
      ],
      bullets: [
        "Spearhead the technical architecture and product vision for a patient-first AI platform designed to aggregate and synthesize fragmented medical records.",
        "Built a cross-platform desktop application using Tauri 2, React 19, and Rust, ensuring all medical data remains securely encrypted on the user's local device.",
        "Engineered a SMART on FHIR integration layer in Rust to handle OAuth2/PKCE flows, successfully extracting and normalizing structured data from provider sandboxes like Epic and Cerner.",
        "Developed custom document ingestion pipelines utilizing PDF.js and Tesseract.js (OCR) to extract text and images from unstructured medical files for vision-model analysis.",
        "Implemented a dynamic, multi-model LLM architecture supporting offline local reasoning via Ollama and LM Studio, alongside consent-gated cloud integrations for Gemini and OpenAI."
      ],
    },
  },
  {
    id: "hitl-graphrag",
    companyName: "HITL-GraphRAG (SERC)",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Human-in-the-Loop GraphRAG prototype at MIT: Bloom's Taxonomy–aligned questions from course materials, map-reduce LLM pipeline, and interactive React Flow canvas with Dagre for multi-document RAG.",
    techStack: ["Python", "Typescript", "React", "Next.js"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "GraphRAG & Canvas",
        description:
          "Map-reduce LLM pipeline for concept knowledge graphs from multi-format documents; React Flow canvas with Dagre for pruning concepts and wiring prerequisite edges.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Built a Human-in-the-Loop GraphRAG prototype at MIT to generate Bloom's Taxonomy–aligned educational questions from course materials. Engineered a map-reduce LLM pipeline that extracts concept knowledge graphs from multi-format documents, including PDFs, plain text, and OCR-scanned images. Developed an interactive React Flow canvas with Dagre hierarchical positioning, allowing instructors to visually prune concepts and wire prerequisite edges before executing multi-document RAG.",
      ],
      bullets: [
        "Built a Human-in-the-Loop GraphRAG prototype at MIT to generate Bloom's Taxonomy–aligned educational questions from course materials.",
        "Engineered a map-reduce LLM pipeline that extracts concept knowledge graphs from multi-format documents, including PDFs, plain text, and OCR-scanned images.",
        "Developed an interactive React Flow canvas with Dagre hierarchical positioning, allowing instructors to visually prune concepts and wire prerequisite edges before executing multi-document RAG.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
