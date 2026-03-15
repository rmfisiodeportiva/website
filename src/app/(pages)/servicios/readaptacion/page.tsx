import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { physioWhatsAppHref } from "@/lib/constants/contact";
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
          <div
            className={sharedStyles.heroContentWithMedia}
            style={{ "--hero-bg": `url(${readaptacionHeroContent.image.src})` } as CSSProperties}
          >
            <p className={sharedStyles.heroEyebrow}>{readaptacionHeroContent.eyebrow}</p>
            <h1 className="sr-only">{readaptacionHeroContent.title}</h1>
            <p className={`${sharedStyles.heroLead} ${styles.heroLead}`}>
              {readaptacionHeroContent.description}
            </p>
            <div className={sharedStyles.ctaRow}>
              <WhatsAppButton href={physioWhatsAppHref} className="btn-primary gap-2">
                {readaptacionHeroContent.primaryCta.label}
              </WhatsAppButton>
              <Link href={readaptacionHeroContent.secondaryCta.href} className="btn-ghost">
                {readaptacionHeroContent.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${sharedStyles.section}`}>
        <article className={sharedStyles.textBlock}>
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

      </section>
      <section>
        <div className={sharedStyles.panel}>
          <p className={sharedStyles.eyebrow}>{readaptacionBookingContent.eyebrow}</p>
          <h2 className={sharedStyles.sectionTitle}>{readaptacionBookingContent.title}</h2>
          <p className={sharedStyles.text}>{readaptacionBookingContent.description}</p>
          <div className={sharedStyles.ctaRow}>
            <WhatsAppButton href={physioWhatsAppHref} className="btn-primary gap-2">
              {readaptacionBookingContent.ctas[0].label}
            </WhatsAppButton>
            <Link href={readaptacionBookingContent.ctas[1].href} className="btn-ghost">
              {readaptacionBookingContent.ctas[1].label}
            </Link>
            <Link href={readaptacionBookingContent.ctas[2].href} className="btn-ghost">
              {readaptacionBookingContent.ctas[2].label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
