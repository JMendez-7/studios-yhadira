import Navbar from "@/components/sections/Navbar";
import ContactoSection from "@/components/sections/ContactoSection";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export const metadata = {
  title: "Contacto | Studios Yhadira",
  description:
    "Contáctanos por WhatsApp, conócenos en Barranca, Perú. Horario de atención y redes sociales de Studios Yhadira.",
};

export default function ContactoPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-[91px]">
        <ContactoSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
