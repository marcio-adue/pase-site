"use client";

import FadeIn from "./FadeIn";

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: "Lectura profesional",
    desc: "Análisis profundo de la realidad específica de cada empresa. Sin soluciones genéricas.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Enfoque preventivo",
    desc: "Acciones tempranas que evitan que los problemas escalen y se conviertan en crisis.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    title: "Articulación real",
    desc: "Conexión directa entre salud mental y los objetivos de la empresa. No son mundos separados.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "A medida",
    desc: "Intervenciones diseñadas para cada cultura y momento organizacional particular.",
  },
];

export default function WhyChoose() {
  return (
    <section id="por-que-pase" className="py-24" style={{ backgroundColor: "#345667" }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#7CA18B" }}
            >
              Diferencial
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
              ¿Por qué elegir P.A.S.E?
            </h2>
            <p
              className="text-base max-w-xl mx-auto leading-relaxed"
              style={{ color: "#BBCBC6" }}
            >
              Enfoque preventivo, intervenciones a medida, integración entre salud mental
              y negocio, análisis profundo del funcionamiento organizacional.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
          {reasons.map((r, i) => (
            <FadeIn key={r.title} delay={i * 0.1} direction="up">
              <div
                className="flex flex-col gap-5 p-8 h-full transition-all duration-300 hover:brightness-110"
                style={{ backgroundColor: "#345667" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#BBCBC6" }}
                >
                  {r.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">{r.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#BBCBC6" }}>
                    {r.desc}
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <div className="w-8 h-0.5" style={{ backgroundColor: "#7CA18B" }} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
