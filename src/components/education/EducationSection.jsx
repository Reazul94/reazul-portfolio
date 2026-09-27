import React from 'react';
import { GraduationCap, BrainCircuit, Award, Users, MapPin } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export default function EducationSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="education" className="py-20 border-b border-subtle bg-canvas relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="07"
          eyebrow={lang === 'bn' ? "শিক্ষা ও গবেষণা" : "ACADEMICS & RESEARCH"}
          title={t.education.title}
          subtitle={t.education.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic Degrees */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-brand" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-content-primary font-semibold">
                {t.education.academicTitle}
              </h3>
            </div>

            {t.education.degrees.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-card border border-subtle hover:border-brand/30 transition-colors shadow-xs"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-base font-bold text-content-primary">
                      {item.degree}
                    </h4>
                    <p className="text-xs sm:text-sm text-content-secondary mt-0.5">
                      {item.institution}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-content-muted mt-1 font-mono">
                      <MapPin className="w-3 h-3 text-content-muted" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1 shrink-0 font-mono text-xs">
                    <span className="text-content-muted">{item.period}</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold text-brand bg-brand/10 border border-brand/20">
                      {item.result}
                    </span>
                  </div>
                </div>

                {item.highlights && item.highlights.length > 0 && (
                  <p className="mt-3 text-xs text-content-secondary leading-relaxed border-t border-subtle pt-2.5">
                    {item.highlights[0]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Research Thesis, Certifications & Mentorship */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Research / Thesis Section */}
            <div className="p-6 rounded-xl bg-card border border-subtle shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <BrainCircuit className="w-4 h-4 text-brand" />
                <span className="text-xs font-mono uppercase tracking-wider text-brand font-semibold">
                  {t.education.researchTitle}
                </span>
              </div>

              <h4 className="text-base font-bold text-content-primary mb-2">
                {t.education.research.title}
              </h4>
              
              <p className="text-xs font-mono text-content-muted mb-4">
                {t.education.research.institution}
              </p>

              {/* Minimal Conceptual Data-Science Flow Diagram */}
              <div className="p-3.5 rounded-lg bg-canvas-subtle border border-subtle mb-4">
                <div className="flex items-center justify-between font-mono text-[11px] text-content-secondary overflow-x-auto gap-2 py-1">
                  {t.education.research.steps.map((step, sIdx) => {
                    const isLast = sIdx === t.education.research.steps.length - 1;
                    return (
                      <React.Fragment key={sIdx}>
                        <span className={`px-2 py-1 rounded border shrink-0 text-center ${
                          isLast
                            ? 'bg-brand/10 border-brand/30 text-brand font-semibold'
                            : 'bg-card border-subtle text-content-primary'
                        }`}>
                          {step}
                        </span>
                        {!isLast && <span className="text-brand shrink-0">→</span>}
                      </React.Fragment>
                    );
                  })}
                </div>
                <span className="block mt-2 text-[10px] font-mono text-content-muted">
                  * {lang === 'bn' ? "গ্রাহকের Churn পূর্বাভাস বিষয়ে গবেষণাভিত্তিক ধারণাগত কাজের প্রবাহ।" : "Conceptual system workflow studied to predict churn and support proactive retention decisions."}
                </span>
              </div>

              <ul className="space-y-2 text-xs text-content-secondary leading-relaxed">
                {t.education.research.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certification & Mentorship Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Certification */}
              <div className="p-4 rounded-xl bg-canvas-subtle border border-subtle">
                <div className="flex items-center gap-1.5 text-xs font-mono text-content-primary font-semibold mb-2">
                  <Award className="w-3.5 h-3.5 text-brand" />
                  <span>{t.education.certTitle}</span>
                </div>
                <h5 className="text-xs font-bold text-content-primary">
                  {t.education.certifications[0].title}
                </h5>
                <p className="text-[11px] text-content-muted mt-0.5">
                  {t.education.certifications[0].organization} • {t.education.certifications[0].period}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1">
                  {t.education.certifications[0].topics.map((item, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-card text-content-secondary border border-subtle">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Mentorship / TA */}
              <div className="p-4 rounded-xl bg-canvas-subtle border border-subtle">
                <div className="flex items-center gap-1.5 text-xs font-mono text-content-primary font-semibold mb-2">
                  <Users className="w-3.5 h-3.5 text-brand" />
                  <span>{t.education.taTitle}</span>
                </div>
                <h5 className="text-xs font-bold text-content-primary">
                  {t.education.ta.role}
                </h5>
                <p className="text-[11px] text-content-muted mt-0.5">
                  {t.education.ta.institution} • {t.education.ta.period}
                </p>
                <p className="text-[10px] text-content-secondary mt-1.5 leading-snug">
                  {t.education.ta.supervisor}
                </p>
                <p className="text-[10px] font-mono text-content-muted mt-1">
                  {t.education.ta.keySubjects.join(', ')}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
