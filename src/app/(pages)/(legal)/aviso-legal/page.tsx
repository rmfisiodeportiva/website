import type { Metadata } from "next";
import styles from "../legal-pages.module.css";

export const metadata: Metadata = {
  title: "Aviso Legal | Rocío Martínez Fernández",
  description:
    "Información legal del sitio web de Rocío Martínez Fernández.",
};

export default function AvisoLegalPage() {
  return (
    <main className={`${styles.main} page-flow`}>
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <p className="eyebrow">Información legal</p>
        </div>
      </section>

      <section className={styles.section}>
        <article className={styles.card}>
          <h1 className="hero-title">Aviso Legal</h1>
          <h2 className={styles.sectionTitle}>1. Datos Identificativos del Titular de la Web</h2>
          <p>
            En cumplimiento del deber de información establecido en la Ley
            34/2002, de 11 de julio, de Servicios de la Sociedad de la
            Información y de Comercio Electrónico (LSSI-CE), se informa a los
            usuarios de este sitio web de los datos identificativos del titular:
          </p>
          <div className={styles.highlightBlock}>
            <p>
              Nombre completo: <strong>Rocío Martínez Fernández</strong>
            </p>
            <p>
              NIF: <strong>48750808P</strong>
            </p>
            <p>
              Domicilio profesional: <strong>Calle Campoamor, 86, Molina de Segura, Murcia</strong>
            </p>
            <p>
              Correo electrónico de contacto:{" "}
              <a className={styles.inlineLink} href="mailto:rociomartinezf2@gmail.com">
                <strong>rociomartinezf2@gmail.com</strong>
              </a>
            </p>
            <p>
              Teléfono de contacto: <strong>+34 634 43 11 39</strong>
            </p>
          </div>

          <h2 className={styles.sectionTitle}>2. Objeto de la Web</h2>
          <p>
            El presente sitio web tiene como finalidad principal ofrecer
            información sobre los servicios de fisioterapia, readaptación y
            entrenamiento físico prestados por Rocío Martínez Fernández, así
            como facilitar el contacto para la solicitud de citas y consultas.
          </p>

          <h2 className={styles.sectionTitle}>3. Condiciones de Uso</h2>
          <p>
            El acceso y/o uso de este portal atribuye la condición de usuario,
            que acepta, desde dicho acceso y/o uso, las Condiciones Generales
            de Uso aquí reflejadas. Las citadas condiciones serán de aplicación
            independientemente de las Condiciones Generales de Contratación que
            en su caso resulten de obligado cumplimiento.
          </p>
          <p>
            El usuario asume la responsabilidad del uso del portal. Dicha
            responsabilidad se extiende al registro que fuese necesario para
            acceder a determinados servicios o contenidos.
          </p>

          <h2 className={styles.sectionTitle}>4. Propiedad Intelectual e Industrial</h2>
          <p>
            Rocío Martínez Fernández es titular de todos los derechos de
            propiedad intelectual e industrial de su página web, así como de
            los elementos contenidos en la misma (a título enunciativo:
            imágenes, sonido, audio, vídeo, software o textos; marcas o
            logotipos, combinaciones de colores, estructura y diseño, selección
            de materiales usados, programas de ordenador necesarios para su
            funcionamiento, acceso y uso, etc.).
          </p>
          <p>
            Quedan expresamente prohibidas la reproducción, distribución y
            comunicación pública, incluida su modalidad de puesta a disposición,
            de la totalidad o parte de los contenidos de esta página web, con
            fines comerciales, en cualquier soporte y por cualquier medio
            técnico, sin autorización previa.
          </p>

          <h2 className={styles.sectionTitle}>5. Exclusión de Garantías y Responsabilidad</h2>
          <p>
            Rocío Martínez Fernández no se hace responsable, en ningún caso, de
            los daños y perjuicios de cualquier naturaleza que pudieran
            ocasionar, a título enunciativo: errores u omisiones en los
            contenidos, falta de disponibilidad del portal o la transmisión de
            virus o programas maliciosos o lesivos en los contenidos, a pesar
            de haber adoptado todas las medidas tecnológicas necesarias para
            evitarlo.
          </p>

          <h2 className={styles.sectionTitle}>6. Modificaciones</h2>
          <p>
            Rocío Martínez Fernández se reserva el derecho de efectuar, sin
            previo aviso, las modificaciones que considere oportunas en su
            portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y
            servicios que se presten a través del mismo como la forma en la que
            estos aparezcan presentados o localizados.
          </p>

          <h2 className={styles.sectionTitle}>7. Enlaces</h2>
          <p>
            En caso de que se dispusiesen enlaces o hipervínculos hacia otros
            sitios de Internet, Rocío Martínez Fernández no ejercerá ningún tipo
            de control sobre dichos sitios y contenidos. En ningún caso asumirá
            responsabilidad por los contenidos de algún enlace perteneciente a
            un sitio web ajeno, ni garantizará la disponibilidad técnica,
            calidad, fiabilidad, exactitud, amplitud, veracidad, validez y
            constitucionalidad de cualquier material o información contenida en
            dichos hipervínculos.
          </p>

          <h2 className={styles.sectionTitle}>8. Derecho de Exclusión</h2>
          <p>
            Rocío Martínez Fernández se reserva el derecho a denegar o retirar
            el acceso al portal y/o los servicios ofrecidos sin necesidad de
            preaviso, a instancia propia o de un tercero, a aquellos usuarios
            que incumplan las presentes Condiciones Generales de Uso.
          </p>

          <h2 className={styles.sectionTitle}>9. Generalidades</h2>
          <p>
            Rocío Martínez Fernández perseguirá el incumplimiento de las
            presentes condiciones, así como cualquier utilización indebida de su
            portal, ejerciendo todas las acciones civiles y penales que le
            puedan corresponder en derecho.
          </p>

          <h2 className={styles.sectionTitle}>
            10. Modificación de las Presentes Condiciones y Duración
          </h2>
          <p>
            Rocío Martínez Fernández podrá modificar en cualquier momento las
            condiciones aquí determinadas, siendo debidamente publicadas como
            aquí aparecen. La vigencia de las citadas condiciones irá en
            función de su exposición y estarán vigentes hasta que sean
            modificadas por otras debidamente publicadas.
          </p>

          <h2 className={styles.sectionTitle}>11. Legislación Aplicable y Jurisdicción</h2>
          <p>
            La relación entre Rocío Martínez Fernández y el usuario se regirá
            por la normativa española vigente y cualquier controversia se
            someterá a los Juzgados y Tribunales de la ciudad de Molina de
            Segura, Murcia.
          </p>
        </article>
      </section>
    </main>
  );
}
