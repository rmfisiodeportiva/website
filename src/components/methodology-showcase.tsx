"use client";

import Image from "next/image";
import { useState } from "react";

type MethodologyPoint = {
  title: string;
  text: string;
  image: string;
};

type MethodologyShowcaseProps = {
  points: readonly MethodologyPoint[];
};

export function MethodologyShowcase({ points }: MethodologyShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePoint = points[activeIndex];
  const activeBottomMaskClass =
    activeIndex === 3 ? "left-0" : activeIndex === 4 ? "left-1/3" : "left-2/3";

  return (
    <section
      id="metodologia"
      className="mt-22 w-full border !border-black bg-[var(--surface-soft)]"
      aria-label="Enfoque de trabajo"
    >
      <div className="grid w-full lg:grid-cols-[0.42fr_0.58fr]">
        <div className="order-2 relative min-h-[420px] sm:min-h-[560px] lg:order-1 lg:min-h-[700px]">
          <Image
            src={activePoint.image}
            alt={activePoint.title}
            fill
            className="object-cover transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="font-display text-[clamp(2rem,5vw,2.5rem)] leading-[0.9] text-white">
              {activePoint.title}
            </p>
            <p className="block lg:hidden mt-3 max-w-xl text-[0.98rem] leading-relaxed text-white/88 sm:text-[1.03rem]">
              {activePoint.text}
            </p>
          </div>
        </div>

        <div className="order-1 bg-[var(--panel)] lg:order-2">
          <div className="grid grid-cols-3 gap-px overflow-hidden bg-white">
            {points.map((point, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={point.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`min-h-[120px] appearance-none border-0 px-3 py-3 text-left outline-none transition focus:outline-none focus-visible:outline-none focus-visible:ring-0 sm:min-h-[200px] sm:px-5 sm:py-4 ${
                    isActive
                      ? "bg-[var(--primary)] text-[var(--neutral-950)]"
                      : "bg-[var(--panel)] text-white hover:bg-[var(--panel-hover)]"
                  }`}
                >
                  <p className={`font-display text-[clamp(1rem,2vw,1.55rem)]  text-center leading-[0.96] ${
                    isActive ? "text-white" : "text-white/88"
                  }`}>
                    {point.title}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <div className="relative h-px bg-white/80">
              {activeIndex >= 3 && (
                <span
                  aria-hidden="true"
                  className={`absolute top-0 h-px w-1/3 bg-[var(--border)] ${activeBottomMaskClass}`}
                />
              )}
            </div>

            <div className="px-5 pb-7 pt-6 sm:px-7 sm:pb-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Enfoque de trabajo
            </p>
            {/* <p className="font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-[0.95] text-white">
              {activePoint.title}
            </p> */}
            <p className="mt-3 text-[clamp(1.7rem,3vw,2.4rem)] leading-relaxed text-white/82">
              {activePoint.text}
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
