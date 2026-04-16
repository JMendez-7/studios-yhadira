"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const galleryItems = [
  {
    src: "/images/lashes-1.jpg",
    alt: "Extensiones de pestañas clásicas — Studio Yhadira",
    label: "Pestañas Clásicas",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    src: "/images/makeup-1.jpg",
    alt: "Maquillaje artístico editorial — Yhadira Makeup",
    label: "Maquillaje Artístico",
    colSpan: "",
    rowSpan: "",
  },
  {
    src: "/images/lashes-2.jpg",
    alt: "Extensiones de pestañas volumen ruso — Studio Yhadira",
    label: "Volumen Ruso",
    colSpan: "",
    rowSpan: "",
  },
  {
    src: "/images/makeup-2.jpg",
    alt: "Maquillaje de fantasía con estrellas — Yhadira Makeup",
    label: "Maquillaje Fantasía",
    colSpan: "",
    rowSpan: "row-span-2",
  },
  {
    src: "/images/lashes-3.jpg",
    alt: "Extensiones de pestañas mega volumen — Studio Yhadira",
    label: "Mega Volumen",
    colSpan: "",
    rowSpan: "",
  },
  {
    src: "/images/lashes-4.jpg",
    alt: "Extensiones de pestañas con color — Studio Yhadira",
    label: "Pestañas con Color",
    colSpan: "",
    rowSpan: "",
  },
  {
    src: "/images/makeup-3.jpg",
    alt: "Maquillaje artístico con colores vibrantes — Yhadira Makeup",
    label: "Arte en tu Mirada",
    colSpan: "",
    rowSpan: "",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&fit=crop",
    alt: "Masaje con piedras calientes — Studios Yhadira",
    label: "Masajes",
    colSpan: "",
    rowSpan: "",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&fit=crop",
    alt: "Tratamiento facial profesional — Studios Yhadira",
    label: "Faciales",
    colSpan: "",
    rowSpan: "",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-[#faf8f7]/80 py-20 lg:py-28">
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
            Nuestro trabajo
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#191c1d]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Resultados que hablan
          </h2>
        </motion.div>

        {/* Grid masonry-style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease, delay: (i % 4) * 0.07 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.colSpan} ${item.rowSpan}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              {/* Sophisticated hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#b80049]/80 via-[#191c1d]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <span
                  className="text-white text-sm font-semibold"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  {item.label} →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mt-14"
        >
          <p className="text-[#546067] mb-6">
            ¿Te imaginas con un look así? Reserva tu cita ahora.
          </p>
          <Button
            variant="primary"
            size="lg"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            Quiero este look
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
