import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Home/Hero";
import TrustedSection from "./pages/Home/TrustedSection";
import FeaturesSection from "./pages/Home/FeaturesSection";
import PipelineSection from "./pages/Home/PipelineSection";
import WhatsAppSection from "./pages/Home/WhatsAppSection";
import IndiaBusinessSection from "./pages/Home/IndiaBusinessSection";
import TarsAiSection from "./pages/Home/TarsAiSection";
import PricingSection from "./pages/Home/PricingSection";
import TestimonialsSection from "./pages/Home/TestimonialsSection";
import CtaSection from "./pages/Home/CtaSection";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedSection />
      <FeaturesSection />
      <PipelineSection />
      <WhatsAppSection />
      <IndiaBusinessSection />
      <TarsAiSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </>
  );
}

export default App;