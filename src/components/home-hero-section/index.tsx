import Image from "next/image";
import styles from "./home-hero-section.module.css";
import { homeHeroSectionContent } from "./constants";

export function HomeHeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.mediaWrap}>
        <div className={styles.media}>
          <Image
            src={homeHeroSectionContent.image.src}
            alt={homeHeroSectionContent.image.alt}
            fill
            className={styles.image}
            priority
          />
          <div className={styles.overlayPrimary} />
          <div className={styles.overlayTop} />

          <div className={styles.content}>
            <div className={styles.titleWrap}>
              <div className={styles.metaGroup}>
                <p className={styles.eyebrow}>{homeHeroSectionContent.eyebrow}</p>
                <p className={styles.supportingText}>{homeHeroSectionContent.supportingText}</p>
              </div>
              <h1 className={styles.title}>{homeHeroSectionContent.title}</h1>
              <p className={styles.description}>{homeHeroSectionContent.description}</p>
              <a href={homeHeroSectionContent.cta.href} className={styles.cta}>
                {homeHeroSectionContent.cta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
