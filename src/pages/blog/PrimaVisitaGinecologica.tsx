import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import { Button } from "@/components/ui/button";
import { Calendar, Heart, HelpCircle, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PrimaVisitaGinecologica = () => {
  return (
    <>
      <Helmet>
        <title>Prima Visita Ginecologica: Cosa Aspettarsi e Come Prepararsi | Dott. Rossi Palermo</title>
        <meta name="description" content="Guida completa alla prima visita ginecologica a Palermo: quando farla, il Pap Test, come prepararsi e perché non è dolorosa. Consigli del Dott. Claudio Rossi." />
        <link rel="canonical" href="https://www.rossiginecologo.it/blog/prima-visita-ginecologica" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Prima Visita Ginecologica: Cosa Aspettarsi e Come Prepararsi" />
        <meta property="og:description" content="Guida completa alla prima visita ginecologica a Palermo: quando farla, il Pap Test, come prepararsi e perché non è dolorosa." />
        <meta name="keywords" content="prima visita ginecologica, ginecologo, Pap Test, Palermo, prevenzione, salute donna" />
        <meta name="author" content="Dott. Claudio Rossi" />
        <meta name="pubdate" content="2024-05-22" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-16 sm:py-20 bg-background animate-fade-in">
            <div className="container px-4">
              <BackButton />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="flex items-center">
                        <Home className="h-4 w-4" />
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/blog">Blog</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Prima Visita Ginecologica</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="max-w-4xl mx-auto mt-6">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">
                  Prima visita ginecologica: tutto quello che devi sapere
                </h1>

                <p className="text-xl text-muted-foreground mb-8">
                  La prima visita ginecologica è un momento fondamentale per la salute di ogni donna, eppure è spesso rimandato per timore o imbarazzo. Questa guida nasce per rispondere con chiarezza a tutte le domande che spesso non si ha il coraggio di porre.
                </p>

                <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
                  Che tu abbia 16 anni o 35, qui troverai tutto ciò che ti serve sapere per affrontare la tua <strong>visita ginecologica a Palermo</strong> con estrema serenità.
                </p>

                <div className="prose prose-lg max-w-none">

                  <h2 className="text-3xl font-bold mb-8 text-foreground mt-12 flex items-center gap-3">
                    <Calendar className="h-8 w-8 text-primary" />
                    Quando fare la prima visita ginecologica?
                  </h2>

                  <h3 className="text-2xl font-bold mb-4 text-foreground">Qual è l'età giusta per la prima visita?</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    Le linee guida internazionali raccomandano di effettuare il primo controllo <strong>entro i 21 anni</strong>, oppure <strong>entro un anno dall'inizio dell'attività sessuale</strong>.
                  </p>

                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    Tuttavia, è consigliabile consultare un ginecologo già a <strong>14-16 anni</strong> in caso di:
                  </p>
                  <ul className="text-lg text-foreground/80 mb-8 space-y-3">
                    <li>Ciclo mestruale irregolare, troppo doloroso o assente.</li>
                    <li>Perdite vaginali anomale.</li>
                    <li>Necessità di consulenza sulla contraccezione.</li>
                  </ul>

                  <h3 className="text-2xl font-bold mb-4 text-foreground">Devo aspettare di essere sessualmente attiva?</h3>
                  <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                    <strong>No.</strong> La visita ginecologica è un atto di prevenzione medica. Molte ragazze effettuano il primo controllo prima di avere rapporti sessuali per monitorare il corretto sviluppo dell'apparato riproduttivo.
                  </p>

                  <h2 className="text-3xl font-bold mb-8 text-foreground mt-12 flex items-center gap-3">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    Come prepararsi alla visita ginecologica
                  </h2>

                  <h3 className="text-2xl font-bold mb-6 text-foreground">Consigli pratici per la preparazione</h3>
                  <ul className="text-lg text-foreground/80 mb-8 space-y-5">
                    <li>
                      <strong>Igiene:</strong> Segui la tua normale routine quotidiana. <strong>Evita lavande vaginali</strong> prima della visita perché possono alterare la flora batterica e falsare eventuali esami.
                    </li>
                    <li>
                      <strong>Periodo del ciclo:</strong> È preferibile eseguire la visita <strong>lontano dal flusso mestruale</strong>. Se hai il ciclo, è comunque possibile eseguire un'<strong>ecografia addominale a vescica piena</strong>, ma per un controllo completo è meglio attendere la fine delle perdite.
                    </li>
                    <li>
                      <strong>Documentazione:</strong> Porta con te eventuali esami precedenti e segna la data dell'ultima mestruazione (puoi usare app come <em>Clue</em> o <em>Flo</em>).
                    </li>
                    <li>
                      <strong>Abbigliamento:</strong> Indossa vestiti comodi e facili da togliere.
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold mb-4 text-foreground">Posso portare qualcuno con me?</h3>
                  <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                    Certamente. Molte pazienti scelgono di venire accompagnate dalla mamma, da un'amica o dal partner. La tua privacy è sempre garantita e deciderai tu se farli entrare in studio durante il colloquio o la visita.
                  </p>

                  <h2 className="text-3xl font-bold mb-8 text-foreground mt-12">
                    Cosa succede durante la prima visita: passo dopo passo
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                      <h4 className="text-xl font-bold mb-3 text-foreground">1. Anamnesi (Colloquio)</h4>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        Parleremo della tua storia clinica e familiare. Non ci sono domande sbagliate: ogni dettaglio aiuta a tutelare la tua salute.
                      </p>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                      <h4 className="text-xl font-bold mb-3 text-foreground">2. Visita esterna</h4>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        Il medico controlla i genitali esterni per valutare l'assenza di lesioni o anomalie.
                      </p>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                      <h4 className="text-xl font-bold mb-3 text-foreground">3. Visita interna ed Ecografia</h4>
                      <ul className="text-lg text-foreground/80 space-y-3">
                        <li>
                          <strong>Se sei vergine:</strong> Non si usa lo speculum e non si esegue il Pap Test. Si preferisce l'<strong>ecografia transaddominale</strong> (sulla pancia).
                        </li>
                        <li>
                          <strong>Se sei sessualmente attiva:</strong> Si può utilizzare lo <strong>speculum</strong> per visualizzare il collo dell'utero ed eseguire il Pap Test.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-8 text-foreground mt-12 flex items-center gap-3">
                    <Heart className="h-8 w-8 text-primary" />
                    Fa male la prima visita ginecologica?
                  </h2>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <p className="text-lg text-foreground/80 leading-relaxed mb-0">
                      <strong>No, la visita non deve fare male.</strong> Puoi avvertire una sensazione di pressione, soprattutto se sei tesa. Il segreto è rilassare la muscolatura: un buon ginecologo spiega ogni passaggio e si ferma immediatamente se avverti dolore.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold mb-8 text-foreground mt-12">
                    Il Pap Test e lo screening
                  </h2>

                  <h3 className="text-2xl font-bold mb-4 text-foreground">Quando fare il primo Pap Test?</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    In Italia è raccomandato a partire dai <strong>25 anni</strong>, a patto che si sia già iniziato l'attività sessuale. Il test serve a individuare precocemente lesioni del collo dell'utero.
                  </p>

                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    <strong>Importante:</strong> Per eseguire il Pap Test è necessario l'uso dello speculum e <strong>non deve esserci sangue</strong> (nemmeno spotting di fine ciclo), altrimenti il campione non sarà leggibile.
                  </p>

                  <h3 className="text-2xl font-bold mb-4 text-foreground">Cos'è il Test HPV?</h3>
                  <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                    Dai <strong>30-35 anni</strong>, si utilizza spesso il Test HPV come screening primario ogni 5 anni per rilevare la presenza del Papillomavirus.
                  </p>

                  <h2 className="text-3xl font-bold mb-8 text-foreground mt-12">
                    Il segreto professionale: la tua riservatezza
                  </h2>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <p className="text-lg text-foreground/80 leading-relaxed mb-0">
                      Tutto ciò che dirai al tuo ginecologo è protetto dal <strong>segreto professionale</strong>. Questo vale anche per le <strong>minorenni</strong>: il ginecologo non è obbligato a riferire ai genitori i dettagli del colloquio (come l'attività sessuale o la contraccezione), salvo rischi gravi per la salute.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold mb-8 text-foreground mt-12">
                    Quanto costa la prima visita ginecologica a Palermo?
                  </h2>

                  <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                    Il costo per una visita ginecologica privata a Palermo nel mio studio varia generalmente tra <strong>100 e 160 euro</strong>, a seconda degli esami diagnostici necessari (ecografia, Pap Test, ecc.).
                  </p>

                  <h2 className="text-3xl font-bold mb-8 text-foreground mt-12 flex items-center gap-3">
                    <HelpCircle className="h-8 w-8 text-primary" />
                    FAQ — Domande frequenti
                  </h2>

                  <div className="space-y-5 mb-8">
                    <div className="border-l-4 border-primary/30 pl-5">
                      <h4 className="font-bold text-foreground mb-2 text-lg">A che età si va dal ginecologo per la prima volta?</h4>
                      <p className="text-foreground/80 text-base">Si consiglia entro i 21 anni o dopo il primo rapporto sessuale. In caso di dolori forti, anche a 14 anni.</p>
                    </div>

                    <div className="border-l-4 border-primary/30 pl-5">
                      <h4 className="font-bold text-foreground mb-2 text-lg">Lo speculum fa male?</h4>
                      <p className="text-foreground/80 text-base">Può causare un leggero fastidio, ma non dolore. Non viene usato se la paziente non ha mai avuto rapporti.</p>
                    </div>

                    <div className="border-l-4 border-primary/30 pl-5">
                      <h4 className="font-bold text-foreground mb-2 text-lg">Posso andare dal ginecologo durante il ciclo?</h4>
                      <p className="text-foreground/80 text-base">Sì per un'ecografia addominale, ma è meglio rimandare per una visita completa o se devi fare il Pap Test (che richiede assenza di sangue).</p>
                    </div>

                    <div className="border-l-4 border-primary/30 pl-5">
                      <h4 className="font-bold text-foreground mb-2 text-lg">Devo dire al ginecologo se sono vergine?</h4>
                      <p className="text-foreground/80 text-base">Sì, è fondamentale per permettere al medico di adattare la visita e utilizzare solo l'ecografia transaddominale sulla pancia.</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-8 text-foreground mt-12">
                    Prenota la tua prima visita a Palermo
                  </h2>

                  <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
                    Se desideri un ambiente riservato, professionale e senza giudizi, il mio studio è a tua disposizione.
                  </p>

                  <div className="space-y-5 mb-12">
                    <div className="flex gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground mb-1">Indirizzo</p>
                        <p className="text-foreground/80">Via Marchese Ugo 56, Palermo</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground mb-1">Telefono</p>
                        <a href="tel:0915558609" className="text-primary hover:underline">091 555 8609</a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground mb-1">Prenotazioni</p>
                        <p className="text-foreground/80">Disponibili online tramite la pagina contatti.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-8 rounded-lg text-center">
                    <p className="text-lg text-foreground/80 mb-6">
                      Pronto a prenotare la tua prima visita?
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Button size="lg" asChild>
                        <a href="tel:0915558609" className="gap-2">
                          <Phone className="w-5 h-5" />
                          Chiama ora
                        </a>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <a 
                          href="https://www.miodottore.it/claudio-rossi/ginecologo/palermo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Prenota online
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrimaVisitaGinecologica;
