import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { HeroSection } from "@/components/common/hero-section";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import { EducationCard } from "@/components/education/education-card";
import ExperienceCard from "@/components/experience/experience-card";
import { ProjectsSection } from "@/components/projects/projects-section";
import SkillsCard from "@/components/skills/skills-card";
import { Button } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { education } from "@/config/education";
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
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Machine Learning Engineer & Researcher",
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };

  // Structured data for website as a software application (template)
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
        className="container space-y-6 bg-muted py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          {pagesConfig.projects.description ? (
            <AnimatedText
              as="p"
              delay={0.2}
              className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            >
              {pagesConfig.projects.description}
            </AnimatedText>
          ) : null}
        </div>
        <div className="w-full">
          <ProjectsSection projects={Projects} />
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects" className="group">
            <Button variant={"outline"} className="rounded-xl group-hover:[&>svg]:translate-x-1 [&>svg]:transition-transform">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="education"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Education
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Advanced coursework and MEng track at MIT.
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-1 max-w-2xl">
          {education.map((entry, index) => (
            <AnimatedSection
              key={entry.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <EducationCard entry={entry} />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          {pagesConfig.experience.description ? (
            <AnimatedText
              as="p"
              delay={0.2}
              className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            >
              {pagesConfig.experience.description}
            </AnimatedText>
          ) : null}
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience" className="group">
            <Button variant={"outline"} className="rounded-xl group-hover:[&>svg]:translate-x-1 [&>svg]:transition-transform">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
        id="contributions"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.contributions.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.contributions.description}
          </AnimatedText>
        </div>
        <ContributionCard contributions={featuredContributions} />
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
            {pagesConfig.skills.title}
          </AnimatedText>
          {pagesConfig.skills.description ? (
            <AnimatedText
              as="p"
              delay={0.2}
              className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            >
              {pagesConfig.skills.description}
            </AnimatedText>
          ) : null}
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills" className="group">
            <Button variant={"outline"} className="rounded-xl group-hover:[&>svg]:translate-x-1 [&>svg]:transition-transform">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
