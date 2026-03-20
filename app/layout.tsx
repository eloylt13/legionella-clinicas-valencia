import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Control de legionella para clínicas dentales en Valencia",
  description:
    "Sitio profesional para solicitar revisión o presupuesto de control de legionella en clínicas dentales de Valencia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
