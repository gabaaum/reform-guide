import LeadForm from "./LeadForm";

const FinalCTA = () => {
  return (
    <section className="bg-gradient-primary py-20 text-primary-foreground md:py-28">
      <div className="container-tight grid gap-12 md:grid-cols-2 md:items-center">
        <div className="reveal">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            A Reforma Tributária não vai esperar ninguém ficar pronto.
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/90">
            Garanta sua vaga no webinário gratuito e receba o link de acesso.
          </p>
        </div>
        <div className="reveal flex justify-center md:justify-end">
          <LeadForm variant="dark" ctaLabel="QUERO PARTICIPAR GRATUITAMENTE" />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
