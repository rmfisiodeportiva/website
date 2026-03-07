export const entrenamientoPageMetadata = {
  title: "Entrenamiento Fisico",
  description:
    "Entrenamiento físico en Molina de Segura (Murcia): grupos reducidos, entrenamiento personal, rendimiento deportivo y formato online.",
} as const;

export const entrenamientoHeroContent = {
  eyebrow: "Entrenamiento físico",
  title: "Fuerza como pilar del rendimiento y la salud",
  description:
    "Entrenamiento para mejorar fuerza, rendimiento y salud con progresión estructurada, supervisión y foco en prevención de lesiones.",
  image: {
    src: "/images/green.avif",
    alt: "Barra y discos de entrenamiento en el centro",
  },
  primaryCta: {
    label: "Solicita plaza",
  },
  secondaryCta: {
    href: "/horarios-entrenamientos",
    label: "Ver horarios",
  },
} as const;

export const trainingPrograms = [
  {
    title: "Grupos reducidos",
    subtitle: "(máximo 8 personas)",
    description:
      "Entrenamientos guiados en grupos pequeños para garantizar una atención cercana y una correcta ejecución de los ejercicios. Trabajamos fuerza, movilidad, resistencia y control corporal en sesiones dinámicas adaptadas a todos los niveles.",
    bullets: [
      "Atención personalizada dentro del grupo",
      "Programación progresiva",
      "Mejora de fuerza, condición física y salud",
    ],
  },
  {
    title: "Grupo rendimiento",
    subtitle: "(máximo 5 personas)",
    description:
      "Entrenamientos enfocados a personas que quieren llevar su rendimiento físico a un nivel superior. Ideal para deportistas o personas que buscan mejorar fuerza, potencia y capacidad física.",
    bullets: [
      "Trabajo específico de fuerza y rendimiento",
      "Control técnico de los ejercicios",
      "Programación estructurada para progresar",
    ],
  },
  {
    title: "Entrenamiento personal",
    subtitle: "(individual o dúo)",
    description:
      "Sesiones totalmente personalizadas diseñadas en función de tus objetivos, nivel y necesidades. Una opción ideal si buscas máxima atención, recuperar una lesión, mejorar tu rendimiento o empezar a entrenar con seguridad.",
    bullets: [
      "Evaluación inicial (GRATUITA)",
      "Plan de entrenamiento individualizado",
      "Seguimiento continuo de la evolución",
      "Recomendable: niños, adultos mayores, embarazo y post-parto, cualquier tipo de lesión o enfermedad que requiera máxima individualización.",
    ],
  },
  {
    title: "Entrenamiento online",
    subtitle: "",
    description:
      "Programa de entrenamiento personalizado que puedes realizar desde cualquier lugar (casa, gimnasio…). Incluye planificación adaptada a tus objetivos, nutricionista, seguimiento y ajustes periódicos para asegurar tu progreso.",
    bullets: [
      "Plan de entrenamiento individual (mínimo 3 meses)",
      "Seguimiento y comunicación constante",
      "Adaptación del programa según evolución",
    ],
  },
] as const;

export const entrenamientoBookingContent = {
  eyebrow: "Reserva y plazas",
  title: "Cuéntanos qué necesitas y te orientamos",
  description:
    "Indica si buscas grupos reducidos, entrenamiento personal, rendimiento deportivo u opción online. Te orientamos según tu objetivo, experiencia y disponibilidad.",
  ctas: [
    { label: "Solicita información", href: "whatsapp" },
    { label: "Ver tarifas", href: "/tarifas" },
    { label: "Ver horarios", href: "/horarios-entrenamientos" },
  ],
} as const;
