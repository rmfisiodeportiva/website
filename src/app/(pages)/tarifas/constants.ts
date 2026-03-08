import { physioWhatsAppHref, trainingWhatsAppHref } from "@/lib/constants/contact";

export const pricingBlocks = [
  {
    category: "Fisioterapia",
    items: [
      { name: "Sesión individual", price: "Consultar", note: "Duración según valoración clínica" },
      { name: "Bono 4 sesiones", price: "Consultar", note: "Ideal para tratamiento y seguimiento" },
      { name: "Valoración inicial", price: "Consultar", note: "Primera visita con plan de acción" },
    ],
    whatsappHref: physioWhatsAppHref,
  },
  {
    category: "Entrenamiento Fisico",
    items: [
      { name: "Sesión individual", price: "Consultar", note: "Entrenamiento guiado" },
      { name: "Bono mensual", price: "Consultar", note: "Planificación y seguimiento semanal" },
      { name: "Programa de readaptación", price: "Consultar", note: "Según objetivos y frecuencia" },
    ],
    whatsappHref: trainingWhatsAppHref,
  },
] as const;
