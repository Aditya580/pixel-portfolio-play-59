import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Zap, Eye } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "GAME-INSPIRED",
    description: "Interfaces that feel like art from your favorite games",
  },
  {
    icon: Zap,
    title: "MOTION-FIRST",
    description: "Every interaction is smooth, deliberate, and delightful",
  },
  {
    icon: Eye,
    title: "PERFORMANCE",
    description: "60fps animations with careful optimization",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="hud-element text-primary">// ABOUT</span>
          <h2 className="font-pixel text-xl md:text-2xl text-foreground mt-2">
            ABOUT <span className="text-accent">PLAYER</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="game-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center">
                  <Gamepad2 className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-pixel text-sm text-foreground">GAURAV</h3>
                  <span className="text-xs text-muted-foreground font-mono">
                    Frontend Developer
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground font-mono leading-relaxed mb-6">
                Game-inspired developer. Motion-first design. Retro arcade
                polish. I craft web experiences that feel fast, tactile, and
                motion-first — with careful performance optimization that keeps
                everything running at 60fps.
              </p>

              <p className="text-muted-foreground font-mono leading-relaxed mb-6">
                Every interface I build feels like a controller in your hands.
                Smooth transitions, magnetic interactions, and that satisfying
                feedback loop that makes users want to keep clicking.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <span className="block font-pixel text-2xl text-primary">
                    5+
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    YEARS EXP
                  </span>
                </div>
                <div className="text-center">
                  <span className="block font-pixel text-2xl text-accent">
                    50+
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    PROJECTS
                  </span>
                </div>
                <div className="text-center">
                  <span className="block font-pixel text-2xl text-neon-green">
                    100%
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    PASSION
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="game-card p-5 flex items-start gap-4 cursor-default group"
              >
                <div className="w-10 h-10 bg-muted rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon
                    className="text-primary group-hover:scale-110 transition-transform"
                    size={20}
                  />
                </div>
                <div>
                  <h4 className="font-pixel text-xs text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-mono">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
