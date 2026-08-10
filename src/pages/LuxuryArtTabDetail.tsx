import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { PageTransition } from "../components/layout/PageTransition";
import {
  ShoppingBag,
  Layers,
  Truck,
  LayoutDashboard,
  Search,
  Shield,
  CheckCircle2,
  Zap,
  Palette,
  BarChart3,
  Share2,
  ExternalLink,
} from "lucide-react";

export default function LuxuryArtTabDetail() {
  const features = [
    {
      role: "Galerie Luxe",
      desc: "Catalogue dynamique d'œuvres encadrées, filtrable par style et catégorie.",
    },
    {
      role: "Boutique Client",
      desc: "Expérience d'achat premium sur mobile et desktop, panier et wishlist inclus.",
    },
    {
      role: "Back-office Complet",
      desc: "Gestion des commandes, livraisons, produits, clients et fidélité.",
    },
    {
      role: "Analytics E-commerce",
      desc: "Suivi du CA, panier moyen, conversion et performance des produits.",
    },
  ];

  const functionalNeeds = [
    {
      title: "Catalogue & Filtres",
      desc: "Galerie de tableaux muraux avec filtres par thématique, zoom produit et stock en temps réel.",
      icon: Search,
    },
    {
      title: "Gestion Multi-canaux",
      desc: "Commandes unifiées depuis le site web, Facebook, Instagram et WhatsApp.",
      icon: Share2,
    },
    {
      title: "Pilotage Opérationnel",
      desc: "Dashboard admin : analytics, suivi Colissimo, factures et statut des livraisons.",
      icon: LayoutDashboard,
    },
  ];

  const gallery = [
    {
      src: "/luxuryarttab-galerie.png",
      alt: "Galerie Luxury Art Tab",
      label: "Galerie & Catalogue Client",
    },
    {
      src: "/luxuryarttab-analytics.png",
      alt: "Analytics Luxury Art Tab",
      label: "Analytics E-commerce",
    },
    {
      src: "/luxuryarttab-commandes.png",
      alt: "Gestion des commandes",
      label: "Gestion des Commandes",
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Luxury Art Tab | E-Commerce Professionnel — WebFusion Digital</title>
        <meta
          name="description"
          content="Luxury Art Tab : application e-commerce professionnelle pour la vente et la gestion de tableaux muraux de luxe, avec galerie client et dashboard analytique."
        />
        <link rel="canonical" href="https://webfusiondigital.tn/projets/luxury-art-tab" />
      </Helmet>

      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6"
            >
              <ShoppingBag className="w-3 h-3" /> E-COMMERCE PROFESSIONNEL
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              Luxury <span className="text-gradient">Art Tab</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              Une plateforme d'e-commerce et de gestion de luxe pour collections d'art mural.
              Galerie exclusive d'œuvres encadrées, outils analytiques avancés et pilotage
              logistique multi-canaux.
            </motion.p>
            <motion.a
              href="https://www.luxury-art.tn"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Visiter le site
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Cover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-24"
          >
            <div className="relative group rounded-3xl overflow-hidden border border-border/50 max-w-5xl w-full aspect-video md:aspect-[21/9] bg-muted shadow-2xl">
              <img
                src="/luxuryarttab-cover.png"
                alt="Luxury Art Tab — couverture du projet"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Points clés */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Points <span className="text-primary">Clés</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((item, i) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 text-center border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 text-md">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Le projet + stack */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Palette className="text-primary" />
                Le Projet
              </h2>
              <p className="text-muted-foreground mb-8">
                Luxury Art Tab est une application e-commerce professionnelle conçue pour une
                boutique d'art mural de luxe. Elle combine une vitrine client élégante et un
                back-office puissant pour gérer ventes, stocks, livraisons et présence sociale.
              </p>
              <ul className="space-y-4">
                {[
                  "Galerie filtrable de tableaux muraux (styles, thèmes, stock)",
                  "Parcours d'achat mobile-first avec panier et wishlist",
                  "Dashboard admin : revenus, analytics, commandes et Colissimo",
                  "Intégration Facebook, Instagram et WhatsApp comme canaux de vente",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative glass-card p-8 border-border/50"
              >
                <div className="flex justify-between items-center mb-8">
                  <h4 className="font-bold flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" /> Capacités
                  </h4>
                  <span className="text-[10px] text-primary bg-primary/10 px-2 py-1 rounded font-mono">
                    FULL STACK
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-foreground/5 rounded-xl border border-border/50">
                    <p className="text-sm italic font-light mb-4 text-muted-foreground">
                      "Une expérience d'art & décoration premium, couplée à des outils de
                      gestion avancés pour piloter la boutique au quotidien."
                    </p>
                    <div className="flex items-center gap-3 justify-end">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-sm font-bold text-gradient">E-Commerce Luxe</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-foreground/5 rounded-xl border border-border/50">
                      <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-tighter">
                        Vitrine
                      </p>
                      <p className="text-sm font-bold">Galerie</p>
                    </div>
                    <div className="p-4 bg-foreground/5 rounded-xl border border-border/50">
                      <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-tighter">
                        Admin
                      </p>
                      <p className="text-sm font-bold">Dashboard</p>
                    </div>
                    <div className="p-4 bg-foreground/5 rounded-xl border border-border/50">
                      <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-tighter">
                        Pilotage
                      </p>
                      <p className="text-sm font-bold">Analytics</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Fonctionnalités */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-center mb-16">
              Fonctionnalités <span className="text-primary">Principales</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {functionalNeeds.map((sol) => (
                <div
                  key={sol.title}
                  className="p-8 glass-card border-border/50 group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                    <sol.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-3">{sol.title}</h3>
                  <p className="text-sm text-muted-foreground">{sol.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Galerie explicative */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  Aperçu de la <span className="text-gradient">Plateforme</span>
                </h2>
                <p className="text-muted-foreground italic flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Interfaces client et back-office pour comprendre le projet.
                </p>
              </div>
              <div className="h-px flex-grow bg-foreground/10 mx-8 hidden md:block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item) => (
                <motion.div
                  key={item.src}
                  whileHover={{ y: -10 }}
                  className="group relative rounded-2xl overflow-hidden border border-border/50 aspect-video"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                  <p className="absolute bottom-4 left-4 text-sm font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center p-12 rounded-[40px] bg-foreground/5 border border-border/50">
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Truck className="w-6 h-6 text-primary" />
              Une solution e-commerce complète
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Luxury Art Tab couvre tout le cycle : découverte des œuvres, commande client,
              confirmation multi-canaux, suivi livraison et analyse des performances boutique.
            </p>
            <a
              href="https://www.luxury-art.tn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              www.luxury-art.tn
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
