import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Layers, Database, FileSpreadsheet, Server, Laptop, GitBranch, ArrowDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function TechEcosystem() {
  const { t, lang } = useLanguage();

  const layerIcons = [
    Laptop,         // Presentation
    Layers,         // Application & Services
    GitBranch,      // Persistence & ORM
    Database,       // Database & Data Engines
    FileSpreadsheet,// BI & Reporting
    Server,         // Infrastructure
  ];

  return (
    <section id="ecosystem" className="py-20 border-b border-subtle bg-canvas-subtle/40 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="05"
          eyebrow={lang === 'bn' ? "টেকনোলজি ইকোসিস্টেম" : "TECHNOLOGY ECOSYSTEM"}
          title={t.ecosystem.title}
          subtitle={t.ecosystem.subtitle}
        />

        {/* Visual Stack Diagram */}
        <div className="max-w-4xl mx-auto space-y-3">
          {t.ecosystem.layers.map((layer, index) => {
            const Icon = layerIcons[index] || Layers;
            const isLast = index === t.ecosystem.layers.length - 1;

            return (
              <React.Fragment key={index}>
                <div className="p-5 sm:p-6 rounded-xl bg-card border border-subtle hover:border-brand/30 transition-all shadow-xs group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    {/* Layer Header & Info */}
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-brand font-semibold uppercase">
                            LAYER 0{index + 1}
                          </span>
                          <span className="text-content-muted text-xs">/</span>
                          <h3 className="text-sm sm:text-base font-bold text-content-primary">
                            {layer.layer}
                          </h3>
                        </div>
                        <p className="text-xs text-content-secondary mt-0.5">
                          {layer.desc}
                        </p>
                      </div>
                    </div>

                    {/* Tech Badges for Layer */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:justify-end max-w-sm">
                      {layer.techs.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-canvas-subtle border border-subtle text-content-secondary group-hover:border-brand/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Subtle downward data-flow connector between tiers */}
                {!isLast && (
                  <div className="flex items-center justify-center py-0.5">
                    <ArrowDown className="w-3.5 h-3.5 text-content-muted/40 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs font-mono text-content-muted max-w-2xl mx-auto leading-relaxed">
          * {t.ecosystem.disclaimer}
        </p>

      </div>
    </section>
  );
}
