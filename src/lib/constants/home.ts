import {
  contactInfo,
} from "@/lib/constants/contact";

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
