import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { trainingWhatsAppHref } from "@/lib/constants/contact";
import {
  entrenamientoBookingContent,
  entrenamientoHeroContent,
  entrenamientoPageMetadata,
  trainingPrograms,
} from "./constants";
import sharedStyles from "../services-global.module.css";
import styles from "./entrenamiento-page.module.css";

export const metadata: Metadata = entrenamientoPageMetadata;

export default function EntrenamientoPage() {
  return (
    <main className={`${sharedStyles.page} page-flow`}>
      <section className={`${sharedStyles.heroSection} hero-section`}>
        <div className="electric-lines" aria-hidden="true" />
        <div className={sharedStyles.heroInner}>
          <div
            className={sharedStyles.heroContentWithMedia}
            style={{ "--hero-bg": `url(${entrenamientoHeroContent.image.src})` } as CSSProperties}
          >
            <p className={sharedStyles.heroEyebrow}>{entrenamientoHeroContent.eyebrow}</p>
            <h1 className="sr-only">{entrenamientoHeroContent.title}</h1>
            <p className={`${sharedStyles.heroLead} ${styles.heroLead}`}>
              {entrenamientoHeroContent.description}
            </p>
            <div className={sharedStyles.ctaRow}>
              <WhatsAppButton href={trainingWhatsAppHref} className="btn-primary gap-2">
                {entrenamientoHeroContent.primaryCta.label}
              </WhatsAppButton>
              <Link href={entrenamientoHeroContent.secondaryCta.href} className="btn-ghost">
                {entrenamientoHeroContent.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={sharedStyles.section}>
        <div className={styles.programsIntro}>
          <p className={sharedStyles.eyebrow}>Formatos de entrenamiento</p>
          <h2 className={styles.programsIntroTitle}>Elige el formato de entrenamiento que mejor encaja contigo.</h2>
          <p className={styles.programsIntroText}>
            Ofrecemos distintos formatos según tu objetivo, experiencia y nivel de atención que
            necesites: grupos reducidos, rendimiento, entrenamiento personal y formato online.
          </p>
        </div>
      </section>

      <section className={`${sharedStyles.section} ${sharedStyles.sectionLast} ${styles.programsSection}`}>
        <div className={styles.programGrid}>
          {trainingPrograms.map(program => {
            return (
            <article key={program.title} className={styles.programCard}>
              <div className={styles.programCardTop}>
                <p className={styles.programTitle}>{program.title}</p>
                <div className={styles.programMetaRow}>
                  {program.subtitle ? <h2 className={styles.programCapacity}>{program.subtitle}</h2> : null}
                  {program.promo ? <p className={styles.programPromoBadge}>{program.promo}</p> : null}
                </div>
                <p className={styles.programDescription}>{program.description}</p>
              </div>
              <ul className={`${sharedStyles.bulletList} ${styles.programBulletList}`}>
                {program.bullets.map((bullet) => (
                  <li key={bullet} className={`${sharedStyles.bulletItem} ${styles.programBulletItem}`}>
                    <span aria-hidden="true" className={sharedStyles.bulletDot} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          )})}
        </div>

      </section>
      <section>
        <div className={sharedStyles.panel}>
          <p className={sharedStyles.eyebrow}>{entrenamientoBookingContent.eyebrow}</p>
          <h2 className={sharedStyles.sectionTitle}>{entrenamientoBookingContent.title}</h2>
          <p className={sharedStyles.text}>{entrenamientoBookingContent.description}</p>
          <div className={sharedStyles.ctaRow}>
            <WhatsAppButton href={trainingWhatsAppHref} className="btn-primary gap-2">
              {entrenamientoBookingContent.ctas[0].label}
            </WhatsAppButton>
            <Link href={entrenamientoBookingContent.ctas[1].href} className="btn-ghost">
              {entrenamientoBookingContent.ctas[1].label}
            </Link>
            <Link href={entrenamientoBookingContent.ctas[2].href} className="btn-ghost">
              {entrenamientoBookingContent.ctas[2].label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
