import type { Metadata } from "next";
import styles from "../legal-pages.module.css";

export const metadata: Metadata = {
  title: "Política de Privacidad | Rocío Martínez Fernández",
  description:
    "Política de privacidad y tratamiento de datos personales del sitio web.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className={`${styles.main} page-flow`}>
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <p className="eyebrow">Protección de datos</p>
        </div>
      </section>

      <section className={styles.section}>
        <article className={styles.card}>
          <h1 className="hero-title">Política de Privacidad</h1>
          <h2 className={styles.sectionTitle}>1. Responsable del Tratamiento de sus Datos</h2>
          <div className={styles.highlightBlock}>
            <p>
              Identidad: <strong>Rocío Martínez Fernández</strong>
            </p>
            <p>
              NIF: <strong>48750808P</strong>
            </p>
            <p>
              Domicilio profesional: <strong>Calle Campoamor 86, Molina de Segura, Murcia</strong>
            </p>
            <p>
              Correo electrónico:{" "}
              <a className={styles.inlineLink} href="mailto:rociomartinezf2@gmail.com">
                <strong>rociomartinezf2@gmail.com</strong>
              </a>
            </p>
          </div>

          <h2 className={styles.sectionTitle}>2. Qué datos personales recogemos y por qué</h2>
          <p>
            En este sitio web no se recogen datos personales directamente a
            través de formularios. Sin embargo, al contactar a través del
            enlace de WhatsApp para solicitar información o reservar una cita,
            el usuario facilita:
          </p>
          <ul className={styles.list}>
            <li>
              Datos de contacto: número de teléfono y cualquier información
              aportada voluntariamente en el mensaje (nombre, motivo de la
              consulta, etc.).
            </li>
            <li>
              Datos de salud (si se proporcionan): información sobre estado de
              salud, lesiones o historial médico en el contexto de fisioterapia
              y entrenamiento. Estos datos se consideran de categoría especial y
              se tratan con máxima confidencialidad.
            </li>
          </ul>
          <p>Finalidades del tratamiento:</p>
          <ul className={styles.list}>
            <li>Gestionar consultas y solicitudes de información.</li>
            <li>Gestionar la reserva de citas.</li>
            <li>
              Prestar los servicios contratados, tanto presenciales como online.
            </li>
            <li>
              Cumplir obligaciones legales de carácter fiscal, sanitario y otras
              que resulten aplicables.
            </li>
          </ul>

          <h2 className={styles.sectionTitle}>3. Legitimación para el Tratamiento de sus Datos</h2>
          <p>La base legal para el tratamiento es:</p>
          <ul className={styles.list}>
            <li>
              Consentimiento: al contactar por WhatsApp y facilitar sus datos.
            </li>
            <li>
              Ejecución de contrato o precontrato: para gestionar citas y
              prestar servicios solicitados.
            </li>
            <li>
              Interés legítimo: para mantener la comunicación y mejorar los
              servicios.
            </li>
            <li>
              Cumplimiento de obligación legal: en materia sanitaria, fiscal y
              normativa aplicable.
            </li>
          </ul>

          <h2 className={styles.sectionTitle}>4. Con quién compartimos sus datos</h2>
          <p>Los datos personales no se cederán a terceros, salvo obligación legal.</p>
          <ul className={styles.list}>
            <li>
              WhatsApp Business: se utiliza como canal de comunicación y puede
              tratar datos de contacto y contenido de mensajes.
            </li>
            <li>
              Proveedores de servicios: asesoría fiscal u otros proveedores
              necesarios para la actividad, bajo contrato y confidencialidad.
            </li>
          </ul>

          <h2 className={styles.sectionTitle}>5. Cuánto tiempo guardamos sus datos</h2>
          <p>
            Los datos se conservan durante el tiempo necesario para cumplir la
            finalidad y los plazos legales aplicables.
          </p>
          <ul className={styles.list}>
            <li>
              Datos de contacto y consultas (WhatsApp): mientras dure la
              relación y, posteriormente, durante los plazos legalmente
              exigibles.
            </li>
            <li>
              Datos de salud (historial clínico): mínimo 5 años desde el alta
              de cada proceso asistencial, pudiendo ampliarse por continuidad
              asistencial y seguridad del paciente.
            </li>
            <li>
              Datos fiscales y contables: mínimo 4 años (fiscal) y 6 años
              (mercantil).
            </li>
          </ul>

          <h2 className={styles.sectionTitle}>6. Cuáles son sus derechos</h2>
          <p>El usuario tiene derecho a:</p>
          <ul className={styles.list}>
            <li>Acceder a sus datos personales.</li>
            <li>Rectificar datos inexactos.</li>
            <li>Suprimir sus datos cuando proceda.</li>
            <li>Limitar el tratamiento en determinadas circunstancias.</li>
            <li>Oponerse al tratamiento por motivos de su situación particular.</li>
            <li>Solicitar la portabilidad de sus datos.</li>
          </ul>
          <p>
            Para ejercer estos derechos puede enviar un correo a
            {" "}
            <a className={styles.inlineLink} href="mailto:rociomartinezf2@gmail.com">
              rociomartinezf2@gmail.com
            </a>{" "}
            o una carta a Calle Campoamor 86, Molina
            de Segura, Murcia, adjuntando copia de DNI o documento
            identificativo.
          </p>
          <p>
            También puede presentar reclamación ante la Agencia Española de
            Protección de Datos (AEPD) si considera que el tratamiento no se
            ajusta a la normativa vigente.
          </p>
        </article>
      </section>
    </main>
  );
}
