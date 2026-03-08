import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Calendar, Heart, HelpCircle, CheckCircle, Home } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PrimaVisitaGinecologica = () => {
  return (
    <>
      <Helmet>
        <title>Prima Visita Ginecologica: Cosa Aspettarsi e Come Prepararsi | Dott. Rossi Palermo</title>
        <meta name="description" content="Guida completa alla prima visita ginecologica a Palermo: quando farla, il Pap Test, come prepararsi e perché non è dolorosa." />
        <link rel="canonical" href="https://www.rossiginecologo.it/blog/prima-visita-ginecologica" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Prima Visita Ginecologica: Cosa Aspettarsi e Come Prepararsi" />
        <meta property="og:description" content="Guida completa alla prima visita ginecologica: quando farla, come prepararsi, Pap Test e informazioni pratiche." />
        <meta name="keywords" content="prima visita ginecologica, ginecologo, Pap Test, Palermo, prevenzione, salute donna" />
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
                  Prima Visita Ginecologica: Cosa Aspettarsi e Come Prepararsi
                </h1>

                <p className="text-xl text-muted-foreground mb-12">
                  Guida completa per affrontare la tua prima visita ginecologica con serenità. Quando farla, come prepararsi e tutto quello che devi sapere.
                </p>

                <div className="prose prose-lg max-w-none">
                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <p className="text-lg text-foreground/80 leading-relaxed mb-0">
                      La prima visita ginecologica è un momento importante nella vita di ogni donna, eppure è spesso rimandato per timore, imbarazzo o semplicemente perché non si sa cosa aspettarsi. Questa guida è nata proprio per questo: rispondere con chiarezza a tutte le domande che si fanno — ma spesso non si osano fare — prima di entrare nello studio di un ginecologo.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold mb-6 text-foreground mt-8 flex items-center gap-3">
                    <Calendar className="h-7 w-7 text-primary" />
                    Quando Fare la Prima Visita Ginecologica
                  </h2>

                  <h3 className="text-xl font-bold mb-4 text-foreground">Qual è l'età giusta?</h3>
                  <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                    Non esiste un'età "ufficiale", ma le linee guida internazionali raccomandano di effettuare la prima visita ginecologica entro i 21 anni, oppure entro un anno dall'inizio dell'attività sessuale, se questa avviene prima.
                  </p>

                  <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                    In molti casi è consigliabile andare dal ginecologo anche prima, già a partire dai 14-16 anni, nei seguenti casi:
                  </p>
                  <ul className="text-lg text-foreground/80 mb-6 space-y-2">
                    <li>Ciclo mestruale irregolare o assente</li>
                    <li>Dolori mestruali molto forti (dismenorrea)</li>
                    <li>Perdite vaginali anomale</li>
                    <li>Dubbi sulla contraccezione</li>
                    <li>Ansia o preoccupazioni legate alla sfera ginecologica</li>
                  </ul>

                  <h3 className="text-xl font-bold mb-4 text-foreground">Devo aspettare di essere sessualmente attiva?</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    <strong>No.</strong> La visita ginecologica non ha nulla a che fare con l'attività sessuale. È una visita medica di prevenzione, esattamente come andare dal dentista o dall'oculista. Molte ragazze effettuano la prima visita prima ancora di avere rapporti sessuali, semplicemente per monitorare la propria salute.
                  </p>

                  <h2 className="text-2xl font-bold mb-6 text-foreground mt-8 flex items-center gap-3">
                    <CheckCircle className="h-7 w-7 text-primary" />
                    Come Prepararsi alla Prima Visita
                  </h2>

                  <h3 className="text-xl font-bold mb-4 text-foreground">Devo fare qualcosa di speciale?</h3>
                  <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                    La preparazione è semplice:
                  </p>
                  <ul className="text-lg text-foreground/80 mb-6 space-y-4">
                    <li>
                      <strong>Igiene normale</strong> — Fai la tua igiene quotidiana abituale. Non è necessario né consigliato fare lavande vaginali prima della visita: alterano la flora batterica naturale e possono falsare alcuni esami.
                    </li>
                    <li>
                      <strong>Periodo del ciclo</strong> — La visita ginecologica è preferibile eseguirla lontano dal flusso mestruale. Durante il ciclo è comunque possibile eseguire un'ecografia addominale a vescica piena.
                    </li>
                    <li>
                      <strong>Cosa portare</strong> — Porta con te eventuali esami precedenti, la lista dei farmaci che assumi e, se ce l'hai, un diario del ciclo mestruale con le date degli ultimi 3 mesi.
                    </li>
                    <li>
                      <strong>Cosa indossare</strong> — Vestiti comodi, facili da togliere. Non è necessario nulla di particolare.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mb-4 text-foreground">Posso portare qualcuno con me?</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    Assolutamente sì. Molte ragazze alla prima visita vengono accompagnate dalla mamma, da un'amica o dal partner. Lo studio è un ambiente riservato e la tua privacy è sempre garantita. Decidi tu chi vuoi avere accanto.
                  </p>

                  <h2 className="text-2xl font-bold mb-6 text-foreground mt-8">
                    Cosa Succede Durante la Visita
                  </h2>

                  <h3 className="text-xl font-bold mb-4 text-foreground">Come si svolge passo per passo</h3>
                  <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                    Una visita ginecologica completa si svolge in tre fasi:
                  </p>

                  <div className="bg-primary/5 p-6 rounded-lg mb-6">
                    <h4 className="text-lg font-bold mb-2 text-foreground">1. Anamnesi (colloquio iniziale)</h4>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Il ginecologo ti farà alcune domande sulla tua storia clinica: l'età della prima mestruazione, la regolarità del ciclo, eventuali sintomi o disturbi, la tua storia familiare, l'uso di contraccettivi. Non ci sono domande giuste o sbagliate — ogni informazione serve a capire meglio la tua salute. Parla liberamente e senza imbarazzo.
                    </p>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-lg mb-6">
                    <h4 className="text-lg font-bold mb-2 text-foreground">2. Visita esterna</h4>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Il medico effettua un esame esterno dei genitali per valutare l'aspetto generale e la presenza di eventuali lesioni o anomalie visibili. È veloce e indolore.
                    </p>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-lg mb-6">
                    <h4 className="text-lg font-bold mb-2 text-foreground">3. Visita interna (se appropriata)</h4>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Nei casi in cui sia indicata, viene effettuata una visita bimanuale — il medico posiziona due dita in vagina e con l'altra mano valuta dall'esterno l'utero e le ovaie. Nelle ragazze giovani o vergini, questa parte può essere omessa o sostituita dall'ecografia transaddominale.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-foreground">Quanto dura la visita?</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    Una prima visita ginecologica completa dura generalmente 20-30 minuti. È più lunga delle visite successive perché include il colloquio iniziale approfondito e la raccolta della storia clinica.
                  </p>

                  <h2 className="text-2xl font-bold mb-6 text-foreground mt-8 flex items-center gap-3">
                    <Heart className="h-7 w-7 text-primary" />
                    Fa Male la Prima Visita Ginecologica?
                  </h2>

                  <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                    Questa è la domanda che quasi tutte fanno — e che in pochi rispondono con onestà.
                  </p>

                  <div className="bg-muted/30 p-6 rounded-lg mb-6">
                    <p className="text-lg text-foreground/80 leading-relaxed mb-0">
                      <strong>La visita ginecologica non dovrebbe fare male.</strong> Può causare un leggero fastidio o una sensazione di pressione, soprattutto se si è tese o in apprensione, ma non è dolorosa.
                    </p>
                  </div>

                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    Il modo migliore per rendere la visita più confortevole è cercare di rilassarsi: la tensione muscolare aumenta il disagio. Un buon ginecologo lavora sempre con calma, spiega ogni passaggio prima di eseguirlo e si ferma se avverti dolore.
                  </p>

                  <h2 className="text-2xl font-bold mb-6 text-foreground mt-8">
                    Il Pap Test: Quando Iniziare
                  </h2>

                  <h3 className="text-xl font-bold mb-4 text-foreground">Quando fare il primo Pap Test?</h3>
                  <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                    Le linee guida italiane raccomandano di effettuare il primo Pap Test a 25 anni, indipendentemente dall'inizio dell'attività sessuale. Dopo il primo esame negativo, va ripetuto ogni 3 anni.
                  </p>

                  <h3 className="text-xl font-bold mb-4 text-foreground">Cos'è il Test HPV?</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    Il Test HPV rileva la presenza del Papillomavirus umano, principale causa del tumore del collo dell'utero. A partire dai 30-35 anni, nelle donne già seguite con Pap Test, può essere utilizzato come test di screening primario ogni 5 anni.
                  </p>

                  <h2 className="text-2xl font-bold mb-6 text-foreground mt-8">
                    Contraccezione e Salute Riproduttiva
                  </h2>

                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    La prima visita è il momento ideale per parlare di contraccezione senza fretta e senza giudizi. Il ginecologo ti aiuterà a valutare il metodo più adatto alla tua situazione: pillola, cerotto, anello vaginale, spirale o preservativo.
                  </p>

                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    Non esistono domande stupide su questo tema. Una contraccezione scelta consapevolmente è più efficace e meglio tollerata.
                  </p>

                  <h2 className="text-2xl font-bold mb-6 text-foreground mt-8 flex items-center gap-3">
                    <HelpCircle className="h-7 w-7 text-primary" />
                    Domande Frequenti
                  </h2>

                  <div className="space-y-4 mb-8">
                    <div className="border-l-4 border-primary/30 pl-4">
                      <h4 className="font-bold text-foreground mb-2">A che età si va dal ginecologo per la prima volta?</h4>
                      <p className="text-foreground/80">Non esiste un'età obbligatoria, ma si consiglia entro i 21 anni o entro un anno dall'inizio dell'attività sessuale. In presenza di disturbi del ciclo o altri sintomi, è opportuno andare anche prima.</p>
                    </div>

                    <div className="border-l-4 border-primary/30 pl-4">
                      <h4 className="font-bold text-foreground mb-2">La prima visita ginecologica fa male?</h4>
                      <p className="text-foreground/80">No, non dovrebbe fare male. Può esserci un leggero fastidio, soprattutto se si è tese, ma non è un'esperienza dolorosa. Rilassarsi e comunicare apertamente con il medico aiuta molto.</p>
                    </div>

                    <div className="border-l-4 border-primary/30 pl-4">
                      <h4 className="font-bold text-foreground mb-2">Bisogna essere sessualmente attiva?</h4>
                      <p className="text-foreground/80">No. La visita ginecologica è indipendente dall'attività sessuale. Si può — e si dovrebbe — andare dal ginecologo anche prima di avere rapporti.</p>
                    </div>

                    <div className="border-l-4 border-primary/30 pl-4">
                      <h4 className="font-bold text-foreground mb-2">Posso andare durante il ciclo?</h4>
                      <p className="text-foreground/80">La visita è preferibile eseguirla lontano dal flusso mestruale. Durante il ciclo è comunque possibile eseguire un'ecografia addominale a vescica piena.</p>
                    </div>

                    <div className="border-l-4 border-primary/30 pl-4">
                      <h4 className="font-bold text-foreground mb-2">Devo dire al ginecologo se sono vergine?</h4>
                      <p className="text-foreground/80">È utile comunicarlo, non per giudizio ma perché permette al medico di adattare la visita — ad esempio evitando lo speculum o preferendo l'ecografia transaddominale.</p>
                    </div>

                    <div className="border-l-4 border-primary/30 pl-4">
                      <h4 className="font-bold text-foreground mb-2">Il segreto professionale è garantito?</h4>
                      <p className="text-foreground/80">Sì. Il medico è vincolato per legge al segreto professionale. Tutto quello che dici rimane riservato, anche se sei minorenne. Puoi parlare liberamente di qualsiasi argomento.</p>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-lg mt-12 text-center">
                    <p className="text-lg text-foreground/80 mb-4">
                      Hai ancora dubbi o vuoi prenotare la tua prima visita ginecologica a Palermo?
                    </p>
                    <Button size="lg" asChild>
                      <a 
                        href="https://www.miodottore.it/claudio-rossi/ginecologo/palermo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Prenota una visita
                      </a>
                    </Button>
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
