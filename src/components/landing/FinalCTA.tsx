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
            As regras já estão mudando e os seus clientes vão precisar de respostas claras, embasadas e
            com direcionamento prático.
          </p>
          <p className="mt-4 text-lg font-semibold text-primary-foreground">
            Este conteúdo é gratuito, mas as vagas são limitadas.
          </p>
        </div>
        <div className="reveal flex flex-col items-center md:items-end">
          <LeadForm variant="dark" ctaLabel="QUERO PARTICIPAR GRATUITAMENTE" />
          <p className="mt-4 max-w-sm text-center text-sm text-primary-foreground/80 md:text-right">
            Inscreva-se agora e receba o link de acesso diretamente no seu e-mail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
