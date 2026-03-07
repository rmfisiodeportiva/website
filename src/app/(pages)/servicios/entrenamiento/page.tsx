import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { trainingWhatsAppHref } from "@/lib/home-page-data";
import sharedStyles from "../services-global.module.css";
import styles from "./entrenamiento-page.module.css";

export const metadata: Metadata = {
  title: "Entrenamiento Fisico",
  description:
    "Entrenamiento físico en Molina de Segura (Murcia): grupos reducidos, entrenamiento personal, rendimiento deportivo y formato online.",
};

const trainingPrograms = [
  {
    title: "Grupos reducidos",
    subtitle: "(máximo 8 personas)",
    description:
      "Entrenamientos guiados en grupos pequeños para garantizar una atención cercana y una correcta ejecución de los ejercicios. Trabajamos fuerza, movilidad, resistencia y control corporal en sesiones dinámicas adaptadas a todos los niveles.",
    bullets: [
      "Atención personalizada dentro del grupo",
      "Programación progresiva",
      "Mejora de fuerza, condición física y salud",
    ],
  },
  {
    title: "Grupo rendimiento",
    subtitle: "(máximo 5 personas)",
    description:
      "Entrenamientos enfocados a personas que quieren llevar su rendimiento físico a un nivel superior. Ideal para deportistas o personas que buscan mejorar fuerza, potencia y capacidad física.",
    bullets: [
      "Trabajo específico de fuerza y rendimiento",
      "Control técnico de los ejercicios",
      "Programación estructurada para progresar",
    ],
  },
  {
    title: "Entrenamiento personal",
    subtitle: "(individual o dúo)",
    description:
      "Sesiones totalmente personalizadas diseñadas en función de tus objetivos, nivel y necesidades. Una opción ideal si buscas máxima atención, recuperar una lesión, mejorar tu rendimiento o empezar a entrenar con seguridad.",
    bullets: [
      "Evaluación inicial (GRATUITA)",
      "Plan de entrenamiento individualizado",
      "Seguimiento continuo de la evolución",
      "Recomendable: niños, adultos mayores, embarazo y post-parto, cualquier tipo de lesión o enfermedad que requiera máxima individualización.",
    ],
  },
  {
    title: "Entrenamiento online",
    subtitle: "",
    description:
      "Programa de entrenamiento personalizado que puedes realizar desde cualquier lugar (casa, gimnasio…). Incluye planificación adaptada a tus objetivos, nutricionista, seguimiento y ajustes periódicos para asegurar tu progreso.",
    bullets: [
      "Plan de entrenamiento individual (mínimo 3 meses)",
      "Seguimiento y comunicación constante",
      "Adaptación del programa según evolución",
    ],
  },
] as const;

export default function EntrenamientoPage() {
  return (
    <main className={`${sharedStyles.page} page-flow`}>
      <section className={`${sharedStyles.heroSection} hero-section`}>
        <div className="electric-lines" aria-hidden="true" />
        <div className={sharedStyles.heroInner}>
          <div>
            <p className={sharedStyles.eyebrow}>Entrenamiento físico</p>
            <h1 className={sharedStyles.heroTitle}>Fuerza como pilar del rendimiento y la salud</h1>
            <p className={`${sharedStyles.heroLead} ${styles.heroLead}`}>
              Entrenamiento para mejorar fuerza, rendimiento y salud con progresión estructurada,
              supervisión y foco en prevención de lesiones.
            </p>
            <div className={sharedStyles.ctaRow}>
              <WhatsAppButton href={trainingWhatsAppHref} className={sharedStyles.buttonPrimary}>
                Solicita plaza
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
                alt="Barra y discos de entrenamiento en el centro"
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
          <p className={sharedStyles.eyebrow}>Reserva y plazas</p>
          <h2 className={sharedStyles.sectionTitle}>Cuéntanos qué necesitas y te orientamos</h2>
          <p className={sharedStyles.text}>
            Indica si buscas grupos reducidos, entrenamiento personal, rendimiento deportivo u
            opción online. Te orientamos según tu objetivo, experiencia y disponibilidad.
          </p>
          <div className={sharedStyles.ctaRow}>
            <WhatsAppButton href={trainingWhatsAppHref} className={sharedStyles.buttonPrimary}>
              Solicita información
            </WhatsAppButton>
            <Link href="/tarifas" className={sharedStyles.buttonGhost}>
              Ver tarifas
            </Link>
            <Link href="/horarios-entrenamientos" className={sharedStyles.buttonGhost}>
              Ver horarios
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
