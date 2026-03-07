import Link from "next/link";
import {
  contactInfo,
  physioWhatsAppHref,
  trainingWhatsAppHref,
} from "@/lib/constants/contact";
import {
  homeJsonLd,
} from "@/lib/home-page-data";

import {
  InstagramIcon,
  PhoneIcon,
  LocationIcon,
  EmailIcon,
} from "@/components/Icons";

export function Footer() {
  const fullAddress = `${homeJsonLd.address.addressStreet}, ${homeJsonLd.address.addressLocality}, ${homeJsonLd.address.addressRegion}, ${homeJsonLd.address.addressCountry}, ${homeJsonLd.address.addressPostCode}`;

  return (
    <footer className="mt-12 border-t bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">

        {/* TOP SECTION */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* COLUMN 1 – CONTACT */}
          <div className="space-y-4 text-sm">

            <a
              href="https://www.instagram.com/rm_fisiodeportiva/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80"
            >
              <InstagramIcon />
              <span>{contactInfo.instagramLabel}</span>
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80"
            >
              <EmailIcon />
              <span className="break-all">{contactInfo.email}</span>
            </a>

            <div className="flex items-center gap-3">
              <PhoneIcon />
              <span className="font-medium">Fisioterapia:</span>
              <a
                href={physioWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                {contactInfo.physioPhoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <PhoneIcon />
              <span className="font-medium">Entrenamiento:</span>
              <a
                href={trainingWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                {contactInfo.trainingPhoneDisplay}
              </a>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:opacity-80"
            >
              <LocationIcon />
              <span className="leading-relaxed">
                {fullAddress}
              </span>
            </a>

          </div>

          {/* COLUMN 2 – NAVIGATION */}
          <div className="flex flex-col gap-4 text-sm md:items-end md:text-right">
            <Link href="/servicios" className="hover:opacity-80">
              Servicios
            </Link>
            <Link href="/tarifas" className="hover:opacity-80">
              Tarifas
            </Link>
            <Link href="/horarios-entrenamientos" className="hover:opacity-80">
              Horarios
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 border-t border-white/20" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col gap-4 text-center text-xs md:flex-row md:items-center md:justify-between md:text-left">

          <p>
            © {new Date().getFullYear()} Rehab Strength. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:justify-end">
            <Link href="/aviso-legal" className="hover:opacity-80">
              Aviso Legal
            </Link>
            <Link href="/politica-privacidad" className="hover:opacity-80">
              Política de Privacidad
            </Link>
            <Link href="/politica-cookies" className="hover:opacity-80">
              Política de Cookies
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
