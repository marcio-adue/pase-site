"use client";

import FadeIn from "./FadeIn";

function SelloBadge({ level, stars }: { level: string; stars: number }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
      style={{ backgroundColor: "rgba(254,254,254,0.15)", color: "white" }}
    >
      <span className="font-medium">{level}</span>
      <span>{"★".repeat(stars)}</span>
    </div>
  );
}

export default function SelloSection() {
  const benefits = [
    "Mejora del clima laboral",
    "Prevención del burnout",
    "Cultura organizacional saludable",
    "Reconocimiento institucional",
  ];

  return (
    <section id="sello" className="py-20" style={{ backgroundColor: "#FEFEFE" }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div
            className="rounded-3xl overflow-hidden grid md:grid-cols-2 gap-0 shadow-xl"
          >
            {/* Left: Badge visual */}
            <div
              className="flex flex-col items-center justify-center p-12 gap-8"
              style={{ backgroundColor: "#345667" }}
            >
              {/* Badge */}
              <FadeIn delay={0.2}>
                <div className="flex flex-col items-center gap-4">
                  <div
                    className="w-36 h-36 rounded-full border-4 flex flex-col items-center justify-center gap-1"
                    style={{ borderColor: "#7CA18B", backgroundColor: "rgba(255,255,255,0.08)" }}
                  >
                    <svg width="44" height="36" viewBox="0 0 100 80" fill="none">
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
                    <p className="text-white text-xs font-bold tracking-widest">PASE</p>
                  </div>
                  <p className="text-white font-semibold text-lg text-center">
                    Sello de Salud Mental
                  </p>
                  <div className="flex flex-col gap-2 w-full max-w-[220px]">
                    <SelloBadge level="Nivel Inicial" stars={3} />
                    <SelloBadge level="Nivel Avanzado" stars={2} />
                    <SelloBadge level="Nivel Consolidado" stars={1} />
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Content */}
            <div
              className="flex flex-col justify-center p-10 md:p-12"
              style={{ backgroundColor: "#BBCBC6" }}
            >
              <FadeIn delay={0.1} direction="left">
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#345667" }}
                >
                  Certificación
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                  style={{ color: "#345667" }}
                >
                  Sello de Salud Mental PASE
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: "#2F2F2F" }}>
                  Las empresas que implementan PASE obtienen un sello que certifica su
                  compromiso activo con el bienestar psicológico de su equipo. Una evaluación
                  anual mide sus progresos y renueva el nivel de certificación.
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3">
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
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-sm font-medium" style={{ color: "#2F2F2F" }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:shadow-md w-fit"
                  style={{ backgroundColor: "#345667" }}
                >
                  Conocer el sello
                </a>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
