import type { CSSProperties, ReactNode } from "react";
import styles from "./service-editorial-block.module.css";

type ServiceEditorialBlockProps = {
  eyebrow?: ReactNode;
  title: string;
  paragraphs: readonly string[];
  bullets: readonly string[];
  closing: string;
  paragraphWidth?: string;
};

export function ServiceEditorialBlock({
  eyebrow,
  title,
  paragraphs,
  bullets,
  closing,
  paragraphWidth,
}: ServiceEditorialBlockProps) {
  return (
    <article
      className={styles.editorialOption}
      style={{ "--editorial-paragraph-width": paragraphWidth ?? "40ch" } as CSSProperties}
    >
      <div className={styles.optionHeading}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className={styles.optionTitle}>{title}</h2>
      </div>

      <div className={styles.editorialGrid}>
        <div className={styles.editorialCopy}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.editorialParagraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <aside className={styles.keyPointsPanel}>
          <p className={styles.keyPointsLabel}>Puntos clave</p>
          <ul className={styles.keyPointsList}>
            {bullets.map((bullet) => (
              <li key={bullet} className={styles.keyPointsItem}>
                <span aria-hidden="true" className={styles.keyPointsMarker} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <p className={styles.keyPointsClosing}>{closing}</p>
        </aside>
      </div>
    </article>
  );
}
