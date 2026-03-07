import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { physioWhatsAppHref } from "@/lib/home-page-data";
import sharedStyles from "../services-global.module.css";
import styles from "./readaptacion-page.module.css";

export const metadata: Metadata = {
  title: "Plan de Readaptación",
  description:
    "Plan de readaptación en Molina de Segura (Murcia): fisioterapia y entrenamiento coordinados para volver a moverte sin dolor y retomar tu actividad con seguridad.",
};

const readaptationPlan = {
  title: "Plan de readaptación",
  subtitle: "Fisioterapia y entrenamiento para volver a moverte sin dolor.",
  description: [
    "Nuestro plan de readaptación está diseñado para personas que han sufrido una lesión y necesitan un proceso guiado para recuperar la función, volver a entrenar o retomar su actividad diaria o deportiva con seguridad.",
    "Este servicio combina sesiones de fisioterapia y sesiones de entrenamiento, trabajando de forma coordinada para tratar la lesión, recuperar la movilidad, fortalecer la zona afectada y reducir el riesgo de recaídas.",
    "El proceso comienza con una evaluación inicial, donde analizamos la lesión, el estado funcional y las limitaciones actuales. A partir de esta valoración se establece un plan individualizado, determinando cuántas sesiones de fisioterapia y de entrenamiento serán necesarias según cada caso.",
    "Durante el proceso se ajusta el trabajo según la evolución, pasando progresivamente del tratamiento al trabajo activo para lograr una recuperación completa.",
  ],
  bullets: [
    "Evaluación inicial y valoración funcional",
    "Plan individualizado de fisioterapia y entrenamiento",
    "Trabajo progresivo de movilidad, fuerza y estabilidad",
    "Recuperación orientada a volver a tu actividad o deporte",
    "Seguimiento continuo para minimizar recaídas",
  ],
  closing:
    "El objetivo no es solo tratar la lesión, sino ayudarte a recuperar tu funcionalidad y volver a moverte con confianza.",
} as const;

export default function ReadaptacionPage() {
  return (
    <main className={`${sharedStyles.page} page-flow`}>
      <section className={`${sharedStyles.heroSection} hero-section`}>
        <div className="electric-lines" aria-hidden="true" />
        <div className={sharedStyles.heroInner}>
          <div>
            <p className={sharedStyles.eyebrow}>Readaptación</p>
            <h1 className={sharedStyles.heroTitle}>Plan de readaptación</h1>
            <p className={`${sharedStyles.heroLead} ${styles.heroLead}`}>
              Fisioterapia y entrenamiento coordinados para recuperar función, reducir recaídas y
              volver a tu actividad con seguridad.
            </p>
            <div className={sharedStyles.ctaRow}>
              <WhatsAppButton href={physioWhatsAppHref} className={sharedStyles.buttonPrimary}>
                Solicita valoración
              </WhatsAppButton>
              <Link href="/horarios-entrenamientos" className={sharedStyles.buttonGhost}>
                Ver horarios
              </Link>
            </div>
          </div>
          <div className={sharedStyles.heroMediaCard}>
            <div className={sharedStyles.heroMedia}>
              <Image
                src="/images/green.avif"
                alt="Entrenamiento guiado para recuperación y readaptación"
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
          <p className={sharedStyles.eyebrow}>Reserva y valoración</p>
          <h2 className={sharedStyles.sectionTitle}>Cuéntanos tu caso y te orientamos</h2>
          <p className={sharedStyles.text}>
            Valoramos tu lesión y tu estado actual para definir un plan progresivo de readaptación,
            combinando fisioterapia y entrenamiento según tus necesidades.
          </p>
          <div className={sharedStyles.ctaRow}>
            <WhatsAppButton href={physioWhatsAppHref} className={sharedStyles.buttonPrimary}>
              Solicita información
            </WhatsAppButton>
            <Link href="/tarifas" className={sharedStyles.buttonGhost}>
              Ver tarifas
            </Link>
            <Link href="/servicios/fisioterapia" className={sharedStyles.buttonGhost}>
              Ver fisioterapia
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
