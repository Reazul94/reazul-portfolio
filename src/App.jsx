import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import ScrollProgress from './components/common/ScrollProgress';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/common/Navbar';
import MobileBottomNav from './components/common/MobileBottomNav';
import Hero from './components/hero/Hero';
import QuickTechOverview from './components/overview/QuickTechOverview';
import AboutSection from './components/about/AboutSection';
import DomainSection from './components/domain/DomainSection';
import ExperienceSection from './components/experience/ExperienceSection';
import ProjectsSection from './components/projects/ProjectsSection';
import TechEcosystem from './components/ecosystem/TechEcosystem';
import SkillsSection from './components/skills/SkillsSection';
import EducationSection from './components/education/EducationSection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/common/Footer';

function PortfolioContent() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    try {
      const saved = localStorage.getItem('reazul_sidebar_collapsed');
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return typeof window !== 'undefined' && window.innerWidth < 1024;
    } catch {
      return false;
    }
  });

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('reazul_sidebar_collapsed', JSON.stringify(next));
      } catch (e) {
        console.warn('Unable to persist sidebar state to localStorage', e);
      }
      return next;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const sections = [
      'hero',
      'about',
      'domain',
      'experience',
      'projects',
      'ecosystem',
      'skills',
      'education',
      'research',
      'contact'
    ];

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -55% 0px',
          threshold: 0
        }
      );

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      const fallbackScroll = () => {
        const scrollPosition = window.scrollY + 220;
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      };

      window.addEventListener('scroll', fallbackScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', fallbackScroll);
      };
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-canvas text-content-primary font-sans selection:bg-brand/20 selection:text-brand transition-colors duration-200">
      {/* Reading Progress Indicator */}
      <ScrollProgress />

      {/* Desktop & Mobile IDE-Style Coding Pattern Sidebar */}
      <Sidebar
        activeSection={activeSection}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={toggleSidebarCollapse}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Mobile Top Navigation (Visible on screens < 768px) */}
      <Navbar
        activeSection={activeSection}
        isMobileOpen={isMobileSidebarOpen}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
      />

      {/* Main Content Wrapper - dynamically accounts for Sidebar width */}
      <div
        className={`w-full max-w-full flex flex-col transition-[padding] duration-300 ease-in-out ${
          isSidebarCollapsed ? 'md:pl-[72px]' : 'md:pl-[260px]'
        }`}
      >
        {/* Main Content Sections */}
        <main className="flex-grow w-full max-w-full pb-16 md:pb-0">
          <Hero />
          <QuickTechOverview />
          <AboutSection />
          <DomainSection />
          <ExperienceSection />
          <ProjectsSection />
          <TechEcosystem />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>

      {/* Mobile Bottom Navigation Dock (< 768px) */}
      <MobileBottomNav
        activeSection={activeSection}
        onOpenSidebar={() => setIsMobileSidebarOpen(true)}
      />

      {/* Floating Back To Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="hidden md:flex fixed bottom-6 right-6 z-40 p-2.5 rounded-xl bg-card/90 hover:bg-card border border-subtle hover:border-brand/40 text-content-secondary hover:text-brand shadow-lg backdrop-blur-md transition-all no-print focus-visible:ring-2 focus-visible:ring-brand"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
