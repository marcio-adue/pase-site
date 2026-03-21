"use client";

import FadeIn from "./FadeIn";

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    text: "Claridad sobre su situación organizacional",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "Prevención de problemas mayores",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
      </svg>
    ),
    text: "Herramientas para la toma de decisiones informadas",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    text: "Mejora del funcionamiento y del clima laboral",
  },
];

export default function WhatCompanyGets() {
  return (
    <section className="py-24" style={{ backgroundColor: "#F5F7F6" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <FadeIn direction="left">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "#7CA18B" }}
              >
                Qué obtiene la empresa
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                style={{ color: "#345667" }}
              >
                El nuevo estándar de bienestar laboral
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: "#2F2F2F" }}>
                Mejoramos el buen trabajo, fortalecemos a las personas y optimizamos el
                retorno de la inversión en capital humano. Resultados tangibles alineados
                a los objetivos organizacionales.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <ul className="flex flex-col gap-4 mb-10">
                {benefits.map((b, i) => (
                  <FadeIn key={b.text} delay={i * 0.08} direction="left">
                    <li
                      className="flex items-center gap-4 p-4 rounded-xl border"
                      style={{ backgroundColor: "#FEFEFE", borderColor: "#E6E6E6" }}
                    >
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#BBCBC6", color: "#345667" }}
                      >
                        {b.icon}
                      </span>
                      <span className="text-sm font-medium" style={{ color: "#2F2F2F" }}>
                        {b.text}
                      </span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2}>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: "#345667" }}
              >
                Contactar
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </FadeIn>
          </div>

          {/* Right image */}
          <FadeIn direction="right" delay={0.1}>
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden aspect-[4/3]"
                style={{ backgroundColor: "#BBCBC6" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                  alt="Empresa saludable"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent shape */}
              <div
                className="absolute -bottom-5 -right-5 w-28 h-28 rounded-3xl -z-10"
                style={{ backgroundColor: "#BBCBC6" }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
