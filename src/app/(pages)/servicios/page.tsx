import type { Metadata } from "next";
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
          <h1 className="sr-only">
            {serviciosHeroContent.title}
          </h1>
          <p className={`${sharedStyles.heroLead} ${styles.heroLead}`}>
            {serviciosHeroContent.description}
          </p>
        </div>
      </section>

      <section className={`${sharedStyles.section} ${sharedStyles.sectionLast} ${styles.servicesSection}`}>
        <ServicesAccordionShowcase />
      </section>
    </main>
  );
}
