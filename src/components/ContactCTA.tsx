import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactCTA = () => (
  <section className="bg-hero py-20 sm:py-28">
    <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] rounded-full bg-accent blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>
      <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
        Prenota ora
      </p>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-6">
        La tua salute è la nostra priorità
      </h2>
      <p className="font-sans text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
        Non rimandare il tuo controllo ginecologico. Prenota una visita nello studio del Dott. Claudio Rossi a Palermo.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="hero" size="lg" asChild>
          <a href="tel:0915558609" className="gap-2">
            <Phone className="w-5 h-5" />
            Chiama 091 5558609
          </a>
        </Button>
        <Button variant="heroOutline" size="lg" asChild>
          <a href="https://www.miodottore.it/z/gvmuor" target="_blank" rel="noopener noreferrer" className="gap-2">
            Prenota Online
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ContactCTA;
