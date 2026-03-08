import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import salaAttesaImg from "@/assets/studio-sala-attesa.jpg";

const ContactLocation = () => (
  <section className="bg-secondary py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-6 sm:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: photo */}
        <div className="rounded-2xl overflow-hidden shadow-xl min-w-0 order-2 lg:order-1">
          <img
            src={salaAttesaImg}
            alt="Sala d'attesa studio ginecologico Palermo"
            className="w-full h-auto object-cover aspect-[4/3]"
            loading="lazy"
          />
        </div>

        {/* Right: text */}
        <div className="order-1 lg:order-2 min-w-0">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3">
            Lo studio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-5">
            Dove siamo
          </h2>
          <p className="font-sans text-muted-foreground text-base leading-relaxed mb-10">
            Lo studio si trova in una delle zone più centrali di Palermo, facilmente raggiungibile con i mezzi pubblici e con parcheggio disponibile nelle vicinanze.
          </p>

          <div className="space-y-5 mb-10">
            <div className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-primary mb-1">Indirizzo</p>
                <p className="font-sans text-foreground text-base leading-relaxed">
                  Via Marchese Ugo, 56<br />
                  90141 Palermo (PA)
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-primary mb-1">Zona</p>
                <p className="font-sans text-foreground text-base">Politeama / Libertà</p>
              </div>
            </div>
          </div>

          <Button variant="pill" asChild>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Via+Marchese+Ugo+56+Palermo"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <MapPin className="w-4 h-4" />
              Indicazioni stradali
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default ContactLocation;
