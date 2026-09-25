import Image from "next/image";
import { colors } from "@/lib/theme";

export function Hero() {
  return (
    <section className="relative overflow-hidden lg:min-h-[780px]">
      {/*
        Foto sem moldura: no mobile ocupa o topo e some no texto;
        no desktop sangra até a borda direita e se funde no fundo
        por um degradê (máscara definida em .hero-photo, globals.css).
      */}
      <div className="hero-photo relative h-[440px] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-auto lg:aspect-[4/5]">
        <Image
          src="/images/erick-hero-v2.webp"
          alt="Erick Lubawski no escritório, segurando uma caneca de café"
          fill
          priority
          sizes="(min-width: 1024px) 640px, 100vw"
          className="object-cover object-[75%_38%] lg:object-[center_62%]"
        />
        {/* brilho sutil da cor de destaque na zona de transição */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 45% 60% at 0% 60%, ${colors.accentSoft}, transparent 70%)`,
            mixBlendMode: "screen",
          }}
        />
      </div>

      <div className="relative z-10 -mt-16 grid grid-cols-1 items-center gap-12 px-6 pb-20 md:px-16 lg:mt-0 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
        <div className="flex flex-col gap-7 lg:gap-6">
          <div
            className="font-[family-name:var(--font-plex-mono)] inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px] backdrop-blur-sm"
            style={{
              borderColor: colors.accentBorder,
              color: colors.accent,
              background: "oklch(0.15 0.012 260 / 0.55)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: colors.accent }}
            />
            disponível pra novos projetos
          </div>

          <h1 className="m-0 text-[34px] leading-[1.15] font-bold tracking-tight md:text-5xl lg:text-[54px] lg:leading-[1.1]">
            Automações e IA que tiram o gargalo real do seu negócio.
          </h1>

          <p
            className="m-0 max-w-[520px] text-[17px] leading-[1.7] md:text-lg"
            style={{ color: colors.textMuted }}
          >
            Sou Erick Lubawski — construo agentes, automações e sistemas com IA.
            Se seu processo hoje é manual, lento ou depende de planilha, eu
            resolvo isso com código.
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#contato"
              className="font-[family-name:var(--font-plex-mono)] rounded-lg px-6.5 py-3.5 text-center text-[15px] font-semibold"
              style={{ background: colors.accent, color: colors.bg }}
            >
              falar sobre um projeto →
            </a>
            <a
              href="#projetos"
              className="font-[family-name:var(--font-plex-mono)] rounded-lg border px-6.5 py-3.5 text-center text-[15px]"
              style={{
                borderColor: colors.borderStrong,
                color: colors.textSoft,
                background: "oklch(0.15 0.012 260 / 0.4)",
              }}
            >
              ver projetos
            </a>
          </div>

          <div
            className="font-[family-name:var(--font-plex-mono)] max-w-[460px] pt-4 text-[13px] leading-[2]"
            style={{ borderTop: `1px solid ${colors.border}`, color: colors.textFaint }}
          >
            <div>
              <span style={{ color: colors.accent }}>$</span> stack{" "}
              <span style={{ color: colors.textMuted }}>
                n8n · Python · APIs · agentes de IA
              </span>
            </div>
            <div>
              <span style={{ color: colors.accent }}>$</span> faz_pra_cliente{" "}
              <span style={{ color: colors.textMuted }}>
                sites · apps · SaaS · automação de WhatsApp
              </span>
            </div>
            <div>
              <span style={{ color: colors.accent }}>$</span>{" "}
              <span className="cursor">_</span>
            </div>
          </div>
        </div>

        {/* coluna reservada pra foto no desktop */}
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
