import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["Foundations", "Frontend", "Motion & Scroll", "Build & Backend"];

const skillsByCategory = {
  Foundations: ["HTML", "CSS", "JavaScript", "TypeScript", "A11y", "Testing"],
  Frontend: ["React", "Next.js", "Tailwind", "UI/UX", "Responsive", "Components"],
  "Motion & Scroll": ["Framer Motion", "GSAP", "Lottie", "ScrollTrigger", "Transitions"],
  "Build & Backend": ["Node.js", "Vite", "APIs", "Git", "Performance", "DBs"],
};

const SkillsSection = () => {
  const [active, setActive] = useState("Foundations");

  return (
    <section id="skills" className="py-28 bg-[#0f5a3c] text-white">
      <div className="container mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold tracking-wide drop-shadow-lg">
            SKILLS • LOADOUT
          </h2>
          <p className="mt-3 text-white/80">
            🎮 Choose your class • Prove your mastery • Level up your game
          </p>
        </div>

        {/* CATEGORY PILLS */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-3 rounded-xl font-bold border-2 transition
                ${
                  active === cat
                    ? "bg-yellow-400 text-black border-yellow-300 shadow-lg"
                    : "bg-green-800 border-green-700 hover:bg-green-700"
                }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT BIG CARD */}
          <div className="lg:col-span-2 rounded-3xl border-4 border-green-900 bg-gradient-to-b from-green-700 to-green-800 p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🏗️</span>
              <div>
                <h3 className="text-3xl font-extrabold">{active.toUpperCase()}</h3>
                <p className="text-yellow-300 text-sm font-semibold">
                  ⭐ Level 1 / 4
                </p>
              </div>
            </div>

            <hr className="border-green-900 mb-6" />

            <h4 className="text-sm tracking-widest text-yellow-300 mb-4">
              EQUIPMENT
            </h4>

            <div className="flex flex-wrap gap-3">
              {skillsByCategory[active].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-xl bg-yellow-400 text-black font-bold shadow-md"
                >
                  {skill.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT PROGRESS CARDS */}
          <div className="space-y-6">
            {categories.map((cat) => (
              <div
                key={cat}
                className={`rounded-2xl p-6 border-4 transition
                  ${
                    active === cat
                      ? "bg-green-700 border-yellow-400"
                      : "bg-green-800 border-green-900"
                  }`}
              >
                <div className="flex justify-between mb-3">
                  <span className="font-bold">{cat}</span>
                  <span className="text-sm text-white/70">
                    {skillsByCategory[cat].length} Skills
                  </span>
                </div>

                <div className="h-2 rounded-full bg-green-900 overflow-hidden">
                  <div
                    className="h-full bg-yellow-400"
                    style={{
                      width: `${(skillsByCategory[cat].length / 6) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
