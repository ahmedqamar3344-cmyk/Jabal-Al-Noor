import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';
import { ShieldCheck, Phone, Mail, MapPin, ExternalLink, ThumbsUp } from 'lucide-react';
import { JANLogo } from './JANLogo';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <JANLogo variant="horizontal" size="md" lightText={true} />
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              {isAr
                ? 'شركة رائدة في النقل البري الثقيل، قطع الجبال، حماية الشواطئ وكواسر الأمواج، وبناء السدود والمستودعات في دولة الإمارات العربية المتحدة منذ 2008.'
                : 'A pioneer in UAE heavy land transportation, mountain benching, coastal revetments, flood mitigation dams, and civil infrastructure execution.'}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.contacts.facebookPageUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-400 rounded text-xs transition-colors"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{isAr ? 'فيسبوك الرسمي' : 'Official Facebook'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.contacts.primaryPhoneClean}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono">09 2341307</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {isAr ? 'الخدمات الرئيسية' : 'Key Divisions'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{isAr ? 'الأعمال البحرية والكواسر' : 'Marine Works & Jetties'}</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{isAr ? 'أعمال الطرق وقطع الجبال' : 'Road Works & Hill Cutting'}</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{isAr ? 'النقل البري وتوريد الركام' : 'Heavy Transport & Fleet'}</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{isAr ? 'مقاولات البناء والمستودعات' : 'Building Contracting'}</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{isAr ? 'إزالة النفايات والهدم' : 'Demolition & Debris'}</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{isAr ? 'المسح وتأجير أبراج الإنارة' : 'Survey & Tower Lights'}</a></li>
            </ul>
          </div>

          {/* Media & Estimator Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {isAr ? 'المركز الميداني' : 'Field Center'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#videos" className="hover:text-amber-400 transition-colors">{isAr ? 'فيديوهات فيسبوك الميدانية' : 'Facebook Operations Videos'}</a></li>
              <li><a href="#fleet" className="hover:text-amber-400 transition-colors">{isAr ? 'كتالوج الآليات (150+)' : 'Heavy Plant Catalog (150+)'}</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">{isAr ? 'سجل المشاريع المعتمدة' : 'Completed UAE Projects'}</a></li>
              <li><a href="#estimator" className="hover:text-amber-400 transition-colors">{isAr ? 'حاسبة الأسطول والكميات' : 'Instant Cost & Sizing RFQ'}</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">{isAr ? 'طلب مناقصة / تواصل' : 'Tender Desk & Dispatch'}</a></li>
            </ul>
          </div>

          {/* Legal Registrations & Licensure */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {isAr ? 'البيانات والتراخيص الحكومية' : 'Accreditation & Regulatory'}
            </h4>
            <div className="p-3.5 bg-slate-900/80 rounded border border-slate-800 space-y-1.5 font-mono text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-500">Fujairah License:</span>
                <span className="text-white">{COMPANY_INFO.licenses.fujairahMunicipality}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Chamber of Commerce:</span>
                <span className="text-white">#{COMPANY_INFO.licenses.chamberOfCommerce}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">VAT TRN:</span>
                <span className="text-amber-400">{COMPANY_INFO.licenses.vatTrn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">ICV Score:</span>
                <span className="text-emerald-400">26.33% (Mazars Verified)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">ISO Certs:</span>
                <span className="text-slate-300">9001 · 14001 · 45001</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{COMPANY_INFO.contacts.hqAddress}</span>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500">
              © {new Date().getFullYear()} {isAr ? COMPANY_INFO.nameAr : COMPANY_INFO.nameEn}.
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-500">
              {isAr ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}.
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
            <span>{isAr ? 'مقاولات بحرية ونقل ثقيل' : 'Marine Construction & Heavy Contracting'}</span>
            <span>·</span>
            <span>{isAr ? 'الفجيرة · دبي · كافة إمارات الدولة' : 'Fujairah · Dubai · UAE'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
