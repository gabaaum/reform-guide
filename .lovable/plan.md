
O usuário quer:
1. Card 2 (Senado) não está mostrando o título — provavelmente porque o `object-cover` em altura de 180px está cortando o topo da imagem.
2. Card 3 (Testes 2026) deve ter o mesmo tamanho do Card 2.

Atualmente o grid é:
- Card 1: `md:col-span-2 md:row-span-2` (grande, ocupa 2 linhas de 180px = 360px)
- Card 2: `md:col-span-2` (1 linha de 180px)
- Card 3: sem span (1 col × 1 linha de 180px)

# Plano: Ajustar MediaGrid para mostrar manchete completa

## Mudanças em `MediaGrid.tsx`

1. **Card 3 igual ao Card 2:** mudar span do card 3 para `md:col-span-2`. Assim card 2 e card 3 dividem a linha de baixo (cada um col-span-2), espelhando largura/altura.

2. **Mostrar manchete completa:** trocar `object-cover` por `object-contain` nos cards (especialmente os menores), OU aumentar `auto-rows` para permitir que `object-cover` mostre a manchete sem cortar. Vou usar `object-contain` com fundo neutro (`bg-card`) para garantir que o título inteiro apareça em qualquer card, mantendo a proporção original do print.

3. Manter hover, bordas e sombras como estão.

## Arquivos afetados

- `src/components/landing/MediaGrid.tsx`

## Fora do escopo

- Recortar/editar as imagens originais.
