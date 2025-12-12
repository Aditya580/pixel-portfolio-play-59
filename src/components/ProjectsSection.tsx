import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Gamepad2, Zap, Monitor } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PROJECT ONE",
    subtitle: "Epic Game-Inspired Landing",
    description:
      "An epic game-inspired landing page with GSAP animations. Features a hero intro with timeline-based scene reveal, magnetic cursor, and optimized 60fps scroll-driven sections.",
    features: [
      "Hero intro with timeline-based scene reveal",
      "Magnetic cursor that follows interactions",
      "Optimized 60fps scroll-driven sections",
      "Game-like HUD elements",
    ],
    stack: ["React", "GSAP", "Tailwind", "Framer Motion"],
    icon: Gamepad2,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 2,
    title: "PROJECT TWO",
    subtitle: "Performance Dashboard",
    description:
      "Real-time analytics dashboard with smooth animations and data visualizations. Built for speed with sub-second load times.",
    features: [
      "Real-time data streaming",
      "Interactive chart animations",
      "Dark/light theme support",
      "Responsive grid layouts",
    ],
    stack: ["Next.js", "D3.js", "TypeScript", "Recharts"],
    icon: Zap,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: 3,
    title: "PROJECT THREE",
    subtitle: "Creative Portfolio",
    description:
      "A creative portfolio showcasing motion design work with seamless page transitions and immersive scrolling experiences.",
    features: [
      "Page transitions with shared layouts",
      "Parallax scrolling effects",
      "Custom cursor interactions",
      "Video integration",
    ],
    stack: ["React", "Framer Motion", "Three.js", "Vite"],
    icon: Monitor,
    color: "text-neon-green",
    bgColor: "bg-neon-green/10",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="hud-element text-primary">// PORTFOLIO</span>
          <h2 className="font-pixel text-xl md:text-2xl text-foreground mt-2">
            RETRO <span className="text-accent">PROJECT WINDOW</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -5 }}
              className="game-card overflow-hidden group"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-destructive" />
                    <span className="w-3 h-3 rounded-full bg-primary" />
                    <span className="w-3 h-3 rounded-full bg-neon-green" />
                  </div>
                  <span className="font-pixel text-xs text-muted-foreground ml-2">
                    {project.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1.5 hover:bg-muted rounded transition-colors"
                  >
                    <Github size={16} className="text-muted-foreground" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1.5 hover:bg-muted rounded transition-colors"
                  >
                    <ExternalLink size={16} className="text-muted-foreground" />
                  </motion.button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${project.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <project.icon className={project.color} size={32} />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="font-pixel text-sm text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className={`text-sm font-mono ${project.color} mb-4`}>
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground font-mono text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="grid md:grid-cols-2 gap-2 mb-4">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs text-muted-foreground font-mono"
                        >
                          <span className={project.color}>▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-foreground text-xs font-mono rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
