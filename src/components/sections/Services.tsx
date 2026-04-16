"use client";

import { motion } from "framer-motion";
import { Eye, Sparkles, Waves, Star, MessageCircle } from "lucide-react";
import { SERVICE_CATEGORIES, WHATSAPP_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  lashes: <Eye size={22} strokeWidth={1.5} />,
  makeup: <Sparkles size={22} strokeWidth={1.5} />,
  massages: <Waves size={22} strokeWidth={1.5} />,
  other: <Star size={22} strokeWidth={1.5} />,
};

export default function Services() {
  return (
    <section id="servicios" className="bg-[#f5f0ee]/80 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#b80049] mb-3">
            Lo que ofrecemos
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#b80049] mb-4"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Nuestros Servicios
          </h2>
          <p className="text-[#546067] text-base sm:text-lg max-w-xl mx-auto">
            Cada tratamiento diseñado para resaltar tu belleza natural con los mejores productos y técnicas del mercado.
          </p>
        </motion.div>

        {/* Service categories */}
        <div className="flex flex-col gap-16">
          {SERVICE_CATEGORIES.map((category) => (
            <div key={category.id}>
              {/* Category title */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-9 h-9 rounded-xl bg-[#b80049]/10 flex items-center justify-center text-[#b80049]">
                  {categoryIcons[category.id]}
                </div>
                <h3
                  className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#191c1d]"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  {category.title}
                </h3>
                <span className="text-xs font-semibold text-[#546067] bg-[#f5f0ee] px-2.5 py-1 rounded-full border border-[#e0d8d4]">
                  {category.services.length} servicios
                </span>
                <div className="flex-1 h-px bg-[#e0d8d4] ml-2" />
              </motion.div>

              {/* Services grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {category.services.map((service) => (
                  <motion.div
                    key={service.name}
                    variants={cardVariants}
                    className="
                      relative group
                      bg-white rounded-2xl p-6
                      shadow-[0_12px_40px_rgba(25,28,29,0.05)]
                      hover:shadow-[0_20px_60px_rgba(184,0,73,0.12)]
                      hover:-translate-y-2
                      transition-all duration-300
                      flex flex-col gap-3
                      overflow-hidden
                      before:absolute before:top-0 before:left-6 before:right-6 before:h-[2px]
                      before:bg-gradient-to-r before:from-transparent before:via-[#b80049]/40 before:to-transparent
                    "
                    style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-[#191c1d] text-base leading-tight">
                        {service.name}
                      </h4>
                      {service.price > 0 ? (
                        <span
                          className="text-lg font-bold text-[#b80049] shrink-0"
                          style={{ fontFamily: "var(--font-noto-serif)" }}
                        >
                          S/ {service.price}
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-[#546067] bg-[#f5f0ee]/80 px-2 py-1 rounded-full shrink-0">
                          Consultar
                        </span>
                      )}
                    </div>

                    {service.duration && (
                      <span className="text-xs font-medium text-[#b80049] bg-[#b80049]/8 px-2.5 py-1 rounded-full w-fit">
                        {service.duration}
                      </span>
                    )}

                    {service.description && (
                      <p className="text-sm text-[#546067] leading-relaxed flex-1">
                        {service.description}
                      </p>
                    )}

                    {/* Hover reserve button */}
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-2 w-full text-center text-xs font-semibold text-[#b80049]
                        bg-[#b80049]/8 hover:bg-[#b80049]/14 rounded-full py-2
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                      "
                    >
                      Reservar
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mt-16"
        >
          <p className="text-[#546067] mb-6 text-base">
            ¿Tienes dudas sobre qué servicio elegir? Escríbenos y te asesoramos.
          </p>
          <Button
            variant="primary"
            size="lg"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            Reservar por WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
