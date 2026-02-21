"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import * as React from "react";
import { useEffect, useState } from "react";

import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";
import { useSpotlightStore } from "@/store/spotlight-store";
import profileImg from "@/public/profile-img.png";

const ROTATING_PLACEHOLDERS = [
  "Search 'Roblox'...",
  "Try 'Savaal LLM'...",
  "Explore 'Rindler'...",
  "Jump to 'Education'...",
];
const PLACEHOLDER_INTERVAL_MS = 3000;

export function HeroSection() {
  const setCommandPaletteOpen = useSpotlightStore((s) => s.setCommandPaletteOpen);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderFade, setPlaceholderFade] = useState(true);

  // Rotating placeholder every 3s with fade transition
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setPlaceholderFade(false);
      timeoutId = setTimeout(() => {
        setPlaceholderIndex((i) => (i + 1) % ROTATING_PLACEHOLDERS.length);
        setPlaceholderFade(true);
      }, 150);
    }, PLACEHOLDER_INTERVAL_MS);
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToBottomBar = () => {
    document.getElementById("page-footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="overflow-x-hidden min-h-[80dvh] md:min-h-screen flex flex-col items-center justify-center pb-8 pt-16 sm:pt-20 md:py-20 lg:py-32 mb-0">
      <div className="container flex max-w-[64rem] w-full min-w-0 flex-col items-center gap-6 text-center px-4 sm:px-6">
        {/* PFP first on mobile, left on md+; text always has clear separation */}
        <div className="flex w-full max-w-full min-w-0 flex-col items-center gap-6 text-center md:flex-row md:items-end md:gap-8 md:text-left">
          <div className="relative w-[min(50vw,12rem)] aspect-square shrink-0 md:w-52 lg:w-64 rounded-full overflow-hidden border-[6px] border-primary md:border-8 bg-primary">
            <Image
              src={profileImg}
              fill
              sizes="(max-width: 768px) 50vw, 14rem"
              className="object-cover rounded-full"
              alt="Michael Serrano - Machine Learning Engineer & Researcher Portfolio"
              priority
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col w-full max-w-full">
            <AnimatedText
              as="h1"
              delay={0.2}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Michael Serrano
            </AnimatedText>
            <div className="mt-5 max-w-[42rem] leading-relaxed text-muted-foreground text-xl sm:text-2xl md:text-3xl md:mt-6">
              I&apos;m an MIT{" "}
              <HoverCard openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <span className="cursor-default font-bold underline underline-offset-2 decoration-solid text-foreground">
                    6-14
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 text-left" align="start">
                  <div className="text-base font-medium leading-snug">
                    Computer Science, Economics, and Data Science
                  </div>
                </HoverCardContent>
              </HoverCard>{" "}
              MEng, Full Stack
              <br />
              Developer, and ML Engineer.
            </div>
          </div>
        </div>

        {/* Spotlight search trigger – opens the global command palette (layout); hidden on small screens so content flows up */}
        <div className="hidden md:block w-full max-w-3xl mt-10 px-2 sm:px-4">
          <button
            type="button"
            onClick={() => setCommandPaletteOpen(true)}
            className={cn(
              "flex h-16 w-full items-center gap-4 rounded-2xl border border-input bg-background px-6 shadow-md transition-colors sm:h-[4.25rem]",
              "hover:bg-accent/50 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
          >
            <Search className="h-5 w-5 shrink-0 text-muted-foreground sm:h-6 sm:w-6" aria-hidden />
            <span
              className={cn(
                "flex-1 truncate text-left text-base text-muted-foreground transition-opacity duration-150 sm:text-lg",
                !placeholderFade && "opacity-0"
              )}
            >
              {ROTATING_PLACEHOLDERS[placeholderIndex]}
            </span>
            <kbd className="pointer-events-none inline-flex h-6 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-xs font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        </div>

        {/* Social links – visible on landing so they aren’t covered by the bottom bar */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {SocialLinks.map((item, ind) => (
            <a
              key={ind}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/50",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
              aria-label={item.name}
              title={item.username}
            >
              <item.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <AnimatedText delay={1.2}>
          <button
            type="button"
            onClick={scrollToBottomBar}
            className={cn(
              "inline-flex items-center justify-center rounded-full h-14 w-14 text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/50",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "mt-6"
            )}
            aria-label="Scroll to bottom"
          >
            <Icons.chevronDown className="h-8 w-8" />
          </button>
        </AnimatedText>
      </div>
    </section>
  );
}
