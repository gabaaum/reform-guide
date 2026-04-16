
O usuário quer trocar os 4 cards textuais do `MediaGrid` por screenshots reais das matérias (3 prints anexados) — removendo o card da Gazeta do Povo. Manter a proporção do grid atual (1 card grande + 2 menores agora).

# Plano: Substituir cards textuais por screenshots no MediaGrid

## 1. Adicionar imagens ao projeto

Copiar os 3 prints para `src/assets/`:
- `user-uploads://image-8.png` → `src/assets/midia-iva-28.png` (Agência Brasil — IVA 28,55%)
- `user-uploads://image-9.png` → `src/assets/midia-senado.png` (Senado — comércio e serviços)
- `user-uploads://image-10.png` → `src/assets/midia-testes-2026.png` (Agência Brasil — testes 2026)

## 2. Reescrever `MediaGrid.tsx`

- Importar as 3 imagens.
- Remover o array atual de 4 cards textuais (incluindo Gazeta do Povo).
- Criar grid com 3 cards-imagem mantendo a proporção/destaque atual:
  - Card grande (destaque): IVA 28,55% — `md:col-span-2 md:row-span-2`
  - Card médio: Senado — `md:col-span-2`
  - Card pequeno: Testes 2026 — sem span extra
  - Total: `md:grid-cols-4` mantém-se; remover o 4º slot.
- Cada card vira um `<article>` com `<img>` `object-cover w-full h-full`, `rounded-2xl`, `border border-border`, `shadow-card`, `overflow-hidden`, e mantém o hover `hover:-translate-y-1 hover:shadow-card`.
- Manter o `auto-rows-[180px]` para preservar a altura dos slots.
- Manter o título e o parágrafo introdutórios da seção, sem alterações.

## Arquivos afetados

- `src/assets/midia-iva-28.png` (novo)
- `src/assets/midia-senado.png` (novo)
- `src/assets/midia-testes-2026.png` (novo)
- `src/components/landing/MediaGrid.tsx` (refatorar para usar imagens)

## Fora do escopo

- Adicionar legendas/fontes sobrepostas nas imagens (os prints já trazem manchete e fonte).
- Mexer em outras seções.
