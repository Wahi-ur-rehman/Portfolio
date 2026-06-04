import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import FloatingParticles from "./components/FloatingParticles";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Stats from "./components/Stats";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white min-h-screen overflow-x-hidden cursor-none md:cursor-none">
      <Toaster position="top-right" theme="dark" richColors />
      <CustomCursor />
      <FloatingParticles />
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <Navigation activeSection={activeSection} />

      <main className="relative">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <Stats />

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2026 Wahi Ur Rehman. Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
