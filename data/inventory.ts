import { Car } from "@/types/car";

const modelImage = (query: string, sig: number) =>
  `https://source.unsplash.com/1600x900/?${encodeURIComponent(query)}&sig=${sig}`;

export const inventory: Car[] = [
  {
    id: "1",
    make: "Toyota",
    model: "RAV4 Hybrid",
    year: 2022,
    price: 16450000,
    mileage: 18200,
    drivetrain: "AWD",
    fuelType: "Hybrid",
    transmission: "Automatic",
    image: modelImage("2022 Toyota RAV4 Hybrid", 101),
    gallery: [
      modelImage("2022 Toyota RAV4 Hybrid front", 102),
      modelImage("2022 Toyota RAV4 Hybrid side", 103),
      modelImage("2022 Toyota RAV4 Hybrid rear", 104),
      modelImage("2022 Toyota RAV4 Hybrid interior", 105)
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
    image: modelImage("2021 BMW 330i M Sport", 201),
    gallery: [
      modelImage("2021 BMW 330i M Sport front", 202),
      modelImage("2021 BMW 330i M Sport side", 203),
      modelImage("2021 BMW 330i M Sport rear", 204),
      modelImage("2021 BMW 330i M Sport interior", 205)
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
    image: modelImage("2020 Mercedes-Benz GLC 200", 301),
    gallery: [
      modelImage("2020 Mercedes-Benz GLC 200 front", 302),
      modelImage("2020 Mercedes-Benz GLC 200 side", 303),
      modelImage("2020 Mercedes-Benz GLC 200 rear", 304),
      modelImage("2020 Mercedes-Benz GLC 200 interior", 305)
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
    image: modelImage("2023 Honda Civic RS", 401),
    gallery: [
      modelImage("2023 Honda Civic RS front", 402),
      modelImage("2023 Honda Civic RS side", 403),
      modelImage("2023 Honda Civic RS rear", 404),
      modelImage("2023 Honda Civic RS interior", 405)
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
    image: modelImage("2022 Kia Sportage", 501),
    gallery: [
      modelImage("2022 Kia Sportage front", 502),
      modelImage("2022 Kia Sportage side", 503),
      modelImage("2022 Kia Sportage rear", 504),
      modelImage("2022 Kia Sportage interior", 505)
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
    image: modelImage("2021 Nissan Leaf e+", 601),
    gallery: [
      modelImage("2021 Nissan Leaf e+ front", 602),
      modelImage("2021 Nissan Leaf e+ side", 603),
      modelImage("2021 Nissan Leaf e+ rear", 604),
      modelImage("2021 Nissan Leaf e+ interior", 605)
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
    image: modelImage("2021 Audi Q5 S line", 701),
    gallery: [
      modelImage("2021 Audi Q5 S line front", 702),
      modelImage("2021 Audi Q5 S line side", 703),
      modelImage("2021 Audi Q5 S line rear", 704),
      modelImage("2021 Audi Q5 S line interior", 705)
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
    image: modelImage("2020 Mazda CX-5", 801),
    gallery: [
      modelImage("2020 Mazda CX-5 front", 802),
      modelImage("2020 Mazda CX-5 side", 803),
      modelImage("2020 Mazda CX-5 rear", 804),
      modelImage("2020 Mazda CX-5 interior", 805)
    ],
    specs: { engine: "2.5L SkyActiv", power: "187 hp", seats: 5, color: "Soul Red" },
    description:
      "Mazda's CX-5 is known for comfort and upscale design at a smart price point. This car remains in excellent condition with full inspections completed by our certified team."
  },
  {
    id: "9",
    make: "Hyundai",
    model: "Santa Fe Hybrid",
    year: 2023,
    price: 18750000,
    mileage: 12300,
    drivetrain: "AWD",
    fuelType: "Hybrid",
    transmission: "Automatic",
    image: modelImage("2023 Hyundai Santa Fe Hybrid", 901),
    gallery: [
      modelImage("2023 Hyundai Santa Fe Hybrid front", 902),
      modelImage("2023 Hyundai Santa Fe Hybrid side", 903),
      modelImage("2023 Hyundai Santa Fe Hybrid rear", 904),
      modelImage("2023 Hyundai Santa Fe Hybrid interior", 905)
    ],
    specs: { engine: "1.6L Turbo Hybrid", power: "226 hp", seats: 7, color: "Titan Gray" },
    description:
      "A spacious seven-seater suited for growing families and long drives. This Santa Fe hybrid combines fuel savings with modern tech including blind-spot monitoring and smart cruise control."
  }
];

export const makes = [...new Set(inventory.map((car) => car.make))];
