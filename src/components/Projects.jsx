import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './SocialIcons';

const categories = ['All'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10 bg-cyber-bg/40 border-t border-cyber-accent/10">
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
            <span className="text-cyber-accent font-semibold">04.</span>
            <span>CYBER_PROJECTS_SHOWCASE</span>
            <div className="h-px bg-cyber-accent/30 flex-grow max-w-xs"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-text">
            Project
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base mt-2 max-w-2xl font-medium">
            A focused cybersecurity project developed during my MSc, emphasizing network reconnaissance, service enumeration, and practical security analysis.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-mono text-xs transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-cyber-accent text-white dark:text-cyber-bg font-bold shadow-md'
                  : 'bg-cyber-card border border-cyber-accent/20 text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-cyber-card rounded-2xl border border-cyber-accent/20 hover:border-cyber-accent/60 transition-all duration-300 overflow-hidden group shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-video overflow-hidden bg-cyber-bg border-b border-cyber-accent/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 backdrop-blur-xs">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-cyber-accent text-white dark:text-cyber-bg font-mono text-xs font-bold hover:bg-white hover:text-slate-900 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect Details</span>
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-cyber-card border border-cyber-accent text-cyber-accent font-mono text-xs hover:bg-cyber-accent/10 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                  <span className="absolute top-3 left-3 px-3 py-1 rounded bg-cyber-card/90 backdrop-blur-md border border-cyber-accent/30 font-mono text-[10px] text-cyber-accent font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 text-left">
                  <h3 className="font-mono text-xl font-bold text-cyber-text group-hover:text-cyber-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-cyber-muted text-xs sm:text-sm leading-relaxed font-medium">
                    {project.shortDesc}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded text-[11px] font-mono bg-cyber-bg border border-cyber-accent/20 text-cyber-accent font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-4 bg-cyber-bg/40 border-t border-cyber-accent/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="font-mono text-xs text-cyber-accent hover:underline flex items-center space-x-1 font-semibold"
                >
                  <span>Architecture & Findings</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyber-muted hover:text-cyber-accent transition-colors"
                    aria-label="GitHub Repo"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyber-muted hover:text-cyber-accent transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </motion.div>

        {/* Modal */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      </div>
    </section>
  );
}
