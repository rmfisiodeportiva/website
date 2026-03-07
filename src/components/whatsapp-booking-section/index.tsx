"use client";

import { WhatsAppIcon } from "../whatsapp-button";
import { whatsappBookingSectionContent } from "@/lib/constants/contact";
import styles from "./whatsapp-booking-section.module.css";

export function WhatsAppBookingSection() {
  return (
    <section id="reserva" className={styles.section}>
      <div className="section-heading">
        <p className={`eyebrow ${styles.eyebrow}`}>{whatsappBookingSectionContent.eyebrow}</p>
        <h2 className={styles.title}>
          <span className={styles.titleIcon}>
            <WhatsAppIcon className={styles.titleIconSvg} />
          </span>
          {whatsappBookingSectionContent.title}
        </h2>
      </div>

      <div className={styles.serviceList}>
        {whatsappBookingSectionContent.services.map((service) => (
          <a
            key={service.key}
            href={service.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={styles.serviceLink}
            aria-label={`Contactar por WhatsApp para ${service.label.toLowerCase()}`}
          >
            <span className={styles.serviceLabel}>{service.label.toUpperCase()}</span>
            <span className={styles.inlineDescription}>: {service.description}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
