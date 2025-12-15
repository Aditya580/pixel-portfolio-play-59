import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Achievements from "@/components/Acheivements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Scanline overlay for CRT effect */}
      <div className="fixed inset-0 scanline pointer-events-none z-50 opacity-30" />
      
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <Achievements/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
