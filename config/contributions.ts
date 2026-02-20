export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Sloan Business Club",
    contibutionDescription:
      "Vice President & Business Education Program Director — Analyzed 10-Ks to build DCF models and 5 Forces analyses for companies. Prepared weekly classes in consulting, finance, entrepreneurship, and general business.",
    repoOwner: "MIT Sloan",
    link: "",
  },
  {
    repo: "Beta Theta Pi Fraternity",
    contibutionDescription:
      "Vice President of Finance — Managed and allocated the $400,000 fraternity budget towards house utilities and brotherhood initiatives. Streamlined the payment process, improved transparency, and facilitated house improvements through a new flex-spending program.",
    repoOwner: "Beta Theta Pi",
    link: "",
  },
  {
    repo: "Community Volunteering",
    contibutionDescription:
      "Volunteered for the Boston Marathon on the Gear Check team. Led cleanup efforts around the shores of the Greater Boston area. Served as Lead Organizer for the Navajo Night Trivia Fundraiser, coordinating a virtual trivia night with the Science Club and National Honors Society. Raised $760 from 23 families in the local community for the Navajo Nation COVID Relief fund.",
    repoOwner: "Community",
    link: "",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
