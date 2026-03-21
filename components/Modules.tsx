"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const modules = [
  {
    number: "01",
    title: "Diagnóstico y devolución",
    subtitle: "Inversión en información",
    tag: "Módulo 1",
    color: "#345667",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
    description:
      "Punto de partida de todo nuestro trabajo. A través de un análisis estructurado relevamos los valores y propósitos de la organización, el estado actual de salud mental general, identificando riesgos psicosociales, tensiones internas y oportunidades de mejora.",
    outcomes: [
      "Mapa claro de riesgos y decisiones",
      "Identificación de riesgos psicosociales",
      "Análisis de tensiones internas",
      "Base para intervenciones futuras",
    ],
  },
  {
    number: "02",
    title: "Intervenciones organizacionales",
    subtitle: "Inversión en acción",
    tag: "Módulo 2",
    color: "#7CA18B",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    description:
      "Diseñamos e implementamos acciones específicas y focalizadas, alineadas con los objetivos de la empresa. Incluye trabajo directo con líderes, dinámicas grupales y talleres, y herramientas preventivas priorizando el alcance de un impacto real.",
    outcomes: [
      "Trabajo con líderes y directivos",
      "Equipos y talleres grupales",
      "Herramientas preventivas",
      "Intervenciones a medida",
    ],
  },
  {
    number: "03",
    title: "Soporte y acompañamiento",
    subtitle: "Inversión en sostenibilidad",
    tag: "Módulo 3",
    color: "#345667",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
    description:
      "Armamos un proyecto con objetivos a largo plazo: monitoreo de la evolución, prevención de recaídas y planificación del buen funcionamiento en el tiempo. Un soporte estratégico permanente en salud mental organizacional.",
    outcomes: [
      "Monitoreo de evolución continua",
      "Prevención de recaídas",
      "Planificación a largo plazo",
      "Soporte estratégico permanente",
    ],
  },
];

export default function Modules() {
  const [active, setActive] = useState(0);
  const mod = modules[active];

  return (
    <section id="modulos" className="py-24" style={{ backgroundColor: "#F5F7F6" }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#7CA18B" }}
            >
              Modelo modular
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#345667" }}
            >
              Nuestro programa
            </h2>
            <p
              className="text-base max-w-xl mx-auto leading-relaxed"
              style={{ color: "#2F2F2F" }}
            >
              Tu empresa decide cuánto invertir. Tres módulos diseñados para cuidar la
              salud mental en el trabajo — escalonados y a medida.
            </p>
          </div>
        </FadeIn>

        {/* Module tabs */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center">
            {modules.map((m, i) => (
              <button
                key={m.number}
                onClick={() => setActive(i)}
                className="flex items-center gap-3 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  backgroundColor: active === i ? "#345667" : "#FEFEFE",
                  color: active === i ? "white" : "#345667",
                  border: `2px solid ${active === i ? "#345667" : "#E6E6E6"}`,
                }}
              >
                <span
                  className="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: active === i ? "#7CA18B" : "#BBCBC6",
                    color: active === i ? "white" : "#345667",
                  }}
                >
                  {m.number}
                </span>
                {m.tag}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Module content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <div
              className="rounded-3xl overflow-hidden aspect-[4/3]"
              style={{ backgroundColor: "#BBCBC6" }}
            >
              <img
                src={mod.image}
                alt={mod.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ backgroundColor: "#BBCBC6", color: "#345667" }}
                >
                  {mod.tag}
                </span>
                <h3
                  className="text-2xl md:text-3xl font-bold mb-2 leading-tight"
                  style={{ color: "#345667" }}
                >
                  {mod.title}
                </h3>
                <p className="text-sm font-semibold italic mb-4" style={{ color: "#7CA18B" }}>
                  {mod.subtitle}
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#2F2F2F" }}>
                  {mod.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {mod.outcomes.map((o, i) => (
                  <motion.li
                    key={o}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#345667" }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="white"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-medium" style={{ color: "#2F2F2F" }}>
                      {o}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex gap-3 pt-2">
                {modules.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: active === i ? "#345667" : "#BBCBC6",
                      width: active === i ? "32px" : "12px",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <FadeIn delay={0.2}>
          <div
            className="mt-14 rounded-2xl p-6 text-center"
            style={{ backgroundColor: "#345667" }}
          >
            <p className="text-sm font-medium text-white leading-relaxed">
              Siempre con un mismo criterio:{" "}
              <span className="font-bold" style={{ color: "#BBCBC6" }}>
                claridad, prevención y toma de decisiones informadas.
              </span>{" "}
              No ofrecemos soluciones cerradas ni paquetes rígidos, sino un recorrido
              profesional, escalonado y a medida.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
