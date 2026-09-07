import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Wrench, Terminal, Check } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categories = [
  { id: 'security', label: 'Security Skills', icon: Shield },
  { id: 'programming', label: 'Programming & Web', icon: Code },
  { id: 'tools', label: 'Tools & Environments', icon: Wrench }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('security');

  const activeSkills = skillsData[activeTab] || [];

  return (
    <section id="skills" className="py-24 relative z-10 bg-cyber-bg/50 border-t border-cyber-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <div className="flex items-center space-x-3 mb-2 font-mono text-cyber-accent text-sm">
            <span className="text-cyber-accent font-semibold">02.</span>
            <span>TECHNICAL_COMPETENCIES</span>
            <div className="h-px bg-cyber-accent/30 flex-grow max-w-xs"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-text">
            Skills & Cyber Capabilities
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base mt-2 max-w-2xl font-medium">
            A comprehensive matrix of security methodologies, programming languages, and industry-standard penetration testing tools.
          </p>
        </motion.div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-cyber-accent/20 pb-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-cyber-accent text-white dark:text-cyber-bg font-bold shadow-md'
                    : 'bg-cyber-card border border-cyber-accent/20 text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activeSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-cyber-card border border-cyber-accent/20 hover:border-cyber-accent/60 transition-all duration-300 group shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-cyber-bg border border-cyber-accent/30 text-cyber-accent group-hover:scale-110 transition-transform">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <h3 className="font-mono text-base font-bold text-cyber-text">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-cyber-accent font-semibold px-2 py-1 rounded bg-cyber-accent/10 border border-cyber-accent/30">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full bg-cyber-bg h-2.5 rounded-full overflow-hidden border border-cyber-accent/20 mt-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.1 * idx }}
                    className="h-full bg-cyber-accent rounded-full"
                  ></motion.div>
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-4 pt-3 border-t border-cyber-accent/10 flex items-center justify-between text-xs text-cyber-muted font-mono font-medium">
                <span>VERIFIED SKILL</span>
                <span className="text-cyber-accent flex items-center space-x-1 font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>PROFICIENT</span>
                </span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
