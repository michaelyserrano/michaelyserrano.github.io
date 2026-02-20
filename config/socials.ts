import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@michaelyserrano",
    icon: Icons.gitHub,
    link: "https://github.com/michaelyserrano/",
  },
  {
    name: "LinkedIn",
    username: "Michael Serrano",
    icon: Icons.linkedin,
    link: "https://linkedin.com/in/michael-y-serrano",
  },
  {
    name: "Gmail",
    username: "michaelyserrano@gmail.com",
    icon: Icons.gmail,
    link: "mailto:michaelyserrano@gmail.com",
  },
];
