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
    startDate: new Date("2025-11-01"),
    endDate: new Date(),
    companyLogoImg: "/projects/rindler/rindler_logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Rindler is an agentic web navigation tool I co-founded to streamline complex browser workflows. As a technical co-founder, I balance business strategy and fundraising with hands-on product engineering, ensuring our agent execution remains robust and user-centric.",
      ],
      bullets: [
        "[ Leadership ] Drive product vision, go-to-market strategy, and fundraising efforts.",
        "[ Frontend ] Architect a responsive Next.js and React user interface.",
        "[ Backend ] Develop scalable Node.js orchestration services on AWS.",
        "[ Telemetry ] Build real-time monitoring tools to inform self-healing agent execution.",
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
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/charak/charak_demo_1.png",
    pagesInfoArr: [
      {
        title: "FHIR Integration & Consent",
        description:
          "Patients can securely authenticate with healthcare providers directly from the app, exercising granular consent over exactly which records are imported into their local vault.",
        imgArr: [
          "/projects/charak/charak_demo_1.png",
          "/projects/charak/charak_demo_2.png",
        ],
      },
      {
        title: "Patient Dashboard",
        description:
          "A unified, time-series view of the patient's comprehensive medical history, cleanly normalized from multiple provider networks into one intuitive interface.",
        imgArr: [
          "/projects/charak/charak_demo_3.png",
        ],
      },
      {
        title: "Conversational Local AI",
        description:
          "The interactive chat interface where patients can query their encrypted medical context to receive tailored, hypothesis-driven advice using completely offline LLMs.",
        imgArr: [
          "/projects/charak/charak_demo_4.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Charak is a private, local-first desktop application made to support coherent medical reasoning over fragmented health records. The platform empowers patients with complex conditions to make sense of their medical history, track competing hypotheses, and prepare for clinical encounters without ever compromising their data privacy.",
      ],
      bullets: [
        "[ Frontend ] Built a secure, cross-platform desktop client using Tauri 2 and React 19.",
        "[ Backend ] Engineered a Rust-based SMART on FHIR client for OAuth2/PKCE data retrieval.",
        "[ Data Pipeline ] Created local OCR and document extraction workflows using Tesseract.js and PDF.js.",
        "[ AI Integration ] Unified offline local models (Ollama) and consent-gated cloud APIs (Gemini).",
      ],
    },
  },
  {
    id: "conceptq",
    companyName: "ConceptQ",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "An educational assessment generator that mitigates AI hallucination. It extracts concept dependency graphs from course materials and allows instructors to visually curate them before generating Bloom's Taxonomy–aligned quizzes.",
    techStack: ["Python", "FastAPI", "Typescript", "React", "Next.js"],
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
          "The central workspace where instructors upload lecture materials, review the AI-extracted knowledge concepts, and configure specific Bloom's Taxonomy parameters for the assessment.",
        imgArr: ["/projects/concept-q/conceptq_demo_2.png"],
      },
      {
        title: "The Calibration Interface",
        description:
          "An interactive node-based canvas where educators act as the 'human-in-the-loop'. Users can visually prune irrelevant concepts and correct prerequisite edges prior to the final question generation step.",
        imgArr: ["/projects/concept-q/conceptq_demo_3.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "ConceptQ is a Human-in-the-Loop (HITL) educational workbench built to solve the alignment gap between LLM statistical probabilities and actual pedagogical intent. By shifting the focus from autonomous generation to human augmentation, it allows educators to visually calibrate knowledge graphs before a single assessment question is generated.",
      ],
      bullets: [
        "[ Backend ] Built a FastAPI map-reduce pipeline to parse documents into JSON adjacency lists.",
        "[ Data Engineering ] Engineered a sub-second in-memory NumPy vector store for text chunk retrieval.",
        "[ Frontend ] Implemented a React Flow and Dagre interface for visual hierarchical graph editing.",
        "[ AI Integration ] Designed Bloom's Taxonomy-constrained prompts for targeted question generation.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
