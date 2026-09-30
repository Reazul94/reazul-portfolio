import React from 'react';
import { ArrowRight, FileDown, ExternalLink, Mail, MapPin, Phone, Database } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export default function Hero() {
  const { personal } = portfolioData;
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative pt-20 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-24 border-b border-subtle bg-canvas overflow-hidden transition-colors"
    >
      {/* Background: Subtle technical grid and gentle ambient illumination */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 dark:opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand/5 dark:bg-brand/[0.03] rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-4 sm:right-10 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] bg-brand-secondary/5 dark:bg-brand-secondary/[0.02] rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Mobile: Text -> Title -> Description -> CTAs -> Image. Desktop: 50/50 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Desktop) / Top Flow on Mobile */}
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full">
            
            {/* Trust Pill / Affiliation */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-card border border-subtle mb-4 sm:mb-5 shadow-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-content-secondary uppercase truncate">
                {t.hero.eyebrow}
              </span>
              <span className="text-content-muted text-xs">|</span>
              <span className="font-mono text-[10px] sm:text-xs text-brand font-medium truncate">
                {t.hero.affiliation}
              </span>
            </div>

            {/* Candidate Name with fluid responsive scaling */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-content-primary tracking-tight leading-[1.08] uppercase break-words w-full">
              S.B.M.<br />
              REAZUL KARIM
            </h1>

            {/* Professional Title / Specialization */}
            <p className="mt-2.5 sm:mt-3 font-mono text-xs sm:text-sm md:text-base text-brand tracking-tight font-medium leading-snug">
              {t.hero.tagline}
            </p>

            {/* Professional Summary Description */}
            <p className="mt-3.5 sm:mt-4 text-xs sm:text-sm md:text-base text-content-secondary leading-relaxed max-w-2xl font-normal">
              {t.hero.summary}
            </p>

            {/* CTAs: Mobile-first responsive arrangement */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 mt-6 sm:mt-8 w-full sm:w-auto">
              {/* Primary View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-brand hover:bg-brand-secondary transition-colors focus-visible:ring-2 focus-visible:ring-brand shadow-sm text-center min-h-[44px]"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </a>

              {/* Download CV */}
              <a
                href={personal.resumeUrl}
                download="SBM_Reazul_Karim_ATS_CV.pdf"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-lg text-xs font-medium text-content-primary bg-card hover:bg-card-hover border border-subtle hover:border-brand/40 transition-colors focus-visible:ring-2 focus-visible:ring-brand shadow-xs text-center min-h-[44px]"
                title="Download verified CV as PDF"
              >
                <FileDown className="w-3.5 h-3.5 text-brand shrink-0" />
                <span>{t.hero.downloadCv}</span>
              </a>

              {/* View CV */}
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-lg text-xs font-medium text-content-primary bg-card hover:bg-card-hover border border-subtle hover:border-brand/40 transition-colors focus-visible:ring-2 focus-visible:ring-brand shadow-xs text-center min-h-[44px]"
                title="Open verified CV in a new tab"
              >
                <ExternalLink className="w-3.5 h-3.5 text-brand shrink-0" />
                <span>{t.hero.viewCv}</span>
              </a>
            </div>

            {/* Quick Meta Info (Desktop) */}
            <div className="hidden lg:flex items-center gap-6 mt-8 pt-6 border-t border-subtle text-xs font-mono text-content-muted">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand shrink-0" />
                <span className="text-content-secondary">{personal.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand shrink-0" />
                <span className="text-content-secondary">{personal.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand shrink-0" />
                <span className="text-content-secondary">{personal.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Original Profile Image with Sophisticated Enterprise Frame */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center mt-4 lg:mt-0 w-full">
            <div className="relative max-w-full">
              
              {/* Abstract Technical Background Accents */}
              <div className="absolute -inset-3 sm:-inset-6 pointer-events-none">
                <div className="absolute top-0 left-0 w-2.5 sm:w-3 h-2.5 sm:h-3 border-t-2 border-l-2 border-brand/30" />
                <div className="absolute top-0 right-0 w-2.5 sm:w-3 h-2.5 sm:h-3 border-t-2 border-r-2 border-brand/30" />
                <div className="absolute bottom-0 left-0 w-2.5 sm:w-3 h-2.5 sm:h-3 border-b-2 border-l-2 border-brand/30" />
                <div className="absolute bottom-0 right-0 w-2.5 sm:w-3 h-2.5 sm:h-3 border-b-2 border-r-2 border-brand/30" />
                <div className="w-full h-full bg-tech-dots opacity-30" />
              </div>

              {/* Sophisticated Portrait Frame */}
              <div className="relative p-1.5 sm:p-2 rounded-2xl bg-card border border-subtle shadow-xl hover:border-brand/30 transition-all group">
                
                {/* Image Container with precise cropping */}
                <div className="relative w-52 sm:w-64 md:w-72 lg:w-80 aspect-[3/4] overflow-hidden rounded-xl bg-canvas-subtle">
                  <img
                    src={personal.image}
                    alt="S.B.M. Reazul Karim — Software Engineer"
                    className="w-full h-full object-cover object-center filter contrast-[1.02]"
                    loading="eager"
                  />

                  {/* Gradient base overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                  {/* Clean Technical Caption */}
                  <div className="absolute bottom-2 inset-x-2 p-1.5 sm:p-2 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between text-white">
                    <div className="truncate mr-2">
                      <p className="text-[11px] sm:text-xs font-semibold tracking-tight text-white truncate">
                        {personal.name}
                      </p>
                      <p className="text-[9px] sm:text-[10px] font-mono text-sky-400 truncate">
                        Programmer @ IICT, BUET
                      </p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" title="Production System Engineer" />
                  </div>
                </div>

                {/* Subtle Data Badges docked neatly to the frame */}
                <div className="absolute -top-2.5 -right-1.5 sm:-top-3 sm:-right-2 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-card border border-subtle text-[9px] sm:text-[10px] font-mono text-content-secondary shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span>{t.hero.badgeExperience}</span>
                </div>

                <div className="absolute -bottom-2.5 -left-1.5 sm:-bottom-3 sm:-left-2 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-card border border-subtle text-[9px] sm:text-[10px] font-mono text-content-secondary shadow-md flex items-center gap-1.5">
                  <Database className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-brand" />
                  <span>{t.hero.badgeDatabase}</span>
                </div>

              </div>

            </div>

            {/* Mobile Contact Meta under profile photo */}
            <div className="flex lg:hidden flex-col items-center gap-1 mt-5 text-[11px] sm:text-xs font-mono text-content-muted text-center">
              <span className="text-content-secondary break-all">{personal.email}</span>
              <span className="text-content-secondary">{personal.phone} • {personal.location}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
