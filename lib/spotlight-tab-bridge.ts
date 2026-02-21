/**
 * Bridge so the command palette (which may run in a portal) can set the
 * spotlight tab by calling the provider's setState directly, avoiding
 * context/portal re-render issues.
 */

export type SpotlightTabId =
  | "experience"
  | "projects"
  | "education"
  | "skills";

type Setter = (tab: SpotlightTabId) => void;

const setterRef: { current: Setter | null } = { current: null };

export function registerSpotlightTabSetter(setter: Setter): () => void {
  setterRef.current = setter;
  return () => {
    setterRef.current = null;
  };
}

export function requestSpotlightTab(tab: SpotlightTabId): void {
  setterRef.current?.(tab);
}
