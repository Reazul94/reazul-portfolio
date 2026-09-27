import React from 'react';
import { Server, Database, FileSpreadsheet, Layout, Terminal, Briefcase } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export default function SkillsSection() {
  const { t, lang } = useLanguage();

  const getClusterIcon = (name) => {
    switch (name) {
      case 'Programming Languages':
      case 'Backend & APIs':
        return Server;
      case 'Databases & Data Objects':
      case 'Frameworks & ORM':
        return Database;
      case 'Enterprise Reporting':
        return FileSpreadsheet;
      case 'Tools & Deployment':
        return Terminal;
      case 'Domain Knowledge':
        return Briefcase;
      default:
        return Layout;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-subtle bg-canvas relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="06"
          eyebrow={lang === 'bn' ? "কারিগরি দক্ষতা" : "TECHNICAL ARSENAL"}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        {/* Technology Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.skills.clusters.map((cluster, idx) => {
            const Icon = getClusterIcon(cluster.category);
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-card hover:bg-card-hover border border-subtle hover:border-brand/30 transition-all shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-subtle">
                    <div className="w-8 h-8 rounded-lg bg-canvas-subtle border border-subtle flex items-center justify-center text-brand">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-content-primary uppercase tracking-wider font-mono">
                      {cluster.category}
                    </h3>
                  </div>

                  {/* Elegant Technology Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cluster.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-canvas-subtle text-content-secondary hover:text-content-primary border border-subtle hover:border-brand/40 transition-all"
                      >
                        {skill}
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
