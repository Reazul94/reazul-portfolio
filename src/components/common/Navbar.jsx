import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Sun,
  Moon,
  Laptop,
  Github,
  FileDown,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  FileCode2,
  Terminal,
  Home,
  User,
  Layers,
  Briefcase,
  FolderGit2,
  Cpu,
  Wrench,
  GraduationCap,
  BrainCircuit,
  Mail
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export default function Navbar({ activeSection = 'hero' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projectsTreeOpen, setProjectsTreeOpen] = useState(true);
  const { theme, setTheme } = useTheme();
  const { lang, toggleLanguage, t } = useLanguage();
  const { personal } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close mobile menu on resize to tablet/desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: '#hero', label: t.sidebar?.home || 'Home', id: 'hero', index: '01', icon: Home },
    { href: '#about', label: t.sidebar?.about || 'About', id: 'about', index: '02', icon: User },
    { href: '#domain', label: t.sidebar?.domain || 'Domain', id: 'domain', index: '03', icon: Layers },
    { href: '#experience', label: t.sidebar?.experience || 'Experience', id: 'experience', index: '04', icon: Briefcase },
    { href: '#projects', label: t.sidebar?.projects || 'Projects', id: 'projects', index: '05', icon: FolderGit2 },
    { href: '#ecosystem', label: t.sidebar?.ecosystem || 'Ecosystem', id: 'ecosystem', index: '06', icon: Cpu },
    { href: '#skills', label: t.sidebar?.skills || 'Skills', id: 'skills', index: '07', icon: Wrench },
    { href: '#education', label: t.sidebar?.education || 'Education', id: 'education', index: '08', icon: GraduationCap },
    { href: '#research', label: t.sidebar?.research || 'Research', id: 'research', index: '09', icon: BrainCircuit },
    { href: '#contact', label: t.sidebar?.contact || 'Contact', id: 'contact', index: '10', icon: Mail },
  ];

  const projectList = [
    { id: 'kgdcl-erp', title: 'KGDCL ERP System' },
    { id: 'kgdcl-billing-portal', title: 'KGDCL Billing Portal' },
    { id: 'sgcl-erp', title: 'SGCL ERP System' },
    { id: 'bgdcl-erp', title: 'BGDCL ERP System' },
    { id: 'bizzness-roots', title: 'Bizzness Roots 2.0' }
  ];

  const handleLinkClick = (e, targetId) => {
    setIsOpen(false);
    if (targetId) {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
  };

  const handleProjectClick = (e, projectId) => {
    e.preventDefault();
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('select-project', { detail: { id: projectId } }));
  };

  return (
    <header
      className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-200 no-print ${
        isScrolled
          ? 'bg-canvas/95 backdrop-blur-md border-b border-subtle shadow-sm'
          : 'bg-canvas/90 backdrop-blur-sm border-b border-subtle'
      }`}
    >
      <div className="w-full px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 h-14">
          
          {/* Brand Logo & Profile Image */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-brand rounded-lg p-0.5 min-w-0"
            aria-label={`${personal.name} - Home`}
          >
            <div className="relative shrink-0">
              <img
                src={personal.image}
                alt={personal.name}
                className="w-8 h-8 rounded-lg object-cover object-top border border-subtle group-hover:border-brand/40 transition-colors shadow-xs"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-card" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-content-primary text-xs sm:text-sm tracking-tight truncate group-hover:text-brand transition-colors">
                {personal.name}
              </span>
              <span className="text-[10px] font-mono text-content-muted leading-none truncate">
                {personal.role}
              </span>
            </div>
          </a>

          {/* Quick Lang Switch & Hamburger Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={toggleLanguage}
              className="h-9 px-2.5 rounded-lg bg-card border border-subtle text-xs font-mono font-medium text-brand hover:border-brand/40 transition-colors flex items-center justify-center shadow-xs"
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'বাংলা' : 'EN'}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9 rounded-lg bg-card border border-subtle text-content-primary hover:bg-canvas-subtle transition-colors focus-visible:ring-2 focus-visible:ring-brand flex items-center justify-center shadow-xs"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-brand" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (IDE Workspace Style) */}
      {isOpen && (
        <div className="fixed inset-x-0 top-14 bottom-0 bg-canvas/98 backdrop-blur-xl border-t border-subtle overflow-y-auto px-4 py-5 flex flex-col justify-between shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
          <div className="space-y-4">
            
            {/* Environment Badge */}
            <div className="flex items-center justify-between px-2 pb-2 border-b border-subtle text-xs font-mono text-content-muted">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-brand" />
                <span className="uppercase tracking-wider font-semibold">WORKSPACE // MOBILE</span>
              </div>
              <span className="text-[10px] text-brand font-semibold">10 SECTIONS</span>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`flex items-center justify-between min-h-[44px] px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-brand/10 text-brand font-bold border border-brand/20'
                        : 'text-content-secondary hover:text-content-primary hover:bg-canvas-subtle'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs ${isActive ? 'text-brand font-bold' : 'text-content-muted'}`}>
                        {link.index}
                      </span>
                      <Icon className={`w-4 h-4 ${isActive ? 'text-brand' : 'text-content-muted'}`} />
                      <span>{link.label}</span>
                    </div>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand" />}
                  </a>
                );
              })}
            </nav>

            {/* Collapsible Project Explorer */}
            <div className="pt-3 border-t border-subtle">
              <button
                type="button"
                onClick={() => setProjectsTreeOpen(!projectsTreeOpen)}
                className="w-full min-h-[44px] flex items-center justify-between px-3 py-2 rounded-xl bg-card border border-subtle text-xs font-mono uppercase tracking-wider text-content-primary"
                aria-expanded={projectsTreeOpen}
              >
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-brand" />
                  <span className="font-bold">{t.sidebar?.explorer || 'PROJECTS'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-canvas-subtle text-content-muted">5</span>
                  {projectsTreeOpen ? <ChevronDown className="w-4 h-4 text-brand" /> : <ChevronRight className="w-4 h-4" />}
                </div>
              </button>

              {projectsTreeOpen && (
                <div className="mt-2 pl-3 space-y-1 font-mono text-xs">
                  {projectList.map((p, pIdx) => {
                    const isLast = pIdx === projectList.length - 1;
                    return (
                      <a
                        key={p.id}
                        href={`#${p.id}`}
                        onClick={(e) => handleProjectClick(e, p.id)}
                        className="flex items-center gap-2 min-h-[44px] px-3 py-2 rounded-lg text-content-secondary hover:text-brand hover:bg-canvas-subtle transition-colors"
                      >
                        <span className="text-content-muted/60">{isLast ? '└──' : '├──'}</span>
                        <FileCode2 className="w-3.5 h-3.5 text-brand shrink-0" />
                        <span className="truncate">{p.title}</span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

          {/* Bottom Controls in Drawer */}
          <div className="pt-4 border-t border-subtle space-y-3 pb-8">
            <div className="flex items-center justify-between gap-2">
              {/* Theme Selector */}
              <div className="flex items-center bg-card border border-subtle rounded-xl p-1">
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`min-h-[40px] px-3 text-xs rounded-lg transition-colors flex items-center gap-1.5 ${
                    theme === 'light' ? 'bg-brand text-white font-bold' : 'text-content-secondary'
                  }`}
                  aria-label="Light"
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>{t.nav?.themeLight || 'Light'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`min-h-[40px] px-3 text-xs rounded-lg transition-colors flex items-center gap-1.5 ${
                    theme === 'dark' ? 'bg-brand text-white font-bold' : 'text-content-secondary'
                  }`}
                  aria-label="Dark"
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>{t.nav?.themeDark || 'Dark'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('system')}
                  className={`min-h-[40px] px-3 text-xs rounded-lg transition-colors flex items-center gap-1.5 ${
                    theme === 'system' ? 'bg-brand text-white font-bold' : 'text-content-secondary'
                  }`}
                  aria-label="System"
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span>{t.nav?.themeSystem || 'System'}</span>
                </button>
              </div>

              {/* GitHub Link */}
              <a
                href={personal.githubUrl || 'https://github.com/Reazul94'}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[40px] px-3.5 rounded-xl bg-card border border-subtle flex items-center gap-1.5 text-xs font-mono text-content-primary hover:text-brand hover:border-brand/40 transition-colors"
                title="GitHub: Reazul94"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* CV Actions */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 min-h-[44px] px-3 rounded-xl text-xs font-mono font-medium bg-card border border-subtle text-content-primary hover:bg-canvas-subtle transition-colors text-center"
              >
                <ExternalLink className="w-3.5 h-3.5 text-brand" />
                <span>{t.nav?.viewCv || 'View CV'}</span>
              </a>
              <a
                href={personal.resumeUrl}
                download="S_B_M_Reazul_Karim_CV.pdf"
                className="flex items-center justify-center gap-1.5 min-h-[44px] px-3 rounded-xl text-xs font-mono font-medium bg-brand text-white hover:bg-brand-secondary transition-colors text-center shadow-xs"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{t.nav?.downloadCv || 'Download CV'}</span>
              </a>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
