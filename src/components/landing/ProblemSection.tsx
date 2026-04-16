const questions = [
  "Quanto vai custar para cada perfil de empresa?",
  "Quais operações ficam mais caras?",
  "Quais clientes precisam de atenção imediata?",
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
              A Reforma Tributária é o maior redesenho fiscal que o Brasil já viveu. Novos tributos, novas
              regras de crédito, uma lógica completamente diferente de apuração — e tudo isso com um
              cronograma de transição que já está em andamento.
            </p>
            <p>
              O problema é que a maioria dos profissionais contábeis está tentando acompanhar essa
              mudança do mesmo jeito de sempre: lendo legislação, assistindo lives genéricas, torcendo
              para que alguém traduza o que realmente muda na operação dos clientes.
            </p>
            <p className="text-secondary font-semibold">
              Só que dessa vez, ler a lei não basta. Porque o desafio não está em entender o texto — está
              em saber o que fazer com ele.
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

        <div className="reveal mt-10">
          <p className="text-lg text-muted-foreground">
            E o mais importante: como apresentar tudo isso de forma clara para quem depende da sua
            orientação?
          </p>
          <p className="mt-4 text-lg font-semibold text-secondary">
            Essa insegurança paralisa — e, enquanto você espera clareza, o mercado já está se
            movimentando.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
