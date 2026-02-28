import type { Metadata } from "next";
import { Teachers, League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const teachers = Teachers({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://rehab-strength.com",
  ),
  title: {
    default: "Rehab Strength | Centro de Rehabilitacion y Entrenamiento",
    template: "%s | Rehab Strength",
  },
  description:
    "Rehab Strength combina fisioterapia avanzada y entrenamiento personalizado para recuperar movilidad, reducir dolor y volver mas fuerte a tu vida diaria o deporte.",
  keywords: [
    "rehabilitacion",
    "fisioterapia",
    "entrenamiento personalizado",
    "recuperacion deportiva",
    "centro de rehabilitacion",
  ],
  openGraph: {
    title: "Rehab Strength | Recuperacion con Fuerza y Precision",
    description:
      "Sesiones de fisioterapia y entrenamiento fisico personalizado en un centro profesional orientado a resultados reales.",
    url: "/",
    siteName: "Rehab Strength",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rehab Strength",
    description:
      "Centro moderno de fisioterapia y entrenamiento personalizado. Reserva tu sesion.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${teachers.variable} ${leagueSpartan.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
