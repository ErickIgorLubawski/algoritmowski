import Image from "next/image";
import { colors } from "@/lib/theme";

export function Hero() {
  return (
    <div className="relative grid grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-16 md:py-28">
      <div className="flex flex-col gap-6">
        <div
          className="font-[family-name:var(--font-plex-mono)] inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px]"
          style={{ borderColor: colors.accentBorder, color: colors.accent }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: colors.accent }}
          />
          disponível pra novos projetos
        </div>

        <h1 className="m-0 text-4xl leading-[1.1] font-bold tracking-tight md:text-[54px]">
          Automações e IA que tiram o gargalo real do seu negócio.
        </h1>

        <p
          className="m-0 max-w-[520px] text-lg leading-relaxed"
          style={{ color: colors.textMuted }}
        >
          Sou Erick Lubawski — construo agentes, automações e sistemas com IA.
          Se seu processo hoje é manual, lento ou depende de planilha, eu
          resolvo isso com código.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#contato"
            className="font-[family-name:var(--font-plex-mono)] rounded-lg px-6.5 py-3.5 text-[15px] font-semibold"
            style={{ background: colors.accent, color: colors.bg }}
          >
            falar sobre um projeto →
          </a>
          <a
            href="#projetos"
            className="font-[family-name:var(--font-plex-mono)] rounded-lg border px-6.5 py-3.5 text-[15px]"
            style={{ borderColor: colors.borderStrong, color: colors.textSoft }}
          >
            ver projetos
          </a>
        </div>

        <div
          className="font-[family-name:var(--font-plex-mono)] max-w-[460px] pt-3 text-[13px] leading-[1.9]"
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

      <div className="flex flex-col gap-3">
        <div
          className="overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_oklch(0_0_0_/_0.6)]"
          style={{ aspectRatio: "4 / 5", border: `1px solid ${colors.borderStrong}` }}
        >
          <Image
            src="/images/erick-hero.jpg"
            alt="Erick Lubawski"
            width={1000}
            height={1778}
            priority
            className="h-full w-full object-cover object-[center_20%]"
          />
        </div>
        <span
          className="font-[family-name:var(--font-plex-mono)] text-center text-xs"
          style={{ color: colors.textFaintest }}
        >
          Erick Lubawski — automações &amp; IA
        </span>
      </div>
    </div>
  );
}
