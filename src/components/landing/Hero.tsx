import LeadForm from "./LeadForm";
import sociosImg from "@/assets/socios-porto-perottoni.png";

const Hero = () => {
  return (
    <section className="bg-background lg:min-h-screen">
      <div className="grid lg:grid-cols-2 lg:min-h-screen">
        {/* Mobile image (full-bleed, no rounded corners) */}
        <div className="lg:hidden">
          <img
            src={sociosImg}
            alt="Sócios Porto & Perottoni"
            className="h-[55vh] w-full object-cover"
            loading="eager"
          />
        </div>

        {/* Left column: text + form */}
        <div className="reveal flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-16 lg:py-16 xl:px-24">
          <div className="mx-auto w-full max-w-xl">
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

            <div className="mt-8">
              <LeadForm id="hero-form" />
            </div>
          </div>
        </div>

        {/* Desktop image (full-bleed, full height) */}
        <div className="reveal hidden lg:block">
          <img
            src={sociosImg}
            alt="Sócios Porto & Perottoni"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
