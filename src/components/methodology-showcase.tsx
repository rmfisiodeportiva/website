"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/components/methodology-showcase.module.css";
import { homeMethodologyShowcasePoints } from "@/lib/home-methodology-showcase-data";

export function MethodologyShowcase() {
  const points = homeMethodologyShowcasePoints;
  const [activeIndex, setActiveIndex] = useState(0);
  const activePoint = points[activeIndex];

  const activeBottomMaskClass =
    activeIndex === 3 ? styles.maskLeft0 : activeIndex === 4 ? styles.maskLeft33 : styles.maskLeft66;

  return (
    <section id="metodologia" className={styles.section} aria-label="Enfoque de trabajo">
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
          <div className={styles.pointsGrid}>
            {points.map((point, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={point.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`${styles.pointButton} ${isActive ? styles.pointButtonActive : styles.pointButtonInactive
                    }`}
                >
                  <p className={`${styles.pointTitle} ${isActive ? styles.pointTitleActive : styles.pointTitleInactive
                    }`}>
                    {point.title}
                  </p>
                </button>
              );
            })}
          </div>

          <div className={styles.desktopDetails}>
            <div className={styles.separatorLine}>
              {activeIndex >= 3 && (
                <span aria-hidden="true" className={`${styles.separatorMask} ${activeBottomMaskClass}`} />
              )}
            </div>

            <div className={styles.desktopCopy}>
              <p className={styles.desktopEyebrow}>Enfoque de trabajo</p>
              <p className={styles.desktopText}>{activePoint.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
