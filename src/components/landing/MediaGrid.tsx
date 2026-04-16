import midiaIva from "@/assets/midia-iva-28.png";
import midiaSenado from "@/assets/midia-senado.png";
import midiaTestes from "@/assets/midia-testes-2026.png";

const cards = [
  {
    src: midiaIva,
    alt: "Manchete da Agência Brasil: Reforma tributária pode elevar IVA para 28,55%, estima relator",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: midiaSenado,
    alt: "Manchete do Senado Federal: Reforma tributária — comércio e serviços apontam perda de competitividade e alta de preços",
    span: "md:col-span-2",
  },
  {
    src: midiaTestes,
    alt: "Manchete da Agência Brasil: Reforma tributária entra em fase de testes em 2026",
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
              className={`group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 ${c.span}`}
            >
              <img
                src={c.src}
                alt={c.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGrid;
