"use client";

import PaseLogo from "./PaseLogo";

const footerLinks = {
  Servicios: [
    { label: "Diagnóstico organizacional", href: "#modulos" },
    { label: "Intervenciones", href: "#modulos" },
    { label: "Acompañamiento", href: "#modulos" },
    { label: "Sello PASE", href: "#sello" },
  ],
  Empresa: [
    { label: "Qué hacemos", href: "#que-hacemos" },
    { label: "Por qué PASE", href: "#por-que-pase" },
    { label: "Cómo trabajamos", href: "#como-trabajamos" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2F2F2F" }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <PaseLogo
              textColor="#FEFEFE"
              brainLeftColor="#7CA18B"
              brainRightColor="#BBCBC6"
              subtitleColor="#7CA18B"
            />
            <p
              className="mt-4 text-sm leading-relaxed max-w-xs"
              style={{ color: "#BBCBC6" }}
            >
              Programa de Apoyo en Salud Mental Empresarial. Unimos la mirada clínica
              con la organizacional para construir culturas laborales saludables.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                {
                  label: "LinkedIn",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-80"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#BBCBC6" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: "#7CA18B" }}
              >
                {section}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#BBCBC6" }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#FEFEFE")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "#BBCBC6")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "#7CA18B" }}
        >
          <p>© {new Date().getFullYear()} PASE — Salud Mental Empresarial. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
