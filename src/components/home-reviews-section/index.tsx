"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./home-reviews-section.module.css";
import { homeReviewsSectionContent } from "./constants";

export function HomeReviewsSection() {
  const baseReviews = homeReviewsSectionContent.reviews;
  const loopReviews = [...baseReviews, ...baseReviews];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
    slidesToScroll: 1,
    dragFree: false,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const canNavigate = baseReviews.length > 1;

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      const nextIndex = emblaApi.selectedScrollSnap() % baseReviews.length;
      setSelectedIndex(nextIndex);
    };

    emblaApi.on("select", handleSelect);
    emblaApi.on("reInit", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("reInit", handleSelect);
    };
  }, [emblaApi, baseReviews.length]);

  function handlePrev() {
    emblaApi?.scrollPrev();
  }

  function handleNext() {
    emblaApi?.scrollNext();
  }

  function handleDot(index: number) {
    emblaApi?.scrollTo(index);
  }

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className={`eyebrow ${styles.eyebrow}`}>{homeReviewsSectionContent.heading.eyebrow}</p>
        <h2 className={styles.headingTitle}>{homeReviewsSectionContent.heading.title}</h2>
      </div>

      <div className={styles.carousel}>
        <button
          type="button"
          onClick={handlePrev}
          disabled={!canNavigate}
          className={`${styles.controlButton} ${styles.controlPrev}`}
          aria-label="Testimonio anterior"
        >
          ←
        </button>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.track}>
            {loopReviews.map((item, index) => (
              <div key={`${item.author}-${index}`} className={styles.slide}>
                <blockquote className={styles.review}>
                  <p className={styles.quote}>{item.quote}</p>
                  <p className={styles.rating} aria-label={`${item.rating} de 5 estrellas`}>
                    {"★".repeat(item.rating)}
                    {"☆".repeat(5 - item.rating)}
                  </p>
                  <footer className={styles.author}>{item.author}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={!canNavigate}
          className={`${styles.controlButton} ${styles.controlNext}`}
          aria-label="Siguiente testimonio"
        >
          →
        </button>
      </div>

      <div className={styles.dots} aria-hidden="true">
        {baseReviews.map((item, index) => (
          <button
            key={item.author}
            type="button"
            onClick={() => handleDot(index)}
            className={`${styles.dot} ${index === selectedIndex ? styles.dotActive : ""}`}
            aria-label={`Ir al testimonio ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
