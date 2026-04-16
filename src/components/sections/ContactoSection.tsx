"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL, WHATSAPP_NUMBER, SCHEDULE, SOCIAL_LINKS, LOCATION } from "@/lib/constants";

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

export default function ContactoSection() {
  return (
    <section className="bg-[#faf8f7]/80 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#b80049] mb-3">
            Estamos para ti
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.03em] text-[#191c1d] mb-4"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Contáctanos
          </h1>
          <p className="text-[#546067] text-base sm:text-lg max-w-xl mx-auto">
            Agenda tu cita por WhatsApp, visítanos en Barranca o encuéntranos en redes sociales.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-[0_12px_40px_rgba(25,28,29,0.05)] flex flex-col gap-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#b80049]/8 flex items-center justify-center text-[#b80049]">
              <MessageCircle size={26} strokeWidth={1.5} />
            </div>
            <div>
              <h2
                className="text-lg font-semibold text-[#191c1d] mb-1"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                WhatsApp
              </h2>
              <p className="text-[#546067] text-sm mb-4">
                La forma más rápida de agendar tu cita o resolver cualquier duda.
              </p>
              <Button
                variant="primary"
                size="md"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center"
              >
                <MessageCircle size={16} />
                Escribir ahora
              </Button>
            </div>
          </motion.div>

          {/* Horario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-[0_12px_40px_rgba(25,28,29,0.05)] flex flex-col gap-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#b80049]/8 flex items-center justify-center text-[#b80049]">
              <Clock size={26} strokeWidth={1.5} />
            </div>
            <div>
              <h2
                className="text-lg font-semibold text-[#191c1d] mb-3"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                Horario de atención
              </h2>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center py-2 border-b border-[#f5f0ee]">
                  <span className="text-sm text-[#546067]">{SCHEDULE.days}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-semibold text-[#191c1d]">{SCHEDULE.hours}</span>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-[#546067]">Atención con cita previa</span>
              </div>
            </div>
          </motion.div>

          {/* Ubicación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-[0_12px_40px_rgba(25,28,29,0.05)] flex flex-col gap-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#b80049]/8 flex items-center justify-center text-[#b80049]">
              <MapPin size={26} strokeWidth={1.5} />
            </div>
            <div>
              <h2
                className="text-lg font-semibold text-[#191c1d] mb-1"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                Ubicación
              </h2>
              <p className="text-[#546067] text-sm mb-2">
                {LOCATION.display}
              </p>
              <p className="text-xs text-[#546067]">
                La dirección exacta se envía al confirmar tu cita por WhatsApp.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Phone + Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.4 }}
          className="bg-[#191c1d] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-1">
              <Phone size={18} className="text-[#b80049]" />
              <span className="text-white font-semibold text-lg">
                {WHATSAPP_NUMBER}
              </span>
            </div>
            <p className="text-[#9aabb0] text-sm">
              También disponible por llamada y WhatsApp
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[#9aabb0] text-xs uppercase tracking-widest font-semibold">
              Síguenos en redes
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#b80049]/30 flex items-center justify-center text-white transition-colors duration-200"
                >
                  {iconComponents[link.icon]}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
