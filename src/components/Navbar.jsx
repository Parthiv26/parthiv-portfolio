import React, { useState, useEffect } from 'react';
import { Shield, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map(item => item.id), 120);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-cyber-bg/90 backdrop-blur-md border-b border-cyber-accent/20 shadow-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 font-mono text-lg font-bold group text-left"
          >
            <div className="p-2 rounded-lg bg-cyber-card border border-cyber-accent/30 group-hover:border-cyber-accent transition-all duration-300">
              <Shield className="w-5 h-5 text-cyber-accent group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-cyber-text group-hover:text-cyber-accent transition-colors">
              parthiv<span className="text-cyber-accent">.sec</span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-2 rounded-md font-mono text-xs transition-all duration-200 ${
                    isActive
                      ? 'text-cyber-accent bg-cyber-accent/10 border border-cyber-accent/40 font-semibold'
                      : 'text-cyber-muted hover:text-cyber-accent hover:bg-cyber-card'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions (Theme toggle & Mobile Menu Toggle) */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-lg bg-cyber-card border border-cyber-accent/30 text-cyber-accent hover:border-cyber-accent hover:bg-cyber-accent/10 transition-all duration-300"
              title={darkMode ? "Switch to Light Cyber Mode" : "Switch to Dark Cyber Mode"}
            >
              {darkMode ? <Sun className="w-4 h-4 text-cyber-accent" /> : <Moon className="w-4 h-4 text-cyber-accent" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-cyber-card border border-cyber-accent/30 text-cyber-accent hover:border-cyber-accent"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-cyber-bg/95 backdrop-blur-xl border-b border-cyber-accent/30 py-6 px-6 shadow-2xl transition-all duration-300">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between p-3 rounded-lg font-mono text-sm transition-all ${
                    isActive
                      ? 'bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/40 font-semibold'
                      : 'text-cyber-muted hover:text-cyber-text hover:bg-cyber-card'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
