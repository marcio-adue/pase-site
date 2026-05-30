"use client";

import FadeIn from "./FadeIn";

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
