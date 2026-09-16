import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erick Lubawski — Automações & IA",
  description:
    "Automações e IA que tiram o gargalo real do seu negócio. Portfólio de Erick Lubawski (@algoritmowski).",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-space-grotesk)]">
        {children}
      </body>
    </html>
  );
}
