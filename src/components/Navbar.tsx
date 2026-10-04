import React, { useState } from 'react';
import { Phone, Menu, X, Globe, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';
import { JANLogo } from './JANLogo';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenQuoteModal?: () => void;
  onOpenAIModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenQuoteModal, onOpenAIModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAr = lang === 'ar';

  const navLinks = [
    { label: isAr ? 'الخدمات' : 'Capabilities', href: '#services' },
    { label: isAr ? 'فيديوهات فيسبوك' : 'FB Field Videos', href: '#videos' },
    { label: isAr ? 'أسطول المعدات' : 'Fleet & Equipment', href: '#fleet' },
    { label: isAr ? 'المشاريع' : 'Projects', href: '#projects' },
    { label: isAr ? 'حاسبة التكلفة' : 'Cost Estimator', href: '#estimator' },
    { label: isAr ? 'تواصل معنا' : 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand Logo & Website Name: Jabal Al Noor */}
          <a
            href="#"
            className="flex items-center gap-3 text-left group transition-transform active:scale-[0.99]"
            title="Jabal Al Noor Transport & Contracting"
          >
            <JANLogo variant="horizontal" size="md" lightText={true} />
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition-colors whitespace-nowrap tracking-wide py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions + WhatsApp Number + AI Assistant + Language switch */}
          <div className="flex items-center gap-2.5">
            {/* AI Assistant Button */}
            <button
              onClick={onOpenAIModal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-sm whitespace-nowrap"
              title="Open Jabal Al Noor AI Assistant"
            >
              <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
              <span>{isAr ? 'المساعد الذكي AI' : 'Jabal Al Noor AI'}</span>
            </button>

            {/* Direct WhatsApp Button with Number */}
            <a
              href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp}?text=${encodeURIComponent(
                isAr
                  ? 'مرحباً جبل النور، أود الاستفسار عن خدمات النقل وتأجير المعدات'
                  : 'Hello Jabal Al Noor, I would like to inquire about heavy transport and contracting services.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-700/80 rounded-md hover:bg-emerald-900/60 transition-all whitespace-nowrap shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400" />
              <span className="font-mono">{COMPANY_INFO.contacts.primaryPhone}</span>
            </a>

            {/* Language Switch */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700/80 rounded-md hover:border-amber-500/40 hover:text-white transition-all whitespace-nowrap"
              title="Toggle English / Arabic"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{isAr ? 'English' : 'العربية'}</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-5 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-amber-400 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAIModal?.();
              }}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 rounded-md"
            >
              <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
              <span>{isAr ? 'فتح مساعد جبل النور الذكي AI' : 'Launch Jabal Al Noor AI Assistant'}</span>
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 rounded-md"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: {COMPANY_INFO.contacts.primaryPhone}</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.contacts.primaryPhoneClean}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 rounded-md"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="font-mono tabular-nums">{COMPANY_INFO.contacts.primaryPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
