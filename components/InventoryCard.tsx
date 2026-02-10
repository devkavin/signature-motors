import Image from "next/image";
import { Car } from "@/types/car";
import { currencyLKR, numberFormat } from "@/utils/format";

export default function InventoryCard({ car, onSelect }: { car: Car; onSelect: (car: Car) => void }) {
  return (
    <button
      onClick={() => onSelect(car)}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-card transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-48 w-full">
        <Image src={car.image} alt={`${car.make} ${car.model}`} fill className="object-cover" />
      </div>
      <div className="space-y-2 p-4">
        <h3 className="text-lg font-semibold">{car.year} {car.make} {car.model}</h3>
        <p className="text-xl font-bold text-brand-700">{currencyLKR(car.price)}</p>
        <p className="text-sm text-slate-600">{numberFormat(car.mileage)} km • {car.drivetrain} • {car.fuelType} • {car.transmission}</p>
      </div>
    </button>
  );
}
