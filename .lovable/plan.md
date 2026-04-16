
A foto fica com borda visível porque a coluna esquerda é branca pura e a foto tem fundo bege claro do sofá. Para criar o efeito de "continuação" da referência, vou:

# Plano: Transição suave entre form e foto no Hero

## O que vou mudar em `Hero.tsx`

1. **Fundo da seção:** trocar `bg-background` (branco puro) por um tom bege/cream muito sutil que combine com o fundo da foto dos sócios — usar um custom inline com `bg-[hsl(30_25%_96%)]` (creme/off-white quente) na seção inteira.

2. **Gradiente de transição na borda da foto (desktop):** adicionar um overlay absoluto na coluna da imagem com gradiente horizontal indo da cor de fundo (à esquerda) para transparente (à direita), aplicado nos primeiros ~80-120px da foto. Isso "dissolve" a borda esquerda da imagem no fundo do form, criando a sensação de continuidade.
   ```
   <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[hsl(30_25%_96%)] to-transparent z-10" />
   ```

3. **Form com fundo translúcido:** o `LeadForm` (variant light) hoje usa `bg-card` (branco). Como está dentro de um wrapper, basta o fundo da seção mudar — o card branco do form ainda funciona como destaque, igual à referência (form branco "flutuando" sobre fundo creme).

4. **Mobile:** manter a imagem full-width no topo, mas adicionar um pequeno gradiente na base da imagem indo para o fundo creme, para suavizar a transição vertical também.

## Arquivos afetados

- `src/components/landing/Hero.tsx` — adicionar fundo creme na section + overlay gradiente sobre a foto

## Fora do escopo

- Mudar tokens globais de cor no `index.css` (a mudança é local ao Hero para não afetar outras seções)
