"use client";

import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { SiteFooter } from "@/components/common/site-footer";
import { HomeDashboard } from "@/components/portfolio/home-dashboard";
import { siteConfig } from "@/config/site";

export function RecruiterLayout() {
  return (
    <ClientPageWrapper>
      <div id="spotlight" className="container pt-8 pb-4 md:pt-12">
        <div className="mb-8 text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {siteConfig.authorName}
          </h1>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>
        <HomeDashboard />
      </div>
      <SiteFooter />
    </ClientPageWrapper>
  );
}
