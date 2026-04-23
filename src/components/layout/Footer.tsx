import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Développement Web", path: "/projets" },
    { name: "Développement Mobile", path: "/projets" },
    { name: "Cybersécurité", path: "/competences" },
    { name: "Consulting", path: "/contact" },
  ],
  company: [
    { name: "À propos", path: "/" },
    { name: "Équipe", path: "/equipe" },
    { name: "Témoignages", path: "/temoignages" },
    { name: "Contact", path: "/contact" },
  ],
  social: [
    { name: "GitHub", icon: Github, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "Email", icon: Mail, url: "mailto:web.fusion.suport@gmail.com" },
  ],
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "web.fusion.suport@gmail.com",
    sub: "Réponse sous 24h",
    href: "mailto:web.fusion.suport@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+216 44 321 987",
    sub: "Lun-Dim, 8h-21h",
    href: "tel:+21644321987",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Tunis, Tunisie",
    sub: "Rendez-vous sur place",
    href: "#",
  },
  {
    icon: Clock,
    label: "Disponibilité",
    value: "24/7",
    sub: "24 Heures",
    href: "#",
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground font-display">W</span>
              </div>
              <span className="text-xl font-bold font-display text-gradient">WebFusion</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Solutions innovantes en développement web, mobile et cybersécurité pour transformer vos idées en réalité.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-xl glass-card border border-border/50 hover:border-primary/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold font-display mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold font-display mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info — occupe 2 colonnes sur lg */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold font-display mb-4">Contact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-3 p-3 rounded-xl glass-card border border-border/40 hover:border-primary/40 transition-all group cursor-pointer"
                >
                  <div className="mt-0.5 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium leading-tight truncate">{item.value}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{item.sub}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WebFusion. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
