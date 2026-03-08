const ContactMap = () => (
  <section className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
    <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3">
      Raggiungici
    </p>
    <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">
      Come raggiungerci
    </h2>
    <div className="rounded-2xl overflow-hidden shadow-xl border border-border min-h-[320px] sm:min-h-[420px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.89!2d13.35963!3d38.11593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef480a3f23b9%3A0x6c5f49e2c7c7be2d!2sVia%20Marchese%20Ugo%2C%2056%2C%2090141%20Palermo%20PA!5e0!3m2!1sit!2sit!4v1709900000000!5m2!1sit!2sit"
        className="w-full h-[320px] sm:h-[420px] block"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mappa studio Dott. Claudio Rossi - Via Marchese Ugo 56, Palermo"
      />
    </div>
  </section>
);

export default ContactMap;
