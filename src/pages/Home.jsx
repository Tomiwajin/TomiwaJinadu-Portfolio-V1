import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "../Components/StarBackground";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { SkillsSection } from "../Components/SkillSection";
import { ProjectsSection } from "../Components/ProjectSection";
import { ContactSection } from "../Components/ContactSection";
import { FooterSection } from "../Components/FooterSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Load screen */}

      {/* BackGround Effecct Toggle */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </main>

      {/* footer  */}
    </div>
  );
};
