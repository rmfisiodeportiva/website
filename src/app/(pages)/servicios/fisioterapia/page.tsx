import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  fisioterapiaHeroContent,
  fisioterapiaPageMetadata,
  physioProcess,
  fisioterapiaSectionsContent,
  fisioterapiaMainContent,
} from "./constants";
import { physioWhatsAppHref } from "@/lib/constants/contact";
import sharedStyles from "../services-global.module.css";
import styles from "./fisioterapia-page.module.css";

export const metadata: Metadata = fisioterapiaPageMetadata;

export default function FisioterapiaPage() {
  return (
    <main className={`${sharedStyles.page} page-flow`}>
      <section className={`${sharedStyles.heroSection} hero-section`}>
        <div className="electric-lines" aria-hidden="true" />
        <div className={sharedStyles.heroInner}>
          <div
            className={sharedStyles.heroContentWithMedia}
            style={{ "--hero-bg": `url(${fisioterapiaHeroContent.image.src})` } as CSSProperties}
          >
            <p className={sharedStyles.heroEyebrow}>{fisioterapiaHeroContent.eyebrow}</p>
            <h1 className="sr-only">{fisioterapiaHeroContent.title}</h1>
            <p className={`${sharedStyles.heroLead} ${styles.heroLead}`}>
              {fisioterapiaHeroContent.description}
            </p>
            <div className={sharedStyles.ctaRow}>
              <WhatsAppButton href={physioWhatsAppHref} className="btn-primary gap-2">
                {fisioterapiaHeroContent.primaryCta.label}
              </WhatsAppButton>
              <Link href={fisioterapiaHeroContent.secondaryCta.href} className="btn-ghost">
                {fisioterapiaHeroContent.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={sharedStyles.section}>
        <div className={sharedStyles.sectionHeading}>
          <p className={sharedStyles.eyebrow}>{fisioterapiaSectionsContent.process.eyebrow}</p>
          <h2 className={sharedStyles.sectionTitle}>{fisioterapiaSectionsContent.process.title}</h2>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.timeline}>
          {physioProcess.map((step, index) => (
            <div key={step} className={styles.timelineItem}>
              <span className={styles.timelineMarker}>
                <span className={styles.processNumber}>{String(index + 1).padStart(2, "0")}</span>
              </span>
              <p className={styles.processText}>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={sharedStyles.section}>
        <article className={sharedStyles.textBlock}>
          {fisioterapiaMainContent.paragraphs.map((paragraph) => (
            <p key={paragraph} className={sharedStyles.cardText}>
              {paragraph}
            </p>
          ))}
          <ul className={sharedStyles.bulletList}>
            {fisioterapiaMainContent.bullets.map((bullet) => (
              <li key={bullet} className={sharedStyles.bulletItem}>
                <span aria-hidden="true" className={sharedStyles.bulletDot} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <p className={sharedStyles.cardText}>{fisioterapiaMainContent.closing}</p>
        </article>
      </section>

      <section>
        <div className={`${sharedStyles.panel}`}>
          <p className={sharedStyles.eyebrow}>{fisioterapiaSectionsContent.booking.eyebrow}</p>
          <h2 className={sharedStyles.sectionTitle}>{fisioterapiaSectionsContent.booking.title}</h2>
          <p className={sharedStyles.text}>{fisioterapiaSectionsContent.booking.description}</p>
          <div className={sharedStyles.ctaRow}>
            <WhatsAppButton href={physioWhatsAppHref} className="btn-primary gap-2">
              {fisioterapiaSectionsContent.booking.primaryCta.label}
            </WhatsAppButton>
            <Link href={fisioterapiaSectionsContent.booking.secondaryCta.href} className="btn-ghost">
              {fisioterapiaSectionsContent.booking.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
