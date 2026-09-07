import React from 'react';
import { X, ExternalLink, ShieldCheck, Award, Calendar, Hash } from 'lucide-react';

export default function CertModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md transition-opacity">
      <div
        className="relative w-full max-w-2xl bg-cyber-card rounded-2xl border border-cyber-accent/40 shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1E293B] dark:bg-[#0d1b2a] border-b border-cyber-accent/20">
          <div className="flex items-center space-x-2 font-mono text-sm text-cyber-accent font-bold">
            <Award className="w-5 h-5 text-cyber-accent" />
            <span>CERTIFICATE_DETAILS // {cert.credentialId}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-cyber-accent hover:bg-cyber-accent/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Cert Preview Image */}
          <div className="relative rounded-xl overflow-hidden border border-cyber-accent/30 aspect-video group">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="font-mono text-xs text-cyber-accent bg-cyber-card/90 px-3 py-1 rounded border border-cyber-accent/40 font-semibold">
                VERIFIED CREDENTIAL
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-cyber-text">
              {cert.title}
            </h3>
            <p className="text-cyber-accent font-mono text-sm mt-1 font-semibold">{cert.issuer}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-cyber-bg border border-cyber-accent/20 flex items-center space-x-3">
              <Calendar className="w-4 h-4 text-cyber-accent" />
              <div>
                <span className="text-cyber-muted block">Issue Date</span>
                <span className="text-cyber-text font-semibold">{cert.date}</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-cyber-bg border border-cyber-accent/20 flex items-center space-x-3">
              <Hash className="w-4 h-4 text-cyber-accent" />
              <div>
                <span className="text-cyber-muted block">Credential ID</span>
                <span className="text-cyber-text font-semibold">{cert.credentialId}</span>
              </div>
            </div>
          </div>

          {/* Key Skills Acquired */}
          <div>
            <h4 className="font-mono text-xs text-cyber-accent mb-2 font-bold">VERIFIED SKILLS COVERED</h4>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-cyber-accent/10 border border-cyber-accent/30 text-cyber-accent flex items-center space-x-1 font-semibold"
                >
                  <ShieldCheck className="w-3 h-3" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Verification CTA */}
          <div className="pt-4 border-t border-cyber-accent/20 flex justify-end">
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-cyber-accent text-white dark:text-cyber-bg font-mono text-xs font-bold hover:opacity-90 transition-all shadow-md"
            >
              <span>Verify Official Credential</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
