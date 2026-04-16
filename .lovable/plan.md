

O usuário quer duas mudanças grandes:

1. **Trocar o "P&P" da seção AboutSection** pela foto da equipe (image #2 — 3 pessoas no escritório).
2. **Reescrever toda a copy** seguindo o conteúdo enviado, que está muito mais longo e detalhado do que o atual (versão atual está bem reduzida).

Também noto que o conteúdo enviado tem uma seção nova: "Foi para resolver exatamente esse cenário..." (apresentação do webinário com botão GARANTIR MINHA VAGA) — que hoje não existe e precisa virar uma seção própria entre `ProblemSection` e `AudienceSection`.

# Plano: Trocar imagem do AboutSection + alinhar toda a copy ao briefing

## 1. Nova imagem da equipe

- Copiar `user-uploads://Gemini_Generated_Image_cv82oicv82oicv82.png` → `src/assets/equipe-porto-perottoni.png`.
- Em `AboutSection.tsx`: substituir o bloco do "P&P / Business Intelligence" pela `<img>` da equipe, mantendo `aspect-[4/5]`, `rounded-2xl`, `shadow-elegant` e `object-cover`.

## 2. Atualizar copy seção por seção

### `Hero.tsx`
- Manter título e parágrafos (já estão fiéis ao briefing).
- Apenas confirmar: "QUERO ACESSAR AGORA" + "Acesso com vagas limitadas." ✅ já está.

### `MediaGrid.tsx` (manchetes)
- Adicionar parágrafo introdutório acima do grid: "Você já deve ter visto manchetes como essas. E provavelmente sentiu aquele desconforto de quem sabe que algo grande está acontecendo, mas ainda não consegue medir o tamanho do impacto."
- Manter as 4 manchetes (já refletem os 4 links).

### `ProblemSection.tsx`
- Expandir o texto para incluir os parágrafos completos do briefing:
  - "A Reforma Tributária é o maior redesenho fiscal..."
  - "O problema é que a maioria dos profissionais contábeis está tentando acompanhar do mesmo jeito de sempre: lendo legislação, assistindo lives genéricas..."
  - "Só que dessa vez, ler a lei não basta. Porque o desafio não está em entender o texto, está em saber o que fazer com ele."
- Atualizar as 3 perguntas para casar com o briefing: "Quanto vai custar para cada perfil de empresa?", "Quais operações ficam mais caras?", "Quais clientes precisam de atenção imediata?"
- Adicionar o fechamento: "Essa insegurança paralisa — e, enquanto você espera clareza, o mercado já está se movimentando."

### Nova seção `SolutionSection.tsx` (criar)
- Inserir entre `ProblemSection` e `AudienceSection`.
- Texto: "Foi para resolver exatamente esse cenário que a Porto & Perottoni preparou o webinário 'Reforma Tributária na Prática'…" + parágrafos completos do briefing.
- CTA: botão "GARANTIR MINHA VAGA" que faz scroll para o `#hero-form`.

### `AudienceSection.tsx`
- Atualizar listas para refletir os 5 itens do briefing (hoje tem 3 em cada coluna):
  - "É para você": Contadores Simples/Presumido/Real; Gestores de escritório; Consultores tributários; Quem já leu mas falta caminho prático; Quem entende que dominar agora é vantagem competitiva.
  - "NÃO é para você": manter os 3 atuais (briefing não detalha os "não" — manter como está faz sentido editorial).

### `BenefitsSection.tsx`
- Manter (resume bem "O que você vai conquistar"). Sem mudanças.

### `AboutSection.tsx`
- Trocar imagem (item 1).
- Expandir copy seguindo briefing:
  - "A Porto & Perottoni é um escritório que integra advocacia e contabilidade tributária com um único objetivo: oferecer orientação estratégica de alto nível para questões fiscais e patrimoniais."
  - "Com anos de experiência em planejamento tributário, a equipe já conduziu inúmeros diagnósticos…"
  - "Os profissionais que passam pela orientação da Porto & Perottoni costumam dizer a mesma coisa: encontraram segurança técnica, didática e direcionamento prático."
  - "Esse webinário é uma extensão direta desse trabalho."

### `FinalCTA.tsx`
- Adicionar parágrafo intermediário: "As regras já estão mudando e os seus clientes vão precisar de respostas claras, embasadas e com direcionamento prático. Este conteúdo é gratuito, mas as vagas são limitadas."
- Manter título e botão (já corretos).
- Adicionar abaixo do form: "Inscreva-se agora e receba o link de acesso diretamente no seu e-mail." (hoje o LeadForm dark já tem "Acesso com vagas limitadas" — mantemos).

## Arquivos afetados

- `src/assets/equipe-porto-perottoni.png` (novo — copy via lov-copy)
- `src/components/landing/AboutSection.tsx` (imagem + copy)
- `src/components/landing/MediaGrid.tsx` (parágrafo intro)
- `src/components/landing/ProblemSection.tsx` (copy expandida + perguntas)
- `src/components/landing/SolutionSection.tsx` (novo)
- `src/components/landing/AudienceSection.tsx` (listas expandidas)
- `src/components/landing/FinalCTA.tsx` (parágrafo extra)
- `src/pages/Index.tsx` (incluir `SolutionSection` na ordem)

## Fora do escopo

- Mexer em `Hero`, `Header`, `BenefitsSection`, `Footer` (já alinhados ao briefing).
- Substituir as manchetes do `MediaGrid` por screenshots reais (briefing sugere "tirar prints", mas isso depende de imagens externas — manter formato textual atual, que já cita as 4 fontes).

