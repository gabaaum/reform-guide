const cards = [
  {
    headline: "IVA pode elevar carga para 28%",
    source: "Agência Brasil",
    span: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    headline: "Perda de competitividade no setor de serviços",
    source: "Senado Federal",
    span: "md:col-span-2",
  },
  {
    headline: "Testes começam em 2026",
    source: "EBC",
    span: "",
  },
  {
    headline: "Novos impostos em Janeiro",
    source: "Gazeta do Povo",
    span: "",
  },
];

const MediaGrid = () => {
  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="container-tight">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Autoridade na mídia</p>
          <h2 className="mt-3 font-serif text-3xl text-secondary sm:text-4xl md:text-5xl">
            O que a mídia está alertando
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Você já deve ter visto manchetes como essas. E provavelmente sentiu aquele desconforto de
            quem sabe que algo grande está acontecendo, mas ainda não consegue medir exatamente o tamanho
            do impacto.
          </p>
        </div>

        <div className="reveal mt-12 grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-4">
          {cards.map((c, i) => (
            <article
              key={i}
              className={`group flex flex-col justify-between rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-card ${
                c.accent ? "bg-secondary text-secondary-foreground" : "bg-card text-card-foreground"
              } ${c.span}`}
            >
              <div className="text-xs font-semibold uppercase tracking-wider opacity-70">{c.source}</div>
              <h3
                className={`font-serif leading-tight ${
                  c.accent ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
                }`}
              >
                "{c.headline}"
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGrid;
