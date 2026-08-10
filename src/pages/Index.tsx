import { Helmet } from "react-helmet-async";
import { PageTransition } from "../components/layout/PageTransition";
import { HeroSection } from "../components/home/HeroSection";
import { AboutSection } from "../components/home/AboutSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { SkillsSection } from "../components/home/SkillsSection";
import { StatsSection } from "../components/home/StatsSection";
import { CTASection } from "../components/home/CTASection";
import { CollaborationSection } from "../components/home/CollaborationSection";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "WebFusion Digital",
  "url": "https://webfusiondigital.tn",
  "logo": "https://webfusiondigital.tn/logo.webp",
  "image": "https://webfusiondigital.tn/logo.webp",
  "description": "Agence spécialisée en développement web, marketing digital et solutions numériques en Tunisie.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tunis",
    "addressCountry": "TN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "36.8065",
    "longitude": "10.1815"
  },
  "openingHours": "Mo-Su 08:00-21:00",
  "telephone": "+21644321987",
  "email": "web.fusion.suport@gmail.com",
  "sameAs": [
    "https://www.linkedin.com/company/webfusion-digital"
  ]
};

const Index = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>WebFusion Digital | Agence Web &amp; Marketing Digital en Tunisie</title>
        <meta name="description" content="WebFusion Digital aide les entreprises tunisiennes à créer des sites web performants, des applications mobiles et à optimiser leur SEO. Contactez-nous dès aujourd'hui." />
        <link rel="canonical" href="https://webfusiondigital.tn/" />
        <meta property="og:title" content="WebFusion Digital | Agence Web &amp; Marketing en Tunisie" />
        <meta property="og:description" content="Création de sites web, applications mobiles et SEO en Tunisie. Obtenez votre premier service gratuitement." />
        <meta property="og:url" content="https://webfusiondigital.tn/" />
        <meta property="og:image" content="https://webfusiondigital.tn/logo.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WebFusion Digital | Agence Web en Tunisie" />
        <meta name="twitter:description" content="Création de sites web, applications mobiles et SEO en Tunisie." />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      </Helmet>
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <SkillsSection />
        <CollaborationSection />
        <CTASection />
      </main>
    </PageTransition>
  );
};

export default Index;

