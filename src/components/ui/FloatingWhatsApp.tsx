"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 8, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#191c1d] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg whitespace-nowrap"
          >
            Reservar cita
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button with pulse */}
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#b80049]/30" />

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reservar cita por WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-[0_8px_32px_rgba(184,0,73,0.40)] cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #b80049, #e2165f)",
          }}
        >
          <MessageCircle size={26} strokeWidth={2} />
        </motion.a>
      </div>
    </div>
  );
}
