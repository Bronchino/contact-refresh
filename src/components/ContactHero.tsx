import studioImg from "@/assets/studio-reception.jpg";

const ContactHero = () => (
  <section className="relative bg-hero overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={studioImg}
        alt="Studio Dott. Claudio Rossi Palermo"
        className="w-full h-full object-cover object-center opacity-20"
      />
    </div>
    {/* Decorative glow */}
    <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl -translate-y-1/2 translate-x-1/2" />
    </div>
    <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
      <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4 flex items-center gap-3 animate-fade-up">
        <span className="w-8 h-px bg-accent/60" />
        Studio medico · Palermo
      </p>
      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-primary-foreground tracking-tight animate-fade-up [animation-delay:100ms]">
        Contatti
      </h1>
      <p className="font-sans text-lg text-primary-foreground/80 mt-4 max-w-xl animate-fade-up [animation-delay:200ms]">
        Prenota la tua visita o vieni a trovarci nello studio di Via Marchese Ugo, nel cuore di Palermo.
      </p>
    </div>
  </section>
);

export default ContactHero;
