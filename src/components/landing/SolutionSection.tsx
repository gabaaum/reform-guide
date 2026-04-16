import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const scrollToForm = () => {
    const el = document.getElementById("hero-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-tight max-w-4xl">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">A solução</p>
          <h2 className="mt-3 font-serif text-3xl text-secondary sm:text-4xl md:text-5xl">
            Foi para resolver exatamente esse cenário que preparamos o webinário{" "}
            <span className="text-primary">"Reforma Tributária na Prática"</span>.
          </h2>

          <div className="mt-8 space-y-5 text-lg text-muted-foreground">
            <p>
              Em 30 minutos, você vai ter acesso a um raciocínio estruturado sobre como a reforma impacta
              operações reais de empresas, com números, comparativos e uma lógica que você pode aplicar
              já no dia seguinte.
            </p>
            <p className="text-secondary font-semibold">
              Sem teorias soltas ou repetições do que já foi publicado.
            </p>
            <p>
              O que vamos apresentar é um método prático para mapear impactos, identificar riscos e
              construir um plano de ação para os seus clientes — independentemente do regime tributário em
              que se enquadram.
            </p>
            <p>
              Você vai sair deste conteúdo sabendo por onde começar, o que priorizar e como transformar
              esse conhecimento em orientação de alto valor: o tipo de orientação que diferencia o
              profissional que acompanha a mudança daquele que conduz a transição.
            </p>
          </div>

          <div className="mt-10">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              GARANTIR MINHA VAGA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
