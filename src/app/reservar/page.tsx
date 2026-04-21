import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import ReservarForm from "@/components/sections/ReservarForm";

export const metadata: Metadata = {
  title: "Reservar cita | Studios Yhadira",
  description: "Reserva tu cita en Studios Yhadira — extensiones de pestañas, maquillaje y más en Barranca, Perú.",
};

export default function ReservarPage() {
  return (
    <main>
      <Navbar />
      <ReservarForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
