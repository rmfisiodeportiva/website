import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { trainingWhatsAppHref } from "@/lib/home-page-data";

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
    <main className="page-flow">
      <section className="hero-section">
        <div className="electric-lines" aria-hidden="true" />
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[1fr_0.95fr] lg:px-10 lg:py-24">
          <div>
            <p className="eyebrow">Entrenamiento físico</p>
            <h1 className="hero-title">Fuerza como pilar del rendimiento y la salud</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--neutral-950)]">
              Entrenamiento para mejorar fuerza, rendimiento y salud con progresión estructurada,
              supervisión y foco en prevención de lesiones.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton href={trainingWhatsAppHref} className="btn-primary gap-2">
                Solicita plaza
              </WhatsAppButton>
              <Link href="/horarios-entrenamientos" className="btn-ghost">
                Ver horarios
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_36px_var(--shadow-card-a08)]">
            <div className="relative h-[360px] w-full">
              <Image src="/images/green.avif" alt="Barra y discos de entrenamiento en el centro" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {trainingPrograms.map((program) => (
            <article key={program.title} className="info-card">
              <p className="eyebrow">{program.title}</p>
              {program.subtitle ? (
                <h2 className="font-display text-3xl text-slate-900">{program.subtitle}</h2>
              ) : null}
              <p className="mt-4 text-[var(--neutral-950)]">{program.description}</p>
              <ul className="mt-6 grid gap-3 text-[var(--neutral-950)]">
                {program.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_var(--shadow-card-a08)] md:p-8">
          <p className="eyebrow">Reserva y plazas</p>
          <h2 className="font-display text-3xl text-slate-900">Cuéntanos qué necesitas y te orientamos</h2>
          <p className="mt-4 max-w-3xl text-[var(--neutral-950)]">
            Indica si buscas grupos reducidos, entrenamiento personal, rendimiento deportivo u
            opción online. Te orientamos según tu objetivo, experiencia y disponibilidad.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <WhatsAppButton href={trainingWhatsAppHref} className="btn-primary gap-2">
              Solicita información
            </WhatsAppButton>
            <Link href="/tarifas" className="btn-ghost">
              Ver tarifas
            </Link>
            <Link href="/horarios-entrenamientos" className="btn-ghost">
              Ver horarios
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
