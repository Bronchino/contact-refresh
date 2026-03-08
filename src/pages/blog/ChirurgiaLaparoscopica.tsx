import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ChirurgiaLaparoscopica = () => {
  return (
    <>
      <Helmet>
        <title>Chirurgia laparoscopica e robotica con Sistema Da Vinci Xi | Ginecologia mini-invasiva</title>
        <meta name="description" content="Chirurgia laparoscopica e robotica con Sistema Da Vinci Xi in ginecologia: indicazioni (endometriosi, cisti ovariche, dermoidi, fibromi), vantaggi rispetto alla laparotomia, differenze tra laparoscopia e robotica. Recupero rapido e massima precisione." />
        <link rel="canonical" href="https://www.rossiginecologo.it/chirurgia-laparoscopica" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Chirurgia laparoscopica e robotica con Sistema Da Vinci Xi" />
        <meta property="og:description" content="Vantaggi, indicazioni e differenze: perché scegliere la chirurgia robotica e laparoscopica in ginecologia." />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        <BlogHero
          label="Ginecologia · Chirurgia mini-invasiva"
          title="Chirurgia laparoscopica e robotica con Sistema Da Vinci Xi"
          description="Meno invasiva, più precisa: vantaggi, indicazioni e differenze rispetto alla chirurgia tradizionale."
          breadcrumbLabel="Chirurgia Laparoscopica"
        />

        {/* Table of Contents */}
        <section className="container px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>Indice della pagina</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><a href="#quando" className="text-primary hover:underline">Quando si utilizza</a></li>
                  <li><a href="#vantaggi-tradizionale" className="text-primary hover:underline">Vantaggi rispetto alla chirurgia tradizionale</a></li>
                  <li><a href="#robotica" className="text-primary hover:underline">Chirurgia robotica con Sistema Da Vinci Xi</a></li>
                  <li><a href="#confronto" className="text-primary hover:underline">Tabella di confronto</a></li>
                  <li><a href="#faq" className="text-primary hover:underline">Domande frequenti</a></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Intro */}
        <section className="container px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
              Chirurgia laparoscopica e robotica in ginecologia
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La <strong className="text-foreground">chirurgia ginecologica mini-invasiva</strong> ha rivoluzionato il modo di operare: con <strong className="text-foreground">laparoscopia</strong> e <strong className="text-foreground">chirurgia robotica</strong> si trattano molte patologie in modo <strong className="text-foreground">sicuro</strong> e <strong className="text-foreground">preciso</strong>, con <strong className="text-foreground">tempi di recupero ridotti</strong>, evitando le grandi incisioni della <strong className="text-foreground">laparotomia</strong>.
            </p>
          </div>
        </section>

        {/* Quando si utilizza */}
        <section id="quando" className="container px-4 py-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">
              Quando si utilizza la laparoscopia o la chirurgia robotica
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Patologie trattate</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Endometriosi</strong></li>
                    <li><strong className="text-foreground">Cisti ovariche</strong> e <strong className="text-foreground">cisti dermoidi</strong></li>
                    <li><strong className="text-foreground">Fibromi uterini</strong> (miomi)</li>
                    <li><strong className="text-foreground">Patologie tubariche</strong> (gravidanza extrauterina, idrosalpinge)</li>
                    <li><strong className="text-foreground">Prolasso genitale</strong></li>
                    <li><strong className="text-foreground">Isterectomia</strong> per indicazioni selezionate</li>
                    <li><strong className="text-foreground">Aderenze pelviche</strong> e <strong className="text-foreground">dolore pelvico cronico</strong></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Obiettivi clinici</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Ridurre al minimo il <strong className="text-foreground">trauma chirurgico</strong>, preservare quando possibile la <strong className="text-foreground">fertilità</strong> e favorire una <strong className="text-foreground">ripresa rapida</strong> con ottimi risultati funzionali ed estetici.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vantaggi */}
        <section id="vantaggi-tradizionale" className="container px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">
              Vantaggi rispetto alla chirurgia tradizionale (laparotomia)
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Piccole incisioni", desc: "al posto di un'ampia apertura addominale" },
                { title: "Minore dolore post-operatorio", desc: "e ridotto uso di analgesici" },
                { title: "Perdita di sangue ridotta", desc: "e minori complicanze" },
                { title: "Cicatrici discrete", desc: "migliori risultati estetici" },
                { title: "Ricovero più breve", desc: "e ripresa più rapida delle attività" },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <strong className="text-foreground block mb-2">{title}</strong>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chirurgia Robotica */}
        <section id="robotica" className="container px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
              Chirurgia robotica con <span className="text-primary">Sistema Da Vinci Xi</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              La <strong className="text-foreground">chirurgia robotica</strong> è la forma più avanzata di chirurgia mini-invasiva. Il <strong className="text-foreground">Sistema Da Vinci Xi</strong> è oggi la piattaforma più diffusa nei centri di riferimento: console per il chirurgo, <strong className="text-foreground">telecamera 3D HD</strong> e <strong className="text-foreground">bracci robotici</strong> con strumenti miniaturizzati consentono <strong className="text-foreground">precisione</strong> e <strong className="text-foreground">stabilità</strong> superiori alla laparoscopia tradizionale.
            </p>

            <h3 className="text-xl font-bold mb-4 text-foreground">Come funziona</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Il robot non è autonomo: ogni movimento è <strong className="text-foreground">guidato dal chirurgo</strong> in tempo reale. L'ergonomia ottimizzata e la visione ingrandita favoriscono il <strong className="text-foreground">controllo delle strutture delicate</strong> (ureteri, vasi, nervi) e l'accesso alle <strong className="text-foreground">zone profonde del bacino</strong>.
            </p>

            <h3 className="text-xl font-bold mb-4 text-foreground">Vantaggi chiave del Sistema Da Vinci Xi</h3>
            <ul className="space-y-3 text-muted-foreground mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong className="text-foreground">Visione 3D HD</strong> nitida e ingrandita</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong className="text-foreground">Movimenti precisi e stabili</strong> con eliminazione del tremore</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong className="text-foreground">Maggior sicurezza</strong> per la preservazione delle strutture anatomiche</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong className="text-foreground">Recupero spesso più rapido</strong> rispetto alla laparoscopia</span>
              </li>
            </ul>

            <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6">
              <p className="text-foreground">
                <strong>Nota:</strong> la scelta tra <strong>laparoscopia</strong> e <strong>robotica</strong> dipende dalla patologia, dalla complessità del caso e dall'esperienza del team chirurgico.
              </p>
            </div>
          </div>
        </section>

        {/* Tabella di confronto */}
        <section id="confronto" className="container px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">
              Confronto tra i tre approcci chirurgici
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-border p-4 text-left font-semibold text-foreground">Caratteristica</th>
                    <th className="border border-border p-4 text-left font-semibold text-foreground">Laparotomia</th>
                    <th className="border border-border p-4 text-left font-semibold text-foreground">Laparoscopia</th>
                    <th className="border border-border p-4 text-left font-semibold text-foreground">Robotica (Da Vinci Xi)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Tipo di accesso", "Grande incisione addominale", "Piccole incisioni", "Piccole incisioni"],
                    ["Visione", "2D", "2D HD", "3D HD"],
                    ["Precisione dei movimenti", "Manuale", "Buona", "Eccellente"],
                    ["Dolore post-operatorio", "Maggiore", "Ridotto", "Minimo"],
                    ["Cicatrici", "Evidenti", "Piccole", "Quasi invisibili"],
                    ["Recupero", "Lungo (2–4 settimane)", "Rapido (7–10 giorni)", "Molto rapido (5–7 giorni)"],
                    ["Ideale per", "Urgenze o masse voluminose", "Patologie benigne", "Interventi complessi o di precisione"],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-muted/30" : ""}>
                      {row.map((cell, j) => (
                        <td key={j} className={`border border-border p-4 ${j === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">
              Domande frequenti
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "La chirurgia robotica è sempre preferibile?",
                  a: "No. L'approccio migliore viene deciso caso per caso, valutando patologia, anatomia e obiettivi clinici. L'obiettivo è sempre la massima sicurezza e il miglior risultato per la paziente.",
                },
                {
                  q: "La robotica garantisce cicatrici più piccole?",
                  a: "Sì, come la laparoscopia utilizza piccole incisioni; in più offre maggiore precisione e visione 3D.",
                },
                {
                  q: "Si preserva la fertilità?",
                  a: "Quando clinicamente indicato, le tecniche mini-invasive aiutano a preservare la fertilità riducendo il trauma chirurgico.",
                },
              ].map(({ q, a }) => (
                <div key={q}>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ChirurgiaLaparoscopica;
