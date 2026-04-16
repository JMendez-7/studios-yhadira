"use client";

import { motion } from "framer-motion";
import { Award, Sparkles, Heart } from "lucide-react";
import { DIFFERENTIATORS } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award size={28} strokeWidth={1.5} />,
  Sparkles: <Sparkles size={28} strokeWidth={1.5} />,
  Heart: <Heart size={28} strokeWidth={1.5} />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const numbers = ["01", "02", "03"];

export default function Differentiators() {
  return (
    <section
      id="nosotros"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        backgroundImage: "url('/images/lashes-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay muy sutil para que la imagen sea casi imperceptible */}
      <div className="absolute inset-0 bg-[#faf8f7]/92" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#b80049] mb-3">
            ¿Por qué elegirnos?
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#b80049] mb-4"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            La Diferencia Studios Yhadira
          </h2>
          <p className="text-[#546067] text-base sm:text-lg max-w-xl mx-auto">
            Nos especializamos en brindarte la mejor experiencia con estándares de calidad que marcan la diferencia.
          </p>
        </motion.div>

        {/* Asymmetric cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {DIFFERENTIATORS.map((item, index) => {
            const isCentral = index === 1;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`
                  relative group
                  flex flex-col items-center text-center
                  bg-white rounded-3xl
                  ${isCentral ? "p-10 lg:p-12 shadow-[0_20px_60px_rgba(184,0,73,0.12)]" : "p-8 lg:p-10 shadow-[0_12px_40px_rgba(25,28,29,0.05)]"}
                  hover:bg-[#b80049]/5
                  hover:shadow-[0_20px_60px_rgba(184,0,73,0.12)]
                  transition-all duration-300
                  overflow-hidden
                `}
                style={{
                  marginTop: isCentral ? undefined : "1.5rem",
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {/* Large decorative number */}
                <span
                  className="absolute top-4 right-6 text-[#b80049]/6 font-bold leading-none pointer-events-none select-none"
                  style={{
                    fontFamily: "var(--font-noto-serif)",
                    fontSize: "96px",
                    lineHeight: 1,
                  }}
                  aria-hidden
                >
                  {numbers[index]}
                </span>

                {/* Icon container */}
                <div className={`
                  relative z-10
                  ${isCentral ? "w-20 h-20 rounded-2xl" : "w-16 h-16 rounded-2xl"}
                  bg-[#b80049]/8
                  group-hover:bg-[#b80049]/14
                  flex items-center justify-center
                  text-[#b80049]
                  mb-6
                  transition-colors duration-300
                `}>
                  {iconMap[item.icon]}
                </div>

                <h3
                  className={`
                    relative z-10
                    ${isCentral ? "text-2xl" : "text-xl"}
                    font-semibold tracking-[-0.01em] text-[#191c1d] mb-3
                  `}
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  {item.title}
                </h3>
                <p className="relative z-10 text-[#546067] text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
