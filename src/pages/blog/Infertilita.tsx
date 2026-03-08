import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import { Button } from "@/components/ui/button";
import { Users, ClipboardList, Search, Heart } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Infertilita = () => {
  return (
    <>
      <Helmet>
        <title>Infertilità di Coppia Palermo | Dott. Claudio Rossi | FIVET, ICSI, PMA</title>
        <meta name="description" content="Affronto casi di infertilità attraverso esami mirati e strategie personalizzate. Scopri come posso aiutarti e prenota una consulenza" />
        <link rel="canonical" href="https://www.rossiginecologo.it/infertilita" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Infertilità di Coppia Palermo | Diagnosi e Trattamento PMA" />
        <meta property="og:description" content="Affronto casi di infertilità attraverso esami mirati e strategie personalizzate." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <BlogHero
          label="Fertilità · PMA"
          title="Infertilità di Coppia"
          description="Diagnosi, supporto e orientamento nel percorso verso la genitorialità."
          breadcrumbLabel="Infertilità di Coppia"
        />
        <main>
          <section className="py-16 sm:py-20 bg-background">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">

                <div className="prose prose-lg max-w-none">
                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <p className="text-lg text-foreground/80 leading-relaxed mb-0">
                      L'infertilità è una condizione che riguarda circa il 15-20% delle coppie. Quando una coppia non riesce a concepire dopo 12 mesi di rapporti regolari non protetti (o 6 mesi se la donna ha più di 35 anni), è opportuno rivolgersi a uno specialista. Offro un percorso diagnostico completo e personalizzato per identificare le cause dell'infertilità e individuare le strategie terapeutiche più appropriate.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold mb-6 text-foreground mt-8 flex items-center gap-3">
                    <Users className="h-7 w-7 text-primary" />
                    Valutazione dell'Infertilità di Coppia
                  </h2>

                  <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                    L'infertilità può avere cause femminili, maschili o miste. La prima visita è fondamentale per:
                  </p>

                  <ul className="text-lg text-foreground/80 mb-6 space-y-2">
                    <li>Raccogliere la storia clinica della coppia</li>
                    <li>Valutare eventuali fattori di rischio</li>
                    <li>Analizzare precedenti esami o trattamenti</li>
                    <li>Pianificare gli accertamenti diagnostici necessari</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6 text-foreground mt-8 flex items-center gap-3">
                    <ClipboardList className="h-7 w-7 text-primary" />
                    Esami Preliminari
                  </h2>

                  <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                    <strong>Esami per la donna:</strong>
                  </p>
                  <ul className="text-lg text-foreground/80 mb-6 space-y-2">
                    <li><strong>Dosaggi ormonali</strong>: FSH, LH, AMH, prolattina, TSH in 2°-3° gg di ciclo</li>
                    <li><strong>Ecografia transvaginale</strong>: eseguita in prima fase di ciclo per la valutazione di utero, ovaie e conta follicoli antrali</li>
                    <li><strong>Isterosalpingografia (HSG)</strong>: verifica della pervietà tubarica, se indicato</li>
                    <li><strong>Isteroscopia diagnostica</strong>: esplorazione della cavità uterina</li>
                    <li><strong>Monitoraggio dell'ovulazione</strong></li>
                  </ul>

                  <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                    <strong>Esami per l'uomo:</strong>
                  </p>
                  <ul className="text-lg text-foreground/80 mb-6 space-y-2">
                    <li><strong>Spermiogramma</strong>: analisi completa del liquido seminale</li>
                    <li><strong>Spermiocoltura</strong>: ricerca di infezioni</li>
                    <li><strong>Dosaggi ormonali</strong>: testosterone, FSH, LH</li>
                    <li><strong>Consulenza andrologica/urologica</strong> se necessario</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6 text-foreground mt-8 flex items-center gap-3">
                    <Search className="h-7 w-7 text-primary" />
                    Percorsi Diagnostici Personalizzati
                  </h2>

                  <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                    Sulla base dei risultati degli esami, è possibile identificare le cause dell'infertilità:
                  </p>
                  <ul className="text-lg text-foreground/80 mb-6 space-y-2">
                    <li><strong>Fattore tubarico</strong>: ostruzione o danno alle tube di Falloppio</li>
                    <li><strong>Fattore ovulatorio</strong>: assenza o irregolarità dell'ovulazione (PCOS, iperprolattinemia)</li>
                    <li><strong>Endometriosi</strong></li>
                    <li><strong>Fattore uterino</strong>: fibromi, polipi, anomalie congenite</li>
                    <li><strong>Fattore maschile</strong>: oligospermia, astenospermia, teratospermia</li>
                    <li><strong>Infertilità inspiegata</strong></li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6 text-foreground mt-8 flex items-center gap-3">
                    <Heart className="h-7 w-7 text-primary" />
                    Supporto e Orientamento alla PMA
                  </h2>

                  <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                    Quando necessario, offro supporto e orientamento verso le tecniche di Procreazione Medicalmente Assistita (PMA):
                  </p>
                  <ul className="text-lg text-foreground/80 mb-6 space-y-2">
                    <li><strong>Inseminazione intrauterina (IUI)</strong></li>
                    <li><strong>Fecondazione in vitro (FIVET)</strong></li>
                    <li><strong>ICSI (iniezione intracitoplasmatica dello spermatozoo)</strong></li>
                    <li><strong>Fecondazione eterologa (con donazione di gameti)</strong></li>
                  </ul>

                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    Lavoro presso il centro di PMA dell'AOOR Villa Sofia - Cervello e collaboro con centri esteri qualificati per garantire alla coppia il miglior percorso terapeutico possibile.
                  </p>

                  <div className="bg-primary/5 p-6 rounded-lg mt-12">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      Quando rivolgersi allo specialista?
                    </h3>
                    <ul className="text-lg text-foreground/80 space-y-2">
                      <li>Dopo 12 mesi di tentativi senza successo (coppia under 35)</li>
                      <li>Dopo 6 mesi di tentativi senza successo (donna over 35)</li>
                      <li>In presenza di cicli irregolari o assenti</li>
                      <li>Storia di endometriosi, PCOS o altre patologie ginecologiche</li>
                      <li>Precedenti interventi chirurgici pelvici</li>
                      <li>Problemi noti di fertilità maschile</li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-lg mt-8 text-center">
                    <p className="text-lg text-foreground/80 mb-4">
                      Prenota una consulenza per iniziare il tuo percorso
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

export default Infertilita;
