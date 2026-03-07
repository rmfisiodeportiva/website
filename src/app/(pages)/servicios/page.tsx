import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { detailedServices } from "@/lib/extra-pages-data";
import sharedStyles from "./services-global.module.css";
import styles from "./servicios-page.module.css";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de fisioterapia y entrenamiento físico en Rehab Strength (Molina de Segura, Murcia) para recuperación, readaptación y fuerza.",
};

export default function ServiciosPage() {
  return (
    <main className={`${sharedStyles.page} page-flow`}>
      <section className={`${sharedStyles.heroSection} hero-section`}>
        <div className="electric-lines" aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className={sharedStyles.eyebrow}>Servicios</p>
          <h1 className={sharedStyles.heroTitle}>Fisioterapia y entrenamiento físico</h1>
          <p className={`${sharedStyles.heroLead} ${styles.heroLead}`}>
            Dos servicios complementarios para tratar dolor, recuperar función y seguir progresando
            con fuerza y control.
          </p>
        </div>
      </section>

      <section className={`${sharedStyles.section} ${sharedStyles.sectionLast}`}>
        <div className={styles.servicesGrid}>
          {detailedServices.map((service, index) => (
            <article key={service.title} className={styles.serviceCard}>
              <div className={styles.serviceMedia}>
                <Image
                  src={index === 1 ? "/images/green.avif" : "/images/grey.avif"}
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
          <Link href="/tarifas" className={sharedStyles.buttonGhost}>
            Ver tarifas
          </Link>
          <Link href="/horarios-entrenamientos" className={sharedStyles.buttonGhost}>
            Ver horarios de entrenamiento
          </Link>
        </div>
      </section>
    </main>
  );
}
