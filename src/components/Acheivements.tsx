import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "SAGE SHARK TANK",
    category: "Competitions",
    description:
      "Won 1st Prize at Sage Shark Tank for pitching a tech-enabled startup idea.",
    image:
      "/Sage Shark tank.jpg",
    year: "2024 ",
  },
  {
    id: 2,
    title: "Trainer at Web design Workshop",
    category: "Community",
    description:
      "Trained more than 40+ Students",
    image:
      "/Training.jpg",
    year: "2024",
  },
    {
    id: 3,
    title: "Event Anchoring & Management Excellence",
    category: "Leadership",
    description:
      "Recognized for anchoring and handling live events with confidence, clarity, and strong audience interaction across university-level programs.",
    image:
      "/Anchored and handle.jpg",
    year: "2024",
  },
  {
    id: 4,
    title: "GEEKSFORGEEKS CONTRIBUTOR",
    category: "Community",
    description:
      "Earned Contributor Badge by publishing articles and solutions.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    year: "2024",
  },
  {
    id: 5,
    title: "INTERVIEW HOST",
    category: "Leadership",
    description:
      "Conducted interviews with VCs, founders, and international professors.",
    image:
      "Interview host.jpg",
    year: "2022-24",
  },
    {
    id: 6,
    title: "CII Article Writing – 2nd Place",
    category: "Competitions",
    description:
      "Wrote an article on the changing dynamics of higher education, securing 2nd position among 50 participants",
    image:
      "ArticlewritingComp.jpg",
    year: "2023",
  },
     {
    id:7 ,
    title: "Hackathon Participation & Experience",
    category: "Competitions",
    description:
      "Successfully participated in multiple hackathons and secured winning positions, showcasing strong capabilities in problem-solving, innovation, and team collaboration.",
    image:
      "Hackathons.jpg",
    year: "2022-25",
  },
];

const categories = ["All", "Competitions", "Community", "Leadership"];

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [index, setIndex] = useState(0);

  const filtered =
    activeCategory === "All"
      ? achievements
      : achievements.filter((a) => a.category === activeCategory);

  const current = filtered[index];

  const next = () =>
    setIndex((prev) => (prev + 1) % filtered.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + filtered.length) % filtered.length);

  return (
    <section
      id="achievements"
      className="py-28 bg-green-700"
    >
      <div className="container mx-auto px-4 max-w-7xl">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="hud-element text-accent">// PLAYER STATS</p>
          <h2 className="font-pixel text-2xl md:text-3xl mt-3">
            ACHIEVEMENT <span className="text-primary">LOG</span>
          </h2>
        </div>

        {/* CATEGORY SWITCHER */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(cat);
                setIndex(0);
              }}
              className={`px-5 py-2 font-pixel text-xs border rounded-md shadow
                ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:text-foreground"
                }`}
            >
              {cat.toUpperCase()}
            </motion.button>
          ))}
        </div>

        {/* SLIDER */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="game-card overflow-hidden"
            >
              {/* IMAGE */}
              <div className="h-56 md:h-64 overflow-hidden">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-pixel text-lg">
                    {current.title}
                  </h3>
                  <span className="hud-element text-accent">
                    {current.year}
                  </span>
                </div>

                <p className="font-mono text-sm text-muted-foreground">
                  {current.description}
                </p>

                <div className="inline-block px-3 py-1 text-xs font-mono rounded bg-primary/10 text-primary">
                  {current.category}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="flex justify-between items-center mt-6">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 border border-border rounded-md bg-background hover:bg-muted"
            >
              <ChevronLeft />
            </motion.button>

            <p className="font-mono text-xs text-muted-foreground">
              {index + 1} / {filtered.length}
            </p>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 border border-border rounded-md bg-background hover:bg-muted"
            >
              <ChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
