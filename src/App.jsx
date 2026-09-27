import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import ScrollProgress from './components/common/ScrollProgress';
import Navbar from './components/common/Navbar';
import MobileBottomNav from './components/common/MobileBottomNav';
import Hero from './components/hero/Hero';
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

  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top visibility
      setShowBackToTop(window.scrollY > 400);

      // Simple active section detection
      const sections = ['hero', 'about', 'domain', 'experience', 'projects', 'ecosystem', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-canvas text-content-primary flex flex-col font-sans selection:bg-brand/20 selection:text-brand transition-colors duration-200">
      {/* Reading Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Compressed Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow w-full max-w-full pb-16 md:pb-0">
        <Hero />
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

      {/* Mobile Bottom Navigation Dock */}
      <MobileBottomNav activeSection={activeSection} />

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
