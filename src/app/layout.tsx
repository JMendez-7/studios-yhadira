import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import BackgroundBlobs from "@/components/ui/BackgroundBlobs";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studios Yhadira | Extensiones de Pestañas & Estética Avanzada",
  description:
    "Studios Yhadira — especialistas en extensiones de pestañas, maquillaje profesional, faciales y masajes. Atención personalizada con tiempo exclusivo para ti. Agenda tu cita por WhatsApp.",
  keywords:
    "extensiones de pestañas, maquillaje profesional, faciales, masajes, Studios Yhadira, estética avanzada",
  openGraph: {
    title: "Studios Yhadira | Extensiones de Pestañas & Estética Avanzada",
    description:
      "Atención personalizada con tiempo exclusivo para ti. Extensiones de pestañas, maquillaje, faciales y masajes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${notoSerif.variable} ${manrope.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <BackgroundBlobs />
        {children}
      </body>
    </html>
  );
}
