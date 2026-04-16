import { Brain, BarChart3, Map, Award } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Raciocínio Estruturado",
    desc: "Entenda o impacto em operações reais em 30 minutos.",
  },
  {
    icon: BarChart3,
    title: "Comparativos Numéricos",
    desc: "Saia da teoria e vá direto para os números.",
  },
  {
    icon: Map,
    title: "Método Prático",
    desc: "Como mapear riscos e construir planos de ação claros.",
  },
  {
    icon: Award,
    title: "Diferenciação",
    desc: "Transforme-se no profissional que conduz a transição.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-tight">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Resultado esperado</p>
          <h2 className="mt-3 font-serif text-3xl text-secondary sm:text-4xl md:text-5xl">
            O que você vai conquistar
          </h2>
        </div>

        <div className="reveal mt-12 grid gap-6 md:grid-cols-2">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-5 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-card"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-secondary">{title}</h3>
                <p className="mt-1 text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
