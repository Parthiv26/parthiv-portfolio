import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CyberBackground from './components/CyberBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen font-sans overflow-x-hidden">
        {/* Animated Cyber Particles Canvas */}
        <CyberBackground />

        {/* Sticky Glassmorphism Header */}
        <Navbar />

        {/* Page Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <Achievements />
          <Education />
          <ResumeSection />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Scroll To Top Button */}
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
