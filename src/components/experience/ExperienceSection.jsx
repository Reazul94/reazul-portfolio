import React, { useState } from 'react';
import { Calendar, MapPin, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export default function ExperienceSection() {
  const { t, lang } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState(0); // IICT BUET open by default

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-20 border-b border-subtle bg-canvas relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="03"
          eyebrow={lang === 'bn' ? "কর্মঅভিজ্ঞতা" : "EXPERIENCE"}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        {/* Vertical Timeline */}
        <div className="relative border-l border-subtle ml-3 sm:ml-6 pl-5 sm:pl-8 space-y-12">
          {t.experience.roles.map((exp, idx) => {
            const isCurrent = idx === 0;
            const isExpanded = expandedIndex === idx;

            return (
              <div key={idx} className="relative group">
                
                {/* Circular Marker */}
                <div
                  className={`absolute -left-[27px] sm:-left-[39px] top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 transition-colors ${
                    isCurrent
                      ? 'bg-canvas border-brand shadow-[0_0_10px_var(--color-brand)]'
                      : 'bg-canvas border-content-muted/60 group-hover:border-content-secondary'
                  }`}
                >
                  {isCurrent && (
                    <div className="w-1.5 h-1.5 rounded-full bg-brand absolute inset-0 m-auto animate-pulse" />
                  )}
                </div>

                {/* Experience Card */}
                <div className="p-5 sm:p-7 rounded-xl bg-card hover:bg-card-hover border border-subtle hover:border-brand/30 transition-all shadow-xs">
                  
                  {/* Header Row */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-5 border-b border-subtle">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-canvas-subtle text-content-secondary border border-subtle">
                          {exp.type}
                        </span>
                        {isCurrent && (
                          <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium text-brand bg-brand/10 border border-brand/20 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                            {t.experience.currentBadge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-content-primary tracking-tight">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-content-secondary mt-0.5">
                        <Building2 className="w-3.5 h-3.5 text-brand shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col lg:items-end gap-1 text-xs font-mono text-content-muted">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-canvas-subtle border border-subtle text-content-secondary">
                        <Calendar className="w-3 h-3 text-brand" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-1 text-content-muted">
                        <MapPin className="w-3 h-3 text-content-muted" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary / Core Description */}
                  <p className="mt-4 text-xs sm:text-sm text-content-secondary leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Key Contributions Header & Toggle */}
                  <div className="mt-5">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-content-muted font-semibold">
                        {lang === 'bn' ? "মূল দায়িত্ব ও সম্পাদনসমূহ" : "Key Responsibilities & Deliverables"} ({exp.highlights.length})
                      </h4>
                      <button
                        type="button"
                        onClick={() => toggleExpand(idx)}
                        className="inline-flex items-center gap-1 text-xs font-mono text-brand hover:underline"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? t.experience.collapseText : t.experience.expandText}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Highlights list */}
                    {isExpanded && (
                      <ul className="space-y-2.5 text-xs sm:text-sm text-content-secondary animate-in fade-in duration-200">
                        {exp.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Tech stack tags */}
                  <div className="mt-6 pt-4 border-t border-subtle flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono text-content-muted mr-1">
                      {lang === 'bn' ? "ব্যবহৃত প্রযুক্তি:" : "Core Stack:"}
                    </span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-canvas-subtle border border-subtle text-content-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
