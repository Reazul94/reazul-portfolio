import React from 'react';
import { Home, Briefcase, FolderGit2, Terminal, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function MobileBottomNav({ activeSection, onOpenSidebar }) {
  const { t } = useLanguage();

  const navItems = [
    { id: 'hero', label: t.sidebar?.home || 'Home', icon: Home, href: '#hero' },
    { id: 'projects', label: t.sidebar?.projects || 'Projects', icon: FolderGit2, href: '#projects' },
    {
      id: 'sidebar-toggle',
      label: t.sidebar?.workspace || 'Workspace',
      icon: Terminal,
      isAction: true
    },
    { id: 'experience', label: t.sidebar?.experience || 'Experience', icon: Briefcase, href: '#experience' },
    { id: 'contact', label: t.sidebar?.contact || 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <nav
      id="mobile-bottom-nav"
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-lg border-t border-subtle px-3 py-1.5 transition-colors no-print shadow-lg"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          if (item.isAction) {
            return (
              <button
                key={item.id}
                type="button"
                onClick={onOpenSidebar}
                className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 px-1.5 rounded-lg text-[10px] font-medium text-brand hover:text-brand-secondary transition-colors group"
                aria-label="Open Workspace Sidebar"
              >
                <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 group-hover:border-brand/40 flex items-center justify-center transition-colors mb-0.5">
                  <Icon className="w-3.5 h-3.5 text-brand stroke-[2.5px]" />
                </div>
                <span className="truncate max-w-[64px] font-mono font-bold text-[9px] text-brand">
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 px-1.5 rounded-lg text-[10px] font-medium transition-colors ${
                isActive
                  ? 'text-brand font-semibold'
                  : 'text-content-secondary hover:text-content-primary'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
              <span className="truncate max-w-[64px]">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
