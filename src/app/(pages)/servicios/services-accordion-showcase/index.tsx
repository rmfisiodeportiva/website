"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { detailedServices, serviceCardImageByIndex } from "../constants";
import styles from "./services-accordion-showcase.module.css";

export function ServicesAccordionShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = detailedServices[activeIndex];

  return (
    <div className={styles.layout}>
      <div className={styles.leftColumn}>
        {detailedServices.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <article key={service.title} className={styles.accordionItem}>
              <div className={styles.serviceHeading}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`${styles.serviceTrigger} ${isActive ? styles.serviceTriggerActive : ""}`}
                  aria-expanded={isActive}
                  aria-controls={`service-panel-${index}`}
                >
                  {service.title}
                </button>
                <WhatsAppButton
                  href={service.whatsappHref}
                  className={styles.whatsappIconLink}
                  iconClassName={styles.whatsappIcon}
                  ariaLabel={`Contactar por WhatsApp para ${service.title.toLowerCase()}`}
                >
                  <span className={styles.whatsappLabel}>WhatsApp</span>
                </WhatsAppButton>
              </div>

              <div
                id={`service-panel-${index}`}
                className={`${styles.contentWrap} ${isActive ? styles.contentWrapActive : ""}`}
                aria-hidden={!isActive}
              >
                <div className={styles.content}>
                  <p className={styles.description}>{service.description}</p>
                  <ul className={styles.bullets}>
                    {service.bullets.slice(0, 5).map((bullet) => (
                      <li key={bullet} className={styles.bulletItem}>
                        <span aria-hidden="true" className={styles.bulletDot} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.actions}>
                    <Link href={service.pageHref} className="btn-ghost">
                      Ver más
                    </Link>
                    {service.key === "training" ? (
                      <Link href="/horarios-entrenamientos" className="btn-ghost">
                        Horarios
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className={styles.mediaWrap}>
        <Image
          src={serviceCardImageByIndex[activeIndex] ?? serviceCardImageByIndex[0]}
          alt={activeService.title}
          fill
          className={styles.media}
        />
      </div>

      <div className={styles.globalActions}>
        <Link href="/tarifas" className="btn-primary">
          Ver tarifas
        </Link>
        <Link href="/#reserva" className="btn-ghost">
          Contacto
        </Link>
      </div>
    </div>
  );
}
