"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { useCommandState } from "cmdk";
import { Home } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Icons } from "@/components/common/icons";
import {
  setSpotlightTabViaHash,
  type SpotlightTabId,
} from "@/lib/spotlight-tab-url";
import { getSpotlightTargets } from "@/lib/spotlight-targets";
import { useSpotlightTab } from "@/components/providers/spotlight-tab-provider";
import { useSpotlightStore } from "@/store/spotlight-store";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const ROTATING_PLACEHOLDERS = [
  "Search 'Roblox'...",
  "Try 'Savaal LLM'...",
  "Explore 'Rindler'...",
  "Type 'CV' or 'Hire'...",
];
const PLACEHOLDER_INTERVAL_MS = 3000;

/** Only match when search is a substring of the item value or one of its keywords (no fuzzy/substring-on-label). */
function keywordOnlyFilter(
  value: string,
  search: string,
  keywords?: string[]
): number {
  const q = search.trim().toLowerCase();
  if (!q) return 1;
  const targets = [
    value.toLowerCase(),
    ...(keywords ?? []).map((k) => k.toLowerCase()),
  ];
  for (const t of targets) {
    if (t === q) return 1;
    if (t.startsWith(q)) return 0.9;
    if (t.includes(q)) return 0.7;
  }
  return 0;
}

/** Navigation only: section name + generic terms. No card-specific terms (use Go to card for those). */
const SKILLS_KEYWORDS = ["skills", "tech", "technologies", "stack"];

const EXPERIENCE_KEYWORDS = [
  "experience",
  "jobs",
  "career",
  "work",
  "internship",
  "researcher",
  "intern",
  "ML",
  "machine learning",
];

const PROJECTS_KEYWORDS = ["projects", "portfolio"];

const EDUCATION_KEYWORDS = ["education", "school", "degree", "learning", "college"];

const TAB_LABEL: Record<SpotlightTabId, string> = {
  projects: "Projects",
  experience: "Experience",
  education: "Education",
  skills: "Skills",
};

const TAB_ICON: Record<SpotlightTabId, React.ComponentType<{ className?: string }>> = {
  projects: Icons.rocket,
  experience: Icons.work,
  education: Icons.gitRepoIcon,
  skills: Icons.cyberpunk,
};

const SPOTLIGHT_TARGETS = getSpotlightTargets();

/** Renders "Go to card" group only when user has typed something. Uses cmdk's search state so it stays in sync. */
function GoToCardGroup({
  onSelectCard,
}: {
  onSelectCard: (tab: SpotlightTabId, cardId: string) => void;
}) {
  const search = useCommandState((state) => state.search ?? "");
  if (!search.trim()) return null;
  return (
    <CommandGroup heading="Go to card">
      {SPOTLIGHT_TARGETS.map((target) => {
        const value =
          TAB_LABEL[target.tab] === target.label
            ? target.label
            : `${TAB_LABEL[target.tab]} \\ ${target.label}`;
        return (
          <CommandItem
            key={`${target.tab}-${target.cardId}`}
            value={value}
            keywords={[target.label, target.cardId, ...target.keywords]}
            onSelect={() => onSelectCard(target.tab, target.cardId)}
          >
            {React.createElement(TAB_ICON[target.tab], { className: "mr-2 h-4 w-4 shrink-0" })}
            <span className="truncate">{value}</span>
          </CommandItem>
        );
      })}
    </CommandGroup>
  );
}

export function CommandPalette() {
  const { setTheme, resolvedTheme } = useTheme();
  const { toast } = useToast();
  const [commandOpen, setCommandOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderFade, setPlaceholderFade] = useState(true);

  const { setSpotlightTab: setSpotlightTabContext } = useSpotlightTab();
  const commandPaletteOpenFromStore = useSpotlightStore(
    (s) => s.commandPaletteOpen
  );
  const setCommandPaletteOpen = useSpotlightStore((s) => s.setCommandPaletteOpen);

  const open = commandOpen || commandPaletteOpenFromStore;
  const setOpen = (value: boolean) => {
    setCommandOpen(value);
    setCommandPaletteOpen(value);
  };

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

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToSpotlight = (tab?: SpotlightTabId, cardId?: string | null) => {
    if (tab) {
      setSpotlightTabViaHash(tab, cardId ?? null);
      useSpotlightStore.getState().setSpotlightTab(tab);
      useSpotlightStore.getState().setSpotlightCardId(cardId ?? null);
      setSpotlightTabContext(tab);
    }
    setOpen(false);
    if (tab) {
      setTimeout(() => scrollToSection("spotlight"), 150);
    } else {
      scrollToSection("spotlight");
    }
  };

  const openResume = () => {
    window.open(siteConfig.resumePdfUrl ?? "/resume", "_blank");
    setOpen(false);
  };

  const copyEmail = async () => {
    setOpen(false);
    try {
      await navigator.clipboard.writeText(siteConfig.contactEmail);
      toast({ title: "Email copied!" });
    } catch {
      // clipboard failed
    }
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setOpen(false);
  };

  return (
    <>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        filter={keywordOnlyFilter}
      >
        <CommandInput
          placeholder={ROTATING_PLACEHOLDERS[placeholderIndex]}
          className={cn(!placeholderFade && "opacity-0")}
        />
        <CommandList className="max-h-[300px] overflow-x-auto">
          <CommandEmpty>No results found for your search.</CommandEmpty>

          <CommandGroup heading="Navigation">
            <CommandItem
              value="Home"
              keywords={["home", "top", "main", "start", "landing"]}
              onSelect={() => handleScrollToSpotlight()}
            >
              <Home className="mr-2 h-4 w-4 shrink-0" />
              <span className="truncate">Home</span>
            </CommandItem>
            <CommandItem
              value="Experience"
              keywords={EXPERIENCE_KEYWORDS}
              onSelect={() => handleScrollToSpotlight("experience")}
            >
              <Icons.work className="mr-2 h-4 w-4 shrink-0" />
              <span className="truncate">Experience</span>
            </CommandItem>
            <CommandItem
              value="Education"
              keywords={EDUCATION_KEYWORDS}
              onSelect={() => handleScrollToSpotlight("education")}
            >
              <Icons.gitRepoIcon className="mr-2 h-4 w-4 shrink-0" />
              <span className="truncate">Education</span>
            </CommandItem>
            <CommandItem
              value="Projects"
              keywords={PROJECTS_KEYWORDS}
              onSelect={() => handleScrollToSpotlight("projects")}
            >
              <Icons.rocket className="mr-2 h-4 w-4 shrink-0" />
              <span className="truncate">Projects</span>
            </CommandItem>
            <CommandItem
              value="Skills"
              keywords={SKILLS_KEYWORDS}
              onSelect={() => handleScrollToSpotlight("skills")}
            >
              <Icons.cyberpunk className="mr-2 h-4 w-4 shrink-0" />
              <span className="truncate">Skills</span>
            </CommandItem>
            <CommandItem
              value="Resume"
              keywords={["resume", "cv", "hire", "pdf", "download", "recruiter"]}
              onSelect={openResume}
            >
              <Icons.post className="mr-2 h-4 w-4 shrink-0" />
              <span className="truncate">Resume</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Actions">
            <CommandItem
              value="Toggle Dark Mode"
              keywords={["theme", "dark", "light", "mode", "toggle", "color", "appearance"]}
              onSelect={toggleTheme}
            >
              <Icons.moon className="mr-2 h-4 w-4 shrink-0 dark:hidden" />
              <Icons.sun className="mr-2 h-4 w-4 shrink-0 hidden dark:block" />
              <span className="truncate">Toggle Dark Mode</span>
            </CommandItem>
            <CommandItem
              value="Download Resume"
              keywords={["cv", "resume", "download", "pdf", "hire", "recruiter"]}
              onSelect={openResume}
            >
              <Icons.post className="mr-2 h-4 w-4 shrink-0" />
              <span className="truncate">Download Resume</span>
            </CommandItem>
            <CommandItem
              value="Copy Email Address"
              keywords={["email", "contact", "message", "reach out", "hire", "recruiter"]}
              onSelect={copyEmail}
            >
              <Icons.mail className="mr-2 h-4 w-4 shrink-0" />
              <span className="truncate">Copy Email</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Social & Connect">
            <CommandItem
              value="GitHub"
              keywords={["github", "code", "repo", "social", "connect", "profile"]}
              onSelect={() => {
                window.open(siteConfig.links.github, "_blank");
                setOpen(false);
              }}
            >
              <Icons.github className="mr-2 h-4 w-4 shrink-0" />
              <span className="truncate">GitHub</span>
              <Icons.externalLink className="ml-2 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            </CommandItem>
            <CommandItem
              value="LinkedIn"
              keywords={["linkedin", "linked in", "social", "connect", "network", "profile"]}
              onSelect={() => {
                window.open(siteConfig.links.linkedin, "_blank");
                setOpen(false);
              }}
            >
              <Icons.linkedin className="mr-2 h-4 w-4 shrink-0" />
              <span className="truncate">LinkedIn</span>
              <Icons.externalLink className="ml-2 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            </CommandItem>
          </CommandGroup>

          <GoToCardGroup onSelectCard={handleScrollToSpotlight} />
        </CommandList>
        <div className="border-t px-3 py-2 text-center text-xs text-muted-foreground">
          Press <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd> to open this menu
        </div>
      </CommandDialog>
    </>
  );
}
