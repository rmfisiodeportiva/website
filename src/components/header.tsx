"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/tarifas", label: "Tarifas" },
  { href: "/horarios-entrenamientos", label: "Horarios" },
] as const;

const serviceItems = [
  { href: "/servicios/fisioterapia", label: "Fisioterapia" },
  { href: "/servicios/entrenamiento", label: "Entrenamiento" },
  { href: "/servicios/readaptacion", label: "Readaptación" },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white shadow-[0_10px_28px_rgba(5,18,35,0.045)] backdrop-blur-xl">
      <nav
        className="flex w-full items-center justify-between px-6 py-4 lg:px-10"
        aria-label="Principal"
      >
        {/* Logo */}
        <Link href="/" className="group inline-flex items-center gap-3">
          <Logo
            src="/logo.svg"
            alt="Logo Rehab Strength"
            className="logo-image"
            priority
          />
          <span className="font-display hidden md:inline-block text-md font-bold leading-none tracking-[0.01em] text-slate-900">
            REHAB STRENGTH
          </span>
        </Link>

        {/* Navegación */}
        <div className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.06em] text-slate-800 md:flex">
          {navItems.map((item) => {
            if (item.label === "Servicios") {
              return (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`nav-link ${
                      pathname.startsWith("/servicios") ? "text-[#0582c2]" : ""
                    } relative inline-flex items-center px-3 py-2`}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1 text-[#0582c2] opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  {/* Dropdown */}
                  <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                    <div className="flex flex-col items-center gap-1 bg-white">
                      {serviceItems.map((service, index) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`block w-full p-2 text-center text-sm font-semibold uppercase tracking-[0.04em] text-slate-700 transition-colors duration-200 hover:text-[#0582c2] hover:underline ${
                            index !== 0 ? "mt-1" : ""
                          }`}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  pathname === item.href ? "text-[#0582c2]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Botón CTA */}
        <Link
          href="/#reserva"
          className="btn-secondary text-sm text-nowrap hidden min-h-12 md:inline-flex"
        >
          Solicita cita
        </Link>
      </nav>
    </header>
  );
}
