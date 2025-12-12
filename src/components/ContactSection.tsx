import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, RotateCcw, Mail, MessageCircle, User } from "lucide-react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "MESSAGE SENT!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="hud-element text-primary">// CONNECT</span>
          <h2 className="font-pixel text-xl md:text-2xl text-foreground mt-2">
            CONTACT <span className="text-accent">TERMINAL</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="game-card p-6 md:p-8">
              {/* Window Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  <span className="w-3 h-3 rounded-full bg-neon-green" />
                </div>
                <span className="font-pixel text-xs text-muted-foreground ml-2">
                  NEW_MESSAGE.EXE
                </span>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div>
                  <label className="hud-element text-accent block mb-2">
                    YOUR NAME
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-muted border border-border rounded px-10 py-3 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Enter your name..."
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="hud-element text-accent block mb-2">
                    EMAIL
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-muted border border-border rounded px-10 py-3 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="hud-element text-accent block mb-2">
                    MESSAGE
                  </label>
                  <div className="relative">
                    <MessageCircle
                      size={18}
                      className="absolute left-3 top-4 text-muted-foreground"
                    />
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-muted border border-border rounded px-10 py-3 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors min-h-32 resize-none"
                      placeholder="Type your message..."
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-pixel text-xs rounded hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-shadow"
                >
                  <Send size={16} />
                  SEND
                </motion.button>
                <motion.button
                  type="button"
                  onClick={handleReset}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 border border-border text-muted-foreground font-pixel text-xs rounded hover:border-primary hover:text-primary transition-colors"
                >
                  <RotateCcw size={16} />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Profile Card & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Profile Card */}
            <div className="game-card p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="font-pixel text-2xl text-primary">G</span>
                </div>
                <div>
                  <h3 className="font-pixel text-sm text-foreground">
                    GAURAV GUPTA
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    Frontend + Creator
                  </p>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 bg-neon-green/20 text-neon-green font-pixel text-xs rounded">
                    ONLINE
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Open for consulting, collaborations, and interesting projects.
                Let's build something awesome together!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="game-card p-6">
              <h4 className="hud-element text-accent mb-4">QUICK CONNECT</h4>
              <div className="space-y-4">
                <motion.a
                  href="mailto:CONTACTGAURAV8@GMAIL.COM"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-muted rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs text-muted-foreground font-mono">
                      EMAIL
                    </span>
                    <span className="font-mono text-sm">
                      CONTACTGAURAV8@GMAIL.COM
                    </span>
                  </div>
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 bg-muted rounded flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <MessageCircle size={18} className="text-accent" />
                  </div>
                  <div>
                    <span className="block text-xs text-muted-foreground font-mono">
                      DISCORD
                    </span>
                    <span className="font-mono text-sm">@gaurav_dev</span>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Availability */}
            <div className="game-card p-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded mb-3">
                <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span className="text-xs font-mono text-neon-green">
                  AVAILABLE FOR WORK
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-mono">
                Currently accepting new projects & opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
