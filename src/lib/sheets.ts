const SHEETY_URL =
  "https://api.sheety.co/35f7dca5d0a749d89507e33c6442aedc/leadsPortoPerottoni/página1";

export type LeadPayload = {
  name: string;
  email: string;
  whatsapp: string;
};

export async function submitLead({ name, email, whatsapp }: LeadPayload) {
  const res = await fetch(SHEETY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      página1: { nome: name, email, whatsapp },
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Sheety error ${res.status}: ${text}`);
  }

  return res.json().catch(() => ({}));
}
