import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PASE — Salud Mental Empresarial",
  description:
    "Programa de Apoyo en Salud Mental Empresarial. Unimos la mirada clínica con la organizacional para ayudar a las empresas a prevenir el burnout, ausentismo y rotación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
