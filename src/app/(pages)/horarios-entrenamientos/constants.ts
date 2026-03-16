export const scheduleDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"] as const;

export const TRAINING_TYPE = {
  GROUP: "group",
  PERFORMANCE: "performance",
  PERSONAL: "personal",
  ONLINE: "online",
} as const;

export type TrainingType = (typeof TRAINING_TYPE)[keyof typeof TRAINING_TYPE];

export const TRAINING_TYPE_LABEL: Record<TrainingType, string> = {
  [TRAINING_TYPE.GROUP]: "Grupo reducido",
  [TRAINING_TYPE.PERFORMANCE]: "Grupo rendimiento",
  [TRAINING_TYPE.PERSONAL]: "Personal",
  [TRAINING_TYPE.ONLINE]: "Online",
};

type ScheduleCellData = {
  type: TrainingType;
  label: string;
};

const cell = (type: TrainingType): ScheduleCellData => ({
  type,
  label: TRAINING_TYPE_LABEL[type],
});

export const scheduleRows = [
  {
    shift: "Mañana",
    rows: [
      {
        time: "07:30 - 08:30",
        monday: cell(TRAINING_TYPE.GROUP),
        tuesday: cell(TRAINING_TYPE.ONLINE),
        wednesday: cell(TRAINING_TYPE.GROUP),
        thursday: cell(TRAINING_TYPE.ONLINE),
        friday: cell(TRAINING_TYPE.GROUP),
      },
      {
        time: "08:30 - 09:30",
        monday: cell(TRAINING_TYPE.GROUP),
        tuesday: cell(TRAINING_TYPE.ONLINE),
        wednesday: cell(TRAINING_TYPE.GROUP),
        thursday: cell(TRAINING_TYPE.ONLINE),
        friday: cell(TRAINING_TYPE.GROUP),
      },
      {
        time: "09:30 - 10:30",
        monday: cell(TRAINING_TYPE.GROUP),
        tuesday: cell(TRAINING_TYPE.ONLINE),
        wednesday: cell(TRAINING_TYPE.GROUP),
        thursday: cell(TRAINING_TYPE.ONLINE),
        friday: cell(TRAINING_TYPE.GROUP),
      },
      {
        time: "10:30 - 11:15",
        monday: cell(TRAINING_TYPE.PERSONAL),
        tuesday: cell(TRAINING_TYPE.ONLINE),
        wednesday: cell(TRAINING_TYPE.PERSONAL),
        thursday: cell(TRAINING_TYPE.ONLINE),
        friday: cell(TRAINING_TYPE.PERSONAL),
      },
      {
        time: "11:15 - 12:00",
        monday: cell(TRAINING_TYPE.PERSONAL),
        tuesday: cell(TRAINING_TYPE.ONLINE),
        wednesday: cell(TRAINING_TYPE.PERSONAL),
        thursday: cell(TRAINING_TYPE.ONLINE),
        friday: cell(TRAINING_TYPE.PERSONAL),
      },
      {
        time: "12:00 - 12:45",
        monday: cell(TRAINING_TYPE.PERSONAL),
        tuesday: cell(TRAINING_TYPE.ONLINE),
        wednesday: cell(TRAINING_TYPE.PERSONAL),
        thursday: cell(TRAINING_TYPE.ONLINE),
        friday: cell(TRAINING_TYPE.PERSONAL),
      },
    ],
  },
  {
    shift: "Tarde",
    rows: [
      {
        time: "17:00 - 18:00",
        monday: cell(TRAINING_TYPE.GROUP),
        tuesday: cell(TRAINING_TYPE.GROUP),
        wednesday: cell(TRAINING_TYPE.GROUP),
        thursday: cell(TRAINING_TYPE.GROUP),
        friday: cell(TRAINING_TYPE.GROUP),
      },
      {
        time: "18:00 - 19:00",
        monday: cell(TRAINING_TYPE.GROUP),
        tuesday: cell(TRAINING_TYPE.GROUP),
        wednesday: cell(TRAINING_TYPE.GROUP),
        thursday: cell(TRAINING_TYPE.GROUP),
        friday: cell(TRAINING_TYPE.PERSONAL),
      },
      {
        time: "19:00 - 20:00",
        monday: cell(TRAINING_TYPE.GROUP),
        tuesday: cell(TRAINING_TYPE.GROUP),
        wednesday: cell(TRAINING_TYPE.GROUP),
        thursday: cell(TRAINING_TYPE.GROUP),
        friday: cell(TRAINING_TYPE.GROUP),
      },
      {
        time: "20:00 - 21:00",
        monday: cell(TRAINING_TYPE.GROUP),
        tuesday: cell(TRAINING_TYPE.GROUP),
        wednesday: cell(TRAINING_TYPE.GROUP),
        thursday: cell(TRAINING_TYPE.GROUP),
        friday: cell(TRAINING_TYPE.GROUP),
      },
    ],
  },
] as const;

export const scheduleTrainingTypes = [
  {
    type: TRAINING_TYPE.GROUP,
    title: "Grupos reducidos",
    description: "Entrenamiento guiado en grupo pequeño (máximo 8 personas).",
  },
  {
    type: TRAINING_TYPE.PERFORMANCE,
    title: "Grupo rendimiento",
    description: "Trabajo orientado a fuerza, potencia y rendimiento (máximo 5 personas).",
  },
  {
    type: TRAINING_TYPE.PERSONAL,
    title: "Entrenamiento personal",
    description: "Sesiones individualizadas en formato individual o dúo.",
  },
  {
    type: TRAINING_TYPE.ONLINE,
    title: "Entrenamiento online",
    description: "Plan personalizado con seguimiento para entrenar desde cualquier lugar.",
  },
] as const;
