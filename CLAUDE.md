@AGENTS.md

# Como trabalhar neste projeto

Este é o site público do portfólio do Erick (@algoritmowski) — landing page pra
atrair clientes (sites, apps, automações de WhatsApp, consultoria de IA) e mostrar
projetos/trajetória. Público-alvo: gente decidindo se contrata ele.

## Regras
- Antes de implementar qualquer seção nova ou mudança de escopo, pergunte — trate
  isso como um gestor de projetos trataria: qual problema isso resolve, tem conteúdo
  real pra preencher (nunca invente trajetória, projeto ou dado que não foi confirmado).
- Não é necessário orquestrar sub-agentes aqui (landing page é simples o suficiente
  pra um único fluxo) — isso vale mais pra projetos de cliente com banco de dados/API.
- Sem CMS externo, sem serviço pago por padrão — conteúdo em Markdown/MDX no repo.
- Next.js 16 (App Router) — este projeto usa uma versão nova o suficiente pra ter
  diferenças do que está no seu treinamento; ler `node_modules/next/dist/docs/`
  antes de usar uma API que pareça familiar mas possa ter mudado (ver `AGENTS.md`).

## Preview local
Esta pasta fica FORA do projeto onde a sessão de Claude Code roda (`Algoritimo/`),
então o `.claude/launch.json` do projeto não consegue iniciar o dev server aqui
(sandbox bloqueia acessar diretório-pai). Rodar manualmente:
`npm run dev -- -p 3100` (em background) e abrir `http://localhost:3100` na
Browser pane via `preview_start` com `url` (não `name`).
