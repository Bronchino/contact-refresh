const stats = [
  { value: "20+", label: "Anni di esperienza", desc: "Al servizio della salute femminile" },
  { value: "5.000+", label: "Pazienti seguite", desc: "Fiducia e continuità nel tempo" },
  { value: "Voluson S20", label: "Ecografia avanzata", desc: "Ecografo di ultima generazione" },
  { value: "7/7", label: "Prenotazione online", desc: "Disponibilità e flessibilità" },
];

const StatsSection = () => (
  <section className="bg-card py-20 sm:py-28">
    <div className="max-w-6xl mx-auto px-6 sm:px-8">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
          Perché scegliermi
        </h2>
        <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
          Competenza, tecnologia e attenzione al paziente al centro di ogni visita.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ value, label, desc }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <div className="h-20 flex items-center justify-center">
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary font-semibold leading-none">
                {value}
              </span>
            </div>
            <p className="font-sans text-sm font-bold text-foreground mt-3 mb-1">{label}</p>
            <p className="font-sans text-xs text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
