import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";


const projects = [
  {
    id: 1,
    title: "PROJECT ONE",
    description: "Epic game-inspired landing page with GSAP animations.",
    points: [
      "Hero intro with timeline-based scene reveal.",
      "Magnetic cursor + hover sfx synced to UI.",
      "Optimized 60fps scroll-driven sections.",
    ],
    stack: ["React", "GSAP", "Tailwind"],
    image: "/p1.png",
    link: "#",
  },
  {
    id: 2,
    title: "PROJECT TWO",
    description: "High-performance dashboard with smooth transitions.",
    points: [
      "Real-time data visualization.",
      "Smooth UI animations.",
      "Optimized rendering performance.",
    ],
    stack: ["React", "Chart.js", "Tailwind"],
    image: "/p2.png",
    link: "#",
  },
   {
    id: 2,
    title: "PROJECT THREE",
    description: "High-performance dashboard with smooth transitions.",
    points: [
      "Real-time data visualization.",
      "Smooth UI animations.",
      "Optimized rendering performance.",
    ],
    stack: ["React", "Chart.js", "Tailwind"],
    image: "/p3.png",
    link: "#",
  },
    {
    id: 2,
    title: "PROJECT FOUR",
    description: "High-performance dashboard with smooth transitions.",
    points: [
      "Real-time data visualization.",
      "Smooth UI animations.",
      "Optimized rendering performance.",
    ],
    stack: ["React", "Chart.js", "Tailwind"],
    image: "/p4.png",
    link: "#",
  },
  
];


const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [index, setIndex] = useState(0);
  const project = projects[index];

  const prevProject = () =>
    setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));

  const nextProject = () =>
    setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 bg-[#FFF4B8] text-black"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-widest">PROJECTS</h2>
          <p className="text-sm mt-2 font-mono">
            Showcasing my work with a retro game twist ⚡
          </p>
        </div>

        {/* Retro Window */}
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="border-[5px] border-black rounded-2xl overflow-hidden bg-white relative"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-yellow-200 border-b-[5px] border-black">
            <span className="text-xs font-mono">RETRO PROJECT WINDOW</span>
            <span className="text-xs font-mono">
              Arrow keys • Click arrows
            </span>
          </div>

          {/* Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-3 top-1/2 -translate-y-1/2 border-[4px] border-black bg-white p-2 rounded-full hover:bg-black hover:text-white transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-3 top-1/2 -translate-y-1/2 border-[4px] border-black bg-white p-2 rounded-full hover:bg-black hover:text-white transition"
          >
            <ChevronRight size={18} />
          </button>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-6 p-6">
            {/* Image */}
            <div className="border-[5px] border-black rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <h3 className="text-3xl font-extrabold text-orange-500 mb-3">
                {project.title}
              </h3>

              <p className="font-mono text-sm mb-4">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border-[3px] border-black rounded-md text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Points */}
              <ul className="space-y-2 mb-6 font-mono text-sm">
                {project.points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span>▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href={project.link}
                className="inline-flex items-center gap-2 px-5 py-2 border-[4px] border-black rounded-lg font-mono text-sm hover:bg-black hover:text-white transition"
              >
                VIEW PROJECT <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
