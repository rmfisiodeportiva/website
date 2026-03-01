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

  return (
    <section
      id="metodologia"
      className="mt-22 w-full border !border-black bg-[#f3f5f7]"
      aria-label="Enfoque de trabajo"
    >
      <div className="grid w-full lg:grid-cols-[0.42fr_0.58fr]">
        <div className="relative min-h-[340px] sm:min-h-[460px] lg:min-h-[700px]">
          <Image
            src={activePoint.image}
            alt={activePoint.title}
            fill
            className="object-cover transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="font-display text-[clamp(2rem,5vw,3.8rem)] leading-[0.9] text-white">
              {activePoint.title}
            </p>
          </div>
        </div>

        <div className="bg-[#1B1B1B] px-0 py-0">
          <div className="px-0 py-0">
            <div className="grid grid-cols-2 overflow-hidden border !border-black divide-x divide-y divide-white md:grid-cols-3">
              {points.map((point, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={point.title}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className={`min-h-[120px] appearance-none px-4 py-4 text-left outline-none transition focus:outline-none focus-visible:outline-none sm:min-h-[240px] sm:px-5 ${
                      isActive
                        ? "bg-[#f2f3f5] text-[#0f1722]"
                        : "bg-[#1B1B1B] text-white hover:bg-[#181818]"
                    }`}
                  >
                    <p
                      className={`font-display text-[clamp(1.45rem,2.4vw,2.2rem)] leading-[0.95] ${
                        isActive ? "text-slate-700" : "text-white/82"
                      }`}
                    >
                      {point.title}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="mt-7 px-6 pb-8 pt-6 sm:px-10 lg:px-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--electric)]">
                Enfoque de trabajo
              </p>
              <p className="font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-[0.95] text-white">
                {activePoint.title}
              </p>
              <p className="mt-3 text-[1.02rem] leading-relaxed text-white/82">
                {activePoint.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
