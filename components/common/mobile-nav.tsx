import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: { title: string; href: string; disabled?: boolean }[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  return (
    <div className="mx-auto w-full space-y-6">
      <Link
        href="/"
        className="block font-heading text-xl font-semibold text-foreground"
      >
        {siteConfig.authorName}
      </Link>
      <nav className="flex flex-col gap-1 text-base">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.disabled ? "#" : item.href}
            className={cn(
              "rounded-lg py-2.5 px-3 font-medium text-foreground hover:bg-accent hover:text-accent-foreground",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      {children ? (
        <div className="flex flex-wrap items-center gap-3 border-t border-border/60 pt-4">
          {children}
        </div>
      ) : null}
    </div>
  );
}
