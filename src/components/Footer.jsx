import React from 'react';
import { Shield, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 bg-cyber-card border-t border-cyber-accent/20 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2 font-mono text-lg font-bold text-cyber-text">
              <div className="p-2 rounded-lg bg-cyber-bg border border-cyber-accent/30 text-cyber-accent">
                <Shield className="w-5 h-5 text-cyber-accent" />
              </div>
              <span>parthiv<span className="text-cyber-accent">.sec</span></span>
            </div>
            <p className="text-xs text-cyber-muted max-w-sm leading-relaxed font-medium">
              MSc Cybersecurity and Management student specializing in Cyber Security, Ethical Hacking, Network Security, and Security Research.
            </p>
            {/* System Status Light */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyber-bg border border-cyber-accent/30 text-[11px] font-mono text-cyber-accent font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>ALL SYSTEMS OPERATIONAL // DEFCON 5</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <h4 className="text-cyber-accent font-bold tracking-wider">QUICK NAVIGATION</h4>
            <div className="grid grid-cols-2 gap-2 text-cyber-muted font-medium">
              <button onClick={() => scrollToSection('hero')} className="hover:text-cyber-accent text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-cyber-accent text-left">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-cyber-accent text-left">Skills</button>
              <button onClick={() => scrollToSection('certifications')} className="hover:text-cyber-accent text-left">Certifications</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-cyber-accent text-left">Projects</button>
              <button onClick={() => scrollToSection('achievements')} className="hover:text-cyber-accent text-left">Achievements</button>
              <button onClick={() => scrollToSection('education')} className="hover:text-cyber-accent text-left">Education</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-cyber-accent text-left">Contact</button>
            </div>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="text-cyber-accent font-bold tracking-wider">CONNECT</h4>
            <div className="flex space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-cyber-bg border border-cyber-accent/30 text-cyber-accent hover:border-cyber-accent transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-cyber-bg border border-cyber-accent/30 text-cyber-accent hover:border-cyber-accent transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg bg-cyber-bg border border-cyber-accent/30 text-cyber-accent hover:border-cyber-accent transition-all shadow-sm"
                aria-label="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-cyber-accent/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-cyber-muted font-medium space-y-2 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Designed for Cyber Security Excellence.
          </div>
          <div className="flex items-center space-x-1">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
