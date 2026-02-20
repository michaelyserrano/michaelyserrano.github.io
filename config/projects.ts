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
      "Private, patient-first platform for coherent medical reasoning over fragmented health records — desktop, local-first, encrypted by default with conversational RAG on local LLMs.",
    techStack: ["Python", "Typescript", "React", "FastAPI", "PostgreSQL"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Local-First & RAG",
        description:
          "Desktop system with no cloud backend; medical data encrypted on device; conversational interface with retrieval-augmented reasoning on local LLMs.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Charak is a private, patient-first platform I developed to support coherent medical reasoning over fragmented health records. I architected a desktop system without a cloud backend, keeping medical data encrypted on the patient's device by default. I implemented a conversational interface utilizing retrieval-augmented reasoning on local language models to help patients identify trends across time and track competing medical hypotheses.",
      ],
      bullets: [
        "Developed a private, patient-first platform designed to support coherent medical reasoning over fragmented health records.",
        "Architected a desktop system without a cloud backend, keeping medical data encrypted on the patient's device by default.",
        "Implemented a conversational interface utilizing retrieval-augmented reasoning on local language models to help patients identify trends across time and track competing medical hypotheses.",
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
