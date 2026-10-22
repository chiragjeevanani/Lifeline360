// Supporting content — membership, platform, partners, FAQs, legal.
// Mapped from the Scope of Work sections 2, 9–17.

// Section 2 & 17 — the seven products
export const platform = [
  { name: 'User App', kind: 'Android & iOS', who: 'Patients & families', desc: 'Every service, booking, report and membership in one app — with OTP login, saved addresses and an emergency contact.', device: 'phone' },
  { name: 'Driver / Ambulance App', kind: 'Android & iOS', who: 'Ambulance drivers', desc: 'Go online, accept emergency requests, navigate with live GPS and call patients through masked numbers.', device: 'phone' },
  { name: 'Vendor + Caretaker App', kind: 'Android & iOS', who: 'Pharmacies, nurses & caretakers', desc: 'One app with role-based access — medicine orders for vendors, home bookings for caretakers.', device: 'phone' },
  { name: 'Blood Bank Panel', kind: 'Web', who: 'Blood banks', desc: 'Manage blood groups, available units and incoming requests from a single dashboard.', device: 'web' },
  { name: 'Laboratory Panel', kind: 'Web', who: 'Diagnostic labs', desc: 'Tests, packages, home collection schedules and digital report uploads.', device: 'web' },
  { name: 'Master Admin Panel', kind: 'Web', who: 'Lifeline 360 operations', desc: 'Users, partners, KYC, bookings, payments, commissions and service-wise analytics — monitored centrally.', device: 'web' },
  { name: 'Lifeline 360 Website', kind: 'Web', who: 'Everyone', desc: 'The public front door for information and partner onboarding — the page you are on now.', device: 'web' },
];

// Section 9 — Membership. Prices are indicative until commercial plans are finalised.
export const plans = [
  {
    id: 'care',
    name: 'Care',
    for: 'For one person',
    monthly: 199,
    annual: 1999,
    benefits: ['Consultation benefits', 'Laboratory discounts', 'Digital membership card', 'Renewal & expiry reminders'],
  },
  {
    id: 'family',
    name: 'Family',
    for: 'For your household',
    monthly: 499,
    annual: 4999,
    featured: true,
    benefits: ['Everything in Care, for the family', 'Larger laboratory discounts', 'Priority healthcare services', 'Priority ambulance & caretaker requests', 'Medicine savings'],
  },
  {
    id: 'senior',
    name: 'Senior',
    for: 'For parents & elders',
    monthly: 799,
    annual: 7999,
    benefits: ['Everything in Family', 'Priority nursing & caretaker bookings', 'Home sample collection benefits', 'Dedicated calling support'],
  },
];

export const planMatrix = [
  ['Digital membership card', true, true, true],
  ['Consultation benefits', true, true, true],
  ['Laboratory discounts', true, true, true],
  ['Medicine savings', false, true, true],
  ['Priority healthcare services', false, true, true],
  ['Priority nursing & caretaker bookings', false, false, true],
  ['Renewal & expiry notifications', true, true, true],
];

export const membershipLifecycle = [
  ['Compare', 'Monthly and annual plans side by side.'],
  ['Purchase', 'Pay online through the secure payment gateway.'],
  ['Card', 'Your digital membership card appears in the app instantly.'],
  ['Benefits', 'Discounts and priority apply automatically on bookings.'],
  ['Renew', 'Reminders before expiry, renewal in one tap.'],
];

// Section 13 — partner onboarding
export const partnerRoles = [
  {
    id: 'driver',
    title: 'Ambulance driver',
    app: 'Driver / Ambulance App',
    service: 'ambulance',
    pitch: 'Receive emergency requests nearby, navigate with live GPS and get paid for every trip.',
    docs: ['Driving licence', 'Vehicle registration & details', 'Identity proof (KYC)'],
  },
  {
    id: 'nurse',
    title: 'Nurse or caretaker',
    app: 'Vendor + Caretaker App',
    service: 'nursing',
    pitch: 'Set your availability, accept home bookings that suit you and build a rated profile.',
    docs: ['Qualification / training certificate', 'Identity proof (KYC)', 'Address proof'],
  },
  {
    id: 'pharmacy',
    title: 'Medicine vendor',
    app: 'Vendor + Caretaker App',
    service: 'medicine',
    pitch: 'Put your pharmacy catalogue online, receive prescription orders and hand over for delivery.',
    docs: ['Drug licence', 'Business registration / GST', 'Identity proof (KYC)'],
  },
  {
    id: 'lab',
    title: 'Laboratory',
    app: 'Laboratory Panel',
    service: 'laboratory',
    pitch: 'List tests and packages, schedule home collections and deliver digital reports.',
    docs: ['Laboratory registration', 'Accreditation certificates (if any)', 'Identity proof (KYC)'],
  },
  {
    id: 'bloodbank',
    title: 'Blood bank',
    app: 'Blood Bank Panel',
    service: 'blood-bank',
    pitch: 'Keep blood group availability current and respond to requests from people nearby.',
    docs: ['Blood bank licence', 'Location & service area', 'Identity proof (KYC)'],
  },
];

export const faqs = [
  {
    group: 'Getting started',
    items: [
      ['What is Lifeline 360?', 'Lifeline 360 is a healthcare app that brings doctor consultation, nursing and caretakers, ambulance booking, medicine delivery, lab tests and blood bank services into one place, with membership plans and real-time tracking.'],
      ['How do I sign up?', 'Download the app and log in with your mobile number and a one-time password (OTP). You can then add your profile, addresses and an emergency contact.'],
      ['Which languages are supported?', 'You can choose Hindi or English during onboarding and switch any time from your profile settings. Menus, service categories, buttons and notifications are translated.'],
    ],
  },
  {
    group: 'Services',
    items: [
      ['How does ambulance booking work?', 'Raise a request from the app. A nearby driver accepts it, and you can follow the ambulance on a live map and see the trip status until you reach the hospital.'],
      ['Can I get lab samples collected at home?', 'Yes. Book a test or package, choose a home collection slot and receive your digital report in the app once the laboratory uploads it.'],
      ['How do I request blood?', 'Select a blood bank and blood group, check availability and raise a request. The blood bank responds through its panel and you receive a confirmation.'],
      ['Can I order medicines with a prescription?', 'Yes. Upload your prescription or browse a vendor’s catalogue. The pharmacy accepts, prepares and hands over your order for delivery.'],
    ],
  },
  {
    group: 'Privacy & calling',
    items: [
      ['What is call masking?', 'When you call a driver or provider, the call is routed through a masked number. Neither of you sees the other’s personal mobile number.'],
      ['Are partners verified?', 'Drivers, vendors, caretakers, laboratories and blood banks complete KYC and document verification, reviewed through the Master Admin Panel.'],
    ],
  },
  {
    group: 'Membership & payments',
    items: [
      ['What does membership include?', 'Plans are available monthly or annually and can include consultation benefits, laboratory discounts and priority healthcare services. You get a digital membership card in the app.'],
      ['How do I pay?', 'Payments are made online through a secure payment gateway. You will receive a notification for every payment.'],
      ['Will I be reminded before my membership expires?', 'Yes. You receive expiry notifications and can renew in a tap. Your membership history stays in the app.'],
    ],
  },
  {
    group: 'Partners',
    items: [
      ['Who can partner with Lifeline 360?', 'Ambulance drivers, medicine vendors, nurses and caretakers, laboratories and blood banks.'],
      ['What do I need to register?', 'Registration includes KYC and document verification. The exact documents depend on your role — see the Partners page.'],
    ],
  },
];

export const notifications = [
  'OTP', 'Booking confirmation', 'Ambulance request', 'Driver assignment', 'Nursing booking', 'Medicine order', 'Lab booking', 'Blood request', 'Report availability', 'Membership purchase & expiry', 'Payment', 'Order & booking status',
];
