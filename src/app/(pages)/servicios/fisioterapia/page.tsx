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

export const metadata: Metadata = {
  title: "Fisioterapia",
  description:
    "Fisioterapia en Molina de Segura (Murcia): valoración, diagnóstico funcional, tratamiento y plan de ejercicio.",
};

export default function FisioterapiaPage() {
  return (
    <main className="page-flow">
      <section className="hero-section">
        <div className="electric-lines" aria-hidden="true" />
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[1fr_0.95fr] lg:px-10 lg:py-24">
          <div>
            <p className="eyebrow">Fisioterapia</p>
            <h1 className="hero-title">Enfoque clínico, movimiento y fuerza</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Tratamos dolor y lesiones con un enfoque activo: evaluación, tratamiento y ejercicio
              para que recuperes función y vuelvas a moverte con seguridad.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton href={physioWhatsAppHref} className="btn-primary gap-2">
                Reserva fisioterapia
              </WhatsAppButton>
              <Link href="/tarifas" className="btn-ghost">
                Ver tarifas
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_36px_var(--shadow-card-a08)]">
            <div className="relative h-[360px] w-full">
              <Image src="/images/grey.avif" alt="Zona de trabajo del centro en Molina de Segura" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-heading">
          <p className="eyebrow">Proceso del paciente</p>
          <h2>Te acompañamos con un proceso claro desde la primera visita.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {physioProcess.map((step, index) => (
            <div key={step} className="pillar-item flex items-start gap-4 p-4">
              <span className="font-display text-3xl leading-none text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="pt-1">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="info-card">
            <p className="eyebrow">Tratamientos</p>
            <h2 className="font-display text-3xl text-slate-900">Herramientas de trabajo</h2>
            <ul className="mt-6 grid gap-3 text-slate-700">
              {physioTreatments.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="info-card">
            <p className="eyebrow">Servicios específicos</p>
            <h2 className="font-display text-3xl text-slate-900">Casos frecuentes</h2>
            <ul className="mt-6 grid gap-3 text-slate-700">
              {physioSpecificServices.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-wrap pb-20">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_var(--shadow-card-a08)] md:p-8">
          <p className="eyebrow">Reserva</p>
          <h2 className="font-display text-3xl text-slate-900">Solicita tu valoración o cita de fisioterapia</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Cuéntanos tu caso y te orientamos según tu dolor, lesión o fase de recuperación.
            Confirmamos la cita por WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <WhatsAppButton href={physioWhatsAppHref} className="btn-primary gap-2">
              Solicita cita
            </WhatsAppButton>
            <Link href="/servicios" className="btn-ghost">
              Volver a servicios
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
