import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldAlert, Activity, SearchCheck, Code2, CheckCircle2 } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

const iconMap = {
  ShieldAlert: ShieldAlert,
  Activity: Activity,
  SearchCheck: SearchCheck,
  Code2: Code2
};

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-cyber-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <div className="flex items-center space-x-3 mb-2 font-mono text-cyber-accent text-sm">
            <span className="text-cyber-accent font-semibold">01.</span>
            <span>ABOUT_RESEARCHER</span>
            <div className="h-px bg-cyber-accent/30 flex-grow max-w-xs"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-text">
            About Me & Cybersecurity Journey
          </h2>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#0f172a] dark:bg-[#112240] rounded-xl border border-cyber-accent/30 shadow-2xl overflow-hidden text-slate-100"
          >
            {/* Terminal Window Header */}
            <div className="terminal-bar px-4 py-3 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="font-mono text-xs text-slate-300 ml-2">bash - cat ~/about_me.txt</span>
              </div>
              <Terminal className="w-4 h-4 text-emerald-400 opacity-80" />
            </div>

            {/* Terminal Body (Always dark terminal for real terminal aesthetic) */}
            <div className="p-6 sm:p-8 font-mono text-sm space-y-4 text-slate-200 leading-relaxed">
              <div className="text-emerald-400">
                <span className="text-slate-400">$</span> WHOAMI
              </div>
              <p className="text-slate-300 text-xs sm:text-sm">
                [USER]: <span className="text-emerald-400 font-semibold">{personalInfo.name}</span> | Specialization: {personalInfo.specialization}
              </p>

              <div className="text-emerald-400 pt-2">
                <span className="text-slate-400">$</span> QUERY --ACADEMIC-BACKGROUND
              </div>
              <p className="leading-relaxed">
                Currently pursuing an <span className="text-emerald-400 font-semibold">MSc Cybersecurity and Management</span> degree. My academic focus combines management strategy with advanced cybersecurity disciplines, including cryptographic algorithms, cyber forensics, and threat surface modeling.
              </p>

              <div className="text-emerald-400 pt-2">
                <span className="text-slate-400">$</span> QUERY --CAREER-OBJECTIVES
              </div>
              <p className="leading-relaxed">
                I am driven by a deep curiosity to analyze how systems work and how they break. My objective is to contribute to a proactive security team as an <span className="text-emerald-400 font-semibold">Ethical Hacker, Vulnerability Analyst, or Penetration Tester</span>, enforcing defense-in-depth methodologies across corporate networks and web applications.
              </p>

              {/* Bullet Highlights */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs">
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>MSc Cybersecurity Student</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hands-on Pentesting Labs</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>OWASP Testing Methodology</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Python & Linux Security Tooling</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Core Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {aboutData.corePillars.map((pillar, idx) => {
              const IconComponent = iconMap[pillar.icon] || ShieldAlert;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className="p-5 rounded-xl bg-cyber-card border border-cyber-accent/20 hover:border-cyber-accent/60 transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-cyber-bg border border-cyber-accent/30 text-cyber-accent group-hover:bg-cyber-accent group-hover:text-white dark:group-hover:text-cyber-bg transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-mono text-base font-bold text-cyber-text group-hover:text-cyber-accent transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-cyber-muted mt-1 leading-relaxed font-medium">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
