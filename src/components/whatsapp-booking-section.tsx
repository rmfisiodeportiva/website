import { WhatsAppButton } from "@/components/whatsapp-button";

type WhatsAppBookingSectionProps = {
  physioHref: string;
  trainingHref: string;
};

export function WhatsAppBookingSection({
  physioHref,
  trainingHref,
}: WhatsAppBookingSectionProps) {
  return (
    <section id="reserva" className="section-wrap pb-20">
      <div className="section-heading">
        <p className="eyebrow">Reserva por WhatsApp</p>
        <h2>Elige tu servicio y reserva de forma directa.</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_var(--shadow-card-a08)] md:p-8">
          <p className="eyebrow">Fisioterapia</p>
          <h3 className="font-display text-3xl text-slate-900">Reserva cita de fisioterapia</h3>
          <p className="mt-4 text-slate-600">
            Escríbenos para dolor, lesión, recuperación funcional o valoración inicial.
          </p>
          <WhatsAppButton href={physioHref} className="btn-primary mt-6 w-full gap-2 md:w-fit">
            Reserva
          </WhatsAppButton>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_var(--shadow-card-a08)] md:p-8">
          <p className="eyebrow">Entrenamiento</p>
          <h3 className="font-display text-3xl text-slate-900">Reserva entrenamiento personalizado</h3>
          <p className="mt-4 text-slate-600">
            Contacta por WhatsApp para programas de fuerza, movilidad y readaptación.
          </p>
          <WhatsAppButton
            href={trainingHref}
            className="btn-primary mt-6 w-full gap-2 md:w-fit"
          >
            Reserva
          </WhatsAppButton>
        </article>
      </div>
    </section>
  );
}
