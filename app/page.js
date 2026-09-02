import Image from "next/image";
import HeroSection from "./_sections/HeroSection";
import AboutMe from "./_sections/AboutMe";
import TechStack from "./_sections/TechStack";
import MyProjects from "./_sections/MyProjects";
import ContactMe from "./_sections/ContactMe";
import Footer from "./_sections/Footer";

export default function Home() {




  return (
    <main id="smooth-content">
      <HeroSection />
      <AboutMe />
      <TechStack />
      <MyProjects />
      <ContactMe />
      <Footer />
    </main>
  );
}
