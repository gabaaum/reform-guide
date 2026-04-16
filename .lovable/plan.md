

# Landing Page: Webinário Reforma Tributária — Porto & Perottoni

Vou construir uma landing page de alta conversão para captura de leads do webinário gratuito sobre Reforma Tributária, seguindo o design system especificado (inspiração Saúde Pelve + identidade Porto & Perottoni).

## Design System

- **Cores:** Turquesa `#31b9bd` (primária/CTAs), Grafite `#2d2d2d` (texto/secundária), Branco e Cinza ultra-claro `#F9F9F9` (alternância de fundos)
- **Tipografia:** Serif editorial (Playfair Display) para títulos + Inter sans-serif para corpo
- **Estilo:** Clean, alto contraste, profissional, com bastante respiro entre seções

## Estrutura da Página (single-page, scroll vertical)

1. **Header sticky** — Logo "Porto & Perottoni" à esquerda + botão discreto "Garantir minha vaga" à direita (rola até o formulário)

2. **Hero (fundo branco)** — Badge turquesa "EVENTO ONLINE E GRATUITO", título serif grande, subtítulo em negrito, parágrafo de apoio, e formulário de captura (Nome, E-mail, WhatsApp) com CTA turquesa "QUERO ACESSAR AGORA" + trust badge de cadeado

3. **Bento Grid de Mídia (fundo #F9F9F9)** — Título "O que a mídia está alertando", 4 cards com manchetes (Agência Brasil, Senado, EBC, Gazeta do Povo) em layout assimétrico tipo bento

4. **O Problema / A Transição (fundo branco)** — Texto editorial forte sobre os pain points, com 3 perguntas-chave em destaque

5. **Para quem é / Não é (fundo #F9F9F9)** — Duas colunas comparativas com ✅ verde-turquesa e ❌ cinza

6. **O que você vai conquistar (fundo branco)** — Checklist com 4 itens, ícones turquesa e títulos em destaque

7. **Sobre a Porto & Perottoni (fundo #F9F9F9)** — Layout 2 colunas: imagem (placeholder do escritório/sócios) à esquerda, texto institucional à direita

8. **CTA Final (fundo turquesa #31b9bd)** — Headline impactante em branco + formulário final de captura + footer com copyright

## Comportamento e Interações

- Header fica sticky ao rolar com leve sombra
- Botão do header e CTAs principais fazem smooth-scroll até o formulário do hero
- Formulários validam campos (obrigatórios + formato e-mail) e disparam toast de sucesso ao enviar (mock — sem backend nesta versão)
- Animações sutis de fade-in nas seções ao entrar em viewport
- Totalmente responsivo (mobile-first): grid colapsa para 1 coluna, tipografia escala

## Arquivos a criar/modificar

- `tailwind.config.ts` — adicionar fontes serif/sans e tokens
- `src/index.css` — atualizar variáveis HSL (primary turquesa, etc.) + import Google Fonts
- `src/pages/Index.tsx` — composição da landing
- `src/components/landing/` — componentes: `Header`, `Hero`, `LeadForm`, `MediaGrid`, `ProblemSection`, `AudienceSection`, `BenefitsSection`, `AboutSection`, `FinalCTA`, `Footer`
- `index.html` — atualizar `<title>` e meta description para SEO

## Fora do escopo desta versão

- Integração real de backend para os formulários (leads ficam apenas em toast/console). Pode ser adicionado depois com Lovable Cloud + tabela de leads + edge function de envio.

