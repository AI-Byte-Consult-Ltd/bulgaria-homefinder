import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Sell from "./pages/Sell";
import Services from "./pages/Services";
import RestorationProject from "./pages/RestorationProject";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import AddProperty from "./pages/AddProperty";

import { ChatWidget } from "./components/ChatWidget";

import "./i18n/config";

import RegionPage from "./pages/RegionPage";
import RentalEstimator from "./pages/RentalEstimator";

// Articles
import BulgariaDigitalNomadVisaArticle from "./pages/BulgariaDigitalNomadVisaArticle";
import BuyingMistakesArticle from "./pages/BuyingMistakesArticle";
import BulgariaPriceForecastsArticle from "./pages/BulgariaPriceForecastsArticle";
import Top5CoastalAreasForInvestmentArticle from "./pages/Top5CoastalAreasForInvestmentArticle";
import BulgariaCheaperThanEUArticle from "./pages/BulgariaCheaperThanEUArticle";
import UkrainianBankAccountArticle from "./pages/UkrainianBankAccountArticle";
import BulgariaSocialInsuranceArticle from "./pages/BulgariaSocialInsuranceArticle";
import BulgariaPropertyTaxesArticle from "./pages/BulgariaPropertyTaxesArticle";
import BulgariaOwnershipCostsArticle from "./pages/BulgariaOwnershipCostsArticle";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
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

              {/* ── Articles ──────────────────────────────────────── */}

              <Route
                path="/article/bulgaria-digital-nomad-visa-2026"
                element={<BulgariaDigitalNomadVisaArticle />}
              />

              <Route
                path="/article/bulgaria-social-insurance-2026"
                element={<BulgariaSocialInsuranceArticle />}
              />

              <Route
                path="/article/ukraine-bank-account-bulgaria-2026"
                element={<UkrainianBankAccountArticle />}
              />

              <Route
                path="/article/buying-mistakes-2026"
                element={<BuyingMistakesArticle />}
              />

              <Route
                path="/article/bulgaria-price-forecasts"
                element={<BulgariaPriceForecastsArticle />}
              />

              <Route
                path="/article/top-5-areas-in-bulgarian-coast-to-buy"
                element={<Top5CoastalAreasForInvestmentArticle />}
              />

              <Route
                path="/article/bulgaria-cheaper-than-eu"
                element={<BulgariaCheaperThanEUArticle />}
              />

              <Route
                path="/article/bulgaria-property-taxes-2026"
                element={<BulgariaPropertyTaxesArticle />}
              />

              <Route
                path="/article/bulgaria-property-ownership-costs-2026"
                element={<BulgariaOwnershipCostsArticle />}
              />

              {/* ── Regions ───────────────────────────────────────── */}

              <Route
                path="/regions/:slug"
                element={<RegionPage />}
              />

              {/* ── Tools ─────────────────────────────────────────── */}

              <Route
                path="/tools/rental-estimator"
                element={<RentalEstimator />}
              />

              {/* ── Static pages ──────────────────────────────────── */}

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* ── Auth ──────────────────────────────────────────── */}

              <Route path="/auth" element={<Auth />} />

              {/* ── Dashboard ─────────────────────────────────────── */}

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/add-property" element={<AddProperty />} />

              {/* ── 404 ───────────────────────────────────────────── */}

              <Route path="*" element={<NotFound />} />

            </Routes>

            <ChatWidget />

          </BrowserRouter>

        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;