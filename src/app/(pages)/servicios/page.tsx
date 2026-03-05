import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { detailedServices } from "@/lib/extra-pages-data";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de fisioterapia y entrenamiento físico en Rehab Strength (Molina de Segura, Murcia) para recuperación, readaptación y fuerza.",
};

export default function ServiciosPage() {
  return (
    <main className="page-flow">
      <section className="hero-section">
        <div className="electric-lines" aria-hidden="true" />
        <div className="mx-auto w-full max-w-6xl px-6 pt-14 lg:px-10 lg:pt-24">
          <p className="eyebrow">Servicios</p>
          <h1 className="hero-title">Fisioterapia y entrenamiento físico</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--neutral-950)]">
            Dos servicios complementarios para tratar dolor, recuperar función y seguir progresando
            con fuerza y control.
          </p>
        </div>
      </section>

      <section className="section-wrap pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {detailedServices.map((service, index) => (
            <article key={service.title} className="info-card flex h-full flex-col overflow-hidden p-0">
              <div className="relative h-56 w-full">
                <Image
                  src={index === 0 ? "/images/grey.avif" : "/images/green.avif"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex h-full flex-col p-6">
                <p className="eyebrow">{service.title}</p>
                <h2 className="font-display text-3xl text-slate-900">{service.subtitle}</h2>
                <p className="mt-4 text-[var(--neutral-950)]">{service.description}</p>
                <ul className="mt-5 grid gap-3 text-sm text-[var(--neutral-950)]">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={service.pageHref} className="btn-ghost">
                    Ver detalle
                  </Link>
                  <WhatsAppButton href={service.whatsappHref} className="btn-primary gap-2">
                    Reserva
                  </WhatsAppButton>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/tarifas" className="btn-ghost">
            Ver tarifas
          </Link>
          <Link href="/horarios-entrenamientos" className="btn-ghost">
            Ver horarios de entrenamiento
          </Link>
        </div>
      </section>
    </main>
  );
}
