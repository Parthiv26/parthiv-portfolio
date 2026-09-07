import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Key, Send, CheckCircle2, AlertCircle, Terminal, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const submission = new FormData();
      submission.append('name', formData.name);
      submission.append('email', formData.email);
      submission.append('subject', formData.subject || `Portfolio enquiry from ${formData.name}`);
      submission.append('message', formData.message);
      submission.append('_replyto', formData.email);
      submission.append('_captcha', 'false');
      submission.append('_template', 'table');

      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: submission
      });

      if (!response.ok) {
        throw new Error('Message delivery failed');
      }

      setStatus({
        type: 'success',
        message: 'Your message was sent successfully.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Message could not be sent. Please email me directly using the address shown.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-cyber-bg/50 border-t border-cyber-accent/10">
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
            <span className="text-cyber-accent font-semibold">08.</span>
            <span>ENCRYPTED_CHANNEL</span>
            <div className="h-px bg-cyber-accent/30 flex-grow max-w-xs"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-text">
            Get In Touch
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base mt-2 max-w-2xl font-medium">
            Whether you have a security role opportunity, vulnerability research inquiry, or just want to connect — drop me a message.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-accent/20 space-y-4 text-left shadow-md">
              <h3 className="font-mono text-lg font-bold text-cyber-text">
                Contact Coordinates
              </h3>

              {/* Email */}
              <div className="p-3.5 rounded-xl bg-cyber-bg border border-cyber-accent/20 flex items-center justify-between group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-cyber-card text-cyber-accent shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-cyber-muted font-mono block font-medium">Email Address</span>
                    <span className="text-sm font-mono font-semibold text-cyber-text">{personalInfo.email}</span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-1.5 text-cyber-muted hover:text-cyber-accent transition-colors"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-cyber-accent" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-cyber-bg border border-cyber-accent/20 flex items-center justify-between group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-cyber-card text-cyber-accent shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-cyber-muted font-mono block font-medium">Phone Number</span>
                    <span className="text-sm font-mono font-semibold text-cyber-text">{personalInfo.phone}</span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-1.5 text-cyber-muted hover:text-cyber-accent transition-colors"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-cyber-accent" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-cyber-bg border border-cyber-accent/20 flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-cyber-card text-cyber-accent shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-cyber-muted font-mono block font-medium">Location</span>
                  <span className="text-sm font-mono font-semibold text-cyber-text">{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-cyber-bg border border-cyber-accent/20 flex items-center space-x-2 text-cyber-text hover:text-cyber-accent hover:border-cyber-accent transition-colors font-mono text-xs font-semibold"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyber-accent" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-cyber-bg border border-cyber-accent/20 flex items-center space-x-2 text-cyber-text hover:text-cyber-accent hover:border-cyber-accent transition-colors font-mono text-xs font-semibold"
                >
                  <GithubIcon className="w-4 h-4 text-cyber-accent" />
                  <span>GitHub Profile</span>
                </a>
              </div>

              {/* PGP Fingerprint */}
              <div className="p-3.5 rounded-xl bg-cyber-bg/70 border border-cyber-accent/30 space-y-1">
                <div className="flex items-center space-x-2 font-mono text-[11px] text-cyber-accent font-bold">
                  <Key className="w-3.5 h-3.5" />
                  <span>PGP FINGERPRINT</span>
                </div>
                <div className="font-mono text-[10px] text-cyber-muted break-all font-semibold">
                  {personalInfo.pgpKey}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-cyber-card rounded-2xl border border-cyber-accent/20 p-6 sm:p-8 shadow-md text-left"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {status.message && (
                <div
                  className={`p-4 rounded-xl font-mono text-xs flex items-center space-x-2 ${
                    status.type === 'success'
                      ? 'bg-cyber-accent/10 border border-cyber-accent text-cyber-accent font-semibold'
                      : 'bg-red-500/10 border border-red-500 text-red-500 font-semibold'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-cyber-accent mb-1 font-bold">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Security Recruiter"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cyber-bg border border-cyber-accent/30 text-cyber-text placeholder-cyber-muted/60 font-mono text-sm focus:outline-none focus:border-cyber-accent transition-colors shadow-inner"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-cyber-accent mb-1 font-bold">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cyber-bg border border-cyber-accent/30 text-cyber-text placeholder-cyber-muted/60 font-mono text-sm focus:outline-none focus:border-cyber-accent transition-colors shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-cyber-accent mb-1 font-bold">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Job Opportunity / Pentest Inquiry"
                  className="w-full px-4 py-3 rounded-lg bg-cyber-bg border border-cyber-accent/30 text-cyber-text placeholder-cyber-muted/60 font-mono text-sm focus:outline-none focus:border-cyber-accent transition-colors shadow-inner"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-cyber-accent mb-1 font-bold">
                  ENCRYPTED MESSAGE *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="w-full px-4 py-3 rounded-lg bg-cyber-bg border border-cyber-accent/30 text-cyber-text placeholder-cyber-muted/60 font-mono text-sm focus:outline-none focus:border-cyber-accent transition-colors resize-none shadow-inner"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-cyber-accent text-white dark:text-cyber-bg font-mono font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center space-x-2 shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Terminal className="w-4 h-4 animate-spin" />
                    <span>ENCRYPTING & SENDING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
