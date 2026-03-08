import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import ContactCTA from "@/components/ContactCTA";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarIcon, MapPin, Globe, ArrowRight, Baby, Heart, Eye, Ruler, Search, ShieldCheck, Scan } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { format, addWeeks, isAfter, isBefore, subWeeks } from "date-fns";
import { it } from "date-fns/locale";
import { cn } from "@/lib/utils";

const PrimaEcografia = () => {
  const [lmpDate, setLmpDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  const sevenWeeksDate = lmpDate ? addWeeks(lmpDate, 7) : null;
  const elevenWeeksDate = lmpDate ? addWeeks(lmpDate, 11) : null;
  const dueDate = lmpDate ? addWeeks(lmpDate, 40) : null;
  const today = new Date();

  const totalDays = lmpDate
    ? Math.floor((today.getTime() - lmpDate.getTime()) / (24 * 60 * 60 * 1000))
    : null;
  const weeksPregnant = totalDays !== null ? Math.floor(totalDays / 7) : null;
  const daysRemainder = totalDays !== null ? totalDays % 7 : null;

  const canBookNow = sevenWeeksDate && (isAfter(today, sevenWeeksDate) || today.toDateString() === sevenWeeksDate.toDateString());
  const isPastWindow = elevenWeeksDate && isAfter(today, elevenWeeksDate);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Prima Ecografia in Gravidanza a Palermo",
    description: "Quando fare la prima ecografia in gravidanza, cosa si vede, translucenza nucale e tecnologia 3D/4D. Guida completa del Dott. Claudio Rossi, ginecologo a Palermo.",
    author: { "@type": "Person", name: "Dott. Claudio Rossi", jobTitle: "Medico Chirurgo – Specialista in Ginecologia e Ostetricia" },
    publisher: { "@type": "Organization", name: "Studio Ginecologico Dott. Claudio Rossi" },
    datePublished: "2025-03-08",
    mainEntityOfPage: "https://www.rossiginecologo.it/blog/prima-ecografia-gravidanza",
  };

  return (
    <>
      <Helmet>
        <title>Prima Ecografia in Gravidanza Palermo | Dott. Rossi</title>
        <meta name="description" content="Quando fare la prima ecografia in gravidanza, cosa si vede, translucenza nucale e tecnologia 3D/4D. Guida del Dott. Claudio Rossi, ginecologo a Palermo." />
        <link rel="canonical" href="https://www.rossiginecologo.it/blog/prima-ecografia-gravidanza" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Prima Ecografia in Gravidanza a Palermo" />
        <meta property="og:description" content="Quando fare la prima ecografia in gravidanza, cosa si vede, translucenza nucale e tecnologia 3D/4D." />
        <meta name="keywords" content="prima ecografia gravidanza, ecografia datazione, translucenza nucale, ecografia primo trimestre, ginecologo Palermo" />
        <meta name="author" content="Dott. Claudio Rossi" />
        <meta name="pubdate" content="2025-03-08" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <BlogHero
          label="Ostetricia · Ecografia"
          title="Prima Ecografia in Gravidanza a Palermo"
          description="Il primo sguardo sul tuo bambino, con la precisione che merita."
          breadcrumbLabel="Prima Ecografia"
        />

        {/* Calculator */}
        <section className="py-12 sm:py-16 bg-secondary/50">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-2">
                Calcola quando prenotare la tua ecografia
              </h2>
              <p className="text-muted-foreground mb-6">
                Inserisci la data della tua ultima mestruazione e scopri quando sarai alla 7ª settimana, il momento ideale per la prima ecografia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full sm:w-[280px] justify-start text-left font-normal h-12",
                        !lmpDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {lmpDate ? format(lmpDate, "d MMMM yyyy", { locale: it }) : "Data ultima mestruazione"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={lmpDate}
                      onSelect={(date) => {
                        setLmpDate(date);
                        setOpen(false);
                      }}
                      disabled={(date) =>
                        isAfter(date, today) || isBefore(date, subWeeks(today, 42))
                      }
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {lmpDate && sevenWeeksDate && elevenWeeksDate && (
                <div className="mt-6 space-y-4">
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="rounded-xl bg-primary/5 border border-primary/15 p-4">
                      <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1">Età gestazionale</p>
                      <p className="font-serif text-2xl text-foreground">
                        {weeksPregnant !== null && weeksPregnant >= 0
                          ? `${weeksPregnant}+${daysRemainder}`
                          : "—"}
                      </p>
                      {weeksPregnant !== null && weeksPregnant >= 0 && (
                        <p className="text-xs text-muted-foreground mt-1">{weeksPregnant} settimane e {daysRemainder} giorni</p>
                      )}
                    </div>
                    <div className="rounded-xl bg-accent/10 border border-accent/20 p-4">
                      <p className="text-xs font-medium uppercase tracking-wider text-accent-foreground mb-1">7ª settimana il</p>
                      <p className="font-serif text-2xl text-foreground">
                        {format(sevenWeeksDate, "d MMMM yyyy", { locale: it })}
                      </p>
                    </div>
                    <div className="rounded-xl bg-primary/5 border border-primary/15 p-4">
                      <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1">Data presunta parto</p>
                      <p className="font-serif text-2xl text-foreground">
                        {dueDate ? format(dueDate, "d MMMM yyyy", { locale: it }) : "—"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">40ª settimana</p>
                    </div>
                  </div>

                  {isPastWindow ? (
                    <div className="rounded-xl bg-destructive/10 border border-destructive/20 p-4">
                      <p className="text-sm text-destructive font-medium">
                        La finestra ideale per la prima ecografia (7ª–11ª settimana) potrebbe essere già trascorsa. Ti consiglio di prenotare una visita il prima possibile.
                      </p>
                    </div>
                  ) : canBookNow ? (
                    <div className="rounded-xl bg-primary/10 border border-primary/20 p-4">
                      <p className="text-sm text-primary font-medium">
                        ✓ Sei nel periodo ideale per la prima ecografia! Prenota adesso la tua visita.
                      </p>
                    </div>
                  ) : (
                    <div className="rounded-xl bg-primary/5 border border-primary/15 p-4">
                      <p className="text-sm text-primary font-medium">
                        Potrai prenotare la tua prima ecografia a partire dal {format(sevenWeeksDate, "d MMMM yyyy", { locale: it })}. Segna questa data!
                      </p>
                    </div>
                  )}

                  <Button variant="default" size="lg" asChild className="w-full sm:w-auto">
                    <a
                      href="https://www.miodottore.it/claudio-rossi/ginecologo/palermo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      Prenota su MioDottore
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-16">

            {/* Intro */}
            <section className="prose-section">
              <p className="text-lg text-muted-foreground leading-relaxed">
                La scoperta di una gravidanza porta con sé emozioni intense e molte domande. La prima ecografia ostetrica è il momento in cui la gravidanza prende forma concreta: non solo un'immagine attesa con il cuore, ma soprattutto un accertamento clinico fondamentale per iniziare il percorso di monitoraggio nel modo giusto.
              </p>
            </section>

            {/* Quando si esegue */}
            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">Quando si esegue la prima ecografia in gravidanza</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  La prima ecografia, detta anche <strong className="text-foreground">ecografia di datazione</strong>, è indicata idealmente tra la <strong className="text-foreground">7ª e l'11ª settimana di amenorrea</strong>. In questa finestra temporale l'esame fornisce il massimo delle informazioni clinicamente rilevanti: le strutture embrionali sono già visualizzabili con chiarezza e la datazione della gravidanza risulta precisa.
                </p>
                <p>
                  Eseguire l'ecografia troppo precocemente — prima della 6ª settimana — può restituire immagini ancora incomplete, con il rischio di generare ansie non giustificate. Al contrario, attendere fino alle 11–13 settimane permette di integrare la valutazione ecografica con la misurazione della translucenza nucale, un parametro di screening di grande importanza clinica.
                </p>
                <p>
                  In presenza di sintomi specifici (dolori pelvici, perdite ematiche, anamnesi di gravidanze extrauterine) il ginecologo può indicare un'ecografia anticipata rispetto a questa finestra.
                </p>
              </div>
            </section>

            {/* Obiettivi diagnostici */}
            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">Obiettivi diagnostici dell'ecografia del primo trimestre</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                L'ecografia del primo trimestre non è un semplice "controllo". È un esame strutturato che persegue obiettivi precisi:
              </p>

              <div className="grid gap-6">
                {[
                  {
                    icon: MapPin,
                    title: "Localizzazione della gravidanza",
                    text: "Il primo accertamento riguarda la sede della camera gestazionale: deve essere intrauterina. L'esclusione di una gravidanza ectopica (extrauterina) è una priorità clinica assoluta, in quanto rappresenta una condizione che richiede intervento tempestivo.",
                  },
                  {
                    icon: Heart,
                    title: "Vitalità embrionaria",
                    text: "Viene rilevata l'attività cardiaca dell'embrione, il segnale più importante della sua vitalità. A partire dalle 6 settimane è già possibile visualizzare il \"battito\" attraverso la sonda transvaginale.",
                  },
                  {
                    icon: Ruler,
                    title: "Datazione della gestazione",
                    text: "La misurazione del CRL (Crown-Rump Length, lunghezza vertice-sacro) consente di calcolare con precisione l'epoca gestazionale e stabilire la data presunta del parto (DPP), indipendentemente dalla certezza sulla data dell'ultimo ciclo mestruale.",
                  },
                  {
                    icon: Baby,
                    title: "Diagnosi di zigoticità in caso di gravidanza multipla",
                    text: "Quando sono presenti più embrioni, l'ecografia definisce la corionicità (numero di placente) e l'amnionicità (numero di sacchi amniotici), parametri fondamentali per la gestione delle gravidanze gemellari.",
                  },
                  {
                    icon: Search,
                    title: "Valutazione dell'utero e degli annessi",
                    text: "L'esame include una valutazione morfologica dell'utero (presenza di fibromi, malformazioni uterine) e delle ovaie, elementi che possono influenzare il decorso della gravidanza.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-foreground mb-2">{title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Translucenza Nucale */}
            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">Translucenza Nucale e Test Combinato (Bitest)</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Tra le <strong className="text-foreground">11 e le 13 settimane + 6 giorni</strong>, l'ecografia del primo trimestre può essere integrata con la misurazione della <strong className="text-foreground">translucenza nucale (TN)</strong>: una piccola raccolta di liquido presente fisiologicamente sotto la cute della nuca del feto, il cui spessore è correlato al rischio di anomalie cromosomiche.
                </p>
                <p>
                  La misurazione della TN, associata al dosaggio ematico di <strong className="text-foreground">β-hCG libera</strong> e <strong className="text-foreground">PAPP-A</strong> (proteina plasmatica A associata alla gravidanza), costituisce il <strong className="text-foreground">test combinato del primo trimestre</strong>, noto come <strong className="text-foreground">Bitest</strong> o <em>ultrascreening</em>. Si tratta di un test di screening non invasivo — non diagnostico — che fornisce una stima personalizzata del rischio di sindrome di Down (trisomia 21), trisomia 18 e trisomia 13.
                </p>
                <p>
                  In caso di risultato a rischio aumentato, possono essere proposti approfondimenti diagnostici come il <strong className="text-foreground">test del DNA fetale (NIPT)</strong>, la villocentesi o l'amniocentesi.
                </p>
                <p>
                  La misurazione della translucenza nucale richiede un'esperienza operatore-specifica certificata e una strumentazione ad alta risoluzione.
                </p>
              </div>
            </section>

            {/* Tecnologia 3D/4D */}
            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">Tecnologia avanzata: ecografia 3D/4D con GE Voluson S20</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Il nostro studio è dotato del sistema ecografico <strong className="text-foreground">GE Voluson S20</strong>, una delle piattaforme di imaging ostetrico-ginecologico più avanzate attualmente disponibili. Grazie alla tecnologia <strong className="text-foreground">3D e 4D</strong>, è possibile ottenere ricostruzioni volumetriche del feto in tempo reale, con una qualità di immagine che va oltre lo standard bidimensionale.
                </p>
                <p>
                  L'ecografia 4D permette di osservare i movimenti del feto, le espressioni facciali e la morfologia superficiale con un livello di dettaglio eccezionale. Oltre all'aspetto emotivo — che per molti genitori è un momento indimenticabile — questa tecnologia offre un supporto diagnostico aggiuntivo nella valutazione di strutture anatomiche complesse.
                </p>
                <p>
                  L'ecografia 3D/4D non sostituisce l'ecografia morfologica standard, ma la integra con una visualizzazione spaziale che può essere utile in specifici contesti clinici.
                </p>
              </div>
            </section>

            {/* Come si svolge */}
            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">Come si svolge l'esame: modalità e preparazione</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Scan className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-3">Ecografia transvaginale</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    È la metodica d'elezione nelle prime settimane di gravidanza. La sonda, introdotta in vagina, è posizionata molto vicina all'utero e garantisce immagini ad alta risoluzione anche quando l'embrione è ancora molto piccolo. È un esame indolore e privo di rischi.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-3">Ecografia transaddominale</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Viene eseguita con una sonda applicata esternamente sull'addome. È preferibile dopo le 11–12 settimane, quando il feto ha dimensioni sufficienti per essere visualizzato con nitidezza dall'esterno. Per questa modalità si consiglia di presentarsi all'esame con la <strong className="text-foreground">vescica moderatamente piena</strong>.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground leading-relaxed text-sm">
                In entrambi i casi, l'esame è completamente sicuro, non utilizza radiazioni ionizzanti e non comporta alcun rischio per la madre né per l'embrione.
              </p>
            </section>

            {/* Tabella ecografie */}
            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">Le ecografie nel percorso della gravidanza fisiologica</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La prima ecografia è il punto di partenza di un percorso strutturato. Nel corso di una gravidanza fisiologica sono previste almeno tre ecografie di riferimento:
              </p>
              <div className="rounded-xl border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary/5">
                      <TableHead className="font-serif text-foreground">Epoca</TableHead>
                      <TableHead className="font-serif text-foreground">Esame</TableHead>
                      <TableHead className="font-serif text-foreground">Obiettivo principale</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium text-foreground">7ª–13ª settimana</TableCell>
                      <TableCell className="text-muted-foreground">Prima ecografia / Datazione</TableCell>
                      <TableCell className="text-muted-foreground">Vitalità, sede, datazione, TN</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-foreground">20ª–22ª settimana</TableCell>
                      <TableCell className="text-muted-foreground">Ecografia morfologica</TableCell>
                      <TableCell className="text-muted-foreground">Anatomia fetale, screening malformazioni</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-foreground">30ª–34ª settimana</TableCell>
                      <TableCell className="text-muted-foreground">Ecografia biometrica</TableCell>
                      <TableCell className="text-muted-foreground">Crescita fetale, placenta, liquido amniotico</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Ulteriori controlli ecografici possono essere prescritti su indicazione clinica specifica.
              </p>
            </section>

            {/* CTA finale */}
            <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4">Prenota la tua prima ecografia a Palermo</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Se hai appena scoperto di essere in gravidanza o desideri iniziare un percorso di monitoraggio ostetrico specialistico, sono a tua disposizione per una <strong className="text-foreground">visita ostetrica con ecografia del primo trimestre</strong> presso il mio studio di Palermo.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ogni visita prevede tempo dedicato all'esame, alla spiegazione dei risultati e alla risposta a tutte le tue domande — senza fretta.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Via Marchese Ugo 56, Palermo</span>
                <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> rossiginecologo.it</span>
              </div>
              <Button variant="default" size="lg" asChild>
                <a
                  href="https://www.miodottore.it/claudio-rossi/ginecologo/palermo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  Prenota online su MioDottore
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </section>

          </div>
        </article>

        <ContactCTA />
        <Footer />
      </div>
    </>
  );
};

export default PrimaEcografia;
