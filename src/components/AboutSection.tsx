export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-[#0E5733] rounded-t-[60px] text-white relative"
    >
      <div className="container mx-auto px-4">
        {/* MAIN HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide">
            ABOUT · PLAYER
          </h2>

          <p className="text-sm md:text-base mt-4 text-purple-200 flex justify-center gap-3 flex-wrap">
            <span>🎮 Frontend developer Level-Intermediate</span>
            <span>• JAVA Developer Level- Intermediate</span>
            <span>•Cloud and Docker Level-Beginner</span>
          </p>
        </div>

        {/* 2 COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          {/* LEFT SIDE ─ MISSION CARD */}
          <div className="bg-[#0F482A] rounded-3xl border border-black shadow-[8px_8px_0_#000] p-10">
            <h3 className="text-3xl font-extrabold mb-4 flex items-center gap-3">
              <span className="text-pink-300 text-4xl">🎯</span> MISSION
            </h3>

            <p className="text-lg leading-relaxed text-gray-200 mb-4">
              I’m passionate about fast, tactile interfaces with motion-first design and careful performance optimization.
I enjoy building web experiences that feel responsive, intuitive, and satisfying to use.
            </p>

            <p className="text-lg leading-relaxed text-gray-200 mb-8">
              Interfaces that feel smooth, responsive, and alive — blending
              retro-game charm with modern engineering polish.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <a href="#projects" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all">
                VIEW PROJECTS →
              </a>

              <a  href='#contact'className="bg-green-300 text-black font-bold px-6 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all">
                CONTACT ME
              </a>
            </div>
          </div>

          {/* RIGHT SIDE ─ IMAGE CARD */}
          <div className="bg-[#D9D9D9] rounded-3xl border border-black shadow-[8px_8px_0_#000] p-6 relative">
            {/* TOP TAGS */}
            <div className="absolute -top-5 left-6 flex gap-3">
              <span className="px-4 py-1 bg-yellow-400 border border-black rounded-xl text-black font-bold text-sm shadow-[3px_3px_0_#000]">
                PASSIONATE
              </span>
              <span className="px-4 py-1 bg-yellow-400 border border-black rounded-xl text-black font-bold text-sm shadow-[3px_3px_0_#000]">
                ENERGETIC
              </span>
              <span className="px-4 py-1 bg-yellow-400 border border-black rounded-xl text-black font-bold text-sm shadow-[3px_3px_0_#000]">
                CREATIVE
              </span>
            </div>

            {/* IMAGE */}
          <img
  src="myrobopic.png"
  alt="About Player Character"
  className="rounded-2xl h-[480px] w-auto mx-auto object-cover"
  style={{ objectPosition: "top" }}
/>

          </div>
        </div>
      </div>
    </section>
  );
}
