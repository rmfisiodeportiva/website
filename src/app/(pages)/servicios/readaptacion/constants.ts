export const readaptacionPageMetadata = {
  title: "Plan de Readaptación",
  description:
    "Plan de readaptación en Molina de Segura (Murcia): fisioterapia y entrenamiento coordinados para volver a moverte sin dolor y retomar tu actividad con seguridad.",
} as const;

export const readaptacionHeroContent = {
  eyebrow: "Readaptación",
  title: "Plan de readaptación",
  description:
    "Fisioterapia y entrenamiento coordinados para recuperar función, reducir recaídas y volver a tu actividad con seguridad.",
  image: {
    src: "/images/green.avif",
    alt: "Entrenamiento guiado para recuperación y readaptación",
  },
  primaryCta: {
    label: "Solicita valoración",
  },
  secondaryCta: {
    href: "/horarios-entrenamientos",
    label: "Ver horarios",
  },
} as const;

export const readaptationPlan = {
  title: "Plan de readaptación",
  subtitle: "Fisioterapia y entrenamiento para volver a moverte sin dolor.",
  description: [
    "Nuestro plan de readaptación está diseñado para personas que han sufrido una lesión y necesitan un proceso guiado para recuperar la función, volver a entrenar o retomar su actividad diaria o deportiva con seguridad.",
    "Este servicio combina sesiones de fisioterapia y sesiones de entrenamiento, trabajando de forma coordinada para tratar la lesión, recuperar la movilidad, fortalecer la zona afectada y reducir el riesgo de recaídas.",
    "El proceso comienza con una evaluación inicial, donde analizamos la lesión, el estado funcional y las limitaciones actuales. A partir de esta valoración se establece un plan individualizado, determinando cuántas sesiones de fisioterapia y de entrenamiento serán necesarias según cada caso.",
    "Durante el proceso se ajusta el trabajo según la evolución, pasando progresivamente del tratamiento al trabajo activo para lograr una recuperación completa.",
  ],
  bullets: [
    "Evaluación inicial y valoración funcional",
    "Plan individualizado de fisioterapia y entrenamiento",
    "Trabajo progresivo de movilidad, fuerza y estabilidad",
    "Recuperación orientada a volver a tu actividad o deporte",
    "Seguimiento continuo para minimizar recaídas",
  ],
  closing:
    "El objetivo no es solo tratar la lesión, sino ayudarte a recuperar tu funcionalidad y volver a moverte con confianza.",
} as const;

export const readaptacionBookingContent = {
  eyebrow: "Reserva y valoración",
  title: "Cuéntanos tu caso y te orientamos",
  description:
    "Valoramos tu lesión y tu estado actual para definir un plan progresivo de readaptación, combinando fisioterapia y entrenamiento según tus necesidades.",
  ctas: [
    { label: "Solicita información", href: "whatsapp" },
    { label: "Ver tarifas", href: "/tarifas" },
    { label: "Ver fisioterapia", href: "/servicios/fisioterapia" },
  ],
} as const;
