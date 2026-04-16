"use client";

import { motion } from "framer-motion";
import { CreditCard, Clock } from "lucide-react";
import { POLICIES } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const iconMap: Record<string, React.ReactNode> = {
  CreditCard: <CreditCard size={24} strokeWidth={1.5} />,
  Clock: <Clock size={24} strokeWidth={1.5} />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

export default function Policies() {
  return (
    <section id="politicas" className="bg-[#f8f9fa]/80 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#b80049] mb-3">
            Información importante
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#b80049] mb-4"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Nuestras Políticas
          </h2>
          <p className="text-[#546067] text-base sm:text-lg max-w-lg mx-auto">
            Para garantizar la mejor experiencia para todos nuestros clientes, contamos con las siguientes políticas.
          </p>
        </motion.div>

        {/* Policy cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {POLICIES.map((policy) => (
            <motion.div
              key={policy.id}
              variants={cardVariants}
              className="
                bg-white rounded-3xl p-8
                shadow-[0_12px_40px_rgba(25,28,29,0.05)]
                hover:shadow-[0_16px_48px_rgba(25,28,29,0.09)]
                transition-shadow duration-300
                flex flex-col gap-5
              "
            >
              {/* Icon */}
              <div className="
                w-14 h-14 rounded-xl
                bg-[#b80049]/8
                flex items-center justify-center
                text-[#b80049]
              ">
                {iconMap[policy.icon]}
              </div>

              <div>
                <h3
                  className="text-lg font-semibold text-[#191c1d] mb-2 tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  {policy.title}
                </h3>
                <p className="text-[#546067] text-sm sm:text-base leading-relaxed">
                  {policy.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="text-center text-[#546067] text-sm mt-10"
        >
          ¿Tienes alguna pregunta sobre nuestras políticas?{" "}
          <a
            href="/contacto"
            className="text-[#b80049] font-medium hover:underline"
          >
            Contáctanos directamente.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
