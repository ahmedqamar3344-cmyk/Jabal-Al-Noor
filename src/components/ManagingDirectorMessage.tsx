import React from 'react';
import { Quote, ShieldCheck, Target, HeartHandshake, Award } from 'lucide-react';
import { COMPANY_INFO, CERTIFICATIONS_LIST } from '../data/companyData';
import { Language } from '../types';

interface ManagingDirectorMessageProps {
  lang: Language;
}

export const ManagingDirectorMessage: React.FC<ManagingDirectorMessageProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Executive Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <Quote className="w-4 h-4 text-amber-400" />
              <span>{isAr ? 'كلمة الإدارة العليا' : 'Executive Leadership'}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{COMPANY_INFO.managingDirector}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display text-balance">
              {isAr
                ? 'ملتزمون ببناء شراكات راسخة ومشاريع تصمد أمام اختبار الزمن'
                : 'A Steadfast Commitment to Engineering Excellence, Safety & Lasting Partnerships'}
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                {isAr
                  ? 'منذ انطلاقتنا وتوسع عملياتنا في الفجيرة ودولة الإمارات العربية المتحدة، أثبتت شركة جبل النور للنقليات والمقاولات (JANTC) تفوقها الميداني في تنفيذ أصعب المشاريع اللوجستية، وحماية السواحل البحرية، وقطع السلاسل الجبلية الوعرة.'
                  : 'Since our founding and expansion into Fujairah and the UAE, Jabal Al Noor Transport and Contracting LLC (JANTC) has consistently demonstrated progressive practices in transportation, pre-construction planning, scheduling, and civil execution.'}
              </p>
              <p>
                {isAr
                  ? 'نحن لا نقدم مجرد شاحنات ومعدات، بل نقدم حلولاً هندسية متكاملة تبدأ من دراسة الهندسة القيمية، وإدارة السلامة الصارمة، وصولاً إلى التسليم الناجح ضمن الميزانية والجدول الزمني المحدد، بالتعاون مع شركائنا وشركتنا الشقيقة فخر زمان للمقاولات.'
                  : 'Our dedicated team combines practical hands-on mastery with cutting-edge heavy machinery to deliver on schedule, meet strict budget realities, and safeguard our workforce with our 100% HSE commitment.'}
              </p>
            </div>

            {/* Signature & Title */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-lg font-bold text-white font-display">
                  {COMPANY_INFO.managingDirector}
                </div>
                <div className="text-xs text-amber-400 font-medium">
                  {isAr ? COMPANY_INFO.managingDirectorTitleAr : COMPANY_INFO.managingDirectorTitleEn} · {COMPANY_INFO.brandCode}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400 font-mono">
                  {isAr ? 'الفجيرة · دولة الإمارات' : 'Fujairah · United Arab Emirates'}
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Pillars & Certifications */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 space-y-4">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {isAr ? 'المبادئ المؤسسية الأربعة' : 'Four Core Operating Principles'}
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {isAr ? 'الرسالة والرؤية الهندسية' : 'Corporate Mission'}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {isAr ? 'تقديم حلول نقل ومقاولات لا تضاهى تساهم في تطور وازدهار مجتمعات الإمارات.' : 'Deliver unparalleled transport and contracting solutions that advance UAE infrastructure.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {isAr ? 'السلامة المهنية أولاً (HSE)' : 'Occupational Safety'}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {isAr ? 'إجراءات استباقية وتدريب متواصل محققين 150,000 ساعة عمل دون أي حوادث.' : 'OHSAS 18001 & ISO 45001 compliant with zero lost-time incidents.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {isAr ? 'الجودة غير قابلة للمساومة' : 'Uncompromising Quality'}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {isAr ? 'تطبيق منظومة الأيزو 9001:2015 والفحص الميداني المستمر للمواد والردميات.' : 'ISO 9001:2015 certified quality management with real-time site inspection.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {isAr ? 'الهندسة القيمية والقيمة المحلية' : 'Value Engineering & ICV'}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {isAr ? 'نسبة قيمة محلية معتمدة 26.33% مع دراسات لتقليل التكاليف وزيادة كفاءة المشروع.' : '26.33% certified ICV score optimizing lifecycle costs and local content.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Certifications Badges */}
            <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span className="font-semibold text-white">ISO Certifications:</span>
              <span className="font-mono text-amber-400">ISO 9001</span>
              <span>·</span>
              <span className="font-mono text-amber-400">ISO 14001</span>
              <span>·</span>
              <span className="font-mono text-amber-400">ISO 45001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
