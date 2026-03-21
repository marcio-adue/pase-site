"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24" style={{ backgroundColor: "#FEFEFE" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <FadeIn direction="left">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#7CA18B" }}
            >
              Conversemos
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ color: "#345667" }}
            >
              Si tu empresa quiere comprender mejor su funcionamiento interno
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#2F2F2F" }}>
              Podemos ayudarte. Completa el formulario y nos ponemos en contacto para
              entender tu situación y contarte cómo podemos trabajar juntos.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "Email",
                  value: "contacto@pase.cl",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  label: "Teléfono",
                  value: "+56 9 XXXX XXXX",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                  label: "LinkedIn",
                  value: "PASE Salud Mental Empresarial",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#BBCBC6", color: "#345667" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#7CA18B" }}>
                      {item.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: "#2F2F2F" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="right" delay={0.1}>
            <div
              className="rounded-3xl p-8 md:p-10"
              style={{ backgroundColor: "#F5F7F6", border: "1px solid #E6E6E6" }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 text-center py-12"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#7CA18B" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "#345667" }}>
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-sm" style={{ color: "#2F2F2F" }}>
                    Nos pondremos en contacto a la brevedad.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold mb-1" style={{ color: "#345667" }}>
                    Cuéntanos sobre tu empresa
                  </h3>

                  {[
                    { name: "name", label: "Nombre", placeholder: "Tu nombre completo", type: "text" },
                    { name: "company", label: "Empresa", placeholder: "Nombre de tu empresa", type: "text" },
                    { name: "email", label: "Email corporativo", placeholder: "tu@empresa.com", type: "email" },
                  ].map((field) => (
                    <div key={field.name} className="flex flex-col gap-1.5">
                      <label
                        htmlFor={field.name}
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "#345667" }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          backgroundColor: "#FEFEFE",
                          border: "1.5px solid #E6E6E6",
                          color: "#2F2F2F",
                          fontFamily: "'Noto Serif', serif",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#7CA18B")}
                        onBlur={(e) => (e.target.style.borderColor = "#E6E6E6")}
                      />
                    </div>
                  ))}

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "#345667" }}
                    >
                      ¿Qué está pasando en tu empresa?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Cuéntanos brevemente el contexto..."
                      value={form.message}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        backgroundColor: "#FEFEFE",
                        border: "1.5px solid #E6E6E6",
                        color: "#2F2F2F",
                        fontFamily: "'Noto Serif', serif",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#7CA18B")}
                      onBlur={(e) => (e.target.style.borderColor = "#E6E6E6")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg mt-2"
                    style={{ backgroundColor: "#345667" }}
                  >
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
