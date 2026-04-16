import LeadForm from "./LeadForm";
import sociosImg from "@/assets/socios-porto-perottoni.png";

const Hero = () => {
  return (
    <section className="bg-background pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="container-tight grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="reveal order-1">
          <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            Evento online e gratuito
          </span>
          <h1 className="mt-5 font-serif text-3xl leading-[1.1] text-secondary sm:text-4xl lg:text-5xl">
            Reforma Tributária na Prática:{" "}
            <span className="text-primary">o que muda, quanto custa</span> e como se preparar
          </h1>
          <p className="mt-6 text-lg font-semibold text-secondary">
            A Reforma Tributária já começou a mudar as regras. Você sabe exatamente como isso afeta os
            seus clientes?
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Descubra o que muda, quanto custa e quais decisões precisam ser tomadas agora, antes que a
            transição pegue o seu escritório no contrapé.
          </p>

          <div className="mt-8 lg:hidden">
            <img
              src={sociosImg}
              alt="Sócios Porto & Perottoni"
              className="w-full rounded-2xl shadow-elegant"
              loading="eager"
            />
          </div>

          <div className="mt-8">
            <LeadForm id="hero-form" />
          </div>
        </div>

        <div className="reveal order-2 hidden lg:block">
          <img
            src={sociosImg}
            alt="Sócios Porto & Perottoni"
            className="w-full rounded-2xl shadow-elegant"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
