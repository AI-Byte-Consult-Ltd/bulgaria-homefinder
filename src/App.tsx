import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Sell from "./pages/Sell";
import Services from "./pages/Services";
import RestorationProject from "./pages/RestorationProject";
import BuyingMistakesArticle from "./pages/BuyingMistakesArticle";
import BulgariaPriceForecastsArticle from "./pages/BulgariaPriceForecastsArticle";
import Top5CoastalAreasForInvestmentArticle from "./pages/Top5CoastalAreasForInvestmentArticle";
import BulgariaCheaperThanEUArticle from "./pages/BulgariaCheaperThanEUArticle";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { ChatWidget } from "./components/ChatWidget";
import AddProperty from "./pages/AddProperty";
import "./i18n/config";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/services" element={<Services />} />
            <Route path="/restoration/:id" element={<RestorationProject />} />
            {/* Articles */}
            <Route path="/article/buying-mistakes-2026" element={<BuyingMistakesArticle />} />
            <Route path="/article/bulgaria-price-forecasts" element={<BulgariaPriceForecastsArticle />} />
            <Route
              path="/article/top-5-areas-in-bulgarian-coast-to-buy"
              element={<Top5CoastalAreasForInvestmentArticle />}
            />
            <Route
              path="/article/bulgaria-cheaper-than-eu"
              element={<BulgariaCheaperThanEUArticle />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/add-property" element={<AddProperty />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatWidget />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;