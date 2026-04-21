"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#c9956c]/60 via-[#b80049] to-[#c9956c]/60" />

      {/* Main navbar */}
      <div
        className={`
          bg-[#faf8f7]/92 backdrop-blur-md
          transition-all duration-300
          ${scrolled ? "shadow-[0_4px_32px_rgba(25,28,29,0.10)]" : ""}
        `}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-22 flex items-center justify-between gap-8"
          style={{ height: "88px" }}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Studios Yhadira"
              width={260}
              height={80}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`
                      relative px-4 py-2 rounded-full text-sm font-semibold
                      transition-all duration-200
                      ${isActive
                        ? "text-[#b80049] bg-[#b80049]/8"
                        : "text-[#546067] hover:text-[#191c1d] hover:bg-[#191c1d]/5"
                      }
                    `}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-full bg-[#b80049]/8 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Divider */}
            <div className="w-px h-6 bg-[#e0d8d4]" />
            <Link
              href="/reservar"
              className="
                inline-flex items-center gap-2
                px-5 py-2.5 rounded-full text-sm font-semibold text-white
                bg-gradient-to-r from-[#b80049] to-[#e2165f]
                shadow-[0_4px_16px_rgba(184,0,73,0.28)]
                hover:opacity-90 hover:shadow-[0_6px_24px_rgba(184,0,73,0.38)]
                transition-all duration-200
              "
            >
              <Calendar size={15} />
              Reservar
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl text-[#191c1d] hover:bg-[#b80049]/8 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Bottom separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#b80049]/20 to-transparent" />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#faf8f7]/98 backdrop-blur-md border-b border-[#e0d8d4]/60"
          >
            <div className="px-6 pt-3 pb-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      px-4 py-3 rounded-xl text-base font-semibold transition-colors duration-200
                      ${isActive
                        ? "text-[#b80049] bg-[#b80049]/8"
                        : "text-[#191c1d] hover:bg-[#191c1d]/5"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-[#e0d8d4]/60">
                <Link
                  href="/reservar"
                  onClick={() => setMobileOpen(false)}
                  className="
                    inline-flex items-center gap-2
                    px-6 py-3 rounded-full text-sm font-semibold text-white
                    bg-gradient-to-r from-[#b80049] to-[#e2165f]
                    shadow-[0_4px_16px_rgba(184,0,73,0.28)]
                  "
                >
                  <Calendar size={15} />
                  Reservar Cita
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
