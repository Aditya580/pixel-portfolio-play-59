import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const categories = ["Foundations", "Frontend", "Motion & Scroll", "Build & Backend"];

const skillsByCategory: Record<string, { name: string; level: string; icon: string }[]> = {
  Foundations: [
    { name: "HTML", icon: "📄", level: "Expert" },
    { name: "CSS", icon: "🎨", level: "Expert" },
    { name: "JavaScript", icon: "⚡", level: "Expert" },
    { name: "TypeScript", icon: "📘", level: "Advanced" },
    { name: "A11y", icon: "♿", level: "Advanced" },
    { name: "Testing", icon: "🧪", level: "Advanced" },
  ],
  Frontend: [
    { name: "React & Next.js", icon: "⚛️", level: "Expert" },
    { name: "Vue.js", icon: "💚", level: "Advanced" },
    { name: "Tailwind CSS", icon: "🌊", level: "Expert" },
    { name: "UI/UX Design", icon: "🎯", level: "Advanced" },
    { name: "Responsive Design", icon: "📱", level: "Expert" },
    { name: "Component Systems", icon: "🧩", level: "Expert" },
  ],
  "Motion & Scroll": [
    { name: "Framer Motion", icon: "🎬", level: "Expert" },
    { name: "GSAP Animations", icon: "🎭", level: "Advanced" },
    { name: "Lottie", icon: "✨", level: "Advanced" },
    { name: "Scroll Triggers", icon: "📜", level: "Expert" },
    { name: "Page Transitions", icon: "🔄", level: "Expert" },
    { name: "Micro-interactions", icon: "👆", level: "Expert" },
  ],
  "Build & Backend": [
    { name: "Node.js", icon: "🟢", level: "Advanced" },
    { name: "Vite & Webpack", icon: "📦", level: "Expert" },
    { name: "REST APIs", icon: "🔌", level: "Advanced" },
    { name: "Git & CI/CD", icon: "🔧", level: "Expert" },
    { name: "Performance", icon: "🚀", level: "Expert" },
    { name: "Databases", icon: "💾", level: "Intermediate" },
  ],
};

const coreAbilities = [
  { name: "React & Next.js", level: "Expert", icon: "⚛️" },
  { name: "Performance", level: "Expert", icon: "🚀" },
  { name: "Framer Motion", level: "Expert", icon: "🎬" },
  { name: "UI/UX Design", level: "Advanced", icon: "🎯" },
  { name: "TypeScript", level: "Advanced", icon: "📘" },
  { name: "GSAP Animations", level: "Advanced", icon: "🎭" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Foundations");

  return (
    <section id="skills" className="py-24 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="hud-element text-primary">// ABILITIES</span>
          <h2 className="font-pixel text-xl md:text-2xl text-foreground mt-2">
            SKILLS • <span className="text-accent">LOADOUT</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Core Abilities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="hud-element text-accent mb-6">CORE ABILITIES</h3>
            <div className="space-y-4">
              {coreAbilities.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="game-card p-4 flex items-center justify-between group cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-mono text-foreground">{skill.name}</span>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-pixel rounded ${
                      skill.level === "Expert"
                        ? "bg-primary/20 text-primary"
                        : "bg-accent/20 text-accent"
                    }`}
                  >
                    {skill.level.toUpperCase()}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Loadout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="hud-element text-accent mb-6">EQUIPMENT</h3>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 text-xs font-mono rounded transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category.toUpperCase()}
                </motion.button>
              ))}
            </div>

            {/* Skills Grid */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3"
            >
              {skillsByCategory[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="game-card p-3 text-center cursor-default group"
                >
                  <span className="text-2xl block mb-2 group-hover:animate-float">
                    {skill.icon}
                  </span>
                  <span className="text-xs font-mono text-foreground block">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
