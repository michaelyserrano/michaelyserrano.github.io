"use client";

import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { HeroSection } from "@/components/common/hero-section";
import { SpotlightSection } from "@/components/portfolio/spotlight-section";
import { SiteFooter } from "@/components/common/site-footer";
import { education } from "@/config/education";
import { experiences } from "@/config/experience";
import { Projects } from "@/config/projects";

export function HomePageContent() {
  return (
    <ClientPageWrapper>
      <HeroSection />
      <SpotlightSection
        projects={Projects}
        experiences={experiences}
        education={education}
      />
      <SiteFooter />
    </ClientPageWrapper>
  );
}
