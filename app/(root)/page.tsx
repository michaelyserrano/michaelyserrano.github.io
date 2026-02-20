import { Metadata } from "next";
import Script from "next/script";

import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { HeroSection } from "@/components/common/hero-section";
import { SpotlightSection } from "@/components/portfolio/spotlight-section";
import { education } from "@/config/education";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description:
    "Michael Serrano - Machine Learning Engineer & Researcher. MIT MEng in CS, Economics, and Data Science. Scalable ML pipelines, agentic tools, full-stack AI.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Machine Learning Engineer & Researcher",
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <HeroSection />

      <SpotlightSection
        projects={Projects}
        experiences={experiences}
        education={education}
      />
    </ClientPageWrapper>
  );
}
