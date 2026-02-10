import { DealershipContact, FaqItem, FuelType, Review, Transmission, Vehicle } from '@/types';

const modelImageSet = (query: string) => {
  const clean = encodeURIComponent(query);
  return {
    primaryImage: `https://source.unsplash.com/1200x700/?${clean},car`,
    gallery: [
      `https://source.unsplash.com/1200x700/?${clean},front-view`,
      `https://source.unsplash.com/1200x700/?${clean},interior`,
      `https://source.unsplash.com/1200x700/?${clean},rear-view`,
      `https://source.unsplash.com/1200x700/?${clean},dashboard`
    ]
  };
};

export const inventory: Vehicle[] = [
  {
    id: 'veh-1',
    make: 'Toyota',
    model: 'Corolla Cross',
    year: 2022,
    price: 12900000,
    mileage: 18500,
    drivetrain: 'FWD',
    fuel: 'Hybrid',
    transmission: 'CVT',
    ...modelImageSet('toyota corolla cross'),
    specs: { engine: '1.8L Hybrid', horsepower: 121, torqueNm: 142, seating: 5, color: 'Pearl White', zeroToHundred: '10.8s' },
    description:
      'This Corolla Cross Hybrid is a dependable urban SUV that excels in fuel efficiency without sacrificing comfort. The elevated ride height, adaptive cruise control, and quiet cabin make it ideal for Colombo commuting and weekend family trips.'
  },
  {
    id: 'veh-2',
    make: 'Honda',
    model: 'Civic RS',
    year: 2021,
    price: 11450000,
    mileage: 22400,
    drivetrain: 'FWD',
    fuel: 'Petrol',
    transmission: 'Automatic',
    ...modelImageSet('honda civic rs'),
    specs: { engine: '1.5L Turbo', horsepower: 176, torqueNm: 240, seating: 5, color: 'Modern Steel Gray', zeroToHundred: '8.5s' },
    description:
      'The Civic RS balances sporty character with premium cabin quality and excellent road manners. Its turbocharged engine provides responsive acceleration while still returning practical consumption figures.'
  },
  {
    id: 'veh-3',
    make: 'BMW',
    model: '320i M Sport',
    year: 2020,
    price: 19800000,
    mileage: 31200,
    drivetrain: 'RWD',
    fuel: 'Petrol',
    transmission: 'Automatic',
    ...modelImageSet('bmw 320i m sport'),
    specs: { engine: '2.0L TwinPower Turbo', horsepower: 184, torqueNm: 300, seating: 5, color: 'Alpine White', zeroToHundred: '7.1s' },
    description:
      'The 320i M Sport offers precise handling, composed high-speed stability, and a refined executive interior. It includes adaptive LED headlights, paddle shifters, and a digital cockpit that feels modern and intuitive.'
  },
  {
    id: 'veh-4',
    make: 'Mercedes-Benz',
    model: 'GLA 200',
    year: 2019,
    price: 17650000,
    mileage: 40800,
    drivetrain: 'AWD',
    fuel: 'Petrol',
    transmission: 'Automatic',
    ...modelImageSet('mercedes benz gla 200'),
    specs: { engine: '1.6L Turbo', horsepower: 156, torqueNm: 250, seating: 5, color: 'Cosmos Black', zeroToHundred: '8.6s' },
    description:
      'This compact luxury crossover is ideal for buyers who want city-friendly dimensions with upscale appointments. The cabin is well insulated and includes dual-zone climate control, a panoramic sunroof, and power-adjustable leather seats.'
  },
  {
    id: 'veh-5',
    make: 'Nissan',
    model: 'X-Trail',
    year: 2020,
    price: 9800000,
    mileage: 45500,
    drivetrain: '4WD',
    fuel: 'Petrol',
    transmission: 'CVT',
    ...modelImageSet('nissan x-trail'),
    specs: { engine: '2.5L Petrol', horsepower: 169, torqueNm: 233, seating: 7, color: 'Brilliant Silver', zeroToHundred: '9.8s' },
    description:
      'The X-Trail combines practical three-row flexibility with dependable performance. Its roomy cabin and elevated visibility are perfect for families that split their week between city traffic and outstation travel.'
  },
  {
    id: 'veh-6',
    make: 'Audi',
    model: 'A4 35 TFSI',
    year: 2021,
    price: 20500000,
    mileage: 27100,
    drivetrain: 'FWD',
    fuel: 'Petrol',
    transmission: 'Automatic',
    ...modelImageSet('audi a4 35 tfsi'),
    specs: { engine: '2.0L TFSI', horsepower: 150, torqueNm: 270, seating: 5, color: 'Glacier White', zeroToHundred: '8.1s' },
    description:
      'The A4 35 TFSI brings understated luxury with a smooth ride and high-quality digital cockpit. This sedan is excellent for buyers who prioritize refinement, comfort, and effortless highway cruising.'
  },
  {
    id: 'veh-7',
    make: 'Mitsubishi',
    model: 'Montero Sport',
    year: 2018,
    price: 10500000,
    mileage: 63800,
    drivetrain: '4WD',
    fuel: 'Diesel',
    transmission: 'Automatic',
    ...modelImageSet('mitsubishi montero sport'),
    specs: { engine: '2.4L MIVEC Turbo Diesel', horsepower: 181, torqueNm: 430, seating: 7, color: 'Titanium Gray', zeroToHundred: '11.0s' },
    description:
      'This Montero Sport is built for long-distance comfort and rugged road capability. It features a strong diesel engine, commanding driving position, and practical seven-seat layout for larger families.'
  },
  {
    id: 'veh-8',
    make: 'Kia',
    model: 'EV6 GT-Line',
    year: 2023,
    price: 23800000,
    mileage: 9800,
    drivetrain: 'AWD',
    fuel: 'Electric',
    transmission: 'Automatic',
    ...modelImageSet('kia ev6 gt-line'),
    specs: { engine: 'Dual Motor Electric', horsepower: 321, torqueNm: 605, seating: 5, color: 'Runway Red', zeroToHundred: '5.2s' },
    description:
      'The EV6 GT-Line brings cutting-edge EV performance with quick acceleration and futuristic styling. It supports fast charging and includes a premium driver assistance suite for confidence in urban traffic.'
  },
  {
    id: 'veh-9',
    make: 'Mazda',
    model: 'CX-5 High',
    year: 2021,
    price: 12100000,
    mileage: 27400,
    drivetrain: 'AWD',
    fuel: 'Petrol',
    transmission: 'Automatic',
    ...modelImageSet('mazda cx-5 high'),
    specs: { engine: '2.0L Skyactiv-G', horsepower: 156, torqueNm: 200, seating: 5, color: 'Machine Gray', zeroToHundred: '9.2s' },
    description:
      'The CX-5 is known for premium interior finishes, smooth handling, and excellent ride comfort. This High grade variant includes leather upholstery, powered tailgate, and advanced safety systems.'
  }
];

export const makes = Array.from(new Set(inventory.map((vehicle) => vehicle.make)));
export const makeModelMap = inventory.reduce<Record<string, string[]>>((acc, vehicle) => {
  const models = acc[vehicle.make] ?? [];
  if (!models.includes(vehicle.model)) models.push(vehicle.model);
  acc[vehicle.make] = models;
  return acc;
}, {});
export const fuelTypes: FuelType[] = ['Petrol', 'Diesel', 'Hybrid', 'Electric'];
export const transmissions: Transmission[] = ['Automatic', 'Manual', 'CVT'];
export const yearBounds = {
  min: Math.min(...inventory.map((vehicle) => vehicle.year)),
  max: Math.max(...inventory.map((vehicle) => vehicle.year))
};

export const reviews: Review[] = [
  { id: 'r1', name: 'Nadeesha Perera', date: '2025-01-08', rating: 5, feedback: 'The team explained every financing option clearly and never pressured us. We drove home in our CX-5 the same day with complete confidence.' },
  { id: 'r2', name: 'Kasun Jayawardena', date: '2024-12-14', rating: 5, feedback: 'Signature Motors had the cleanest used inventory we saw in Colombo. Their inspection report was transparent and detailed.' },
  { id: 'r3', name: 'Iresha Fernando', date: '2024-11-20', rating: 4, feedback: 'Great after-sales follow-up and very polite staff. Trade-in offer was fair and the paperwork process was faster than expected.' },
  { id: 'r4', name: 'Sajith Wickramasinghe', date: '2024-10-02', rating: 5, feedback: 'Booked a test drive online and everything was ready when I arrived. The Civic was exactly as advertised with no surprises.' },
  { id: 'r5', name: 'Ameesha Silva', date: '2024-09-11', rating: 4, feedback: 'I appreciated how they walked me through EV charging setup before delivery. Professional experience from inquiry to handover.' },
  { id: 'r6', name: 'Dilhan Jayasekara', date: '2024-08-06', rating: 5, feedback: 'Best dealership experience I have had. Clean showroom, honest pricing, and responsive communication throughout the week.' }
];

export const faqItems: FaqItem[] = [
  { id: 'f1', question: 'Can I reserve a vehicle before visiting the showroom?', answer: 'Yes. You can submit a reserve test drive request and our advisors will hold the vehicle for a limited window while you confirm details.' },
  { id: 'f2', question: 'Do you accept trade-ins from all brands?', answer: 'We accept most brands, including Japanese, European, and selected EV models. Final acceptance depends on inspection, mileage, and service history.' },
  { id: 'f3', question: 'What financing terms are available?', answer: 'Financing partners typically provide terms from 12 to 84 months. Rates vary by profile, down payment, and selected lender promotions.' },
  { id: 'f4', question: 'Are your vehicles inspected before listing?', answer: 'Every vehicle goes through a multi-point mechanical and cosmetic inspection. Any major findings are disclosed before purchase.' },
  { id: 'f5', question: 'Can I request an independent inspection?', answer: 'Absolutely. You are welcome to bring a trusted mechanic or arrange a third-party inspection appointment with us.' },
  { id: 'f6', question: 'Do you provide warranty options?', answer: 'Yes, extended warranty packages are available on eligible vehicles. Coverage details depend on age, mileage, and drivetrain type.' },
  { id: 'f7', question: 'How long does delivery take after payment?', answer: 'Most deliveries are completed within 2 to 5 business days, subject to registration processing and final detailing.' },
  { id: 'f8', question: 'Where is Signature Motors located?', answer: 'Our showroom is in Colombo, Sri Lanka, with easy access from Baseline Road. Full location details are available in the contact section below.' }
];

export const dealershipContact: DealershipContact = {
  name: 'Signature Motors',
  address: '102 Galle Road, Bambalapitiya',
  city: 'Colombo 04',
  country: 'Sri Lanka',
  phone: '+94 11 255 7788',
  email: 'hello@signaturemotors.lk',
  hours: ['Mon - Fri: 8:30 AM - 6:30 PM', 'Saturday: 9:00 AM - 5:00 PM', 'Sunday: 10:00 AM - 3:00 PM (By Appointment)']
};
