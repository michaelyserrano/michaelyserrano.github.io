/**
 * Format experience date range for display.
 */
export function formatExperienceDate(
  start: Date,
  end: Date | "Present"
): string {
  const startStr = start.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  const endStr =
    end === "Present"
      ? "Present"
      : end.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        });
  return `${startStr} – ${endStr}`;
}
