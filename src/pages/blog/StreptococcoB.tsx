import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import { Link } from "react-router-dom";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Streptococco beta-emolitico in gravidanza: screening e prevenzione",
  description: "Guida allo screening del GBS in gravidanza (35ª–37ª settimana).",
  publisher: {
    "@type": "Physician",
    name: "Dott. Claudio Rossi",
    medicalSpecialty: ["Obstetrics", "Gynecology"],
    address: { "@type": "PostalAddress", addressLocality: "Palermo", addressCountry: "IT" },
  },
};

export default function StreptococcoB() {
  const bookingUrl = "https://www.miodottore.it/claudio-rossi/ginecologo/palermo";

  return (
    <>
      <Helmet>
        <title>Streptococco B in gravidanza | Screening 35–37 settimane – Dott. Claudio Rossi</title>
        <meta name="description" content="Tampone vaginale-rettale per Streptococco beta-emolitico (GBS) tra 35ª–37ª settimana: indicazioni, come si fa, cosa significa positivo/negativo e profilassi in travaglio." />
        <link rel="canonical" href="https://www.rossiginecologo.it/streptococco-b" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Streptococco B in gravidanza – screening" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Header />

        <main>
          {/* HERO */}
          <header className="relative isolate overflow-hidden bg-gradient-to-b from-primary/5 to-background">
            <div className="container px-4 py-12 md:py-16">
              <BackButton />
              <Breadcrumb className="mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild><Link to="/" className="flex items-center"><Home className="h-4 w-4" /></Link></BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild><Link to="/blog">Blog</Link></BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Streptococco B</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <p className="text-sm uppercase tracking-widest text-primary font-semibold">Gravidanza • Prevenzione</p>
              <h1 className="mt-2 text-3xl md:text-5xl font-bold leading-tight text-foreground">
                Streptococco B in gravidanza (GBS): screening e prevenzione
              </h1>
              <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl">
                Il tampone vaginale-rettale tra la <strong>35ª e la 37ª settimana</strong> permette di individuare la
                colonizzazione da <em>Streptococcus agalactiae</em> e prevenire l'infezione neonatale.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-primary-foreground shadow-sm hover:bg-primary/90 transition">
                  Prenota lo screening
                </a>
                <a href="#faq" className="inline-flex items-center rounded-lg border border-border px-5 py-3 text-foreground hover:bg-muted transition">
                  Domande frequenti
                </a>
              </div>
            </div>
          </header>

          {/* CONTENT */}
          <section className="container px-4 py-10 md:py-14">
            <div className="grid gap-8 md:grid-cols-12">
              <article className="md:col-span-7">
                <h2 className="text-2xl md:text-3xl font-semibold">Che cos'è lo Streptococco B e perché si esegue lo screening</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Lo <strong>Streptococco beta-emolitico di gruppo B (GBS)</strong> è un batterio spesso presente nel tratto gastrointestinale e genitale materno. La colonizzazione è di solito asintomatica, ma durante il parto può essere trasmesso al neonato.
                </p>

                <div className="mt-6 rounded-lg border border-border bg-card p-5 shadow-sm">
                  <h3 className="text-lg font-semibold">Quando e come si esegue</h3>
                  <ul className="mt-3 space-y-2 list-disc pl-5 text-foreground">
                    <li><strong>Timing:</strong> tra la <strong>35ª e la 37ª settimana</strong>.</li>
                    <li><strong>Metodo:</strong> tampone vaginale-rettale.</li>
                    <li><strong>Dolore/rischi:</strong> procedura rapida, poco fastidiosa, non invasiva.</li>
                    <li><strong>Referto:</strong> positivo/negativo per colonizzazione da GBS.</li>
                  </ul>
                </div>

                <h3 className="mt-8 text-xl font-semibold">Interpretazione del risultato</h3>
                <div className="mt-3 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                  <table className="min-w-full divide-y divide-border">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">Esito</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">Significato</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">Cosa fare</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-foreground">Negativo</td>
                        <td className="px-4 py-4 text-sm text-foreground">Assenza di colonizzazione.</td>
                        <td className="px-4 py-4 text-sm text-foreground">Prosegue il percorso standard.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-foreground">Positivo</td>
                        <td className="px-4 py-4 text-sm text-foreground">Colonizzazione materna da GBS.</td>
                        <td className="px-4 py-4 text-sm text-foreground">
                          <strong>Nessuna terapia immediata.</strong> L'antibiotico viene somministrato <strong>solo durante il travaglio</strong>.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 p-5 shadow-sm">
                  <h4 className="text-lg font-semibold text-primary">Perché lo screening tra la 35ª e la 37ª settimana</h4>
                  <p className="mt-2 text-foreground leading-relaxed">
                    Il tampone si esegue in questo periodo per essere <strong>predittivo dello stato di colonizzazione al momento del travaglio</strong>. Una terapia anticipata potrebbe favorire una <strong>ricolonizzazione da germe resistente</strong>.
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold">Profilassi intrapartum: quando è indicata</h3>
                <ul className="mt-3 space-y-2 list-disc pl-5 text-foreground">
                  <li>Tampone GBS <strong>positivo</strong> tra 35ª–37ª settimana.</li>
                  <li><strong>GBS urine positivo</strong> in gravidanza.</li>
                  <li>Precedente <strong>neonato con infezione precoce da GBS</strong>.</li>
                  <li>Situazioni cliniche a rischio valutate dal medico.</li>
                </ul>

                <div className="mt-8">
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-primary-foreground shadow-sm hover:bg-primary/90 transition">
                    Prenota il tampone GBS
                  </a>
                </div>
              </article>

              {/* SIDE */}
              <aside className="md:col-span-5">
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
                  <p className="text-sm font-semibold text-primary">Informazioni rapide</p>
                  <dl className="mt-3 space-y-2 text-sm text-foreground">
                    <div className="grid grid-cols-3 gap-2"><dt className="col-span-1 font-medium">Timing</dt><dd className="col-span-2">35ª–37ª settimana</dd></div>
                    <div className="grid grid-cols-3 gap-2"><dt className="col-span-1 font-medium">Metodo</dt><dd className="col-span-2">Tampone vaginale-rettale</dd></div>
                    <div className="grid grid-cols-3 gap-2"><dt className="col-span-1 font-medium">Durata</dt><dd className="col-span-2">Pochi minuti</dd></div>
                    <div className="grid grid-cols-3 gap-2"><dt className="col-span-1 font-medium">Rischi</dt><dd className="col-span-2">Minimi, procedura non invasiva</dd></div>
                  </dl>
                  <div className="mt-4">
                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-primary-foreground shadow-sm hover:bg-primary/90 transition">
                      Prenota ora
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="bg-muted/30">
            <div className="container px-4 py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold">Domande frequenti (FAQ)</h2>
              <div className="mt-6 divide-y divide-border rounded-lg border border-border bg-card">
                {[
                  { q: "Il tampone è doloroso?", a: "No, può essere solo lievemente fastidioso e dura pochi minuti." },
                  { q: "Se sono positiva, il mio partner deve essere trattato?", a: "No: la profilassi è prevista per la madre durante il travaglio." },
                  { q: "È possibile evitare l'antibiotico in travaglio se sono positiva?", a: "La profilassi endovena è la strategia più efficace. La decisione è condivisa con il medico." },
                  { q: "Cosa succede se partorisco prima di 35 settimane?", a: "La gestione è valutata dal team clinico; nel parto prematuro è indicata la profilassi intrapartum." },
                  { q: "Sono risultata positiva, quando devo fare l'antibiotico?", a: "La profilassi antibiotica si effettua durante il travaglio: idealmente all'inizio del travaglio attivo." },
                ].map((item, i) => (
                  <details key={i} className="group p-4 open:bg-muted/50">
                    <summary className="cursor-pointer list-none font-medium text-foreground">
                      <span className="mr-2">•</span>{item.q}
                    </summary>
                    <p className="mt-2 text-muted-foreground">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Articoli Correlati */}
          <section className="container px-4 py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Articoli Correlati</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">
                  <Link to="/blog/screening-prenatale" className="text-primary hover:underline">Screening Prenatale</Link>
                </h3>
                <p className="text-muted-foreground mb-4">Test combinato e DNA fetale per la diagnosi precoce di trisomia 21.</p>
                <Link to="/blog/screening-prenatale" className="text-primary hover:underline text-sm font-medium">Scopri di più →</Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
