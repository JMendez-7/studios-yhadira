"use client";

import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease, delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease, delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-[#faf8f7]/80 flex items-center pt-[91px]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-[#b80049] bg-[#b80049]/10">
                ✦ Estética Avanzada en Lima
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.12}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.03em] text-[#191c1d]"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              Atención personalizada con{" "}
              <span className="text-[#b80049]">tiempo exclusivo</span>{" "}
              para ti
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.24}
              className="text-base sm:text-lg text-[#546067] leading-relaxed max-w-lg"
            >
              Extensiones de pestañas, maquillaje profesional, faciales y masajes
              en un ambiente diseñado para tu comodidad y relajación total.
            </motion.p>

            {/* Decorative line */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.30}
              className="w-full h-px bg-[#b80049]/20"
            />

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.36}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
                Reservar Cita por WhatsApp
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/servicios"
              >
                Ver servicios
              </Button>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.48}
              className="flex items-center gap-6 pt-2"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-[#c9956c] fill-[#c9956c]" />
                  ))}
                </div>
                <span className="text-xl font-bold text-[#191c1d]" style={{ fontFamily: "var(--font-noto-serif)" }}>+200</span>
                <span className="text-xs text-[#546067]">Clientas felices</span>
              </div>
              <div className="w-px h-10 bg-[#e0d8d4]" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#191c1d]" style={{ fontFamily: "var(--font-noto-serif)" }}>100%</span>
                <span className="text-xs text-[#546067]">Productos premium</span>
              </div>
              <div className="w-px h-10 bg-[#e0d8d4]" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#191c1d]" style={{ fontFamily: "var(--font-noto-serif)" }}>Certif.</span>
                <span className="text-xs text-[#546067]">Profesional</span>
              </div>
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="relative hidden lg:block"
          >
            {/* Rose gold decorative frame */}
            <div className="absolute -inset-3 rounded-[2rem] border border-[#c9956c]/40 pointer-events-none z-10" />

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/lashes-1.jpg"
                alt="Extensiones de pestañas profesionales — Studios Yhadira"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 50vw, 640px"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#191c1d]/20 to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-[0_12px_40px_rgba(25,28,29,0.10)]"
            >
              <p className="text-xs font-semibold text-[#546067] uppercase tracking-wider mb-1">Próxima disponibilidad</p>
              <p className="text-sm font-bold text-[#191c1d]">Hoy · Agenda ahora</p>
            </motion.div>

            {/* Vertical decorative text */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -right-10 text-[#b80049]/8 font-bold tracking-[0.3em] text-sm pointer-events-none select-none"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "translateY(-50%) rotate(180deg)",
                fontFamily: "var(--font-noto-serif)",
                fontSize: "11px",
                letterSpacing: "0.4em",
              }}
            >
              STUDIOS YHADIRA
            </div>

            {/* Accent dot decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#b80049]/8 -z-10" />
            <div className="absolute top-1/3 -right-8 w-16 h-16 rounded-full bg-[#c9956c]/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
