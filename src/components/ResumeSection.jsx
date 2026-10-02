import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, CheckCircle2, ShieldCheck, X, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeSection() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section id="resume" className="py-24 relative z-10 border-t border-cyber-accent/10">
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
            <span className="text-cyber-accent font-semibold">07.</span>
            <span>CURRICULUM_VITAE</span>
            <div className="h-px bg-cyber-accent/30 flex-grow max-w-xs"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-text">
            Resume & Profile
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base mt-2 max-w-2xl font-medium">
            View or download my resume and summary of academic study, technical projects, and cybersecurity learning.
          </p>
        </motion.div>

        {/* Resume Preview Banner Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-cyber-card border border-cyber-accent/30 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-cyber-accent/10 border border-cyber-accent/30 text-cyber-accent font-mono text-xs font-semibold">
                <FileText className="w-4 h-4" />
                <span>PARTHIV_PATEL_RESUME.PDF</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-cyber-text">
                {personalInfo.name} — MSc Cybersecurity Management
              </h3>

              <p className="text-cyber-muted text-sm sm:text-base leading-relaxed font-medium">
                Cybersecurity graduate with practical experience in network security, ethical hacking, web security, and project-based learning through academic study and simulated industry exercises.
              </p>

              {/* Quick checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs text-cyber-muted font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyber-accent" />
                  <span>MSc Cybersecurity Management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyber-accent" />
                  <span>Network & Web Security Skills</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyber-accent" />
                  <span>Cybersecurity Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyber-accent" />
                  <span>Cisco Intro to Cybersecurity</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/resume.pdf"
                  download="Parthiv_Patel_Cyber_Security_Resume.pdf"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-cyber-accent text-white dark:text-cyber-bg font-mono text-sm font-bold hover:opacity-90 transition-all duration-300 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Resume</span>
                </a>

                <button
                  onClick={() => setShowPreviewModal(true)}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-cyber-bg border border-cyber-accent text-cyber-accent font-mono text-sm font-semibold hover:bg-cyber-accent/10 transition-all duration-300 shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Online Resume</span>
                </button>
              </div>
            </div>

            {/* Visual Icon Illustration Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="p-8 rounded-2xl bg-cyber-bg border border-cyber-accent/20 text-center space-y-4 w-full max-w-xs shadow-inner">
                <div className="w-16 h-16 mx-auto rounded-full bg-cyber-card border border-cyber-accent/40 flex items-center justify-center text-cyber-accent shadow-sm">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-mono text-base font-bold text-cyber-text">
                    ATS Compliant
                  </h4>
                  <p className="text-xs text-cyber-muted mt-1 font-medium">
                    Optimized for tech recruiters, HR screeners, and security team leads.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* View Resume Modal Popup */}
        {showPreviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <div
              className="relative w-full max-w-4xl h-[85vh] bg-cyber-card rounded-2xl border border-cyber-accent/40 shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 bg-[#1E293B] dark:bg-[#0d1b2a] border-b border-cyber-accent/20">
                <div className="flex items-center space-x-2 font-mono text-sm text-cyber-accent font-bold">
                  <FileText className="w-5 h-5" />
                  <span>RESUME_PREVIEW // PARTHIV_PATEL.PDF</span>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-slate-300 hover:text-cyber-accent"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setShowPreviewModal(false)}
                    className="p-1 text-slate-300 hover:text-cyber-accent"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* PDF Frame */}
              <div className="flex-grow w-full bg-slate-900">
                <iframe
                    src="/resume.pdf"
                  title="Resume PDF Viewer"
                  className="w-full h-full border-none"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
