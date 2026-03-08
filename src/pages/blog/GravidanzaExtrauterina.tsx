import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const GravidanzaExtrauterina = () => {
  return (
    <>
      <Helmet>
        <title>Gravidanza Extrauterina: Diagnosi e Trattamenti | Dott. Claudio Rossi Palermo</title>
        <meta name="description" content="Gravidanza extrauterina (ectopica): sintomi, diagnosi, trattamento con Methotrexate e chirurgia laparoscopica." />
        <link rel="canonical" href="https://www.rossiginecologo.it/gravidanza-extrauterina" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Gravidanza Extrauterina: Diagnosi e Trattamenti" />
        <meta property="og:description" content="Informazioni chiare su gravidanza extrauterina: sintomi, diagnosi e opzioni di trattamento." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
      
        <main className="container px-4 py-8 sm:py-12 md:py-16 max-w-4xl mx-auto">
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
                <BreadcrumbPage>Gravidanza Extrauterina</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <article>
            <header className="mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Gravidanza Extrauterina: Diagnosi e Trattamenti
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                A volte ricevere una diagnosi di gravidanza extrauterina può essere spaventoso. Sono qui per fornirti informazioni chiare e rassicuranti.
              </p>
            </header>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Che cos'è la Gravidanza Extrauterina?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Una gravidanza si definisce ectopica quando l'ovulo fecondato si impianta in una sede diversa dalla cavità uterina. Nella maggior parte dei casi (circa il 90-95%), l'impianto avviene in una delle tube di Falloppio.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader><CardTitle className="text-xl">Cosa significa esattamente per me?</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Una gravidanza extrauterina non può evolvere normalmente e rappresenta un rischio per la salute. È fondamentale un intervento tempestivo.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader><CardTitle className="text-xl">Quali sono i sintomi?</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start"><span className="text-primary mr-2">•</span><span>Ritardo mestruale e test di gravidanza positivo.</span></li>
                      <li className="flex items-start"><span className="text-primary mr-2">•</span><span>Sanguinamento vaginale anomalo (spotting).</span></li>
                      <li className="flex items-start"><span className="text-primary mr-2">•</span><span>Dolore addominale o pelvico, spesso localizzato su un lato.</span></li>
                      <li className="flex items-start"><span className="text-primary mr-2">•</span><span>In caso di rottura: dolore intenso, vertigini, svenimento.</span></li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader><CardTitle className="text-xl">Perché è successo a me?</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Non è una tua colpa. Le cause possono includere precedenti infezioni pelviche, interventi chirurgici, uso di tecniche di procreazione assistita o una storia di precedenti gravidanze ectopiche.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">La Diagnosi</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader><CardTitle className="text-xl">1. Dosaggio della Beta-HCG</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Nelle gravidanze uterine normali, il valore raddoppia circa ogni 48-72 ore. Nelle gravidanze extrauterine l'incremento è spesso più lento.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader><CardTitle className="text-xl">2. Ecografia Transvaginale</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      L'ecografia transvaginale è l'esame chiave per confermare la diagnosi.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Le Opzioni di Trattamento</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader><CardTitle className="text-xl">1. Terapia Medica: Il Methotrexate</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Opzione per pazienti clinicamente stabili con valori di Beta-HCG relativamente bassi. Il Methotrexate blocca la crescita delle cellule embrionali tramite iniezione intramuscolare.
                    </p>
                    <h4 className="font-semibold text-foreground mb-2">Vantaggi</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start"><span className="text-primary mr-2">•</span><span><strong>Non invasiva:</strong> evita la chirurgia.</span></li>
                      <li className="flex items-start"><span className="text-primary mr-2">•</span><span><strong>Conservazione della tuba.</strong></span></li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader><CardTitle className="text-xl">2. Terapia Chirurgica: Laparoscopia</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Scelta più comune quando la paziente è instabile o la terapia medica non ha avuto successo. Tecnica mini-invasiva con 2-3 piccole incisioni.
                    </p>
                    <h4 className="font-semibold text-foreground mb-2">Salpingostomia vs. Salpingectomia</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Il chirurgo valuterà se eseguire un intervento conservativo (preservando la tuba) o radicale (rimozione della tuba). L'altra tuba sana è in grado di portare avanti una futura gravidanza.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-8 sm:mb-12">
              <Card className="border-primary/20">
                <CardHeader><CardTitle className="text-xl">Dopo il Trattamento: Il Tuo Recupero</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    La maggior parte delle donne che hanno avuto una gravidanza extrauterina ha future gravidanze sane e a termine.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-8">
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
                <CardHeader><CardTitle className="text-2xl">Parlane con il Dottor Rossi</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Per discutere le opzioni diagnostiche e terapeutiche più adatte al tuo caso, prenota un appuntamento.
                  </p>
                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <a href="tel:0915558609">
                      <Phone className="mr-2 h-5 w-5" />
                      Prenota una Visita
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GravidanzaExtrauterina;
