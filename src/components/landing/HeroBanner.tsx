import skyscrapers from "@/assets/skyscrapers-hero.jpg";

const HeroBanner = () => {
  return (
    <section className="relative h-[280px] overflow-hidden md:h-[380px]">
      <img
        src={skyscrapers}
        alt="Arranha-céus corporativos representando ambiente de negócios"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover blur-sm scale-110"
      />
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-primary/60 bg-secondary/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-sm">
            Business Intelligence Jurídico
          </span>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-primary-foreground sm:text-4xl md:text-5xl">
            Excelência em Direito Tributário e{" "}
            <span className="text-primary">Consultoria Estratégica</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
