import equipeImg from "@/assets/equipe-porto-perottoni.png";

const AboutSection = () => {
  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="container-tight grid gap-12 md:grid-cols-2 md:items-center">
        <div className="reveal order-2 md:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-elegant">
            <img
              src={equipeImg}
              alt="Equipe Porto & Perottoni"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="reveal order-1 md:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Quem somos</p>
          <h2 className="mt-3 font-serif text-3xl text-secondary sm:text-4xl md:text-5xl">
            Quem é a Porto & Perottoni?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A Porto & Perottoni é um escritório que integra advocacia e contabilidade tributária com um
            único objetivo: oferecer orientação estratégica de alto nível para questões fiscais e
            patrimoniais.
          </p>
          <p className="mt-4 text-muted-foreground">
            Com anos de experiência em planejamento tributário, a equipe já conduziu inúmeros
            diagnósticos, atendeu empresas e construiu uma reputação sólida no mercado, baseada em{" "}
            <strong className="text-secondary">
              resultados concretos, rigor técnico e clareza na comunicação
            </strong>
            .
          </p>
          <p className="mt-4 text-muted-foreground">
            Os profissionais que passam pela orientação da Porto & Perottoni costumam dizer a mesma coisa:
            encontraram segurança técnica, didática para entender cenários complexos e, acima de tudo,
            direcionamento prático — sem promessas vazias, sem atalhos mirabolantes.
          </p>
          <p className="mt-4 text-muted-foreground">
            Este webinário é uma extensão direta desse trabalho. O mesmo nível de profundidade e aplicação
            que entregamos em consultoria, agora em um formato acessível para quem precisa se preparar
            para a maior mudança tributária da história recente do país.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
