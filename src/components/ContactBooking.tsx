import { Phone, MessageCircle, CalendarDays, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import receptionImg from "@/assets/studio-reception.jpg";

const ContactBooking = () => (
  <section className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: text content */}
      <div className="min-w-0">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3">
          Appuntamenti
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-5">
          Prenota una visita
        </h2>
        <p className="font-sans text-muted-foreground text-base leading-relaxed mb-10">
          Lo studio riceve esclusivamente su appuntamento. Per prenotare una visita puoi chiamare direttamente, scrivere su WhatsApp o prenotare online tramite MioDottore.
        </p>

        <div className="space-y-5 mb-10">
          <InfoRow icon={<Phone className="w-4 h-4" />} label="Telefono">
            <a href="tel:0915558609" className="font-serif text-2xl sm:text-3xl text-foreground hover:text-primary transition-colors">
              091 5558609
            </a>
          </InfoRow>
          <InfoRow icon={<Clock className="w-4 h-4" />} label="Orari">
            <p className="font-sans text-foreground text-base">Lunedì — Venerdì · 15:00 – 20:00</p>
            <p className="font-sans text-muted-foreground text-sm mt-0.5">Solo su appuntamento</p>
          </InfoRow>
          <InfoRow icon={<Mail className="w-4 h-4" />} label="Email">
            <a href="mailto:claudio.rossi@me.com" className="font-sans text-foreground text-base hover:text-primary transition-colors break-all">
              claudio.rossi@me.com
            </a>
          </InfoRow>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="pill" asChild>
            <a href="tel:0915558609" className="gap-2">
              <Phone className="w-4 h-4" />
              Chiama ora
            </a>
          </Button>
          <Button variant="pillOutline" asChild>
            <a
              href="https://wa.me/393513043424?text=Buongiorno%2C%20vorrei%20informazioni%20per%20una%20visita"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </Button>
          <Button variant="pillOutline" asChild>
            <a
              href="https://www.miodottore.it/z/gvmuor"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <CalendarDays className="w-4 h-4" />
              MioDottore
            </a>
          </Button>
        </div>
      </div>

      {/* Right: photo */}
      <div className="rounded-2xl overflow-hidden shadow-xl min-w-0">
        <img
          src={receptionImg}
          alt="Reception studio Dott. Claudio Rossi - Via Marchese Ugo 56, Palermo"
          className="w-full h-auto object-cover aspect-[4/3]"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

const InfoRow = ({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) => (
  <div className="flex gap-4">
    <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
      {icon}
    </div>
    <div>
      <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-primary mb-1">{label}</p>
      {children}
    </div>
  </div>
);

export default ContactBooking;
