import Link from "next/link";
import styles from "./home-services-stripes.module.css";
import { featuredHomeServices } from "./constants";

export function HomeServicesStripes() {
  return (
    <section className={styles.section} aria-label="Servicios destacados">
      <div className={styles.header}>
        <p className={`eyebrow ${styles.eyebrow}`}>Servicios destacados</p>
        <Link href="/servicios" className={styles.allServicesLink}>
          Ver todos los servicios
        </Link>
      </div>

      {featuredHomeServices.map((service) => (
        <Link
          key={service.title}
          href={service.href}
          className={styles.stripe}
          aria-label={`Ver servicio de ${service.title.toLowerCase()}`}
        >
          <div className={styles.content}>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
