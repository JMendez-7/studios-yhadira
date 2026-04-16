import Navbar from "@/components/sections/Navbar";
import Differentiators from "@/components/sections/Differentiators";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import NosotrosHero from "@/components/sections/NosotrosHero";

export const metadata = {
  title: "Nosotros | Studios Yhadira",
  description:
    "Conoce a Studios Yhadira — especialistas en estética avanzada en Barranca, Perú. Nuestra misión, valores y lo que nos diferencia.",
};

export default function NosotrosPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-[91px]">
        <NosotrosHero />
        <Differentiators />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
