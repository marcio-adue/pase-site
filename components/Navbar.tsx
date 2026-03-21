"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PaseLogo from "./PaseLogo";

const navLinks = [
  { label: "Qué hacemos", href: "#que-hacemos" },
  { label: "Módulos", href: "#modulos" },
  { label: "Por qué PASE", href: "#por-que-pase" },
  { label: "Sello PASE", href: "#sello" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(254,254,254,0.97)" : "transparent",
        boxShadow: scrolled ? "0 1px 24px 0 rgba(52,86,103,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#inicio">
          <PaseLogo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "#345667" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#7CA18B")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#345667")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md"
            style={{ backgroundColor: "#345667" }}
          >
            Conversemos
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "#345667",
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "#345667",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "#345667",
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 right-0 flex flex-col gap-0"
            style={{ backgroundColor: "#FEFEFE", borderTop: "1px solid #E6E6E6" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-6 py-4 text-base font-medium border-b"
                style={{ color: "#345667", borderColor: "#E6E6E6" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 py-4">
              <a
                href="#contacto"
                className="block text-center px-5 py-3 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: "#345667" }}
                onClick={() => setMenuOpen(false)}
              >
                Conversemos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
