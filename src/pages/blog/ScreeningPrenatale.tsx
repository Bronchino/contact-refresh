import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import BlogHero from "@/components/BlogHero";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const ScreeningPrenatale = () => {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: "Screening Prenatale: Test Combinato FMF e DNA Fetale (NIPT)",
    description: "Guida completa allo screening prenatale non invasivo.",
    mainEntityOfPage: "https://www.rossiginecologo.it/screening-prenatale",
    author: { "@type": "Person", name: "Dott. Claudio Rossi", jobTitle: "Specialista in Ostetricia e Ginecologia" },
    publisher: { "@type": "Organization", name: "Studio Medico Rossi" },
    datePublished: "2025-10-10",
    dateModified: "2025-10-10",
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qual è il momento migliore per fare lo screening prenatale?",
        acceptedAnswer: { "@type": "Answer", text: "Il test combinato si esegue tra 11 e 13 settimane di gravidanza. Il test del DNA fetale può essere effettuato a partire dalla 10ª settimana." },
      },
      {
        "@type": "Question",
        name: "Cosa significa accreditamento FMF?",
        acceptedAnswer: { "@type": "Answer", text: "L'accreditamento della Fetal Medicine Foundation di Londra garantisce che l'operatore esegue la misurazione della translucenza nucale secondo standard di qualità rigorosi." },
      },
      {
        "@type": "Question",
        name: "Il test del DNA fetale può sostituire l'amniocentesi?",
        acceptedAnswer: { "@type": "Answer", text: "No, il test del DNA fetale è uno screening con sensibilità superiore al 99%, ma in caso di risultato ad alto rischio è necessaria conferma con amniocentesi." },
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Screening Prenatale Palermo | Test Combinato FMF e DNA Fetale (NIPT) | Dott. Claudio Rossi</title>
        <meta name="description" content="Screening prenatale non invasivo a Palermo: Test Combinato del primo trimestre con accreditamento FMF e Test del DNA fetale (NIPT) per la diagnosi precoce di trisomia 21, 18 e 13." />
        <link rel="canonical" href="https://www.rossiginecologo.it/screening-prenatale" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Screening Prenatale: Test Combinato FMF vs DNA Fetale (NIPT)" />
        <meta property="og:description" content="Guida completa allo screening prenatale: differenze, affidabilità e quando scegliere il test combinato o il DNA fetale." />
        <script type="application/ld+json">{JSON.stringify(jsonLdArticle)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
      </Helmet>
      
      <Header />
      <BlogHero
        label="Ostetricia · Screening"
        title="Come orientarsi tra gli screening prenatali: Test combinato e test del DNA fetale"
        description="Guida completa allo screening prenatale non invasivo: differenze, affidabilità e accreditamento FMF."
        breadcrumbLabel="Screening Prenatale"
      />
      
      <main className="py-16 sm:py-20">
        <div className="container px-4 max-w-4xl mx-auto">
          <article className="prose prose-lg dark:prose-invert max-w-none">

            <p className="text-lg leading-relaxed mb-6">
              Durante il primo trimestre di gravidanza, molte donne si chiedono come poter conoscere lo stato di salute del proprio bambino. 
              Oggi la medicina offre strumenti di <strong>screening prenatale non invasivo</strong> che permettono di valutare il <strong>rischio di anomalie cromosomiche</strong>, 
              in particolare la <strong>sindrome di Down (trisomia 21)</strong>, la <strong>trisomia 18</strong> e la <strong>trisomia 13</strong>.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              I due principali test di screening sono il <strong>test combinato</strong> e il <strong>test del DNA fetale (NIPT)</strong>. 
              Entrambi non forniscono una diagnosi, ma stimano la probabilità che il feto presenti determinate anomalie.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-primary">Il test combinato del primo trimestre</h2>
            <p className="text-lg leading-relaxed mb-4">Il test combinato si esegue tra la 11ª e la 13ª settimana di gravidanza e integra tre elementi fondamentali:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Età materna</strong>, che rappresenta di per sé un fattore di rischio.</li>
              <li><strong>Ecografia</strong> con misurazione della translucenza nucale (NT).</li>
              <li><strong>Analisi del sangue materno</strong>, con dosaggio di PAPP-A e β-hCG.</li>
            </ul>
            <p className="text-lg leading-relaxed mb-6">Accuratezza: sensibilità circa 85–90%, falsi positivi circa 4–5%.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-primary">Rischio di sindrome di Down per età materna</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left">Età materna</th>
                    <th className="border border-border px-4 py-2 text-left">Rischio di trisomia 21</th>
                  </tr>
                </thead>
                <tbody>
                  {[["20 anni","1 su 1.500"],["25 anni","1 su 1.300"],["30 anni","1 su 900"],["35 anni","1 su 350"],["37 anni","1 su 230"],["40 anni","1 su 100"],["42 anni","1 su 60"],["45 anni","1 su 30"]].map(([age, risk], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-muted/30" : ""}>
                      <td className="border border-border px-4 py-2">{age}</td>
                      <td className="border border-border px-4 py-2">{risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-primary">Sensibilità e specificità: un esempio per capire meglio</h2>
            <p className="text-lg leading-relaxed mb-6">
              La <strong>sensibilità</strong> indica la capacità del test di individuare chi ha effettivamente la condizione. 
              La <strong>specificità</strong> è la capacità di non segnalare falsamente chi non ha nulla.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-primary">Cosa accade se il test risulta "a rischio aumentato"</h2>
            <p className="text-lg leading-relaxed mb-6">
              Se il test combinato indica un rischio elevato, il ginecologo può proporre un <strong>test invasivo di conferma</strong>, come l'<strong>amniocentesi</strong>.
              L'amniocentesi comporta un <strong>rischio di aborto stimato in circa 1 caso su 100</strong>.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-primary">Il test del DNA fetale (NIPT)</h2>
            <p className="text-lg leading-relaxed mb-6">
              Il <strong>test del DNA fetale</strong> si esegue a partire dalla <strong>10ª settimana di gravidanza</strong> con un semplice prelievo di sangue materno.
              Sensibilità e specificità superiori al 99%.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-primary">Il test del DNA fetale a 5 cromosomi</h2>
            <p className="text-lg leading-relaxed mb-6">
              Nella versione estesa, il test analizza anche i <strong>cromosomi sessuali X e Y</strong>, valutando il rischio di sindrome di Turner e Klinefelter.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-primary">L'importanza dell'ecografia prima del test del DNA fetale</h2>
            <p className="text-lg leading-relaxed mb-6">
              Il test del DNA fetale deve sempre essere preceduto da una <strong>ecografia accurata</strong>. L'ecografia e il test del DNA non si sostituiscono, ma si completano.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-primary">Qualità e accreditamento FMF</h2>
            <p className="text-lg leading-relaxed mb-6">
              Presso il mio studio, il <strong>test combinato</strong> viene eseguito da un operatore <strong>accreditato dalla Fetal Medicine Foundation (FMF) di Londra</strong>.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-primary">Confronto tra test combinato e test del DNA fetale</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left">Caratteristica</th>
                    <th className="border border-border px-4 py-2 text-left">Test combinato</th>
                    <th className="border border-border px-4 py-2 text-left">Test del DNA fetale</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Epoca","11ª–13ª settimana","Da 10ª settimana"],
                    ["Tipo","Ecografia + sangue","Analisi del sangue"],
                    ["Sensibilità","Circa 90%","Oltre 99%"],
                    ["Specificità","Circa 95%","Oltre 99%"],
                    ["Rischio per il feto","Nessuno","Nessuno"],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-muted/30" : ""}>
                      {row.map((cell, j) => (
                        <td key={j} className="border border-border px-4 py-2">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-primary">Conclusione</h2>
            <p className="text-lg leading-relaxed mb-6">
              Il <strong>test combinato</strong> resta un eccellente strumento di screening. Il <strong>test del DNA fetale</strong> offre una valutazione più precisa e riduce la necessità di esami invasivi.
              La scelta deve essere sempre <strong>personalizzata</strong>.
            </p>
          </article>

          {/* Articoli Correlati */}
          <section className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">Articoli Correlati</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">
                  <Link to="/blog/screening-vs-diagnostico" className="text-primary hover:underline">Screening vs Test Diagnostici</Link>
                </h3>
                <p className="text-muted-foreground mb-4">Comprendi la differenza tra test di screening e test diagnostici invasivi.</p>
                <Link to="/blog/screening-vs-diagnostico" className="text-primary hover:underline text-sm font-medium">Leggi l'articolo →</Link>
              </div>
            </div>
          </section>

          <div className="mt-8 p-8 bg-primary/5 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold mb-4 text-primary">Prenota una consulenza prenatale</h2>
            <p className="text-lg mb-6 text-foreground/80">
              Per eseguire il test combinato o il test del DNA fetale con standard certificati FMF, prenota un appuntamento.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a href="https://www.miodottore.it/claudio-rossi/ginecologo/palermo" target="_blank" rel="noopener noreferrer">
                <Calendar className="h-5 w-5" />
                Prenota su MioDottore
              </a>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ScreeningPrenatale;
