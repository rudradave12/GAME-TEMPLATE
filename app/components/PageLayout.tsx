import type { ReactNode } from "react";
import { useLocation } from "@remix-run/react";

export default function PageLayout({ children }: { children: ReactNode }) {
  const location = useLocation();

  // Home page should NOT push content down
  const isHome = location.pathname === "/";

  return (
    <main className={isHome ? "" : "page-layout"}>
      {children}
    </main>
  );
}