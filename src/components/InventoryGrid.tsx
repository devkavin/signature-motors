import Image from 'next/image';
import { Vehicle } from '@/types';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function InventoryGrid({ vehicles, onView }: { vehicles: Vehicle[]; onView: (vehicle: Vehicle) => void }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => (
        <Card key={vehicle.id} className="overflow-hidden">
          <Image src={vehicle.primaryImage} alt={`${vehicle.make} ${vehicle.model}`} width={1200} height={700} className="h-48 w-full object-cover" />
          <div className="space-y-3 p-4">
            <h3 className="text-lg font-semibold text-slate-900">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h3>
            <p className="text-sm text-slate-600">
              {vehicle.mileage.toLocaleString()} km • {vehicle.fuel} • {vehicle.transmission}
            </p>
            <p className="text-xl font-bold text-brand-900">LKR {vehicle.price.toLocaleString()}</p>
            <Button onClick={() => onView(vehicle)} className="w-full">
              View Details
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
