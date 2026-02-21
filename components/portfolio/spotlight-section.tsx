"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSpotlightTab } from "@/components/providers/spotlight-tab-provider";
import {
  SPOTLIGHT_TAB_EVENT,
  tabAndCardFromSpotlightHash,
  tabFromSpotlightHash,
  type SpotlightTabId,
} from "@/lib/spotlight-tab-url";
import { useSpotlightStore } from "@/store/spotlight-store";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EducationCard } from "@/components/education/education-card";
import { ProjectsSection } from "@/components/projects/projects-section";
import Timeline from "@/components/experience/timeline";
import SkillsCard from "@/components/skills/skills-card";
import { pagesConfig } from "@/config/pages";
import type { EducationEntry } from "@/config/education";
import type { ExperienceInterface } from "@/config/experience";
import type { ProjectInterface } from "@/config/projects";
import { skills } from "@/config/skills";

const TAB_IDS: SpotlightTabId[] = ["projects", "experience", "education", "skills"];

const TAB_LABELS: Record<SpotlightTabId, string> = {
  projects: pagesConfig.projects.title,
  experience: pagesConfig.experience.title,
  education: "Education",
  skills: "Skills",
};

interface SpotlightSectionProps {
  projects: ProjectInterface[];
  experiences: ExperienceInterface[];
  education: EducationEntry[];
}

const transition = { duration: 0.25, ease: "easeOut" as const };

const POLL_MS = 120;

const HIGHLIGHT_DURATION_MS = 2500;
/** Inline ring so highlight is visible even if Tailwind purges the class */
const HIGHLIGHT_STYLE = {
  boxShadow: "0 0 0 2px hsl(var(--primary))",
  outline: "2px solid hsl(var(--primary))",
  outlineOffset: "2px",
};

export function SpotlightSection({
  projects,
  experiences,
  education,
}: SpotlightSectionProps) {
  const [activeTab, setActiveTab] = useState<SpotlightTabId>("projects");
  const activeTabRef = useRef(activeTab);
  activeTabRef.current = activeTab;

  const storeTab = useSpotlightStore((s) => s.spotlightTab);
  const highlightCardId = useSpotlightStore((s) => s.spotlightCardId);
  const setSpotlightCardId = useSpotlightStore((s) => s.setSpotlightCardId);
  const { spotlightTab: contextTab, setSpotlightTab: setContextTab } =
    useSpotlightTab();

  // Sync from store when it changes (e.g. command palette wrote to store)
  useEffect(() => {
    setActiveTab(storeTab);
  }, [storeTab]);

  // Sync from context when it changes (e.g. command palette wrote to context)
  useEffect(() => {
    setActiveTab(contextTab);
  }, [contextTab]);

  // 1) Custom event 2) hashchange — parse tab + cardId and sync store
  useEffect(() => {
    const applyHash = () => {
      const result = tabAndCardFromSpotlightHash(window.location.hash);
      if (result) {
        const { tab, cardId } = result;
        setActiveTab(tab);
        useSpotlightStore.getState().setSpotlightTab(tab);
        useSpotlightStore.getState().setSpotlightCardId(cardId);
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };
    const onTabRequest = (e: Event) => {
      const tab = (e as CustomEvent<{ tab: SpotlightTabId }>).detail?.tab;
      if (tab) setActiveTab(tab);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    window.addEventListener(SPOTLIGHT_TAB_EVENT, onTabRequest);
    return () => {
      window.removeEventListener("hashchange", applyHash);
      window.removeEventListener(SPOTLIGHT_TAB_EVENT, onTabRequest);
    };
  }, []);

  // Polling fallback: check hash and store periodically (only override tab when hash is present)
  useEffect(() => {
    const id = setInterval(() => {
      const result = tabAndCardFromSpotlightHash(window.location.hash);
      const fromHash = result?.tab ?? null;
      const fromStore = useSpotlightStore.getState().spotlightTab;
      const next = fromHash ?? fromStore;
      if (next && next !== activeTabRef.current) setActiveTab(next);
    }, POLL_MS);
    return () => clearInterval(id);
  }, []);

  // Scroll to card and apply temporary highlight when tab + highlightCardId are set.
  // Wait for AnimatePresence (mode="wait") to mount the tab, then find element and apply inline styles.
  useEffect(() => {
    if (!highlightCardId || !activeTab) return;
    const cardElementId = `spotlight-card-${activeTab}-${highlightCardId}`;
    let removeTimer: ReturnType<typeof setTimeout> | null = null;
    let retryInterval: ReturnType<typeof setInterval> | null = null;

    const applyHighlight = (el: HTMLElement) => {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      const prevOutline = el.style.outline;
      const prevOutlineOffset = el.style.outlineOffset;
      const prevBoxShadow = el.style.boxShadow;
      el.style.outline = HIGHLIGHT_STYLE.outline;
      el.style.outlineOffset = HIGHLIGHT_STYLE.outlineOffset;
      el.style.boxShadow = HIGHLIGHT_STYLE.boxShadow;
      removeTimer = setTimeout(() => {
        el.style.outline = prevOutline;
        el.style.outlineOffset = prevOutlineOffset;
        el.style.boxShadow = prevBoxShadow;
        setSpotlightCardId(null);
      }, HIGHLIGHT_DURATION_MS);
    };

    const tryHighlight = () => {
      const el = document.getElementById(cardElementId);
      if (el) {
        applyHighlight(el as HTMLElement);
        return true;
      }
      return false;
    };

    const RETRY_MS = 100;
    const MAX_WAIT_MS = 2000;
    let elapsed = 0;
    // Initial delay to allow tab switch + AnimatePresence to mount content
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        if (tryHighlight()) return;
        retryInterval = setInterval(() => {
          elapsed += RETRY_MS;
          if (tryHighlight() || elapsed >= MAX_WAIT_MS) {
            if (retryInterval) clearInterval(retryInterval);
            retryInterval = null;
          }
        }, RETRY_MS);
      });
    }, 350);
    return () => {
      clearTimeout(timer);
      if (retryInterval) clearInterval(retryInterval);
      if (removeTimer) clearTimeout(removeTimer);
    };
  }, [activeTab, highlightCardId, setSpotlightCardId]);

  const setTab = (tab: SpotlightTabId) => {
    setActiveTab(tab);
    setContextTab(tab);
    useSpotlightStore.getState().setSpotlightTab(tab);
    useSpotlightStore.getState().setSpotlightCardId(null);
  };

  return (
    <section id="spotlight" className="w-full container max-w-6xl mx-auto px-2 sm:px-4 py-8 md:py-12">
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {TAB_IDS.map((tabId) => (
          <Button
            key={tabId}
            variant={activeTab === tabId ? "default" : "outline"}
            size="sm"
            className="rounded-lg"
            onClick={() => setTab(tabId)}
          >
            {TAB_LABELS[tabId]}
          </Button>
        ))}
      </div>

      {/* Dynamic content card */}
      <Card className="overflow-hidden border-border bg-muted/50 shadow-sm">
        <CardContent className="p-6 md:p-8 pt-6 min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={transition}
              className="w-full"
            >
              {activeTab === "projects" && (
                <ProjectsSection projects={projects} highlightCardId={highlightCardId} />
              )}

              {activeTab === "experience" && (
                <Timeline experiences={experiences} highlightCardId={highlightCardId} />
              )}

              {activeTab === "education" && (
                <div className="w-full space-y-6">
                  {education.map((entry) => (
                    <div key={entry.id} id={`spotlight-card-education-${entry.id}`}>
                      <EducationCard entry={entry} />
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "skills" && (
                <div className="space-y-6">
                  <SkillsCard skills={skills} groupByCategory highlightCardId={highlightCardId} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </section>
  );
}
