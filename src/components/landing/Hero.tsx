import LeadForm from "./LeadForm";

const Hero = () => {
  return (
    <section className="bg-background pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="container-tight grid gap-12 md:grid-cols-2 md:items-center">
        <div className="reveal">
          <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            Evento online e gratuito
          </span>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] text-secondary sm:text-5xl md:text-6xl">
            Reforma Tributária na Prática:{" "}
            <span className="text-primary">o que muda, quanto custa</span> e como se preparar
          </h1>
          <p className="mt-6 text-lg font-semibold text-secondary">
            A Reforma Tributária já começou a mudar as regras. Você sabe exatamente como isso afeta os seus
            clientes?
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Descubra o que muda, quanto custa e quais decisões precisam ser tomadas agora, antes que a
            transição pegue o seu escritório no contrapé.
          </p>
        </div>
        <div className="reveal flex justify-center md:justify-end">
          <LeadForm id="hero-form" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
