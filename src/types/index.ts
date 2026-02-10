export type Drivetrain = 'FWD' | 'RWD' | 'AWD' | '4WD';
export type FuelType = 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
export type Transmission = 'Automatic' | 'Manual' | 'CVT';

export interface VehicleSpecs {
  engine: string;
  horsepower: number;
  torqueNm: number;
  seating: number;
  color: string;
  zeroToHundred: string;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  drivetrain: Drivetrain;
  fuel: FuelType;
  transmission: Transmission;
  primaryImage: string;
  gallery: string[];
  specs: VehicleSpecs;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  feedback: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface DealershipContact {
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  hours: string[];
}

export interface FinancingInput {
  principal: number;
  termMonths: number;
  annualRate: number;
}

export interface FinancingResult {
  monthlyPayment: number;
  totalInterest: number;
  totalCost: number;
  schedulePreview: Array<{
    month: number;
    principal: number;
    interest: number;
    balance: number;
  }>;
}

export interface TradeInInput {
  year: number;
  make: string;
  model: string;
  mileage: number;
  condition: 'Excellent' | 'Good' | 'Fair' | 'Needs Repair';
}

export interface TradeInResult {
  lowEstimate: number;
  highEstimate: number;
  assumptions: string[];
}
