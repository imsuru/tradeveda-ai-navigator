import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import UseCases from "./pages/UseCases";
import ProductTradeVeda from "./pages/ProductTradeVeda";
import ProductPatramAI from "./pages/ProductPatramAI";
import ProductTradeGuardAI from "./pages/ProductTradeGuardAI";
import TradeVedaPatramAI from "./pages/TradeVedaPatramAI";
import TradeVedaTradeGuardAI from "./pages/TradeVedaTradeGuardAI";
import Company from "./pages/Company";
import Newsletter from "./pages/Newsletter";
import Discussion from "./pages/Discussion";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Career from "./pages/Career";
import Timeline from "@/pages/Timeline";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import PressAndMedia from './pages/PressAndMedia';
import GivingBack from './pages/GivingBack';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/use-cases" element={<UseCases />} />
      <Route path="/products/tradeveda" element={<ProductTradeVeda />} />
      <Route path="/products/patram-ai" element={<ProductPatramAI />} />
      <Route path="/products/tradeguard-ai" element={<ProductTradeGuardAI />} />
      <Route path="/products/tradeveda-patram-ai" element={<TradeVedaPatramAI />} />
      <Route path="/products/tradeveda-tradeguard-ai" element={<TradeVedaTradeGuardAI />} />
      <Route path="/company" element={<Company />} />
      <Route path="/career" element={<Career />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/discussion" element={<Discussion />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/press-and-media" element={<PressAndMedia />} />
      <Route path="/giving-back" element={<GivingBack />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes; 