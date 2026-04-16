"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  {
    quote: "El trabajo de Yhadira es increíble, mis pestañas quedaron perfectas. Volveré sin duda.",
    author: "María G.",
    service: "Extensiones de Pestañas",
  },
  {
    quote: "El ambiente es hermoso y el servicio muy profesional. Me sentí como reina durante toda la sesión.",
    author: "Lucía P.",
    service: "Masaje con Piedras Calientes",
  },
  {
    quote: "El mejor maquillaje que me han hecho, duró todo el día sin retocarlo. Increíble trabajo.",
    author: "Carla M.",
    service: "Maquillaje Blindado",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#191c1d] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#b80049] mb-3">
            Lo que dicen de nosotras
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-white"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Clientas que{" "}
            <span className="text-[#e2165f]">nos eligen</span>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease, delay: i * 0.1 }}
              className="
                relative
                bg-white/8 hover:bg-white/12
                rounded-3xl p-8
                transition-colors duration-300
                flex flex-col gap-5
                overflow-hidden
              "
            >
              {/* Decorative quote */}
              <span
                className="absolute -top-2 -left-1 text-[#b80049]/30 leading-none pointer-events-none select-none"
                style={{ fontFamily: "var(--font-noto-serif)", fontSize: "120px", lineHeight: 1 }}
                aria-hidden
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex items-center gap-1 relative z-10">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} className="text-[#c9956c] fill-[#c9956c]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-white/85 text-base leading-relaxed relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex flex-col gap-0.5 mt-auto relative z-10">
                <span className="text-white font-semibold text-sm">{t.author}</span>
                <span className="text-white/40 text-xs">{t.service}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
