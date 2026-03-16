import type { Metadata } from "next";
import styles from "../legal-pages.module.css";

export const metadata: Metadata = {
  title: "Política de Cookies | Rocío Martínez Fernández",
  description:
    "Información sobre el uso de cookies en el sitio web de Rocío Martínez Fernández.",
};

export default function PoliticaCookiesPage() {
  return (
    <main className={`${styles.main} page-flow`}>
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <p className="eyebrow">Navegación y cookies</p>
          <h1 className={styles.heroTitle}>Política de Cookies</h1>
        </div>
      </section>

      <section className={styles.section}>
        <article className={styles.card}>
          <h2 className={styles.sectionTitle}>1. Qué son las cookies</h2>
          <p>
            Las cookies son pequeños archivos de texto que un sitio web guarda
            en su navegador al visitarlo. Permiten que la web recuerde
            información sobre su visita, como idioma preferido, opciones de
            navegación o sesiones activas, para mejorar la experiencia de uso.
          </p>

          <h2 className={styles.sectionTitle}>2. Tipos de cookies</h2>
          <ul className={styles.list}>
            <li>
              Cookies técnicas o necesarias: imprescindibles para el
              funcionamiento básico del sitio.
            </li>
            <li>
              Cookies de preferencias: permiten recordar ajustes de navegación.
            </li>
            <li>
              Cookies de análisis: ayudan a medir uso y rendimiento del sitio.
            </li>
            <li>
              Cookies publicitarias: gestionan anuncios según hábitos de
              navegación.
            </li>
          </ul>

          <h2 className={styles.sectionTitle}>3. Cookies utilizadas en este sitio</h2>
          <p>
            Este sitio utiliza cookies técnicas necesarias para su
            funcionamiento. En caso de incorporarse cookies analíticas o de
            terceros, se solicitará el consentimiento del usuario de forma
            previa mediante el panel o banner de cookies correspondiente.
          </p>

          <h2 className={styles.sectionTitle}>4. Gestión y desactivación de cookies</h2>
          <p>
            Puede permitir, bloquear o eliminar las cookies configurando su
            navegador. Tenga en cuenta que, al desactivar cookies técnicas,
            algunas funcionalidades del sitio pueden no funcionar correctamente.
          </p>
          <ul className={styles.list}>
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Safari</li>
            <li>Microsoft Edge</li>
          </ul>

          <h2 className={styles.sectionTitle}>5. Cookies de terceros</h2>
          <p>
            Si en el futuro se integran servicios externos (por ejemplo,
            contenido incrustado o herramientas de medición), estos podrán
            instalar cookies propias. En ese caso, se informará al usuario y se
            actualizará esta política.
          </p>

          <h2 className={styles.sectionTitle}>6. Actualizaciones de esta política</h2>
          <p>
            Esta Política de Cookies puede actualizarse para adaptarse a cambios
            normativos o técnicos del sitio web. Se recomienda revisarla
            periódicamente.
          </p>

          <h2 className={styles.sectionTitle}>7. Contacto</h2>
          <p>
            Si tiene dudas sobre esta Política de Cookies, puede contactar en:
            rociomartinezf2@gmail.com
          </p>
        </article>
      </section>
    </main>
  );
}
