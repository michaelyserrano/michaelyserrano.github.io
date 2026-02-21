"use client";

import * as React from "react";

/**
 * Renders children only after the component has mounted on the client.
 * Use to avoid hydration mismatches from components that generate different
 * server vs client markup (e.g. Radix UI aria-controls IDs).
 */
export function ClientOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return <>{fallback}</>;
  return <>{children}</>;
}
