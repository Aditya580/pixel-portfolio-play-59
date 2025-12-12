import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    id: "neoarcade",
    company: "NeoArcade Labs",
    role: "Senior Frontend Engineer",
    period: "2023 - Present",
    location: "Remote",
    achievements: [
      "Motion-first rebuild achieving consistent 60fps across all interactions",
      "+20% conversion on primary funnels through UX optimization",
      "Improved LCP from 2.8s to 1.7s with strategic code splitting",
      "Built component library used across 5 product teams",
    ],
    stack: ["React", "GSAP", "Framer Motion", "Next.js", "Tailwind", "Vite"],
  },
  {
    id: "codearrays",
    company: "Codearrays",
    role: "Frontend Developer",
    period: "2021 - 2023",
    location: "Bangalore, India",
    achievements: [
      "Developed interactive data visualization dashboards",
      "Reduced bundle size by 40% through lazy loading",
      "Mentored junior developers on React best practices",
    ],
    stack: ["React", "D3.js", "TypeScript", "Redux", "Styled Components"],
  },
  {
    id: "hyperplay",
    company: "HyperPlay Studios",
    role: "UI Developer",
    period: "2020 - 2021",
    location: "Remote",
    achievements: [
      "Created game-inspired interfaces for web applications",
      "Implemented complex animation sequences with GSAP",
      "Built responsive layouts for gaming dashboards",
    ],
    stack: ["Vue.js", "GSAP", "CSS Animations", "WebGL"],
  },
  {
    id: "synthos",
    company: "Synthos",
    role: "Junior Developer",
    period: "2019 - 2020",
    location: "Pune, India",
    achievements: [
      "Built and maintained client websites",
      "Learned modern frontend development practices",
      "Contributed to design system development",
    ],
    stack: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeExp, setActiveExp] = useState(experiences[0]);

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="hud-element text-primary">// CAREER</span>
          <h2 className="font-pixel text-xl md:text-2xl text-foreground mt-2">
            EXPERIENCE <span className="text-accent">LOG</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company Switcher */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            <h3 className="hud-element text-accent mb-4">SWITCHBOARD</h3>
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.id}
                onClick={() => setActiveExp(exp)}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className={`w-full text-left p-4 rounded transition-all flex items-center justify-between group ${
                  activeExp.id === exp.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card hover:bg-muted text-foreground"
                }`}
              >
                <span className="font-mono text-sm">{exp.company}</span>
                <ChevronRight
                  size={16}
                  className={`transition-transform ${
                    activeExp.id === exp.id ? "rotate-90" : "group-hover:translate-x-1"
                  }`}
                />
              </motion.button>
            ))}
          </motion.div>

          {/* Experience Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <motion.div
              key={activeExp.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="game-card p-6 md:p-8"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-pixel text-sm md:text-base text-foreground mb-2">
                    {activeExp.role}
                  </h3>
                  <p className="text-primary font-mono">{activeExp.company}</p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {activeExp.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} />
                    {activeExp.location}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="hud-element text-accent mb-4">ACHIEVEMENTS</h4>
                <ul className="space-y-3">
                  {activeExp.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground font-mono text-sm"
                    >
                      <span className="text-primary mt-1">▸</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="hud-element text-accent mb-4">TECH STACK</h4>
                <div className="flex flex-wrap gap-2">
                  {activeExp.stack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-muted text-foreground text-xs font-mono rounded"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
