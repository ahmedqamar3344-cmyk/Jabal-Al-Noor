import React, { useState } from 'react';
import { Building2, MapPin, CheckCircle, Trophy, FileText, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OFFICIAL_PROJECTS_RECORD, COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';

interface ProjectsSectionProps {
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [filter, setFilter] = useState<'all' | 'highways' | 'marine' | 'oil'>('all');

  const filteredProjects = OFFICIAL_PROJECTS_RECORD.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'highways') return p.scope.toLowerCase().includes('road') || p.scope.toLowerCase().includes('earthwork');
    if (filter === 'marine') return p.scope.toLowerCase().includes('revetment') || p.scope.toLowerCase().includes('breakwater') || p.scope.toLowerCase().includes('dam');
    if (filter === 'oil') return p.client.toLowerCase().includes('ecomar') || p.client.toLowerCase().includes('dewa') || p.client.toLowerCase().includes('adnoc');
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>{isAr ? 'سجل الإنجازات والمشاريع الكبرى' : 'Track Record & Mega Projects'}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">{isAr ? 'بيانات وصور ميدانية موثقة' : 'Verified UAE Project Portfolio'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
              {isAr
                ? 'مشاريع وطنية وبحرية كبرى أنجزت بأعلى معايير الدقة والالتزام'
                : 'Flagship Marine Construction, Breakwaters & Infrastructure'}
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              {isAr
                ? 'شواهد ميدانية حقيقية من مشاريع ديوان الرئاسة، بلدية الظفرة، محطة إيكومار، وسدود الدولة.'
                : 'Real on-site photo documentation from the UAE Presidential Court, Al Dhafra Municipality, FOIZ Ecomar terminal, and national flood mitigation dams.'}
            </p>
          </div>

          {/* Safety Celebration Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-950 p-4 rounded-lg border border-slate-800 shrink-0"
          >
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <CheckCircle className="w-4 h-4" />
              <span>{isAr ? 'إنجاز السلامة المهنية' : 'HSE Milestone'}</span>
            </div>
            <div className="text-lg font-extrabold text-white font-mono mt-1">
              150,000 Safe Hours
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              {isAr ? 'دون أي إصابة عمل هادرة (FOIZ Ecomar)' : 'Zero Lost Time Incidents at FOIZ Terminal'}
            </div>
          </motion.div>
        </div>

        {/* Filter Navigation */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
              filter === 'all'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {isAr ? 'كافة المشاريع الموثقة' : 'All Case Studies'}
          </button>
          <button
            onClick={() => setFilter('marine')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
              filter === 'marine'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {isAr ? 'الأعمال البحرية والسدود' : 'Marine Works & Dams'}
          </button>
          <button
            onClick={() => setFilter('highways')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
              filter === 'highways'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {isAr ? 'الطرق وقطع الجبال' : 'Roads & Hill Cutting'}
          </button>
          <button
            onClick={() => setFilter('oil')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
              filter === 'oil'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {isAr ? 'النفط والطاقة والتخزين' : 'Energy & Storage (FOIZ/DEWA/ADNOC)'}
          </button>
        </div>

        {/* Project Cards Grid with Real Photography & Smooth Animations */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-slate-950 rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all overflow-hidden flex flex-col justify-between shadow-xl group"
              >
                {/* Real Site Photography Header */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={project.image || '/src/assets/images/fujairah_breakwater_jetty_1791094339820.jpg'}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-amber-400 border border-slate-800 font-mono">
                      {project.highlight}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-3 flex items-center gap-1 text-slate-300 text-[11px] bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors font-display line-clamp-2">
                      {isAr ? project.nameAr : project.name}
                    </h3>

                    {/* Scope Prose */}
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {isAr ? project.scopeAr : project.scope}
                    </p>
                  </div>

                  {/* Client & Consultant Meta */}
                  <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-500">{isAr ? 'الجهة المالكة:' : 'Client:'}</span>
                      <span className="text-slate-300 font-medium text-right truncate">
                        {isAr ? project.clientAr : project.client}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-500">{isAr ? 'الاستشاري:' : 'Consultant:'}</span>
                      <span className="text-slate-400 text-right truncate">{project.consultant}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-slate-500">{isAr ? 'قيمة العقد / الفئة:' : 'Contract / Scope:'}</span>
                      <span className="text-emerald-400 font-mono font-bold">{project.value}</span>
                    </div>
                  </div>

                  {/* Verified completion badge */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>{isAr ? 'إنجاز معتمد وموثق' : 'Certified Completion'}</span>
                    </span>
                    <span className="text-slate-500 text-[11px] font-mono">JANTC Ref</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Commercial & Environmental Accreditation Box */}
        <div className="mt-12 bg-slate-950 p-6 sm:p-8 rounded-xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="space-y-1 md:col-span-1">
              <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                {isAr ? 'التراخيص والاعتمادات الرسمية' : 'Verified Licensure'}
              </div>
              <h4 className="text-lg font-bold text-white font-display">
                {isAr ? 'سجلات حكومة الفجيرة والإمارات' : 'Fujairah & UAE Compliance'}
              </h4>
              <p className="text-xs text-slate-400">
                {isAr ? 'تراخيص بلدية، بيئية، وغرفة التجارة سارية' : 'Active municipal, environmental, & COC licenses'}
              </p>
            </div>

            <div className="p-4 bg-slate-900 rounded border border-slate-800/80">
              <div className="text-xs text-slate-500">{isAr ? 'رخصة بلدية الفجيرة المهنية' : 'Fujairah Municipality License'}</div>
              <div className="text-base font-extrabold text-white font-mono mt-0.5">
                {COMPANY_INFO.licenses.fujairahMunicipality}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">{isAr ? 'تأسست 2016' : 'Est. Date: 2016'}</div>
            </div>

            <div className="p-4 bg-slate-900 rounded border border-slate-800/80">
              <div className="text-xs text-slate-500">{isAr ? 'شهادة القيمة المحلية المضافة' : 'In-Country Value (ICV)'}</div>
              <div className="text-base font-extrabold text-amber-400 font-mono mt-0.5">
                {COMPANY_INFO.icvScore}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">{isAr ? 'معتمد عبر Mazars' : 'Verified by Mazars (Cert #148329)'}</div>
            </div>

            <div className="p-4 bg-slate-900 rounded border border-slate-800/80">
              <div className="text-xs text-slate-500">{isAr ? 'التسجيل الضريبي لضريبة القيمة المضافة' : 'Federal Tax Authority TRN'}</div>
              <div className="text-sm font-extrabold text-white font-mono mt-0.5 truncate">
                {COMPANY_INFO.licenses.vatTrn}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">{isAr ? 'خاضع لضريبة 5% الإمارات' : 'UAE VAT Registered Entity'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
