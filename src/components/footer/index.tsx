import Link from "next/link";
import {
  contactInfo,
  physioWhatsAppHref,
  trainingWhatsAppHref,
} from "@/lib/constants/contact";
import {
  homeJsonLd,
} from "@/lib/constants/home";
import {
  InstagramIcon,
  PhoneIcon,
  LocationIcon,
  EmailIcon,
} from "@/components/Icons";
import styles from "./footer.module.css";

export function Footer() {
  const fullAddress = `${homeJsonLd.address.addressStreet}, ${homeJsonLd.address.addressLocality}, ${homeJsonLd.address.addressRegion}, ${homeJsonLd.address.addressCountry}, ${homeJsonLd.address.addressPostCode}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.contactColumn}>
            <a
              href="https://www.instagram.com/rm_fisiodeportiva/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <InstagramIcon />
              <span>{contactInfo.instagramLabel}</span>
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <EmailIcon />
              <span className={styles.breakAll}>{contactInfo.email}</span>
            </a>

            <div className={styles.contactRow}>
              <PhoneIcon />
              <span className={styles.contactLabel}>Fisioterapia:</span>
              <a
                href={physioWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLinkInline}
              >
                {contactInfo.physioPhoneDisplay}
              </a>
            </div>

            <div className={styles.contactRow}>
              <PhoneIcon />
              <span className={styles.contactLabel}>Entrenamiento:</span>
              <a
                href={trainingWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLinkInline}
              >
                {contactInfo.trainingPhoneDisplay}
              </a>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.addressLink}
            >
              <LocationIcon />
              <span className={styles.addressText}>{fullAddress}</span>
            </a>
          </div>

          <div className={styles.navColumn}>
            <Link href="/servicios" className={styles.navLink}>
              Servicios
            </Link>
            <Link href="/tarifas" className={styles.navLink}>
              Tarifas
            </Link>
            <Link href="/horarios-entrenamientos" className={styles.navLink}>
              Horarios
            </Link>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomSection}>
          <p>© {new Date().getFullYear()} Rehab Strength. Todos los derechos reservados.</p>

          <div className={styles.legalLinks}>
            <Link href="/aviso-legal" className={styles.navLink}>
              Aviso Legal
            </Link>
            <Link href="/politica-privacidad" className={styles.navLink}>
              Política de Privacidad
            </Link>
            <Link href="/politica-cookies" className={styles.navLink}>
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
