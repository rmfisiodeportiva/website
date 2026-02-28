"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/tarifas", label: "Tarifas" },
  { href: "/horarios-entrenamientos", label: "Horarios" },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 shadow-[0_10px_28px_rgba(5,18,35,0.045)] backdrop-blur-xl">
      <nav
        className="flex w-full items-center justify-between px-6 py-4 lg:px-10"
        aria-label="Principal"
      >
        <Link href="/" className="group inline-flex items-center gap-3">
          <Logo src="/logo.svg" alt="Logo Rehab Strength" className="logo-image" priority />
          <span className="font-display hidden md:inline-block text-md font-bold leading-none tracking-[0.01em] text-slate-900">
            REHAB STRENGTH
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.06em] text-slate-800 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "text-[#0582c2]" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/#reserva" className="btn-secondary text-sm text-nowrap hidden min-h-12 md:inline-flex">
          Solicita cita
        </Link>
      </nav>
    </header>
  );
}
