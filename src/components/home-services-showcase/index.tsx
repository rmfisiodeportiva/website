"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./home-services-showcase.module.css";
import { featuredHomeServices } from "./constants";

export function HomeServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = featuredHomeServices[activeIndex];

  return (
    <section className={styles.section} aria-label="Servicios destacados">
      <div className={styles.header}>
        <p className={`eyebrow ${styles.eyebrow}`}>Servicios destacados</p>
        <Link href="/servicios" className={styles.allServicesLink}>
          Ver todos los servicios
        </Link>
      </div>

      <div className={styles.layout}>
        <div className={styles.leftColumn}>
          <div className={styles.serviceList} role="list">
            {featuredHomeServices.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={service.title}
                  type="button"
                  className={`${styles.serviceTrigger} ${isActive ? styles.serviceTriggerActive : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  aria-label={`Mostrar información de ${service.title.toLowerCase()}`}
                >
                  {service.title}
                </button>
              );
            })}
          </div>

          <div className={styles.detailBlock}>
            <p className={styles.description}>{activeService.description}</p>
            <Link href={activeService.href} className={styles.cta}>
              Descubrir servicio
            </Link>
          </div>
        </div>

        <div className={styles.mediaWrap}>
          <Image
            src={activeService.image}
            alt={activeService.imageAlt}
            fill
            className={styles.media}
          />
        </div>
      </div>
    </section>
  );
}
