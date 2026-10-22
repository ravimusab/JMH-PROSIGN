import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <div className="flex h-2" aria-hidden="true">
        <span className="flex-1 bg-cobalt" />
        <span className="flex-1 bg-ember" />
        <span className="w-10 bg-ink" />
        <span className="flex-1 bg-ember" />
        <span className="flex-1 bg-cobalt" />
      </div>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
