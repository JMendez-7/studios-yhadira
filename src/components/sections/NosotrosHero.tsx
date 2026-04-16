"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export default function NosotrosHero() {
  return (
    <section className="bg-[#faf8f7]/80 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
            className="flex flex-col gap-6"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-[#b80049]">
              Nuestra historia
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.03em] text-[#191c1d]"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              Belleza con{" "}
              <span className="text-[#b80049]">propósito</span>
            </h1>
            <p className="text-base sm:text-lg text-[#546067] leading-relaxed">
              Studios Yhadira nació con una sola misión: que cada clienta salga sintiéndose la mejor versión de sí misma. Somos un estudio de estética avanzada ubicado en Barranca, Perú, con atención 100% personalizada y tiempo exclusivo para ti.
            </p>
            <p className="text-base sm:text-lg text-[#546067] leading-relaxed">
              Cada servicio está diseñado para combinar técnica profesional, productos premium y un ambiente donde puedas relajarte por completo. No somos un salón más — somos tu espacio.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-2">
              <div>
                <span
                  className="text-3xl font-bold text-[#191c1d] block"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  +200
                </span>
                <span className="text-xs text-[#546067]">Clientas felices</span>
              </div>
              <div className="w-px h-10 bg-[#e0d8d4]" />
              <div>
                <span
                  className="text-3xl font-bold text-[#191c1d] block"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  100%
                </span>
                <span className="text-xs text-[#546067]">Productos premium</span>
              </div>
              <div className="w-px h-10 bg-[#e0d8d4]" />
              <div>
                <span
                  className="text-3xl font-bold text-[#191c1d] block"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  Certif.
                </span>
                <span className="text-xs text-[#546067]">Profesional</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-[#c9956c]/40 pointer-events-none z-10" />
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/makeup-1.jpg"
                alt="Studios Yhadira — estética profesional en Barranca, Perú"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 50vw, 640px"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#191c1d]/20 to-transparent" />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#b80049]/8 -z-10" />
            <div className="absolute top-1/3 -right-8 w-16 h-16 rounded-full bg-[#c9956c]/10 -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
