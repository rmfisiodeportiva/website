function buildWhatsAppLink(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

const WHATSAPP_PHONES = {
  physio: "34600123456",
  training: "34695409216",
} as const;

export const contactInfo = {
  email: "info@rehab-strength.com",
  instagramLabel: "@rehabstrength",
  instagramHref: "https://instagram.com/rehabstrength",
  physioPhoneDisplay: "+34 600 123 456",
  trainingPhoneDisplay: "+34 695 409 216",
  city: "Molina de Segura",
  region: "Murcia",
} as const;

export const physioWhatsAppHref = buildWhatsAppLink(
  WHATSAPP_PHONES.physio,
  "Hola, quiero reservar una cita de fisioterapia en Rehab Strength.",
);

export const trainingWhatsAppHref = buildWhatsAppLink(
  WHATSAPP_PHONES.training,
  "Hola, quiero reservar una cita de entrenamiento personalizado en Rehab Strength.",
);

export const readaptationWhatsAppHref = buildWhatsAppLink(
  WHATSAPP_PHONES.training,
  "Hola, quiero consultar un programa de readaptación en Rehab Strength.",
);

export const whatsappBookingSectionContent = {
  eyebrow: "Contacto y reserva",
  title: "Elige tu servicio y reserva de forma directa.",
  services: [
    {
      key: "physio",
      label: "Fisioterapia",
      phone: WHATSAPP_PHONES.physio,
      whatsappHref: physioWhatsAppHref,
      description:
        "Escríbenos para dolor, lesión, recuperación funcional o valoración inicial.",
    },
    {
      key: "training",
      label: "Entrenamiento",
      phone: WHATSAPP_PHONES.training,
      whatsappHref: trainingWhatsAppHref,
      description: "Contacta para programas de fuerza, movilidad y readaptación.",
    },
    {
      key: "readaptation",
      label: "Readaptación",
      phone: WHATSAPP_PHONES.training,
      whatsappHref: readaptationWhatsAppHref,
      description:
        "Cuéntanos tu caso para volver a entrenar con seguridad y control de cargas.",
    },
  ],
} as const;
