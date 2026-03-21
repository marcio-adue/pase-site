"use client";

import FadeIn from "./FadeIn";

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Prevención",
    desc: "Detectamos factores de riesgo y analizamos la salud mental de toda la empresa antes de que escalen.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8l4 4-4 4" />
        <path d="M8 12h8" />
      </svg>
    ),
    title: "Enfoque estratégico",
    desc: "Salud mental como inversión en sostenibilidad, no como gasto. Resultados medibles para la empresa.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "Visión integral",
    desc: "Alineamos el enfoque a los valores y metas organizacionales. Comprendemos la cultura para intervenir con propósito.",
  },
];

const outcomes = [
  "Comprender qué está ocurriendo realmente",
  "Identificar riesgos actuales y futuros",
  "Tomar decisiones informadas",
  "Diseñar intervenciones alineadas",
];

export default function WhatWeDo() {
  return (
    <section id="que-hacemos" className="py-24" style={{ backgroundColor: "#FEFEFE" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <FadeIn direction="left">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "#7CA18B" }}
              >
                Qué hacemos
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                style={{ color: "#345667" }}
              >
                Servicio profesional de salud mental organizacional
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#2F2F2F" }}>
                Ofrecemos servicios de salud mental organizacional con enfoque preventivo,
                orientados a identificar y abordar factores que generan problemas en el
                desempeño y bienestar de las personas.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div className="flex flex-col gap-4">
                {pillars.map((p) => (
                  <div
                    key={p.title}
                    className="flex gap-4 p-5 rounded-2xl border transition-all duration-200 hover:shadow-sm"
                    style={{ backgroundColor: "#F5F7F6", borderColor: "#E6E6E6" }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#BBCBC6", color: "#345667" }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <h3
                        className="font-bold text-base mb-1"
                        style={{ color: "#345667" }}
                      >
                        {p.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#2F2F2F" }}>
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right */}
          <FadeIn direction="right" delay={0.15}>
            <div className="relative">
              <div
                className="relative rounded-3xl overflow-hidden aspect-[4/5]"
                style={{ backgroundColor: "#BBCBC6" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=80"
                  alt="Profesionales en reunión"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating card */}
              <div
                className="absolute -bottom-6 -left-6 rounded-2xl p-5 shadow-xl max-w-xs"
                style={{ backgroundColor: "#345667" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ color: "#BBCBC6" }}
                >
                  Resultados concretos
                </p>
                <ul className="flex flex-col gap-2">
                  {outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "#7CA18B" }}
                      >
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path
                            d="M1 3L3 5L7 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <span className="text-xs text-white leading-relaxed">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
