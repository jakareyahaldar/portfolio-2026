import Image from "next/image";
import HeroSection from "./_sections/HeroSection";
import AboutMe from "./_sections/AboutMe";
import TechStack from "./_sections/TechStack";
import MyProjects from "./_sections/MyProjects";
import ContactMe from "./_sections/ContactMe";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <TechStack />
      <MyProjects />
      <ContactMe />
    </main>
  );
}
