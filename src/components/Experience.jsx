import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-cyber-bg/50 border-t border-cyber-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <div className="flex items-center space-x-3 mb-2 font-mono text-cyber-accent text-sm">
            <span className="text-cyber-accent font-semibold">03.</span>
            <span>EXPERIENCE</span>
            <div className="h-px bg-cyber-accent/30 flex-grow max-w-xs"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-text">
            Experience & Simulations
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base mt-2 max-w-2xl font-medium">
            Practical experience in cybersecurity learning, research, and hands-on security practice across network and application security domains.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cyber-card border border-cyber-accent/20 rounded-2xl p-6 sm:p-8 shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-cyber-accent font-mono text-xs font-semibold mb-2">
                    <BriefcaseBusiness className="w-4 h-4" />
                    <span>{item.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-cyber-text">{item.title}</h3>
                </div>

                <div className="text-left md:text-right">
                  <p className="font-mono text-xs text-cyber-accent font-semibold">{item.period}</p>
                  <div className="flex items-center gap-1.5 text-cyber-muted font-mono text-xs mt-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-cyber-muted text-sm sm:text-base leading-relaxed font-medium">
                {item.description}
              </p>

              <div className="mt-6 space-y-3">
                {item.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 text-cyber-muted text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyber-accent shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {item.link && (
                <div className="mt-6">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-cyber-accent hover:text-cyber-text transition-colors font-semibold"
                  >
                    <span>View Simulation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
