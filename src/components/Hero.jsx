import React from 'react';
import { motion } from 'framer-motion';
import { Download, FolderGit2, Mail, Shield, Terminal, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTypewriter } from '../hooks/useTypewriter';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Hero() {
  const typedText = useTypewriter(personalInfo.taglines, 80, 40, 1800);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Terminal Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyber-card border border-cyber-accent/30 text-cyber-accent font-mono text-xs shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyber-accent animate-ping"></span>
              <span>DEFCON LEVEL 5 // SYSTEM ACTIVE</span>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <p className="font-mono text-cyber-accent text-sm sm:text-base mb-2 tracking-wide font-semibold">
                Hi, my name is
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-cyber-text tracking-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl sm:text-3xl font-semibold text-cyber-muted mt-2">
                {personalInfo.title} <span className="text-cyber-accent font-normal">({personalInfo.specialization})</span>
              </h2>
            </div>

            {/* Dynamic Typewriter Effect */}
            <div className="h-12 flex items-center font-mono text-lg sm:text-xl text-cyber-accent bg-cyber-card/80 p-3 rounded-lg border-l-4 border-cyber-accent shadow-sm">
              <Terminal className="w-5 h-5 mr-3 shrink-0 text-cyber-accent" />
              <span>{typedText}</span>
              <span className="w-2.5 h-5 bg-cyber-accent inline-block ml-1 animate-pulse"></span>
            </div>

            {/* Bio summary */}
            <p className="text-cyber-muted text-sm sm:text-base max-w-2xl leading-relaxed font-medium">
              {personalInfo.bio}
            </p>

            {/* Action Buttons Grid */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/resume.pdf"
                download="Parthiv_Patel_Cyber_Security_Resume.pdf"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-cyber-accent text-white dark:text-cyber-bg font-mono text-sm font-bold hover:opacity-90 transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-cyber-card border border-cyber-accent text-cyber-accent font-mono text-sm font-semibold hover:bg-cyber-accent/10 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-cyber-card border border-cyber-accent/40 text-cyber-text font-mono text-sm hover:border-cyber-accent hover:text-cyber-accent transition-all duration-300 shadow-sm"
              >
                <Mail className="w-4 h-4 text-cyber-accent" />
                <span>Contact Me</span>
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-cyber-card border border-cyber-accent/30 text-cyber-accent hover:border-cyber-accent hover:scale-105 transition-all duration-300 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-cyber-card border border-cyber-accent/30 text-cyber-accent hover:border-cyber-accent hover:scale-105 transition-all duration-300 shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-cyber-accent/20">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-cyber-card border border-cyber-accent/20 hover:border-cyber-accent/40 transition-colors shadow-sm">
                  <div className="text-2xl font-mono font-bold text-cyber-accent">{stat.value}</div>
                  <div className="text-xs text-cyber-muted mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image & Avatar Scanner Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative group">
              {/* Radar Circle Glow Effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyber-accent to-purple-600 opacity-25 blur-xl group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              {/* Cyber Radar Outer Frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-cyber-accent p-2 bg-cyber-card shadow-2xl flex items-center justify-center">
                
                {/* Sweep Radar Scanner Beam */}
                <div className="absolute inset-0 rounded-full border-t-2 border-cyber-accent animate-radar origin-center opacity-70 pointer-events-none z-10"></div>

                {/* Inner Image Container (clipped to circle) */}
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src="/images/IMG_9263-01.jpeg"
                    alt="Parthiv Patel - Cybersecurity and Management Student"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Cyber Shield Badge Overlay */}
                <div className="absolute bottom-2 right-2 p-3 rounded-full bg-cyber-card border-2 border-cyber-accent shadow-xl text-cyber-accent z-20">
                  <Shield className="w-6 h-6 animate-pulse" />
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-cyber-accent opacity-70 hover:opacity-100 transition-opacity animate-bounce"
        aria-label="Scroll to About Me"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
