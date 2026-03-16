"use client";

import { useMemo, useState } from "react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  physioWhatsAppHref,
  readaptationWhatsAppHref,
  trainingWhatsAppHref,
} from "@/lib/constants/contact";
import {
  entrenamientoPricingGroups,
  fisioterapiaPricing,
  pricingOptions,
  readaptacionPricingContent,
} from "./constants";
import styles from "./tarifas-page.module.css";

type PricingKey = (typeof pricingOptions)[number]["key"];

export function PricingSelector() {
  const [activeKey, setActiveKey] = useState<PricingKey>("fisioterapia");

  const activeOption = useMemo(
    () => pricingOptions.find((option) => option.key === activeKey) ?? pricingOptions[0],
    [activeKey],
  );

  const highlightedDescription = useMemo(() => {
    if (!("highlightWord" in activeOption) || !activeOption.highlightWord) {
      return activeOption.description;
    }

    const target = activeOption.highlightWord.toLowerCase();
    const full = activeOption.description;
    const lower = full.toLowerCase();
    const start = lower.indexOf(target);

    if (start === -1) return full;

    const end = start + activeOption.highlightWord.length;
    return (
      <>
        {full.slice(0, start)}
        <strong>{full.slice(start, end)}</strong>
        {full.slice(end)}
      </>
    );
  }, [activeOption]);

  const personalGroups = useMemo(() => {
    const individual = entrenamientoPricingGroups.find((group) => group.title.toLowerCase().includes("individual"));
    const duo = entrenamientoPricingGroups.find((group) => group.title.toLowerCase().includes("dúo"));
    const rest = entrenamientoPricingGroups.filter(
      (group) => !group.title.toLowerCase().includes("individual") && !group.title.toLowerCase().includes("dúo"),
    );
    return { individual, duo, rest };
  }, []);

  return (
    <section className={styles.selectorSection} aria-label="Selector de precios">
      <div className={styles.selectorLayout}>
        <div className={styles.selectorList} role="list">
          {pricingOptions.map((option) => {
            const isActive = option.key === activeKey;
            return (
              <button
                key={option.key}
                type="button"
                className={`${styles.selectorTrigger} ${isActive ? styles.selectorTriggerActive : ""}`}
                onClick={() => setActiveKey(option.key)}
                aria-pressed={isActive}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className={styles.selectorDetail}>
          <p className={styles.selectorDescription}>{highlightedDescription}</p>

          {activeKey === "fisioterapia" ? (
            <div className={styles.tableWrap}>
              <div className={styles.tableHead}>
                <span>Sesiones</span>
                <span>Precios</span>
              </div>
              {fisioterapiaPricing.map((item) => (
                <div key={item.sessions} className={`${styles.tableRow} ${item.note ? styles.tableRowWithNote : ""}`}>
                  <div className={styles.tableRowMain}>
                    <p className={styles.sessionLabel}>{item.sessions}</p>
                    <div className={styles.priceBlock}>
                      <p className={styles.price}>{item.price}</p>
                    </div>
                  </div>
                  {item.note ? <p className={styles.note}>{item.note}</p> : null}
                </div>
              ))}
            </div>
          ) : null}

          {activeKey === "entrenamiento" ? (
            <div className={styles.trainingCardsGrid}>
              {personalGroups.rest.map((group) => (
                <div key={group.title} className={styles.trainingCard}>
                  <h4 className={styles.trainingCardTitle}>{group.title}</h4>
                  <div className={styles.trainingCardList}>
                    {group.items.map((item) => (
                      <div key={`${group.title}-${item.plan}`} className={styles.trainingCardRow}>
                        <div className={styles.trainingCardRowMain}>
                          <p className={styles.trainingPlan}>{item.plan}</p>
                          <div className={styles.trainingPriceWrap}>
                            <p className={styles.trainingPrice}>{item.price}</p>
                          </div>
                        </div>
                        {"validity" in item && item.validity ? (
                          <span className={styles.trainingValidity}>{item.validity}</span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {personalGroups.individual && personalGroups.duo ? (
                <div className={`${styles.trainingCard} ${styles.personalCombinedCard}`}>
                  <h4 className={styles.trainingCardTitle}>Entrenamiento personal</h4>
                
                  <div className={styles.personalCombinedHeader}>
                    <span>Plan</span>
                    <span>Individual</span>
                    <span>Pareja</span>
                  </div>

                  <div className={styles.trainingCardList}>
                    {personalGroups.individual.items.map((item, index) => {
                      const duoItem = personalGroups.duo?.items[index];
                      const hasValidity = "validity" in item && Boolean(item.validity);
                      return (
                        <div key={`personal-combined-${item.plan}`} className={styles.personalCombinedRow}>
                          <p className={styles.trainingPlan}>{item.plan}</p>
                          <p className={`${styles.trainingPrice} ${hasValidity ? styles.personalPriceWithValidity : ""}`}>
                            {item.price}
                          </p>
                          <p className={`${styles.trainingPrice} ${hasValidity ? styles.personalPriceWithValidity : ""}`}>
                            {duoItem?.price ?? ""}
                          </p>
                          {hasValidity ? (
                            <span className={styles.personalCombinedValidity}>{item.validity}</span>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {activeKey === "readaptacion" ? (
            <div className={styles.readaptationInline}>
              <h3 className={styles.readaptationTitle}>{readaptacionPricingContent.title}</h3>
              <p className={styles.readaptationDescription}>{readaptacionPricingContent.description}</p>
            </div>
          ) : null}

          <div className={styles.selectorCtaWrap}>
            {activeKey === "fisioterapia" ? (
              <WhatsAppButton href={physioWhatsAppHref} className={`${styles.ctaButton} btn-primary`}>
                {activeOption.ctaLabel}
              </WhatsAppButton>
            ) : null}

            {activeKey === "entrenamiento" ? (
              <WhatsAppButton href={trainingWhatsAppHref} className={`${styles.ctaButton} btn-primary`}>
                {activeOption.ctaLabel}
              </WhatsAppButton>
            ) : null}

            {activeKey === "readaptacion" ? (
              <WhatsAppButton href={readaptationWhatsAppHref} className={`${styles.ctaButton} btn-primary`}>
                {activeOption.ctaLabel}
              </WhatsAppButton>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
