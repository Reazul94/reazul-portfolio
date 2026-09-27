import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutSection() {
  const { personal } = portfolioData;
  const { t, lang } = useLanguage();

  const snapshotCards = [
    {
      metric: t.snapshot.expValue,
      label: t.snapshot.expLabel,
      detail: t.snapshot.expDesc
    },
    {
      metric: t.snapshot.platformsValue,
      label: t.snapshot.platformsLabel,
      detail: t.snapshot.platformsDesc
    },
    {
      metric: t.snapshot.backendValue,
      label: t.snapshot.backendLabel,
      detail: t.snapshot.backendDesc
    },
    {
      metric: t.snapshot.dbValue,
      label: t.snapshot.dbLabel,
      detail: t.snapshot.dbDesc
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-subtle bg-canvas relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="01"
          eyebrow={lang === 'bn' ? "পরিচিতি" : "ABOUT"}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Professional Narrative */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-content-secondary leading-relaxed">
            <div className="p-6 rounded-xl bg-card border border-subtle shadow-xs">
              <h3 className="text-base font-semibold text-content-primary mb-3">
                {lang === 'bn' ? "এন্টারপ্রাইজ প্রেক্ষাপট ও কাজের দর্শন" : "Enterprise Background & Philosophy"}
              </h3>
              <p className="text-content-secondary leading-relaxed">
                {t.about.p1}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-canvas-subtle border border-subtle">
              <h4 className="text-xs font-mono uppercase tracking-wider text-brand font-semibold mb-2">
                {lang === 'bn' ? "IICT, BUET-এ বর্তমান দায়িত্ব" : "Mandate at IICT, BUET"}
              </h4>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                {t.about.p2}
              </p>
            </div>

            {/* Quick Metadata Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-lg bg-card border border-subtle text-xs font-mono shadow-xs">
                <span className="text-content-muted block mb-1">
                  {lang === 'bn' ? "কর্মস্থল:" : "Primary Base:"}
                </span>
                <span className="text-content-primary font-medium">{personal.location}</span>
              </div>
              <div className="p-3.5 rounded-lg bg-card border border-subtle text-xs font-mono shadow-xs">
                <span className="text-content-muted block mb-1">
                  {lang === 'bn' ? "একাডেমিক ডিগ্রি:" : "Academic Degree:"}
                </span>
                <span className="text-content-primary font-medium">B.Sc. in CSE (CGPA 3.647)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Snapshot Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-content-muted font-semibold">
                {lang === 'bn' ? "এক নজরে" : "Visual Summary"}
              </span>
              <h3 className="text-sm font-semibold text-content-primary">
                {t.snapshot.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {snapshotCards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-card hover:bg-card-hover border border-subtle hover:border-brand/30 transition-all shadow-xs group"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-content-primary tracking-tight group-hover:text-brand transition-colors">
                      {card.metric}
                    </span>
                    <span className="text-xs font-semibold text-content-muted uppercase font-mono tracking-wider">
                      {card.label}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-content-secondary leading-normal">
                    {card.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
