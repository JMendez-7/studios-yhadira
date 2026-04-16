"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, Phone } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const items = [
  {
    icon: MessageCircle,
    label: "Reservar por WhatsApp",
    sublabel: "Respuesta inmediata",
    href: WHATSAPP_URL,
    isExternal: true,
  },
  {
    icon: Clock,
    label: "Horario",
    sublabel: "Lun–Dom · 9am–8pm",
    href: null,
    isExternal: false,
  },
  {
    icon: Phone,
    label: "Llámanos",
    sublabel: WHATSAPP_NUMBER,
    href: `tel:${WHATSAPP_NUMBER}`,
    isExternal: false,
  },
];

export default function QuickActions() {
  return (
    <section className="bg-[#191c1d] py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center divide-y sm:divide-y-0 sm:divide-x divide-white/10"
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-center gap-4 px-6 py-4 sm:py-3 group w-full sm:justify-center">
                <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-[#b80049] shrink-0 group-hover:bg-[#b80049]/20 transition-colors duration-300">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-semibold leading-tight group-hover:text-[#e2165f] transition-colors duration-300">
                    {item.label}
                  </span>
                  <span className="text-white/50 text-xs mt-0.5">{item.sublabel}</span>
                </div>
              </div>
            );

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="flex-1"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="block cursor-pointer"
                  >
                    {content}
                  </a>
                ) : (
                  <div>{content}</div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
