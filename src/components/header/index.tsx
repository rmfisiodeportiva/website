"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import styles from "./header.module.css";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/tarifas", label: "Tarifas" },
  { href: "/horarios-entrenamientos", label: "Horarios" },
] as const;

const serviceItems = [
  { href: "/servicios/fisioterapia", label: "Fisioterapia" },
  { href: "/servicios/entrenamiento", label: "Entrenamiento" },
  { href: "/servicios/adaptacion", label: "Adaptación" },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Principal">
        <Link href="/" className={styles.brandLink}>
          <Logo src="/logo.svg" alt="Logo Rehab Strength" className="logo-image" priority />
          <span className={styles.brandText}>REHAB STRENGTH</span>
        </Link>

        <div className={styles.navigation}>
          {navItems.map((item) => {
            if (item.label === "Servicios") {
              return (
                <div key={item.href} className={styles.menuItemGroup}>
                  <Link
                    href={item.href}
                    className={`${styles.menuLink} ${styles.servicesLink} ${
                      pathname.startsWith("/servicios") ? styles.activeLink : ""
                    }`}
                  >
                    {item.label}
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={styles.servicesArrow}>
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  <div className={styles.dropdown}>
                    <div className={styles.dropdownList}>
                      {serviceItems.map((service) => (
                        <Link key={service.href} href={service.href} className={styles.dropdownItem}>
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
                className={`${styles.menuLink} ${pathname === item.href ? styles.activeLink : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link href="/#reserva" className={`${styles.ctaButton} btn-secondary`}>
          Solicita cita
        </Link>
      </nav>
    </header>
  );
}
