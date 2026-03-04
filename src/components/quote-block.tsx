import styles from "@/components/quote-block.module.css";

type QuoteBlockProps = {
  title: string;
  description: string;
};

export function QuoteBlock({ title, description }: QuoteBlockProps) {
  return (
    <blockquote className={styles.quote}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </blockquote>
  );
}
