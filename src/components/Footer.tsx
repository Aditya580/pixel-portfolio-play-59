import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-pixel text-primary text-xs tracking-wider"
            whileHover={{ scale: 1.05 }}
          >
            GAURAV<span className="text-accent">.DEV</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-muted rounded flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-mono flex items-center gap-1">
            Made with <Heart size={12} className="text-primary" /> by Gaurav ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>

        {/* Game Over Easter Egg */}
        <div className="mt-8 text-center">
          <span className="hud-element text-muted-foreground/50">
            GAME OVER? NEVER. KEEP BUILDING.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
