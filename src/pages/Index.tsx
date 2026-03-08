import Header from "@/components/Header";
import ContactHero from "@/components/ContactHero";
import ContactBooking from "@/components/ContactBooking";
import ContactLocation from "@/components/ContactLocation";
import ContactMap from "@/components/ContactMap";
import ContactCTA from "@/components/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      <ContactBooking />
      <ContactLocation />
      <ContactMap />
      <ContactCTA />
    </div>
  );
};

export default Index;
