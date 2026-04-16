"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const categoryLabels: Record<string, string> = {
  pre: "Antes de tu cita",
  post: "Después de tu cita",
};

const categoryColors: Record<string, string> = {
  pre: "bg-[#b80049]/8 text-[#b80049]",
  post: "bg-[#546067]/10 text-[#546067]",
};

export default function InfoAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="cuidados" className="bg-[#f5f0ee]/80 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#b80049] mb-3">
            Guía de cuidados
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#b80049] mb-4"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Antes y Después de tu Cita
          </h2>
          <p className="text-[#546067] text-base sm:text-lg">
            Sigue estas recomendaciones para obtener los mejores resultados y prolongar la duración de tu tratamiento.
          </p>
        </motion.div>

        {/* Accordion list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col gap-3"
        >
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: index * 0.06 }}
              className={`
                relative bg-white rounded-2xl overflow-hidden
                shadow-[0_4px_20px_rgba(25,28,29,0.04)]
                transition-all duration-300
                ${openId === item.id
                  ? "shadow-[0_8px_32px_rgba(25,28,29,0.08)] bg-[#b80049]/5"
                  : "hover:shadow-[0_8px_28px_rgba(25,28,29,0.07)]"
                }
              `}
              style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
            >
              {/* Left accent border on hover */}
              <div
                className={`
                  absolute left-0 top-0 bottom-0 w-[3px] bg-[#b80049]
                  transition-opacity duration-300
                  ${openId === item.id ? "opacity-100" : "opacity-0"}
                `}
              />

              {/* Accordion trigger */}
              <button
                onClick={() => toggle(item.id)}
                className="
                  w-full flex items-center justify-between
                  px-6 py-5 text-left
                  cursor-pointer group
                "
                aria-expanded={openId === item.id}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`
                      text-xs font-semibold px-2.5 py-1 rounded-full shrink-0
                      ${categoryColors[item.category]}
                    `}
                  >
                    {categoryLabels[item.category]}
                  </span>
                  <span className="font-semibold text-[#191c1d] text-sm sm:text-base group-hover:text-[#b80049] transition-colors duration-200">
                    {item.question}
                  </span>
                </div>

                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="text-[#546067] shrink-0 ml-4"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              {/* Accordion content */}
              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-[#546067] text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
