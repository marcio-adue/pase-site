"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ backgroundColor: "#FEFEFE" }}
    >
      {/* Background decorative shape */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 40%, #BBCBC6 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Left: Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#7CA18B" }}
          >
            Programa de Apoyo en Salud Mental Empresarial
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: "#345667" }}
          >
            Salud mental para empresas que quieren{" "}
            <span style={{ color: "#7CA18B" }}>trabajar mejor</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg leading-relaxed mb-8 max-w-md"
            style={{ color: "#2F2F2F" }}
          >
            Unimos la mirada clínica con la organizacional para detectar riesgos
            psicosociales, prevenir el burnout y fortalecer equipos de trabajo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#sello"
              className="px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "#345667" }}
            >
              Ver Sello de Salud Mental
            </a>
            <a
              href="#modulos"
              className="px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-md border-2"
              style={{
                color: "#345667",
                borderColor: "#345667",
                backgroundColor: "transparent",
              }}
            >
              Explorar módulos
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-8 mt-12 pt-8 border-t"
            style={{ borderColor: "#E6E6E6" }}
          >
            {[
              { value: "3", label: "Módulos de intervención" },
              { value: "100%", label: "A medida de tu empresa" },
              { value: "B2B", label: "Enfoque organizacional" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold" style={{ color: "#345667" }}>
                  {stat.value}
                </p>
                <p className="text-xs mt-1" style={{ color: "#7CA18B" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Illustration placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Main illustration card */}
          <div
            className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: "#BBCBC6" }}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
              alt="Equipo trabajando"
              className="w-full h-full object-cover opacity-80"
            />
            {/* Overlay card */}
            <div
              className="absolute bottom-6 left-6 right-6 rounded-2xl p-4 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(254,254,254,0.9)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#7CA18B" }}>
                Enfoque preventivo
              </p>
              <p className="text-sm font-medium" style={{ color: "#345667" }}>
                Detectamos riesgos antes de que se conviertan en problemas
              </p>
            </div>
          </div>

          {/* Floating accent */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: "#345667" }}
          >
            <svg width="36" height="36" viewBox="0 0 100 80" fill="none">
              <path
                d="M48 40 C48 40 46 10 28 10 C14 10 4 22 4 34 C4 42 8 48 14 52 C10 54 8 58 8 62 C8 70 16 76 26 76 C34 76 40 72 44 66 C46 62 48 56 48 40Z"
                stroke="#BBCBC6"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M52 40 C52 40 54 10 72 10 C86 10 96 22 96 34 C96 42 92 48 86 52 C90 54 92 58 92 62 C92 70 84 76 74 76 C66 76 60 72 56 66 C54 62 52 56 52 40Z"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-xs tracking-widest uppercase" style={{ color: "#7CA18B" }}>
          Descubrir
        </p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8"
          style={{ backgroundColor: "#7CA18B" }}
        />
      </motion.div>
    </section>
  );
}
