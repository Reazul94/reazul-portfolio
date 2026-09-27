import React from 'react';
import { Server, Database, FileSpreadsheet, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function StatsBar() {
  const { stats } = portfolioData;

  const highlights = [
    {
      icon: Server,
      title: "Enterprise Backend Core",
      desc: "Robust architecture with Java, Spring Boot, Spring MVC, and Grails Framework."
    },
    {
      icon: Database,
      title: "Data & PL/SQL Specialization",
      desc: "Deep Oracle 11g & MS SQL Server, materialized views, functions, and query optimization."
    },
    {
      icon: FileSpreadsheet,
      title: "Mission-Critical Reporting",
      desc: "Financial ledgers, accounts receivable, and operational BI via Jasper & Crystal Reports."
    },
    {
      icon: ShieldCheck,
      title: "National & Utility Compliance",
      desc: "Utility billing rules, NBR statutory VAT processes, and Law Suit Management."
    }
  ];

  return (
    <section id="snapshot" className="py-12 bg-navy-900/60 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-navy-950/70 border border-slate-800/90 shadow-card-dark hover:border-sky-500/30 transition-all group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight group-hover:text-sky-400 transition-colors">
                {stat.value}
              </div>
              <div className="mt-1.5 text-sm font-bold text-slate-200">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-slate-400 leading-snug">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Engineering Capability */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-slate-700 transition-colors"
              >
                <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-400 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
