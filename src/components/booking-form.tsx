"use client";

import { FormEvent, useState } from "react";

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "No se pudo enviar la solicitud.");
      }

      event.currentTarget.reset();
      setStatus({
        type: "success",
        message:
          "Solicitud enviada correctamente. Te contactaremos en menos de 24 horas laborales.",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Ha ocurrido un error inesperado.";
      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-slate-200">
            Nombre completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="input-control"
            placeholder="Ej. Laura Martinez"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone" className="text-sm font-semibold text-slate-200">
            Telefono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className="input-control"
            placeholder="Ej. +34 600 123 456"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-slate-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="input-control"
            placeholder="tu@email.com"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="service" className="text-sm font-semibold text-slate-200">
            Servicio
          </label>
          <select id="service" name="service" required className="input-control">
            <option value="">Selecciona una opcion</option>
            <option value="fisioterapia">Fisioterapia</option>
            <option value="entrenamiento">Entrenamiento personalizado</option>
            <option value="valoracion">Valoracion integral inicial</option>
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-slate-200">
          Cuentanos tu objetivo o molestia
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="input-control resize-none"
          placeholder="Describe brevemente tu situacion, dolor o meta de recuperacion."
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-300">
        <input
          type="checkbox"
          name="consent"
          value="accepted"
          required
          className="mt-1 h-4 w-4 rounded border-slate-500 bg-slate-900 text-[var(--accent)]"
        />
        <span>Acepto la politica de privacidad y el tratamiento de datos para gestionar mi cita.</span>
      </label>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full md:w-fit">
        {isSubmitting ? "Enviando..." : "Reserva tu sesion"}
      </button>

      <p aria-live="polite" className="min-h-6 text-sm">
        {status.type === "success" && <span className="text-emerald-400">{status.message}</span>}
        {status.type === "error" && <span className="text-red-400">{status.message}</span>}
      </p>
    </form>
  );
}
