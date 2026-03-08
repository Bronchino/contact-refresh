import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, BadgeCheck } from "lucide-react";

const reviews = [
  { name: "Anna", text: "Desidero esprimere la mia piena soddisfazione per l'esperienza avuta con il Dott. Rossi. Grande professionalità, competenza clinica e un'attenzione scrupolosa. Si distingue per la chiarezza nelle spiegazioni e l'approccio umano, sempre rispettoso e rassicurante." },
  { name: "Lucia", text: "Il dott. Rossi comunica molta tranquillità, mette a proprio agio e, nel mio caso, ha individuato immediatamente il problema e lo ha affrontato in modo eccellente." },
  { name: "Chiara", text: "Sono una paziente del dottor Rossi da diversi anni e mi sono sempre trovata benissimo. Ottima anamnesi, visita accurata con spiegazioni e delucidazioni, studio molto curato e sempre puntuale." },
  { name: "Giusi", text: "Il dottor Rossi è uno degli specialisti più bravi che io abbia mai incontrato. Professionale, empatico, diretto e umile. Di fronte a lui non sei un semplice numero ma una persona con tutte le sue emozioni, accolte con profondo rispetto." },
  { name: "Chiara Giulia", text: "Medico altamente professionale, minuziosamente attento, con anamnesi dettagliata per conoscere la storia della paziente nella sua totalità. Il Dott. Rossi ha tutte le qualità di un bravo medico: attento, preciso, serio e con profonda umanità." },
  { name: "Francesca", text: "Ho trovato nel Dott. Rossi un professionista attento e disponibile. La visita è stata accurata e mi sono sentita subito a mio agio. Lo consiglio vivamente a chi cerca un ginecologo competente e umano." },
  { name: "Valentina", text: "Esperienza molto positiva. Studio accogliente, personale cortese e tempi di attesa ridotti. Il dottore è stato chiaro e rassicurante nelle spiegazioni. Sicuramente tornerò per i prossimi controlli." },
  { name: "Martina", text: "Finalmente un medico che ascolta davvero. Il Dott. Rossi si prende il tempo necessario per ogni paziente, senza fretta, con professionalità e gentilezza. Studio moderno e ben organizzato." },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSlides = reviews.length;

  const getVisible = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }, []);

  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => setVisible(getVisible());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [getVisible]);

  const maxIndex = totalSlides - visible;

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
            Cosa dicono le pazienti
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Recensioni verificate dalle pazienti dello studio.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-sm flex items-center justify-center text-primary hover:text-hero-deep transition-colors"
            aria-label="Precedente"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-sm flex items-center justify-center text-primary hover:text-hero-deep transition-colors"
            aria-label="Successiva"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / visible)}%)` }}
            >
              {reviews.map(({ name, text }, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / visible}%` }}
                >
                  <div className="bg-card border border-border rounded-lg p-6 shadow-sm h-72 flex flex-col justify-center">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="font-sans text-muted-foreground text-sm italic leading-relaxed mb-4 line-clamp-5">
                      "{text}"
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      Appuntamento verificato
                    </div>
                    <p className="font-sans text-sm font-bold text-foreground">{name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Vai alla slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
