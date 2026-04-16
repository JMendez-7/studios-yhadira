"use client";

import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL, SCHEDULE, SOCIAL_LINKS, LOCATION } from "@/lib/constants";
import Button from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.86a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1-.24z" />
  </svg>
);

const iconComponents: Record<string, React.ReactNode> = {
  Instagram: <InstagramIcon />,
  Facebook: <FacebookIcon />,
  ExternalLink: <TikTokIcon />,
};

// Suppress unused import warning
void ExternalLink;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Decorative separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#b80049]/40 to-transparent" />

      <footer id="contacto" className="bg-[#191c1d]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
          {/* Main footer grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12"
          >
            {/* Brand column */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <h3
                  className="text-3xl font-bold tracking-[-0.03em] text-white"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  Studios Yhadira
                </h3>
                <p className="text-[#b80049] text-xs font-semibold tracking-widest uppercase">
                  Estética Avanzada · Lima
                </p>
              </div>
              <p className="text-[#9aabb0] text-sm leading-relaxed">
                Especialistas en estética avanzada. Atención personalizada con tiempo exclusivo para ti.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-3 pt-1">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="
                      w-9 h-9 rounded-full
                      bg-white/10 hover:bg-[#b80049]/30
                      flex items-center justify-center
                      text-white transition-colors duration-200
                    "
                  >
                    {iconComponents[link.icon]}
                  </a>
                ))}
              </div>
            </div>

            {/* Hours & location column */}
            <div className="flex flex-col gap-5">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                Horario de atención
              </h4>
              <div className="flex flex-col gap-4">
                {/* Visual schedule */}
                <div className="bg-white/6 rounded-2xl p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-[#b80049] shrink-0" />
                    <div>
                      <p className="text-white text-sm font-semibold">{SCHEDULE.days}</p>
                      <p className="text-[#9aabb0] text-sm">{SCHEDULE.hours}</p>
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-[#b80049] shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Ubicación</p>
                      <p className="text-[#9aabb0] text-sm">Bajo cita previa · {LOCATION.display}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA column */}
            <div className="flex flex-col gap-5">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                Reserva tu cita
              </h4>
              <p className="text-[#9aabb0] text-sm leading-relaxed">
                Escríbenos directamente por WhatsApp y con gusto te ayudamos a encontrar el horario perfecto.
              </p>
              <Button
                variant="primary"
                size="md"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit"
              >
                <MessageCircle size={16} />
                WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#9aabb0] text-xs text-center sm:text-left">
              © {currentYear} Studios Yhadira. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/servicios" className="text-[#9aabb0] hover:text-white text-xs transition-colors duration-200">
                Servicios
              </Link>
              <Link href="/nosotros" className="text-[#9aabb0] hover:text-white text-xs transition-colors duration-200">
                Nosotros
              </Link>
              <Link href="/contacto" className="text-[#9aabb0] hover:text-white text-xs transition-colors duration-200">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
