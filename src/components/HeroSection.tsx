import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

const techBadges = [
  { name: "React", color: "text-accent" },
  { name: "TypeScript", color: "text-primary" },
  { name: "Framer Motion", color: "text-neon-pink" },
  { name: "Tailwind", color: "text-accent" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Level Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="hud-element text-primary">LEVEL 1</span>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="hud-element">PLAYER PROFILE</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-pixel text-2xl md:text-4xl lg:text-5xl text-foreground leading-relaxed mb-6"
          >
            Hi, I'm{" "}
            <span className="text-primary neon-glow">Aditya</span>
            <br />
            <span className="text-accent">Dev & Creator</span>
          </motion.h1>

          {/* Motto */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-mono mb-8 max-w-2xl"
          >
            I build game-inspired web experiences — heavy on performance, clean
            UI, and delightful micro-interactions
            <span className="typing-cursor text-primary">_</span>
          </motion.p>

          {/* Tech Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {techBadges.map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`px-4 py-2 bg-muted border border-border rounded text-sm font-mono ${tech.color} cursor-default`}
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-pixel text-xs rounded hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW PROJECTS
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="group flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent font-pixel text-xs rounded hover:bg-accent hover:text-accent-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={16} />
              HIRE ME
            </motion.a>
          </motion.div>

          {/* Rank Badge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block"
          >
            <div className="game-card p-6 text-center animate-pulse-glow">
              <span className="hud-element block mb-2">RANK</span>
              <span className="font-pixel text-4xl text-primary neon-glow">
                S
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono">SCROLL</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
