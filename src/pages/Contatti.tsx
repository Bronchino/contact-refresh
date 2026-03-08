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
