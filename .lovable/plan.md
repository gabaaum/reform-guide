
O usuário quer que eu coloque a foto dos sócios da Porto & Perottoni (gerada pelo Gemini) na seção Hero da landing page, no estilo da referência Saúde Pelve: foto à direita, formulário e texto à esquerda.

Atualmente o Hero tem o formulário centralizado. Preciso reestruturar para um layout 2 colunas (texto+form à esquerda, imagem à direita) no desktop, empilhando no mobile.

# Plano: Foto dos sócios no Hero (estilo Saúde Pelve)

## O que vou fazer

1. **Salvar a imagem** dos sócios em `src/assets/socios-porto-perottoni.jpg` (copiando do upload).

2. **Reestruturar o `Hero.tsx`** para layout 2 colunas no desktop:
   - **Coluna esquerda:** badge turquesa "EVENTO ONLINE E GRATUITO", título serif, subtítulo, parágrafo e o `LeadForm` (igual hoje, mas alinhado à esquerda em vez de centralizado).
   - **Coluna direita:** foto dos 3 sócios em destaque, com cantos arredondados e leve sombra, ocupando altura cheia da seção.
   - **Mobile:** colunas empilham — texto+form em cima, foto embaixo (ou escondida em telas muito pequenas para priorizar conversão, a definir no build).

3. **Ajustar espaçamento e tipografia** para acomodar o novo layout (título um pouco menor, container mais largo).

4. **Manter** todo o resto da página intacto (HeroBanner, MediaGrid, etc).

## Arquivos afetados

- `src/assets/socios-porto-perottoni.jpg` (novo — copiado do upload)
- `src/components/landing/Hero.tsx` (reestruturado para 2 colunas)

## Fora do escopo

- Substituir a imagem placeholder da seção `AboutSection` (posso fazer depois se quiser usar a mesma foto lá também).
