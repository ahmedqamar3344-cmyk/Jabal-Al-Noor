import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Waves, Mountain, Truck, Building, Trash2, Crosshair } from 'lucide-react';
import { SERVICES_LIST } from '../data/companyData';
import { Language, ServiceItem } from '../types';

interface ServicesSectionProps {
  lang: Language;
  onSelectServiceForQuote?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectServiceForQuote }) => {
  const isAr = lang === 'ar';
  const [activeTab, setActiveTab] = useState<string>(SERVICES_LIST[0].id);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'marine-works':
        return <Waves className="w-5 h-5 text-amber-400" />;
      case 'road-earthworks':
        return <Mountain className="w-5 h-5 text-amber-400" />;
      case 'heavy-transport':
        return <Truck className="w-5 h-5 text-amber-400" />;
      case 'building-contracting':
        return <Building className="w-5 h-5 text-amber-400" />;
      case 'rubbish-demolition':
        return <Trash2 className="w-5 h-5 text-amber-400" />;
      case 'survey-equipment':
        return <Crosshair className="w-5 h-5 text-amber-400" />;
      default:
        return <Truck className="w-5 h-5 text-amber-400" />;
    }
  };

  const currentService = SERVICES_LIST.find((s) => s.id === activeTab) || SERVICES_LIST[0];

  return (
    <section id="services" className="py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            {isAr ? 'مجالات العمل والخدمات الهندسية' : 'Core Capabilities & Divisions'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            {isAr
              ? 'حلول هندسية متكاملة من المحاجر إلى البنى التحتية الكبرى'
              : 'End-to-End Capabilities: Heavy Transport, Marine Works & Civil Execution'}
          </h2>
          <p className="text-base text-slate-400">
            {isAr
              ? 'مجموعة شاملة من الخدمات المعتمدة تدعمها أكثر من 150 آلية ثقيلة وفريق هندسي متمرس يعمل وفق أعلى معايير الجودة والسلامة.'
              : 'Full-spectrum services executed with specialized equipment, ISO-certified quality controls, and proven project execution across the UAE.'}
          </p>
        </div>

        {/* Clean Segmented Tab Navigation for Services */}
        <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800/80">
          {SERVICES_LIST.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent'
                }`}
              >
                <span className="font-mono text-xs opacity-75">{service.number}</span>
                <span>{isAr ? service.titleAr : service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase - Asymmetric Layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 p-6 sm:p-8 lg:p-10 rounded-xl border border-slate-800">
          {/* Visual Carrier */}
          <div className="lg:col-span-6 relative rounded-lg overflow-hidden border border-slate-700/80 shadow-2xl group">
            <img
              src={currentService.image}
              alt={currentService.title}
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            
            {/* Metric Adjacent to Claim */}
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/90 backdrop-blur-md rounded border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">
                  {isAr ? currentService.metrics.labelAr : currentService.metrics.label}
                </div>
                <div className="text-xl font-extrabold text-amber-400 font-mono tabular-nums">
                  {currentService.metrics.value}
                </div>
              </div>
              <div className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>{isAr ? 'معتمد رسمياً' : 'Verified Capability'}</span>
              </div>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
                {getServiceIcon(currentService.id)}
                <span>{isAr ? `القسم ${currentService.number}` : `Division ${currentService.number}`}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-400">{isAr ? 'شركة جبل النور JANTC' : 'JANTC Operational Unit'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                {isAr ? currentService.titleAr : currentService.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-amber-300/90 italic">
                {isAr ? currentService.taglineAr : currentService.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isAr ? currentService.descriptionAr : currentService.description}
            </p>

            {/* Capabilities Checklist */}
            <div className="space-y-2.5 pt-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {isAr ? 'أبرز المهام والتجهيزات الفنية' : 'Key Technical Capabilities & Scope'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(isAr ? currentService.capabilitiesAr : currentService.capabilities).map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#estimator"
                onClick={() => onSelectServiceForQuote?.(isAr ? currentService.titleAr : currentService.title)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-all whitespace-nowrap shadow-sm"
              >
                <span>{isAr ? 'طلب عرض سعر لهذه الخدمة' : 'Request Quotation for Division'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-all whitespace-nowrap border border-slate-700"
              >
                <span>{isAr ? 'مشاهدة المشاريع المماثلة' : 'View Relevant Case Studies'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6 Quick Glance Service Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_LIST.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-5 rounded-lg border transition-all cursor-pointer ${
                activeTab === item.id
                  ? 'bg-slate-900 border-amber-500/80 shadow-lg'
                  : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-2">
                <span>{item.number}</span>
                <span className="text-amber-400 font-semibold">{item.metrics.value}</span>
              </div>
              <h4 className="text-base font-bold text-white mb-1.5 font-display">
                {isAr ? item.titleAr : item.title}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2">
                {isAr ? item.taglineAr : item.tagline}
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-amber-400 font-medium">
                <span>{isAr ? 'عرض التفاصيل الهندسية' : 'View Full Specifications'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
