"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { useState } from "react";
import styles from "./header.module.css";

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
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [suppressDropdown, setSuppressDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const isServicesOpen = isServicesHovered && !suppressDropdown;

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Principal">
        <Link href="/" className={styles.brandLink}>
          <Logo src="/logo.svg" alt="Logo Rehab Strength" className="logo-image" priority />
          <span className={styles.brandText}>REHAB STRENGTH</span>
        </Link>

        <button
          type="button"
          className={styles.mobileMenuButton}
          aria-label="Abrir menú"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((value) => !value)}
        >
          <span className={styles.mobileMenuLine} />
          <span className={styles.mobileMenuLine} />
          <span className={styles.mobileMenuLine} />
        </button>

        <div className={styles.navigation}>
          {navItems.map((item) => {
            if (item.label === "Servicios") {
              return (
                <div
                  key={item.href}
                  className={`${styles.menuItemGroup} ${isServicesOpen ? styles.menuItemGroupOpen : ""}`}
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => {
                    setIsServicesHovered(false);
                    setSuppressDropdown(false);
                  }}
                >
                  <Link
                    href={item.href}
                    className={`${styles.menuLink} ${styles.servicesLink} ${
                      pathname.startsWith("/servicios") ? styles.activeLink : ""
                    }`}
                    onClick={() => {
                      setSuppressDropdown(true);
                      setIsServicesHovered(false);
                    }}
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
                        <Link
                          key={service.href}
                          href={service.href}
                          className={styles.dropdownItem}
                          onClick={() => {
                            setSuppressDropdown(true);
                            setIsServicesHovered(false);
                          }}
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

      <div className={`${styles.mobilePanel} ${isMobileMenuOpen ? styles.mobilePanelOpen : ""}`}>
        <div className={styles.mobileNav}>
          {navItems.map((item) => {
            if (item.label === "Servicios") {
              return (
                <div key={item.href} className={styles.mobileServicesBlock}>
                  <div className={styles.mobileServicesHeader}>
                    <Link
                      href={item.href}
                      className={`${styles.mobileLink} ${
                        pathname.startsWith("/servicios") ? styles.activeLink : ""
                      }`}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className={styles.mobileServicesToggle}
                      aria-label="Mostrar submenú de servicios"
                      aria-expanded={isMobileServicesOpen}
                      onClick={() => setIsMobileServicesOpen((value) => !value)}
                    >
                      <span className={styles.mobileServicesIcon}>{isMobileServicesOpen ? "−" : "+"}</span>
                    </button>
                  </div>

                  <div className={`${styles.mobileServicesList} ${isMobileServicesOpen ? styles.mobileServicesListOpen : ""}`}>
                    {serviceItems.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`${styles.mobileSubLink} ${
                          pathname === service.href ? styles.activeLink : ""
                        }`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileLink} ${pathname === item.href ? styles.activeLink : ""}`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsMobileServicesOpen(false);
                }}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/#reserva"
            className={`${styles.mobileCta} btn-secondary`}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsMobileServicesOpen(false);
            }}
          >
            Solicita cita
          </Link>
        </div>
      </div>
    </header>
  );
}
