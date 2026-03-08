import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ChiSono from "./pages/ChiSono";
import Blog from "./pages/Blog";
import ChirurgiaLaparoscopica from "./pages/blog/ChirurgiaLaparoscopica";
import Infertilita from "./pages/blog/Infertilita";
import PrimaVisitaGinecologica from "./pages/blog/PrimaVisitaGinecologica";
import ScreeningPrenatale from "./pages/blog/ScreeningPrenatale";
import ScreeningVsDiagnostic from "./pages/blog/ScreeningVsDiagnostic";
import StreptococcoB from "./pages/blog/StreptococcoB";
import GravidanzaExtrauterina from "./pages/blog/GravidanzaExtrauterina";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chi-sono" element={<ChiSono />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/chirurgia-laparoscopica" element={<ChirurgiaLaparoscopica />} />
            <Route path="/blog/infertilita" element={<Infertilita />} />
            <Route path="/blog/prima-visita-ginecologica" element={<PrimaVisitaGinecologica />} />
            <Route path="/blog/screening-prenatale" element={<ScreeningPrenatale />} />
            <Route path="/blog/screening-vs-diagnostico" element={<ScreeningVsDiagnostic />} />
            <Route path="/blog/streptococco-b" element={<StreptococcoB />} />
            <Route path="/blog/gravidanza-extrauterina" element={<GravidanzaExtrauterina />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
