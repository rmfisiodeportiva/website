import {
  contactInfo,
  physioWhatsAppHref,
  trainingWhatsAppHref,
} from "@/lib/constants/contact";

export const services = [
  {
    key: "physio",
    title: "Fisioterapia",
    description:
      "Tratamiento del dolor y de lesiones con un plan claro para recuperar movilidad, función y confianza.",
    bullets: [
      "Dolor y lesiones deportivas",
      "Terapia manual y ejercicio terapéutico",
      "Electropunción, ecografía y diatermia",
      "Readaptación y retorno seguro",
    ],
    ctaLabel: "Reserva",
    pageHref: "/servicios/fisioterapia",
    whatsappHref: physioWhatsAppHref,
  },
  {
    key: "training",
    title: "Entrenamiento Físico",
    description:
      "Programas de fuerza y movilidad adaptados a tu nivel para mejorar salud, rendimiento y prevención de lesiones.",
    bullets: [
      "Grupos reducidos y entrenamiento personal",
      "Rendimiento deportivo y prevención",
      "Trabajo de fuerza como pilar",
      "Formato presencial y online",
    ],
    ctaLabel: "Reserva",
    pageHref: "/servicios/entrenamiento",
    whatsappHref: trainingWhatsAppHref,
  },
] as const;

export const pillars = [
  "Tratamiento y entrenamiento con base científica",
  "Plan individualizado según tu punto de partida",
  "Comunicación real entre fisioterapia y entrenamiento",
  "Seguimiento continuo para progresar con seguridad",
] as const;

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Rehab Strength",
  medicalSpecialty: ["PhysicalTherapy", "SportsMedicine"],
  description:
    "Centro de rehabilitación con sesiones de fisioterapia y entrenamiento físico personalizado en Molina de Segura, Murcia.",
  areaServed: ["Molina de Segura", "Murcia"],
  address: {
    "@type": "PostalAddress",
    addressStreet: "Calle Campoamor 86",
    addressLocality: "Molina de Segura",
    addressRegion: "Murcia",
    addressCountry: "España",
    addressPostCode: "30500"
  },
  telephone: "+34 600 123 456",
  email: contactInfo.email,
} as const;
