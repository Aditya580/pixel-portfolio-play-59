import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

// Neon aura animation
const auraVariants = {
  animate: {
    opacity: [0.4, 0.8, 0.4],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const techBadges = [
  { name: "React", color: "text-accent" },
  { name: "Javascript", color: "text-primary" },
  { name: "JAVA", color: "text-accent" },
  { name: "SQL", color: "text-primary" },
  { name: "Springboot", color: "text-accent" },

];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-[#FFF7B3]"
    >
      {/* Soft retro background */}
      <div className="absolute inset-0 pointer-events-none bg-[##FFF7B3]" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT SIDE CONTENT */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="border px-3 py-1 text-[#2A2A2A] rounded text-xs font-semibold tracking-wide">LEVEL 1</span>
            <span className="text-xs text-[#2A2A2A] tracking-widest text-muted-foreground">PLAYER PROFILE</span>
          </div>

          <h1 className="text-4xl text-[#2A2A2A] md:text-6xl font-extrabold leading-tight mb-4">
            Hi, I'm <span className="text-orange-500">Aditya</span> —
            <br />
            <span className="text-yellow-500">Dev</span> & Creator
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            Full-stack developer and MCA student.
Focused on performance, clean interfaces, and meaningful interactions.
Experienced in leadership, communication, and collaborative building.
          </p>

          <div className="flex gap-3 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded bg-red-400 hover:bg-red-500 transition text-white font-semibold shadow-md flex items-center gap-2"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded border-2 border-black text-black bg-white hover:bg-black hover:text-white transition font-semibold shadow-md"
            >
              Hire Me
            </a>
          </div>

          {/* Tech badges like screenshot */}
          <div className="flex flex-wrap gap-3 mt-4">
            {techBadges.map((tech) => (
              <span
                key={tech.name}
                className={`px-4 py-1 text-[#2A2A2A] bg-white border border-black rounded-full text-sm shadow-sm transition hover:${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

         {/* RIGHT SIDE CHARACTER IMAGE + RANK */}
<div className="relative flex justify-center items-center">
  {/* Rank badge */}
  <div className="absolute text-[#2A2A2A] -top-4 right-4 bg-white border border-black px-3 py-1 rounded text-sm font-bold shadow">
    RANK S
  </div>

  {/* Image frame */}
  <div className="border-4 border-black rounded-xl p-3 bg-white shadow-[6px_6px_0_#000] max-w-xs lg:max-w-sm aspect-auto">
    <img
      src="/Me and my robo.png"
      alt="game avatar"
      className="rounded-xl object-contain w-full h-full"
    />
  </div>
</div>
      </div>
    </section>
  );
}
