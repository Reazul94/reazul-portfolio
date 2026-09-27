import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Layers, Gauge, Users, ShieldCheck, FileSpreadsheet, Scale, Terminal } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function DomainSection() {
  const { t, lang } = useLanguage();

  const domainIcons = {
    erp: Layers,
    billing: Gauge,
    customer: Users,
    vat: ShieldCheck,
    reporting: FileSpreadsheet,
    lawsuit: Scale,
    support: Terminal,
  };

  return (
    <section id="domain" className="py-20 border-b border-subtle bg-canvas-subtle/50 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="02"
          eyebrow={lang === 'bn' ? "ডোমেন অভিজ্ঞতা" : "DOMAIN EXPERIENCE"}
          title={t.domain.title}
          subtitle={t.domain.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.domain.domains.map((item) => {
            const Icon = domainIcons[item.id] || Layers;
            return (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-card border border-subtle hover:border-brand/30 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4 group-hover:bg-brand group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-semibold text-content-primary mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-subtle">
                  <span className="text-[11px] font-mono text-content-muted">
                    {item.stack}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer footer grounded strictly in CV */}
        <p className="mt-8 text-center text-xs font-mono text-content-muted">
          {t.domain.disclaimer}
        </p>

      </div>
    </section>
  );
}
