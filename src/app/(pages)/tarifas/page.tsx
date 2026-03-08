import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { pricingBlocks } from "./constants";

export const metadata: Metadata = {
  title: "Tarifas",
  description:
    "Consulta tarifas de fisioterapia y entrenamiento físico en Rehab Strength (Molina de Segura, Murcia). Confirmación final por WhatsApp.",
};

export default function TarifasPage() {
  return (
    <main className="page-flow">
      <section className="hero-section">
        <div className="electric-lines" aria-hidden="true" />
        <div className="mx-auto w-full max-w-6xl px-6 pt-14 lg:px-10 lg:pt-24">
          <p className="eyebrow">Tarifas</p>
          <h1 className="hero-title">Opciones de sesiones y bonos</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--neutral-950)]">
            Consulta las opciones de sesiones y bonos de fisioterapia y entrenamiento. Si tienes
            dudas, te orientamos por WhatsApp según tu objetivo y la frecuencia recomendada.
          </p>
        </div>
      </section>

      <section className="section-wrap pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {pricingBlocks.map((block) => (
            <article key={block.category} className="info-card flex h-full flex-col">
              <p className="eyebrow">{block.category}</p>
              <h2 className="font-display text-3xl text-slate-900">Tarifas {block.category.toLowerCase()}</h2>
              <div className="mt-6 grid gap-4">
                {block.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-semibold text-slate-900">{item.name}</p>
                      <p className="font-display text-2xl text-[var(--accent)]">{item.price}</p>
                    </div>
                    <p className="mt-2 text-sm text-[var(--neutral-950)]">{item.note}</p>
                  </div>
                ))}
              </div>
              <WhatsAppButton href={block.whatsappHref} className="btn-primary mt-6 w-full gap-2 md:w-fit">
                Solicita información
              </WhatsAppButton>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[var(--accent-a20)] bg-[var(--accent-a05)] p-5 text-sm text-[var(--neutral-950)]">
          <p>
            Los importes pueden variar según frecuencia, duración de sesión y objetivos de
            recuperación o readaptación.
          </p>
        </div>

        <div className="mt-8">
          <Link href="/servicios" className="btn-ghost">
            Ver servicios
          </Link>
        </div>
      </section>
    </main>
  );
}
