import styles from "./home-benefits-section.module.css";
import { homeBenefitsSectionContent } from "./constants";

type IconName = (typeof homeBenefitsSectionContent.items)[number]["icon"];

function BenefitIcon({ icon }: { icon: IconName }) {
  if (icon === "recovery") {
    return (
      <svg viewBox="0 0 24 24" className={styles.icon} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 13h4l2-4 4 8 2-4h4" />
      </svg>
    );
  }

  if (icon === "progress") {
    return (
      <svg viewBox="0 0 24 24" className={styles.icon} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 18V6m8 12V10m8 8V4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={styles.icon} fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
}

export function HomeBenefitsSection() {
  return (
    <section className={styles.section} aria-label={homeBenefitsSectionContent.ariaLabel}>
      <div className={styles.grid}>
        {homeBenefitsSectionContent.items.map((item) => (
          <article key={item.title} className={styles.item}>
            <div className={styles.head}>
              <span className={styles.iconWrap} aria-hidden="true">
                <BenefitIcon icon={item.icon} />
              </span>
              <h3 className={styles.title}>{item.title}</h3>
            </div>
            <p className={styles.description}>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
