import React from 'react';
import { Home, Briefcase, FolderGit2, Layers, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function MobileBottomNav({ activeSection }) {
  const { t } = useLanguage();

  const navItems = [
    { id: 'hero', label: t.nav.about || 'Home', icon: Home, href: '#hero' },
    { id: 'experience', label: t.nav.experience || 'Experience', icon: Briefcase, href: '#experience' },
    { id: 'projects', label: t.nav.projects || 'Projects', icon: FolderGit2, href: '#projects' },
    { id: 'domain', label: t.nav.domain || 'Domain', icon: Layers, href: '#domain' },
    { id: 'contact', label: t.nav.contact || 'Contact', icon: Mail, href: '#contact' },
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
