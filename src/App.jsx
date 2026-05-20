import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

// Home Sections
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

// Login
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import OTPVerification from "./pages/Auth/OTPVerification";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
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
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword /> } />
        <Route path="/reset-password" element={<ResetPassword /> } />
        <Route path="/otp-verification" element={<OTPVerification /> } /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;