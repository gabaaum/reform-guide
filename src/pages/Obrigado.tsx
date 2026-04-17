import { CheckCircle2, MessageCircle } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const Obrigado = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-surface-alt py-16 sm:py-24">
          <div className="container-tight flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              <CheckCircle2 className="h-4 w-4" />
              Inscrição confirmada
            </span>

            <h1 className="mt-6 max-w-3xl font-serif text-3xl font-bold leading-tight text-secondary sm:text-4xl md:text-5xl">
              Sua inscrição foi confirmada.
            </h1>

            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              O acesso ao conteúdo{" "}
              <span className="font-semibold text-foreground">
                "Reforma Tributária na Prática: o que muda, quanto custa e como se preparar"
              </span>{" "}
              já está disponível.
            </p>

            <div className="mt-12 w-full max-w-3xl">
              <h2 className="mb-4 text-left font-serif text-xl font-semibold text-secondary sm:text-2xl">
                Assista agora:
              </h2>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border bg-secondary shadow-card">
                <iframe
                  src="https://www.youtube.com/embed/FqKnifX4180"
                  title="Reforma Tributária na Prática: o que muda, quanto custa e como se preparar"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="mt-14 w-full max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-card">
              <p className="text-base text-muted-foreground sm:text-lg">
                Quer aplicar isso na sua empresa? Fale agora com a equipe da{" "}
                <span className="font-serif font-semibold text-secondary">
                  Porto<span className="text-primary">&</span>Perottoni
                </span>
                .
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary-hover font-semibold tracking-wide shadow-elegant sm:text-base"
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=5551980700711&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  QUERO FALAR COM A EQUIPE DA PORTO & PEROTTONI
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Obrigado;
