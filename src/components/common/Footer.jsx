import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { personal } = portfolioData;
  const { t, lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-canvas-subtle border-t border-subtle py-12 text-content-secondary transition-colors no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-subtle">
          
          {/* Brand & Specialty */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-content-primary text-base tracking-tight">
                {personal.name}
              </span>
              <span className="text-content-muted text-xs">/</span>
              <span className="text-xs font-mono text-brand font-medium">
                {personal.role}
              </span>
            </div>
            <p className="text-xs font-mono text-content-muted mt-1">
              Java • Spring Boot • Grails • ERP • Reporting Solutions
            </p>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium" aria-label="Footer Navigation">
            <a href="#about" className="hover:text-brand transition-colors">{t.nav.about}</a>
            <a href="#domain" className="hover:text-brand transition-colors">{t.nav.domain}</a>
            <a href="#experience" className="hover:text-brand transition-colors">{t.nav.experience}</a>
            <a href="#projects" className="hover:text-brand transition-colors">{t.nav.projects}</a>
            <a href="#ecosystem" className="hover:text-brand transition-colors">{t.nav.ecosystem}</a>
            <a href="#skills" className="hover:text-brand transition-colors">{t.nav.skills}</a>
            <a href="#education" className="hover:text-brand transition-colors">{t.nav.education}</a>
            <a href="#contact" className="hover:text-brand transition-colors">{t.nav.contact}</a>
          </nav>

        </div>

        {/* Bottom Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-content-muted">
          <div>
            © {new Date().getFullYear()} {personal.name}. {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <span>{personal.location}</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-card hover:bg-card-hover text-content-secondary hover:text-brand border border-subtle transition-colors focus-visible:ring-2 focus-visible:ring-brand shadow-xs"
              aria-label={t.footer.backToTop}
              title={t.footer.backToTop}
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
