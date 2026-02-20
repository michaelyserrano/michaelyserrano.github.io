import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Michael Serrano's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "",
    metadata: {
      title: "Skills",
      description:
        "Michael Serrano's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "",
    metadata: {
      title: "Projects",
      description: "Michael Serrano's projects in ML, full-stack, and research.",
    },
  },
  contributions: {
    title: "Leadership & Community Volunteering",
    description:
      "Financial management, educational leadership, and community impact.",
    metadata: {
      title: "Leadership & Community Volunteering",
      description:
        "Michael Serrano's leadership roles and community volunteering.",
    },
  },
  resume: {
    title: "Resume",
    description: "Michael Serrano's resume.",
    metadata: {
      title: "Resume",
      description: "Michael Serrano's resume.",
    },
  },
  experience: {
    title: "Professional & Research Experience",
    description: "",
    metadata: {
      title: "Professional & Research Experience",
      description:
        "Michael Serrano's professional and research experience.",
    },
  },
};
