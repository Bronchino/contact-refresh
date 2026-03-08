import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import ContactCTA from "@/components/ContactCTA";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ShieldCheck,
  Syringe,
  FileSearch,
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  Microscope,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

/* ── FAQ data ── */

const faqs = [
  {
    q: "Cos'è il ThinPrep e in cosa si differenzia dal Pap test convenzionale?",
    a: "Il ThinPrep è un'evoluzione del Pap test tradizionale. Il prelievo avviene con un'unica spazzolina che raccoglie cellule sia dalla superficie esterna che dal canale cervicale, immergendola poi in un liquido di conservazione invece di strisciare il campione su un vetrino. Questo metodo garantisce una qualità del campione superiore, una lettura più chiara al microscopio e una riduzione degli errori. Il risultato diagnostico è equivalente al Pap test convenzionale, ma con minor rischio di campioni non adeguati.",
  },
  {
    q: "Cos'è il co-testing e a chi è indicato?",
    a: "Il co-testing consiste nell'eseguire contemporaneamente il Pap test e l'HPV test sullo stesso campione, combinando l'alta specificità del primo con l'alta sensibilità del secondo. È l'approccio diagnostico più accurato disponibile, ma non è raccomandato in modo routinario per tutta la popolazione. Viene utilizzato principalmente nel follow-up di pazienti con pregressi di lesioni cervicali o in situazioni cliniche particolari valutate dal ginecologo.",
  },
  {
    q: "A che età si inizia a fare il Pap test?",
    a: "In Italia il programma di screening pubblico inizia a 25 anni. Prima di questa età, in assenza di sintomi o situazioni particolari, lo screening non è raccomandato dalle linee guida nazionali. Tuttavia, donne che hanno avuto il primo rapporto in giovane età o con fattori di rischio specifici possono valutare con il proprio ginecologo un controllo anticipato.",
  },
  {
    q: "Il Pap test fa male?",
    a: "No. Nella stragrande maggioranza dei casi il Pap test è indolore o causa al massimo un lieve fastidio passeggero. L'esame dura pochi secondi.",
  },
  {
    q: "Posso fare il Pap test durante il ciclo mestruale?",
    a: "È preferibile evitarlo: la presenza di sangue può ridurre la qualità del campione e rendere difficile l'interpretazione. Il momento ideale è a metà ciclo, circa 10-20 giorni dall'inizio delle mestruazioni. In ogni caso, almeno 3-5 giorni dopo la fine del flusso.",
  },
  {
    q: "Fare il Pap test più spesso di quanto raccomandato offre maggiore protezione?",
    a: "No. Le cadenze raccomandate — ogni 3 anni per il Pap test, ogni 5 per il test HPV — sono il risultato di studi su milioni di donne. Le lesioni precancerose si sviluppano molto lentamente, quindi eseguire il test ogni anno non aumenta la protezione ma espone a falsi positivi, ansia inutile e possibili sovratrattamenti. Esistono però situazioni in cui un follow-up più ravvicinato è appropriato: una lesione precedente trattata, un'infezione HPV persistente ad alto rischio o una condizione di immunodepressione. In questi casi il ginecologo definirà una cadenza personalizzata.",
  },
  {
    q: "Essere positive all'HPV significa che c'è stato un tradimento?",
    a: "No. L'HPV può restare silente per anni o decenni prima di essere rilevato. Una positività oggi non permette di risalire al momento del contagio né alla fonte. È un'infezione molto comune che colpisce la maggior parte delle persone sessualmente attive nel corso della vita.",
  },
  {
    q: "Anche le donne vaccinate contro l'HPV devono fare lo screening?",
    a: "Sì, assolutamente. Il vaccino protegge dai ceppi più pericolosi (HPV 16 e 18) ma non da tutti. Lo screening rimane indispensabile anche nelle donne vaccinate.",
  },
  {
    q: "Se il test HPV è negativo, quando faccio il prossimo controllo?",
    a: "Se sei in fascia 30-64 anni e il test HPV è negativo, le linee guida prevedono il prossimo controllo tra 5 anni. Un risultato negativo garantisce una protezione molto elevata in questo intervallo. Il tuo ginecologo valuterà se esistono motivi per un follow-up più ravvicinato.",
  },
  {
    q: "Cos'è la colposcopia e quando si esegue?",
    a: "La colposcopia è un esame di approfondimento che si esegue quando il Pap test o il test HPV mostrano alterazioni. Permette di osservare il collo dell'utero con un colposcopio (strumento ottico ingrandente) usando coloranti specifici — acido acetico e soluzione di Lugol — per evidenziare aree anomale. Se necessario, il medico esegue immediatamente una biopsia mirata nello stesso momento. L'esame non è doloroso e si svolge in ambulatorio.",
  },
  {
    q: "Posso fare il Pap test o il test HPV privatamente a Palermo?",
    a: "Sì. È possibile eseguire entrambi gli esami privatamente presso il mio studio in Via Marchese Ugo 56, Palermo, senza lista d'attesa e con refertazione rapida. La visita privata è utile anche per donne under 25 o over 64 che non rientrano nei criteri del programma pubblico, o per chi desidera un controllo aggiuntivo.",
  },
];

/* ── JSON-LD ── */

const canonical = "https://www.rossiginecologo.it/pap-test-hpv";
const pageTitle = "Pap Test e HPV DNA Test a Palermo | Prevenzione Tumore Collo dell'Utero — Dott. Claudio Rossi";
const pageDescription = "Pap test, HPV DNA test e colposcopia a Palermo. Il Dott. Claudio Rossi, ginecologo, offre percorsi di screening personalizzati per la prevenzione del tumore del collo dell'utero.";

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": canonical,
      url: canonical,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "it",
      about: [
        { "@type": "MedicalTest", name: "Pap Test" },
        { "@type": "MedicalTest", name: "HPV DNA Test" },
        { "@type": "MedicalTest", name: "Colposcopia" },
        { "@type": "MedicalCondition", name: "Tumore del collo dell'utero" },
      ],
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
        url: "https://www.rossiginecologo.it",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

/* ── Preparation list ── */
const preparation = [
  "Evitare rapporti sessuali nelle 48 ore precedenti l'esame.",
  "Non utilizzare tamponi interni, lavande o creme vaginali nelle 48 ore precedenti.",
  "Non effettuare l'esame durante il ciclo mestruale, né nei giorni immediatamente precedenti o successivi, e in assenza di perdite ematiche.",
  "Il momento ideale è a metà ciclo, circa 10-20 giorni dall'inizio delle mestruazioni.",
];

/* ── Comparison table data ── */
const comparisonRows = [
  { label: "Cosa rileva", pap: "Alterazioni cellulari già presenti", hpv: "DNA del virus HPV (prima delle alterazioni)" },
  { label: "Obiettivo", pap: "Diagnosi di lesioni esistenti", hpv: "Identificazione del rischio futuro" },
  { label: "Fascia d'età", pap: "25–30 anni", hpv: "30–64 anni" },
  { label: "A chi si applica", pap: "Non vaccinate o vaccinate dopo i 15 anni", hpv: "Tutte le donne, indipendentemente dallo stato vaccinale" },
  { label: "Frequenza consigliata", pap: "Ogni 3 anni", hpv: "Ogni 5 anni" },
  { label: "Sensibilità", pap: "Alta", hpv: "Molto alta" },
];

/* ── Reasons to screen ── */
const screeningReasons = [
  "Identificare infezioni da HPV attive, personalizzando frequenza e tipo di esami in base al rischio individuale",
  "Individuare precocemente qualsiasi anomalia al collo dell'utero, intervenendo prima che la lesione progredisca verso forme invasive",
  "Ridurre significativamente l'incidenza dei tumori avanzati alla cervice uterina e la mortalità associata",
];

/* ── Risk factors ── */
const riskFactors = [
  "Primo rapporto sessuale in giovane età",
  "Partner con diagnosi di HPV o condilomi",
  "Storia di infezioni genitali ricorrenti",
  "Sistema immunitario compromesso",
  "Risultati anomali a precedenti Pap test o test HPV",
  "Donne non ancora entrate nel programma di screening pubblico",
  "Donne under 25 o over 64 che desiderano un controllo personalizzato",
];

/* ── Private advantages ── */
const privateAdvantages = [
  "Appuntamento in tempi brevi, senza liste d'attesa",
  "Visita dedicata, con il tempo necessario per rispondere a ogni domanda",
  "Refertazione rapida e comunicazione diretta del risultato",
  "Continuità di cura: lo stesso ginecologo che esegue il prelievo segue l'eventuale approfondimento",
  "Accesso indipendente dall'età: utile per under 25 o over 64 fuori dai criteri del programma pubblico",
];

/* ── Component ── */

const PapTestHpv = () => (
  <>
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="it_IT" />
      <script type="application/ld+json">{JSON.stringify(jsonLdGraph)}</script>
    </Helmet>

    <Header />

    <main className="min-h-screen">
      {/* Hero */}
      <BlogHero
        label="Prevenzione · Screening cervicale"
        title="Pap Test e HPV DNA Test: La Tua Guida alla Prevenzione del Tumore del Collo dell'Utero"
        description="La prevenzione ginecologica è l'alleato più potente per la salute della donna. Oggi, grazie a esami mirati come il Pap Test e l'HPV DNA Test, è possibile identificare precocemente eventuali anomalie e intervenire prima che possano trasformarsi in patologie serie."
        breadcrumbLabel="Pap Test e HPV"
      />

      {/* Intro + Stats */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Nel mio studio ginecologico a Palermo offro percorsi di screening personalizzati, con un ambiente accogliente e strumentazioni all'avanguardia.
          </p>
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 sm:p-8">
            <p className="text-foreground leading-relaxed">
              In Italia nel 2024 sono state stimate circa <strong>2.382 nuove diagnosi</strong> di tumore alla cervice uterina. La sopravvivenza media a 5 anni dalla diagnosi è del <strong>68%</strong>, ma questi numeri migliorano drasticamente quando il tumore viene individuato precocemente. Oggi quasi <strong>50.000 donne</strong> convivono con una pregressa diagnosi: la prevenzione attiva può evitare che questo numero continui a crescere.
            </p>
          </div>
        </div>
      </section>

      {/* Cos'è il Pap Test */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">Cos'è il Pap Test?</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Il Pap Test (test di Papanicolaou) è un esame citologico di screening il cui obiettivo è individuare alterazioni nelle cellule del collo dell'utero (cervice) che potrebbero indicare la presenza di lesioni precancerose o tumorali.
          </p>

          <h3 className="font-serif text-xl text-foreground mb-4">Come si esegue?</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            L'esame è rapido e generalmente indolore. Durante la visita ginecologica il medico utilizza uno strumento chiamato <strong>speculum</strong> per divaricare il canale vaginale e prelevare alcune cellule dalla cervice con una spatola e uno spazzolino conico. Il materiale raccolto viene posto su vetrino e analizzato al microscopio per identificare eventuali alterazioni cellulari. Le linee guida italiane raccomandano il Pap test ogni 3 anni alle donne tra i 25 e i 30 anni non vaccinate contro l'HPV o vaccinate dopo i 15 anni.
          </p>

          <h3 className="font-serif text-xl text-foreground mb-4">Come prepararsi all'esame</h3>
          <ul className="space-y-3" role="list">
            {preparation.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Il Ruolo del Virus HPV */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">Il Ruolo del Virus HPV</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Il principale responsabile del tumore del collo dell'utero è l'<strong>HPV (Human Papillomavirus)</strong>, una famiglia di oltre 200 tipi di virus che colpisce la pelle e le mucose. L'infezione si trasmette prevalentemente per via sessuale ed è estremamente comune: la maggior parte delle persone sessualmente attive entra in contatto con il virus almeno una volta nella vita.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Gli HPV si distinguono in due gruppi principali: i <strong>ceppi a basso rischio</strong>, che non sono associati allo sviluppo di tumori, e i <strong>ceppi ad alto rischio</strong>, in particolare HPV 16 e HPV 18, responsabili di circa il 70% dei tumori del collo dell'utero. Questi ceppi possono essere collegati anche ad altri tumori: ano, vagina, pene, bocca e gola.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            La buona notizia è che nel <strong>60-90% dei casi</strong> il sistema immunitario elimina il virus spontaneamente entro 1-2 anni dal contagio, anche quando si tratta di ceppi ad alto rischio. Solo nella quota rimanente, se non monitorata, l'infezione può evolvere lentamente verso lesioni precancerose o un tumore cervicale.
          </p>

          <h3 className="font-serif text-xl text-foreground mb-4">Vaccinazione HPV</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            L'unico metodo per prevenire l'infezione da HPV è la vaccinazione. In Italia sono disponibili tre formulazioni:
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <Syringe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-muted-foreground leading-relaxed">
                <strong>Bivalente (Cervarix)</strong> — protegge da HPV 16 e 18
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Syringe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-muted-foreground leading-relaxed">
                <strong>Tetravalente (Gardasil)</strong> — protegge da HPV 16, 18, 6 e 11 (questi ultimi due responsabili del 90% dei condilomi genitali)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Syringe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-muted-foreground leading-relaxed">
                <strong>Nonavalente (Gardasil 9)</strong> — protegge da 9 ceppi (16, 18, 6, 11, 31, 33, 45, 52 e 58), coprendo il 90% dei tumori correlati a HPV e la maggior parte delle lesioni benigne
              </span>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Oggi il vaccino di riferimento nei programmi nazionali è il <strong>Gardasil 9</strong>, che offre la copertura più ampia. Cervarix e Gardasil restano autorizzati e disponibili, ma vengono utilizzati principalmente in contesti specifici o su indicazione del medico.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In Italia la vaccinazione gratuita è offerta a ragazze e ragazzi nel 12° anno di vita (chi ha già compiuto 11 anni). La vaccinazione <strong>non sostituisce lo screening</strong>: anche le donne vaccinate devono continuare a sottoporsi regolarmente a Pap test o test HPV.
          </p>
        </div>
      </section>

      {/* HPV DNA Test */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">L'HPV DNA Test: Un'Arma in Più</h2>
          <p className="text-muted-foreground leading-relaxed">
            A differenza del Pap Test, che osserva le variazioni delle cellule, l'HPV DNA Test ricerca il materiale genetico del virus. È un test estremamente sensibile che permette di identificare la presenza del virus ancora prima che si verifichino cambiamenti cellulari visibili. Le linee guida raccomandano il test HPV ogni 5 anni alle donne tra i 30 e i 64 anni.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-8">Pap Test o HPV DNA Test: quale esame fare?</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            La strategia di prevenzione si è evoluta nel tempo. Ecco come orientarsi:
          </p>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-semibold text-foreground">Caratteristica</th>
                  <th className="text-left p-4 font-semibold text-foreground">Pap Test</th>
                  <th className="text-left p-4 font-semibold text-foreground">HPV DNA Test</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(({ label, pap, hpv }, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="p-4 font-medium text-foreground">{label}</td>
                    <td className="p-4 text-muted-foreground">{pap}</td>
                    <td className="p-4 text-muted-foreground">{hpv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-primary/5 border border-primary/10 rounded-xl p-6">
            <p className="text-foreground leading-relaxed">
              <strong>Nota del ginecologo:</strong> i due test vengono spesso eseguiti insieme — il cosiddetto <strong>co-testing</strong> — per ottenere un quadro diagnostico ancora più completo e sicuro. È una scelta particolarmente utile in donne con fattori di rischio specifici o che richiedono una valutazione più approfondita.
            </p>
          </div>
        </div>
      </section>

      {/* ThinPrep Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">
            Pap Test, ThinPrep e HPV Test: cosa cambia nel prelievo?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Scegliere tra Pap Test convenzionale, ThinPrep e HPV Test può generare confusione. Tutti e tre prevedono il prelievo di cellule dalla cervice uterina, ma differiscono nel metodo di raccolta e soprattutto in cosa si cerca nel campione.
          </p>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 mb-12">
            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
                <h3 className="font-serif text-lg font-semibold text-foreground">Pap Test convenzionale</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Il prelievo viene effettuato con una spatola per raccogliere le cellule dalla superficie esterna del collo dell'utero e un citobrush (spazzolino) per prelevare cellule dal canale cervicale interno. Il campione viene "strisciato" su un vetrino, fissato e inviato al laboratorio per l'analisi al microscopio.
              </p>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardList className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
                <h3 className="font-serif text-lg font-semibold text-foreground">ThinPrep (Pap Test in fase liquida)</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                È un'evoluzione del Pap Test convenzionale. Il prelievo avviene con un'unica spazzolina progettata per raccogliere contemporaneamente cellule dalla superficie esterna e dal canale cervicale. La differenza fondamentale sta nel passaggio successivo: la spazzolina viene immersa in un liquido di conservazione invece di essere strisciata su un vetrino. Questo consente una lettura più chiara al microscopio e riduce significativamente la possibilità di errori legati alla qualità del campione.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileSearch className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
                <h3 className="font-serif text-lg font-semibold text-foreground">HPV Test</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                La modalità di prelievo è identica a quella del ThinPrep: stessa spazzolina, stesso liquido di conservazione. In alcuni casi può essere prelevato con un tampone a secco. La differenza è nell'analisi: il campione non viene esaminato per cercare cellule anomale, ma per individuare il DNA del Papillomavirus, distinguendo tra ceppi ad alto e basso rischio oncogeno.
              </p>
            </div>
          </div>

          <h3 className="font-serif text-xl text-foreground mb-4">La differenza che conta: specificità vs sensibilità</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            La distinzione principale non riguarda il prelievo, ma cosa si cerca nel campione:
          </p>

          <div className="overflow-x-auto rounded-xl border border-border mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-semibold text-foreground">Esame</th>
                  <th className="text-left p-4 font-semibold text-foreground">Tipo di analisi</th>
                  <th className="text-left p-4 font-semibold text-foreground">Punto di forza</th>
                  <th className="text-left p-4 font-semibold text-foreground">Limite</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-background">
                  <td className="p-4 font-medium text-foreground">Pap Test / ThinPrep</td>
                  <td className="p-4 text-muted-foreground">Citologica (analisi delle cellule)</td>
                  <td className="p-4 text-muted-foreground">Alta specificità — pochi falsi positivi</td>
                  <td className="p-4 text-muted-foreground">Sensibilità moderata — possibili falsi negativi</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-4 font-medium text-foreground">HPV Test</td>
                  <td className="p-4 text-muted-foreground">Molecolare (ricerca del DNA virale)</td>
                  <td className="p-4 text-muted-foreground">Alta sensibilità — individua il virus anche in fase precoce</td>
                  <td className="p-4 text-muted-foreground">Specificità minore — rileva anche infezioni transitorie destinate a risolversi</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-serif text-xl text-foreground mb-4">Quale test scegliere?</h3>
          <p className="text-muted-foreground leading-relaxed">
            La scelta non è arbitraria e va condivisa con il proprio ginecologo, che valuterà l'età, la storia clinica e i precedenti esami. In alcuni casi — soprattutto nel follow-up di pazienti con pregressi di lesioni — si può optare per il co-testing: l'esecuzione contemporanea di Pap Test e HPV Test sullo stesso campione. È l'approccio più accurato disponibile, ma non è raccomandato in modo routinario per tutta la popolazione.
          </p>
        </div>
      </section>

      {/* Perché non rimandare */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">Perché non rimandare la prevenzione</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Sottoporsi regolarmente a questi controlli permette di:</p>
          <ul className="space-y-4 mb-10">
            {screeningReasons.map((reason, i) => (
              <li key={i} className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Queste indicazioni valgono per la popolazione a rischio medio e in assenza di sintomi. Sulla base della storia clinica personale e dei risultati degli esami, il ginecologo può prevedere un calendario diagnostico personalizzato.
          </p>

          <h3 className="font-serif text-xl text-foreground mb-4">Situazioni che richiedono una valutazione anticipata o più frequente</h3>
          <ul className="space-y-3">
            {riskFactors.map((factor, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">{factor}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Risultato anomalo */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">Cosa succede se il risultato è anomalo?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Un risultato anomalo al Pap test o una positività al test HPV <strong>non significa avere un tumore</strong>. Nella maggior parte dei casi si tratta di alterazioni lievi che richiedono solo sorveglianza nel tempo — soprattutto nelle pazienti più giovani, dove le lesioni di basso grado tendono a regredire spontaneamente.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Nei casi che richiedono approfondimento, il passo successivo è la <strong>colposcopia</strong>: un esame ambulatoriale che consente di osservare il collo dell'utero con uno strumento ottico ingrandente, utilizzando coloranti specifici (acido acetico e soluzione di Lugol) per evidenziare eventuali aree anomale. Se vengono identificate zone sospette, il medico può eseguire immediatamente una <strong>biopsia mirata</strong>, il cui campione sarà sottoposto ad esame istologico per una diagnosi definitiva.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Se viene individuata una lesione precancerosa che richiede trattamento, questa viene asportata con una procedura microchirurgica ambulatoriale in anestesia locale. Non tutte le lesioni, tuttavia, necessitano di intervento immediato: la decisione viene presa caso per caso in base all'entità della lesione, all'età della paziente e al quadro clinico complessivo.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nel caso specifico del test HPV: se il risultato è positivo, le cellule già prelevate vengono esaminate al microscopio (Pap test in reflex). Solo se anche questo esame evidenzia alterazioni cellulari si procede con la colposcopia.
          </p>
        </div>
      </section>

      {/* Studio privato */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">Pap Test e Test HPV in Studio Privato a Palermo</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Oltre al programma di screening pubblico, è possibile eseguire Pap test e HPV DNA test privatamente presso il mio studio in Via Marchese Ugo 56, Palermo. Scegliere la visita privata offre vantaggi concreti:
          </p>
          <ul className="space-y-3 mb-8">
            {privateAdvantages.map((adv, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">{adv}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Fare il test più spesso di quanto raccomandato, però, non aumenta la protezione. Le cadenze previste dalle linee guida sono calibrate sulla biologia lenta di queste lesioni. Eseguire il test ogni anno espone a falsi positivi e sovratrattamenti senza beneficio clinico aggiuntivo. Se i tuoi esami precedenti erano negativi e non hai fattori di rischio, rispettare le scadenze raccomandate è la scelta più corretta — e più sicura. Ne parliamo insieme durante la visita.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-10">
            Domande frequenti su Pap Test e HPV
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

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4">
            Vuoi prenotare il tuo Pap Test o Test HPV a Palermo?
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Il mio studio ginecologico offre percorsi di prevenzione personalizzati in un ambiente accogliente. Sono disponibile per Pap test, HPV DNA test, co-testing e colposcopia. Visita il mio studio in <strong>Via Marchese Ugo 56, Palermo</strong>.
          </p>
          <Button size="lg" asChild>
            <a href="https://www.miodottore.it/z/gvmuor" target="_blank" rel="noopener noreferrer" className="gap-2">
              Prenota la tua visita <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </main>

    <ContactCTA />
    <Footer />
  </>
);

export default PapTestHpv;
