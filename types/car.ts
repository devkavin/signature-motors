export type FuelType = "Petrol" | "Diesel" | "Hybrid" | "Electric";
export type Transmission = "Automatic" | "Manual";

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  drivetrain: string;
  fuelType: FuelType;
  transmission: Transmission;
  image: string;
  gallery: string[];
  specs: {
    engine: string;
    power: string;
    seats: number;
    color: string;
  };
  description: string;
}
