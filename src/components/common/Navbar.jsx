import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Laptop, Globe, FileDown, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export default function Navbar({ activeSection = 'hero' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { lang, setLang, toggleLanguage, t } = useLanguage();
  const { personal } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about, id: 'about' },
    { href: '#domain', label: t.nav.domain, id: 'domain' },
    { href: '#experience', label: t.nav.experience, id: 'experience' },
    { href: '#projects', label: t.nav.projects, id: 'projects' },
    { href: '#ecosystem', label: t.nav.ecosystem, id: 'ecosystem' },
    { href: '#skills', label: t.nav.skills, id: 'skills' },
    { href: '#education', label: t.nav.education, id: 'education' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 no-print ${
        isScrolled
          ? 'py-2.5 bg-canvas/90 backdrop-blur-md border-b border-subtle shadow-sm'
          : 'py-4 bg-canvas/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Current Role */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-brand rounded-lg p-1"
            aria-label={`${personal.name} - Home`}
          >
            <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center font-mono font-bold text-sm text-brand group-hover:border-brand/40 transition-colors">
              {personal.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-content-primary text-sm sm:text-base tracking-tight group-hover:text-brand transition-colors">
                {personal.name}
              </span>
              <span className="text-[11px] font-mono text-content-muted leading-none">
                {personal.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Desktop Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium transition-all duration-150 relative ${
                    isActive
                      ? 'text-brand font-semibold'
                      : 'text-content-secondary hover:text-content-primary hover:bg-canvas-subtle'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Controls: Language Switch, Theme Selector & CV Action */}
          <div className="hidden sm:flex items-center space-x-2">
            
            {/* Language Switch: EN | বাংলা */}
            <div
              className="flex items-center bg-card border border-subtle rounded-lg p-0.5 text-xs font-medium"
              id="lang-selector"
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  lang === 'en'
                    ? 'bg-brand text-white font-semibold shadow-xs'
                    : 'text-content-secondary hover:text-content-primary'
                }`}
                aria-label="Switch to English"
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
              <span className="text-content-muted/40 text-[10px]">|</span>
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-2 py-1 rounded font-bengali transition-colors ${
                  lang === 'bn'
                    ? 'bg-brand text-white font-semibold shadow-xs'
                    : 'text-content-secondary hover:text-content-primary'
                }`}
                aria-label="বাংলা ভাষায় পরিবর্তন করুন"
                aria-pressed={lang === 'bn'}
              >
                বাংলা
              </button>
            </div>

            {/* Theme Selector (Light, Dark, System) */}
            <div className="relative" id="theme-selector">
              <div className="flex items-center bg-card border border-subtle rounded-lg p-0.5">
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`p-1.5 rounded transition-colors ${
                    theme === 'light'
                      ? 'bg-brand text-white shadow-xs'
                      : 'text-content-secondary hover:text-content-primary'
                  }`}
                  title={t.nav.themeLight}
                  aria-label="Select Light Theme"
                  aria-pressed={theme === 'light'}
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
                  title={t.nav.themeDark}
                  aria-label="Select Dark Theme"
                  aria-pressed={theme === 'dark'}
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
                  title={t.nav.themeSystem}
                  aria-label="Select System Theme"
                  aria-pressed={theme === 'system'}
                >
                  <Laptop className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* CV Action Button */}
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-brand/10 hover:bg-brand/20 text-brand border border-brand/20 hover:border-brand/40 transition-colors"
              title="View CV in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{t.nav.viewCv}</span>
            </a>
          </div>

          {/* Mobile Hamburger & Quick Lang Controls */}
          <div className="flex sm:hidden items-center space-x-2">
            {/* Quick Lang Switch for Mobile */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2 py-1 rounded bg-card border border-subtle text-xs font-medium text-brand"
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'বাংলা' : 'EN'}
            </button>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-card border border-subtle text-content-primary hover:bg-canvas-subtle transition-colors focus-visible:ring-2 focus-visible:ring-brand"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-b border-subtle px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150 shadow-xl">
          {/* Mobile Nav Links */}
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation Drawer">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg text-sm font-medium text-content-secondary hover:text-content-primary hover:bg-canvas-subtle transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Theme & Language Options */}
          <div className="pt-3 border-t border-subtle flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-content-muted">{t.nav.theme}:</span>
              <div className="flex items-center bg-canvas-subtle border border-subtle rounded-lg p-0.5">
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`px-2.5 py-1 text-xs rounded transition-colors flex items-center gap-1 ${
                    theme === 'light' ? 'bg-brand text-white' : 'text-content-secondary'
                  }`}
                >
                  <Sun className="w-3 h-3" />
                  <span>{t.nav.themeLight}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`px-2.5 py-1 text-xs rounded transition-colors flex items-center gap-1 ${
                    theme === 'dark' ? 'bg-brand text-white' : 'text-content-secondary'
                  }`}
                >
                  <Moon className="w-3 h-3" />
                  <span>{t.nav.themeDark}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('system')}
                  className={`px-2.5 py-1 text-xs rounded transition-colors flex items-center gap-1 ${
                    theme === 'system' ? 'bg-brand text-white' : 'text-content-secondary'
                  }`}
                >
                  <Laptop className="w-3 h-3" />
                  <span>{t.nav.themeSystem}</span>
                </button>
              </div>
            </div>

            {/* Mobile CV Actions */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium bg-canvas-subtle border border-subtle text-content-primary hover:bg-card transition-colors text-center"
              >
                <ExternalLink className="w-3.5 h-3.5 text-brand" />
                <span>{t.nav.viewCv}</span>
              </a>
              <a
                href={personal.resumeUrl}
                download="S_B_M_Reazul_Karim_CV.pdf"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium bg-brand text-white hover:bg-brand-secondary transition-colors text-center"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{t.nav.downloadCv}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
