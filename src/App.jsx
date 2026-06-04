import { useEffect, useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ThemeContext from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';

export default function Portfolio() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={theme}>
      <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero scrollToSection={scrollToSection} />
      <Experience />
      <Achievements />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      </div>
    </div>
  );
}
