import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { trainingWhatsAppHref } from "@/lib/home-page-data";
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
          <div>
            <p className={sharedStyles.eyebrow}>{entrenamientoHeroContent.eyebrow}</p>
            <h1 className={sharedStyles.heroTitle}>{entrenamientoHeroContent.title}</h1>
            <p className={`${sharedStyles.heroLead} ${styles.heroLead}`}>
              {entrenamientoHeroContent.description}
            </p>
            <div className={sharedStyles.ctaRow}>
              <WhatsAppButton href={trainingWhatsAppHref} className={sharedStyles.buttonPrimary}>
                {entrenamientoHeroContent.primaryCta.label}
              </WhatsAppButton>
              <Link href={entrenamientoHeroContent.secondaryCta.href} className={sharedStyles.buttonGhost}>
                {entrenamientoHeroContent.secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className={sharedStyles.heroMediaCard}>
            <div className={sharedStyles.heroMedia}>
              <Image
                src={entrenamientoHeroContent.image.src}
                alt={entrenamientoHeroContent.image.alt}
                fill
                className={sharedStyles.imageCover}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${sharedStyles.section} ${sharedStyles.sectionLast}`}>
        <div className={styles.programGrid}>
          {trainingPrograms.map((program) => (
            <article key={program.title} className={sharedStyles.infoCard}>
              <p className={sharedStyles.eyebrow}>{program.title}</p>
              {program.subtitle ? <h2 className={sharedStyles.cardTitle}>{program.subtitle}</h2> : null}
              <p className={sharedStyles.cardText}>{program.description}</p>
              <ul className={sharedStyles.bulletList}>
                {program.bullets.map((bullet) => (
                  <li key={bullet} className={sharedStyles.bulletItem}>
                    <span aria-hidden="true" className={sharedStyles.bulletDot} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={sharedStyles.panel}>
          <p className={sharedStyles.eyebrow}>{entrenamientoBookingContent.eyebrow}</p>
          <h2 className={sharedStyles.sectionTitle}>{entrenamientoBookingContent.title}</h2>
          <p className={sharedStyles.text}>{entrenamientoBookingContent.description}</p>
          <div className={sharedStyles.ctaRow}>
            <WhatsAppButton href={trainingWhatsAppHref} className={sharedStyles.buttonPrimary}>
              {entrenamientoBookingContent.ctas[0].label}
            </WhatsAppButton>
            <Link href={entrenamientoBookingContent.ctas[1].href} className={sharedStyles.buttonGhost}>
              {entrenamientoBookingContent.ctas[1].label}
            </Link>
            <Link href={entrenamientoBookingContent.ctas[2].href} className={sharedStyles.buttonGhost}>
              {entrenamientoBookingContent.ctas[2].label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
