const Footer = () => {
  return (
    <footer className="bg-secondary py-10 text-secondary-foreground">
      <div className="container-tight flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p className="font-serif text-lg">
          Porto<span className="text-primary">&</span>Perottoni
        </p>
        <p className="text-secondary-foreground/70">
          © {new Date().getFullYear()} Porto & Perottoni Business Intelligence. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
