import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Control de Legionella en Clínicas Dentales en Valencia | Revisión y Presupuesto",
  description:
    "Solicite revisión o presupuesto para el control de legionella en su clínica dental en Valencia. Prevención, cumplimiento del RD 487/2022 y gestión profesional.",
  verification: {
    google: "6Cr92jGfY8D6cZX4sdEC1v1vECb_mgjBy8Jd9qoUfI4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <footer style={{ borderTop: "1px solid #e5e7eb", padding: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              maxWidth: "72rem",
              margin: "0 auto",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-iamagica.png"
                alt="IAMagica"
                style={{ height: "28px", width: "auto" }}
              />
              <span style={{ fontSize: "12px", color: "#9ca3af" }}>© 2026 IAMagica</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "4px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#1B4332",
                  letterSpacing: "0.5px",
                }}
              >
                DIGITALIZA TU NEGOCIO
              </span>
              <a
                href="mailto:info@iamagica.es"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                  color: "#6b7280",
                }}
              >
                <span style={{ fontSize: "20px" }}>✉</span>
                <span>info@iamagica.es</span>
              </a>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
