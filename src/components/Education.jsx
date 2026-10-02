import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10 bg-cyber-bg/50 border-t border-cyber-accent/10">
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
            <span className="text-cyber-accent font-semibold">06.</span>
            <span>ACADEMIC_TIMELINE</span>
            <div className="h-px bg-cyber-accent/30 flex-grow max-w-xs"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-text">
            Education & Academic Roadmap
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base mt-2 max-w-2xl font-medium">
            MSc Cybersecurity Management degree alongside foundational undergraduate studies and specialized security labs.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-cyber-accent/40 space-y-12 text-left">
          {educationData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-0 p-2 rounded-full bg-cyber-card border-2 border-cyber-accent text-cyber-accent group-hover:scale-110 transition-transform shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-cyber-card border border-cyber-accent/20 hover:border-cyber-accent/50 transition-all duration-300 shadow-md space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-mono text-xl font-bold text-cyber-text group-hover:text-cyber-accent transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-cyber-accent font-mono text-sm mt-1 font-semibold">{item.specialization}</p>
                    <p className="text-cyber-muted text-xs font-mono mt-0.5 font-medium">{item.institution}</p>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-cyber-bg border border-cyber-accent/30 text-cyber-accent font-mono text-xs font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.duration}</span>
                    </span>
                    <span className="font-mono text-xs text-cyber-muted mt-2 font-bold">
                      {item.score}
                    </span>
                  </div>
                </div>

                {/* Details List */}
                <div className="space-y-2 pt-2 border-t border-cyber-accent/10">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-cyber-muted font-medium">
                      <CheckCircle2 className="w-4 h-4 text-cyber-accent shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
