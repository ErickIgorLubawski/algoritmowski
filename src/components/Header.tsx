import { colors } from "@/lib/theme";

const navLinks = [
  { href: "#trajetoria", label: "trajetória" },
  { href: "#projetos", label: "projetos" },
  { href: "#entregues", label: "entregas" },
  { href: "#contato", label: "contato" },
];

export function Header() {
  return (
    <div
      className="relative flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-5 md:px-16 md:py-7"
      style={{ borderBottom: `1px solid ${colors.border}` }}
    >
      <div className="font-[family-name:var(--font-plex-mono)] text-base font-semibold tracking-tight md:text-lg">
        algoritmowski
        <span className="cursor" style={{ color: colors.accent }}>
          _
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-9">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-[family-name:var(--font-plex-mono)] text-sm"
            style={{ color: colors.textSoft }}
          >
            {link.label}
          </a>
        ))}
        <div className="flex items-center gap-4 md:gap-5 md:border-l md:pl-5" style={{ borderColor: colors.borderStrong }}>
          <a
            href="https://github.com/ErickIgorLubawski"
            className="font-[family-name:var(--font-plex-mono)] text-[13px]"
            style={{ color: colors.textFaint }}
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/algoritmowski/"
            className="font-[family-name:var(--font-plex-mono)] text-[13px]"
            style={{ color: colors.textFaint }}
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
