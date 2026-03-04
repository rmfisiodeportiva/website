import { QuoteBlock } from "@/components/quote-block";
import styles from "@/components/home-team-section.module.css";
import { homeTeamSectionContent } from "@/lib/home-team-section-data";

export function HomeTeamSection() {
  return (
    <section
      id={homeTeamSectionContent.id}
      className={styles.section}
      aria-label={homeTeamSectionContent.ariaLabel}
    >
      <div className={styles.quoteWrap}>
        <QuoteBlock
          title={homeTeamSectionContent.quote.title}
          description={homeTeamSectionContent.quote.description}
        />
      </div>

      <div className={styles.grid}>
        {homeTeamSectionContent.members.map((member) => (
          <article key={member.name} className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.avatar} aria-hidden="true">
                {member.name
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </div>
              <div className={styles.text}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
