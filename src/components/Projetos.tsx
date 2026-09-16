import { colors } from "@/lib/theme";

type ProfessionalProject = {
  name: string;
  status: string;
  statusColor: string;
  statusBg: string;
  sections: { label: string; text: string }[];
  tags: string[];
};

const professionalProjects: ProfessionalProject[] = [
  {
    name: "MDengenharia",
    status: "concluído",
    statusColor: colors.accent,
    statusBg: colors.accentSoft,
    sections: [
      {
        label: "problema",
        text: "Um app mobile precisava controlar controladoras de acesso sem visão nenhuma de onde cada uma estava ou quem tinha acesso a ela.",
      },
      {
        label: "o que construí",
        text: "API pra receber as requisições do app (controle + regra de negócio) e um front-end pra localizar cada controladora: IP, prédio e pessoas cadastradas nela.",
      },
    ],
    tags: ["API", "front-end", "app mobile", "MongoDB"],
  },
  {
    name: "GeraPartner",
    status: "emprego atual",
    statusColor: colors.accent2,
    statusBg: colors.accent2Soft,
    sections: [
      {
        label: "o que faço lá",
        text: "Projetos de compras, integração de notas fiscais no SAP, automação de processos no SAP e serviços em n8n pra automação interna.",
      },
    ],
    tags: ["SAP Business One", ".NET Core", "n8n"],
  },
];

const labAgents = [
  {
    name: "Assistente Financeiro",
    desc: "Categoriza gastos e gera resumo financeiro sem trabalho manual.",
  },
  {
    name: "Agente Instagram",
    desc: "Centraliza ideias, roteiros e performance de conteúdo.",
  },
  {
    name: "Skill Builder",
    desc: "Meta-agente: estrutura e documenta skills novas antes de operar.",
  },
  {
    name: "Assistente de Marketing",
    desc: "Posicionamento, calendário e ângulo de comunicação.",
  },
];

export function Projetos() {
  return (
    <div
      id="projetos"
      className="relative px-6 py-16 md:px-16 md:py-24"
      style={{ borderTop: `1px solid ${colors.border}`, background: colors.bgAlt }}
    >
      <div className="mb-12 flex flex-col gap-2">
        <span
          className="font-[family-name:var(--font-plex-mono)] text-[13px]"
          style={{ color: colors.accent2 }}
        >
          {"// projetos"}
        </span>
        <h2 className="m-0 text-[34px] font-bold">Experiência profissional</h2>
        <p className="m-0 max-w-[640px] text-[15px]" style={{ color: colors.textDim }}>
          Projetos reais de trabalho — sistemas internos e integrações, não são
          públicos, mas mostram o problema, o raciocínio e o que foi construído.
        </p>
      </div>

      <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-2">
        {professionalProjects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col gap-3.5 rounded-xl p-7"
            style={{ background: colors.bgCard, border: `1px solid ${colors.border}` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[17px] font-semibold">{project.name}</span>
              <span
                className="font-[family-name:var(--font-plex-mono)] rounded-full px-2.5 py-1 text-[11px]"
                style={{ background: project.statusBg, color: project.statusColor }}
              >
                {project.status}
              </span>
            </div>
            {project.sections.map((section) => (
              <div key={section.label}>
                <div
                  className="font-[family-name:var(--font-plex-mono)] mb-1 text-[11px] tracking-wider uppercase"
                  style={{ color: colors.textFainter }}
                >
                  {section.label}
                </div>
                <p className="m-0 text-sm leading-relaxed" style={{ color: colors.textMuted }}>
                  {section.text}
                </p>
              </div>
            ))}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-[family-name:var(--font-plex-mono)] rounded-md px-2.5 py-1 text-xs"
                  style={{ background: colors.borderMuted, color: colors.textMuted }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8 flex flex-col gap-2">
        <span
          className="font-[family-name:var(--font-plex-mono)] text-xs"
          style={{ color: colors.textFainter }}
        >
          {"// laboratório pessoal"}
        </span>
        <h3 className="m-0 text-xl font-semibold" style={{ color: colors.textSoft }}>
          Agentes que eu mesmo construí e uso
        </h3>
        <p className="m-0 max-w-[600px] text-sm" style={{ color: colors.textFainter }}>
          Sem cliente por trás — iniciativa própria, pra automatizar minha
          rotina e aprender construindo.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {labAgents.map((agent) => (
          <div
            key={agent.name}
            className="flex flex-col gap-2 rounded-lg p-4.5"
            style={{ background: colors.bgCardMuted, border: `1px solid ${colors.borderMuted}` }}
          >
            <span className="text-sm font-semibold" style={{ color: colors.textSoft }}>
              {agent.name}
            </span>
            <p className="m-0 text-xs leading-snug" style={{ color: colors.textFaint }}>
              {agent.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
