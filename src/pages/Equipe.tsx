import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PageTransition } from "../components/layout/PageTransition";
import { Linkedin, Github, Twitter } from "lucide-react";
import TeamSection from "./TeamSection";

const teamMembers = [
  {
    name: "Oussama Karia",
    role: "Full Stack Developer & Expert en Cybersécurité",
    description: "Expert en architecture logicielle et développement full-stack. Passionné par l'innovation et les technologies émergentes.",
    image: "oussema.webp",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Salaheddine Jendoubi",
    role: "Full Stack Developer & Expert Solutions IoT",
    description: "Spécialiste en cybersécurité et systèmes distribués. Certifié CISSP et passionné par la protection des données.",
    image: "salah.webp",
    social: {
      linkedin: "https://www.linkedin.com/in/oussema-karia-6531a6390/",
      github: "https://github.com/user102314"

    },
  },
  {
    name: "Wael Houidi",
    role: "Full Stack Developer & Expert SEO",
    description: "Développeur mobile expert en React Native et Flutter. Créateur d'expériences utilisateur exceptionnelles.",
    image: "wael.webp",
    social: {
      linkedin: "#",
      github: "#"
    },
  },
  {
    name: "Aziz",
    role: "Marketing & Communication",
    description: "Spécialiste en marketing digital et stratégie de communication. Passionné par la croissance des marques et l'engagement client.",
    image: "aziz.webp",
    isNew: true,
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Mohamed",
    role: "Marketing & Communication",
    description: "Expert en stratégie de contenu et gestion des réseaux sociaux. Créatif et orienté résultats pour maximiser la visibilité de la marque.",
    image: "mohamed.webp",
    isNew: true,
    social: {
      linkedin: "#",
      github: "#"
    },
  },
];

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
  isNew?: boolean;
  social: { linkedin?: string; github?: string; twitter?: string };
};

function MemberCard({ member, index, isInView }: { member: TeamMember; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      {/* ✦ Badge "Nouveau Membre" */}
      {member.isNew && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: -8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase"
          style={{
            background: "linear-gradient(135deg, #10b981, #059669)",
            boxShadow: "0 0 14px rgba(16,185,129,0.55)",
            color: "#fff",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          Nouveau Membre
        </motion.div>
      )}

      <div className={`glass-card-hover overflow-hidden ${member.isNew ? "ring-1 ring-emerald-500/40" : ""}`}>
        {/* Image with 3D Tilt Effect */}
        <div className="relative aspect-square overflow-hidden">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
            transition={{ duration: 0.4 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

            {/* Glow Effect on Hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${member.isNew ? "bg-gradient-to-br from-emerald-500/20 to-teal-500/20" : "bg-gradient-to-br from-primary/20 to-secondary/20"}`} />
          </motion.div>

          {/* Social Links - Appear on Hover */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            {member.social.linkedin && member.social.linkedin !== "#" && (
              <motion.a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-xl glass-card border border-white/20 hover:border-primary transition-colors"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Linkedin className="w-5 h-5" />
              </motion.a>
            )}
            {member.social.github && member.social.github !== "#" && (
              <motion.a href={member.social.github} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-xl glass-card border border-white/20 hover:border-primary transition-colors"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Github className="w-5 h-5" />
              </motion.a>
            )}
            {member.social.twitter && member.social.twitter !== "#" && (
              <motion.a href={member.social.twitter} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-xl glass-card border border-white/20 hover:border-primary transition-colors"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Twitter className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold font-display mb-1 group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          <p className={`text-sm font-medium mb-3 ${member.isNew ? "text-emerald-500" : "text-primary"}`}>
            {member.role}
          </p>
          <p className="text-sm text-muted-foreground">
            {member.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Equipe() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <PageTransition>
      <main className="pt-32 pb-24" ref={ref}>
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-primary font-semibold mb-4 block">Notre Équipe</span>
            <h1 className="section-heading">
              Les <span className="text-gradient">talents</span> derrière WebFusion
            </h1>
            <p className="section-subheading">
              Une équipe passionnée d'experts dédiés à transformer vos projets en succès.
            </p>
          </motion.div>

          {/* Team Grid — grille 6 colonnes, toutes les cartes col-span-2 = même taille */}
          <div className="grid grid-cols-6 gap-8 lg:gap-12">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div key={member.name} className="col-span-6 md:col-span-2">
                <MemberCard member={member} index={index} isInView={isInView} />
              </div>
            ))}
            {/* Les 2 nouveaux membres centrés : col-start-2 et col-start-4 */}
            <div className="col-span-6 md:col-span-2 md:col-start-2">
              <MemberCard member={teamMembers[3]} index={3} isInView={isInView} />
            </div>
            <div className="col-span-6 md:col-span-2">
              <MemberCard member={teamMembers[4]} index={4} isInView={isInView} />
            </div>
          </div>

          {/* Join Us CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="glass-card p-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold font-display mb-4">
                Rejoignez <span className="text-gradient">l'aventure</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Nous sommes toujours à la recherche de talents passionnés. Envoyez-nous votre candidature !
              </p>
              <motion.button
                className="btn-neon"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Postuler maintenant
              </motion.button>
            </div>
          </motion.div>
        </div>
        <TeamSection />
      </main>
    </PageTransition>
  );
}
