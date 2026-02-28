import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppBookingSection } from "@/components/whatsapp-booking-section";
import {
  homeJsonLd,
  physioWhatsAppHref,
  services,
  team,
  testimonials,
  trainingWhatsAppHref,
} from "@/lib/home-page-data";

export const metadata: Metadata = {
  title: "Centro de Rehabilitacion y Rendimiento",
  description:
    "Rehab Strength en Molina de Segura (Murcia): fisioterapia y entrenamiento personalizado para recuperarte con seguridad y volver más fuerte.",
};

export default function Home() {
  const serviceImages = ["/images/Pesas imagen.avif", "/images/green.avif"] as const;
  const approachItems = [
    {
      title: "Base científica",
      text: "Tratamiento y entrenamiento con base científica",
    },
    {
      title: "Plan individual",
      text: "Plan individualizado según tu punto de partida",
    },
    {
      title: "Trabajo conjunto",
      text: "Comunicación real entre fisioterapia y entrenamiento",
    },
    {
      title: "Seguimiento",
      text: "Seguimiento continuo para progresar con seguridad",
    },
    {
      title: "Comunicación",
      text: "Comunicación real entre fisioterapia y entrenamiento.",
    },
    {
      title: "Control de cargas",
      text: "Seguimiento de cargas y progresión adaptada a tu caso.",
    },
  ] as const;
  const featuredHomeServices = [
    {
      title: "Fisioterapia",
      description:
        "Valoración, tratamiento y ejercicio terapéutico para reducir dolor, recuperar movilidad y volver a tu actividad con seguridad.",
    },
    {
      title: "Entrenamiento",
      description:
        "Plan de fuerza individualizado con progresión de cargas y seguimiento para mejorar rendimiento y prevenir recaídas.",
    },
    {
      title: "Readaptación",
      description:
        "Proceso coordinado de fisioterapia y entrenamiento para recuperar función, volver a tu actividad y seguir progresando con seguridad.",
    }
  ] as const;

  return (
    <>
      <main id="inicio" className="bg-white">
        <section className="w-full pt-6 lg:pt-8">
          <div className="mb-6 flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:flex-wrap md:items-end sm:px-6 lg:mb-8 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--electric)]">
                Rehab Strength · Molina de Segura
              </p>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Centro de fisioterapia y rendimiento con enfoque clínico y progresión de fuerza.
              </p>
            </div>
           <div className="flex flex-wrap flex-row gap-4 md:gap-3">
              <a href="#reserva" className="btn-primary text-nowrap">
                Reserva cita
              </a>
              <Link href="/servicios" className="btn-ghost text-nowrap">
                Ver servicios
              </Link>
            </div>
          </div>

          <div className="relative w-full overflow-hidden bg-white">
            <div className="relative h-[430px] w-full sm:h-[560px] lg:h-[640px]">
              <Image
                src="/images/Pesas imagen.avif"
                alt="Pesas en la zona de entrenamiento del centro Rehab Strength"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[var(--electric)]/20 via-[var(--electric)]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-4 p-5 sm:p-7">
                <div className="rounded-lg border border-white/40 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  Recuperación + rendimiento
                </div>
                <div className="hidden rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm sm:block">
                  Fisioterapia · Entrenamiento
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-10">
                <div className="max-w-3xl">
                  <h1 className="font-display text-[clamp(2.15rem,5.8vw,4.4rem)] leading-[0.95] text-white">
                    Donde la recuperación se encuentra con el rendimiento
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
                    Tratamos el dolor y construimos fuerza con un plan coordinado para volver a moverte,
                    entrenar y progresar con seguridad.
                  </p>
                </div>
                <div className="mt-8 grid gap-4 border-t border-white/20 pt-4 text-white/90 sm:grid-cols-[1fr_auto] sm:items-center">
                  <p className="text-sm leading-relaxed">
                    Valoración, tratamiento y progresión de cargas en el mismo proceso.
                  </p>
                  <a
                    href="#servicios"
                    className="inline-flex items-center text-sm font-semibold text-white transition hover:text-white/80"
                  >
                    Explorar servicios →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-10 pt-12" aria-label="Ventajas principales">
          <div className="grid gap-7 py-8 md:grid-cols-3 md:gap-10 md:py-10">
            <article className="text-center">
              <div className="flex items-center justify-center gap-4">
                <span
                  className="inline-grid h-12 w-12 place-items-center rounded-full border border-black/20 bg-slate-100 text-black"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M4 13h4l2-4 4 8 2-4h4" />
                  </svg>
                </span>
                <h3 className="font-display text-[clamp(2rem,3.2vw,3rem)] leading-[0.9] text-[#0e2234]">
                  Recuperación
                </h3>
              </div>
              <p className="mx-auto mt-3 max-w-sm text-[0.98rem] text-justify leading-relaxed text-slate-600">
                Tratamiento y ejercicio guiado para reducir dolor y recuperar función real desde el primer paso.
              </p>
            </article>

            <article className="text-center">
              <div className="flex items-center justify-center gap-4">
                <span
                  className="inline-grid h-12 w-12 place-items-center rounded-full border border-black/20 bg-slate-100 text-black"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M4 18V6m8 12V10m8 8V4" />
                  </svg>
                </span>
                <h3 className="font-display text-[clamp(2rem,3.2vw,3rem)] leading-[0.9] text-[#0e2234]">
                  Progresión
                </h3>
              </div>
              <p className="mx-auto mt-3 max-w-sm text-[0.98rem] text-justify leading-relaxed text-slate-600">
                Objetivos claros, control de cargas y seguimiento continuo para que avances con seguridad.
              </p>
            </article>

            <article className="text-center">
              <div className="flex items-center justify-center gap-4">
                <span
                  className="inline-grid h-12 w-12 place-items-center rounded-full border border-black/20 bg-slate-100 text-black"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M8 12h8M12 8v8" />
                  </svg>
                </span>
                <h3 className="font-display text-[clamp(2rem,3.2vw,3rem)] leading-[0.9] text-[#0e2234]">
                  Coordinación
                </h3>
              </div>
              <p className="mx-auto mt-3 max-w-sm text-justify text-[0.98rem] leading-relaxed text-slate-600">
                Fisioterapia y entrenamiento conectados en un mismo plan para evitar recaídas y mejorar rendimiento.
              </p>
            </article>
          </div>
        </section>

        {/* <section id="servicios" className="section-wrap mx-auto w-full max-w-7xl px-6 pt-18 lg:px-8">
          <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--electric)]">
                  Nuestros servicios
                </p>
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] text-[#0c1f4f]">
                  Fisioterapia y fuerza con un mismo criterio clínico.
                </h2>
              </div>
              <p className="max-w-4xl text-lg leading-relaxed text-slate-600">
                Diseñamos un proceso continuo para que no tengas que separar tratamiento y progreso.
                Valoramos tu caso, tratamos el dolor y planificamos el entrenamiento para recuperar
                función y reducir recaídas.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-0 border-y border-slate-200">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group/program grid gap-6 border-b border-slate-200 py-6 last:border-b-0 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
              >
                <div className="min-w-0">
                  <div className="program-row">
                    <div className="program-row-track">
                      <span className="program-row-index">{String(index + 1).padStart(2, "0")}</span>
                      <h3 className="program-row-title">{service.title}</h3>
                      <span className="program-row-meta">Programa</span>
                    </div>
                    <div aria-hidden="true" className="program-row-track program-row-track-clone">
                      <span className="program-row-index">{String(index + 1).padStart(2, "0")}</span>
                      <span className="program-row-title">{service.title}</span>
                      <span className="program-row-meta">Programa</span>
                    </div>
                  </div>
                  <p className="mt-4 max-w-[40rem] text-lg leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mt-5 grid gap-2 text-sm text-slate-600">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 rounded-lg bg-[var(--electric)]"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-2 text-sm">
                    <Link href={service.pageHref} className="btn-ghost">
                      Ver {service.title.toLowerCase()}
                    </Link>
                    <WhatsAppButton href={service.whatsappHref} className="btn-ghost gap-2">
                      {service.ctaLabel}
                    </WhatsAppButton>
                  </div>
                </div>

                <div className="relative h-56 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 sm:h-64">
                  <Image
                    src={serviceImages[index % serviceImages.length]}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover/program:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--electric)]/20 to-transparent" />
                </div>
              </article>
            ))}
          </div>
        </section> */}

        <section className="service-stripe-section" aria-label="Servicios destacados">
          {featuredHomeServices.map((service) => (
            <article
              key={service.title}
              className="service-stripe"
            >
              <h3 className="service-stripe-title">{service.title}</h3>
              <p className="service-stripe-description">{service.description}</p>
            </article>
          ))}
        </section>

        <section className="section-wrap pt-14 flex justify-center" aria-label="Mensaje principal">
          <blockquote className="methodology-quote">
            <p className="methodology-quote-lead">
              Somos un equipo clínico y de entrenamiento coordinado para acompañarte en todo el proceso.
            </p>
            <p className="methodology-quote-body">
              Unificamos valoración, tratamiento y progresión de fuerza en un mismo plan para que
              entiendas qué se hace, por qué se hace y cómo avanzar sin recaídas.
            </p>
          </blockquote>
        </section>

        <section id="metodologia" className="section-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--electric)]">
              Enfoque de trabajo
            </p>

            <div className="mt-10 grid gap-x-7 gap-y-5 md:grid-cols-2 lg:gap-x-8 lg:gap-y-6">
              {approachItems.map((row, index) => (
                <article
                  key={row.title}
                  className="mt-0"
                >
                  <div
                    className={`rounded-2xl px-5 py-5 shadow-[0_10px_24px_rgba(33,78,209,0.12)] ring-1 ring-inset ring-white/14 sm:px-6 sm:py-6 ${
                      index % 2 === 0 ? "bg-[var(--electric)]" : "bg-[#0c3d72]"
                    }`}
                  >
                    <p className="font-display text-2xl leading-tight text-white">{row.title}</p>
                    <p className="mt-3 max-w-[34rem] text-base leading-relaxed text-white/82 sm:text-[1.05rem]">
                    {row.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="equipo" className="section-wrap">
          <div className="section-heading">
            <p className="eyebrow text-[var(--electric)]">Equipo profesional</p>
            <h2>Expertos en recuperación funcional, readaptación y fuerza terapéutica.</h2>
            <p className="mt-4 max-w-4xl text-slate-600">
              Trabajamos con personas que quieren dejar atrás el dolor, recuperar su actividad y
              seguir entrenando con una base sólida y segura, con seguimiento continuo y objetivos claros.
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="border-t border-slate-200 pt-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="avatar-ring" aria-hidden="true">
                    {member.name
                      .split(" ")
                      .map((chunk) => chunk[0])
                      .join("")}
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="font-display text-2xl text-slate-900">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#0371a8]">
                      {member.role}
                    </p>
                    <p className="mt-3 text-slate-600">{member.bio}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap">
          <div className="section-heading">
            <p className="eyebrow">Testimonios</p>
            <h2>Personas que volvieron a moverse, entrenar y confiar en su cuerpo.</h2>
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.author}
                className="border-t border-slate-200 pt-5 text-slate-600"
              >
                <p className="leading-relaxed">{item.quote}</p>
                <footer className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">
                  {item.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <WhatsAppBookingSection
          physioHref={physioWhatsAppHref}
          trainingHref={trainingWhatsAppHref}
        />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
    </>
  );
}
