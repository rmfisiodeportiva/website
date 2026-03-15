import type { Metadata } from "next";
import Link from "next/link";
import {
  serviciosHeroContent,
  serviciosPageMetadata,
} from "./constants";
import { ServicesAccordionShowcase } from "./services-accordion-showcase";
import sharedStyles from "./services-global.module.css";
import styles from "./services.module.css";

export const metadata: Metadata = serviciosPageMetadata;

export default function ServiciosPage() {
  return (
    <main className={`${sharedStyles.page} page-flow`}>
      <section className={`${sharedStyles.heroSection} hero-section`}>
        <div className="electric-lines" aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className={sharedStyles.eyebrow}>{serviciosHeroContent.eyebrow}</p>
          <h1 className={styles.heroTitle}>{serviciosHeroContent.title}</h1>
          <p className={`${sharedStyles.heroLead} ${styles.heroLead}`}>
            {serviciosHeroContent.description}
          </p>
          <div className={styles.serviceJumpRow}>
            <Link href="/servicios/fisioterapia" className={styles.serviceJumpLink}>
              Fisioterapia
            </Link>
            <Link href="/servicios/entrenamiento" className={styles.serviceJumpLink}>
              Entrenamiento
            </Link>
            <Link href="/servicios/readaptacion" className={styles.serviceJumpLink}>
              Readaptación
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.accordionSection}>
        <div className={sharedStyles.panel}>
          <ServicesAccordionShowcase />
        </div>
      </section>
    </main>
  );
}
