import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export default function Navbar({
  onToggleMobileSidebar,
  isMobileOpen = false
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const { personal } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`md:hidden fixed top-0 left-0 right-0 z-30 transition-all duration-200 no-print ${
        isScrolled
          ? 'bg-canvas/95 backdrop-blur-md border-b border-subtle shadow-sm'
          : 'bg-canvas/90 backdrop-blur-sm border-b border-subtle'
      }`}
    >
      <div className="w-full px-3.5 sm:px-6">
        <div className="flex items-center justify-between gap-2 h-14">
          
          {/* Left: Sidebar Toggle Button & Brand Identity */}
          <div className="flex items-center gap-2.5 min-w-0">
            <button
              type="button"
              onClick={onToggleMobileSidebar}
              className="h-9 min-w-[38px] px-2.5 rounded-lg bg-card hover:bg-card-hover border border-subtle hover:border-brand/40 text-content-primary hover:text-brand transition-colors focus-visible:ring-2 focus-visible:ring-brand flex items-center justify-center gap-1.5 shadow-xs"
              aria-label={isMobileOpen ? 'Close sidebar navigation' : 'Open sidebar navigation'}
              aria-expanded={isMobileOpen}
            >
              <Menu className="w-4 h-4 text-brand shrink-0" />
              <span className="text-[10px] font-mono font-semibold tracking-wider text-content-secondary hidden min-[360px]:inline">
                NAV
              </span>
            </button>

            {/* Profile Avatar & Name */}
            <a
              href="#hero"
              className="flex items-center gap-2 group min-w-0"
              aria-label={`${personal.name} - Home`}
            >
              <div className="relative shrink-0">
                <img
                  src={personal.image}
                  alt={personal.name}
                  className="w-7 h-7 rounded-lg object-cover object-top border border-subtle shadow-xs"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-card" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-content-primary text-xs sm:text-sm tracking-tight truncate group-hover:text-brand transition-colors">
                  {personal.name}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-content-muted leading-none truncate">
                  {personal.role}
                </span>
              </div>
            </a>
          </div>

          {/* Right: Quick Language Switcher */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={toggleLanguage}
              className="h-8 px-2.5 rounded-lg bg-card border border-subtle text-xs font-mono font-medium text-brand hover:border-brand/40 transition-colors flex items-center justify-center shadow-xs"
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'বাংলা' : 'EN'}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
