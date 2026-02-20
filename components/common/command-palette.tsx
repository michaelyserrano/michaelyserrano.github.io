"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Icons } from "@/components/common/icons";
import { useGraphStore, type GraphCategoryId } from "@/store/graph-store";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const ROTATING_PLACEHOLDERS = [
  "Search 'Roblox'...",
  "Try 'Savaal LLM'...",
  "Explore 'Rindler'...",
  "Jump to 'Education'...",
];
const PLACEHOLDER_INTERVAL_MS = 3000;

export function CommandPalette() {
  const { setTheme, resolvedTheme } = useTheme();
  const { toast } = useToast();
  const [commandOpen, setCommandOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderFade, setPlaceholderFade] = useState(true);

  const isGraphMode = useGraphStore((s) => s.isGraphMode);
  const focusNode = useGraphStore((s) => s.focusNode);
  const commandPaletteOpenFromStore = useGraphStore(
    (s) => s.commandPaletteOpen
  );
  const setCommandPaletteOpen = useGraphStore((s) => s.setCommandPaletteOpen);

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

  const handleGraphFocus = (nodeId: string, category: GraphCategoryId) => {
    setOpen(false);
    focusNode(nodeId, category);
  };

  const handleRecruiterScroll = (sectionId: string) => {
    setOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder={ROTATING_PLACEHOLDERS[placeholderIndex]}
          className={cn(!placeholderFade && "opacity-0")}
        />
        <CommandList className="max-h-[300px]">
          <CommandEmpty>No results found for your search.</CommandEmpty>
          <CommandGroup heading="Highlights & Navigation">
            {isGraphMode ? (
              <>
                <CommandItem
                  keywords={[
                    "job",
                    "work",
                    "internship",
                    "experience",
                    "career",
                    "roblox",
                  ]}
                  onSelect={() => handleGraphFocus("roblox", "experience")}
                >
                  <Icons.gitOrgBuilding className="mr-2 h-4 w-4" />
                  View Roblox Offer{" "}
                  <span className="text-muted-foreground">(Sept 2026)</span>
                </CommandItem>
                <CommandItem
                  keywords={[
                    "school",
                    "college",
                    "degree",
                    "education",
                    "mit",
                    "csail",
                    "research",
                    "savaal",
                  ]}
                  onSelect={() => handleGraphFocus("mit-csail", "experience")}
                >
                  <Icons.laptop className="mr-2 h-4 w-4" />
                  Read about MIT CSAIL{" "}
                  <span className="text-muted-foreground">Savaal LLM</span>
                </CommandItem>
                <CommandItem
                  keywords={[
                    "rindler",
                    "startup",
                    "founder",
                    "projects",
                    "portfolio",
                    "code",
                  ]}
                  onSelect={() => handleGraphFocus("rindler", "projects")}
                >
                  <Icons.rocket className="mr-2 h-4 w-4" />
                  Explore Rindler Startup
                </CommandItem>
              </>
            ) : (
              <>
                <CommandItem
                  keywords={[
                    "job",
                    "work",
                    "internship",
                    "experience",
                    "career",
                    "roblox",
                  ]}
                  onSelect={() => handleRecruiterScroll("spotlight")}
                >
                  <Icons.gitOrgBuilding className="mr-2 h-4 w-4" />
                  View Roblox Offer{" "}
                  <span className="text-muted-foreground">(Sept 2026)</span>
                </CommandItem>
                <CommandItem
                  keywords={[
                    "school",
                    "college",
                    "degree",
                    "education",
                    "mit",
                    "csail",
                    "research",
                    "savaal",
                  ]}
                  onSelect={() => handleRecruiterScroll("spotlight")}
                >
                  <Icons.laptop className="mr-2 h-4 w-4" />
                  Read about MIT CSAIL{" "}
                  <span className="text-muted-foreground">Savaal LLM</span>
                </CommandItem>
                <CommandItem
                  keywords={[
                    "rindler",
                    "startup",
                    "founder",
                    "projects",
                    "portfolio",
                    "code",
                  ]}
                  onSelect={() => handleRecruiterScroll("spotlight")}
                >
                  <Icons.rocket className="mr-2 h-4 w-4" />
                  Explore Rindler Startup
                </CommandItem>
              </>
            )}
          </CommandGroup>
          <CommandGroup heading="Quick Actions">
            <CommandItem
              keywords={["cv", "resume", "download", "pdf"]}
              onSelect={() => {
                window.open(siteConfig.resumePdfUrl ?? "/resume", "_blank");
                setOpen(false);
              }}
            >
              <Icons.post className="mr-2 h-4 w-4" />
              Download Resume
            </CommandItem>
            <CommandItem
              keywords={["theme", "dark", "light", "mode", "toggle", "color"]}
              onSelect={() => {
                setTheme(resolvedTheme === "dark" ? "light" : "dark");
                setOpen(false);
              }}
            >
              <Icons.moon className="mr-2 h-4 w-4 dark:hidden" />
              <Icons.sun className="mr-2 h-4 w-4 hidden dark:block" />
              Toggle Dark Mode
            </CommandItem>
            <CommandItem
              keywords={["email", "contact", "message", "reach out"]}
              onSelect={async () => {
                setOpen(false);
                try {
                  await navigator.clipboard.writeText(siteConfig.contactEmail);
                  toast({ title: "Email copied!" });
                } catch {
                  // clipboard failed
                }
              }}
            >
              <Icons.mail className="mr-2 h-4 w-4" />
              Copy Email Address
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
