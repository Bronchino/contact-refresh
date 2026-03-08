import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ContactHero from "@/components/ContactHero";
import ContactBooking from "@/components/ContactBooking";
import ContactLocation from "@/components/ContactLocation";
import ContactMap from "@/components/ContactMap";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Contatti = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contatti e Prenotazione | Dott. Claudio Rossi Palermo</title>
        <meta name="description" content="Prenota una visita ginecologica a Palermo. Studio del Dott. Claudio Rossi in Via Marchese Ugo 56. Telefono, email e prenotazione online." />
        <link rel="canonical" href="https://www.rossiginecologo.it/contatti" />
      </Helmet>
      <Header />
      <ContactHero />
      <ContactBooking />
      <ContactLocation />
      <ContactMap />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Contatti;
