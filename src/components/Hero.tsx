import React from 'react';
import { ArrowRight, Phone, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';
import { JANLogo } from './JANLogo';

interface HeroProps {
  lang: Language;
  onOpenAIModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenAIModal }) => {
  const isAr = lang === 'ar';

  return (
    <section className="relative min-h-[88vh] flex items-center bg-slate-950 overflow-hidden border-b border-slate-800">
      {/* Background Photography with Scrim - Leading with Marine Construction */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/marine_breakwater_heavy_armor_1791094611650.jpg"
          alt="Jabal Al Noor marine construction and coastal breakwater armor rock placement in UAE"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.12] transition-transform duration-1000 ease-out hover:scale-105"
        />
        {/* Measured dark gradient overlay for optimal WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/45" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/50 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Official Emblem & Marine License Trust Banner */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="p-1 bg-white/95 rounded-lg shadow-md border border-slate-700/60 inline-flex items-center">
              <JANLogo variant="badge" size="sm" />
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{isAr ? 'مرخص رسمياً: مقاولات إنشاء الموانئ والإنشاءات البحرية (4290101)' : 'Licensed Ports & Marine Construction Specialist (Code 4290101)'}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">{isAr ? 'الفجيرة · دبي · أبوظبي' : 'Fujairah · Dubai · Abu Dhabi'}</span>
            </div>
          </div>

          {/* Marquee Headline - Marine Construction Core Specialization */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-display text-balance">
            {isAr ? (
              <>
                المتخصصون في المقاولات والإنشاءات البحرية، كواسر الأمواج وحماية السواحل
              </>
            ) : (
              <>
                Specialist in Marine Construction, Breakwaters & Coastal Defense
              </>
            )}
          </h1>

          {/* Subtitle Value Proposition */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            {isAr
              ? 'منذ عام 2008، تقود شركة جبل النور (JANTC) تنفيذ أضخم المشاريع الإنشائية البحرية في دولة الإمارات: بناء كواسر الأمواج البحرية، توريد وتنزيل صخور الدروع من 1 إلى 7 أطنان، الألسنة البحرية، المنزلقات، واستصلاح الأراضي الشاطئية، مدعومة بأسطول يتجاوز 150 آلية ثقيلة.'
              : 'Since 2008, Jabal Al Noor (JANTC) has engineered robust, enduring maritime infrastructure across the UAE: offshore breakwaters, 1–7 ton heavy armor rock revetments, groins, submerged barriers, boat slipways, key walls, jetties, beach nourishment, and coastal land reclamation.'}
          </p>

          {/* CTAs with Prominent WhatsApp Number and AI */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp}?text=${encodeURIComponent(
                isAr
                  ? 'مرحباً شركة جبل النور، أود الاستفسار عن مقاولات الأعمال البحرية، كواسر الأمواج، وتوريد صخور الدروع'
                  : 'Hello Jabal Al Noor, I would like to inquire about Marine Construction, breakwaters, and armor rock installation.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-extrabold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-all shadow-lg shadow-emerald-500/10 active:scale-[0.98] whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp: +971 56 7499047</span>
            </a>

            <button
              onClick={onOpenAIModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-amber-500/40 hover:border-amber-400 rounded-md transition-all whitespace-nowrap shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>{isAr ? 'استشر مساعد الذكاء الاصطناعي AI' : 'Consult AI Assistant'}</span>
            </button>

            <a
              href="#estimator"
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              <span>{isAr ? 'حاسبة الصخور البحرية والأسطول' : 'Marine Armor & Fleet RFQ'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
          </div>

          {/* Editorial Capability Bullet Points */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{isAr ? 'كواسر أمواج وصخور دروع 1-7 طن' : 'Breakwaters & 1-7T Armor Rock'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{isAr ? 'منزلقات واستصلاح أراضٍ بحرية' : 'Slipways, Jetties & Reclamation'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{isAr ? 'أسطول 150+ آلية ورافعات حتى 300 طن' : '150+ Fleet & 300T Marine Cranes'}</span>
            </div>
          </div>
        </div>

        {/* Floating Operational Numbers Grid - Marine Metrics */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-lg">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              18.5+ Kms
            </div>
            <div className="text-xs text-slate-400">
              {isAr ? 'أطوال سواحل وكواسر أمواج منجزة' : 'Coastline & Breakwaters Built'}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
              1.2M+ Tons
            </div>
            <div className="text-xs text-slate-400">
              {isAr ? 'صخور دروع بحرية ثقيلة مركبة' : 'Marine Armor Rock (1-7T) Installed'}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              {COMPANY_INFO.fleetCount}
            </div>
            <div className="text-xs text-slate-400">
              {isAr ? 'شاحنات وآليات ومعدات بحرية' : 'Heavy Trucks, Plant & Marine Units'}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-400">
              {isAr ? 'سجل السلامة البحرية والبيئية FEA' : 'Marine HSE & Environmental Compliance'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
