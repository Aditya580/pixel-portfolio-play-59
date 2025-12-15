import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";

type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  stack: string[];
};

const experiences: Experience[] = [
  {
    id: "iota",
    company: "IOTA Informatics",
    role: "Configuration Management & QA Intern",
    period: "2023",
    location: "India",
    achievements: [
      "Worked as a Configuration Manager for project builds and releases",
      "Performed manual testing to identify functional and UI bugs",
      "Used JIRA to report, track, and manage defects and tasks",
    ],
    stack: ["Manual Testing", "JIRA", "Configuration Management", "SDLC"],
  },
  {
    id: "datanutts",
    company: "DataNutts Solutions",
    role: "SQL & Data Analysis Intern",
    period: "2022",
    location: "Remote",
    achievements: [
      "Understood and applied core SQL concepts",
      "Solved company-provided SQL assessments and problem statements",
      "Worked with structured datasets to extract meaningful insights",
    ],
    stack: ["SQL", "MySQL", "Database Concepts"],
  },
  {
    id: "infosys-springboard",
    company: "Infosys Springboard",
    role: "Java Intern (Virtual Internship 6.0)",
    period: "2025",
    location: "Virtual",
    achievements: [
      "Completed Java-focused learning modules and assessments",
      "Practiced OOP concepts through hands-on exercises",
      "Strengthened backend fundamentals using real-world scenarios",
    ],
    stack: ["Java", "OOPs", "Spring Basics", "SQL"],
  },
];

export default function ExperienceSection() {
  const [activeExp, setActiveExp] = useState<Experience>(experiences[0]);

  return (
    <section
      id="experience"
      className="py-24 bg-[#FFF7B3] text-black"
    >
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-wide">
            EXPERIENCE
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Analog switchboard · CRT boot dossier
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT SWITCHBOARD */}
          <div className="border-4 border-black rounded-xl bg-white shadow-xl">
            <div className="border-b-4 border-black px-6 py-3 flex justify-between text-xs font-bold">
              <span>SWITCHBOARD</span>
              <span className="text-gray-500">
                Flip a toggle to route signal
              </span>
            </div>

            <div className="p-6 space-y-4">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExp(exp)}
                  className={`w-full flex items-center justify-between px-5 py-4 border-4 rounded-lg transition-all
                    ${
                      activeExp.id === exp.id
                        ? "bg-yellow-400 border-black"
                        : "bg-white border-gray-300 hover:border-black"
                    }
                  `}
                >
                  <span className="font-bold tracking-wide text-sm">
                    {exp.company.toUpperCase()}
                  </span>

                  {/* Toggle */}
                  <span
                    className={`w-12 h-6 rounded-full border-2 flex items-center px-1 transition
                      ${
                        activeExp.id === exp.id
                          ? "bg-black border-black justify-end"
                          : "bg-white border-black justify-start"
                      }
                    `}
                  >
                    <span className="w-4 h-4 bg-white rounded-full border" />
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT CRT MONITOR */}
          <div className="border-4 border-black rounded-xl bg-white shadow-xl">
            {/* CRT HEADER */}
            <div className="border-b-4 border-black px-6 py-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-4 text-xs font-bold tracking-wide">
                CRT MONITOR
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-8 grid md:grid-cols-3 gap-6">
              {/* ROLE CARD */}
              <div className="border-4 border-black rounded-lg p-4 bg-[#FFF7B3]">
                <h4 className="font-extrabold text-sm mb-2">
                  {activeExp.role.toUpperCase()}
                </h4>
                <p className="text-xs">{activeExp.company}</p>
                <p className="text-xs mt-2 flex items-center gap-1">
                  <Calendar size={12} /> {activeExp.period}
                </p>
                <p className="text-xs flex items-center gap-1">
                  <MapPin size={12} /> {activeExp.location}
                </p>
              </div>

              {/* DETAILS */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-extrabold text-orange-500 mb-4">
                  {activeExp.company.toUpperCase()}
                </h3>

                <ul className="space-y-2 text-sm mb-6">
                  {activeExp.achievements.map((a, i) => (
                    <li key={i} className="flex gap-2">
                      <span>▪</span>
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {activeExp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border-2 border-black rounded text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
