"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./methodology-showcase-stripes.module.css";
import { homeMethodologyShowcasePoints } from "./constants";

export function MethodologyShowcaseStripes() {
  const points = homeMethodologyShowcasePoints;
  const [activeIndex, setActiveIndex] = useState(0);
  const activePoint = points[activeIndex];

  return (
    <section className={styles.section} aria-label="Enfoque de trabajo">
      <div className={styles.heading}>
        <p className={`eyebrow ${styles.eyebrow}`}>Metodología</p>
      </div>
      <div className={styles.layout}>
        <div className={styles.leftColumn}>

          <div className={styles.pointList}>
            {points.map((point, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={point.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`${styles.pointTrigger} ${isActive ? styles.pointTriggerActive : ""}`}
                >
                  {point.title}
                </button>
              );
            })}
          </div>

          <div className={styles.detailBlock}>

            <p className={styles.detailText}>{activePoint.text}</p>
          </div>
        </div>

        <div className={styles.imagePanel}>
          <Image src={activePoint.image} alt={activePoint.title} fill className={styles.activeImage} />
        </div>
      </div>
    </section>
  );
}
