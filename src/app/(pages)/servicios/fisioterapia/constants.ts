export const fisioterapiaPageMetadata = {
  title: "Fisioterapia",
  description:
    "Fisioterapia en Molina de Segura (Murcia): valoración, diagnóstico funcional, tratamiento y plan de ejercicio.",
} as const;

export const fisioterapiaHeroContent = {
  eyebrow: "Fisioterapia",
  title: "FISIOTERAPIA",
  subtitle: "Recupera tu movimiento. Vuelve a tu vida sin dolor.",
  description:
    "Nuestro servicio de fisioterapia está orientado a identificar el origen del problema, aliviar el dolor y recuperar la función para que puedas volver a tu actividad diaria o deportiva con seguridad.",
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

export const fisioterapiaMainContent = {
  paragraphs: [
    "Cada sesión se adapta a lo que tu cuerpo necesita en ese momento del proceso de recuperación. Combinamos terapia manual, ejercicio terapéutico y trabajo funcional para avanzar de forma progresiva en cada fase del tratamiento.",
    "El objetivo no es solo mejorar los síntomas, sino recuperar el movimiento, fortalecer la zona afectada y reducir al máximo el riesgo de recaídas.",
  ],
  bullets: [
    "Valoración funcional individualizada",
    "Tratamiento personalizado en cada sesión",
    "Terapia manual y ejercicio terapéutico",
    "Recuperación progresiva según la fase de la lesión",
    "Seguimiento continuo y ajuste del tratamiento",
  ],
  closing:
    "Tratamos la lesión, recuperamos tu movimiento y evitamos recaídas.",
} as const;

export const fisioterapiaSectionsContent = {
  process: {
    eyebrow: "Proceso del paciente",
    title: "Te acompañamos con un proceso claro desde la primera visita.",
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
