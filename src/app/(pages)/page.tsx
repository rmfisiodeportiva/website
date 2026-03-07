import type { Metadata } from "next";
import { HomeBenefitsSection } from "@/components/home-benefits-section";
import { HomeHeroSection } from "@/components/home-hero-section";
import { HomeServicesShowcase } from "@/components/home-services-showcase";
import { MethodologyShowcaseStripes } from "@/components/methodology-showcase-stripes";
import { HomeReviewsSection } from "@/components/home-reviews-section";
import { HomeTeamSection } from "@/components/home-team-section";
import { QuoteBlock } from "@/components/quote-block";
import { WhatsAppBookingSection } from "@/components/whatsapp-booking-section";
import { homeJsonLd } from "@/lib/home-page-data";
import { homeQuotes } from "@/components/quote-block/constants";

export const metadata: Metadata = {
  title: "Centro de Rehabilitacion y Rendimiento",
  description:
    "Rehab Strength en Molina de Segura (Murcia): fisioterapia y entrenamiento personalizado para recuperarte con seguridad y volver más fuerte.",
};

export default function Home() {
  return (
    <>
      <main id="inicio" className="bg-white">
        <HomeHeroSection />

        <HomeBenefitsSection />

        <HomeServicesShowcase />

        <section className="section-wrap pt-8 md:pt-14 flex justify-center" aria-label="Mensaje principal">
          <QuoteBlock
            title={homeQuotes.methodology.title}
            description={homeQuotes.methodology.description}
          />
        </section>

        <MethodologyShowcaseStripes />

        <HomeTeamSection />

        <HomeReviewsSection />

        <WhatsAppBookingSection />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
    </>
  );
}
