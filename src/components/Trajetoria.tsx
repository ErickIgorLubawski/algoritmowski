import { colors } from "@/lib/theme";

type TimelineEntry = {
  year: string;
  title: string;
  detail: string;
};

const timeline: TimelineEntry[] = [
  {
    year: "2019–21",
    title: "Gestão da Tecnologia da Informação",
    detail: "FAEC — Faculdade Educacional de Colombo",
  },
  {
    year: "2020–22",
    title: "Cursos de programação (Alura)",
    detail:
      "estrutura de dados com Java, Node.js, JavaScript, HTML/CSS, .NET C#, TypeScript, SQL, MongoDB",
  },
  {
    year: "ago/21",
    title: "GeraPartner — emprego atual",
    detail:
      "compras, integração de notas fiscais no SAP, automação no SAP, automações internas em n8n",
  },
  {
    year: "2025",
    title: "MDengenharia (freelance, jan–jul)",
    detail:
      "API pra app mobile (controle + regra de negócio) e front-end pra localizar controladoras — em paralelo à GeraPartner",
  },
  {
    year: "2025",
    title: "Certificação em SAP Business One",
    detail: "via RAMODay — pra consolidar e trazer melhorias pra GeraPartner",
  },
  {
    year: "hoje",
    title: "Backend, automação e integração de APIs",
    detail:
      "automação de relatórios, análise de dados, otimização de processos internos",
  },
  {
    year: "hoje",
    title: "Agentes próprios em produção + conteúdo sobre IA no Instagram",
    detail: "@algoritmowski — automações, IA e negócios",
  },
];

export function Trajetoria() {
  return (
    <div
      id="trajetoria"
      className="relative px-6 py-16 md:px-16 md:py-24"
      style={{ borderTop: `1px solid ${colors.border}` }}
    >
      <div className="mb-14 flex flex-col gap-2">
        <span
          className="font-[family-name:var(--font-plex-mono)] text-[13px]"
          style={{ color: colors.accent }}
        >
          {"// trajetória"}
        </span>
        <h2 className="m-0 text-[34px] font-bold">
          De onde eu vim até o que eu construo hoje
        </h2>
        <span
          className="font-[family-name:var(--font-plex-mono)] text-xs"
          style={{ color: colors.textFainter }}
        >
          FAEC → GeraPartner → MDengenharia (freelance em paralelo) → hoje
        </span>
      </div>

      <div className="flex max-w-[760px] flex-col">
        {timeline.map((entry, i) => {
          const isLast = i === timeline.length - 1;
          const delay = `${(i * 0.12).toFixed(2)}s`;
          const lineDelay = `${(i * 0.12 + 0.1).toFixed(2)}s`;
          return (
            <div
              key={`${entry.year}-${entry.title}`}
              className="timeline-item flex gap-6"
              style={{ animationDelay: delay }}
            >
              <div className="flex w-[110px] flex-shrink-0 justify-end">
                <span
                  className="font-[family-name:var(--font-plex-mono)] text-[13px] font-semibold"
                  style={{ color: colors.accent }}
                >
                  {entry.year}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span
                  className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                  style={{ background: colors.accent }}
                />
                {!isLast && (
                  <span
                    className="timeline-line mt-1 w-px flex-1"
                    style={{ background: colors.borderStrong, animationDelay: lineDelay }}
                  />
                )}
              </div>
              <div className={isLast ? "" : "pb-9"}>
                <div className="text-base font-semibold">{entry.title}</div>
                <div className="mt-1 text-sm" style={{ color: colors.textDim }}>
                  {entry.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
