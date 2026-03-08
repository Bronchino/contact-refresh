import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-[90vh] grid lg:grid-cols-2">
    {/* Left column */}
    <div className="bg-primary flex items-center">
      <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-0 max-w-2xl">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-accent mb-8">
          Ginecologo privato · Palermo
        </p>

        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-12 h-px bg-accent" />
          <span className="font-sans text-2xl font-semibold text-primary-foreground">
            Dott. Claudio Rossi
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl text-primary-foreground leading-tight mb-6">
          La salute femminile merita attenzione e competenza.
        </h1>

        <p className="font-sans text-lg text-primary-foreground/80 leading-relaxed max-w-prose mb-10">
          Dalla diagnosi dei disturbi del ciclo alla chirurgia ginecologica mininvasiva.
          Visite specialistiche, ecografie e assistenza completa in gravidanza a Palermo.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="lg" asChild>
            <a
              href="https://www.miodottore.it/claudio-rossi/ginecologo/palermo"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              Prenota Visita
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="tel:0915558609" className="gap-2">
              <Phone className="w-5 h-5" />
              Chiama 091 555 8609
            </a>
          </Button>
        </div>
      </div>
    </div>

    {/* Right column */}
    <div className="hidden lg:flex bg-hero-deep items-center justify-center p-12">
      <div className="w-full max-w-md aspect-[4/5] bg-primary rounded-2xl flex items-center justify-center">
        <span className="font-sans text-primary-foreground/60 text-lg">Foto Dottore</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
