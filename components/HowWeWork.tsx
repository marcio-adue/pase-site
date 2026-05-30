"use client";

import FadeIn from "./FadeIn";

const steps = [
  {
    number: "1",
    title: "Diagnóstico organizacional",
    desc: "Análisis del estado de salud mental de la empresa y detección de riesgos psicosociales.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Intervenciones organizacionales",
    desc: "Diseño e implementación de acciones específicas: trabajo con líderes, equipos, talleres y rediseño de prácticas.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 11l-3 3-1.5-1.5" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Acompañamiento y seguimiento",
    desc: "Monitoreo y soporte estratégico para sostener mejoras en el tiempo y prevenir recaídas.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section id="como-trabajamos" className="py-24" style={{ backgroundColor: "#FEFEFE" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Right image */}
          <FadeIn direction="left">
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden aspect-[4/3]"
                style={{ backgroundColor: "#BBCBC6" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                  alt="Cómo trabajamos"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent */}
              <div
                className="absolute -top-5 -left-5 w-24 h-24 rounded-2xl opacity-40"
                style={{ backgroundColor: "#7CA18B" }}
              />
            </div>
          </FadeIn>

          {/* Left content */}
          <div>
            <FadeIn direction="right">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "#7CA18B" }}
              >
                Cómo trabajamos
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                style={{ color: "#345667" }}
              >
                Modelo modular PASE
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: "#2F2F2F" }}>
                Queremos ser tu aliado para construir una cultura laboral saludable y
                productiva. Una herramienta preventiva que ofrece una lectura estratégica
                y orienta decisiones con propósito.
              </p>
            </FadeIn>

            <div className="flex flex-col gap-1">
              {steps.map((step, i) => (
                <FadeIn key={step.number} direction="right" delay={i * 0.12}>
                  <div className="relative flex gap-5 pb-8">
                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <div
                        className="absolute left-5 top-12 bottom-0 w-px"
                        style={{ backgroundColor: "#E6E6E6" }}
                      />
                    )}
                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                      style={{ backgroundColor: "#345667", color: "#BBCBC6" }}
                    >
                      <span className="text-sm font-bold text-white">{step.number}</span>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col gap-1 pt-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span style={{ color: "#7CA18B" }}>{step.icon}</span>
                        <h3 className="font-bold text-base" style={{ color: "#345667" }}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#2F2F2F" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
