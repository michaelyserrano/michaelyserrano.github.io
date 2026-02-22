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
    category: ["Frontend", "Product Strategy", "Full Stack"],
    shortDescription:
      "Co-founder driving business strategy, product vision, and frontend architecture. I build the user interface and the agent telemetry tools that capture interactions to inform our self-healing execution engine.",
    websiteLink: "#",
    techStack: ["Typescript", "React", "Next.js", "Node.js", "AWS"],
    startDate: new Date("2025-11-01"),
    endDate: new Date(),
    companyLogoImg: "/projects/rindler/rindler_logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "As a co-founder of Rindler, I define our overarching vision, business strategy, and fundraising roadmap. We are building a 'Reliability-as-a-Service' middleware designed to bridge AI agents with complex web applications. By translating volatile web interfaces into deterministic APIs, we allow e-commerce companies to support agentic traffic without having to build and maintain brittle in-house infrastructure.",
        "On the technical side, I lead the product experience and frontend architecture. I am responsible for building the robust user interface that our clients use to seamlessly manage their integrations and agentic web traffic.",
        "A major focus of my engineering work is developing Rindler's agent telemetry tools. I architect the systems designed to capture and analyze user and agent interactions directly on client sites. This telemetry data is critical, as it feeds directly into our backend to inform the resilient, self-healing execution pathways our workers rely on."
      ],
      bullets: [],
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
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/charak/charak_demo_1.png",
    pagesInfoArr: [
      {
        title: "FHIR Integration & Consent",
        description:
          "Engineered a SMART on FHIR integration using Rust to securely authenticate and fetch data from provider portals (like Epic/MyChart), ensuring patients have granular control over what information they share.",
        imgArr: [
          "/projects/charak/charak_demo_1.png",
          "/projects/charak/charak_demo_2.png",
        ],
      },
      {
        title: "Patient Dashboard",
        description:
          "Architected a local-first desktop system where all aggregated medical data is normalized into a time-series-friendly format, allowing patients to easily view their health records securely on-device.",
        imgArr: [
          "/projects/charak/charak_demo_3.png",
        ],
      },
      {
        title: "Conversational Local AI",
        description:
          "Developed a conversational RAG interface supporting a dynamic multi-model LLM architecture. By utilizing local models, patients can ask complex questions and receive tailored, hypothesis-driven advice without their data ever leaving their machine.",
        imgArr: [
          "/projects/charak/charak_demo_4.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I am the Lead Developer and Architect of Charak, a private, patient-first platform designed to support coherent medical reasoning over fragmented health records. I am spearheading the product's overarching vision to help patients with complex conditions make sense of their medical history, track competing hypotheses, and prepare for clinical encounters without compromising their data privacy.",
        "To achieve strict privacy constraints, I architected Charak as a local-first desktop application utilizing Tauri 2, React 19, and a Rust backend. I engineered a robust SMART on FHIR integration to securely retrieve records from major provider portals, alongside custom OCR and PDF extraction pipelines for unstructured medical documents.",
        "For the core reasoning engine, I built a flexible, multi-model LLM integration. By default, the system utilizes local runtimes like Ollama and LM Studio for completely offline, encrypted data processing. For advanced reasoning tasks, I implemented a consent-gated mechanism to securely interface with cloud models like Gemini 2.5 Pro and OpenAI, ensuring patients maintain absolute control over their medical context."
      ],
      bullets: [],
    },
  },
  {
    id: "conceptq",
    companyName: "ConceptQ",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "An educational assessment generator built at MIT SERC that mitigates AI hallucination. It extracts concept dependency graphs from course materials and allows instructors to visually curate them before generating Bloom's Taxonomy–aligned quizzes.",
    techStack: ["Python", "FastAPI", "Typescript", "React", "Next.js"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-05-01"),
    companyLogoImg: "/projects/concept-q/conceptq_demo_1.png",
    pagesInfoArr: [
      {
        title: "ConceptQ Platform",
        description:
          "The landing experience for the ConceptQ assessment generator, designed to bridge the gap between AI statistical generation and actual pedagogical intent.",
        imgArr: ["/projects/concept-q/conceptq_demo_1.png"],
      },
      {
        title: "Lecture Dashboard & Generation",
        description:
          "The main workspace where instructors upload materials, view extracted concepts, and configure Bloom's Taxonomy-level prompts to generate targeted multiple-choice questions.",
        imgArr: ["/projects/concept-q/conceptq_demo_2.png"],
      },
      {
        title: "The Calibration Interface",
        description:
          "An interactive React Flow canvas featuring Dagre hierarchical routing. Instructors act as the 'human-in-the-loop' to visually prune irrelevant concepts and correct prerequisite edges before generating assessments.",
        imgArr: ["/projects/concept-q/conceptq_demo_3.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "ConceptQ is a Human-in-the-Loop (HITL) educational workbench built at the MIT SERC to solve the alignment gap between LLM statistical probabilities and actual pedagogical intent. Standard generative AI often hallucinates intent, resulting in assessments that test niche footnotes rather than core learning objectives. ConceptQ shifts the focus from autonomous generation to human augmentation.",
        "To achieve this, I engineered a Python/FastAPI backend featuring a map-reduce LLM pipeline that extracts entities and prerequisite relationships from unstructured lecture materials, outputting a noisy dependency graph. Documents are chunked, embedded, and stored in an in-memory vector database for sub-second cosine retrieval.",
        "The core contribution is the frontend interface, built with React Flow and Dagre. It visualizes the raw graph, empowering instructors to manually prune nodes and correct logical edges. Once calibrated, a Graph-Constrained generation step utilizes Bloom's Taxonomy-level prompts alongside the retrieved text to produce highly relevant, accurately mapped multiple-choice questions."
      ],
      bullets: [],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
