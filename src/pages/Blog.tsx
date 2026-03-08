import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "chirurgia-laparoscopica",
    title: "Chirurgia laparoscopica e robotica con Sistema Da Vinci Xi",
    description: "Vantaggi, indicazioni e differenze rispetto alla chirurgia tradizionale. Meno invasiva, più precisa.",
    category: "Ginecologia",
  },
  {
    slug: "prima-visita-ginecologica",
    title: "Prima Visita Ginecologica: Cosa Aspettarsi e Come Prepararsi",
    description: "Guida completa alla prima visita ginecologica: quando farla, il Pap Test, come prepararsi e perché non è dolorosa.",
    category: "Prevenzione",
  },
  {
    slug: "screening-prenatale",
    title: "Screening Prenatale: Test Combinato FMF e DNA Fetale (NIPT)",
    description: "Come orientarsi tra gli screening prenatali del primo trimestre: confronto, affidabilità e accreditamento FMF.",
    category: "Ostetricia",
  },
  {
    slug: "screening-vs-diagnostico",
    title: "Screening e test invasivi in gravidanza: le differenze",
    description: "Guida chiara su test combinato, NIPT, amniocentesi e villocentesi: differenze, rischi e impatto emotivo.",
    category: "Ostetricia",
  },
  {
    slug: "infertilita",
    title: "Infertilità di Coppia: Diagnosi e Percorsi PMA",
    description: "Diagnosi, supporto e orientamento nel percorso verso la genitorialità: FIVET, ICSI e inseminazione intrauterina.",
    category: "Fertilità",
  },
  {
    slug: "streptococco-b",
    title: "Streptococco B in gravidanza: screening e prevenzione",
    description: "Tampone vaginale-rettale tra 35ª–37ª settimana: indicazioni, interpretazione del risultato e profilassi.",
    category: "Ostetricia",
  },
  {
    slug: "gravidanza-extrauterina",
    title: "Gravidanza Extrauterina: Diagnosi e Trattamenti",
    description: "Sintomi, diagnosi, trattamento con Methotrexate e chirurgia laparoscopica. Informazioni chiare e rassicuranti.",
    category: "Ginecologia",
  },
  {
    slug: "disturbi-ciclo-mestruale",
    title: "Disturbi del Ciclo Mestruale: Quando Consultare un Ginecologo",
    description: "Amenorrea, dismenorrea, menorragia, ciclo irregolare e SPM: cause, diagnosi e trattamenti personalizzati.",
    category: "Ginecologia",
  },
  {
    slug: "pap-test-hpv",
    title: "Pap Test e HPV DNA Test: Prevenzione del Tumore del Collo dell'Utero",
    description: "Pap test, HPV DNA test e colposcopia: percorsi di screening personalizzati per la prevenzione del tumore cervicale.",
    category: "Prevenzione",
  },
];

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Blog Ginecologia Palermo | Dott. Claudio Rossi</title>
      <meta name="description" content="Articoli informativi su ginecologia, ostetricia, chirurgia mini-invasiva, screening prenatale, infertilità e PMA a cura del Dott. Claudio Rossi." />
      <link rel="canonical" href="https://www.rossiginecologo.it/blog" />
    </Helmet>

    <Header />

    {/* Hero */}
    <section className="relative bg-hero overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4 flex items-center gap-3 animate-fade-up">
          <span className="w-8 h-px bg-accent/60" />
          Blog
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary-foreground tracking-tight leading-tight animate-fade-up [animation-delay:100ms]">
          Articoli e approfondimenti
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl animate-fade-up [animation-delay:200ms]">
          Informazioni chiare su ginecologia, ostetricia, chirurgia mini-invasiva e medicina della riproduzione.
        </p>
      </div>
    </section>

    {/* Articles Grid */}
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(({ slug, title, description, category }) => (
            <Link
              key={slug}
              to={`/blog/${slug}`}
              className="group rounded-xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                {category}
              </span>
              <h2 className="font-serif text-lg text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                {title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all">
                Leggi l'articolo <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <ContactCTA />
    <Footer />
  </div>
);

export default Blog;
