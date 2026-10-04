import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Heavy Transport',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert(isAr ? 'يرجى كتابة الاسم ورقم الهاتف' : 'Please provide name and phone number');
      return;
    }
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>{isAr ? 'قنوات التواصل وإدارة الحركة' : 'Fleet Dispatch & Operations Hub'}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">24/7 Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            {isAr
              ? 'تواصل مع إدارة الحركة ومكاتبنا في الفجيرة ودبي'
              : 'Direct Line to Dispatchers, Estimators & Maritime Port Offices'}
          </h2>
          <p className="text-base text-slate-400">
            {isAr
              ? 'مكتبنا الرئيسي بالمنطقة الحرة بالفجيرة وعملياتنا في كافة إمارات الدولة على أهبة الاستعداد لتلبية احتياجات مشاريعكم.'
              : 'Our Fujairah Free Zone Headquarters and operations branches across Dubai, Sharjah, and Abu Dhabi operate round-the-clock for continuous logistics support.'}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Branches */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick action buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://wa.me/971567499047"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp: +971 56 7499047</span>
              </a>

              <a
                href="https://wa.me/971552568055"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 bg-emerald-600/90 hover:bg-emerald-500 text-white font-extrabold text-xs rounded transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp: +971 55 2568055</span>
              </a>
            </div>

            <div className="p-3 bg-slate-950 rounded border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'هاتف المقر الرئيسي (الفجيرة):' : 'Fujairah HQ Landline:'}</span>
                <span className="font-mono font-bold text-white">09 2341307</span>
              </div>
              <a
                href="tel:092341307"
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold rounded text-[11px]"
              >
                {isAr ? 'اتصال' : 'Call'}
              </a>
            </div>

            {/* Registered Locations List */}
            <div className="space-y-3">
              {COMPANY_INFO.contacts.locations.map((loc, idx) => (
                <div key={idx} className="p-4 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">
                      {isAr ? loc.cityAr : loc.city}
                    </span>
                    <span className="text-[11px] text-amber-400 font-mono">
                      {loc.phone}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 flex items-start gap-1.5 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                    <span>{isAr ? loc.addressAr : loc.address}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Email & P.O. Box */}
            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono text-white">info@jantc.ae</span>
                <span className="text-slate-500">·</span>
                <span className="font-mono text-slate-400">jabal.noor2020@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isAr ? 'العمليات الميدانية والشحن: 24 ساعة / 7 أيام' : 'Site Dispatch & Logistics: 24/7 Round the Clock'}</span>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-xl border border-slate-800 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-1 font-display">
              {isAr ? 'أرسل استفسارك أو تفاصيل مناقصتك' : 'Direct Inquiry & Tender Submission'}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {isAr
                ? 'فريق التسعير ودراسة المشاريع جاهز لتزويدك بعروض الأسعار الفنية والمالية.'
                : 'Our tender engineering and procurement desk will respond with technical and commercial proposals.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    placeholder={isAr ? 'المهندس / المدير المسؤول' : 'Project Manager / Engineer'}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {isAr ? 'رقم الهاتف / الموبايل *' : 'Direct Phone / Mobile *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    placeholder="+971 5X XXX XXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    placeholder="name@company.ae"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {isAr ? 'المجال المطلوب' : 'Service Required'}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Heavy Transport">Heavy Land Transport & Aggregates</option>
                    <option value="Marine Works">Marine Works & Breakwaters</option>
                    <option value="Hill Cutting">Hill Cutting & Earthmoving</option>
                    <option value="Plant Hire">Equipment Hiring & Tower Lights</option>
                    <option value="Building">Building Contracting & Warehouses</option>
                    <option value="Demolition">Demolition & Waste Removal</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {isAr ? 'تفاصيل المشروع، الكميات، أو الموقع *' : 'Project Details, Quantities & Location *'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  placeholder={
                    isAr
                      ? 'حدد موقع المشروع، نوع الركام أو الصخور المطلوبة، مدة العقد والكميات المتوقعة...'
                      : 'Please specify the project location, required tonnage or machinery type, and target commencement date...'
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>{isAr ? 'إرسال الاستفسار لإدارة العقود' : 'Submit Project Inquiry'}</span>
              </button>

              {isSent && (
                <div className="p-4 bg-emerald-950/80 border border-emerald-800 rounded text-xs text-emerald-300 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <strong>{isAr ? 'شكراً لتواصلكم!' : 'Message Transmitted Successfully!'}</strong>
                    <p className="mt-0.5 text-slate-300">
                      {isAr
                        ? 'تم تسجيل طلبكم بنجاح وسيتواصل معكم فريقنا الهندسي والتجاري خلال وقت وجيز.'
                        : 'Your inquiry has been routed to our Fujairah and Dubai commercial departments for review.'}
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
