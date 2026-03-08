import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import HomeCTA from "@/components/home/HomeCTA";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Ginecologo Palermo | Dott. Claudio Rossi</title>
      <meta name="description" content="Visita ginecologica, ecografia e prevenzione a Palermo. Studio del Dott. Claudio Rossi, Via Marchese Ugo 56. Prenota online." />
      <link rel="canonical" href="https://www.rossiginecologo.it/" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Physician",
            "@id": "https://www.rossiginecologo.it/#physician",
            "name": "Dott. Claudio Rossi",
            "description": "Specialista in Ostetricia e Ginecologia con oltre 25 anni di esperienza. Dirigente Medico presso l'AOOR Villa Sofia-Cervello di Palermo.",
            "medicalSpecialty": "Gynecology",
            "url": "https://www.rossiginecologo.it",
            "telephone": "+39-091-5558609",
            "email": "claudio.rossi@me.com",
            "image": "https://www.rossiginecologo.it/assets/dott-rossi-consulto.jpg",
            "sameAs": [
              "https://www.miodottore.it/claudio-rossi/ginecologo/palermo"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Via Marchese Ugo 56",
              "addressLocality": "Palermo",
              "addressRegion": "PA",
              "postalCode": "90141",
              "addressCountry": "IT"
            },
            "worksFor": {
              "@type": "Hospital",
              "name": "AOOR Villa Sofia-Cervello",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Palermo",
                "addressCountry": "IT"
              }
            }
          },
          {
            "@type": "MedicalBusiness",
            "@id": "https://www.rossiginecologo.it/#clinic",
            "name": "Studio Ginecologico Dott. Claudio Rossi",
            "description": "Studio ginecologico privato a Palermo. Visite specialistiche, ecografie, screening prenatale, chirurgia laparoscopica e robotica.",
            "url": "https://www.rossiginecologo.it",
            "telephone": "+39-091-5558609",
            "email": "claudio.rossi@me.com",
            "priceRange": "€€",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Via Marchese Ugo 56",
              "addressLocality": "Palermo",
              "addressRegion": "PA",
              "postalCode": "90141",
              "addressCountry": "IT"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 38.1298,
              "longitude": 13.3382
            },
            "medicalSpecialty": "Gynecology",
            "isAcceptingNewPatients": true
          }
        ]
      })}</script>
    </Helmet>
    <Header />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <StatsSection />
    <ReviewsSection />
    <HomeCTA />
    <Footer />
  </div>
);

export default Index;
