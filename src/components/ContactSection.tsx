import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Mail,
  User,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // ---------------- SUBMIT HANDLER ----------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Fake API delay (frontend only)
      await new Promise((resolve) => setTimeout(resolve, 1200));

      toast({
        title: "MESSAGE SENT!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "ERROR",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 bg-gradient-to-b from-background to-muted overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="hud-element text-accent">// PLAYER → CONNECT</p>
          <h2 className="font-pixel text-2xl md:text-3xl mt-3">
            COMMUNICATION <span className="text-primary">TERMINAL</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">

          {/* ================= LEFT : TERMINAL ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-muted border-2 border-border rounded-xl shadow-xl"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background rounded-t-xl">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-destructive" />
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="w-3 h-3 rounded-full bg-neon-green" />
              </div>
              <span className="font-pixel text-xs text-muted-foreground">
                MISSION_INPUT.exe
              </span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">

              {/* NAME */}
              <div>
                <label className="hud-element text-accent mb-2 block">
                  PLAYER NAME
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={18}
                  />
                  <input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded font-mono focus:ring-2 focus:ring-primary/40"
                    placeholder="Enter codename..."
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="hud-element text-accent mb-2 block">
                  COMM LINK
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={18}
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded font-mono focus:ring-2 focus:ring-primary/40"
                    placeholder="player@email.com"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="hud-element text-accent mb-2 block">
                  MESSAGE DATA
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full min-h-[160px] px-4 py-3 bg-background border border-border rounded font-mono resize-none focus:ring-2 focus:ring-primary/40"
                  placeholder="Transmit your mission details..."
                />
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 pt-4">
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-pixel text-xs py-3 rounded shadow-[0_0_25px_hsl(var(--primary)/0.5)]"
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" size={16} />
                  ) : (
                    <Send size={16} />
                  )}
                  {isLoading ? "UPLOADING..." : "EXECUTE"}
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleReset}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-border rounded font-pixel text-xs text-muted-foreground hover:text-primary"
                >
                  RESET
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* ================= RIGHT : PLAYER HUD ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* PLAYER CARD */}
            <div className="game-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center font-pixel text-xl">
                  A
                </div>
                <div>
                  <p className="font-pixel text-sm">Aditya Shrivastav</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    Frontend • Creator
                  </p>
                </div>
                <span className="ml-auto px-3 py-1 bg-neon-green/20 text-neon-green font-pixel text-xs rounded">
                  ONLINE
                </span>
              </div>

              <p className="font-mono text-sm text-muted-foreground">
                Open for quests, collaborations, and creative builds.
              </p>
            </div>

            {/* QUICK CONNECT */}
            <div className="game-card p-6">
              <p className="hud-element text-accent mb-4">QUICK CONNECT</p>
              <a
                href="mailto:adityashrivastav022@gmail.com"
                className="flex items-center gap-3 font-mono text-sm hover:text-primary transition"
              >
                <Mail size={18} />
                adityashrivastav022@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
