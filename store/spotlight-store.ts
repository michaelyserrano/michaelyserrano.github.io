import { create } from "zustand";

export type SpotlightTabId =
  | "experience"
  | "projects"
  | "education"
  | "skills";

interface SpotlightStore {
  spotlightTab: SpotlightTabId;
  spotlightCardId: string | null;
  commandPaletteOpen: boolean;
  setSpotlightTab: (tab: SpotlightTabId) => void;
  setSpotlightCardId: (id: string | null) => void;
  setCommandPaletteOpen: (open: boolean) => void;
}

export const useSpotlightStore = create<SpotlightStore>((set) => ({
  spotlightTab: "projects",
  spotlightCardId: null,
  commandPaletteOpen: false,
  setSpotlightTab: (tab) => set({ spotlightTab: tab }),
  setSpotlightCardId: (id) => set({ spotlightCardId: id }),
  setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
}));
