export const fisioterapiaPageMetadata = {
  title: "Fisioterapia",
  description:
    "Fisioterapia en Molina de Segura (Murcia): valoración, diagnóstico funcional, tratamiento y plan de ejercicio.",
} as const;

export const fisioterapiaHeroContent = {
  eyebrow: "Fisioterapia",
  title: "Enfoque clínico, movimiento y fuerza",
  description:
    "Tratamos dolor y lesiones con un enfoque activo: evaluación, tratamiento y ejercicio para que recuperes función y vuelvas a moverte con seguridad.",
  image: {
    src: "/images/grey.avif",
    alt: "Zona de trabajo del centro en Molina de Segura",
  },
  primaryCta: {
    label: "Reserva fisioterapia",
  },
  secondaryCta: {
    href: "/tarifas",
    label: "Ver tarifas",
  },
} as const;

export const fisioterapiaSectionsContent = {
  process: {
    eyebrow: "Proceso del paciente",
    title: "Te acompañamos con un proceso claro desde la primera visita.",
  },
  treatments: {
    eyebrow: "Tratamientos",
    title: "Herramientas de trabajo",
  },
  specificServices: {
    eyebrow: "Servicios específicos",
    title: "Casos frecuentes",
  },
  booking: {
    eyebrow: "Reserva",
    title: "Solicita tu valoración o cita de fisioterapia",
    description:
      "Cuéntanos tu caso y te orientamos según tu dolor, lesión o fase de recuperación. Confirmamos la cita por WhatsApp.",
    primaryCta: {
      label: "Solicita cita",
    },
    secondaryCta: {
      href: "/servicios",
      label: "Volver a servicios",
    },
  },
} as const;
