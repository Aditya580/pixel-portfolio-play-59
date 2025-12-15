import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Acheivements", href: "#achievements" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center select-none">
      <div className="relative w-[92%] max-w-5xl">
        {/* MAIN NAV BAR */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-full px-6 py-3 shadow-[4px_4px_0px_#000] border-2 border-black flex items-center justify-between"
        >
          {/* Logo */}
          <div className="w-6 h-6 rounded-full bg-orange-400 border-2 border-black shadow-[3px_3px_0px_#000]" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-gray-700 text-sm tracking-wide">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-black transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:block bg-orange-400 text-white px-5 py-2 rounded-full font-semibold border-2 border-black shadow-[3px_3px_0px_#000]"
          >
            Contact me
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen((p) => !p)}
            className="lg:hidden p-2 border-2 border-black text-[#2A2A2A] rounded-md bg-white shadow-[3px_3px_0px_#000]"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.div>

        {/* MOBILE DROPDOWN */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full mt-3 w-full text-[#2A2A2A] bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000] overflow-hidden lg:hidden"
            >
              <div className="flex flex-col divide-y">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-4 text-sm font-semibold text-orange-500 hover:bg-yellow-100 transition"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 bg-orange-400 text-white font-bold text-center"
                >
                  Contact me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
