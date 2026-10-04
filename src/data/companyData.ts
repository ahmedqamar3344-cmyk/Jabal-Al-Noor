import { ServiceItem, VideoShowcaseItem, FleetItem, ProjectItem } from '../types';

export const COMPANY_INFO = {
  nameEn: 'Jabal Al Noor Transport & Contracting L.L.C',
  nameAr: 'شركة جبل النور للنقليات والمقاولات ذ.م.م',
  brandCode: 'JANTC',
  shortName: 'Jabal Al Noor',
  shortNameAr: 'جبل النور',
  taglineEn: 'Specialist in Marine Construction, Breakwaters, Coastal Revetments, Jetties & Heavy Contracting Across the UAE',
  taglineAr: 'المتخصصون الأوائل في المقاولات والإنشاءات البحرية، كواسر الأمواج، حماية السواحل والأعمال الإنشائية الكبرى في دولة الإمارات',
  specialty: 'Marine Construction & Coastal Protection',
  specialtyAr: 'المقاولات والإنشاءات البحرية وحماية السواحل',
  managingDirector: 'Qamar Latif',
  managingDirectorTitleEn: 'Managing Director',
  managingDirectorTitleAr: 'المدير العام',
  experienceYears: 16,
  foundedYear: 2008,
  establishedUae: 2015,
  fleetCount: '150+',
  tonsHauled: '3.2M+',
  safeManHours: '150,000 Safe Man-Hours without LTI',
  safeManHoursAr: '150,000 ساعة عمل آمنة دون أي إصابات عمل هادرة',
  projectsCompleted: '380+',
  icvScore: '26.33% In-Country Value (ICV)',
  licenses: {
    fujairahMunicipality: '1014809',
    chamberOfCommerce: '19463',
    commercialRegister: '10390771',
    vatTrn: '100255479600003',
    feaLicense: '1014809 / 29954',
    isoQuality: 'ISO 9001:2015 (AFU-1070)',
    isoEnv: 'ISO 14001:2015 (AFU-5051)',
    isoSafety: 'ISO 45001:2018 (AFU-3051)',
  },
  contacts: {
    landline: '09 2341307',
    primaryPhone: '+971 56 7499047',
    primaryPhoneClean: '971567499047',
    secondaryPhones: ['+971 55 2568055', '+971 50 9384808', '+971 56 7599047'],
    emails: ['info@jantc.ae', 'jabal.noor2020@gmail.com', 'q.kashmiri@gmail.com'],
    website: 'www.jantc.ae',
    whatsapp: '+971567499047',
    poBox: 'P.O. Box: 2786',
    hqAddress: 'Office #202B, UASC Building, Khorfakkan Road, Free Zone Area, Fujairah, U.A.E',
    hqAddressAr: 'مكتب 202B، مبنى UASC، طريق خورفكان، المنطقة الحرة، الفجيرة، الإمارات العربية المتحدة',
    locations: [
      {
        city: 'Fujairah (Headquarters & Free Zone)',
        cityAr: 'الفجيرة (المقر الرئيسي والمنطقة الحرة)',
        address: '202B UASC Building, Khorfakkan Road, Fujairah Free Zone Area, UAE',
        addressAr: 'مكتب 202B، مبنى UASC، طريق خورفكان، المنطقة الحرة، الفجيرة',
        phone: '09 2341307',
        type: 'Corporate Headquarters & Maritime Dispatch'
      },
      {
        city: 'Fujairah Al Hail Operations',
        cityAr: 'عمليات الحيل - الفجيرة',
        address: 'Yousuf Ahmed Muhammad, Al Hail Industrial, Fujairah, UAE',
        addressAr: 'منطقة الحيل الصناعية، الفجيرة، الإمارات العربية المتحدة',
        phone: '+971 55 2568055',
        type: 'Heavy Equipment Maintenance & Tipper Yard'
      },
      {
        city: 'Dubai Logistics Hub',
        cityAr: 'مركز دبي اللوجستي',
        address: 'Ras Al Khor & Aweer Corridor, Dubai, UAE',
        addressAr: 'رأس الخور وممر العوير، دبي، الإمارات العربية المتحدة',
        phone: '+971 56 7499047',
        type: 'Logistics Coordination & Materials Dispatch'
      },
      {
        city: 'Sister Company Partnership',
        cityAr: 'الشركة الشقيقة للشراكة الإنشائية',
        address: 'Fakhar Zaman Building Contracting LLC (FZBC), UAE',
        addressAr: 'شركة فخر زمان للمقاولات العامة ذ.م.م، الإمارات العربية المتحدة',
        phone: '+971 50 9384808',
        type: 'Building Construction Strategic Partner'
      }
    ],
    facebookPageUrl: 'https://www.facebook.com/p/Jabal-Al-Noor-Transport-and-Contracting-LLC-100067645167664/',
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'marine-works',
    number: '01',
    title: 'Marine Works, Breakwaters & Coastal Protection',
    titleAr: 'الأعمال البحرية، كواسر الأمواج وحماية الشواطئ',
    tagline: 'Breakwaters, revetments, groins, submerged breakwaters, quay walls, jetties, slipways, and beach nourishment.',
    taglineAr: 'تنفيذ كواسر الأمواج، صخور الحماية الشاطئية، الألسنة البحرية، المنزلقات البحرية واستصلاح الأراضي.',
    description: 'With specialized marine experience since 2008, JANTC constructs enduring maritime structures including breakwaters, land reclamation, boat slipways, key walls, and coastal revetments using 1-7 ton heavy armor rock for government ports and private marinas.',
    descriptionAr: 'خبرة ممتدة منذ 2008 في الأعمال البحرية الإنشائية؛ تشمل بناء كواسر الأمواج، استصلاح الأراضي البحرية، المنزلقات الشاطئية، حماية الأرصفة وتوريد وتركيب صخور الدروع البحرية أوزان من 1 إلى 7 أطنان.',
    image: '/src/assets/images/marine_breakwater_heavy_armor_1791094611650.jpg',
    capabilities: [
      'Offshore Breakwaters, Groins & Revetments',
      'Heavy Armor Rock Supply & Placement (1-7 Tons)',
      'Coastal Land Reclamation & Dredge Bunding',
      'Ship & Boat Slipway Ramps and Jetties',
      'Beach Nourishment & Lagoon Construction'
    ],
    capabilitiesAr: [
      'حواجز الأمواج البحرية والألسنة وتثبيت الشواطئ',
      'توريد وتنزيل صخور الدروع الثقيلة من 1 إلى 7 أطنان',
      'استصلاح الأراضي البحرية ورفع المناسيب الجافة',
      'إنشاء منزلقات ومراسي القوارب واليخوت البحرية',
      'تغذية الشواطئ وإنشاء البحيرات الاصطناعية'
    ],
    metrics: {
      label: 'Coastline Protected',
      labelAr: 'أطوال سواحل منجزة',
      value: '18.5+ Kms'
    }
  },
  {
    id: 'road-earthworks',
    number: '02',
    title: 'Road Works, Hill Cutting & Heavy Earthmoving',
    titleAr: 'أعمال الطرق، قطع الجبال والأعمال الترابية',
    tagline: 'Precision rock cutting, benching in hilly terrain, highway corridor formation, and mass cut-and-fill balancing.',
    taglineAr: 'شق الطرق الجبلية، تدريج المنحدرات الصخرية القاسية، وتسوية مسارات البنية التحتية.',
    description: 'As demonstrated in the Federal Road E-87 extension (3.5M CUM excavation) and DEWA power tower benching (AED 30M), JANTC cuts tough mountain slopes to parallel grade, balancing mass earthworks, laying sub-base, and installing kerbstones.',
    descriptionAr: 'كما في مشروع طريق E-87 الاتحادي (3.5 مليون م³ حفر وردم) ومشروع أبراج ديوا الجبلي، ننفذ قطع وتدريج السفوح الجبلية الشاهقة، تسوية المسارات، دك طبقات التأسيس وتركيب البردورات والإنترلوك.',
    image: '/src/assets/images/hill_cutting_earthworks_1790942788533.jpg',
    capabilities: [
      'Mountain Hill Cutting, Benching & Slope Profiling',
      'Mass Cut & Fill balancing (Multi-Million CUM capacity)',
      'Sub-base Gravel Spreading & Nuclear Compaction Testing',
      'Interlocks, Curbs & Sidewalk Paving',
      'DEWA Tower Hillside Pads & Access Roads'
    ],
    capabilitiesAr: [
      'قطع وتدريج السفوح الجبلية ومصاطب الأبراج',
      'موازنة الحفر والردم لملايين الأمتار المكعبة',
      'توريد وفرش طبقات الأساس الحصوي مع اختبارات الدك',
      'أعمال الإنترلوك، البردورات وأرصفة الطرق',
      'مسارات وقواعد أبراج خطوط الضغط العالي DEWA'
    ],
    metrics: {
      label: 'Major Roadway Cut & Fill',
      labelAr: 'إجمالي الحفر والردم للطرق',
      value: '6.5M+ CUM'
    }
  },
  {
    id: 'heavy-transport',
    number: '03',
    title: 'Heavy Land Transport & Materials Supply',
    titleAr: 'النقل البري الثقيل وتوريد مواد البناء والركام',
    tagline: 'High-payload tippers, flatbeds, lowbeds, and bulk supply of aggregates, beach sand, and rock materials.',
    taglineAr: 'أسطول شاحنات قلاب، تريلات، لوبد، وتوريد الركام من 0-40 مم وصخور الكسارات ورمل الشواطئ.',
    description: 'Deploying dump trucks (50 & 80 tons), 45m³ tippers, lowbed trailers (up to 200 tons), and supplying certified 0-5mm to 40mm aggregates, limestone, gabbro, armour rocks, and washed natural beach sand across Fujairah, Dubai, Abu Dhabi, RAK, and Habshan.',
    descriptionAr: 'تشغيل شاحنات تفريغ 50 و 80 طناً وتريلات 45م³ ونواقل لوبد حتى 200 طن، مع توريد الركام المعتمد بجميع المقاسات (0-40 مم)، الجابرو، الحجر الجيري، ورمل الشواطئ لجميع أنحاء الإمارات.',
    image: '/src/assets/images/fleet_heavy_transport_1790942764825.jpg',
    capabilities: [
      'Dump Trucks (50T & 80T) and 45m³ Tipper Trailers',
      'Lowbed Transporters (20T up to 200 Tons)',
      'Aggregates Supply (10mm, 14mm, 20mm, 25mm, 32mm, 40mm)',
      'Gabbro & Limestone Quarry Materials & Road Base',
      'Natural & Washed Beach Sand (White & Black Sand)'
    ],
    capabilitiesAr: [
      'شاحنات قلاب 50 و 80 طناً وتريلات 45 متراً مكعباً',
      'تريلات لوبد لنقل المعدات الثقيلة من 20 إلى 200 طن',
      'توريد الركام الحصوي بجميع المقاسات من 10 إلى 40 مم',
      'مواد الكسارات من الجابرو والحجر الجيري وطبقة الأساس',
      'توريد رمل الشواطئ الطبيعي والمغسول (الأبيض والأسود)'
    ],
    metrics: {
      label: 'Aggregates Delivered',
      labelAr: 'ركام ومواد منقولة',
      value: '3.2M+ Tons'
    }
  },
  {
    id: 'building-contracting',
    number: '04',
    title: 'Building Construction & Turnkey Civil Contracting',
    titleAr: 'المقاولات العامة والإنشاءات المدنية والمستودعات',
    tagline: 'In strategic partnership with Fakhar Zaman Building Contracting LLC (FZBC) for commercial & industrial buildings.',
    taglineAr: 'بالشراكة الاستراتيجية مع شركة فخر زمان للمقاولات ذ.م.م لتنفيذ المستودعات والمباني الصناعية.',
    description: 'Delivering complete pre-engineered steel warehouses, multi-storey staff accommodations, commercial showrooms, boundary walls, and reinforced concrete foundations, adhering strictly to UAE municipal codes and Value Engineering principles.',
    descriptionAr: 'تنفيذ شامل للمستودعات الصناعية مسبقة الصنع، مباني سكن العمال، صالات العرض التجارية، الأسوار والقواعد الخرسانية المسلحة، وفق أعلى معايير الجودة والبلديات في الإمارات.',
    image: '/src/assets/images/building_contracting_site_1790942799601.jpg',
    capabilities: [
      'Industrial Steel Warehouses & Factories',
      'Multi-Storey Staff & Labor Accommodations',
      'Commercial Showrooms & Logistics Parks',
      'Raft Foundations, Columns & Concrete Works',
      'Value Engineering & Turnkey Handover'
    ],
    capabilitiesAr: [
      'المستودعات الفولاذية والمصانع اللوجستية',
      'مجمعات سكن ومهاجع العمال متعددة الطوابق',
      'المعارض والمباني التجارية ومجمعات الأعمال',
      'الأساسات الخرسانية الحصيرة والأعمدة والأسوار',
      'دراسات الهندسة القيمية والتسليم الكامل'
    ],
    metrics: {
      label: 'Constructed Area',
      labelAr: 'مساحات إنشائية منفذة',
      value: '420,000+ m²'
    }
  },
  {
    id: 'rubbish-demolition',
    number: '05',
    title: 'Rubbish Removals & Controlled Demolition',
    titleAr: 'إزالة النفايات والمخلفات وأعمال الهدم المتخصصة',
    tagline: 'Safe, environmentally compliant C&D debris removal, industrial waste handling, and full building demolition.',
    taglineAr: 'إدارة مخلفات البناء والهدم، النفايات الصناعية والطبية، والهدم الآمن للمباني الخرسانية والفولاذية.',
    description: 'Complete commercial and residential demolition with municipal permits, roll-off skips, container fleets, and safe transfer to municipal landfills. Also handling industrial, commercial, and authorized medical waste management.',
    descriptionAr: 'خدمات هدم وإزالة المباني السكنية والتجارية مع استخراج التصاريح البلدية، وتوفير الحاويات والقلابات لنقل مخلفات البناء والنفايات الصناعية إلى المكبات المعتمدة بيئياً.',
    image: '/src/assets/images/hill_cutting_earthworks_1790942788533.jpg',
    capabilities: [
      'Complete Building Demolition & Interior Stripping',
      'Construction & Demolition (C&D) Waste Haulage',
      'Industrial & Commercial Skips & Containers (24/7)',
      'Residential & Staff Accommodation Waste Management',
      'Safe Medical Waste Collection & Treatment Plant Transfer'
    ],
    capabilitiesAr: [
      'الهدم الكلي للمباني والمنشآت وتجريد الديكورات',
      'ترحيل مخلفات أعمال البناء والإنشاءات C&D',
      'توفير الحاويات والقلابات للمصانع والورش 24 ساعة',
      'إدارة نفايات المجمعات السكنية ومساكن العمال',
      'جمع ونقل النفايات الطبية للمحطات المعتمدة'
    ],
    metrics: {
      label: 'Debris Cleared Safely',
      labelAr: 'مخلفات تم ترحيلها بأمان',
      value: '950,000+ Tons'
    }
  },
  {
    id: 'survey-equipment',
    number: '06',
    title: 'Engineering Survey Works & Equipment Hiring',
    titleAr: 'المسح الهندسي الدقيق وتأجير المعدات الثقيلة',
    tagline: 'Topographical & bathymetrical surveys, volume calculations, mobile tower lights, and specialized equipment hiring.',
    taglineAr: 'المسح الطبوغرافي والبحري، حساب الكميات، تأجير أبراج الإنارة ورافعات حتى 300 طن.',
    description: 'Providing precise volume calculation, stockpile audits, bathymetrical marine surveys, and a vast equipment hire fleet: Mobile Cranes (25T-300T), Crawler Cranes, CAT Dozers, Road Rollers, Denyo Soundproof Tower Lights, and custom Long Reach Booms.',
    descriptionAr: 'خدمات المسح الطبوغرافي والبحري بالموجات الصوتية وحساب كميات الحفر والردم والتشوين، إلى جانب تأجير الرافعات المتنقلة حتى 300 طن، وأبراج الإنارة كاشفة 4000 واط مع صيانة دورية عبر ورش متنقلة.',
    image: '/src/assets/images/hero_transport_contracting_1790942752556.jpg',
    capabilities: [
      'Bathymetrical Marine & Topographical Surveys',
      'Volume & Cut/Fill Calculations & Stockpile Audits',
      'Mobile Cranes (25T - 300T) & Crawler Cranes (up to 250T)',
      'Denyo Soundproof 4000W Tower Lights (30+ hr run)',
      'Long Reach Excavator Boom & Hydraulic Grab Manufacturing'
    ],
    capabilitiesAr: [
      'المسح البحري الطبوغرافي وأعماق الشواطئ والموانئ',
      'حساب الكميات بالأقمار الصناعية وتدقيق التشوين',
      'تأجير رافعات متحركة حتى 300 طن ورافعات مجنزرة',
      'أبراج إنارة كاتمة للصوت 4000 واط تعمل لأكثر من 30 ساعة',
      'تصنيع وتطوير ذراع الحفارات الطويلة والكلابات الهيدروليكية'
    ],
    metrics: {
      label: 'Active Machinery Assets',
      labelAr: 'آليات ومعدات مسجلة',
      value: '220+ Units'
    }
  }
];

export const OFFICIAL_PROJECTS_RECORD = [
  {
    name: 'Extension of Federal Road E-87 (Cement Roundabout to E-99 Al-Raheeb, Dibba)',
    nameAr: 'مشروع امتداد الطريق الاتحادي E-87 (من دوار الأسمنت إلى E-99 الرهيب، دبا)',
    client: "Presidential Court - MUBADARAT (The President's Initiatives)",
    clientAr: 'ديوان الرئاسة - مبادرات رئيس الدولة',
    consultant: 'e11 Engineering Consultancy & Project Management',
    location: 'Dibba, Fujairah, UAE',
    scope: 'Blasting and Earthworks for roadwork: 3.5 Million CUM Excavation & 3.0 Million CUM Filling',
    scopeAr: 'أعمال التفجير والحفر والردم: 3.5 مليون م³ حفر و 3.0 مليون م³ ردم',
    value: 'Major National Project',
    status: 'Completed / Active Insights',
    highlight: '3.5M CUM Cut & 3.0M CUM Fill',
    image: '/src/assets/images/fleet_heavy_transport_1790942764825.jpg'
  },
  {
    name: 'Land Development of Spare Area 1 in FOIZ for ECOMAR Storage Terminal',
    nameAr: 'تطوير وتسوية المنطقة الاحتياطية 1 بمنطقة الفجيرة للصناعة البترولية (FOIZ) لإيكومار',
    client: 'ECOMAR Storage Solutions FZC LLC',
    clientAr: 'شركة إيكومار لحلول التخزين البترولي FZC',
    consultant: 'Ecomar Engineering / FOIZ',
    location: 'Fujairah Free Zone (FOIZ), UAE',
    scope: 'Controlled drilling, mountain blasting, cutting & bulk earthmoving for oil storage expansion',
    scopeAr: 'أعمال الحفر والتفجير المحكوم وقطع الجبال للأعمال الترابية لتوسعة خزانات النفط',
    value: 'AED 26.0 Million',
    status: 'Completed (150,000 Safe Man-Hours without LTI)',
    highlight: 'AED 26M Value · 150K Safe Hours',
    image: '/src/assets/images/ecomar_foiz_terminal_earthworks_1791094362729.jpg'
  },
  {
    name: 'Construction of Roads, Benching in Hilly Terrain & Excavation for DEWA Towers',
    nameAr: 'شق الطرق الجبلية وتدريج المصاطب والحفر لقواعد أبراج هيئة كهرباء ومياه دبي DEWA',
    client: 'Kalpataru Power Transmission Limited / DEWA Dubai UAE',
    clientAr: 'شركة كالباتارو لنقل الطاقة / هيئة كهرباء ومياه دبي DEWA',
    consultant: 'DEWA Engineering',
    location: 'Hatta & Mountain Corridors, UAE',
    scope: 'Mountain benching, steep rock excavation, and access road construction for transmission towers',
    scopeAr: 'تدريج السفوح الجبلية العالية وشق طرق الوصول وحفر قواعد أبراج الضغط العالي',
    value: 'AED 30.0 Million',
    status: 'Completed',
    highlight: 'AED 30M High-Voltage Project',
    image: '/src/assets/images/hill_cutting_earthworks_1790942788533.jpg'
  },
  {
    name: 'Coastal Rock Protection in front of Runway - Delma Island Airport',
    nameAr: 'مشروع الحماية الصخرية للساحل المقابل لمدرج مطار جزيرة دلما',
    client: 'Al Dhafra Region Municipality, Abu Dhabi',
    clientAr: 'بلدية منطقة الظفرة - أبوظبي',
    consultant: 'ITALCONSULT',
    location: 'Delma Island, Abu Dhabi, UAE',
    scope: '1.5 Running Kilometers of heavy coastal revetment works, geotextile, and armor rock installation',
    scopeAr: '1.5 كم طولي من صخور الحماية الشاطئية وطبقات الجيوتكستايل لحماية مدرج المطار',
    value: 'Strategic Civil Defense',
    status: 'Completed',
    highlight: '1.5 Km Coastal Revetment',
    image: '/src/assets/images/marine_quay_jetty_reclamation_1791094623194.jpg'
  },
  {
    name: 'Construction of Flood Protection Measures (Eastern & Northern Coasts Phase 1)',
    nameAr: 'مشروع تدابير درء مخاطر الفيضانات بالسواحل الشرقية والشمالية - المرحلة 1',
    client: 'Presidential Court - Abu Dhabi / Darwish Engineering Emirates LLC',
    clientAr: 'ديوان الرئاسة - أبوظبي / درويش للمقاولات الهندسية ذ.م.م',
    consultant: 'Conser Engineering',
    location: 'Fujairah & Ras Al Khaimah, UAE',
    scope: 'Dam construction, embankment filling, spillways, and heavy armor rock installation',
    scopeAr: 'إنشاء السدود الحصوية، ردم الجسور، وتركيب صخور الدروع لحجز مياه السيول',
    value: 'Multi-Package Contract',
    status: 'Completed / Active',
    highlight: 'Presidential Court Initiative',
    image: '/src/assets/images/marine_dam_rock_engineering_1791094648490.jpg'
  },
  {
    name: 'Naqab Dam RAK - Rock Material Supply & Installation',
    nameAr: 'مشروع سد نقب في رأس الخيمة - توريد وتركيب المواد الصخرية',
    client: 'Darwish Engineering Emirates LLC',
    clientAr: 'شركة درويش للمقاولات الهندسية ذ.م.م',
    consultant: 'Ministry of Infrastructure Development',
    location: 'Ras Al Khaimah, UAE',
    scope: 'Supply and precision placement of graded rock material for wadi dam barrier',
    scopeAr: 'توريد وتركيب الصخور المتدرجة لجسم السد لمنع الفيضانات وتغذية المياه الجوفية',
    value: 'AED 12.0 Million',
    status: 'Completed',
    highlight: 'AED 12M Dam Project',
    image: '/src/assets/images/marine_dam_rock_engineering_1791094648490.jpg'
  },
  {
    name: 'Siniya Island Umm Al Quwain Marine Reclamation & Rock Installation',
    nameAr: 'مشروع جزيرة السينية في أم القيوين - الردم البحري وتثبيت الصخور',
    client: 'BATCO Group',
    clientAr: 'مجموعة باتكو للمقاولات BATCO',
    consultant: 'Maritime Engineering',
    location: 'Siniya Island, Umm Al Quwain, UAE',
    scope: 'Coastal reclamation, marine revetment bunds, and rock placement for mega island development',
    scopeAr: 'استصلاح الأراضي البحرية وتشييد حواجز الصخور لتطوير الجزيرة السياحية الكبرى',
    value: 'AED 10.75 Million',
    status: 'Completed',
    highlight: 'AED 10.75M Island Revetment',
    image: '/src/assets/images/marine_breakwater_heavy_armor_1791094611650.jpg'
  },
  {
    name: 'Al Dana Projects - Breakwater, Revetment & Lagoon Works',
    nameAr: 'مشاريع الدانة - كاسر الأمواج، التبطين الصخري والبحيرة الاصطناعية بالفجيرة',
    client: 'Sheikh Falah / AL Dana Projects',
    clientAr: 'مشاريع الدانة (الشيخ فلاح)',
    consultant: 'M.U.C. Engineering',
    location: 'Fujairah Seaboard, UAE',
    scope: 'Submerged breakwaters, beach groins, revetment works, and yacht lagoon dredging protection',
    scopeAr: 'كواسر الأمواج الغاطسة وحماية الشواطئ وبحيرة اليخوت في الفجيرة',
    value: 'AED 7.6 Million',
    status: 'Completed',
    highlight: 'AED 7.6M Marine Project',
    image: '/src/assets/images/marine_slipway_harbor_engineering_1791094635236.jpg'
  },
  {
    name: 'Private Marina Breakwater & Private Beach Development (Package 01 & 02)',
    nameAr: 'مارينا خاصة: إنشاء كاسر الأمواج والشاطئ الخاص ورامب القوارب',
    client: 'Mr. Khalid Ahmed Rashid Bin Shabib',
    clientAr: 'السيد خالد أحمد راشد بن شبيب',
    consultant: 'Civil Marine Consultants',
    location: 'Fujairah Coastal Belt',
    scope: 'Dual package marine breakwater construction, beach sand nourishment, and boat ramp',
    scopeAr: 'تنفيذ كاسر الأمواج البحري وتغذية الشاطئ بالرمال الناعمة وتجهيز منزلق القوارب',
    value: 'AED 17.5 Million Total',
    status: 'Completed',
    highlight: 'AED 17.5M Luxury Marina'
  }
];

export const FACEBOOK_VIDEOS: VideoShowcaseItem[] = [
  {
    id: 'fb-vid-1',
    title: 'Hill Cutting & Hydraulic Breaker Operations in Fujairah Mountain Pass',
    titleAr: 'عمليات قطع الجبال والمطارق الهيدروليكية بممرات الفجيرة الجبلية',
    category: 'earthworks',
    categoryLabel: 'Hill Cutting Operations',
    categoryLabelAr: 'أعمال قطع الجبال',
    location: 'Fujairah Mountain Pass, UAE',
    duration: '02:45',
    description: 'On-site video footage captured from our active mountain site: Heavy excavators equipped with Montabert rock breakers cutting tough basalt rock faces to carve roads and create graded terraces.',
    descriptionAr: 'توثيق حي من الميدان: حفارات ثقيلة مزودة بمطارق هيدروليكية تكسر الصخور البازلتية القاسية لشق المسارات وتسوية المصاطب الجبلية.',
    thumbnail: '/src/assets/images/hill_cutting_earthworks_1790942788533.jpg',
    facebookUrl: 'https://www.facebook.com/p/Jabal-Al-Noor-Transport-and-Contracting-LLC-100067645167664/',
    viewsCount: '14.2K views',
    date: 'Official Facebook Live'
  },
  {
    id: 'fb-vid-2',
    title: 'Coastal Breakwater Marine Rock Armor Placement',
    titleAr: 'إنزال وتثبيت صخور الدروع الكبرى بكواسر الأمواج البحرية',
    category: 'marine',
    categoryLabel: 'Marine Protection',
    categoryLabelAr: 'حماية الشواطئ والأعمال البحرية',
    location: 'Eastern Coastline, UAE',
    duration: '03:15',
    description: 'Official video from our marine works division demonstrating heavy hydraulic cranes and long-reach excavators placing 3 to 5 ton armor rocks along the maritime revetment barrier.',
    descriptionAr: 'فيديو رسمي من قطاع الأعمال البحرية يوضح معداتنا الثقيلة أثناء تركيب صخور الدروع البحرية العملاقة لحماية الأرصفة وكواسر الأمواج.',
    thumbnail: '/src/assets/images/marine_dam_construction_1790942776711.jpg',
    facebookUrl: 'https://www.facebook.com/p/Jabal-Al-Noor-Transport-and-Contracting-LLC-100067645167664/',
    viewsCount: '18.9K views',
    date: 'Official Facebook Showcase'
  },
  {
    id: 'fb-vid-3',
    title: 'Heavy Tipper Fleet Hauling Crushed Aggregate to Dubai Expressway',
    titleAr: 'أسطول التريلات الثقيلة ينقل الركام والبحص إلى مشاريع دبي السريعة',
    category: 'transport',
    categoryLabel: 'Fleet Logistics',
    categoryLabelAr: 'لوجستيات الأسطول الثقيل',
    location: 'Fujairah - Dubai Highway (E84)',
    duration: '01:50',
    description: 'A convoy of Jabal Al Noor Mercedes-Benz Actros heavy tippers in continuous motion, delivering critical sub-base and aggregate materials for UAE national infrastructure.',
    descriptionAr: 'قافلة شاحنات جبل النور من طراز مرسيدس أكتروس تنقل شحنات الأساس الحصوي والركام من كسارات الفجيرة مباشرة لمشاريع الطرق بدبي.',
    thumbnail: '/src/assets/images/fleet_heavy_transport_1790942764825.jpg',
    facebookUrl: 'https://www.facebook.com/p/Jabal-Al-Noor-Transport-and-Contracting-LLC-100067645167664/',
    viewsCount: '22.4K views',
    date: 'Official Facebook Reels'
  },
  {
    id: 'fb-vid-4',
    title: 'Wadi Dam Embankment Construction & Compaction Works',
    titleAr: 'بناء جسر سد الوادي ودك طبقات التربة والصخور',
    category: 'marine',
    categoryLabel: 'Dam Construction',
    categoryLabelAr: 'إنشاء سدود الأودية',
    location: 'Northern Emirates Valley, UAE',
    duration: '04:10',
    description: 'Comprehensive earthworks and soil compaction for a major rainwater retention dam, preventing flooding and replenishing underground aquifers in the UAE mountain valley.',
    descriptionAr: 'أعمال الدك المتواصل وتسوية طبقات السد الترابي والصخري لحجز مياه الأمطار والسيول وحماية المنشآت المجاورة بالمنطقة الشمالية.',
    thumbnail: '/src/assets/images/hero_transport_contracting_1790942752556.jpg',
    facebookUrl: 'https://www.facebook.com/p/Jabal-Al-Noor-Transport-and-Contracting-LLC-100067645167664/',
    viewsCount: '11.8K views',
    date: 'Official Project Reel'
  },
  {
    id: 'fb-vid-5',
    title: 'Industrial Warehouse Steel Structure Assembly & Raft Foundation',
    titleAr: 'تركيب الهياكل الفولاذية للمستودعات وصب القواعد الخرسانية',
    category: 'building',
    categoryLabel: 'Building Contracting',
    categoryLabelAr: 'المقاولات الإنشائية',
    location: 'Sharjah Industrial Zone, UAE',
    duration: '02:30',
    description: 'Watch our construction contracting team erect multi-bay steel portal frames and pour heavy-duty reinforced concrete floors for a major logistics warehouse.',
    descriptionAr: 'فريق مقاولات البناء يقوم بتركيب الأعمدة الفولاذية وصب الأرضيات الخرسانية المسلحة لمستودع لوجستي ضخم بالشارقة.',
    thumbnail: '/src/assets/images/building_contracting_site_1790942799601.jpg',
    facebookUrl: 'https://www.facebook.com/p/Jabal-Al-Noor-Transport-and-Contracting-LLC-100067645167664/',
    viewsCount: '9.6K views',
    date: 'Official Facebook Post'
  }
];

export const FLEET_CATALOG: FleetItem[] = [
  {
    id: 'fleet-1',
    name: 'Mercedes-Benz Actros 45m³ & 50-80T Dump Trucks',
    nameAr: 'تريلات مرسيدس أكتروس قلاب 45م³ وشاحنات تفريغ 50-80 طناً',
    category: 'tippers',
    categoryLabel: 'Heavy Tipper Haulage',
    categoryLabelAr: 'شاحنات النقل الثقيل',
    specifications: {
      capacity: '45 Cubic Meters / 50 to 80 Ton Payload',
      power: '480 HP V6 Turbo Diesel',
      weight: 'Gross Combined Weight: 60+ Tons',
      bestFor: 'Long-distance aggregate, rock, sand and sub-base haulage from Fujairah to Dubai, Sharjah & Abu Dhabi',
      bestForAr: 'نقل الركام والصخور والرمل لمسافات طويلة من الفجيرة إلى دبي والشارقة وأبوظبي'
    },
    availability: 'Available Immediately',
    availabilityAr: 'متاح فوراً',
    image: '/src/assets/images/fleet_heavy_transport_1790942764825.jpg'
  },
  {
    id: 'fleet-2',
    name: 'CAT & Komatsu 349/350 50-Ton Heavy Excavators',
    nameAr: 'حفارات كوماتسو وكاتربيلر ثقيلة حمولة 50 طناً',
    category: 'excavators',
    categoryLabel: 'Heavy Excavators & Breakers',
    categoryLabelAr: 'الحفارات الثقيلة والمطارق',
    specifications: {
      capacity: 'Bucket Capacity 3.2 m³ / 4.5 Ton Rock Breaker',
      power: '390 HP Tier 4 Engine',
      weight: '49,200 kg Operating Weight',
      bestFor: 'Deep rock trenching, hill cutting, quarry face extraction, and marine armor rock handling',
      bestForAr: 'قطع الصخور الجبلية، الحفر العميق، وتنزيل صخور الدروع البحرية'
    },
    availability: 'Available Immediately',
    availabilityAr: 'متاح فوراً',
    image: '/src/assets/images/hill_cutting_earthworks_1790942788533.jpg'
  },
  {
    id: 'fleet-3',
    name: 'Mobile Cranes (25 Ton up to 300 Tons) & Crawler Cranes',
    nameAr: 'رافعات متنقلة من 25 إلى 300 طن ورافعات مجنزرة حتى 250 طناً',
    category: 'specialized',
    categoryLabel: 'Heavy Lifting & Mobile Cranes',
    categoryLabelAr: 'الرافعات الثقيلة ومعدات الرفع',
    specifications: {
      capacity: '25 Ton – 300 Ton Telescopic & Lattice',
      power: 'Multi-Axle All-Terrain Crane Carrier',
      weight: 'Hydraulic Jib extension up to 80m',
      bestFor: 'Port stevedoring, marine rock placement, structural steel erection, and heavy vessel lifting',
      bestForAr: 'مشاريع الموانئ، تركيب هياكل المستودعات، ومناولة الصخور والمعدات الكبرى'
    },
    availability: 'Available Immediately',
    availabilityAr: 'متاح فوراً',
    image: '/src/assets/images/marine_dam_construction_1790942776711.jpg'
  },
  {
    id: 'fleet-4',
    name: 'CAT D8R, D9 & D10 Heavy Crawler Bulldozers',
    nameAr: 'بلدوزرات مجنزرة ثقيلة كاتربيلر D8R و D9 و D10',
    category: 'earthmoving',
    categoryLabel: 'Earthmoving & Grading',
    categoryLabelAr: 'البلدوزرات والتسوية',
    specifications: {
      capacity: 'Heavy Semi-Universal Blade + Single Shank Ripper',
      power: '330 HP - 580 HP',
      weight: '38,500 kg - 68,000 kg Operating Weight',
      bestFor: 'Mass terrain pushing, ripping consolidated rock layers, leveling dam embankments',
      bestForAr: 'دفع الصخور، شق الطبقات الصلبة، وتسوية جسور السدود الترابية'
    },
    availability: 'Available Immediately',
    availabilityAr: 'متاح فوراً',
    image: '/src/assets/images/hill_cutting_earthworks_1790942788533.jpg'
  },
  {
    id: 'fleet-5',
    name: 'Denyo Soundproof 4000W Mobile Tower Lights',
    nameAr: 'أبراج إنارة متنقلة كاتمة للصوت دينيو قوة 4000 واط',
    category: 'specialized',
    categoryLabel: 'Site Power & Lighting Rentals',
    categoryLabelAr: 'تأجير أبراج الإنارة ومولدات الكهرباء',
    specifications: {
      capacity: '4 x 1000W Metal Halide Floodlights (4000W total)',
      power: 'Kubota Diesel Engine / 9 kVA Super Silent Generator',
      weight: 'Trailer Mounted / 360-degree rotation / 30+ hr runtime',
      bestFor: 'Round-the-clock night operations on highway sites, quarries, oil fields, and marine ports',
      bestForAr: 'تشغيل مواقع العمل الليلية على مدار 24 ساعة في الطرق والموانئ ومحطات البترول'
    },
    availability: 'Available Immediately',
    availabilityAr: 'متاح فوراً',
    image: '/src/assets/images/hero_transport_contracting_1790942752556.jpg'
  },
  {
    id: 'fleet-6',
    name: 'Lowbed Multi-Axle Heavy Transporters (20T – 200T)',
    nameAr: 'ناقلات اللوبد الثقيلة متعددة المحاور حمولة 20 إلى 200 طن',
    category: 'specialized',
    categoryLabel: 'Heavy Equipment Mobilization',
    categoryLabelAr: 'نقل وتوزيع المعدات الثقيلة',
    specifications: {
      capacity: '20 Ton to 200 Ton Heavy Payload',
      power: 'Heavy Prime Mover 6x4 / 8x4 Mercedes/Volvo',
      weight: 'Reinforced Hydraulic Gooseneck & Low Deck',
      bestFor: 'Mobilizing oversized excavators, drill rigs, crushing plants across all UAE emirates',
      bestForAr: 'نقل الحفارات العملاقة وماكينات الحفر ومحطات الكسارات المتنقلة'
    },
    availability: 'Available Immediately',
    availabilityAr: 'متاح فوراً',
    image: '/src/assets/images/fleet_heavy_transport_1790942764825.jpg'
  }
];

export const CERTIFICATIONS_LIST = [
  {
    title: 'ISO 9001:2015',
    category: 'Quality Management System',
    certNo: 'AFU-1070',
    scope: 'Transport of materials heavy & light trucks, ports & marine contracting',
    validUntil: '14 Oct 2026'
  },
  {
    title: 'ISO 14001:2015',
    category: 'Environmental Management System',
    certNo: 'AFU-5051',
    scope: 'Environmental standards, waste mitigation & sustainable marine works',
    validUntil: '14 Oct 2026'
  },
  {
    title: 'ISO 45001:2018',
    category: 'Occupational Health & Safety',
    certNo: 'AFU-3051',
    scope: 'Workforce safety, risk prevention & OHSAS compliant operations',
    validUntil: '14 Oct 2026'
  },
  {
    title: 'ICV Certification (26.33%)',
    category: 'In-Country Value Certified',
    certNo: '148329',
    scope: 'Ministry of Industry & Advanced Technology (MoIAT) verified by Mazars',
    validUntil: '19 Jul 2026'
  },
  {
    title: 'FEA Environmental License',
    category: 'Government of Fujairah',
    certNo: 'FEA-PES-EP-PR-09-F-01',
    scope: 'Marine contracting, ports construction, and heavy materials transport',
    validUntil: '19 Jan 2027'
  }
];
