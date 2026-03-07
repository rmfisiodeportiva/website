import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { physioProcess } from "@/lib/extra-pages-data";
import { physioWhatsAppHref } from "@/lib/constants/contact";
import {
  fisioterapiaHeroContent,
  fisioterapiaMainContent,
  fisioterapiaPageMetadata,
  fisioterapiaSectionsContent,
} from "./constants";
import sharedStyles from "../services-global.module.css";
import styles from "./fisioterapia-page.module.css";

export const metadata: Metadata = fisioterapiaPageMetadata;

export default function FisioterapiaPage() {
  return (
    <main className={`${sharedStyles.page} page-flow`}>
      <section className={`${sharedStyles.heroSection} hero-section`}>
        <div className="electric-lines" aria-hidden="true" />
        <div className={sharedStyles.heroInner}>
          <div>
            <p className={sharedStyles.eyebrow}>{fisioterapiaHeroContent.eyebrow}</p>
            <h1 className={sharedStyles.heroTitle}>{fisioterapiaHeroContent.title}</h1>
            <h2 className={sharedStyles.sectionTitle}>{fisioterapiaHeroContent.subtitle}</h2>
            <p className={`${sharedStyles.heroLead} ${styles.heroLead}`}>
              {fisioterapiaHeroContent.description}
            </p>
            <div className={sharedStyles.ctaRow}>
              <WhatsAppButton href={physioWhatsAppHref} className={sharedStyles.buttonPrimary}>
                {fisioterapiaHeroContent.primaryCta.label}
              </WhatsAppButton>
              <Link href={fisioterapiaHeroContent.secondaryCta.href} className={sharedStyles.buttonGhost}>
                {fisioterapiaHeroContent.secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className={sharedStyles.heroMediaCard}>
            <div className={sharedStyles.heroMedia}>
              <Image
                src={fisioterapiaHeroContent.image.src}
                alt={fisioterapiaHeroContent.image.alt}
                fill
                className={sharedStyles.imageCover}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={sharedStyles.section}>
        <div className={sharedStyles.sectionHeading}>
          <p className={sharedStyles.eyebrow}>{fisioterapiaSectionsContent.process.eyebrow}</p>
          <h2 className={sharedStyles.sectionTitle}>{fisioterapiaSectionsContent.process.title}</h2>
        </div>
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
        <article className={sharedStyles.infoCard}>
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

      <section className={`${sharedStyles.section} ${sharedStyles.sectionLast}`}>
        <div className={sharedStyles.panel}>
          <p className={sharedStyles.eyebrow}>{fisioterapiaSectionsContent.booking.eyebrow}</p>
          <h2 className={sharedStyles.sectionTitle}>{fisioterapiaSectionsContent.booking.title}</h2>
          <p className={sharedStyles.text}>{fisioterapiaSectionsContent.booking.description}</p>
          <div className={sharedStyles.ctaRow}>
            <WhatsAppButton href={physioWhatsAppHref} className={sharedStyles.buttonPrimary}>
              {fisioterapiaSectionsContent.booking.primaryCta.label}
            </WhatsAppButton>
            <Link href={fisioterapiaSectionsContent.booking.secondaryCta.href} className={sharedStyles.buttonGhost}>
              {fisioterapiaSectionsContent.booking.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
