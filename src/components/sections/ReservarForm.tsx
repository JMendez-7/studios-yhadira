"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Scissors, CheckCircle, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { SERVICE_CATEGORIES } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const HORAS = [
  "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am",
  "12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm", "2:30 pm",
  "3:00 pm", "3:30 pm", "4:00 pm", "4:30 pm", "5:00 pm", "5:30 pm",
  "6:00 pm", "6:30 pm", "7:00 pm", "7:30 pm",
];

const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((cat) =>
  cat.services.map((s) => ({ label: `${cat.title} — ${s.name}`, value: s.name }))
);

type Status = "idle" | "loading" | "success" | "error";

export default function ReservarForm() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    fecha: "",
    hora: "",
    notas: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const today = new Date().toISOString().split("T")[0];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/reservar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Error");
      setStatus("success");
      setForm({ nombre: "", telefono: "", email: "", servicio: "", fecha: "", hora: "", notas: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass = `
    w-full bg-white/70 border border-[#e8ddd8] rounded-2xl px-4 py-3.5 text-[#191c1d] text-sm
    placeholder:text-[#9aabb0] focus:outline-none focus:border-[#b80049]/50 focus:bg-white
    transition-all duration-200
  `;

  return (
    <section className="min-h-screen pt-[91px] pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="text-center mb-12"
        >
          <p className="text-[#b80049] text-xs font-semibold tracking-widest uppercase mb-3">
            Reserva tu cita
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-[#191c1d] tracking-[-0.03em] leading-tight"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Te esperamos en<br />Studios Yhadira
          </h1>
          <p className="text-[#6b7280] mt-4 text-base">
            Completa el formulario y te confirmaremos tu cita por WhatsApp.
          </p>
        </motion.div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease }}
            className="bg-white/80 rounded-3xl p-12 text-center shadow-[0_8px_40px_rgba(184,0,73,0.08)]"
          >
            <CheckCircle className="text-[#b80049] mx-auto mb-4" size={48} />
            <h2
              className="text-2xl font-bold text-[#191c1d] mb-2"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              ¡Reserva recibida!
            </h2>
            <p className="text-[#6b7280] mb-6">
              Te confirmaremos tu cita por WhatsApp a la brevedad.
            </p>
            <Button variant="secondary" size="md" onClick={() => setStatus("idle")}>
              Hacer otra reserva
            </Button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white/80 rounded-3xl p-8 md:p-10 shadow-[0_8px_40px_rgba(184,0,73,0.08)] flex flex-col gap-5"
          >
            {/* Nombre y Teléfono */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#191c1d] flex items-center gap-1.5">
                  <User size={13} className="text-[#b80049]" /> Nombre completo *
                </label>
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#191c1d] flex items-center gap-1.5">
                  <Phone size={13} className="text-[#b80049]" /> WhatsApp *
                </label>
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  required
                  placeholder="+51 999 999 999"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#191c1d]">Email (opcional)</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={inputClass}
              />
            </div>

            {/* Servicio */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#191c1d] flex items-center gap-1.5">
                <Scissors size={13} className="text-[#b80049]" /> Servicio *
              </label>
              <select
                name="servicio"
                value={form.servicio}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="">Selecciona un servicio</option>
                {SERVICE_CATEGORIES.map((cat) => (
                  <optgroup key={cat.id} label={cat.title}>
                    {cat.services.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name} — S/ {s.price}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Fecha y Hora */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#191c1d] flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#b80049]" /> Fecha *
                </label>
                <input
                  name="fecha"
                  type="date"
                  value={form.fecha}
                  onChange={handleChange}
                  required
                  min={today}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#191c1d] flex items-center gap-1.5">
                  <Clock size={13} className="text-[#b80049]" /> Hora *
                </label>
                <select
                  name="hora"
                  value={form.hora}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Selecciona una hora</option>
                  {HORAS.map((h) => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Notas */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#191c1d]">Notas adicionales</label>
              <textarea
                name="notas"
                value={form.notas}
                onChange={handleChange}
                placeholder="¿Alguna indicación especial?"
                rows={3}
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 rounded-xl px-4 py-3">
                <AlertCircle size={16} />
                Hubo un error al enviar. Inténtalo de nuevo.
              </div>
            )}

            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center mt-1"
              onClick={() => {}}
            >
              {status === "loading" ? "Enviando..." : "Confirmar reserva"}
            </Button>
          </motion.form>
        )}
      </div>
    </section>
  );
}

// suppress unused import
void ALL_SERVICES;
