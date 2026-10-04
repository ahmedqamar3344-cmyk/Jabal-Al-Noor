import React from 'react';
import { MapPin, CheckCircle, Award, Compass, Truck, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';
import { JANLogo } from './JANLogo';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="about" className="py-20 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase Block */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-slate-700/80 shadow-2xl group">
              <img
                src="/src/assets/images/marine_quay_jetty_reclamation_1791094623194.jpg"
                alt="Jabal Al Noor marine coastal revetment and equipment fleet"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/90 backdrop-blur-md rounded border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs text-amber-400 font-semibold tracking-wider uppercase">
                    {isAr ? 'المركز التشغيلي الرئيسي' : 'Operational Command'}
                  </div>
                  <div className="text-sm font-bold text-white">
                    {isAr ? 'الفجيرة · ممر الكسارات والموانئ' : 'Fujairah · Quarry & Maritime Corridor'}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">
                    {isAr ? 'الخبرة الميدانية' : 'Industry Legacy'}
                  </div>
                  <div className="text-sm font-bold text-amber-400 font-mono">
                    16+ {isAr ? 'عاماً' : 'Years'}
                  </div>
                </div>
              </div>
            </div>

            {/* Hubs bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-slate-950 border border-slate-800 rounded">
                <div className="text-xs font-semibold text-slate-300">Fujairah</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Heavy Logistics & Quarry Base</div>
              </div>
              <div className="p-3 bg-slate-950 border border-slate-800 rounded">
                <div className="text-xs font-semibold text-slate-300">Dubai</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Ras Al Khor & Aweer Hub</div>
              </div>
              <div className="p-3 bg-slate-950 border border-slate-800 rounded">
                <div className="text-xs font-semibold text-slate-300">Sharjah & Ajman</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Civil Contracting Yard</div>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-1 bg-white rounded shadow-sm border border-slate-700/60 inline-flex items-center">
                  <JANLogo variant="badge" size="sm" />
                </div>
                <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                  {isAr ? 'رواد المقاولات البحرية وحماية السواحل' : 'Pioneering Marine Construction & Coastal Defense'}
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display text-balance">
                {isAr
                  ? 'خبرة بحرية عريقة في بناء كواسر الأمواج، الألسنة، واستصلاح الأراضي الشاطئية'
                  : 'Mastering Marine Construction, Breakwater Revetments & Shoreline Infrastructure'}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isAr
                ? 'تعتبر شركة جبل النور (JANTC) من أبرز الشركات المتخصصة في المقاولات والإنشاءات البحرية بدولة الإمارات العربية المتحدة منذ عام 2008. بترخيص رسمي لإنشاء الموانئ والإنشاءات البحرية (كود 4290101)، نتولى بناء كواسر الأمواج، تثبيت الشواطئ بصخور الدروع من 1 إلى 7 أطنان، إنشاء الألسنة البحرية، منزلقات القوارب، وحواجز الحماية الساحلية.'
                : 'Since 2008, Jabal Al Noor (JANTC) has stood as a specialized leader in Marine Construction and coastal protection throughout the United Arab Emirates. Fully licensed in Ports & Marine Contracting (Activity Code 4290101), we deliver offshore breakwaters, 1–7 ton heavy armor rock revetments, groins, submerged barriers, key walls, boat slipways, and extensive marine land reclamation.'}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isAr
                ? 'ندير مشاريعنا البحرية بكفاءة هندسية عالية من خلال أسطول يتجاوز 150 آلية ثقيلة متضمنة رافعات بحرية حتى 300 طن، وحفارات متخصصة بأذرع طويلة، وبالشراكة مع شركتنا الشقيقة فخر زمان للمقاولات (FZBC).'
                : 'Our marine operations are driven by over 150 wholly-owned heavy machinery assets—including 25T–300T mobile/crawler cranes, long-reach marine excavators, and quarry-to-port tipper fleets—delivering projects on schedule to strict maritime and FEA environmental standards.'}
            </p>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {isAr ? 'أسطول نقل ضخم ومباشر' : 'Autonomous Heavy Fleet'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {isAr ? 'لا نعتمد على وسطاء، نمتلك أسطولنا بالكامل لضمان الالتزام بمواعيد التوريد.' : 'Wholly-owned fleet ensures guaranteed delivery windows and lowest per-ton logistics costs.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {isAr ? 'مقاولات وبناء مرخص' : 'Full Contracting Licensure'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {isAr ? 'معتمدون لدى بلديات الفجيرة ودبي والشارقة وعجمان لتنفيذ المنشآت والأسوار والمستودعات.' : 'Accredited civil contractor for warehouses, commercial sheds, and multi-storey labor accommodations.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {isAr ? 'خبرة تضاريس الجبال والبحار' : 'Rugged Terrain Mastery'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {isAr ? 'متخصصون في قطع المنحدرات الجبلية الصخرية القاسية وأعمال حماية الشواطئ وكواسر الأمواج.' : 'Engineered solutions for challenging mountain passes, valley floodways, and coastal revetments.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {isAr ? 'معايير أمان وصحة مهنية' : 'Strict HSE Standards'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {isAr ? 'سائقون ومشغلون معتمدون، ومعدات خاضعة للفحص الدوري الشامل وفق معايير دولة الإمارات.' : 'Trained, certified operators and GPS telematics compliance for ports, oil zones, and megaprojects.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
