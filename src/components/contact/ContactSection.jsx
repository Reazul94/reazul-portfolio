import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, FileDown, Copy, Check, ExternalLink } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export default function ContactSection() {
  const { personal } = portfolioData;
  const { t, lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(personal.email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = personal.email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.warn('Failed to copy email', err);
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-subtle bg-canvas relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="08"
          eyebrow={lang === 'bn' ? "যোগাযোগ" : "CONTACT"}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="max-w-4xl mx-auto">
          
          {/* Main Direct Communication Card */}
          <div className="p-6 sm:p-10 rounded-2xl bg-card border border-subtle shadow-lg text-center relative">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-subtle border border-subtle mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-content-secondary">
                {lang === 'bn' ? "এন্টারপ্রাইজ ইঞ্জিনিয়ারিং সুযোগের জন্য যোগাযোগযোগ্য" : "Available for Enterprise Engineering Opportunities"}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-content-primary tracking-tight">
              {lang === 'bn' ? "নতুন এন্টারপ্রাইজ প্রজেক্ট নিয়ে আলোচনা করতে চান?" : "Ready to collaborate or discuss an enterprise system?"}
            </h3>
            
            <p className="mt-3 text-sm sm:text-base text-content-secondary max-w-xl mx-auto leading-relaxed">
              {t.contact.description}
            </p>

            {/* Direct Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {/* Email CTA */}
              <a
                href={`mailto:${personal.email}?subject=Enterprise%20Engineering%20Discussion`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-brand hover:bg-brand-secondary transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>{t.contact.sendEmail}</span>
              </a>

              {/* Copy Email Button with Success Toast */}
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-content-primary bg-canvas-subtle hover:bg-card border border-subtle hover:border-brand/40 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-content-muted" />}
                <span>{copied ? t.contact.emailCopied : t.contact.copyEmail}</span>
              </button>

              {/* View CV Button */}
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-content-primary bg-canvas-subtle hover:bg-card border border-subtle hover:border-brand/40 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-brand" />
                <span>{t.contact.viewCv}</span>
              </a>

              {/* Download CV Button */}
              <a
                href={personal.resumeUrl}
                download="SBM_Reazul_Karim_ATS_CV.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-content-primary bg-canvas-subtle hover:bg-card border border-subtle hover:border-brand/40 transition-colors"
              >
                <FileDown className="w-4 h-4 text-brand" />
                <span>{t.contact.downloadCv}</span>
              </a>
            </div>

            {/* Small Success Notification Banner */}
            {copied && (
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-600 dark:text-emerald-400 animate-in fade-in duration-200">
                <Check className="w-3.5 h-3.5" />
                <span>{t.contact.emailCopied} ({personal.email})</span>
              </div>
            )}

            {/* Direct Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-subtle text-left">
              
              {/* Email Card & CTA */}
              <div className="p-4 rounded-xl bg-canvas-subtle border border-subtle">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono text-content-muted uppercase tracking-wider block">
                    Email
                  </span>
                  <Mail className="w-3.5 h-3.5 text-brand" />
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-xs sm:text-sm font-semibold text-content-primary hover:text-brand transition-colors break-all"
                >
                  {personal.email}
                </a>
              </div>

              {/* Phone Card & CTA */}
              <div className="p-4 rounded-xl bg-canvas-subtle border border-subtle">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono text-content-muted uppercase tracking-wider block">
                    Phone
                  </span>
                  <Phone className="w-3.5 h-3.5 text-brand" />
                </div>
                <a
                  href={`tel:${personal.phone.replace(/[\s-]/g, '')}`}
                  className="text-xs sm:text-sm font-semibold text-content-primary hover:text-brand transition-colors font-mono"
                >
                  {personal.phone}
                </a>
              </div>

              {/* LinkedIn & Location */}
              <div className="p-4 rounded-xl bg-canvas-subtle border border-subtle">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono text-content-muted uppercase tracking-wider block">
                    {lang === 'bn' ? "অবস্থান ও লিঙ্কডইন" : "Location & LinkedIn"}
                  </span>
                  <Linkedin className="w-3.5 h-3.5 text-brand" />
                </div>
                <p className="text-xs text-content-muted mb-1 font-mono">
                  {personal.location}
                </p>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-brand hover:underline inline-flex items-center gap-1 font-mono"
                >
                  <span>{personal.linkedin}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
