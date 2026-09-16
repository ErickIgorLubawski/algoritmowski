import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Trajetoria } from "@/components/Trajetoria";
import { Projetos } from "@/components/Projetos";
import { Entregues } from "@/components/Entregues";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";
import { colors } from "@/lib/theme";

export default function Home() {
  return (
    <div className="relative" style={{ background: colors.bg, color: colors.text }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(oklch(1 0 0 / 0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <Header />
      <Hero />
      <Trajetoria />
      <Projetos />
      <Entregues />
      <Contato />
      <Footer />
    </div>
  );
}
