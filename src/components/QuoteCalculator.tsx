import React, { useState } from 'react';
import { Calculator, Send, MessageSquare, ArrowRight, CheckCircle2, Truck, RefreshCw } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';

interface QuoteCalculatorProps {
  lang: Language;
  preselectedService?: string;
  preselectedEquipment?: string;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  lang,
  preselectedService,
  preselectedEquipment,
}) => {
  const isAr = lang === 'ar';

  const [serviceType, setServiceType] = useState<string>(
    preselectedService || 'Marine Works & Breakwater Armor Placement'
  );
  const [materialType, setMaterialType] = useState<string>('Armour Rocks (1-3 Ton & 4-7 Ton)');
  const [route, setRoute] = useState<string>('Fujairah Quarry Corridor to Dubai Sites');
  const [quantityTons, setQuantityTons] = useState<number>(5000);
  const [hireDurationDays, setHireDurationDays] = useState<number>(30);
  const [contactName, setContactName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [contactCompany, setContactCompany] = useState<string>('');
  const [quoteSubmitted, setQuoteSubmitted] = useState<boolean>(false);
  const [refId, setRefId] = useState<string>('');

  // Interactive estimates calculations
  const payloadPerTipper = 45; // tons for heavy 45m3 tippers
  const totalTrips = Math.ceil(quantityTons / payloadPerTipper);
  const recommendedTrucks = Math.max(2, Math.min(50, Math.ceil(totalTrips / 12)));

  const handleGenerateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPhone || !contactName) {
      alert(isAr ? 'يرجى إدخال الاسم ورقم الهاتف للمتابعة' : 'Please provide your name and phone number');
      return;
    }
    const generatedRef = `JAN-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedRef);
    setQuoteSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const text = isAr
      ? `طلب تسعيرة رسمي من موقع جبل النور (المرجع: ${refId || 'موقع الإنترنت'}):
الاسم: ${contactName}
الشركة: ${contactCompany || 'مشروع خاص'}
الهاتف: ${contactPhone}
نوع الخدمة: ${serviceType}
المادة / المعدة: ${materialType}
المسار / الموقع: ${route}
الكمية التقريبية: ${quantityTons.toLocaleString()} طن
المدة التقديرية: ${hireDurationDays} يوم
يرجى تزويدي بعرض السعر والتوفر.`
      : `Official RFQ from Jabal Al Noor Website (Ref: ${refId || 'Web RFQ'}):
Name: ${contactName}
Company: ${contactCompany || 'Private Developer'}
Phone: ${contactPhone}
Service Scope: ${serviceType}
Material / Plant: ${materialType}
Route / Location: ${route}
Estimated Volume: ${quantityTons.toLocaleString()} Tons
Timeline: ${hireDurationDays} Days
Please provide availability and per-ton/hourly rate quotation.`;

    return `https://wa.me/${COMPANY_INFO.contacts.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="estimator" className="py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>{isAr ? 'حاسبة التكلفة والأسطول الفوري' : 'Fleet & Material RFQ Estimator'}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">{isAr ? 'تقدير لوجستي دقيق' : 'Instant Preliminary Sizing'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            {isAr
              ? 'احسب احتياجات مشروعك واطلب عرض سعر رسمي خلال دقائق'
              : 'Calculate Transport Fleet Requirements & Request Official Quote'}
          </h2>
          <p className="text-base text-slate-400">
            {isAr
              ? 'حدد نوع المادة، مسار النقل أو نوع المعدات للحصول على التقدير الأولي للأسطول المطلوب والتواصل المباشر مع إدارة الحركة.'
              : 'Configure your aggregate tonnage, excavation volume, or plant hire duration to instantly size your required fleet and receive a certified quotation.'}
          </p>
        </div>

        {/* Form Container */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Section */}
          <div className="lg:col-span-7 bg-slate-900/80 p-6 sm:p-8 rounded-xl border border-slate-800">
            <form onSubmit={handleGenerateQuote} className="space-y-6">
              {/* Service Division */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  {isAr ? '1. اختر نوع الخدمة أو القطاع' : '1. Select Operational Division'}
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Heavy Land Transport & Materials Supply">
                    {isAr ? 'النقل البري وتوريد الركام ومواد البناء' : 'Heavy Land Transport & Materials Supply'}
                  </option>
                  <option value="Marine Works & Breakwater Armor Placement">
                    {isAr ? 'الأعمال البحرية وكواسر الأمواج وصخور الدروع' : 'Marine Works & Breakwater Armor Placement'}
                  </option>
                  <option value="Road Works & Hill Cutting Earthmoving">
                    {isAr ? 'أعمال الطرق وقطع الجبال والحفر الترابي' : 'Road Works & Hill Cutting Earthmoving'}
                  </option>
                  <option value="Heavy Plant & Machinery Hiring">
                    {isAr ? 'تأجير الحفارات والمعدات والرافعات وأبراج الإنارة' : 'Heavy Plant & Machinery Hiring (25T-300T)'}
                  </option>
                  <option value="Building Construction & Industrial Warehouses">
                    {isAr ? 'مقاولات البناء والمستودعات الفولاذية (مع فخر زمان)' : 'Building Construction & Industrial Warehouses'}
                  </option>
                  <option value="Rubbish Removals & Demolition Services">
                    {isAr ? 'إزالة مخلفات البناء والهدم والنفايات الصناعية' : 'Rubbish Removals & Demolition Services'}
                  </option>
                </select>
              </div>

              {/* Material / Plant Specification */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {isAr ? '2. نوع المادة أو المعدة' : '2. Material / Cargo / Plant'}
                  </label>
                  <select
                    value={materialType}
                    onChange={(e) => setMaterialType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-md px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Crushed Aggregates (10-20mm)">
                      {isAr ? 'ركام مكسر (10-20 مم)' : 'Crushed Aggregates (10-20mm)'}
                    </option>
                    <option value="Road Base / Sub-base (Gabbro & Limestone)">
                      {isAr ? 'طبقة الأساس والساب بيس (جابرو وحجر جيري)' : 'Road Base / Sub-base (Gabbro & Limestone)'}
                    </option>
                    <option value="Armour Rocks (1-3 Ton & 4-7 Ton)">
                      {isAr ? 'صخور دروع بحرية (1-3 طن و 4-7 أطنان)' : 'Armour Rocks (1-3 Ton & 4-7 Ton)'}
                    </option>
                    <option value="Natural & Washed Beach Sand">
                      {isAr ? 'رمل شواطئ طبيعي ومغسول (أبيض وأسود)' : 'Natural & Washed Beach Sand'}
                    </option>
                    <option value="CAT/Komatsu 50-Ton Excavator with Rock Breaker">
                      {isAr ? 'حفار 50 طناً مع جاك هامر' : 'CAT/Komatsu 50T Excavator + Breaker'}
                    </option>
                    <option value="CAT D8/D9 Crawler Bulldozer">
                      {isAr ? 'بلدوزر كاتربيلر D8 / D9' : 'CAT D8/D9 Crawler Bulldozer'}
                    </option>
                    <option value="Denyo Soundproof 4000W Tower Lights">
                      {isAr ? 'أبراج إنارة دينيو كاتمة للصوت 4000 واط' : 'Denyo 4000W Tower Lights (Rentals)'}
                    </option>
                    <option value="C&D Demolition Debris & Waste Haulage">
                      {isAr ? 'مخلفات الهدم وأنقاض الإنشاءات' : 'C&D Demolition Debris & Waste Haulage'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {isAr ? '3. مسار النقل أو موقع العمل' : '3. Haulage Corridor / Site'}
                  </label>
                  <select
                    value={route}
                    onChange={(e) => setRoute(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-md px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Fujairah Quarry Corridor to Dubai Sites">
                      {isAr ? 'من كسارات الفجيرة إلى مشاريع دبي' : 'Fujairah Quarry to Dubai Sites'}
                    </option>
                    <option value="Fujairah Quarry to Sharjah & Ajman">
                      {isAr ? 'من كسارات الفجيرة إلى الشارقة وعجمان' : 'Fujairah Quarry to Sharjah & Ajman'}
                    </option>
                    <option value="Fujairah to Abu Dhabi & Habshan">
                      {isAr ? 'من الفجيرة إلى أبوظبي وحبشان' : 'Fujairah to Abu Dhabi & Habshan'}
                    </option>
                    <option value="Fujairah Port & FOIZ Maritime Zone">
                      {isAr ? 'ميناء الفجيرة والمنطقة البترولية FOIZ' : 'Fujairah Port & FOIZ Maritime Zone'}
                    </option>
                    <option value="Ras Al Khaimah to Northern Emirates">
                      {isAr ? 'من رأس الخيمة إلى الإمارات الشمالية' : 'Ras Al Khaimah to Northern Emirates'}
                    </option>
                    <option value="Dibba Fujairah Local Corridors">
                      {isAr ? 'مسارات دبا الفجيرة والمناطق الجبلية' : 'Dibba Fujairah Local Corridors'}
                    </option>
                  </select>
                </div>
              </div>

              {/* Quantity Slider */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-300 uppercase tracking-wider">
                    {isAr ? '4. الكمية الإجمالية التقديرية (بالطن / م³):' : '4. Estimated Total Volume (Tons / CUM):'}
                  </span>
                  <span className="text-amber-400 font-extrabold font-mono text-base">
                    {quantityTons.toLocaleString()} {isAr ? 'طن' : 'Tons'}
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="50000"
                  step="200"
                  value={quantityTons}
                  onChange={(e) => setQuantityTons(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>200 Tons</span>
                  <span>10,000 Tons</span>
                  <span>25,000 Tons</span>
                  <span>50,000+ Tons</span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="pt-3 border-t border-slate-800 space-y-4">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {isAr ? '5. بيانات التواصل لإرسال عرض السعر' : '5. Contact Details for Formal Quotation'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder={isAr ? 'الاسم الكريم *' : 'Your Full Name *'}
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder={isAr ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="text"
                    placeholder={isAr ? 'اسم الشركة / المقاول' : 'Company Name'}
                    value={contactCompany}
                    onChange={(e) => setContactCompany(e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded transition-all shadow-md active:scale-[0.99]"
              >
                <span>{isAr ? 'إصدار التقدير وحجز موعد التوريد' : 'Generate Sizing & Request Formal RFQ'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </form>
          </div>

          {/* Sizing & Immediate Action Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {isAr ? 'ملخص الاحتياج التقديري' : 'Calculated Fleet Logistics'}
                </div>
                <div className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isAr ? 'تخصيص فوري' : 'Live Calculation'}</span>
                </div>
              </div>

              {/* Numerical breakdown */}
              <div className="grid grid-cols-2 gap-3 font-mono">
                <div className="p-3 bg-slate-950 rounded border border-slate-800">
                  <div className="text-[11px] text-slate-400">{isAr ? 'إجمالي الحمولة:' : 'Total Volume:'}</div>
                  <div className="text-lg font-extrabold text-white mt-0.5">
                    {quantityTons.toLocaleString()} t
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded border border-slate-800">
                  <div className="text-[11px] text-slate-400">{isAr ? 'عدد الرحلات التقديرية:' : 'Estimated Trips:'}</div>
                  <div className="text-lg font-extrabold text-amber-400 mt-0.5">
                    {totalTrips.toLocaleString()}
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded border border-slate-800">
                  <div className="text-[11px] text-slate-400">{isAr ? 'الشاحنات الموصى بها:' : 'Recommended Tippers:'}</div>
                  <div className="text-lg font-extrabold text-white mt-0.5">
                    {recommendedTrucks} {isAr ? 'تريلة' : 'Units'}
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded border border-slate-800">
                  <div className="text-[11px] text-slate-400">{isAr ? 'زمن التوريد المقدر:' : 'Cycle Time:'}</div>
                  <div className="text-lg font-extrabold text-emerald-400 mt-0.5">
                    {Math.ceil(totalTrips / (recommendedTrucks * 3))} {isAr ? 'أيام' : 'Days'}
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp dispatch button */}
              <div className="pt-2">
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded transition-all shadow-md whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{isAr ? 'إرسال الحسابات للواتساب مباشرة' : 'Send Direct to WhatsApp Dispatch'}</span>
                </a>
              </div>

              {quoteSubmitted && (
                <div className="p-4 bg-emerald-950/60 border border-emerald-800 rounded text-xs text-emerald-300 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isAr ? 'تم استلام طلب التسعيرة بنجاح!' : 'Quotation Request Registered!'}</span>
                  </div>
                  <div className="font-mono text-white">
                    {isAr ? `رقم المرجع: ${refId}` : `Reference ID: ${refId}`}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {isAr
                      ? 'سيتواصل معك مهندس التسعير وحركة الأسطول خلال أقل من 30 دقيقة.'
                      : 'Our fleet manager and estimators will contact you within 30 minutes with official rates.'}
                  </p>
                </div>
              )}
            </div>

            {/* Direct Phone Assistance */}
            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
              <div>
                <div className="text-slate-400">{isAr ? 'للتسعير الفوري المباشر عبر الهاتف:' : 'Instant Telephone Dispatch:'}</div>
                <div className="text-white font-mono font-bold text-sm mt-0.5">
                  {COMPANY_INFO.contacts.landline} · {COMPANY_INFO.contacts.primaryPhone}
                </div>
              </div>
              <a
                href={`tel:${COMPANY_INFO.contacts.primaryPhoneClean}`}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-400 rounded font-semibold transition-colors"
              >
                {isAr ? 'اتصال' : 'Call'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
