"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: { title: string; href: string; disabled?: boolean }[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <div className="flex gap-6 md:gap-10 items-center w-full">
      <Link
        href="/"
        className="hidden items-center space-x-2 md:flex font-heading text-xl text-foreground hover:text-foreground/80 transition-colors"
      >
        {siteConfig.authorName}
      </Link>
      {items?.length ? (
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {items.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.disabled ? "#" : item.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-accent/50",
                      pathname === item.href || pathname?.startsWith(`${item.href}/`)
                        ? "text-foreground font-medium"
                        : "text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      ) : null}
      <div className="hidden md:flex ml-auto items-center gap-2">
        {children}
      </div>
      <button
        type="button"
        className="flex flex-1 min-w-0 items-center justify-center gap-2 py-3 -mx-4 -my-2.5 rounded-full hover:bg-accent md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        aria-label={showMobileMenu ? "Close menu" : "Open menu"}
      >
        {showMobileMenu ? <Icons.close className="h-5 w-5" /> : <Icons.menu className="h-5 w-5" />}
        <span className="font-medium text-sm">Menu</span>
      </button>
      {items?.length ? (
        <Dialog open={showMobileMenu} onOpenChange={setShowMobileMenu}>
          <DialogContent
            className="max-h-[85dvh] overflow-y-auto w-[calc(100vw-2rem)] max-w-sm p-0 gap-0 rounded-xl md:hidden"
          >
            <DialogTitle className="sr-only">Navigation menu</DialogTitle>
            <div className="p-6 pt-10 pr-12">
              <MobileNav items={items}>{children}</MobileNav>
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  );
}
