import { CommandPalette } from "@/components/common/command-palette";
import { FloatingDock } from "@/components/common/floating-dock";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <FloatingDock />
      <CommandPalette />
      <main className="flex-1">{children}</main>
    </div>
  );
}
