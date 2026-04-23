import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from "react";

// Lazy-loaded pages — each page is a separate JS chunk (code splitting)
const Index              = lazy(() => import("./pages/Index"));
const Projets            = lazy(() => import("./pages/Projets"));
const Temoignages        = lazy(() => import("./pages/Temoignages"));
const Equipe             = lazy(() => import("./pages/Equipe"));
const Competences        = lazy(() => import("./pages/Competences"));
const Contact            = lazy(() => import("./pages/Contact"));
const AdminLogin         = lazy(() => import("./pages/AdminLogin"));
const AdminPanel         = lazy(() => import("./pages/AdminPanel"));
const NotFound           = lazy(() => import("./pages/NotFound"));
const MyLBDetail         = lazy(() => import("./pages/MyLBDetail"));
const FormacityDetail    = lazy(() => import("./pages/FormacityDetail"));
const CafeZoneProject    = lazy(() => import("./pages/cafeDetail"));
const WebFusionDetail    = lazy(() => import("./pages/WebFusionDetail"));
const JNBFitnessDetail   = lazy(() => import("./pages/JNBFitnessDetail"));
const TeamSection        = lazy(() => import("./pages/TeamSection"));
const Parlez             = lazy(() => import("./pages/Parlez"));
const Services           = lazy(() => import("./pages/Services"));
const AutoAssistAppDetail = lazy(() => import("./pages/AutoAssistAppDetail"));
const BrandsCityDetail   = lazy(() => import("./pages/BrandsCityDetail"));

// Minimal fallback — invisible spinner to avoid layout shift
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Configuration SEO par défaut pour tout le site */}
        <Helmet>
          <title>WebFusion | Agence Digitale & Solutions Web</title>
          <meta name="description" content="WebFusion accompagne les entreprises dans leur transformation digitale avec des solutions web modernes et performantes." />
          <link rel="canonical" href="https://webfusiondigital.tn" />
        </Helmet>

        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <Suspense fallback={<PageLoader />}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/projets" element={<Projets />} />
                  <Route path="/projets/mylb" element={<MyLBDetail />} />
                  <Route path="/projets/formacity" element={<FormacityDetail />} />
                  <Route path="/projets/cafe-zone" element={<CafeZoneProject />} />
                  <Route path="/projets/webfusion-digital" element={<WebFusionDetail />} />
                  <Route path="/projets/jnbfitness" element={<JNBFitnessDetail />} />
                  <Route path="/projets/autoassistapp" element={<AutoAssistAppDetail />} />
                  <Route path="/projets/brands-city" element={<BrandsCityDetail />} />
                  <Route path="/temoignages" element={<Temoignages />} />
                  <Route path="/gallery" element={<TeamSection />} />
                  <Route path="/equipe" element={<Equipe />} />
                  <Route path="/Services" element={<Services />} />
                  <Route path="/competences" element={<Competences />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/parlez" element={<Parlez />} />
                  <Route path="/Admin067" element={<AdminLogin />} />
                  <Route path="/Admin067/panel" element={<AdminPanel />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;