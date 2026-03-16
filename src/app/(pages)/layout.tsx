import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="site-shell">
      <Header />
      <div>
      {children}
      </div>
      <Footer />
    </div>
  );
}
