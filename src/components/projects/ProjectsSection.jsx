import React, { useState, useMemo } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Layers, Database, Server, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export default function ProjectsSection() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedCards, setExpandedCards] = useState({});

  const filterTabs = [
    { key: 'All', label: t.projects.filterAll },
    { key: 'ERP', label: t.projects.filterErp },
    { key: 'Backend', label: t.projects.filterBackend },
    { key: 'Database', label: t.projects.filterDatabase },
    { key: 'Reporting', label: t.projects.filterReporting },
    { key: 'Web', label: t.projects.filterWeb },
  ];

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  React.useEffect(() => {
    const handleSelectProject = (e) => {
      const { id } = e.detail || {};
      if (!id) return;
      setActiveFilter('All');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('ring-2', 'ring-brand');
          setTimeout(() => {
            el.classList.remove('ring-2', 'ring-brand');
          }, 2000);
        }
      }, 100);
    };

    window.addEventListener('select-project', handleSelectProject);
    return () => window.removeEventListener('select-project', handleSelectProject);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return t.projects.items;
    return t.projects.items.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter, t.projects.items]);

  // If KGDCL ERP is present in the filtered set, feature it when 'All' or 'ERP' is selected
  const isKgdclFeatured = activeFilter === 'All' && filteredProjects.some((p) => p.id === 'kgdcl-erp');
  const featuredProject = isKgdclFeatured ? filteredProjects.find((p) => p.id === 'kgdcl-erp') : null;
  const gridProjects = isKgdclFeatured ? filteredProjects.filter((p) => p.id !== 'kgdcl-erp') : filteredProjects;

  return (
    <section id="projects" className="py-20 border-b border-subtle bg-canvas relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          number="04"
          eyebrow={lang === 'bn' ? "প্রকল্পসমূহ" : "FEATURED PROJECTS"}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        {/* Filter Tabs Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-subtle">
          <span className="text-xs font-mono text-content-muted mr-2">
            {lang === 'bn' ? "ক্যাটাগরি:" : "Filter:"}
          </span>
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  isActive
                    ? 'bg-brand text-white font-semibold shadow-xs'
                    : 'bg-card text-content-secondary hover:text-content-primary hover:bg-card-hover border border-subtle'
                }`}
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 1. VISUALLY FEATURED PROJECT: KGDCL ERP System (When 'All' filter active) */}
        {featuredProject && (
          <div id={featuredProject.id} className="mb-12 p-6 sm:p-8 lg:p-10 rounded-2xl bg-card hover:bg-card-hover border border-subtle hover:border-brand/30 transition-all shadow-md group scroll-mt-24">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Project Overview & Details */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-mono text-xs text-brand font-semibold tracking-wider uppercase">
                      {lang === 'bn' ? "প্রধান সিস্টেম" : "FEATURED SYSTEM"} • {featuredProject.client}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {t.projects.productionActive}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-content-primary tracking-tight group-hover:text-brand transition-colors">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-content-secondary leading-relaxed">
                    {featuredProject.scope}
                  </p>

                  {/* Key Contributions */}
                  <div className="mt-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-content-muted font-semibold mb-3">
                      {t.projects.contributionsLabel}
                    </h4>
                    <ul className="space-y-2.5">
                      {featuredProject.contributions.map((c, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-content-secondary leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Badges & Live Link */}
                <div className="mt-8 pt-6 border-t border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-canvas-subtle text-content-secondary border border-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {featuredProject.url && (
                    <a
                      href={featuredProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-brand hover:bg-brand-secondary transition-colors shrink-0 self-start sm:self-auto shadow-xs"
                    >
                      <span>{t.projects.viewLive}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>

              {/* Right Column: Stylized Abstract ERP Data Architecture Visualization */}
              <div className="lg:col-span-5 flex flex-col justify-center bg-canvas-subtle rounded-xl p-5 sm:p-6 border border-subtle">
                
                <div className="mb-4 pb-3 border-b border-subtle flex items-center justify-between">
                  <span className="font-mono text-[11px] text-content-muted uppercase tracking-wider font-semibold">
                    {t.projects.archTitle}
                  </span>
                  <span className="text-[10px] font-mono text-brand font-medium">
                    {lang === 'bn' ? "ধারণাগত চিত্র" : "Conceptual"}
                  </span>
                </div>

                {/* Functional Flow Diagram */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-card border border-subtle flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-brand" />
                      <span className="text-content-primary font-medium">Enterprise ERP Core</span>
                    </div>
                    <span className="text-[10px] text-content-muted">Grails / Java</span>
                  </div>

                  <div className="flex justify-center">
                    <span className="text-xs text-content-muted">↓</span>
                  </div>

                  <div className="p-3 rounded-lg bg-card border border-subtle flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-brand" />
                      <span className="text-content-primary font-medium">Billing & Customer Management</span>
                    </div>
                    <span className="text-[10px] text-content-muted">Workflows</span>
                  </div>

                  <div className="flex justify-center">
                    <span className="text-xs text-content-muted">↓</span>
                  </div>

                  <div className="p-3 rounded-lg bg-card border border-subtle flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-brand" />
                      <span className="text-content-primary font-medium">Oracle 11g & PL/SQL</span>
                    </div>
                    <span className="text-[10px] text-content-muted">Materialized Views</span>
                  </div>

                  <div className="flex justify-center">
                    <span className="text-xs text-content-muted">↓</span>
                  </div>

                  <div className="p-3 rounded-lg bg-card border border-subtle flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <FileSpreadsheet className="w-4 h-4 text-brand" />
                      <span className="text-content-primary font-medium">Reporting & Ledgers</span>
                    </div>
                    <span className="text-[10px] text-content-muted">Jasper Reports</span>
                  </div>

                  <div className="flex justify-center">
                    <span className="text-xs text-content-muted">↓</span>
                  </div>

                  <div className="p-3 rounded-lg bg-card border border-subtle flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <Server className="w-4 h-4 text-brand" />
                      <span className="text-content-primary font-medium">Linux Server Deployment</span>
                    </div>
                    <span className="text-[10px] text-content-muted">WAR Deployments</span>
                  </div>
                </div>

                <p className="mt-4 text-[11px] text-content-muted leading-relaxed">
                  * {t.projects.archNote}
                </p>

              </div>

            </div>

          </div>
        )}

        {/* 2. RESPONSIVE PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridProjects.map((project, idx) => {
            const isExpanded = !!expandedCards[project.id];
            const projectNumber = `0${idx + (featuredProject ? 2 : 1)}`;

            return (
              <article
                key={project.id}
                id={project.id}
                className="p-6 rounded-xl bg-card hover:bg-card-hover border border-subtle hover:border-brand/30 transition-all shadow-xs flex flex-col justify-between group scroll-mt-24"
              >
                <div>
                  {/* Top Bar: Number, Categories & Client */}
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-subtle">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-brand font-bold">
                        PROJECT {projectNumber}
                      </span>
                      {project.url && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[11px] text-content-muted truncate max-w-[200px]">
                      {project.client}
                    </span>
                  </div>

                  {/* Title & Live Link Button */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-lg font-bold text-content-primary tracking-tight group-hover:text-brand transition-colors">
                      {project.title}
                    </h4>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md bg-canvas-subtle hover:bg-brand hover:text-white text-brand border border-subtle transition-colors shrink-0"
                        title={t.projects.viewLive}
                        aria-label={`Visit live portal for ${project.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Project Scope Description */}
                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed line-clamp-3 mb-4">
                    {project.scope}
                  </p>

                  {/* Expandable Key Deliverables */}
                  <div className="mb-4">
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-brand hover:underline mb-2"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? t.projects.collapseDeliverables : t.projects.expandDeliverables} ({project.contributions.length})</span>
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>

                    {isExpanded && (
                      <ul className="space-y-2 text-xs text-content-secondary animate-in fade-in duration-150 pl-1 border-l-2 border-brand/20 my-2">
                        {project.contributions.map((c, cIdx) => (
                          <li key={cIdx} className="leading-relaxed pl-2">
                            • {c}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-3 border-t border-subtle flex flex-wrap gap-1">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-canvas-subtle text-content-secondary border border-subtle"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
