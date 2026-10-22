// Comprehensive Data Source for LifeLine 360 Landing Platform
// Extracted and engineered from the Official Scope of Work Specification

export const translations = {
  en: {
    brandTagline: 'Integrated Healthcare Super Ecosystem',
    navServices: 'Healthcare Services',
    navEmergency: 'Emergency Radar',
    navBloodBank: 'Live Blood Tracker',
    navMembership: 'Shield Membership',
    navEcosystem: 'App Suite',
    navPartners: 'Partner With Us',
    navFaq: 'FAQs',
    emergencyHotline: 'Emergency: 1800-LIFELINE',
    emergencyLive: '24/7 Rapid Response Network Active',
    downloadApp: 'Download App',
    heroBadge: 'INDIA\'S 1ST UNIFIED HEALTHCARE & EMERGENCY SUPER PLATFORM',
    heroTitlePart1: 'One Unified Platform.',
    heroTitlePart2: 'Zero Lost Minutes.',
    heroTitlePart3: '360° Lifeline In Your Hands.',
    heroDesc: 'Connecting rapid emergency ambulance dispatch, verified at-home nursing, doctor teleconsultations, express medicine delivery, home lab tests, and live blood bank availability in a single life-saving ecosystem.',
    requestAmbulanceNow: 'Book Ambulance Now',
    exploreServices: 'Explore 360° Ecosystem',
    avgDispatchTime: '7.8 Mins',
    avgDispatchLabel: 'Avg. Ambulance Arrival',
    activeAmbulances: '4,200+',
    activeAmbulancesLabel: 'GPS Ambulances On Duty',
    verifiedPersonnel: '18,500+',
    verifiedPersonnelLabel: 'Doctors, Nurses & Phlebotomists',
    bloodUnitsReady: '12,400+',
    bloodUnitsReadyLabel: 'Real-Time Blood Units',
  },
  hi: {
    brandTagline: 'एकीकृत स्वास्थ्य और आपातकालीन सुपर इकोसिस्टम',
    navServices: 'स्वास्थ्य सेवाएं',
    navEmergency: 'इमरजेंसी रडार',
    navBloodBank: 'लाइव ब्लड ट्रैकर',
    navMembership: 'शील्ड सदस्यता',
    navEcosystem: 'ऐप्स और पैनल्स',
    navPartners: 'पार्टनर बनें',
    navFaq: 'सामान्य प्रश्न',
    emergencyHotline: 'आपातकालीन: 1800-लाइफलाइन',
    emergencyLive: '24/7 आपातकालीन प्रतिक्रिया नेटवर्क सक्रिय',
    downloadApp: 'ऐप डाउनलोड करें',
    heroBadge: 'भारत का पहला एकीकृत आपातकालीन और स्वास्थ्य सुरक्षा प्लेटफॉर्म',
    heroTitlePart1: 'एक एकीकृत मंच।',
    heroTitlePart2: 'शून्य मिनट की देरी।',
    heroTitlePart3: '360° जीवन रक्षा आपके हाथ में।',
    heroDesc: 'आपातकालीन एम्बुलेंस डिस्पैच, प्रशिक्षित होम नर्स, डॉक्टर परामर्श, त्वरित दवा वितरण, घर पर लैब टेस्ट और लाइव ब्लड बैंक इन्वेंट्री को एक जीवन रक्षक मंच पर जोड़े।',
    requestAmbulanceNow: 'तुरंत एम्बुलेंस बुक करें',
    exploreServices: '360° सेवाएं देखें',
    avgDispatchTime: '7.8 मिनट',
    avgDispatchLabel: 'औसत एम्बुलेंस आगमन समय',
    activeAmbulances: '4,200+',
    activeAmbulancesLabel: 'ड्यूटी पर जीपीएस एम्बुलेंस',
    verifiedPersonnel: '18,500+',
    verifiedPersonnelLabel: 'सत्यापित डॉक्टर और नर्सिंग स्टाफ',
    bloodUnitsReady: '12,400+',
    bloodUnitsReadyLabel: 'उपलब्ध लाइव ब्लड यूनिट्स',
  }
};

// 6 Core Healthcare Services defined in Scope of Work
export const healthcareServices = [
  {
    id: 'ambulance',
    name: 'Emergency Ambulance & Live Dispatch',
    category: 'Critical Emergency',
    tag: '⚡ 8-Min Rapid Arrival',
    color: '#ef4444',
    glowColor: 'rgba(239, 68, 68, 0.35)',
    shortDesc: 'Instant GPS-tracked ambulance booking with hospital destination routing, emergency vitals telemetry, and privacy-protected call masking.',
    features: [
      'Live GPS fleet location tracking & dynamic ETA calculation',
      'Advanced Life Support (ALS) & Basic Life Support (BLS) selection',
      'Encrypted Call Masking: Call drivers without exposing personal phone numbers',
      'Direct routing to nearest specialized trauma center or preferred hospital',
      'Dedicated Driver/Ambulance App with offline/online duty toggles'
    ],
    metric: '99.4% On-time dispatch rate',
    iconName: 'Ambulance'
  },
  {
    id: 'doctor',
    name: 'Doctor Teleconsultation & Care',
    category: 'Clinical Care',
    tag: '🩺 15-Minute Video Connect',
    color: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.35)',
    shortDesc: 'Connect with verified general physicians and multi-specialists on-demand with instant digital prescription generation.',
    features: [
      '24/7 General Physician & Specialist video/audio consultations',
      'Direct transmission of digital prescriptions to medicine vendors',
      'Multiple patient profiles under a single family account',
      'Symptom checker and automated triage before doctor connect',
      'Medical consultation history and encrypted record storage'
    ],
    metric: '4.9/5 Doctor Satisfaction',
    iconName: 'Stethoscope'
  },
  {
    id: 'nursing',
    name: 'At-Home Nursing & Caretaker Support',
    category: 'Home Healthcare',
    tag: '🏠 KYC Verified Caretakers',
    color: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.35)',
    shortDesc: 'Professional home nursing, ICU-trained attendants, post-operative rehabilitation, and compassionate elderly caretakers.',
    features: [
      '100% background-checked & KYC-verified nurses and attendants',
      'Custom shift bookings: 2 hours, 12-hour shifts, or 24/7 residential care',
      'Post-surgery recovery, wound dressing, catheterization, and IV care',
      'Elderly assistance: mobility support, vitals logging, medication reminders',
      'Dedicated Caretaker Module with digital visit check-in/check-out'
    ],
    metric: '12,000+ Verified Nurses',
    iconName: 'UserCheck'
  },
  {
    id: 'medicine',
    name: 'Express Medicine & Prescription Delivery',
    category: 'Pharmacy Network',
    tag: '💊 Direct Pharmacy Handover',
    color: '#8b5cf6',
    glowColor: 'rgba(139, 92, 246, 0.35)',
    shortDesc: 'Upload doctor prescriptions or search authentic medicines fulfilled by verified local pharmacy partners with live order tracking.',
    features: [
      'One-click prescription upload with pharmacist verification',
      'Hyperlocal medicine catalog with real-time pricing and stock',
      'Automated recurring refill scheduler for chronic illnesses',
      'Temperature-monitored delivery for insulin and sensitive biologics',
      'Role-based Medicine Vendor App with order preparation management'
    ],
    metric: '35-min avg. delivery window',
    iconName: 'Pill'
  },
  {
    id: 'laboratory',
    name: 'Diagnostic Tests & Home Sample Collection',
    category: 'Diagnostics',
    tag: '🔬 NABL Accredited Labs',
    color: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.35)',
    shortDesc: 'Book pathology and diagnostic tests with certified phlebotomists collecting blood/urine samples from your doorstep with digital reports.',
    features: [
      'Home sample collection at chosen convenient time slots',
      'Partnered with certified NABL and CAP accredited pathology labs',
      'Comprehensive full-body checkup packages with instant booking',
      'Digital test reports delivered directly into the user app',
      'Dedicated Laboratory Web Panel for sample management and report uploads'
    ],
    metric: '6-Hour Report Turnaround',
    iconName: 'FlaskConical'
  },
  {
    id: 'bloodbank',
    name: 'Real-Time Blood Bank & Donor Network',
    category: 'Life Emergency',
    tag: '🩸 Live Unit Availability',
    color: '#f43f5e',
    glowColor: 'rgba(244, 63, 94, 0.35)',
    shortDesc: 'Locate urgent blood units, plasma, and platelets across accredited blood banks with instant requisition and direct verification.',
    features: [
      'Real-time blood bank inventory: A+, A-, B+, B-, O+, O-, AB+, AB-',
      'Select Blood Bank → Select Blood Group → Check Availability → Raise Request',
      'Emergency blood alert broadcast to verified voluntary donor registry',
      'Blood Bank Web Panel for inventory synchronization and emergency approval',
      'Direct hospital liaison to reserve emergency blood units in minutes'
    ],
    metric: '850+ Integrated Blood Banks',
    iconName: 'Droplets'
  }
];

// Interactive Blood Inventory Simulation Data
export const initialBloodInventory = [
  { bankName: 'Apex Trauma Center Blood Bank', city: 'Metro Core', distance: '2.4 km', group: 'O+', units: 14, status: 'Available', type: 'Whole Blood / RBC' },
  { bankName: 'Apollo City LifeBlood Center', city: 'Metro Core', distance: '3.8 km', group: 'O-', units: 4, status: 'Urgent Rare', type: 'Packed Red Cells' },
  { bankName: 'Rotary Regional Blood Reserve', city: 'North District', distance: '5.1 km', group: 'A+', units: 22, status: 'Available', type: 'Whole Blood / Platelets' },
  { bankName: 'Red Cross Central Life Blood Bank', city: 'Metro Core', distance: '6.0 km', group: 'B+', units: 19, status: 'Available', type: 'Whole Blood' },
  { bankName: 'Max Care Diagnostic Blood Cell', city: 'South District', distance: '7.5 km', group: 'AB+', units: 8, status: 'Available', type: 'Plasma / Platelets' },
  { bankName: 'Fortis Memorial Blood Reserve', city: 'East District', distance: '8.2 km', group: 'B-', units: 5, status: 'Low Stock', type: 'Packed Cells' },
  { bankName: 'National Trauma Blood Unit', city: 'Metro Core', distance: '4.1 km', group: 'A-', units: 3, status: 'Urgent Rare', type: 'Whole Blood' },
  { bankName: 'Grace Samaritan Blood Bank', city: 'West District', distance: '9.3 km', group: 'AB-', units: 2, status: 'Critical Reserve', type: 'Cryoprecipitate' }
];

// Call Masking Architecture Steps (Scope Item 11)
export const callMaskingFlow = [
  {
    step: '01',
    title: 'User Calls Service Provider',
    desc: 'Patient taps "Call Driver" or "Call Nurse" in the LifeLine 360 app.',
    icon: 'PhoneOutgoing'
  },
  {
    step: '02',
    title: 'LifeLine Masked Gateway Relay',
    desc: 'Secure cloud PBX generates a temporary virtual relay number, hiding caller ID.',
    icon: 'ShieldCheck'
  },
  {
    step: '03',
    title: 'Provider Receives Encrypted Line',
    desc: 'Driver or Nurse answers. Neither party ever sees the personal mobile number.',
    icon: 'Lock'
  },
  {
    step: '04',
    title: 'Auto-Terminates Post-Trip',
    desc: 'Virtual proxy route automatically expires 60 minutes after service completion.',
    icon: 'CheckCircle2'
  }
];

// Membership Plans (Scope Item 9)
export const membershipPlans = [
  {
    id: 'basic',
    name: 'LifeLine Silver',
    badge: 'Essential Individual',
    priceMonthly: '₹299',
    priceAnnual: '₹2,499',
    periodMonthly: '/month',
    periodAnnual: '/year',
    savings: 'Save ₹1,089/yr',
    desc: 'Ideal for young professionals and individuals seeking emergency ambulance safety and primary medical access.',
    features: [
      '1 Free Emergency Ambulance Dispatch / year (up to 20 km)',
      '3 Free Doctor Teleconsultations per year',
      '15% Flat Discount on Pathology Lab Tests',
      '10% Flat Discount on Prescribed Medicines',
      'Encrypted Call Masking on all requests',
      'Digital LifeLine 360 Membership ID Card'
    ],
    recommended: false,
    cardBg: 'linear-gradient(135deg, #1e293b, #0f172a)',
    accent: '#94a3b8'
  },
  {
    id: 'shield',
    name: 'LifeLine 360 Family Shield',
    badge: '★ Most Popular Choice',
    priceMonthly: '₹699',
    priceAnnual: '₹5,999',
    periodMonthly: '/month',
    periodAnnual: '/year',
    savings: 'Save ₹2,389/yr',
    desc: 'Comprehensive coverage for up to 5 family members with priority ambulance dispatch and home nursing privileges.',
    features: [
      'Unlimited Emergency Ambulance Requests (Zero Out-of-Pocket)',
      'Priority GPS Dispatch Queue (< 6 min dispatch target)',
      'Unlimited Doctor Teleconsultations for 5 Family Members',
      '25% Discount on Home Sample Lab Tests & Full Body Checkups',
      '15% Discount on Express Medicine Orders',
      'Priority Booking for Home Nurses & Post-op Caretakers',
      'Dedicated 24/7 Family Care Concierge Manager',
      'Digital NFC & QR Family Health Pass'
    ],
    recommended: true,
    cardBg: 'linear-gradient(135deg, #0f172a, #1e1b4b, #311042)',
    accent: '#ef4444'
  },
  {
    id: 'titanium',
    name: 'LifeLine Titanium 360 Pro',
    badge: 'Elderly & Corporate Elite',
    priceMonthly: '₹1,299',
    priceAnnual: '₹10,999',
    periodMonthly: '/month',
    periodAnnual: '/year',
    savings: 'Save ₹4,589/yr',
    desc: 'Maximum healthcare protection designed for elderly parents, chronic patients, and high-priority health management.',
    features: [
      'Zero-Cost ICU / ALS Ambulance Transfers Across Cities',
      'Direct Line to Senior Multi-Specialist Doctors on Demand',
      '2 Free Home Visits by Certified Nurse / Caretaker monthly',
      '2 Free Annual Comprehensive 84-Parameter Diagnostic Profiles',
      'Direct Priority Allocation in Partner Blood Banks',
      'Express 20-Minute Emergency Medicine Dispatch',
      'Personalized Vitals Telemetry Kit & SOS Wearable Sync',
      'International Travel Medical Support Hotline'
    ],
    recommended: false,
    cardBg: 'linear-gradient(135deg, #18181b, #172554)',
    accent: '#06b6d4'
  }
];

// App Suite & Panel Structure (Scope Item 2 & 17)
export const platformEcosystem = [
  {
    name: 'User Mobile App',
    platforms: 'Android & iOS',
    role: 'Patients & Families',
    desc: 'One-stop mobile interface for booking ambulances, teleconsulting doctors, scheduling home nurses, ordering medicines, and finding blood.',
    highlights: ['OTP Login & Address Book', 'Real-Time Ambulance GPS Map', 'Digital Health Card & Prescriptions', 'Emergency SOS Quick Trigger']
  },
  {
    name: 'Driver / Ambulance App',
    platforms: 'Android & iOS',
    role: 'Ambulance Drivers & Paramedics',
    desc: 'Dedicated application for ambulance drivers to receive instant emergency trip dispatches, navigate via GPS, and communicate safely.',
    highlights: ['Online/Offline Duty Toggle', 'Emergency Booking Accept/Reject', 'Turn-by-Turn Hospital Navigation', 'Call Masking with Patients']
  },
  {
    name: 'Vendor & Caretaker App',
    platforms: 'Android & iOS',
    role: 'Pharmacies & Nursing Attendants',
    desc: 'Dual-role mobile application with role-based access for medicine vendors managing orders and caretakers fulfilling home visits.',
    highlights: ['Prescription Order Preparation', 'Caretaker Shift Check-in/out', 'KYC & Certificate Verification', 'Real-time Earnings & Settlements']
  },
  {
    name: 'Blood Bank Web Panel',
    platforms: 'Web Dashboard',
    role: 'Licensed Blood Banks',
    desc: 'Enterprise portal allowing registered blood banks to update blood group inventory, manage urgency requisitions, and accept requests.',
    highlights: ['Real-Time Blood Unit Counters', 'Emergency Request Acceptance', 'Donor Camp Coordination', 'Hospital Dispatch Logs']
  },
  {
    name: 'Laboratory Web Panel',
    platforms: 'Web Dashboard',
    role: 'Diagnostic Laboratories',
    desc: 'Web panel for pathology labs to manage test catalogs, dispatch home phlebotomists, and upload encrypted digital PDF test reports.',
    highlights: ['Home Collection Slot Management', 'Secure Digital PDF Report Upload', 'Automated SMS/App Notifications', 'Payment & Commission Ledger']
  },
  {
    name: 'Master Admin Panel',
    platforms: 'Super Admin Portal',
    role: 'Platform Operations',
    desc: 'Central command center providing total operational control, service-wise analytics, KYC approvals, and commission distributions.',
    highlights: ['Live City-Wide Emergency Telemetry', 'KYC & Document Approvals', 'Vendor & Driver Payout Engines', 'Call Masking Audit Logs']
  }
];

// Partner Onboarding Categories (Scope Section 13)
export const partnerCategories = [
  {
    id: 'driver',
    title: 'Ambulance Driver & Fleet Owner',
    icon: 'Ambulance',
    benefits: 'Guaranteed emergency dispatches, fast payouts, subsidized vehicle insurance, and GPS navigation integration.',
    requirements: 'Commercial driving license, valid vehicle fitness, and emergency equipment checklist.'
  },
  {
    id: 'nurse',
    title: 'Nurse & Trained Caretaker',
    icon: 'UserCheck',
    benefits: 'Flexible hourly or daily shifts, guaranteed verified clients, direct bank deposits, and safety tracking.',
    requirements: 'Nursing diploma / GNM / ANM / Certified geriatric or patient attendant credential.'
  },
  {
    id: 'pharmacy',
    title: 'Medicine Vendor & Pharmacy',
    icon: 'Pill',
    benefits: 'Expand customer radius, digitize prescription fulfillment, automated stock sync, and zero hidden commissions.',
    requirements: 'Valid Drug License, GST registration, and licensed pharmacist on premises.'
  },
  {
    id: 'lab',
    title: 'Diagnostic Laboratory',
    icon: 'FlaskConical',
    benefits: 'Receive automated home sample bookings, integrated logistics, high-volume test traffic, and instant patient report delivery.',
    requirements: 'NABL or state pathology registration, certified phlebotomists, and quality control certificates.'
  },
  {
    id: 'bloodbank',
    title: 'Licensed Blood Bank',
    icon: 'Droplets',
    benefits: 'Digitize unit reserves, reduce wastage, instantly connect with critical emergency patients, and verified donor mobilization.',
    requirements: 'Valid State / Central Drug Controller Blood Bank license and cold chain compliance.'
  }
];

// FAQs (Scope Section 13)
export const faqsList = [
  {
    question: 'How fast does an emergency ambulance arrive after booking?',
    answer: 'LifeLine 360 leverages a dynamic hyper-local GPS dispatch network. When an emergency SOS is triggered, the request is dispatched simultaneously to the nearest verified ambulance drivers. Our average dispatch-to-doorstep response time is under 8 minutes in metro areas.'
  },
  {
    question: 'What is Call Masking and how does it protect my privacy?',
    answer: 'LifeLine 360 uses an enterprise-grade PBX call masking gateway. When you call an ambulance driver, medicine vendor, or home nurse, both calls are routed through an encrypted virtual proxy. Neither the patient nor the provider ever sees each other’s personal mobile phone numbers.'
  },
  {
    question: 'How do at-home nursing and caretaker services work?',
    answer: 'You can book verified, KYC-screened nurses or attendants for specific procedures (such as IV drip setup, dressing, post-operative monitoring) or for 12/24-hour ongoing elderly care. Caretakers check in digitally upon arrival and you can rate the service after completion.'
  },
  {
    question: 'How do I check real-time blood availability and request units?',
    answer: 'On our website or mobile app, select your blood group (such as O-, B+, AB+, etc.) and location. You will see verified units available across accredited partner blood banks. Raising a request immediately places a hold on the unit and alerts the hospital blood coordination officer.'
  },
  {
    question: 'How are diagnostic laboratory samples collected and reports delivered?',
    answer: 'A certified phlebotomist arrives at your preferred time slot equipped with sterile collection kits. Samples are barcoded and transported in temperature-controlled boxes to NABL-accredited diagnostic labs. As soon as the report is ready, a digital encrypted PDF is pushed to your app with doctor consultation assistance.'
  },
  {
    question: 'What benefits are included in the LifeLine 360 Membership?',
    answer: 'LifeLine 360 Membership tiers provide free or discounted emergency ambulance dispatches, unlimited doctor teleconsultations, flat discounts on lab packages (up to 25%), discounts on medicines, priority home caretaker bookings, and a digital family health card.'
  }
];
