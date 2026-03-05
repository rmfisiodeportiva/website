"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/components/methodology-showcase-stripes.module.css";
import { homeMethodologyShowcasePoints } from "@/lib/home-methodology-showcase-data";

export function MethodologyShowcaseStripes() {
  const points = homeMethodologyShowcasePoints;
  const [activeIndex, setActiveIndex] = useState(0);
  const activePoint = points[activeIndex];

  return (
    <section className={styles.section} aria-label="Enfoque de trabajo con stripes">
      <div className={styles.layout}>
        <div className={styles.imagePanel}>
          <Image
            src={activePoint.image}
            alt={activePoint.title}
            fill
            className={styles.activeImage}
          />
          <div className={styles.imageOverlay} />
          <div className={styles.imageCopy}>
            <p className={styles.imageTitle}>{activePoint.title}</p>
            <p className={styles.mobileText}>{activePoint.text}</p>
          </div>
        </div>

        <div className={styles.menuPanel}>
          <div className={styles.pointsList}>
            {points.map((point, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={point.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`${styles.pointButton} ${isActive ? styles.pointButtonActive : ""}`}
                >
                  <div className={styles.pointContent}>
                    <p className={styles.pointTitle}>{point.title}</p>
                    <p className={styles.pointDescription}>{point.text}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
