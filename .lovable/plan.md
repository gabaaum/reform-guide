
The user wants the partners' photo to fill the screen like the reference (Saúde Pelve style) — full-bleed hero with the image on the right occupying the full height of the viewport, and the form/text on the left also filling the viewport height.

Currently the Hero has `pt-12 pb-20` padding and uses `container-tight` which constrains width and adds vertical padding. The image just sits inside a column at natural size.

# Plano: Hero full-screen com foto ocupando altura total

## O que vou mudar em `Hero.tsx`

1. **Section full-height:** trocar padding atual por `min-h-screen` e remover `container-tight` do grid externo, usando grid de 2 colunas que ocupa 100% da largura no desktop (`lg:grid-cols-2`).

2. **Coluna esquerda (texto + form):**
   - Conteúdo dentro de um wrapper com padding lateral generoso (`px-6 lg:px-16 xl:px-24`) e `max-w-xl` para legibilidade.
   - Centralizado verticalmente (`flex flex-col justify-center`).

3. **Coluna direita (foto):**
   - Imagem com `h-full w-full object-cover` para preencher toda a coluna até as bordas da tela.
   - Sem `rounded-2xl` nem `shadow-elegant` (full-bleed, igual referência).
   - Esconde no mobile (`hidden lg:block`) — no mobile a imagem aparece acima do form como hoje, mas com `h-[60vh] object-cover` para também ocupar bem a tela.

4. **Mobile:** seção continua empilhada — imagem em destaque no topo (altura 50–60vh, full width, sem cantos arredondados) e texto+form abaixo com padding normal.

## Arquivo afetado

- `src/components/landing/Hero.tsx`

## Fora do escopo

- Mexer em outras seções (HeroBanner, MediaGrid, etc).
