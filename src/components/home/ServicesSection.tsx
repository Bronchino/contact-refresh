import { Link } from "react-router-dom";
import { Stethoscope, Monitor, ShieldCheck, Heart, Sun, Activity } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Visita Ginecologica", desc: "Check-up completo con anamnesi, esame obiettivo ed ecografia per la prevenzione e la diagnosi precoce.", link: "/servizi" },
  { icon: Monitor, title: "Ecografia", desc: "Ecografia pelvica e transvaginale con ecografo Voluson di ultima generazione per immagini ad alta definizione.", link: "/servizi" },
  { icon: ShieldCheck, title: "Pap Test & HPV", desc: "Screening cervicale per la prevenzione del tumore al collo dell'utero. Esame rapido e indolore.", link: "/servizi" },
  { icon: Heart, title: "Gravidanza & Ostetricia", desc: "Assistenza prenatale completa: ecografie morfologiche, screening e monitoraggio della gravidanza.", link: "/servizi" },
  { icon: Sun, title: "Menopausa", desc: "Supporto personalizzato per la gestione dei sintomi della menopausa e la prevenzione dell'osteoporosi.", link: "/servizi" },
  { icon: Activity, title: "Endometriosi", desc: "Diagnosi e trattamento dell'endometriosi con approccio multidisciplinare e chirurgia mininvasiva.", link: "/servizi" },
];

const ServicesSection = () => (
  <section className="bg-background py-20 sm:py-28">
    <div className="max-w-6xl mx-auto px-6 sm:px-8">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
          Servizi specialistici
        </h2>
        <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
          Un'ampia gamma di prestazioni ginecologiche e ostetriche per ogni fase della vita femminile.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc, link }) => (
          <div
            key={title}
            className="group bg-card border border-border border-l-4 border-l-accent rounded-lg p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <Icon className="w-7 h-7 text-primary mb-4" />
            <h3 className="font-sans text-lg font-bold text-foreground mb-2">{title}</h3>
            <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
            <Link
              to={link}
              className="font-sans text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Scopri di più →
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
