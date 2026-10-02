import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Users, ShieldCheck, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const iconMap = {
  Trophy: Trophy,
  Award: Award,
  Users: Users,
  ShieldCheck: ShieldCheck
};

export default function Achievements() {
  if (!achievementsData || achievementsData.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="py-24 relative z-10 border-t border-cyber-accent/10">
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
            <span className="text-cyber-accent font-semibold">05.</span>
            <span>ACHIEVEMENTS</span>
            <div className="h-px bg-cyber-accent/30 flex-grow max-w-xs"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-text">
            Security Highlights
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base mt-2 max-w-2xl font-medium">
            Recognition for hands-on learning, security challenges, public awareness work, and practical cyber skills development.
          </p>
        </motion.div>

        {/* Grid of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Trophy;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-cyber-card border border-cyber-accent/20 hover:border-cyber-accent/60 transition-all duration-300 group shadow-md flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-xl bg-cyber-bg border border-cyber-accent/30 text-cyber-accent group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-mono text-[11px] text-cyber-accent font-bold px-2 py-0.5 rounded bg-cyber-accent/10 border border-cyber-accent/20">
                          {item.category}
                        </span>
                        <h3 className="font-mono text-lg font-bold text-cyber-text mt-1 group-hover:text-cyber-accent transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-cyber-muted font-semibold whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-cyber-muted text-xs sm:text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-cyber-accent/10 flex items-center space-x-2 font-mono text-[11px] text-cyber-accent font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SECURITY HIGHLIGHT</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
