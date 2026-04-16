import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import QuickActions from "@/components/sections/QuickActions";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuickActions />
      <Gallery />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
