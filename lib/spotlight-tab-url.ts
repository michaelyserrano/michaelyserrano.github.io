/**
 * URL hash as the trigger for spotlight tab when coming from command palette.
 * Avoids React state/context/portal issues by using the browser's location.
 */

export type SpotlightTabId =
  | "experience"
  | "projects"
  | "education"
  | "skills";

const HASH_PREFIX = "spotlight-";

const VALID_TABS: SpotlightTabId[] = [
  "projects",
  "experience",
  "education",
  "skills",
];

export function spotlightHashForTab(
  tab: SpotlightTabId,
  cardId?: string | null
): string {
  if (!cardId?.trim()) return `${HASH_PREFIX}${tab}`;
  return `${HASH_PREFIX}${tab}-${cardId}`;
}

export interface TabAndCard {
  tab: SpotlightTabId;
  cardId: string | null;
}

/** Returns null when there is no valid spotlight hash (e.g. empty or wrong prefix). */
export function tabAndCardFromSpotlightHash(hash: string): TabAndCard | null {
  const normalized = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!normalized.startsWith(HASH_PREFIX)) {
    return null;
  }
  const after = normalized.slice(HASH_PREFIX.length);
  if (!after) return null;
  const firstDash = after.indexOf("-");
  if (firstDash === -1) {
    const tab = after as SpotlightTabId;
    return VALID_TABS.includes(tab) ? { tab, cardId: null } : null;
  }
  const tab = after.slice(0, firstDash) as SpotlightTabId;
  const cardId = after.slice(firstDash + 1).trim() || null;
  return VALID_TABS.includes(tab) ? { tab, cardId } : null;
}

export function tabFromSpotlightHash(hash: string): SpotlightTabId | null {
  const result = tabAndCardFromSpotlightHash(hash);
  return result?.tab ?? null;
}

export const SPOTLIGHT_TAB_EVENT = "spotlight-tab-request";

export function setSpotlightTabViaHash(
  tab: SpotlightTabId,
  cardId?: string | null
): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(SPOTLIGHT_TAB_EVENT, { detail: { tab } }));
  window.location.hash = spotlightHashForTab(tab, cardId);
}
