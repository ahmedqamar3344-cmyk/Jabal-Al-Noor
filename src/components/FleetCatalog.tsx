import React, { useState } from 'react';
import { Truck, Wrench, ShieldCheck, ArrowRight, Gauge, Layers, Anchor } from 'lucide-react';
import { FLEET_CATALOG } from '../data/companyData';
import { Language, FleetItem } from '../types';

interface FleetCatalogProps {
  lang: Language;
  onSelectFleetItem?: (name: string) => void;
}

export const FleetCatalog: React.FC<FleetCatalogProps> = ({ lang, onSelectFleetItem }) => {
  const isAr = lang === 'ar';
  const [filter, setFilter] = useState<'all' | 'tippers' | 'excavators' | 'earthmoving' | 'specialized'>('all');

  const filteredFleet = filter === 'all' ? FLEET_CATALOG : FLEET_CATALOG.filter((f) => f.category === filter);

  return (
    <section id="fleet" className="py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            {isAr ? 'أسطول الآليات والمعدات الثقيلة' : 'Heavy Machinery & Plant Hire Fleet'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            {isAr
              ? 'أكثر من 150 آلية وشاحنة جاهزة للتوزيع الفوري في الإمارات'
              : 'Over 150 Heavy Units: Excavators, Tippers, Cranes & Lowbeds'}
          </h2>
          <p className="text-base text-slate-400">
            {isAr
              ? 'معدات حديثة ومجهزة بأحدث الأنظمة الهندسية ومفحوصة دورياً عبر ورشتنا المتنقلة، يديرها سائقون ومشغلون حاصلون على شهادات الكفاءة والسلامة.'
              : 'Our owned fleet delivers maximum uptime backed by 24/7 mobile workshop teams, certified operators, and compliance with UAE municipal and port safety regulations.'}
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              filter === 'all'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            {isAr ? 'كافة المعدات والأسطول' : 'All Fleet (150+ Units)'}
          </button>
          <button
            onClick={() => setFilter('tippers')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              filter === 'tippers'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            {isAr ? 'شاحنات وتريلات قلاب (45م³ & 50-80T)' : 'Heavy Tippers & Dumpers'}
          </button>
          <button
            onClick={() => setFilter('excavators')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              filter === 'excavators'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            {isAr ? 'حفارات ومطارق تكسير (CAT/Komatsu 50T)' : 'Excavators & Breakers'}
          </button>
          <button
            onClick={() => setFilter('earthmoving')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              filter === 'earthmoving'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            {isAr ? 'بلدوزرات وشيولات (CAT D8/D9/D10)' : 'Bulldozers & Earthmoving'}
          </button>
          <button
            onClick={() => setFilter('specialized')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              filter === 'specialized'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            {isAr ? 'رافعات (حتى 300T) وأبراج إنارة ولوبد' : 'Cranes, Tower Lights & Lowbeds'}
          </button>
        </div>

        {/* Fleet Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFleet.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 rounded-lg overflow-hidden border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-90 hover:brightness-100 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-amber-400 border border-slate-800">
                    {isAr ? item.categoryLabelAr : item.categoryLabel}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="text-[11px] font-medium bg-emerald-950/90 text-emerald-400 border border-emerald-800/80 px-2 py-0.5 rounded">
                    {isAr ? item.availabilityAr : item.availability}
                  </span>
                </div>
              </div>

              {/* Specs & Description */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white font-display">
                    {isAr ? item.nameAr : item.name}
                  </h3>

                  {/* Spec lines */}
                  <div className="mt-3 space-y-1.5 text-xs text-slate-300 font-mono">
                    {item.specifications.capacity && (
                      <div className="flex items-center justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">{isAr ? 'السعة / الحمولة:' : 'Capacity / Load:'}</span>
                        <span className="text-amber-400 font-bold">{item.specifications.capacity}</span>
                      </div>
                    )}
                    {item.specifications.power && (
                      <div className="flex items-center justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">{isAr ? 'القوة الحصانية:' : 'Engine Power:'}</span>
                        <span>{item.specifications.power}</span>
                      </div>
                    )}
                    {item.specifications.weight && (
                      <div className="flex items-center justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">{isAr ? 'الوزن التشغيلي:' : 'Operating Weight:'}</span>
                        <span>{item.specifications.weight}</span>
                      </div>
                    )}
                  </div>

                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                    <strong className="text-slate-300">{isAr ? 'أفضل الاستخدامات: ' : 'Recommended Scope: '}</strong>
                    {isAr ? item.specifications.bestForAr : item.specifications.bestFor}
                  </p>
                </div>

                {/* Rental Action */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {isAr ? 'تأجير يومي / شهري / مشروعات' : 'Daily, Monthly & Project Lease'}
                  </span>
                  <a
                    href="#estimator"
                    onClick={() => onSelectFleetItem?.(isAr ? item.nameAr : item.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>{isAr ? 'حجز الآلية' : 'Hire Unit'}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Maintenance & Mobile Workshop Notice */}
        <div className="mt-12 p-6 bg-slate-900 border border-slate-800 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-400/10 border border-amber-500/20 text-amber-400 rounded-lg shrink-0">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                {isAr ? 'ورش صيانة متنقلة على مدار 24 ساعة في مواقع المشاريع' : '24/7 Mobile Service Workshops Across All UAE Sites'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                {isAr
                  ? 'لضمان استمرارية العمل ومنع أي توقف في المشاريع، نخصص شاحنات ورش ميدانية مزودة بقطع الغيار وفنيين مدربين لإصلاح وصيانة الآليات في موقع العمل فوراً.'
                  : 'To prevent project delays, every deployment is supported by dedicated mobile field service trucks with factory-trained technicians and immediate spare parts inventory.'}
              </p>
            </div>
          </div>

          <a
            href={`tel:${FLEET_CATALOG[0] ? '971567499047' : ''}`}
            className="shrink-0 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded text-xs font-semibold border border-slate-700 whitespace-nowrap"
          >
            {isAr ? 'الاتصال بمسؤول حركة المعدات' : 'Contact Fleet Dispatcher'}
          </a>
        </div>
      </div>
    </section>
  );
};
