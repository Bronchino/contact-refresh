import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import BackButton from "@/components/BackButton";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Baby,
  Stethoscope,
  ScanSearch,
  MonitorSmartphone,
  ShieldPlus,
  HeartPulse,
  Microscope,
  Scissors,
  Ribbon,
  CalendarHeart,
  Thermometer,
  CircleDot,
  Moon,
  Pill,
  Disc3,
  ShieldCheck,
  UserRound,
  TestTube,
  Droplets,
  FlaskConical,
  ArrowRight,
} from "lucide-react";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const obstetricServices: ServiceCard[] = [
  {
    icon: <Baby className="w-7 h-7" />,
    title: "Prima visita ostetrica ed ecografia I trimestre",
    description: "Conferma della gravidanza, datazione ecografica, valutazione della vitalità embrionale e gestione della minaccia d'aborto nel primo trimestre a Palermo",
    link: "#",
  },
  {
    icon: <ScanSearch className="w-7 h-7" />,
    title: "Screening prenatale",
    description: "Test combinato e test DNA fetale (NIPT) per la valutazione del rischio di sindrome di Down (trisomia 21) e altre anomalie cromosomiche a Palermo",
    link: "/blog/screening-prenatale",
  },
  {
    icon: <MonitorSmartphone className="w-7 h-7" />,
    title: "Ecografia morfologica e accrescimento",
    description: "Studio dell'anatomia fetale e monitoraggio della crescita nelle settimane 19–21 e nel terzo trimestre",
    link: "#",
  },
  {
    icon: <HeartPulse className="w-7 h-7" />,
    title: "Visita ed ecografia 2D e 3D in gravidanza",
    description: "Monitoraggio del benessere materno-fetale con ecografo GE Voluson S20 ad alta risoluzione",
    link: "#",
  },
  {
    icon: <ShieldPlus className="w-7 h-7" />,
    title: "Consulenza contraccezione post-partum",
    description: "Scelta personalizzata del metodo contraccettivo più adatto dopo il parto e durante l'allattamento",
    link: "#",
  },
];

const gynecologyServices: ServiceCard[] = [
  {
    icon: <Stethoscope className="w-7 h-7" />,
    title: "Visita ginecologica",
    description: "Visita specialistica ginecologica a Palermo per la salute della donna in ogni fase della vita",
    link: "#",
  },
  {
    icon: <Microscope className="w-7 h-7" />,
    title: "Ecografia transvaginale e pelvica",
    description: "Ecografia ginecologica ad alta risoluzione per la diagnosi di patologie uterine e ovariche a Palermo",
    link: "#",
  },
  {
    icon: <CalendarHeart className="w-7 h-7" />,
    title: "Infertilità: inquadramento, counseling e percorsi PMA",
    description: "Valutazione della coppia infertile e orientamento verso i percorsi di procreazione medicalmente assistita",
    link: "/blog/infertilita",
  },
  {
    icon: <Scissors className="w-7 h-7" />,
    title: "Chirurgia laparoscopica",
    description: "Trattamento mini-invasivo di cisti ovarica, cisti dermoide, endometriosi e fibromi uterini a Palermo",
    link: "/blog/chirurgia-laparoscopica",
  },
  {
    icon: <Ribbon className="w-7 h-7" />,
    title: "Endometriosi e dolore pelvico cronico",
    description: "Diagnosi e gestione dell'endometriosi e del dolore pelvico cronico con approccio personalizzato",
    link: "#",
  },
  {
    icon: <Thermometer className="w-7 h-7" />,
    title: "Disturbi del ciclo mestruale",
    description: "Valutazione e trattamento di amenorrea, dismenorrea, cicli irregolari e sanguinamenti anomali a Palermo",
    link: "/blog/disturbi-ciclo-mestruale",
  },
  {
    icon: <CircleDot className="w-7 h-7" />,
    title: "Fibromi uterini",
    description: "Diagnosi e trattamento dei fibromi uterini (leiomiomi) con terapia medica o chirurgica mini-invasiva",
    link: "#",
  },
  {
    icon: <Moon className="w-7 h-7" />,
    title: "Menopausa",
    description: "Gestione dei sintomi della menopausa e del climaterio, inclusa la terapia ormonale sostitutiva (TOS)",
    link: "#",
  },
  {
    icon: <Pill className="w-7 h-7" />,
    title: "Contraccezione",
    description: "Consulenza contraccettiva personalizzata: pillola, spirale IUD, impianto sottocutaneo e altri metodi a Palermo",
    link: "#",
  },
  {
    icon: <Disc3 className="w-7 h-7" />,
    title: "Inserimento spirale (IUD)",
    description: "Posizionamento di dispositivo intrauterino al rame o medicato (IUS) per la contraccezione a lungo termine a Palermo",
    link: "#",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Prevenzione oncologica",
    description: "Screening oncologico ginecologico: Pap test, HPV test e visita preventiva per la salute della cervice uterina",
    link: "#",
  },
  {
    icon: <UserRound className="w-7 h-7" />,
    title: "Prima visita ginecologica",
    description: "Prima visita specialistica per adolescenti e giovani donne, in un ambiente accogliente e rispettoso",
    link: "/blog/prima-visita-ginecologica",
  },
  {
    icon: <TestTube className="w-7 h-7" />,
    title: "Pap test e HPV test",
    description: "Esami di screening per la prevenzione del tumore del collo dell'utero, raccomandati ogni 3–5 anni",
    link: "#",
  },
  {
    icon: <Droplets className="w-7 h-7" />,
    title: "Perdite vaginali",
    description: "Valutazione e trattamento delle perdite vaginali anomale: candidosi, vaginosi batterica e infezioni sessualmente trasmissibili a Palermo",
    link: "#",
  },
  {
    icon: <FlaskConical className="w-7 h-7" />,
    title: "Tamponi cervicovaginali",
    description: "Esame microbiologico cervicovaginale per la diagnosi di infezioni vaginali e cerviciti a Palermo",
    link: "#",
  },
];

const ServiceCardComponent = ({ service }: { service: ServiceCard }) => {
  const isActive = service.link !== "#";
  const Wrapper = isActive ? Link : "div";
  const wrapperProps = isActive ? { to: service.link } : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={`group bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col ${
        isActive ? "cursor-pointer" : ""
      }`}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/15 transition-colors">
        {service.icon}
      </div>
      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{service.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.description}</p>
      {isActive && (
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-4 group-hover:gap-2.5 transition-all">
          Scopri di più <ArrowRight className="w-4 h-4" />
        </span>
      )}
    </Wrapper>
  );
};

const Servizi = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Studio Ginecologico Dott. Claudio Rossi",
    description: "Studio specialistico di ginecologia e ostetricia a Palermo. Visite, ecografie, screening prenatale, chirurgia laparoscopica e percorsi di fertilità.",
    url: "https://www.dottorossi.it/servizi",
    telephone: "+390915558609",
    email: "claudio.rossi@me.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Marchese Ugo 56",
      addressLocality: "Palermo",
      addressRegion: "PA",
      postalCode: "90141",
      addressCountry: "IT",
    },
    medicalSpecialty: ["Obstetrics", "Gynecology"],
    physician: {
      "@type": "Physician",
      name: "Dott. Claudio Rossi",
      medicalSpecialty: ["Obstetrics", "Gynecology"],
      description: "Specialista in Ostetricia e Ginecologia, Dirigente Medico presso l'AOOR Villa Sofia Cervello di Palermo.",
    },
  };

  return (
    <>
      <Helmet>
        <title>Servizi di Ginecologia e Ostetricia a Palermo | Dott. Claudio Rossi</title>
        <meta
          name="description"
          content="Tutti i servizi di ginecologia e ostetricia del Dott. Claudio Rossi a Palermo: visite, ecografie, screening prenatale, chirurgia laparoscopica, fertilità e prevenzione."
        />
        <link rel="canonical" href="https://www.dottorossi.it/servizi" />
        <meta property="og:title" content="Servizi di Ginecologia e Ostetricia a Palermo | Dott. Claudio Rossi" />
        <meta
          property="og:description"
          content="Tutti i servizi di ginecologia e ostetricia del Dott. Claudio Rossi a Palermo: visite, ecografie, screening prenatale, chirurgia laparoscopica, fertilità e prevenzione."
        />
        <meta property="og:url" content="https://www.dottorossi.it/servizi" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4 flex items-center gap-3 animate-fade-up">
            <span className="w-8 h-px bg-accent/60" />
            Servizi
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary-foreground tracking-tight leading-tight animate-fade-up [animation-delay:100ms]">
            Servizi
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl animate-fade-up [animation-delay:200ms]">
            Prestazioni specialistiche in ginecologia e ostetricia, dalla prevenzione alla diagnosi,
            dalla chirurgia mini-invasiva ai percorsi di fertilità.
          </p>
        </div>
      </section>

      <main className="py-16 sm:py-24">

        {/* Ostetricia */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="font-serif text-3xl font-bold text-foreground">Ostetricia</h2>
            <Button variant="pill" asChild>
              <Link to="/ostetricia">
                Vai alla pagina <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {obstetricServices.map((s) => (
              <ServiceCardComponent key={s.title} service={s} />
            ))}
          </div>
        </section>

        {/* Ginecologia */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="font-serif text-3xl font-bold text-foreground">Ginecologia</h2>
            <Button variant="pill" asChild>
              <Link to="/ginecologia">
                Vai alla pagina <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gynecologyServices.map((s) => (
              <ServiceCardComponent key={s.title} service={s} />
            ))}
          </div>
        </section>

        {/* CTA Prenota */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-12">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-10 sm:p-14">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Prenota un appuntamento
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Hai bisogno di una consulenza specialistica? Prenota comodamente online la tua visita
              presso lo studio di Via Marchese Ugo 56, Palermo.
            </p>
            <Button size="lg" asChild>
              <a href="https://www.miodottore.it/z/gvmuor" target="_blank" rel="noopener noreferrer">
                Prenota un appuntamento
              </a>
            </Button>
          </div>
        </section>
      </main>

      <ContactCTA />
      <Footer />
    </>
  );
};

export default Servizi;
