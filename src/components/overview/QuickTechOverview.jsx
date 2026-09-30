import React from 'react';
import { Server, Database, Layers, FileSpreadsheet } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function QuickTechOverview() {
  const { t, lang } = useLanguage();

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'backend':
        return Server;
      case 'database':
        return Database;
      case 'enterprise':
        return Layers;
      case 'reporting':
        return FileSpreadsheet;
      default:
        return Server;
    }
  };

  const categories = t.quickTech?.categories || [
    {
      id: 'backend',
      name: 'BACKEND',
      skills: ['Java', 'Spring Boot', 'Spring MVC', 'Grails']
    },
    {
      id: 'database',
      name: 'DATABASE',
      skills: ['Oracle 11g', 'PL/SQL', 'SQL Server', 'T-SQL']
    },
    {
      id: 'enterprise',
      name: 'ENTERPRISE',
      skills: ['ERP', 'Utility Billing', 'Customer Management']
    },
    {
      id: 'reporting',
      name: 'REPORTING',
      skills: ['Jasper Reports', 'Jasper Studio', 'iReport', 'Crystal Reports']
    }
  ];

  return (
    <section
      id="quick-overview"
      className="py-8 sm:py-10 border-b border-subtle bg-canvas-subtle/60 relative transition-colors"
      aria-label="Quick Technical Overview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header for Recruiters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand font-semibold">
              {t.quickTech?.eyebrow || 'QUICK TECHNICAL OVERVIEW'}
            </span>
            <span className="text-content-muted text-xs">•</span>
            <h2 className="text-xs sm:text-sm font-bold text-content-primary tracking-tight">
              {t.quickTech?.title || 'Core Technical Profile'}
            </h2>
          </div>
          <span className="text-[11px] font-mono text-content-muted hidden md:inline-block">
            {lang === 'bn' ? '৪.৫+ বছর এন্টারপ্রাইজ অভিজ্ঞতা' : '4.5+ Years Enterprise Production Stack'}
          </span>
        </div>

        {/* 4 Compact Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            return (
              <div
                key={cat.id}
                className="p-4 rounded-xl bg-card border border-subtle hover:border-brand/30 transition-all shadow-xs group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 pb-2.5 mb-3 border-b border-subtle">
                    <div className="w-7 h-7 rounded-md bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-mono text-xs font-bold text-content-primary tracking-wider uppercase">
                      {cat.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-canvas-subtle text-content-secondary border border-subtle group-hover:border-brand/20 transition-colors"
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
