"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { type SpotlightTabId } from "@/lib/spotlight-tab-url";

export type { SpotlightTabId };

type SpotlightTabContextValue = {
  spotlightTab: SpotlightTabId;
  setSpotlightTab: (tab: SpotlightTabId) => void;
};

const SpotlightTabContext = createContext<SpotlightTabContextValue | null>(
  null
);

export function SpotlightTabProvider({ children }: { children: ReactNode }) {
  const [spotlightTab, setSpotlightTabState] =
    useState<SpotlightTabId>("projects");
  const setSpotlightTab = useCallback((tab: SpotlightTabId) => {
    setSpotlightTabState(tab);
  }, []);

  return (
    <SpotlightTabContext.Provider value={{ spotlightTab, setSpotlightTab }}>
      {children}
    </SpotlightTabContext.Provider>
  );
}

export function useSpotlightTab(): SpotlightTabContextValue {
  const ctx = useContext(SpotlightTabContext);
  if (!ctx) {
    throw new Error("useSpotlightTab must be used within SpotlightTabProvider");
  }
  return ctx;
}
