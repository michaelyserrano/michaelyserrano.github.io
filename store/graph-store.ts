import { create } from "zustand";

export type GraphCategoryId =
  | "experience"
  | "projects"
  | "education"
  | "skills";

interface GraphStore {
  isGraphMode: boolean;
  expandedCategories: Set<GraphCategoryId>;
  focusedNodeId: string | null;
  commandPaletteOpen: boolean;
  setGraphMode: (value: boolean) => void;
  toggleCategory: (category: GraphCategoryId) => void;
  expandCategory: (category: GraphCategoryId) => void;
  isCategoryExpanded: (category: GraphCategoryId) => boolean;
  setFocusedNodeId: (id: string | null) => void;
  focusNode: (nodeId: string, category: GraphCategoryId) => void;
  setCommandPaletteOpen: (open: boolean) => void;
}

export const useGraphStore = create<GraphStore>((set, get) => ({
  isGraphMode: true,
  expandedCategories: new Set<GraphCategoryId>(),
  focusedNodeId: null,
  commandPaletteOpen: false,

  setGraphMode: (value) => set({ isGraphMode: value }),

  toggleCategory: (category) =>
    set((state) => {
      const next = new Set(state.expandedCategories);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return { expandedCategories: next };
    }),

  expandCategory: (category) =>
    set((state) => ({
      expandedCategories: new Set(state.expandedCategories).add(category),
    })),

  isCategoryExpanded: (category) => get().expandedCategories.has(category),

  setFocusedNodeId: (id) => set({ focusedNodeId: id }),

  focusNode: (nodeId, category) =>
    set((state) => ({
      focusedNodeId: nodeId,
      expandedCategories: new Set(state.expandedCategories).add(category),
    })),

  setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
}));
