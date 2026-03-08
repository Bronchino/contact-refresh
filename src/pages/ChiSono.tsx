import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ContactCTA from "@/components/ContactCTA";
import dottRossiImg from "@/assets/dott-rossi-ecografia.jpg";
import { GraduationCap, Stethoscope, Baby, BookOpen, Heart, Scan } from "lucide-react";

const ChiSono = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Chi Sono | Dott. Claudio Rossi — Ginecologo Palermo</title>
      <meta name="description" content="Dott. Claudio Rossi, ginecologo a Palermo con oltre 25 anni di esperienza. Dirigente Medico presso Villa Sofia-Cervello. Chirurgia laparoscopica e robotica." />
      <link rel="canonical" href="https://www.rossiginecologo.it/chi-sono" />
    </Helmet>
    <Header />

    {/* Hero */}
    <section className="relative bg-hero overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4 flex items-center gap-3 animate-fade-up">
          <span className="w-8 h-px bg-accent/60" />
          Chi sono
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary-foreground tracking-tight leading-tight animate-fade-up [animation-delay:100ms]">
          Dott. Claudio Rossi
          <br />
          <span className="text-accent">Ginecologo e Ostetrico</span>
          <br className="hidden sm:block" />
          <span className="text-primary-foreground/80 text-3xl sm:text-4xl md:text-5xl"> a Palermo</span>
        </h1>
      </div>
    </section>

    {/* Introduzione */}
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-2 order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={dottRossiImg}
                alt="Dott. Claudio Rossi durante un'ecografia ostetrica"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-3 order-2">
            <p className="font-sans text-lg sm:text-xl text-foreground leading-relaxed">
              Con oltre <strong className="font-semibold">25 anni di attività clinica e chirurgica ospedaliera</strong> in ginecologia e ostetricia, sono attualmente Dirigente Medico presso l'AOOR Villa Sofia Cervello di Palermo, dove sono titolare di incarico di alta specializzazione in chirurgia della fertilità. Il mio studio privato in Via Marchese Ugo 56 è un punto di riferimento per le donne che cercano un approccio diagnostico rigoroso, un'esperienza chirurgica solida e un'attenzione genuina alla persona.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Formazione */}
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <GraduationCap className="w-5 h-5" />
          </div>
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">Formazione</p>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">
          Formazione e titoli accademici
        </h2>
        <div className="space-y-6 font-sans text-muted-foreground text-base leading-relaxed">
          <p>
            Mi sono laureato in <strong className="text-foreground">Medicina e Chirurgia con 110/110 e lode</strong> presso l'Università degli Studi di Palermo, dove ho conseguito anche la Specializzazione in Ostetricia e Ginecologia con orientamento in Fisiopatologia della Riproduzione Umana con votazione <strong className="text-foreground">50/50 e lode</strong>.
          </p>
          <p>
            Ho maturato esperienza internazionale come <strong className="text-foreground">Senior House Officer</strong> presso il Liverpool Women's Hospital (University Department of Obstetrics &amp; Gynecology, Liverpool, UK) — divisione universitaria di III livello con 6.500 parti annui — e come <strong className="text-foreground">Honorary Research Fellow</strong> presso il Dipartimento di Immunologia dell'Università di Liverpool, dove mi sono occupato di ricerca in immunologia della riproduzione umana.
          </p>
          <p>
            Ho superato l'<strong className="text-foreground">USMLE</strong> (United States Medical Licensing Examination, Part 1 e Part 2) e il <strong className="text-foreground">MRCOG Part 1</strong> (Member of The Royal College of Obstetricians &amp; Gynaecologists).
          </p>
          <p>
            Ho completato la mia formazione con un <strong className="text-foreground">Master di II Livello in Medicina della Riproduzione e Tecniche di Riproduzione Assistita</strong> presso l'Università degli Studi di Torino – OIRM Sant'Anna, uno dei centri di eccellenza italiani nel settore.
          </p>
        </div>
      </div>
    </section>

    {/* Competenze chirurgiche */}
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Stethoscope className="w-5 h-5" />
          </div>
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">Chirurgia</p>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">
          Competenze chirurgiche
        </h2>
        <p className="font-sans text-muted-foreground text-base leading-relaxed mb-8">
          La mia attività chirurgica copre le principali tecniche della ginecologia moderna:
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "Chirurgia laparoscopica",
              desc: "Per patologia benigna e complessa: miomectomie, isterectomie, trattamento dell'endometriosi e patologie annessiali come cisti ovariche e gravidanze extrauterine.",
            },
            {
              title: "Chirurgia laparotomica",
              desc: "Per patologie ginecologiche come isterectomia e miomectomia — asportazione dei fibromi uterini.",
            },
            {
              title: "Chirurgia robotica Da Vinci",
              desc: 'Tecnica mininvasiva di ultima generazione per la quale ho ricevuto una formazione avanzata "one-to-one" presso l\'Università di Milano-Bicocca.',
            },
            {
              title: "Chirurgia isteroscopica",
              desc: "Diagnostica e operativa per patologie endocavitarie: polipectomie e miomectomie, in regime ambulatoriale e di sala operatoria.",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg text-foreground mb-2">{title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Ecografia */}
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Scan className="w-5 h-5" />
          </div>
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">Diagnostica</p>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
          Ecografia
        </h2>
        <p className="font-sans text-muted-foreground text-base leading-relaxed">
          Eseguo ecografie ostetrica e ginecologica con l'ecografo <strong className="text-foreground">GE Voluson S20</strong>, sistema di imaging di ultima generazione. Sono iscritto alla <strong className="text-foreground">SIEOG</strong> (Società Italiana di Ecografia Ostetrica e Ginecologica).
        </p>
      </div>
    </section>

    {/* PMA */}
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Baby className="w-5 h-5" />
          </div>
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">PMA</p>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
          Medicina della riproduzione
        </h2>
        <p className="font-sans text-muted-foreground text-base leading-relaxed">
          Mi occupo di <strong className="text-foreground">Procreazione Medicalmente Assistita (PMA)</strong>: inquadramento clinico della coppia infertile, monitoraggi, pick-up ovocitario, trasferimento embrionale e gestione multidisciplinare. Lavoro presso il Centro interaziendale pubblico di PMA presso Ospedale Cervello.
        </p>
      </div>
    </section>

    {/* Ricerca e pubblicazioni */}
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <BookOpen className="w-5 h-5" />
          </div>
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">Ricerca</p>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
          Ricerca e pubblicazioni
        </h2>
        <p className="font-sans text-muted-foreground text-base leading-relaxed">
          Ho all'attivo <strong className="text-foreground">13 pubblicazioni scientifiche</strong> su riviste italiane e internazionali, tra cui <em>Clinical Immunology and Immunopathology</em>, <em>International Journal of Surgery Case Reports</em> e <em>Acta Biomedica</em>. Ho partecipato a numerosi congressi nazionali e internazionali come relatore e tutor.
        </p>
      </div>
    </section>

    {/* Il mio approccio */}
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <div className="flex justify-center mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Heart className="w-5 h-5" />
          </div>
        </div>
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3">Filosofia</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
          Il mio approccio
        </h2>
        <p className="font-sans text-muted-foreground text-lg leading-relaxed">
          Credo che la buona medicina inizi dall'ascolto. Ogni paziente porta una storia clinica unica, fatta di sintomi ma anche di preoccupazioni e aspettative. Per questo dedico il tempo necessario all'anamnesi, spiego con chiarezza la diagnosi e le opzioni terapeutiche, e accompagno la paziente nelle decisioni che riguardano la propria salute — con la stessa attenzione che ho sempre portato in sala operatoria.
        </p>
      </div>
    </section>

    {/* CTA */}
    <ContactCTA />
  </div>
);

export default ChiSono;
