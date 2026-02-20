import Link from "next/link";

import { ContactSheet } from "@/components/common/contact-sheet";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";
import { siteConfig } from "@/config/site";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full">
        <div className="sticky top-3 z-50 w-[calc(100%-1.5rem)] max-w-4xl mx-auto mt-3 md:mt-6 md:max-w-fit rounded-full border-2 border-border bg-background/95 backdrop-blur-md px-4 py-2.5 md:px-6 md:py-3 shadow-lg ring-1 ring-black/5 dark:ring-white/5">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex items-center gap-3">
              <Link
                href={siteConfig.resumePdfUrl ?? "/resume"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Resume
              </Link>
              <ContactSheet />
              <ModeToggle />
            </div>
          </MainNav>
        </div>
      </header>
      <main className="container flex-1 pt-4 md:pt-0">{children}</main>
      <SiteFooter />
    </div>
  );
}
