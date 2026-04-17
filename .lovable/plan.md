
O usuário está reforçando que na página `/obrigado` o vídeo do YouTube deve aparecer **embedado** (player visível), não apenas um link. Isso já estava previsto no plano anterior (iframe responsivo com `aspect-video`), mas vou tornar explícito e confirmar.

# Plano: integração Sheety + página /obrigado com vídeo embedado

## 1. `src/lib/sheets.ts` (novo)
- `SHEETY_URL = "https://api.sheety.co/35f7dca5d0a749d89507e33c6442aedc/leadsPortoPerottoni/página1"`
- `submitLead({ name, email, whatsapp })` faz POST JSON no formato Sheety:
  `{ "página1": { nome, email, whatsapp } }`
- Lança erro se resposta não for ok.

## 2. `src/pages/Obrigado.tsx` (novo)
Mesma identidade visual do site (Header, Footer, paleta cremosa, serif nos títulos):
- `<Header />`
- Hero centralizado:
  - Badge verde/primary "Inscrição confirmada" com ícone check.
  - H1 serif: *"Sua inscrição foi confirmada."*
  - Parágrafo: *"O acesso ao conteúdo 'Reforma Tributária na Prática: o que muda, quanto custa e como se preparar' já está disponível."*
- **Bloco do vídeo embedado** (player visível, não link):
  - Subtítulo "Assista agora:"
  - `<div class="aspect-video rounded-2xl overflow-hidden shadow-card border border-border">`
    `<iframe src="https://www.youtube.com/embed/FqKnifX4180" title="Reforma Tributária na Prática" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-full">`
  - Largura máx ~`max-w-3xl` centralizado.
- Bloco CTA WhatsApp:
  - Texto curto: *"Quer aprofundar com a equipe?"*
  - Botão primary grande, ícone `MessageCircle`, label "QUERO FALAR COM A EQUIPE DA PORTO & PEROTTONI", link `https://api.whatsapp.com/send/?phone=5551980700711` em nova aba.
- `<Footer />`

## 3. `src/App.tsx`
Adicionar `<Route path="/obrigado" element={<Obrigado />} />` antes do catch-all.

## 4. `src/components/landing/LeadForm.tsx`
- Importar `useNavigate` e `submitLead`.
- No `handleSubmit` após validar:
  - `try { await submitLead(result.data); navigate("/obrigado"); }`
  - `catch { toast.error("Não foi possível enviar agora. Tente novamente."); }`
  - `finally { setLoading(false); }`
- Remover toast de sucesso e o reset (substituídos pelo redirect).

## Arquivos afetados
- `src/lib/sheets.ts` (novo)
- `src/pages/Obrigado.tsx` (novo)
- `src/App.tsx` (rota)
- `src/components/landing/LeadForm.tsx` (envio + redirect)

## Observação
Sheety mapeia colunas pelo nome em camelCase. Estou assumindo cabeçalhos `nome`, `email`, `whatsapp` na sua planilha. Se forem diferentes, me avisa após o primeiro teste para ajustar.
