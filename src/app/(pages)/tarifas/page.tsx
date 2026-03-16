import type { Metadata } from "next";
import { tarifasHeroContent, tarifasPageMetadata } from "./constants";
import { PricingSelector } from "./pricing-selector";
import styles from "./tarifas-page.module.css";

export const metadata: Metadata = tarifasPageMetadata;

export default function TarifasPage() {
  return (
    <main className={`${styles.main} page-flow`}>
      <section className={`${styles.heroSection} hero-section`}>
        <div className="electric-lines" aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className="eyebrow">{tarifasHeroContent.eyebrow}</p>
          <h1 className={styles.heroTitle}>{tarifasHeroContent.title}</h1>
          <p className={styles.heroDescription}>{tarifasHeroContent.description}</p>
        </div>
      </section>

      <PricingSelector />
    </main>
  );
}
