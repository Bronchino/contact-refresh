import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import ContactCTA from "@/components/ContactCTA";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Ban,
  Flame,
  Droplets,
  Clock,
  CircleDot,
  Brain,
  CheckCircle2,
  ClipboardList,
  Scan,
  Stethoscope,
} from "lucide-react";

/* ── data ── */

const disorders = [
  { icon: Ban, name: "Amenorrea", desc: "Assenza di mestruazioni per oltre tre mesi consecutivi." },
  { icon: Flame, name: "Dismenorrea", desc: "Dolore pelvico crampiforme durante il flusso mestruale." },
  { icon: Droplets, name: "Menorragia", desc: "Flusso eccessivo (>80 ml) o che dura oltre 7 giorni." },
  { icon: Clock, name: "Oligomenorrea", desc: "Cicli con cadenza superiore ai 36 giorni." },
  { icon: CircleDot, name: "Spotting", desc: "Perdite ematiche intermestruali o irregolari." },
  { icon: Brain, name: "Sindrome Premestruale (SPM)", desc: "Sintomi fisici ed emotivi ricorrenti nella fase luteale." },
];

const causes = [
  "Sindrome dell'ovaio policistico (PCOS)",
  "Endometriosi e adenomiosi",
  "Fibromi uterini e polipi endometriali",
  "Disfunzioni tiroidee (ipotiroidismo, ipertiroidismo)",
  "Stress psico-fisico e variazioni di peso",
  "Alterazioni della coagulazione",
  "Iperprolattinemia",
];

const deepDives = [
  {
    title: "Dismenorrea",
    content:
      "Il dolore pelvico crampiforme può essere legato a un'eccessiva produzione di prostaglandine (dismenorrea primaria) oppure a cause organiche come endometriosi, adenomiosi, fibromi o polipi (dismenorrea secondaria). Non va normalizzato né ignorato.",
  },
  {
    title: "Menorragia",
    content:
      "Flusso superiore a 80 ml per ciclo o che dura oltre 7 giorni. Può indicare squilibri ormonali, fibromi, polipi o alterazioni della coagulazione. È una delle principali cause di anemia sideropenica nella donna fertile.",
  },
  {
    title: "Amenorrea e Oligomenorrea",
    content:
      "L'assenza di mestruazioni per oltre tre mesi o una cadenza superiore ai 36 giorni può essere l'espressione di PCOS, deficit nutrizionale, disfunzioni tiroidee o iperprolattinemia.",
  },
  {
    title: "Ciclo irregolare",
    content:
      "Variazioni frequenti nella durata, intensità e regolarità del ciclo, al di fuori dei periodi fisiologici (adolescenza, perimenopausa), richiedono valutazione per escludere cause ormonali o strutturali.",
  },
  {
    title: "SPM e DDPM",
    content:
      "Irritabilità, gonfiore, cefalea, dolore al seno e alterazioni del tono dell'umore nella fase luteale. Quando i sintomi diventano invalidanti si parla di disturbo disforico premestruale (DDPM), una forma grave e spesso sottodiagnosticata.",
  },
];

const warnings = [
  "Dolore mestruale che richiede antidolorifici o limita le attività quotidiane",
  "Flusso molto abbondante con necessità di cambiare assorbente ogni ora",
  "Assenza di mestruazioni per oltre tre mesi",
  "Perdite ematiche tra un ciclo e l'altro (spotting)",
  "Cambiamenti improvvisi nella durata o nell'intensità del ciclo",
  "Sintomi premestruali che interferiscono con lavoro e relazioni",
];

const steps = [
  { icon: ClipboardList, title: "Anamnesi", desc: "Raccolta dettagliata della storia clinica e mestruale." },
  { icon: Scan, title: "Ecografia pelvica transvaginale", desc: "Valutazione ecografica di utero e ovaie." },
  { icon: Stethoscope, title: "Piano terapeutico personalizzato", desc: "Terapia su misura, farmacologica o chirurgica." },
];

const faqs = [
  {
    q: "È normale avere dolore durante le mestruazioni?",
    a: "Un leggero fastidio può essere fisiologico. Quando il dolore è intenso, richiede antidolorifici o limita le attività quotidiane, non è normale e merita una valutazione ginecologica.",
  },
  {
    q: "Quanti giorni può durare il ciclo mestruale?",
    a: "Tra 21 e 35 giorni, con flusso da 3 a 7 giorni. Valori al di fuori di questo range, se persistenti, vanno valutati.",
  },
  {
    q: "Cosa si intende per ciclo abbondante?",
    a: "Perdita superiore a 80 ml per ciclo, necessità di cambiare assorbente ogni ora o comparsa di coaguli significativi. Può causare anemia sideropenica.",
  },
  {
    q: "Il ciclo irregolare è sempre un problema?",
    a: "Non in adolescenza o perimenopausa. Negli anni fertili centrali può segnalare PCOS, squilibri ormonali o disfunzioni tiroidee.",
  },
  {
    q: "Qual è la differenza tra SPM e DDPM?",
    a: "La SPM comprende sintomi fisici ed emotivi pre-ciclo. Il DDPM è una forma grave con sintomi dell'umore invalidanti che interferiscono con lavoro e relazioni.",
  },
  {
    q: "L'assenza di mestruazioni è sempre una gravidanza?",
    a: "No. Può dipendere da stress, calo di peso, attività fisica intensa, disfunzioni tiroidee, iperprolattinemia o PCOS.",
  },
  {
    q: "Endometriosi e ciclo doloroso: come si distinguono?",
    a: "Si sospetta endometriosi quando il dolore peggiora progressivamente, si estende al di fuori del ciclo, si associa a dispareunia o difficoltà di concepimento.",
  },
  {
    q: "Quando prenotare una visita ginecologica?",
    a: "Se il dolore è invalidante, il flusso molto abbondante, compaiono perdite intermestruali, il ciclo è assente da tre mesi o si notano cambiamenti improvvisi.",
  },
];

/* ── JSON-LD ── */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const medicalPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Disturbi del Ciclo Mestruale: Quando Consultare un Ginecologo",
  description:
    "Guida completa ai disturbi del ciclo mestruale: amenorrea, dismenorrea, menorragia, SPM. Diagnosi e trattamenti a Palermo.",
  author: {
    "@type": "Physician",
    name: "Dott. Claudio Rossi",
    medicalSpecialty: "Ginecologia e Ostetricia",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Marchese Ugo 56",
      addressLocality: "Palermo",
      addressCountry: "IT",
    },
  },
};

/* ── Component ── */

const DisturbidelCiclo = () => (
  <>
    <Helmet>
      <title>Disturbi del Ciclo Mestruale | Dott. Claudio Rossi</title>
      <meta
        name="description"
        content="Amenorrea, dismenorrea, menorragia, ciclo irregolare e SPM: cause, diagnosi e trattamenti. Ginecologo a Palermo – Dott. Claudio Rossi."
      />
      <link rel="canonical" href="https://www.rossiginecologo.it/blog/disturbi-ciclo-mestruale" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Disturbi del Ciclo Mestruale: Quando Consultare un Ginecologo" />
      <meta
        property="og:description"
        content="Guida completa ai disturbi del ciclo mestruale: cause, diagnosi e trattamenti nello studio del Dott. Claudio Rossi a Palermo."
      />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(medicalPageSchema)}</script>
    </Helmet>

    <Header />

    <main className="min-h-screen">
      {/* Hero */}
      <BlogHero
        label="Ginecologia · Ciclo mestruale"
        title="Disturbi del Ciclo Mestruale: Quando Consultare un Ginecologo"
        description="Molte donne convivono con irregolarità mestruali ritenendole normali. Conoscere i segnali è il primo passo per prendersi cura della propria salute."
        breadcrumbLabel="Disturbi del Ciclo"
      />

      {/* Disorders overview */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-10">
            Quali sono i principali disturbi del ciclo mestruale?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {disorders.map(({ icon: Icon, name, desc }) => (
              <Card key={name} className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-start gap-4 p-6">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-8">
            Cause comuni e diagnosi
          </h3>
          <ol className="space-y-4">
            {causes.map((cause, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <p className="text-muted-foreground leading-relaxed pt-1">{cause}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Deep dives */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-10">
            Approfondimenti
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {deepDives.map(({ title, content }, i) => (
              <AccordionItem key={i} value={`deep-${i}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold text-foreground">
                  {title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">{content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Warning signs */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-10">
            Quando consultare il ginecologo
          </h2>
          <ul className="space-y-4" role="list">
            {warnings.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How the visit works */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-12 text-center">
            Come avviene la valutazione nel mio studio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ icon: StepIcon, title, desc }, i) => (
              <div key={i} className="text-center">
                <span className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <StepIcon className="w-7 h-7 text-primary" aria-hidden="true" />
                </span>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  Fase {i + 1}
                </p>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-10">
            Domande frequenti
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold text-foreground">
                  {q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">{a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>

    <ContactCTA />
    <Footer />
  </>
);

export default DisturbidelCiclo;
