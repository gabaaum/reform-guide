
O usuário quer que o Header (logo "Porto&Perottoni" + botão "Garantir minha vaga") fique sobreposto ao gradiente do Hero, em vez de ser uma faixa branca separada acima dele.

Hoje o `Header` é `sticky top-0` com `bg-background/90 backdrop-blur` — uma faixa branca opaca que empurra o Hero para baixo. Preciso fazer com que ele fique transparente e por cima do Hero (que tem fundo creme), parecendo parte do mesmo bloco visual.

# Plano: Header sobre o gradiente do Hero

## Mudanças em `Header.tsx`

1. **Fundo transparente no topo:** quando `scrolled === false`, usar `bg-transparent` (sem backdrop-blur, sem borda). Assim o creme do Hero "vaza" por trás do logo + botão, parecendo um bloco só.
2. **Fundo sólido ao rolar:** quando `scrolled === true`, manter `bg-background/90 backdrop-blur shadow-sm border-b` para legibilidade quando o usuário descer a página.
3. **Manter `sticky top-0 z-50`** para o header continuar acessível ao rolar.

## Mudanças em `Hero.tsx`

1. **Compensar o header sobreposto:** como o header agora fica "por cima" do Hero, a section precisa começar no topo da viewport. Trocar `lg:min-h-screen` por algo que considere a altura do header (`min-h-screen` já cobre, pois o sticky não empurra o conteúdo — o header fica dentro do mesmo espaço visual creme).
2. Garantir que o conteúdo da coluna esquerda (form/texto) tenha padding-top suficiente no mobile pra não ficar atrás do logo (`pt-20` no wrapper mobile, ou ajustar via `pt-24 lg:pt-0` no container do texto).

## Arquivos afetados

- `src/components/landing/Header.tsx` — fundo transparente quando no topo
- `src/components/landing/Hero.tsx` — pequeno ajuste de padding-top para não sobrepor conteúdo no mobile

## Fora do escopo

- Mudar cores do logo ou do botão (já contrastam bem com o creme do Hero).
