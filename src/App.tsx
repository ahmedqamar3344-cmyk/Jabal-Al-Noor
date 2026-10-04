import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ManagingDirectorMessage } from './components/ManagingDirectorMessage';
import { ServicesSection } from './components/ServicesSection';
import { FieldOperationsGallery } from './components/FieldOperationsGallery';
import { FleetCatalog } from './components/FleetCatalog';
import { ProjectsSection } from './components/ProjectsSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { Language } from './types';
import { COMPANY_INFO } from './data/companyData';
import { MessageSquare, Phone, Bot } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [preselectedEquipment, setPreselectedEquipment] = useState<string>('');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleSelectServiceForQuote = (title: string) => {
    setPreselectedService(title);
    const elem = document.getElementById('estimator');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectFleetItem = (name: string) => {
    setPreselectedEquipment(name);
    const elem = document.getElementById('estimator');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Top Navbar adhering to Top Bar Contract */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenQuoteModal={() => {
          const elem = document.getElementById('estimator');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenAIModal={() => setIsAIAssistantOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Official Emblem and Direct WhatsApp Button */}
        <Hero
          lang={lang}
          onOpenAIModal={() => setIsAIAssistantOpen(true)}
        />

        {/* About Company & Regional Strategic Presence */}
        <AboutSection lang={lang} />

        {/* Managing Director Statement & Corporate Values */}
        <ManagingDirectorMessage lang={lang} />

        {/* Comprehensive Divisions & Services */}
        <ServicesSection
          lang={lang}
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* Authentic Field Operations & Photographic Showcase */}
        <FieldOperationsGallery lang={lang} />

        {/* 150+ Heavy Machinery & Equipment Catalog */}
        <FleetCatalog
          lang={lang}
          onSelectFleetItem={handleSelectFleetItem}
        />

        {/* Verified UAE Case Studies & Track Record */}
        <ProjectsSection lang={lang} />

        {/* Instant RFQ & Fleet Sizing Estimator */}
        <QuoteCalculator
          lang={lang}
          preselectedService={preselectedService}
          preselectedEquipment={preselectedEquipment}
        />

        {/* Operations Hub, Physical Offices & Direct Contact */}
        <ContactSection lang={lang} />
      </main>

      {/* Corporate Footer with Accreditations and Marine Licenses */}
      <Footer lang={lang} />

      {/* Jabal Al Noor AI Assistant Slide-over */}
      <AIAssistant
        isOpen={isAIAssistantOpen}
        onClose={() => setIsAIAssistantOpen(false)}
        lang={lang}
      />

      {/* Floating Quick Dispatch Bar with WhatsApp & AI */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        {/* AI Quick Button */}
        <button
          onClick={() => setIsAIAssistantOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-full shadow-2xl transition-all transform hover:scale-105"
          title="Open AI Engineering Consultant"
        >
          <Bot className="w-4 h-4" />
          <span className="hidden sm:inline">
            {lang === 'ar' ? 'استشر AI' : 'Ask AI'}
          </span>
        </button>

        {/* WhatsApp Button with Number */}
        <a
          href="https://wa.me/971567499047"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded-full shadow-2xl transition-all transform hover:scale-105"
          title="WhatsApp: +971 56 7499047"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline font-mono">
            +971 56 7499047
          </span>
        </a>

        {/* Direct Telephone Call */}
        <a
          href="tel:092341307"
          className="flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-full shadow-xl border border-slate-700 transition-all"
          title="Call Dispatch: 09 2341307"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline font-mono">09 2341307</span>
        </a>
      </div>
    </div>
  );
}
