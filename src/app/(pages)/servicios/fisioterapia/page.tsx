import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  physioProcess,
  physioSpecificServices,
  physioTreatments,
} from "@/lib/extra-pages-data";
import { physioWhatsAppHref } from "@/lib/home-page-data";
import sharedStyles from "../services-global.module.css";
import styles from "./fisioterapia-page.module.css";

export const metadata: Metadata = {
  title: "Fisioterapia",
  description:
    "Fisioterapia en Molina de Segura (Murcia): valoración, diagnóstico funcional, tratamiento y plan de ejercicio.",
};

export default function FisioterapiaPage() {
  return (
    <main className={`${sharedStyles.page} page-flow`}>
      <section className={`${sharedStyles.heroSection} hero-section`}>
        <div className="electric-lines" aria-hidden="true" />
        <div className={sharedStyles.heroInner}>
          <div>
            <p className={sharedStyles.eyebrow}>Fisioterapia</p>
            <h1 className={sharedStyles.heroTitle}>Enfoque clínico, movimiento y fuerza</h1>
            <p className={`${sharedStyles.heroLead} ${styles.heroLead}`}>
              Tratamos dolor y lesiones con un enfoque activo: evaluación, tratamiento y ejercicio
              para que recuperes función y vuelvas a moverte con seguridad.
            </p>
            <div className={sharedStyles.ctaRow}>
              <WhatsAppButton href={physioWhatsAppHref} className={sharedStyles.buttonPrimary}>
                Reserva fisioterapia
              </WhatsAppButton>
              <Link href="/tarifas" className={sharedStyles.buttonGhost}>
                Ver tarifas
              </Link>
            </div>
          </div>
          <div className={sharedStyles.heroMediaCard}>
            <div className={sharedStyles.heroMedia}>
              <Image
                src="/images/grey.avif"
                alt="Zona de trabajo del centro en Molina de Segura"
                fill
                className={sharedStyles.imageCover}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={sharedStyles.section}>
        <div className={sharedStyles.sectionHeading}>
          <p className={sharedStyles.eyebrow}>Proceso del paciente</p>
          <h2 className={sharedStyles.sectionTitle}>
            Te acompañamos con un proceso claro desde la primera visita.
          </h2>
        </div>
        <div className={styles.processGrid}>
          {physioProcess.map((step, index) => (
            <div key={step} className={styles.processItem}>
              <span className={styles.processNumber}>{String(index + 1).padStart(2, "0")}</span>
              <p className={styles.processText}>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={sharedStyles.section}>
        <div className={sharedStyles.cardsGridTwo}>
          <article className={sharedStyles.infoCard}>
            <p className={sharedStyles.eyebrow}>Tratamientos</p>
            <h2 className={sharedStyles.cardTitle}>Herramientas de trabajo</h2>
            <ul className={sharedStyles.bulletList}>
              {physioTreatments.map((item) => (
                <li key={item} className={sharedStyles.bulletItem}>
                  <span aria-hidden="true" className={sharedStyles.bulletDot} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className={sharedStyles.infoCard}>
            <p className={sharedStyles.eyebrow}>Servicios específicos</p>
            <h2 className={sharedStyles.cardTitle}>Casos frecuentes</h2>
            <ul className={sharedStyles.bulletList}>
              {physioSpecificServices.map((item) => (
                <li key={item} className={sharedStyles.bulletItem}>
                  <span aria-hidden="true" className={sharedStyles.bulletDot} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className={`${sharedStyles.section} ${sharedStyles.sectionLast}`}>
        <div className={sharedStyles.panel}>
          <p className={sharedStyles.eyebrow}>Reserva</p>
          <h2 className={sharedStyles.sectionTitle}>Solicita tu valoración o cita de fisioterapia</h2>
          <p className={sharedStyles.text}>
            Cuéntanos tu caso y te orientamos según tu dolor, lesión o fase de recuperación.
            Confirmamos la cita por WhatsApp.
          </p>
          <div className={sharedStyles.ctaRow}>
            <WhatsAppButton href={physioWhatsAppHref} className={sharedStyles.buttonPrimary}>
              Solicita cita
            </WhatsAppButton>
            <Link href="/servicios" className={sharedStyles.buttonGhost}>
              Volver a servicios
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
