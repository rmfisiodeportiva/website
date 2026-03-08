import { physioWhatsAppHref, trainingWhatsAppHref } from "@/lib/constants/contact";

export const serviciosPageMetadata = {
  title: "Servicios",
  description:
    "Servicios de fisioterapia y entrenamiento físico en Rehab Strength (Molina de Segura, Murcia) para recuperación, readaptación y fuerza.",
} as const;

export const serviciosHeroContent = {
  eyebrow: "SERVICIOS",
  title: "Fisioterapia, entrenamiento y readaptación",
  description:
    "Ofrecemos fisioterapia, entrenamiento físico y readaptación para reducir dolor, recuperar función y mejorar tu rendimiento con un plan adaptado a tu situación.",
} as const;

export const serviceCardImageByIndex = [
  "/images/grey.avif",
  "/images/green.avif",
  "/images/green.avif",
] as const;

export const detailedServices = [
  {
    key: "physio",
    title: "Fisioterapia",
    subtitle: "Evaluación, tratamiento y recuperación funcional",
    description:
      "Te ayudamos a reducir dolor, recuperar movimiento y volver a tu actividad con un enfoque clínico activo. Tratamiento del dolor y de lesiones con un plan claro para recuperar movilidad, función y confianza.",
    pageHref: "/servicios/fisioterapia",
    bullets: [
      "Valoración funcional individual",
      "Terapia manual y ejercicio terapéutico",
      "Dolor y lesiones deportivas",
      "Electropunción, ecografía y diatermia",
      "Plan de recuperación con objetivos",
      "Seguimiento y ajuste según evolución",
    ],
    whatsappHref: physioWhatsAppHref,
  },
  {
    key: "training",
    title: "Entrenamiento",
    subtitle: "Fuerza, movilidad y readaptación",
    description:
      "Entrenamiento guiado para ganar fuerza, mejorar movilidad y rendir mejor sin perder el control del proceso.",
    pageHref: "/servicios/entrenamiento",
    bullets: [
      "Grupos reducidos y entrenamiento personal",
      "Rendimiento deportivo y prevención",
      "Trabajo de fuerza como pilar",
      "Formato presencial y online",
      "Entrenamiento de fuerza guiado",
      "Movilidad y control motor",
      "Readaptación al deporte",
      "Progresiones semanales",
    ],
    whatsappHref: trainingWhatsAppHref,
  },
  {
    key: "readaptation",
    title: "Readaptación",
    subtitle: "Vuelve a moverte sin dolor y con seguridad",
    description:
      "Combinamos fisioterapia y entrenamiento para recuperar función, reforzar la zona afectada y reducir recaídas.",
    pageHref: "/servicios/readaptacion",
    bullets: [
      "Evaluación inicial y valoración funcional",
      "Plan individualizado según lesión y objetivos",
      "Trabajo progresivo de movilidad, fuerza y estabilidad",
      "Retorno seguro a tu actividad o deporte",
    ],
    whatsappHref: physioWhatsAppHref,
  },
] as const;
