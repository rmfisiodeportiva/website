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
