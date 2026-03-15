import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { trainingWhatsAppHref } from "@/lib/constants/contact";
import { scheduleDays, scheduleRows, scheduleTrainingTypes, TRAINING_TYPE, type TrainingType } from "./constants";
import styles from "./horarios-entrenamientos.module.css";

export const metadata: Metadata = {
  title: "Horarios de Entrenamientos",
  description:
    "Consulta los horarios disponibles para entrenamientos en Rehab Strength (Molina de Segura, Murcia) y confirma tu plaza por WhatsApp.",
};

export default function HorariosEntrenamientosPage() {
  const getTrainingTypeClassName = (type: TrainingType) => {
    if (type === TRAINING_TYPE.PERFORMANCE) return styles.performanceType;
    if (type === TRAINING_TYPE.ONLINE) return styles.onlineType;
    if (type === TRAINING_TYPE.PERSONAL) return styles.personalType;
    return styles.groupType;
  };

  const getTrainingCardClassName = (type: TrainingType) => {
    if (type === TRAINING_TYPE.PERFORMANCE) return styles.performanceCard;
    if (type === TRAINING_TYPE.ONLINE) return styles.onlineCard;
    if (type === TRAINING_TYPE.PERSONAL) return styles.personalCard;
    return styles.groupCard;
  };

  return (
    <main className={`${styles.main} page-flow`}>
      <section className={`${styles.heroSection} hero-section`}>
        <div className="electric-lines" aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className="eyebrow">Horarios</p>
            <h1 className={styles.heroTitle}>Horarios de entrenamientos</h1>
            <p className={styles.heroDescription}>
              Horario definitivo de lunes a viernes con turnos de mañana y tarde. Escríbenos por
              WhatsApp para reservar tu plaza.
            </p>
          </div>
          <div className={`${styles.ctaRow} ${styles.heroCtaRow}`}>
            <WhatsAppButton href={trainingWhatsAppHref} className={`btn-primary ${styles.primaryCta}`}>
              Solicita plaza
            </WhatsAppButton>
            <Link href="/tarifas" className="btn-ghost">
              Ver tarifas
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.scheduleSection}>
        <div className={styles.scheduleInner}>
          <div className={styles.tableShell}>
          <div className={styles.tableSurface}>
          <table className={styles.scheduleTable}>
            <thead>
              <tr className={styles.headerRow}>
                {/* <th className={styles.headCell}>
                  Turno
                </th> */}
                <th className={styles.headCell}>
                  Horario
                </th>
                {scheduleDays.map((day) => (
                  <th key={day} className={styles.headCell}>
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleRows.map((shiftBlock, blockIndex) => (
                <Fragment key={shiftBlock.shift}>
                  {shiftBlock.rows.map((row) => (
                    <tr key={`${shiftBlock.shift}-${row.time}`} className={styles.bodyRow}>
                      <td className={styles.timeCell}>{row.time}</td>
                      <td className={`${styles.slotCell} ${getTrainingTypeClassName(row.monday.type)}`}>{row.monday.label.toUpperCase()}</td>
                      <td className={`${styles.slotCell} ${getTrainingTypeClassName(row.tuesday.type)}`}>{row.tuesday.label.toUpperCase()}</td>
                      <td className={`${styles.slotCell} ${getTrainingTypeClassName(row.wednesday.type)}`}>{row.wednesday.label.toUpperCase()}</td>
                      <td className={`${styles.slotCell} ${getTrainingTypeClassName(row.thursday.type)}`}>{row.thursday.label.toUpperCase()}</td>
                      <td className={`${styles.slotCell} ${getTrainingTypeClassName(row.friday.type)}`}>{row.friday.label.toUpperCase()}</td>
                    </tr>
                  ))}
                  {blockIndex < scheduleRows.length - 1 && (
                    <tr className={styles.separatorRow} aria-hidden="true">
                      <td colSpan={6} />
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
          </div>
          </div>
        </div>
      </section>

      <section className={`${styles.postSection}`}>
        <div className={styles.postInner}>
          <div className={styles.trainingGrid}>
            {scheduleTrainingTypes.map((item) => (
              <div key={item.title} className={`${styles.trainingCard} ${getTrainingCardClassName(item.type)}`}>
                <h2 className={styles.trainingCardTitle}>{item.title}</h2>
                <p className={styles.trainingCardText}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
