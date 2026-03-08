import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Helmet>
      <title>Privacy Policy | Dott. Claudio Rossi Ginecologo Palermo</title>
      <meta name="description" content="Informativa sulla privacy e trattamento dei dati personali dello studio del Dott. Claudio Rossi, ginecologo a Palermo." />
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    <Header />

    <main className="flex-grow">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">Privacy Policy</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
          <p>
            Ai sensi del Regolamento (UE) 2016/679 (GDPR), il Dott. Claudio Rossi, in qualità di Titolare del trattamento, informa che i dati personali raccolti tramite questo sito web saranno trattati nel rispetto della normativa vigente in materia di protezione dei dati personali.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Titolare del trattamento</h2>
          <p>
            Dott. Claudio Rossi<br />
            Via Marchese Ugo 56, 90141 Palermo<br />
            Email: claudio.rossi@me.com<br />
            Tel: 091 555 8609
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Tipologia di dati raccolti</h2>
          <p>
            Il sito può raccogliere dati di navigazione (indirizzo IP, browser, pagine visitate) e dati forniti volontariamente dall'utente tramite i moduli di contatto (nome, email, telefono, messaggio).
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Finalità del trattamento</h2>
          <p>
            I dati sono trattati per rispondere alle richieste dell'utente, gestire gli appuntamenti e adempiere a obblighi di legge. I dati non saranno ceduti a terzi senza il consenso dell'interessato, salvo obblighi normativi.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Diritti dell'interessato</h2>
          <p>
            L'utente può esercitare i diritti previsti dagli artt. 15-22 del GDPR (accesso, rettifica, cancellazione, portabilità, opposizione) scrivendo a claudio.rossi@me.com.
          </p>

          <p className="mt-8 text-sm text-muted-foreground/70">
            Ultimo aggiornamento: marzo 2026. Questa pagina è in fase di completamento e verrà aggiornata con l'informativa completa.
          </p>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default PrivacyPolicy;
