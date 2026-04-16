import { Check, X } from "lucide-react";

const forYou = [
  "Contadores e profissionais contábeis que atendem empresas de diferentes regimes (Simples, Presumido e Real) e precisam entender os impactos específicos da Reforma em cada um deles.",
  "Gestores de escritórios contábeis que querem posicionar sua equipe à frente da transição, e não atrás dela.",
  "Consultores tributários que buscam um método claro para apresentar diagnósticos e planos de ação com segurança e credibilidade.",
  "Profissionais que já leram sobre a Reforma, mas ainda sentem que falta um caminho prático para aplicar o que sabem na rotina dos seus clientes.",
  "Quem entende que dominar a Reforma Tributária agora é uma vantagem competitiva — e que esperar pode custar relevância e contratos.",
];

const notForYou = [
  "Quem busca fórmulas mágicas sem estudo técnico.",
  "Quem acredita que a mudança não afetará seus clientes agora.",
  "Profissionais que preferem esperar o mercado ditar as regras.",
];

const AudienceSection = () => {
  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="container-tight">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl text-secondary sm:text-4xl md:text-5xl whitespace-nowrap">
            Para quem é (e para quem não é)
          </h2>
          <p className="mt-4 text-muted-foreground">
            Seja honesto consigo mesmo antes de garantir sua vaga.
          </p>
        </div>

        <div className="reveal mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-card p-8 shadow-card border border-border">
            <h3 className="font-serif text-2xl text-secondary">Este evento É para você</h3>
            <ul className="mt-6 space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-card p-8 shadow-card border border-border">
            <h3 className="font-serif text-2xl text-secondary">Este evento NÃO é para você</h3>
            <ul className="mt-6 space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <X className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
