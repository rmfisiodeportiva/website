import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { detailedServices } from "@/lib/extra-pages-data";
import {
  serviceCardImageByIndex,
  serviciosBottomLinks,
  serviciosHeroContent,
  serviciosPageMetadata,
} from "./constants";
import sharedStyles from "./services-global.module.css";
import styles from "./servicios-page.module.css";

export const metadata: Metadata = serviciosPageMetadata;

export default function ServiciosPage() {
  return (
    <main className={`${sharedStyles.page} page-flow`}>
      <section className={`${sharedStyles.heroSection} hero-section`}>
        <div className="electric-lines" aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className={sharedStyles.eyebrow}>{serviciosHeroContent.eyebrow}</p>
          <h1 className={sharedStyles.heroTitle}>{serviciosHeroContent.title}</h1>
          <p className={`${sharedStyles.heroLead} ${styles.heroLead}`}>
            {serviciosHeroContent.description}
          </p>
        </div>
      </section>

      <section className={`${sharedStyles.section} ${sharedStyles.sectionLast}`}>
        <div className={styles.servicesGrid}>
          {detailedServices.map((service, index) => (
            <article key={service.title} className={styles.serviceCard}>
              <div className={styles.serviceMedia}>
                <Image
                  src={serviceCardImageByIndex[index] ?? serviceCardImageByIndex[0]}
                  alt={service.title}
                  fill
                  className={sharedStyles.imageCover}
                />
              </div>
              <div className={styles.serviceBody}>
                <p className={sharedStyles.eyebrow}>{service.title}</p>
                <h2 className={styles.serviceTitle}>{service.subtitle}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.serviceBullets}>
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className={sharedStyles.bulletItem}>
                      <span aria-hidden="true" className={sharedStyles.bulletDot} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.serviceActions}>
                  <Link href={service.pageHref} className={sharedStyles.buttonGhost}>
                    Ver detalle
                  </Link>
                  <WhatsAppButton href={service.whatsappHref} className={sharedStyles.buttonPrimary}>
                    Reserva
                  </WhatsAppButton>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottomActions}>
          {serviciosBottomLinks.map((link) => (
            <Link key={link.href} href={link.href} className={sharedStyles.buttonGhost}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
