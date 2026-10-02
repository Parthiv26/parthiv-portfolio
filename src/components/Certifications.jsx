import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, Eye } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import CertModal from './CertModal';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const renderCertPreview = (cert) => {
    const isPdf = cert.image?.toLowerCase().endsWith('.pdf');

    if (isPdf) {
      return (
        <embed
          src={cert.image}
          type="application/pdf"
          className="w-full h-full object-cover"
          title={cert.title}
        />
      );
    }

    return (
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    );
  };

  return (
    <section id="certifications" className="py-24 relative z-10 border-t border-cyber-accent/10">
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
            <span className="text-cyber-accent font-semibold">03.</span>
            <span>ACCREDITATIONS_&_CERTS</span>
            <div className="h-px bg-cyber-accent/30 flex-grow max-w-xs"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-text">
            Certifications & Badges
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base mt-2 max-w-2xl font-medium">
            Industry recognized security certifications, active learning paths, and credential verifications.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cyber-card rounded-xl border border-cyber-accent/20 hover:border-cyber-accent/60 transition-all duration-300 overflow-hidden group shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Certificate Image Preview */}
                <div className="relative aspect-video overflow-hidden bg-cyber-bg border-b border-cyber-accent/20">
                  {renderCertPreview(cert)}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 backdrop-blur-xs">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-cyber-accent text-white dark:text-cyber-bg font-mono text-xs font-bold hover:bg-white hover:text-slate-900 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-cyber-card border border-cyber-accent text-cyber-accent font-mono text-xs hover:bg-cyber-accent/10 transition-colors"
                    >
                      <span>Verify Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <span className="absolute top-3 left-3 px-3 py-1 rounded bg-cyber-card/90 backdrop-blur-md border border-cyber-accent/30 font-mono text-[10px] text-cyber-accent font-semibold">
                    {cert.issuer}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 text-left">
                  <div className="flex items-start justify-between">
                    <h3 className="font-mono text-lg font-bold text-cyber-text group-hover:text-cyber-accent transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-4 font-mono text-xs text-cyber-muted">
                    <span>{cert.date}</span>
                    <span>•</span>
                    <span className="text-cyber-accent font-semibold">ID: {cert.credentialId}</span>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyber-bg border border-cyber-accent/20 text-cyber-muted font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyber-bg text-cyber-accent font-semibold">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 py-4 bg-cyber-bg/40 border-t border-cyber-accent/10 flex items-center justify-between">
                <span className="text-xs font-mono text-cyber-accent font-semibold flex items-center space-x-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>OFFICIALLY VERIFIED</span>
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="font-mono text-xs text-cyber-muted hover:text-cyber-accent flex items-center space-x-1 transition-colors font-medium"
                >
                  <span>Credential Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Modal rendering */}
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />

      </div>
    </section>
  );
}
