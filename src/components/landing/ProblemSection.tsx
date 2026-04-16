const questions = [
  "Quanto vai custar para cada cliente?",
  "Quais operações ficam inviáveis?",
  "Como apresentar clareza para quem depende da sua orientação?",
];

const ProblemSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-tight max-w-4xl">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">A transição</p>
          <h2 className="mt-3 font-serif text-3xl text-secondary sm:text-4xl md:text-5xl">
            Você já viu as manchetes. <br />
            Mas o desafio não está no texto da lei.
          </h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground">
            <p>
              A Reforma Tributária é o maior redesenho fiscal que o Brasil já viveu. O problema é que a
              maioria dos profissionais está tentando acompanhar do jeito de sempre.
            </p>
            <p className="text-secondary font-semibold">
              Só que desta vez, ler a lei não basta. O desafio está na operação.
            </p>
          </div>
        </div>

        <div className="reveal mt-12 grid gap-4 md:grid-cols-3">
          {questions.map((q, i) => (
            <div
              key={i}
              className="rounded-xl border-l-4 border-primary bg-surface-alt p-6 text-secondary"
            >
              <span className="font-serif text-3xl text-primary">0{i + 1}</span>
              <p className="mt-3 font-semibold leading-snug">{q}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
