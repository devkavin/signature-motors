import { Car } from "@/types/car";

export const inventory: Car[] = [
  {
    id: "1",
    make: "Toyota",
    model: "RAV4",
    year: 2022,
    price: 16450000,
    mileage: 18200,
    drivetrain: "AWD",
    fuelType: "Hybrid",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { engine: "2.5L Hybrid", power: "219 hp", seats: 5, color: "Pearl White" },
    description:
      "This one-owner RAV4 Hybrid blends efficiency with confidence on Sri Lankan roads. It has a complete service history, low mileage, and modern safety systems ideal for family and city driving."
  },
  {
    id: "2",
    make: "BMW",
    model: "330i M Sport",
    year: 2021,
    price: 26900000,
    mileage: 24100,
    drivetrain: "RWD",
    fuelType: "Petrol",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514316703755-dca7d7d9d882?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { engine: "2.0L Turbo", power: "255 hp", seats: 5, color: "Alpine White" },
    description:
      "The 330i M Sport offers dynamic handling with premium interior comfort. This unit includes adaptive LED lighting, a digital cockpit, and smooth eight-speed transmission performance."
  },
  {
    id: "3",
    make: "Mercedes-Benz",
    model: "GLC 200",
    year: 2020,
    price: 29400000,
    mileage: 35800,
    drivetrain: "AWD",
    fuelType: "Petrol",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { engine: "2.0L Turbo", power: "194 hp", seats: 5, color: "Obsidian Black" },
    description:
      "A refined SUV with elevated ride comfort and practical cargo space. Signature Motors has inspected this GLC thoroughly, making it a reliable premium choice for daily commuting and weekend travel."
  },
  {
    id: "4",
    make: "Honda",
    model: "Civic RS",
    year: 2023,
    price: 15300000,
    mileage: 8900,
    drivetrain: "FWD",
    fuelType: "Petrol",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616789916434-8f0f2f9f9c27?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { engine: "1.5L Turbo", power: "180 hp", seats: 5, color: "Sonic Gray" },
    description:
      "This nearly new Civic RS combines sporty styling with dependable Honda engineering. Ideal for buyers seeking strong fuel economy, sharp handling, and a modern cabin with wireless connectivity."
  },
  {
    id: "5",
    make: "Kia",
    model: "Sportage",
    year: 2022,
    price: 14900000,
    mileage: 22500,
    drivetrain: "FWD",
    fuelType: "Diesel",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1553260188-75a8d6205b6c?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { engine: "2.0L CRDi", power: "184 hp", seats: 5, color: "Steel Gray" },
    description:
      "The Sportage is popular among Colombo buyers for its comfort and spacious layout. This vehicle includes lane assist, reverse camera, and dual-zone climate control for effortless ownership."
  },
  {
    id: "6",
    make: "Nissan",
    model: "Leaf e+",
    year: 2021,
    price: 13600000,
    mileage: 19600,
    drivetrain: "FWD",
    fuelType: "Electric",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1593941707882-a56bbc8df906?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617886322253-4ac4f32f6f13?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { engine: "62 kWh Battery", power: "214 hp", seats: 5, color: "Arctic White" },
    description:
      "A practical electric hatchback with smooth instant torque and low running costs. This Leaf e+ has excellent battery health and is ready for urban commuting with home and fast charging support."
  },
  {
    id: "7",
    make: "Audi",
    model: "Q5 S line",
    year: 2021,
    price: 31800000,
    mileage: 30200,
    drivetrain: "AWD",
    fuelType: "Petrol",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1549925862-990a6fda31f1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { engine: "2.0L TFSI", power: "261 hp", seats: 5, color: "Navarra Blue" },
    description:
      "This Q5 S line delivers premium SUV versatility with quattro confidence. It features virtual cockpit, panoramic roof, and refined cabin materials for a truly executive drive."
  },
  {
    id: "8",
    make: "Mazda",
    model: "CX-5",
    year: 2020,
    price: 14200000,
    mileage: 41100,
    drivetrain: "AWD",
    fuelType: "Petrol",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571987502536-0f5f70f00df6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613214150381-1902fa15f5b0?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { engine: "2.5L SkyActiv", power: "187 hp", seats: 5, color: "Soul Red" },
    description:
      "Mazda's CX-5 is known for comfort and upscale design at a smart price point. This car remains in excellent condition with full inspections completed by our certified team."
  },
  {
    id: "9",
    make: "Hyundai",
    model: "Santa Fe",
    year: 2023,
    price: 18750000,
    mileage: 12300,
    drivetrain: "AWD",
    fuelType: "Hybrid",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1597007030739-6d2e1b2b6d5b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617469767053-d3b523a0b838?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { engine: "1.6L Turbo Hybrid", power: "226 hp", seats: 7, color: "Titan Gray" },
    description:
      "A spacious seven-seater suited for growing families and long drives. This Santa Fe hybrid combines fuel savings with modern tech including blind-spot monitoring and smart cruise control."
  }
];

export const makes = [...new Set(inventory.map((car) => car.make))];
