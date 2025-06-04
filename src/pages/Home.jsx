import { ThemeToggle } from "../Componentts/ThemeToggle";
import { StarBackground } from "../Componentts/StarBackGround";
import { Navbar } from "../Componentts/Navbar";
import { HeroSection } from "../Componentts/HeroSection";
import { AboutSection } from "../Componentts/AboutSection";

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
      </main>

      {/* footer  */}
    </div>
  );
};
