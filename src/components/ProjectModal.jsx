import React from 'react';
import { X, ExternalLink, ShieldAlert, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md transition-opacity">
      <div
        className="relative w-full max-w-3xl bg-cyber-card rounded-2xl border border-cyber-accent/40 shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1E293B] dark:bg-[#0d1b2a] border-b border-cyber-accent/20">
          <div className="flex items-center space-x-2 font-mono text-sm text-cyber-accent font-bold">
            <Layers className="w-5 h-5" />
            <span>PROJECT_AUDIT // {project.category.toUpperCase()}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-cyber-accent hover:bg-cyber-accent/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Main Image */}
          <div className="relative rounded-xl overflow-hidden border border-cyber-accent/30 aspect-video group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-3 left-3 px-3 py-1 rounded bg-cyber-card/90 font-mono text-xs text-cyber-accent border border-cyber-accent/40 font-semibold">
              {project.category}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-cyber-text">
              {project.title}
            </h3>
            <p className="text-cyber-muted text-sm sm:text-base mt-2 leading-relaxed font-medium">
              {project.fullDesc}
            </p>
          </div>

          {/* Vulnerabilities Addressed / Tested */}
          {project.vulnerabilitiesDetected && (
            <div className="p-4 rounded-xl bg-cyber-bg border border-cyber-accent/20 space-y-2">
              <div className="flex items-center space-x-2 font-mono text-xs text-cyber-accent font-bold">
                <ShieldAlert className="w-4 h-4 text-cyber-accent" />
                <span>SECURITY FOCUS & VULNERABILITIES TESTED</span>
              </div>
              <ul className="space-y-1 text-xs font-mono text-cyber-muted font-medium">
                {project.vulnerabilitiesDetected.map((vuln, vIdx) => (
                  <li key={vIdx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyber-accent shrink-0" />
                    <span>{vuln}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="font-mono text-xs text-cyber-accent mb-2 font-bold">TECHNOLOGY STACK</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-cyber-bg border border-cyber-accent/30 text-cyber-text font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-cyber-accent/20 flex flex-wrap justify-end gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-cyber-bg border border-cyber-accent/40 text-cyber-text font-mono text-xs font-semibold hover:border-cyber-accent hover:text-cyber-accent transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>

            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-cyber-accent text-white dark:text-cyber-bg font-mono text-xs font-bold hover:opacity-90 transition-all shadow-md"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
