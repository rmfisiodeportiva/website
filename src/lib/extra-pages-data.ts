import { physioWhatsAppHref, trainingWhatsAppHref } from "@/lib/constants/contact";

export const detailedServices = [
  {
    title: "Fisioterapia",
    subtitle: "Evaluación, tratamiento y recuperación funcional",
    description:
      "Te ayudamos a reducir dolor, recuperar movimiento y volver a tu actividad con un enfoque clínico activo.",
    pageHref: "/servicios/fisioterapia",
    bullets: [
      "Valoración funcional individual",
      "Terapia manual y ejercicio terapéutico",
      "Plan de recuperación con objetivos",
      "Seguimiento y ajuste según evolución",
    ],
    whatsappHref: physioWhatsAppHref,
  },
  {
    title: "Entrenamiento Fisico",
    subtitle: "Fuerza, movilidad y readaptación",
    description:
      "Entrenamiento guiado para ganar fuerza, mejorar movilidad y rendir mejor sin perder el control del proceso.",
    pageHref: "/servicios/entrenamiento",
    bullets: [
      "Entrenamiento de fuerza guiado",
      "Movilidad y control motor",
      "Readaptación al deporte",
      "Progresiones semanales",
    ],
    whatsappHref: trainingWhatsAppHref,
  },
  {
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

export const physioProcess = [
  "Entrevista inicial",
  "Diagnóstico funcional",
  "Tratamiento",
  "Plan de ejercicio",
] as const;

export const physioTreatments = [
  "Terapia manual",
  "Ejercicio terapéutico",
  "Electropunción",
  "Ecografía",
  "Diatermia",
] as const;

export const physioSpecificServices = [
  "Lesiones musculares",
  "Tendinopatías",
  "Dolor lumbar",
  "Pubalgia",
  "Postcirugía",
  "ATM",
  "Suelo pélvico (si aplica)",
] as const;

export const trainingPrograms = [
  {
    title: "Grupos reducidos",
    subtitle: "Fuerza guiada en grupo",
    bullets: [
      "Máximo 8 personas",
      "Supervisión constante",
      "Progresión estructurada",
      "Trabajo de fuerza como pilar fundamental",
    ],
  },
  {
    title: "Entrenamiento personal",
    subtitle: "Trabajo individualizado",
    bullets: [
      "Objetivos de salud, rendimiento o readaptación",
      "Valoración inicial obligatoria (gratuita)",
      "Objetivos claros y medibles",
      "Trabajo de fuerza en niños y adultos mayores",
    ],
  },
  {
    title: "Rendimiento deportivo",
    subtitle: "Preparación específica",
    bullets: [
      "Prevención de lesiones",
      "Fuerza específica",
      "Off season / pretemporada",
      "Especialización en fútbol",
    ],
  },
  {
    title: "Entrenamiento online",
    subtitle: "Presencial + online o solo online",
    bullets: [
      "Planificacion remota",
      "Seguimiento del preparador físico",
      "Compatible con sesiones presenciales",
      "Ajustes según evolución y disponibilidad",
    ],
  },
] as const;

export const aboutCenterPoints = [
  "Formación y actualización continua",
  "Experiencia en fisioterapia, readaptación y fuerza",
  "Filosofía de trabajo basada en evidencia",
  "Atención cercana para generar confianza",
] as const;

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

export const trainingSchedule = [
  {
    day: "Lunes",
    slots: ["07:00 - 08:00", "14:00 - 15:00", "19:00 - 20:00"],
  },
  {
    day: "Martes",
    slots: ["08:00 - 09:00", "15:00 - 16:00", "20:00 - 21:00"],
  },
  {
    day: "Miércoles",
    slots: ["07:00 - 08:00", "14:00 - 15:00", "19:00 - 20:00"],
  },
  {
    day: "Jueves",
    slots: ["08:00 - 09:00", "15:00 - 16:00", "20:00 - 21:00"],
  },
  {
    day: "Viernes",
    slots: ["07:00 - 08:00", "13:00 - 14:00", "18:00 - 19:00"],
  },
] as const;

export const scheduleNotes = [
  "Las plazas se asignan según disponibilidad y nivel del grupo.",
  "También puedes solicitar horarios individuales.",
  "La confirmación final se realiza por WhatsApp.",
] as const;
