export const tarifasPageMetadata = {
  title: "Tarifas",
  description:
    "Tarifas de fisioterapia, entrenamiento y consulta de readaptación en Rehab Strength.",
} as const;

export const tarifasHeroContent = {
  eyebrow: "Tarifas",
  title: "Elige servicio y consulta precios",
  description:
    "Selecciona fisioterapia, entrenamiento o readaptación para ver la información de precios y contacto.",
} as const;

export const pricingOptions = [
  {
    key: "fisioterapia",
    label: "Fisioterapia",
    description:
      "Sesiones y bonos de fisioterapia para recuperación del dolor, mejora funcional y seguimiento clínico.",
    highlightWord: "fisioterapia",
    ctaLabel: "Ponte en contacto",
  },
  {
    key: "entrenamiento",
    label: "Entrenamiento",
    description:
      "Tarifas mensuales por modalidad de entrenamiento: grupos, rendimiento, personal individual y personal dúo.",
    highlightWord: "entrenamiento",
    ctaLabel: "Ponte en contacto",
  },
  {
    key: "readaptacion",
    label: "Readaptación",
    description:
      "No hay precios fijos. Realizamos una valoración inicial y ajustamos el plan según tu caso.",
    ctaLabel: "Ponte en contacto",
  },
] as const;

export const fisioterapiaPricing = [
  {
    sessions: "1 sesión",
    price: "32 €",
    note: "",
  },
  {
    sessions: "3 sesiones",
    price: "80 €",
    note: "26,66 €/sesión. Transferible a familiares o amigos (1 mes).",
  },
  {
    sessions: "10 sesiones",
    price: "250 €",
    note: "25 €/sesión. Intransferible e individual. Bono orientado a 2-3 sesiones por semana.",
  },
] as const;

export const entrenamientoPricingGroups = [
  {
    title: "Grupos reducidos",
    items: [
      { plan: "2 días", price: "45€" },
      { plan: "3 días", price: "50€" },
      { plan: "4 días", price: "55€" },
    ],
  },
  {
    title: "Grupo rendimiento",
    items: [
      { plan: "1 día", price: "60€" },
      { plan: "2 días", price: "80€" },
      { plan: "3 días", price: "100€" },
    ],
  },
  {
    title: "Entrenamiento personal individual",
    items: [
      { plan: "Sesión individual", price: "30€" },
      { plan: "Bono 4 sesiones", price: "100€", validity: "Consumir en 1 mes" },
      { plan: "Bono 8 sesiones", price: "190€", validity: "Consumir en 2 meses" },
      { plan: "Bono 12 sesiones", price: "250€", validity: "Consumir en 3 meses" },
    ],
  },
  {
    title: "Entrenamiento personal dúo",
    items: [
      { plan: "Sesión individual", price: "45€" },
      { plan: "Bono 4 sesiones", price: "170€", validity: "Consumir en 1 mes" },
      { plan: "Bono 8 sesiones", price: "320€", validity: "Consumir en 2 meses" },
      { plan: "Bono 12 sesiones", price: "450€", validity: "Consumir en 3 meses" },
    ],
  },
] as const;

export const readaptacionPricingContent = {
  title: "Readaptación + fisioterapeuta",
  description:
    "Aquí se valora primero cada caso. No hay precios cerrados: dependerá del plan de sesiones necesario para tu recuperación.",
} as const;
