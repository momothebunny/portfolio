import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-portfolio text-slate-200 font-sans selection:bg-fuchsia-500/30">
        <Navbar scrolled={scrolled} />
        <Hero />
        <Stats />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Awards />
        <Hobbies />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
