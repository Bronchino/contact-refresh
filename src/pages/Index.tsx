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
      <meta
        name="description"
        content="Visita ginecologica, ecografia e prevenzione a Palermo. Studio del Dott. Claudio Rossi, Via Marchese Ugo 56. Prenota online."
      />
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
