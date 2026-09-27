import React, { useState, useEffect } from 'react';
import {
  Home,
  User,
  Layers,
  Briefcase,
  FolderGit2,
  Cpu,
  Wrench,
  GraduationCap,
  BrainCircuit,
  Mail,
  ChevronDown,
  ChevronRight,
  Sun,
  Moon,
  Laptop,
  Github,
  ExternalLink,
  PanelLeftClose,
  PanelLeftOpen,
  FileCode2,
  Terminal,
  X
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export default function Sidebar({
  activeSection = 'hero',
  isCollapsed = false,
  onToggleCollapse,
  isMobileOpen = false,
  onCloseMobile
}) {
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const { personal } = portfolioData;

  const [projectsTreeOpen, setProjectsTreeOpen] = useState(true);
  const [activeProject, setActiveProject] = useState(null);

  // Lock body scroll on mobile when sidebar is open
  useEffect(() => {
    if (isMobileOpen && typeof window !== 'undefined' && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Close mobile sidebar on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileOpen) {
        onCloseMobile?.();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileOpen, onCloseMobile]);

  // Navigation items mapping 1:1 to sections
  const navItems = [
    { id: 'hero', index: '01', label: t.sidebar?.home || 'Home', icon: Home, href: '#hero' },
    { id: 'about', index: '02', label: t.sidebar?.about || 'About', icon: User, href: '#about' },
    { id: 'domain', index: '03', label: t.sidebar?.domain || 'Domain', icon: Layers, href: '#domain' },
    { id: 'experience', index: '04', label: t.sidebar?.experience || 'Experience', icon: Briefcase, href: '#experience' },
    { id: 'projects', index: '05', label: t.sidebar?.projects || 'Projects', icon: FolderGit2, href: '#projects' },
    { id: 'ecosystem', index: '06', label: t.sidebar?.ecosystem || 'Ecosystem', icon: Cpu, href: '#ecosystem' },
    { id: 'skills', index: '07', label: t.sidebar?.skills || 'Skills', icon: Wrench, href: '#skills' },
    { id: 'education', index: '08', label: t.sidebar?.education || 'Education', icon: GraduationCap, href: '#education' },
    { id: 'research', index: '09', label: t.sidebar?.research || 'Research', icon: BrainCircuit, href: '#research' },
    { id: 'contact', index: '10', label: t.sidebar?.contact || 'Contact', icon: Mail, href: '#contact' }
  ];

  // Specific 5 projects from CV
  const projectList = [
    { id: 'kgdcl-erp', title: 'KGDCL ERP', tech: 'Grails • Oracle' },
    { id: 'kgdcl-billing-portal', title: 'KGDCL Billing', tech: 'Spring Boot' },
    { id: 'sgcl-erp', title: 'SGCL ERP', tech: 'Spring • Angular' },
    { id: 'bgdcl-erp', title: 'BGDCL ERP', tech: 'Grails • PL/SQL' },
    { id: 'bizzness-roots', title: 'Bizzness Roots', tech: '.NET • SQL' }
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    onCloseMobile?.();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  const handleProjectClick = (e, projectId) => {
    e.preventDefault();
    onCloseMobile?.();
    setActiveProject(projectId);
    window.dispatchEvent(new CustomEvent('select-project', { detail: { id: projectId } }));
  };

  // On mobile screens, always show expanded content inside the drawer
  const effectiveCollapsed = isCollapsed && typeof window !== 'undefined' && window.innerWidth >= 768;

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      {/* Sidebar: Slide-out drawer on mobile (< 768px), Fixed vertical bar on desktop (>= 768px) */}
      <aside
        id="desktop-sidebar"
        aria-label="Developer Workspace Sidebar Navigation"
        className={`fixed top-0 bottom-0 left-0 z-50 md:z-40 bg-card/98 md:bg-card/95 backdrop-blur-xl md:backdrop-blur-md border-r border-subtle select-none transition-all duration-300 ease-in-out no-print flex flex-col shadow-2xl md:shadow-none ${
          isMobileOpen
            ? 'translate-x-0 w-[280px] max-w-[85vw]'
            : '-translate-x-full md:translate-x-0'
        } ${
          effectiveCollapsed ? 'md:w-[72px]' : 'md:w-[260px]'
        }`}
      >
        {/* 1. TOP PROFILE & WORKSPACE HEADER */}
        <div className="shrink-0 p-3.5 border-b border-subtle">
          {effectiveCollapsed ? (
            <div className="flex flex-col items-center gap-2">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, 'hero')}
                className="relative group rounded-lg focus-visible:ring-2 focus-visible:ring-brand"
                aria-label="Go to Home"
              >
                <img
                  src={personal.image}
                  alt={personal.name}
                  className="w-10 h-10 rounded-lg object-cover object-top border border-subtle group-hover:border-brand/50 transition-all shadow-xs"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-card" />
              </a>
              <button
                type="button"
                onClick={onToggleCollapse}
                className="p-1.5 rounded-md text-content-muted hover:text-brand hover:bg-canvas-subtle transition-colors"
                title={t.sidebar?.expand || 'Expand sidebar'}
                aria-label="Expand sidebar"
              >
                <PanelLeftOpen className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Environment Badge & Collapse/Close Button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-canvas-subtle border border-subtle text-[10px] font-mono text-content-muted">
                  <Terminal className="w-3 h-3 text-brand" />
                  <span className="font-semibold tracking-wider uppercase">WORKSPACE</span>
                </div>

                <div className="flex items-center gap-1">
                  {/* Desktop Collapse Button */}
                  <button
                    type="button"
                    onClick={onToggleCollapse}
                    className="hidden md:flex p-1 rounded text-content-muted hover:text-brand hover:bg-canvas-subtle transition-colors focus-visible:ring-2 focus-visible:ring-brand"
                    title={t.sidebar?.collapse || 'Collapse sidebar'}
                    aria-label="Collapse sidebar"
                  >
                    <PanelLeftClose className="w-4 h-4" />
                  </button>

                  {/* Mobile Close Button */}
                  <button
                    type="button"
                    onClick={onCloseMobile}
                    className="md:hidden p-1.5 rounded-lg text-content-muted hover:text-brand hover:bg-canvas-subtle transition-colors focus-visible:ring-2 focus-visible:ring-brand"
                    aria-label="Close sidebar"
                  >
                    <X className="w-5 h-5 text-brand" />
                  </button>
                </div>
              </div>

              {/* Profile Avatar, Name and Title */}
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, 'hero')}
                className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-canvas-subtle/80 transition-colors group focus-visible:ring-2 focus-visible:ring-brand"
              >
                <div className="relative shrink-0">
                  <img
                    src={personal.image}
                    alt={personal.name}
                    className="w-10 h-10 rounded-lg object-cover object-top border border-subtle group-hover:border-brand/40 transition-colors shadow-xs"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-card animate-pulse" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-content-primary truncate group-hover:text-brand transition-colors">
                    {personal.name}
                  </span>
                  <span className="text-[11px] font-mono text-content-muted truncate">
                    {personal.role}
                  </span>
                </div>
              </a>
            </div>
          )}
        </div>

        {/* 2. SCROLLABLE NAVIGATION & PROJECT EXPLORER */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden py-3 px-2 space-y-4">
          {/* Navigation Section */}
          <div>
            {!effectiveCollapsed && (
              <div className="px-2 pb-1.5 text-[10px] font-mono uppercase tracking-wider text-content-muted/80 flex items-center justify-between">
                <span>EXPLORER // NAV</span>
                <span className="text-[9px] text-content-muted/60">10 SECTIONS</span>
              </div>
            )}

            <nav className="space-y-0.5" aria-label="Sidebar Sections">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                if (effectiveCollapsed) {
                  return (
                    <div key={item.id} className="relative group flex justify-center">
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-brand/10 text-brand font-bold border border-brand/20 shadow-xs'
                            : 'text-content-secondary hover:text-content-primary hover:bg-canvas-subtle'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                        aria-label={`${item.index} ${item.label}`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                      </a>

                      {/* Floating Tooltip */}
                      <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-card border border-subtle rounded-md shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
                        <span className="text-[10px] font-mono text-brand mr-1.5">{item.index}</span>
                        <span className="text-xs font-medium text-content-primary">{item.label}</span>
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`group relative flex items-center justify-between px-2.5 py-2.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-brand/10 text-brand font-semibold shadow-xs'
                        : 'text-content-secondary hover:text-content-primary hover:bg-canvas-subtle'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {/* Subtle Active Accent Bar */}
                    {isActive && (
                      <span className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-brand rounded-r" />
                    )}

                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`font-mono text-[11px] ${
                          isActive ? 'text-brand font-bold' : 'text-content-muted group-hover:text-content-secondary'
                        }`}
                      >
                        {item.index}
                      </span>
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-brand stroke-[2.5px]' : 'text-content-muted group-hover:text-content-primary'}`} />
                      <span className="truncate">{item.label}</span>
                    </div>

                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Collapsible Project Explorer Tree */}
          <div className="pt-2 border-t border-subtle/80">
            {effectiveCollapsed ? (
              <div className="relative group flex justify-center">
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, 'projects')}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                    activeSection === 'projects'
                      ? 'bg-brand/10 text-brand border border-brand/20'
                      : 'text-content-secondary hover:text-content-primary hover:bg-canvas-subtle'
                  }`}
                  aria-label="Project Explorer"
                >
                  <FileCode2 className="w-4 h-4" />
                </a>
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-card border border-subtle rounded-md shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
                  <span className="text-xs font-mono text-content-primary">
                    {t.sidebar?.explorer || 'PROJECTS'} (5)
                  </span>
                </div>
              </div>
            ) : (
              <div>
                {/* Explorer Header / Toggle */}
                <button
                  type="button"
                  onClick={() => setProjectsTreeOpen(!projectsTreeOpen)}
                  className="w-full flex items-center justify-between px-2 py-2 rounded-md text-[10px] font-mono uppercase tracking-wider text-content-muted hover:text-content-primary hover:bg-canvas-subtle transition-colors"
                  aria-expanded={projectsTreeOpen}
                >
                  <div className="flex items-center gap-1.5">
                    {projectsTreeOpen ? (
                      <ChevronDown className="w-3.5 h-3.5 text-brand" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-content-muted" />
                    )}
                    <span className="font-semibold">{t.sidebar?.explorer || 'PROJECTS'}</span>
                  </div>
                  <span className="px-1.5 py-0.2 rounded bg-canvas-subtle text-[9px] text-content-muted border border-subtle">
                    5
                  </span>
                </button>

                {/* Tree Branches */}
                {projectsTreeOpen && (
                  <div className="mt-1 pl-2 space-y-0.5 text-xs font-mono">
                    {projectList.map((proj, idx) => {
                      const isLast = idx === projectList.length - 1;
                      const isCurrent = activeProject === proj.id;
                      const branchPrefix = isLast ? '└──' : '├──';

                      return (
                        <a
                          key={proj.id}
                          href={`#${proj.id}`}
                          onClick={(e) => handleProjectClick(e, proj.id)}
                          className={`group flex items-center gap-1.5 px-2 py-2 rounded-md text-[11px] transition-colors ${
                            isCurrent
                              ? 'bg-brand/10 text-brand font-medium'
                              : 'text-content-secondary hover:text-content-primary hover:bg-canvas-subtle'
                          }`}
                          title={`${proj.title} (${proj.tech})`}
                        >
                          <span className="text-content-muted/60 select-none group-hover:text-brand/60 transition-colors">
                            {branchPrefix}
                          </span>
                          <FileCode2 className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-brand' : 'text-content-muted'}`} />
                          <span className="truncate">{proj.title}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 3. BOTTOM UTILITY CONTROLS: THEME, LANGUAGE, GITHUB, CV */}
        <div className="shrink-0 p-3 border-t border-subtle space-y-2 bg-canvas/40">
          {effectiveCollapsed ? (
            <div className="flex flex-col items-center gap-2">
              {/* Quick Language Toggle */}
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
                className="w-9 h-9 rounded-lg bg-canvas-subtle border border-subtle flex items-center justify-center text-xs font-mono font-bold text-brand hover:border-brand/40 transition-colors"
                title={lang === 'en' ? 'বাংলা ভাষায় পরিবর্তন করুন' : 'Switch to English'}
                aria-label="Toggle language"
              >
                {lang === 'en' ? 'BN' : 'EN'}
              </button>

              {/* Quick Theme Cycle */}
              <button
                type="button"
                onClick={() => {
                  if (theme === 'light') setTheme('dark');
                  else if (theme === 'dark') setTheme('system');
                  else setTheme('light');
                }}
                className="w-9 h-9 rounded-lg bg-canvas-subtle border border-subtle flex items-center justify-center text-content-secondary hover:text-brand hover:border-brand/40 transition-colors"
                title={`Theme: ${theme}`}
                aria-label="Cycle theme"
              >
                {theme === 'light' ? (
                  <Sun className="w-4 h-4 text-amber-500" />
                ) : theme === 'dark' ? (
                  <Moon className="w-4 h-4 text-sky-400" />
                ) : (
                  <Laptop className="w-4 h-4 text-content-primary" />
                )}
              </button>

              {/* Quick GitHub */}
              <a
                href={personal.githubUrl || 'https://github.com/Reazul94'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-canvas-subtle border border-subtle flex items-center justify-center text-content-secondary hover:text-content-primary hover:border-brand/40 transition-colors"
                title="GitHub Profile: Reazul94"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <div className="space-y-2.5">
              {/* Language & Theme Controls Row */}
              <div className="flex items-center justify-between gap-1.5">
                {/* Language Switch: EN | বাংলা */}
                <div className="flex items-center bg-canvas-subtle border border-subtle rounded-lg p-0.5 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`px-2 py-1 rounded transition-colors ${
                      lang === 'en'
                        ? 'bg-brand text-white font-bold shadow-xs'
                        : 'text-content-secondary hover:text-content-primary'
                    }`}
                    aria-pressed={lang === 'en'}
                    aria-label="English"
                  >
                    EN
                  </button>
                  <span className="text-content-muted/40 text-[10px]">|</span>
                  <button
                    type="button"
                    onClick={() => setLang('bn')}
                    className={`px-2 py-1 rounded font-bengali transition-colors ${
                      lang === 'bn'
                        ? 'bg-brand text-white font-bold shadow-xs'
                        : 'text-content-secondary hover:text-content-primary'
                    }`}
                    aria-pressed={lang === 'bn'}
                    aria-label="বাংলা"
                  >
                    বাংলা
                  </button>
                </div>

                {/* Theme 3-Way Selector */}
                <div className="flex items-center bg-canvas-subtle border border-subtle rounded-lg p-0.5">
                  <button
                    type="button"
                    onClick={() => setTheme('light')}
                    className={`p-1.5 rounded transition-colors ${
                      theme === 'light'
                        ? 'bg-brand text-white shadow-xs'
                        : 'text-content-secondary hover:text-content-primary'
                    }`}
                    title={t.nav?.themeLight || 'Light'}
                    aria-label="Light theme"
                  >
                    <Sun className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme('dark')}
                    className={`p-1.5 rounded transition-colors ${
                      theme === 'dark'
                        ? 'bg-brand text-white shadow-xs'
                        : 'text-content-secondary hover:text-content-primary'
                    }`}
                    title={t.nav?.themeDark || 'Dark'}
                    aria-label="Dark theme"
                  >
                    <Moon className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme('system')}
                    className={`p-1.5 rounded transition-colors ${
                      theme === 'system'
                        ? 'bg-brand text-white shadow-xs'
                        : 'text-content-secondary hover:text-content-primary'
                    }`}
                    title={t.nav?.themeSystem || 'System'}
                    aria-label="System theme"
                  >
                    <Laptop className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* GitHub & CV Action Links */}
              <div className="pt-2 border-t border-subtle/80 flex items-center justify-between gap-2">
                <a
                  href={personal.githubUrl || 'https://github.com/Reazul94'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono bg-canvas-subtle hover:bg-card border border-subtle hover:border-brand/40 text-content-secondary hover:text-content-primary transition-colors shadow-xs"
                  title="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono bg-brand/10 hover:bg-brand/20 border border-brand/20 hover:border-brand/40 text-brand font-medium transition-colors shadow-xs"
                  title="View Resume / CV"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t.sidebar?.viewCv || 'View CV'}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
