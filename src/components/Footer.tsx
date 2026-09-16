import { colors } from "@/lib/theme";

export function Footer() {
  return (
    <div
      className="font-[family-name:var(--font-plex-mono)] flex flex-wrap justify-between gap-2 px-6 py-7 text-xs md:px-16"
      style={{ borderTop: `1px solid ${colors.border}`, color: colors.textFaintest }}
    >
      <span>© algoritmowski</span>
      <span>construído com Next.js · deploy Vercel</span>
    </div>
  );
}
