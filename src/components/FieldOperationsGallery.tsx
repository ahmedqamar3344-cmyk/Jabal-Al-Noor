import React, { useState } from 'react';
import { ExternalLink, ThumbsUp, MapPin, Maximize2, X, MessageSquare, ShieldCheck, CheckCircle2, ChevronRight, Layers, Camera } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';

interface FieldOperationsGalleryProps {
  lang: Language;
}

interface GalleryItem {
  id: string;
  category: 'all' | 'marine' | 'dams' | 'fleet' | 'earthworks';
  title: string;
  titleAr: string;
  location: string;
  locationAr: string;
  tag: string;
  tagAr: string;
  badge: string;
  badgeAr: string;
  image: string;
  description: string;
  descriptionAr: string;
  specs: { label: string; value: string };
  specsAr: { label: string; value: string };
  fbReelUrl: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'marine-breakwater-armor',
    category: 'marine',
    title: 'Offshore Breakwater Construction & 1-7T Heavy Armor Rock Placement',
    titleAr: 'إنشاء كواسر الأمواج البحرية وتنزيل صخور الدروع الثقيلة أوزان 1-7 أطنان',
    location: 'Eastern Seaboard & Marinas, Fujairah, UAE',
    locationAr: 'الساحل الشرقي والمراسي البحرية، الفجيرة',
    tag: 'Marine Construction',
    tagAr: 'مقاولات وإنشاءات بحرية',
    badge: '1-7T Granite Armor',
    badgeAr: 'صخور دروع 1-7 طن',
    image: '/src/assets/images/marine_breakwater_heavy_armor_1791094611650.jpg',
    description: 'Precision offshore positioning of massive natural armor rock using long-reach marine excavators and specialized rock grapples, engineering resilient maritime defenses against heavy Gulf swells.',
    descriptionAr: 'تنزيل وتثبيت هندسي دقيق لصخور الدروع الجرانيتية البحرية العملاقة باستخدام حفارات الذراع الطويل والكلابات الهيدروليكية لحماية الموانئ والمراسي البحرية.',
    specs: { label: 'Installed Armor Rock', value: '1.2M+ Tons' },
    specsAr: { label: 'صخور دروع بحرية مركبة', value: '1.2M+ طن' },
    fbReelUrl: 'https://www.facebook.com/p/Jabal-Al-Noor-Transport-and-Contracting-LLC-100067645167664/',
  },
  {
    id: 'coastal-jetty-reclamation',
    category: 'marine',
    title: 'Coastal Revetments, Rock Jetties & Land Reclamation',
    titleAr: 'الألسنة البحرية، التبطين الصخري واستصلاح الأراضي الساحلية',
    location: 'Fujairah Seashore & Port Corridors, UAE',
    locationAr: 'شواطئ وممرات ميناء الفجيرة، الإمارات',
    tag: 'Coastal Engineering',
    tagAr: 'هندسة حماية السواحل',
    badge: 'Quay & Seawall',
    badgeAr: 'ألسنة بحرية وحواجز',
    image: '/src/assets/images/marine_quay_jetty_reclamation_1791094623194.jpg',
    description: 'Constructing robust coastal protection barriers, geotextile sub-layering, core stone bunds, and seawall armor revetments for commercial ports and marine infrastructure.',
    descriptionAr: 'تشييد الحواجز الصخرية لحماية الشواطئ والألسنة البحرية وفرش طبقات الجيوتكستايل واستصلاح الأراضي الساحلية للموانئ والمشاريع البحرية الكبرى.',
    specs: { label: 'Seawall Revetment', value: '18.5+ Kms' },
    specsAr: { label: 'أطوال حماية ساحلية', value: '18.5+ كم' },
    fbReelUrl: 'https://www.facebook.com/p/Jabal-Al-Noor-Transport-and-Contracting-LLC-100067645167664/',
  },
  {
    id: 'marine-slipway-groins',
    category: 'marine',
    title: 'Harbor Boat Slipway, Yacht Ramp & Groin Construction',
    titleAr: 'إنشاء منزلقات القوارب واليخوت والألسنة الشاطئية في المراسي',
    location: 'Delma Island & Fujairah Marinas, UAE',
    locationAr: 'جزيرة دلما ومراسي الفجيرة، الإمارات',
    tag: 'Marine Facilities',
    tagAr: 'منشآت بحرية متخصصة',
    badge: 'Reinforced Slipways',
    badgeAr: 'منزلقات بحرية معززة',
    image: '/src/assets/images/marine_slipway_harbor_engineering_1791094635236.jpg',
    description: 'Complete execution of reinforced boat slipways, marina access breakwaters, groins for beach stabilization, and underwater rock foundation profiling.',
    descriptionAr: 'تنفيذ كامل لمنزلقات القوارب واليخوت الخرسانية المسلحة، والألسنة الشاطئية لتثبيت الرمال وتشكيل القواعد الصخرية تحت الماء بأعلى مواصفات هندسية.',
    specs: { label: 'Tide-Resistant Works', value: 'Certified Class 1' },
    specsAr: { label: 'مواصفات مقاومة المد', value: 'فئة أولى معتمدة' },
    fbReelUrl: 'https://www.facebook.com/p/Jabal-Al-Noor-Transport-and-Contracting-LLC-100067645167664/',
  },
  {
    id: 'naqab-dam-rockfill',
    category: 'dams',
    title: 'Naqab 1 Rockfill Dam Construction & Flood Mitigation (AED 12M)',
    titleAr: 'مشروع بناء سد نقب 1 الصخري وتدابير درء الفيضانات (12 مليون درهم)',
    location: 'Wadi Naqab, Ras Al Khaimah, UAE',
    locationAr: 'وادي نقب، رأس الخيمة، الإمارات',
    tag: 'Dam & Flood Defense',
    tagAr: 'إنشاء السدود ودرء الفيضانات',
    badge: 'AED 12M Dam Contract',
    badgeAr: 'عقد سد 12 مليون درهم',
    image: '/src/assets/images/marine_dam_rock_engineering_1791094648490.jpg',
    description: 'Execution of flood water retention dams, terrace rock placements, spillways, and heavy rock barrier embankments to secure valleys and recharge groundwater aquifers.',
    descriptionAr: 'تنفيذ سدود حجز مياه الأمطار والسيول، تشييد المصاطب الصخرية والمفيضات المائية وجسم السد لحماية المناطق السكنية وتغذية المياه الجوفية.',
    specs: { label: 'Project Value', value: 'AED 12.0 Million' },
    specsAr: { label: 'قيمة المشروع', value: '12.0 مليون درهم' },
    fbReelUrl: 'https://www.facebook.com/p/Jabal-Al-Noor-Transport-and-Contracting-LLC-100067645167664/',
  },
  {
    id: 'delma-island-revetment',
    category: 'marine',
    title: 'Delma Island Airport Runway Coastal Armor Revetment (1.5 Km)',
    titleAr: 'مشروع التبطين الصخري لحماية مدرج مطار جزيرة دلما بطول 1.5 كم',
    location: 'Delma Island, Abu Dhabi, UAE',
    locationAr: 'جزيرة دلما، أبوظبي، الإمارات',
    tag: 'Strategic Defense',
    tagAr: 'حماية بنية تحتية استراتيجية',
    badge: '1.5 Km Coastal Defense',
    badgeAr: '1.5 كم حماية شاطئية',
    image: '/src/assets/images/delma_island_marine_revetment_1791094326760.jpg',
    description: '1.5 running kilometers of engineered coastal revetment safeguarding the island airport runway from marine erosion, high tide storm surges, and Gulf tidal currents.',
    descriptionAr: 'حماية صخرية شاطئية بطول 1.5 كيلومتر لحماية مدرج مطار جزيرة دلما من تآكل الأمواج وحركات المد والجزر العاتية بالخليج العربي.',
    specs: { label: 'Client / Consultant', value: 'Al Dhafra / ITALCONSULT' },
    specsAr: { label: 'العميل / الاستشاري', value: 'بلدية الظفرة / إيتال كونسلت' },
    fbReelUrl: 'https://www.facebook.com/p/Jabal-Al-Noor-Transport-and-Contracting-LLC-100067645167664/',
  },
  {
    id: 'ecomar-foiz-earthworks',
    category: 'earthworks',
    title: 'ECOMAR Oil Terminal Land Development & 150,000 Safe Man-Hours',
    titleAr: 'تطوير وتسوية أراضي خزانات إيكومار البترولية (150 ألف ساعة عمل آمنة)',
    location: 'Fujairah Oil Industry Zone (FOIZ), UAE',
    locationAr: 'منطقة الفجيرة للصناعات البترولية (FOIZ)',
    tag: 'Industrial Site Prep',
    tagAr: 'تسوية المنشآت البترولية',
    badge: 'Zero LTI Safety Award',
    badgeAr: '150 ألف ساعة دون إصابات',
    image: '/src/assets/images/ecomar_foiz_terminal_earthworks_1791094362729.jpg',
    description: 'Precision mountain rock blasting, bulk earthmoving, and site grading for mega oil storage tanks, completed with 150,000 safe man-hours without a single Lost Time Incident.',
    descriptionAr: 'أعمال الحفر والتفجير المحكوم وقطع الجبال للأعمال الترابية لتوسعة خزانات النفط، مع تحقيق إنجاز 150 ألف ساعة عمل خالية من أي إصابات.',
    specs: { label: 'Contract Value', value: 'AED 26.0 Million' },
    specsAr: { label: 'قيمة العقد', value: '26.0 مليون درهم' },
    fbReelUrl: 'https://www.facebook.com/p/Jabal-Al-Noor-Transport-and-Contracting-LLC-100067645167664/',
  },
  {
    id: 'heavy-tipper-convoy',
    category: 'fleet',
    title: '45m³ Heavy Tipper Fleet & Rock Logistics Expressway Convoy',
    titleAr: 'قافلة تريلات النقل الثقيل (45م³) لنقل الصخور والركام عبر الإمارات',
    location: 'Fujairah - Dubai - Abu Dhabi Corridors',
    locationAr: 'محاور الفجيرة - دبي - أبوظبي',
    tag: '150+ Fleet Logistics',
    tagAr: 'أسطول 150+ شاحنة ومعدة',
    badge: '45m³ & 50-80T Units',
    badgeAr: 'تريلات 45م³ وقلابات 80 طن',
    image: '/src/assets/images/fleet_heavy_transport_1790942764825.jpg',
    description: 'A fleet of 150+ Mercedes Actros tippers and heavy multi-axle trailers mobilizing aggregates, 0-40mm sub-base, and armor rocks from Fujairah quarries to major national sites 24/7.',
    descriptionAr: 'أسطول يتجاوز 150 شاحنة مرسيدس أكتروس ومقطورات متعددة المحاور لنقل صخور الدروع والركام المعتمد من محاجر الفجيرة إلى كافة مشاريع الدولة على مدار الساعة.',
    specs: { label: 'Materials Hauled', value: '3.2M+ Tons' },
    specsAr: { label: 'مواد تم نقلها', value: '3.2M+ طن' },
    fbReelUrl: 'https://www.facebook.com/p/Jabal-Al-Noor-Transport-and-Contracting-LLC-100067645167664/',
  },
  {
    id: 'mountain-rock-benching',
    category: 'earthworks',
    title: 'Mountain Road Benching & Rock Excavation (E-87 & DEWA Towers)',
    titleAr: 'قطع وتدريج السفوح الجبلية ومصاطب أبراج ديوا (طريق E-87 الاتحادي)',
    location: 'Dibba & Hatta Mountain Corridors, UAE',
    locationAr: 'ممرات دبا وحتا الجبلية، الإمارات',
    tag: 'Hill Cutting & Earthworks',
    tagAr: 'قطع الصخور وتدريج الجبال',
    badge: '3.5M CUM Mountain Cut',
    badgeAr: '3.5 مليون م³ حفر صخري',
    image: '/src/assets/images/hill_cutting_earthworks_1790942788533.jpg',
    description: 'Operating heavy excavators with hydraulic rock breakers to terrace steep mountain faces, cutting highway passages and leveling elevated foundations for DEWA transmission towers.',
    descriptionAr: 'تشغيل الحفارات الثقيلة المزودة بأقوى المطارق الهيدروليكية لتدريج السفوح الصخرية الشاهقة، وشق مسارات الطرق السريعة ومصاطب أبراج هيئة كهرباء ومياه دبي.',
    specs: { label: 'DEWA Towers Scope', value: 'AED 30.0 Million' },
    specsAr: { label: 'مشروع أبراج ديوا', value: '30.0 مليون درهم' },
    fbReelUrl: 'https://www.facebook.com/p/Jabal-Al-Noor-Transport-and-Contracting-LLC-100067645167664/',
  },
];

export const FieldOperationsGallery: React.FC<FieldOperationsGalleryProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeCategory, setActiveCategory] = useState<'all' | 'marine' | 'dams' | 'fleet' | 'earthworks'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="videos" className="py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <Camera className="w-4 h-4 text-amber-400" />
              <span>{isAr ? 'معرض العمليات الميدانية والمشاريع الحقيقية' : 'Real Field Operations & Marine Showcase'}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-blue-400 font-bold">Jabal Al Noor Official Records</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
              {isAr
                ? 'صور وعمليات ميدانية حقيقية من مواقع مشاريع جبل النور'
                : 'Authentic On-Site Photographic Records Across the UAE'}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {isAr
                ? 'شاهد مشاريعنا البحرية الحية: كواسر الأمواج، صخور الدروع من 1 إلى 7 أطنان، سد نقب 1، استصلاح الأراضي، قوافل الشاحنات وقطع الجبال.'
                : 'Direct photographic documentary from Jabal Al Noor live operations: coastal marine breakwaters, 1–7 ton rock armor placement, Naqab 1 dam, 45m³ tipper convoys, and mountain excavation.'}
            </p>
          </div>

          {/* Social Links & Official Facebook Button */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={COMPANY_INFO.contacts.facebookPageUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{isAr ? 'صفحة فيسبوك الرسمية' : 'Official Facebook Page'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://wa.me/971567499047"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold rounded shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>+971 56 7499047</span>
            </a>
          </div>
        </div>

        {/* Filter Pills with animated styling */}
        <div className="mt-8 flex flex-wrap items-center gap-2 pb-2">
          {[
            { id: 'all', label: isAr ? 'جميع العمليات الحقيقية' : 'All Operations (8)' },
            { id: 'marine', label: isAr ? 'الأعمال البحرية وكواسر الأمواج' : 'Marine & Breakwaters' },
            { id: 'dams', label: isAr ? 'السدود الحصوية وحجز السيول' : 'Rockfill Dams' },
            { id: 'fleet', label: isAr ? 'أسطول التريلات والنقل الثقيل' : 'Heavy Tipper Fleet' },
            { id: 'earthworks', label: isAr ? 'قطع الجبال والتسوية' : 'Mountain Earthworks' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-all duration-300 transform active:scale-95 ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20 translate-y-[-1px]'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid with rich hover animations */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-slate-950 rounded-xl border border-slate-800/80 hover:border-amber-400/80 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 shimmer-mask">
                <img
                  src={item.image}
                  alt={isAr ? item.titleAr : item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-[0.88] group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-amber-400 font-mono text-[10px] font-bold rounded shadow">
                    {isAr ? item.badgeAr : item.badge}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-slate-950/80 backdrop-blur-md flex items-center justify-center text-slate-300 group-hover:text-amber-400 group-hover:scale-110 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Bottom Tag */}
                <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 text-xs text-white font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="drop-shadow-md text-[11px]">{isAr ? item.tagAr : item.tag}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                    <span className="truncate">{isAr ? item.locationAr : item.location}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white font-display group-hover:text-amber-400 transition-colors line-clamp-2">
                    {isAr ? item.titleAr : item.title}
                  </h3>
                </div>

                {/* Technical Metric Highlight */}
                <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">
                    {isAr ? item.specsAr.label : item.specs.label}:
                  </span>
                  <span className="text-amber-400 font-extrabold font-mono text-[11px]">
                    {isAr ? item.specsAr.value : item.specs.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Bar */}
        <div className="mt-12 p-6 bg-slate-950 border border-slate-800 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0 animate-float shadow-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-display">
                {isAr
                  ? 'هل ترغب في معاينة الموقع أو الحصول على مواصفات تفصيلية لصخور الدروع؟'
                  : 'Need Site Inspection, Armor Rock Petrographic Tests, or Marine RFQ?'}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {isAr
                  ? 'فرقنا الهندسية جاهزة لمعاينة مشاريع كواسر الأمواج، السدود، وتجهيز خطط التوريد فوراً.'
                  : 'Our marine engineering team conducts site bathymetric surveys and mobilizes rock armor supply within 24 hours.'}
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/971567499047?text=Hello%20Jabal%20Al%20Noor,%20I%20would%20like%20to%20request%20information%20on%20Marine%20Construction%20and%20Rock%20Armor%20supply."
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded shadow-lg transition-all transform hover:scale-105 whitespace-nowrap inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>{isAr ? 'تواصل فوراً عبر واتساب' : 'Dispatch WhatsApp: +971 56 7499047'}</span>
          </a>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-amber-400/10 border border-amber-400/40 text-amber-400 text-xs font-mono font-bold rounded">
                  {isAr ? selectedItem.badgeAr : selectedItem.badge}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  {isAr ? selectedItem.tagAr : selectedItem.tag}
                </span>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
              {/* Large Image Frame */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner">
                <img
                  src={selectedItem.image}
                  alt={isAr ? selectedItem.titleAr : selectedItem.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Details & Metadata */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-lg sm:text-2xl font-bold text-white font-display">
                    {isAr ? selectedItem.titleAr : selectedItem.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>{isAr ? selectedItem.locationAr : selectedItem.location}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {isAr ? selectedItem.descriptionAr : selectedItem.description}
                </p>

                {/* Key Metric & Verification */}
                <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400">
                      {isAr ? selectedItem.specsAr.label : selectedItem.specs.label}:
                    </span>
                    <div className="text-lg font-bold text-amber-400 font-mono">
                      {isAr ? selectedItem.specsAr.value : selectedItem.specs.value}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/971567499047?text=${encodeURIComponent(
                        isAr
                          ? `مرحباً جبل النور، أود الاستفسار عن تفاصيل مشروع: ${selectedItem.titleAr}`
                          : `Hello Jabal Al Noor, I would like to inquire regarding project: ${selectedItem.title}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded transition-all shadow"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>{isAr ? 'طلب عرض سعر لهذا المشروع' : 'Inquire for Similar Project'}</span>
                    </a>

                    <a
                      href={selectedItem.fbReelUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded transition-all"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{isAr ? 'فيسبوك' : 'Facebook'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
