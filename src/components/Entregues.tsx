import { colors } from "@/lib/theme";

export function Entregues() {
  return (
    <div
      id="entregues"
      className="relative px-6 py-16 md:px-16 md:py-24"
      style={{ borderTop: `1px solid ${colors.border}` }}
    >
      <div className="mb-10 flex flex-col gap-2">
        <span
          className="font-[family-name:var(--font-plex-mono)] text-[13px]"
          style={{ color: colors.accent }}
        >
          {"// entregas pra clientes"}
        </span>
        <h2 className="m-0 text-[34px] font-bold">Sites e apps entregues</h2>
      </div>
      <div
        className="flex flex-col items-center gap-3 rounded-xl border border-dashed px-6 py-10 text-center md:px-8 md:py-14"
        style={{ borderColor: colors.borderDashed }}
      >
        <span
          className="font-[family-name:var(--font-plex-mono)] text-sm"
          style={{ color: colors.textFaint }}
        >
          em breve
        </span>
        <p className="m-0 max-w-[480px] text-[15px]" style={{ color: colors.textMuted }}>
          Essa área vai mostrar sites, apps e automações entregues pra
          clientes reais, conforme os primeiros projetos forem fechados.
        </p>
      </div>
    </div>
  );
}
