import Navbar from "@/components/sections/Navbar";
import Services from "@/components/sections/Services";
import InfoAccordion from "@/components/sections/InfoAccordion";
import Policies from "@/components/sections/Policies";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export const metadata = {
  title: "Servicios | Studios Yhadira",
  description:
    "Extensiones de pestañas, maquillaje profesional, masajes y más. Conoce todos nuestros servicios con precios en soles.",
};

export default function ServiciosPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-[91px]">
        <Services />
        <InfoAccordion />
        <Policies />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
