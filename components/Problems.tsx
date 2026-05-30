"use client";

import FadeIn from "./FadeIn";

const problems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="9" cy="15" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Ausentismo",
    desc: "Licencias reiteradas y pérdida de foco que impactan la continuidad operacional.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Burnout y estrés crónico",
    desc: "Desgaste sostenido que deriva en ansiedad, depresión y pérdida de rendimiento.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Rotación no deseada",
    desc: "Pérdida de talento clave y costos elevados de reemplazo y reinducción.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Tensiones en equipos",
    desc: "Conflictos en liderazgos, comunicación deteriorada y bajo rendimiento colectivo.",
  },
];

export default function Problems() {
  return (
    <section
      id="problemas"
      className="py-24"
      style={{ backgroundColor: "#F5F7F6" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#7CA18B" }}
            >
              Antes de que el problema estalle
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#345667" }}
            >
              ¿Qué problemas ayudamos a reducir?
            </h2>
            <p
              className="text-base max-w-xl mx-auto leading-relaxed"
              style={{ color: "#2F2F2F" }}
            >
              La salud mental impacta directamente en el rendimiento organizacional.
              Mejoramos el buen trabajo, fortalecemos a las personas y optimizamos el retorno de la inversión en capital humano.
            </p>
          </div>
        </FadeIn>

        <div
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 -mx-6 px-6 pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0 lg:grid-cols-4"
          style={{ scrollbarWidth: "none" }}
        >
          {problems.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1} direction="up" className="snap-start w-[75vw] flex-shrink-0 sm:w-auto">
              <div
                className="rounded-2xl p-6 h-full flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border"
                style={{
                  backgroundColor: "#FEFEFE",
                  borderColor: "#E6E6E6",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#BBCBC6", color: "#345667" }}
                >
                  {p.icon}
                </div>
                <h3
                  className="text-base font-bold"
                  style={{ color: "#345667" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#2F2F2F" }}>
                  {p.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
