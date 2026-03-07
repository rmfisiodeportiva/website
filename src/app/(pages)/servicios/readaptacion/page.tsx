import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { physioWhatsAppHref } from "@/lib/home-page-data";
import {
  readaptationPlan,
  readaptacionBookingContent,
  readaptacionHeroContent,
  readaptacionPageMetadata,
} from "./constants";
import sharedStyles from "../services-global.module.css";
import styles from "./readaptacion-page.module.css";

export const metadata: Metadata = readaptacionPageMetadata;

export default function ReadaptacionPage() {
  return (
    <main className={`${sharedStyles.page} page-flow`}>
      <section className={`${sharedStyles.heroSection} hero-section`}>
        <div className="electric-lines" aria-hidden="true" />
        <div className={sharedStyles.heroInner}>
          <div>
            <p className={sharedStyles.eyebrow}>{readaptacionHeroContent.eyebrow}</p>
            <h1 className={sharedStyles.heroTitle}>{readaptacionHeroContent.title}</h1>
            <p className={`${sharedStyles.heroLead} ${styles.heroLead}`}>
              {readaptacionHeroContent.description}
            </p>
            <div className={sharedStyles.ctaRow}>
              <WhatsAppButton href={physioWhatsAppHref} className={sharedStyles.buttonPrimary}>
                {readaptacionHeroContent.primaryCta.label}
              </WhatsAppButton>
              <Link href={readaptacionHeroContent.secondaryCta.href} className={sharedStyles.buttonGhost}>
                {readaptacionHeroContent.secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className={sharedStyles.heroMediaCard}>
            <div className={sharedStyles.heroMedia}>
              <Image
                src={readaptacionHeroContent.image.src}
                alt={readaptacionHeroContent.image.alt}
                fill
                className={sharedStyles.imageCover}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${sharedStyles.section} ${sharedStyles.sectionLast}`}>
        <article className={sharedStyles.infoCard}>
          <p className={sharedStyles.eyebrow}>{readaptationPlan.title}</p>
          <h2 className={sharedStyles.cardTitle}>{readaptationPlan.subtitle}</h2>

          <div className={styles.longText}>
            {readaptationPlan.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className={sharedStyles.bulletList}>
            {readaptationPlan.bullets.map((bullet) => (
              <li key={bullet} className={sharedStyles.bulletItem}>
                <span aria-hidden="true" className={sharedStyles.bulletDot} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <p className={styles.closingText}>{readaptationPlan.closing}</p>
        </article>

        <div className={sharedStyles.panel}>
          <p className={sharedStyles.eyebrow}>{readaptacionBookingContent.eyebrow}</p>
          <h2 className={sharedStyles.sectionTitle}>{readaptacionBookingContent.title}</h2>
          <p className={sharedStyles.text}>{readaptacionBookingContent.description}</p>
          <div className={sharedStyles.ctaRow}>
            <WhatsAppButton href={physioWhatsAppHref} className={sharedStyles.buttonPrimary}>
              {readaptacionBookingContent.ctas[0].label}
            </WhatsAppButton>
            <Link href={readaptacionBookingContent.ctas[1].href} className={sharedStyles.buttonGhost}>
              {readaptacionBookingContent.ctas[1].label}
            </Link>
            <Link href={readaptacionBookingContent.ctas[2].href} className={sharedStyles.buttonGhost}>
              {readaptacionBookingContent.ctas[2].label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
