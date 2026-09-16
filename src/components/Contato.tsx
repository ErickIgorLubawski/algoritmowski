import { colors } from "@/lib/theme";

const contactLinks = [
  {
    label: "email",
    value: "ericklubawski97@gmail.com",
    href: "mailto:ericklubawski97@gmail.com",
  },
  {
    label: "instagram",
    value: "@algoritmowski",
    href: "https://www.instagram.com/algoritmowski/",
  },
  {
    label: "github",
    value: "ErickIgorLubawski",
    href: "https://github.com/ErickIgorLubawski",
  },
  {
    label: "linkedin",
    value: "erick-lubawski",
    href: "https://www.linkedin.com/in/erick-lubawski-528bab1a5/",
  },
];

export function Contato() {
  return (
    <div
      id="contato"
      className="relative px-6 py-16 md:px-16 md:py-28"
      style={{ borderTop: `1px solid ${colors.border}`, background: colors.bgAlt }}
    >
      <div className="mb-12 flex max-w-[640px] flex-col gap-4">
        <span
          className="font-[family-name:var(--font-plex-mono)] text-[13px]"
          style={{ color: colors.accent2 }}
        >
          {"// contato"}
        </span>
        <h2 className="m-0 text-[38px] font-bold">
          Vamos conversar sobre o seu projeto?
        </h2>
        <p className="m-0 text-base" style={{ color: colors.textMuted }}>
          Site, app, SaaS, automação de WhatsApp ou consultoria pra colocar IA
          no seu negócio — me chama e conta o que você precisa.
        </p>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-5 md:grid-cols-4">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex flex-col gap-2 rounded-xl p-6"
            style={{ background: colors.bgCard, border: `1px solid ${colors.border}` }}
          >
            <span
              className="font-[family-name:var(--font-plex-mono)] text-[11px] tracking-wider uppercase"
              style={{ color: colors.textFainter }}
            >
              {link.label}
            </span>
            <span className="text-sm font-medium break-words" style={{ color: colors.text }}>
              {link.value}
            </span>
          </a>
        ))}
      </div>

      <div
        className="flex items-center gap-4 rounded-xl border border-dashed px-8 py-8"
        style={{ borderColor: colors.borderDashed }}
      >
        <span
          className="font-[family-name:var(--font-plex-mono)] text-[13px]"
          style={{ color: colors.textFaint }}
        >
          vídeo de apresentação — em breve
        </span>
      </div>
    </div>
  );
}
