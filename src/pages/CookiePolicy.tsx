import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Helmet>
      <title>Cookie Policy | Dott. Claudio Rossi — Ginecologo a Palermo</title>
      <meta name="description" content="Informativa sull'utilizzo dei cookie sul sito del Dott. Claudio Rossi, ginecologo a Palermo." />
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    <Header />

    <main className="flex-grow">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">Cookie Policy</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
          <p>
            Questo sito utilizza cookie tecnici necessari al corretto funzionamento e, previo consenso, cookie analitici per comprendere come gli utenti interagiscono con il sito.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Cosa sono i cookie</h2>
          <p>
            I cookie sono piccoli file di testo memorizzati dal browser sul dispositivo dell'utente durante la navigazione. Possono essere temporanei (di sessione) o persistenti.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Tipologie di cookie utilizzati</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cookie tecnici:</strong> necessari per la navigazione e il funzionamento del sito. Non richiedono consenso.</li>
            <li><strong>Cookie analitici:</strong> utilizzati per raccogliere informazioni aggregate sull'utilizzo del sito (es. Google Analytics con IP anonimizzato).</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Gestione dei cookie</h2>
          <p>
            L'utente può gestire le preferenze sui cookie attraverso le impostazioni del proprio browser. La disattivazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Maggiori informazioni</h2>
          <p>
            Per ulteriori dettagli sul trattamento dei dati, consultare la <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
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

export default CookiePolicy;
