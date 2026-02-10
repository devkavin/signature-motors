import { DealershipContact, FaqItem, FuelType, Review, Transmission, Vehicle } from '@/types';

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
    primaryImage: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592853625601-bb9d23da12fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: { engine: '1.8L Hybrid', horsepower: 121, torqueNm: 142, seating: 5, color: 'Pearl White', zeroToHundred: '10.8s' },
    description:
      'This Corolla Cross Hybrid is a dependable urban SUV that excels in fuel efficiency without sacrificing comfort. The elevated ride height, adaptive cruise control, and quiet cabin make it ideal for Colombo commuting and weekend family trips. It has complete service records and a clean interior with very light wear.'
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
    primaryImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: { engine: '1.5L Turbo', horsepower: 176, torqueNm: 240, seating: 5, color: 'Modern Steel Gray', zeroToHundred: '8.5s' },
    description:
      'The Civic RS balances sporty character with premium cabin quality and excellent road manners. Its turbocharged engine provides responsive acceleration while still returning practical consumption figures. The car features Apple CarPlay, lane keep assist, and freshly replaced tires.'
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
    primaryImage: 'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: { engine: '2.0L TwinPower Turbo', horsepower: 184, torqueNm: 300, seating: 5, color: 'Alpine White', zeroToHundred: '7.1s' },
    description:
      'The 320i M Sport offers precise handling, composed high-speed stability, and a refined executive interior. It includes adaptive LED headlights, paddle shifters, and a digital cockpit that feels modern and intuitive. This unit has been dealer maintained and kept in excellent cosmetic condition.'
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
    primaryImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1626072778346-0abcf28a2d7d?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: { engine: '1.6L Turbo', horsepower: 156, torqueNm: 250, seating: 5, color: 'Cosmos Black', zeroToHundred: '8.6s' },
    description:
      'This compact luxury crossover is ideal for buyers who want city-friendly dimensions with upscale appointments. The cabin is well insulated and includes dual-zone climate control, a panoramic sunroof, and power-adjustable leather seats. It has a full inspection report from Signature Motors technicians.'
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
    primaryImage: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: { engine: '2.5L Petrol', horsepower: 169, torqueNm: 233, seating: 7, color: 'Brilliant Silver', zeroToHundred: '9.8s' },
    description:
      'The X-Trail combines practical three-row flexibility with dependable all-weather traction. It is suited for school runs and long-distance travel thanks to its spacious cargo area and comfortable suspension setup. This example has a recent battery replacement and up-to-date service history.'
  },
  {
    id: 'veh-6',
    make: 'Audi',
    model: 'A4 35 TFSI',
    year: 2022,
    price: 22400000,
    mileage: 16000,
    drivetrain: 'FWD',
    fuel: 'Petrol',
    transmission: 'Automatic',
    primaryImage: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: { engine: '2.0L TFSI', horsepower: 150, torqueNm: 270, seating: 5, color: 'Daytona Gray', zeroToHundred: '8.9s' },
    description:
      'The Audi A4 delivers understated luxury, excellent build quality, and confidence-inspiring highway comfort. Features include virtual cockpit instrumentation, ambient lighting, and smart keyless access. It remains under low mileage and has undergone a comprehensive detailing package.'
  },
  {
    id: 'veh-7',
    make: 'Mitsubishi',
    model: 'Montero Sport',
    year: 2018,
    price: 13250000,
    mileage: 62800,
    drivetrain: '4WD',
    fuel: 'Diesel',
    transmission: 'Automatic',
    primaryImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1469285994282-454ceb49e63d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: { engine: '2.4L Turbo Diesel', horsepower: 181, torqueNm: 430, seating: 7, color: 'Quartz Brown', zeroToHundred: '11.2s' },
    description:
      'Built for rugged reliability, the Montero Sport is a capable SUV for mixed city and off-road use. The ladder-frame construction and diesel torque make towing and hill-country travel effortless. Inside, you get roomy seating and rear climate vents for passenger comfort.'
  },
  {
    id: 'veh-8',
    make: 'Kia',
    model: 'EV6 GT-Line',
    year: 2023,
    price: 26800000,
    mileage: 9800,
    drivetrain: 'AWD',
    fuel: 'Electric',
    transmission: 'Automatic',
    primaryImage: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1622199433553-3e0c4e27c0a7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1626072557464-90403b87f8f1?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: { engine: 'Dual Motor Electric', horsepower: 321, torqueNm: 605, seating: 5, color: 'Runway Red', zeroToHundred: '5.2s' },
    description:
      'The EV6 GT-Line brings cutting-edge EV performance with quick acceleration and futuristic styling. It supports fast charging and includes a premium driver assistance suite for confidence in urban traffic. This near-new unit has battery diagnostics and warranty coverage documentation available.'
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
    primaryImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1612825173281-9a193378527e?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: { engine: '2.0L Skyactiv-G', horsepower: 156, torqueNm: 200, seating: 5, color: 'Machine Gray', zeroToHundred: '9.2s' },
    description:
      'The CX-5 is known for premium interior finishes, smooth handling, and excellent ride comfort. This High grade variant includes leather upholstery, powered tailgate, and advanced safety systems. It is a well-rounded crossover for buyers who appreciate quality and everyday practicality.'
  }
];

export const makes = Array.from(new Set(inventory.map((vehicle) => vehicle.make)));
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
