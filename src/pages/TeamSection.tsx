import { motion } from "framer-motion";
import { PageTransition } from "../components/layout/PageTransition";
import { Camera, Sparkles, Maximize2, Handshake, CalendarCheck } from "lucide-react";

export default function BestMomentsGallery() {
  const moments = [

    { id: 1, title: "Work", date: "Jan 2024", img: "1.webp" },
    { id: 2, title: "Work", date: "Fév 2024", img: "2.webp" },
    { id: 3, title: "Work", date: "Mar 2024", img: "3.webp" },
    { id: 4, title: "Work", date: "Avr 2024", img: "4.webp" },
    { id: 5, title: "Work", date: "Mai 2024", img: "5.webp" },
    { id: 6, title: "Work", date: "Juin 2024", img: "6.webp" },
    { id: 7, title: "Work", date: "Juil 2024", img: "7.webp" },
    { id: 8, title: "Work", date: "Août 2024", img: "8.webp" },
    { id:10, title: "Work", date: "Août 2024", img: "10.webp" },
    { id: 11, title: "Work", date: "Août 2024", img: "11.webp" },
    { id: 14, title: "Work", date: "Août 2024", img: "14.webp" },
    { id: 12, title: "Work", date: "Août 2024", img: "12.webp" },
    { id: 13, title: "Work", date: "Août 2024", img: "13.webp" },

  ];

  return (
    <PageTransition>
      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-4">

          {/* ============================================================ */}
          {/* --- COLLABORATION SECTION --- */}
          {/* ============================================================ */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-24 relative"
          >
            {/* Glow background blob */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
              <div className="w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
            </div>

            {/* Badge */}
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-bold tracking-widest uppercase"
              >
                <Handshake className="w-3.5 h-3.5" />
                Collaboration Officielle
              </motion.div>
            </div>

            {/* Main card */}
            <div
              className="relative rounded-3xl overflow-hidden border border-border/50 bg-card/40"
              style={{ backdropFilter: "blur(24px)" }}
            >
              {/* Shimmer top line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-8 py-14">

                {/* WebFusion logo */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-24 h-24 rounded-2xl bg-background/60 border border-primary/20 flex items-center justify-center p-3 shadow-[0_0_30px_rgba(0,210,255,0.15)]">
                    <img src="/logo.webp" alt="WebFusion Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm font-bold text-foreground/80 tracking-wide">WebFusion</span>
                </motion.div>

                {/* × divider */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45, type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.2)]">
                    <span className="text-2xl font-black text-gradient">×</span>
                  </div>
                  {/* date badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold"
                  >
                    <CalendarCheck className="w-3 h-3" />
                    01 / 04 / 2026
                  </motion.div>
                </motion.div>

                {/* AstraNova logo */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-24 h-24 rounded-2xl bg-background/60 border border-secondary/20 flex items-center justify-center p-3 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                    <img src="/astranova.webp" alt="AstraNova Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm font-bold text-foreground/80 tracking-wide">AstraNova</span>
                </motion.div>

              </div>

              {/* Bottom area with title */}
              <div className="border-t border-border/30 px-8 py-8 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl md:text-4xl font-bold mb-3"
                >
                  WebFusion <span className="text-gradient">× AstraNova</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.65 }}
                  className="text-muted-foreground text-sm max-w-md mx-auto"
                >
                  Une collaboration stratégique entre deux agences innovantes pour repousser les limites du digital et créer des expériences numériques exceptionnelles.
                </motion.p>

                {/* Sparkle decorations */}
                <div className="flex justify-center gap-6 mt-5">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
                      transition={{ repeat: Infinity, duration: 2 + i * 0.5, delay: i * 0.3 }}
                    >
                      <Sparkles className="w-4 h-4 text-primary/60" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Shimmer bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
            </div>
          </motion.section>

          {/* ============================================================ */}
          {/* --- HEADER --- */}
          {/* ============================================================ */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4"
            >
              <Camera className="w-3 h-3" /> RETROSPECTIVE
            </motion.div>
            <h1 className="text-5xl font-bold mb-4">
              The Best <span className="text-gradient">Moments</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto italic">
              "Le code s'efface, les souvenirs restent." Un aperçu de l'aventure humaine derrière chaque ligne de commande.
            </p>
          </div>

          {/* --- GALLERY GRID (4 Columns) --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {moments.map((moment, i) => (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative"
              >
                {/* Image Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/50 bg-muted/20 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">

                  <img
                    src={moment.img}
                    alt={moment.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />

                  {/* Overlay au survol */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> {moment.date}
                        </p>
                        <h3 className="text-white font-bold text-sm leading-tight">
                          {moment.title}
                        </h3>
                      </div>
                      <div className="p-2 rounded-lg bg-foreground/10 backdrop-blur-md border border-border/50">
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Petite décoration flottante */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* --- FOOTER SECTION --- */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 py-12 border-t border-border/50 text-center"
          >
            <p className="text-muted-foreground text-sm">
              Envie de créer de nouveaux moments avec nous ?
            </p>
            <button className="mt-6 px-8 py-3 rounded-full bg-foreground text-background font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Rejoindre l'aventure
            </button>
          </motion.div>

        </div>
      </main>
    </PageTransition>
  );
}