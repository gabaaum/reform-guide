import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-sm border-b border-border" : ""
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-lg font-serif font-bold text-secondary">
            Porto<span className="text-primary">&</span>Perottoni
          </span>
        </a>
        <Button
          onClick={scrollToForm}
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold"
        >
          Garantir minha vaga
        </Button>
      </div>
    </header>
  );
};

export default Header;
