import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import dottImg from "@/assets/dott-rossi-about.jpg";

const AboutSection = () => (
  <section className="bg-primary py-20 sm:py-28">
    <div className="max-w-6xl mx-auto px-6 sm:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: image */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src={dottImg}
            alt="Dott. Claudio Rossi"
            className="w-full h-auto object-cover aspect-square"
            loading="lazy"
          />
        </div>

        {/* Right: text */}
        <div>
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
            Il dottore
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary-foreground mb-6">
            Dott. Claudio Rossi
          </h2>
          <p className="font-sans text-primary-foreground/80 text-base leading-relaxed mb-8">
            Specialista in Ostetricia e Ginecologia, il Dott. Rossi opera a Palermo con un approccio
            clinico basato sull'ascolto, la prevenzione e le tecnologie diagnostiche più avanzate.
            Dirigente Medico presso l'AOOR Villa Sofia Cervello, unisce l'esperienza ospedaliera
            all'attenzione personalizzata dello studio privato.
          </p>
          <Button variant="heroOutline" asChild>
            <Link to="/chi-sono" className="gap-2">
              La mia storia →
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
