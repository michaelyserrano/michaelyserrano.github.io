import { Metadata } from "next";
import Script from "next/script";

import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { HeroSection } from "@/components/common/hero-section";
import { PortfolioDashboard } from "@/components/portfolio/portfolio-dashboard";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import SkillsCard from "@/components/skills/skills-card";
import { SkillsDialog } from "@/components/skills/skills-dialog";
import { featuredContributions } from "@/config/contributions";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";

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

      <AnimatedSection
        direction="up"
        className="container py-10 my-8"
        id="dashboard"
      >
        <PortfolioDashboard
          projects={Projects}
          experiencesData={experiences}
          contributions={featuredContributions}
        />
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Skills
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <SkillsDialog />
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
