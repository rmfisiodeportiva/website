import type { Metadata } from "next";
import Image from "next/image";
import { HomeServicesStripes } from "@/components/home-services-stripes";
import { MethodologyShowcase } from "@/components/methodology-showcase";
import { HomeReviewsSection } from "@/components/home-reviews-section";
import { HomeTeamSection } from "@/components/home-team-section";
import { QuoteBlock } from "@/components/quote-block";
import { WhatsAppBookingSection } from "@/components/whatsapp-booking-section";
import {
  homeJsonLd,
  physioWhatsAppHref,
  trainingWhatsAppHref,
} from "@/lib/home-page-data";
import { homeQuotes } from "@/lib/home-quotes-data";

export const metadata: Metadata = {
  title: "Centro de Rehabilitacion y Rendimiento",
  description:
    "Rehab Strength en Molina de Segura (Murcia): fisioterapia y entrenamiento personalizado para recuperarte con seguridad y volver más fuerte.",
};

export default function Home() {
  const approachItems = [
    {
      title: "Base científica",
      text: "Tratamiento y entrenamiento con base científica",
      image: "/images/grey.avif",
    },
    {
      title: "Plan individual",
      text: "Plan individualizado según tu punto de partida",
      image: "/images/Pesas imagen.avif",
    },
    {
      title: "Trabajo conjunto",
      text: "Comunicación real entre fisioterapia y entrenamiento",
      image: "/images/green.avif",
    },
    {
      title: "Seguimiento",
      text: "Seguimiento continuo para progresar con seguridad",
      image: "/images/Pesas imagen.avif",
    },
    {
      title: "Comunicación",
      text: "Comunicación real entre fisioterapia y entrenamiento.",
      image: "/images/grey.avif",
    },
    {
      title: "Control de cargas",
      text: "Seguimiento de cargas y progresión adaptada a tu caso.",
      image: "/images/green.avif",
    },
  ] as const;

  return (
    <>
      <main id="inicio" className="bg-white">
        <section className="w-full pt-6 lg:pt-8">
          <div className="mb-6 flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:flex-wrap md:items-end sm:px-6 lg:mb-8 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Rehab Strength · Molina de Segura
              </p>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Centro de fisioterapia y rendimiento con enfoque clínico y progresión de fuerza.
              </p>
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
              <div className="absolute inset-0 bg-gradient-to-l from-[var(--primary)]/20 via-[var(--primary)]/50 to-transparent" />
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
                <h3 className="font-display text-[clamp(2rem,3.2vw,3rem)] leading-[0.9] text-[var(--secondary)]">
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
                <h3 className="font-display text-[clamp(2rem,3.2vw,3rem)] leading-[0.9] text-[var(--secondary)]">
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
                <h3 className="font-display text-[clamp(2rem,3.2vw,3rem)] leading-[0.9] text-[var(--secondary)]">
                  Coordinación
                </h3>
              </div>
              <p className="mx-auto mt-3 max-w-sm text-justify text-[0.98rem] leading-relaxed text-slate-600">
                Fisioterapia y entrenamiento conectados en un mismo plan para evitar recaídas y mejorar rendimiento.
              </p>
            </article>
          </div>
        </section>

        <HomeServicesStripes />

        <section className="section-wrap pt-14 flex justify-center" aria-label="Mensaje principal">
          <QuoteBlock
            title={homeQuotes.methodology.title}
            description={homeQuotes.methodology.description}
          />
        </section>

        <MethodologyShowcase points={approachItems} />

        <HomeTeamSection />

        <HomeReviewsSection />

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
