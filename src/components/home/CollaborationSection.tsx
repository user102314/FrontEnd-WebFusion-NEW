import { motion } from "framer-motion";
import { Handshake, CalendarCheck, Sparkles } from "lucide-react";

export const CollaborationSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow background blob */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[350px] bg-primary/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4">

        {/* Badge */}
        <div className="flex justify-center mb-10">
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden border border-border/50 bg-card/40 max-w-3xl mx-auto"
          style={{ backdropFilter: "blur(24px)" }}
        >
          {/* Shimmer top line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          {/* Logos row */}
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

            {/* × + date */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, type: "spring", stiffness: 200 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.2)]">
                <span className="text-2xl font-black text-gradient">×</span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold"
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

          {/* Bottom area */}
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
              Une collaboration stratégique entre deux agences innovantes pour repousser
              les limites du digital et créer des expériences numériques exceptionnelles.
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
        </motion.div>

      </div>
    </section>
  );
};
