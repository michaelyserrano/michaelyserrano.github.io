import { DockAndCommand } from "@/components/common/dock-and-command";
import { SpotlightTabProvider } from "@/components/providers/spotlight-tab-provider";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <SpotlightTabProvider>
      <div className="flex min-h-screen flex-col">
        <DockAndCommand />
        <main className="flex-1">{children}</main>
      </div>
    </SpotlightTabProvider>
  );
}
