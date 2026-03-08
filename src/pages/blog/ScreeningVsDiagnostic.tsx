import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ScreeningVsDiagnostic() {
  const title = "Screening e test invasivi in gravidanza: capiamo le differenze | Dr. Claudio Rossi";
  const description =
    "Guida chiara su screening (test combinato, NIPT) e test invasivi (amniocentesi, villocentesi): differenze, quando scegliere l'uno o l'altro, rischi e impatto emotivo.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://www.rossiginecologo.it/screening-vs-diagnostico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <BlogHero
          label="Ostetricia · Gravidanza"
          title="Screening e test invasivi in gravidanza: capiamo le differenze"
          description="Guida chiara su test combinato, NIPT, amniocentesi e villocentesi: differenze, rischi e impatto emotivo."
          breadcrumbLabel="Screening vs Diagnostico"
        />

        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8 max-w-5xl">
            <article className="prose prose-lg dark:prose-invert max-w-none">

              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                In gravidanza è importante distinguere tra test <strong>non invasivi</strong>, che stimano il rischio di
                anomalie cromosomiche, e test <strong>invasivi</strong>, che forniscono una diagnosi certa ma comportano
                un piccolo rischio di aborto.
              </p>

              {/* Screening */}
              <section className="rounded-2xl border bg-card p-6 shadow-sm mb-8">
                <h2 className="text-2xl font-semibold mb-4">Test non invasivi (Screening)</h2>
                <p className="mb-4">
                  I test di screening sono <strong>non invasivi</strong> e <strong>non comportano rischio di aborto</strong>. Servono a <strong>stimare la probabilità</strong> di anomalie, ma <strong>non danno una risposta certa</strong>.
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li><strong>Test combinato del primo trimestre:</strong> ecografia per la translucenza nucale + esami del sangue.</li>
                  <li><strong>Test del DNA fetale (NIPT):</strong> analisi del DNA fetale nel sangue materno. Molto accurato ma resta uno screening.</li>
                </ul>

                <div className="rounded-xl bg-muted p-5 border mt-6">
                  <h3 className="text-lg font-semibold mb-3">Attendibilità: sensibilità, specificità, falsi positivi e falsi negativi</h3>
                  <p className="mb-3">
                    Uno screening ideale unisce <strong>alta sensibilità</strong> e <strong>basso tasso di falsi positivi</strong>. Un <strong>falso positivo</strong> si verifica quando il test segnala un rischio aumentato, ma il bambino è sano. Esistono anche i <strong>falsi negativi</strong>.
                  </p>
                  <p>
                    Per ridurre procedure inutili e preoccupazioni, nella scelta dello screening è importante privilegiare test con <strong>bassa percentuale di falsi positivi</strong> e <strong>alta sensibilità</strong>.
                  </p>
                </div>
              </section>

              {/* Diagnostici */}
              <section className="rounded-2xl border bg-card p-6 shadow-sm mb-8">
                <h2 className="text-2xl font-semibold mb-4">Test invasivi (Diagnostici)</h2>
                <p className="mb-4">
                  I test diagnostici sono <strong>invasivi</strong> perché comportano il <strong>prelievo diretto di cellule fetali</strong>. A differenza degli screening, offrono una <strong>diagnosi certa</strong>.
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li><strong>Villocentesi:</strong> tra l'11ª e la 13ª settimana, prelievo di tessuto placentare.</li>
                  <li><strong>Amniocentesi:</strong> dalla 16ª settimana, prelievo di liquido amniotico.</li>
                </ul>
                <p className="mb-4">
                  Svantaggio: <strong>piccolo rischio di aborto (≈0,1–0,3%)</strong> quando eseguiti da operatori esperti.
                </p>

                <div className="rounded-xl bg-muted p-5 border mt-6">
                  <h3 className="text-lg font-semibold mb-3">Come si eseguono</h3>
                  <p className="mb-3">
                    Entrambe le procedure si svolgono in ambulatorio, con <strong>guida ecografica continua</strong>, per evitare di pungere il bambino. La procedura è rapida e generalmente ben tollerata.
                  </p>
                  <p>
                    Dopo l'esame si consiglia <strong>riposo nelle 24 ore</strong>. I <strong>tempi di risposta</strong> richiedono in media <strong>circa tre settimane</strong>.
                  </p>
                </div>
              </section>

              {/* Rischi per età */}
              <section className="rounded-2xl border bg-card p-6 mb-8">
                <h2 className="text-xl font-semibold mb-3">Rischio stimato per età materna</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-3 py-2 text-left font-semibold">Età (anni)</th>
                        <th className="px-3 py-2 text-left font-semibold">Down (T21)</th>
                        <th className="px-3 py-2 text-left font-semibold">Edwards (T18)</th>
                        <th className="px-3 py-2 text-left font-semibold">Patau (T13)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { age: 20, t21: "1 su 1.500", t18: "1 su 10.000", t13: "1 su 25.000" },
                        { age: 25, t21: "1 su 1.300", t18: "1 su 8.000", t13: "1 su 20.000" },
                        { age: 30, t21: "1 su 900", t18: "1 su 4.500", t13: "1 su 15.000" },
                        { age: 35, t21: "1 su 350", t18: "1 su 1.200", t13: "1 su 5.000" },
                        { age: 37, t21: "1 su 220", t18: "1 su 900", t13: "1 su 3.000" },
                        { age: 40, t21: "1 su 100", t18: "1 su 400", t13: "1 su 1.200" },
                        { age: 42, t21: "1 su 60", t18: "1 su 250", t13: "1 su 900" },
                        { age: 45, t21: "1 su 30", t18: "1 su 100", t13: "1 su 300" },
                      ].map((r) => (
                        <tr key={r.age} className="border-t">
                          <td className="px-3 py-2">{r.age}</td>
                          <td className="px-3 py-2">{r.t21}</td>
                          <td className="px-3 py-2">{r.t18}</td>
                          <td className="px-3 py-2">{r.t13}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">Fonti: Snijders et al., 1999; Morris et al., 2002.</p>
              </section>

              {/* In sintesi */}
              <section className="rounded-2xl bg-primary/10 p-6 border mb-8">
                <h3 className="text-lg font-semibold mb-3">In sintesi</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>I test di <strong>screening</strong> sono non invasivi, stimano un rischio e possono avere <strong>falsi positivi</strong> e <strong>falsi negativi</strong>.</li>
                  <li><strong>Nessun test di screening ha sensibilità del 100%</strong>.</li>
                  <li>I test <strong>diagnostici</strong> danno <strong>certezza al 100%</strong>, ma espongono al <strong>rischio di aborto (≈0,1–0,3%)</strong>.</li>
                  <li>Le procedure invasive sono eseguite <strong>sotto guida ecografica</strong>.</li>
                  <li>Gli esiti richiedono in media <strong>circa tre settimane</strong>.</li>
                  <li>Nella scelta dello screening conta <strong>alta sensibilità</strong> e <strong>basso tasso di falsi positivi</strong>.</li>
                </ul>
              </section>

              {/* CTA */}
              <section className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center border border-primary/20 mt-12">
                <h3 className="text-2xl font-semibold mb-4">Prenota una consulenza prenatale</h3>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Per scegliere il percorso di screening più adatto, prenota un appuntamento personalizzato.
                </p>
                <Button size="lg" asChild>
                  <a href="https://www.miodottore.it/claudio-rossi/ginecologo/palermo" target="_blank" rel="noopener noreferrer">
                    Prenota su MioDottore
                  </a>
                </Button>
              </section>
            </article>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
