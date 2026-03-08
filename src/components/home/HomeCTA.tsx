import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomeCTA = () => (
  <section className="bg-primary py-20 sm:py-28">
    <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
      <h2 className="font-serif text-3xl sm:text-4xl text-primary-foreground mb-6">
        Prenota la tua visita
      </h2>
      <p className="font-sans text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
        Lo studio è aperto dal lunedì al sabato. Prenota online o chiamaci direttamente.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <Button variant="hero" size="lg" asChild>
          <Link to="/contatti" className="gap-2">
            Prenota online
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <a
        href="tel:0915558609"
        className="inline-flex items-center gap-2 font-sans text-primary-foreground hover:text-accent transition-colors"
      >
        <Phone className="w-4 h-4" />
        091 555 8609
      </a>
    </div>
  </section>
);

export default HomeCTA;
