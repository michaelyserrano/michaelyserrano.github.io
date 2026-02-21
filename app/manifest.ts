import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.authorName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo.png?v=2",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png?v=2",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "machine learning",
      "software engineering",
      "developer",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
