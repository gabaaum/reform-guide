const AboutSection = () => {
  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="container-tight grid gap-12 md:grid-cols-2 md:items-center">
        <div className="reveal order-2 md:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary shadow-elegant">
            <div className="absolute inset-0 bg-gradient-primary opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <div className="text-primary-foreground">
                <span className="font-serif text-7xl md:text-8xl block leading-none">P&P</span>
                <span className="mt-4 block text-sm uppercase tracking-[0.3em] opacity-90">
                  Business Intelligence
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal order-1 md:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Quem somos</p>
          <h2 className="mt-3 font-serif text-3xl text-secondary sm:text-4xl md:text-5xl">
            Quem é a Porto & Perottoni?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Um escritório que integra advocacia e contabilidade tributária para oferecer orientação
            estratégica de alto nível.
          </p>
          <p className="mt-4 text-muted-foreground">
            Nossa equipe já conduziu inúmeros diagnósticos e construiu uma reputação sólida baseada em{" "}
            <strong className="text-secondary">rigor técnico e clareza</strong>. Este webinário é uma extensão
            do nosso trabalho de consultoria, agora acessível para você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
