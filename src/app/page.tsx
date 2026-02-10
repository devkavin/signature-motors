'use client';

import { useMemo, useState } from 'react';
import { inventory } from '@/data/inventory';
import { Vehicle } from '@/types';
import { HeaderNav } from '@/components/HeaderNav';
import { Hero3D } from '@/components/Hero3D';
import { defaultFilters, InventoryFilters } from '@/components/InventoryFilters';
import { InventoryGrid } from '@/components/InventoryGrid';
import { VehicleModal } from '@/components/VehicleModal';
import { FinancingCalculator } from '@/components/FinancingCalculator';
import { TradeInEstimator } from '@/components/TradeInEstimator';
import { ReviewsSection } from '@/components/ReviewsSection';
import { FaqAccordion } from '@/components/FaqAccordion';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const [filters, setFilters] = useState(defaultFilters);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const filteredInventory = useMemo(() => {
    return inventory.filter((vehicle) => {
      const matchPrice = vehicle.price <= filters.maxPrice;
      const matchMake = filters.make === 'All' || vehicle.make === filters.make;
      const matchYear = vehicle.year >= filters.minYear && vehicle.year <= filters.maxYear;
      const matchFuel = filters.fuel === 'All' || vehicle.fuel === filters.fuel;
      const matchTransmission = filters.transmission === 'All' || vehicle.transmission === filters.transmission;
      return [matchPrice, matchMake, matchYear, matchFuel, matchTransmission].every(Boolean);
    });
  }, [filters]);

  return (
    <main>
      <HeaderNav />
      <Hero3D />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12">
        <section id="inventory" className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Inventory</h2>
          <InventoryFilters filters={filters} onChange={setFilters} />
          <p className="text-sm text-slate-600">Showing {filteredInventory.length} of {inventory.length} vehicles</p>
          <InventoryGrid vehicles={filteredInventory} onView={setSelectedVehicle} />
        </section>

        <FinancingCalculator />
        <TradeInEstimator />
        <ReviewsSection />
        <FaqAccordion />
        <ContactSection />
      </div>
      <Footer />
      <VehicleModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
    </main>
  );
}
