'use client';

import { ChangeEvent } from 'react';
import { fuelTypes, makes, transmissions, yearBounds } from '@/data/inventory';
import { Input } from '@/components/ui/Input';

export interface FilterState {
  maxPrice: number;
  make: string;
  minYear: number;
  maxYear: number;
  fuel: string;
  transmission: string;
}

export const defaultFilters: FilterState = {
  maxPrice: 30000000,
  make: 'All',
  minYear: yearBounds.min,
  maxYear: yearBounds.max,
  fuel: 'All',
  transmission: 'All'
};

export function InventoryFilters({ filters, onChange }: { filters: FilterState; onChange: (next: FilterState) => void }) {
  const update = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    onChange({ ...filters, [name]: ['maxPrice', 'minYear', 'maxYear'].includes(name) ? Number(value) : value });
  };

  return (
    <div className="grid gap-4 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-2 lg:grid-cols-3">
      <label className="text-sm font-medium text-slate-700">
        Max Price (LKR): {filters.maxPrice.toLocaleString()}
        <Input type="range" min={5000000} max={30000000} step={100000} name="maxPrice" value={filters.maxPrice} onChange={update} />
      </label>
      <label className="text-sm font-medium text-slate-700">
        Make
        <select name="make" value={filters.make} onChange={update} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
          <option>All</option>
          {makes.map((make) => (
            <option key={make}>{make}</option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium text-slate-700">
        Fuel Type
        <select name="fuel" value={filters.fuel} onChange={update} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
          <option>All</option>
          {fuelTypes.map((fuel) => (
            <option key={fuel}>{fuel}</option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium text-slate-700">
        Transmission
        <select
          name="transmission"
          value={filters.transmission}
          onChange={update}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
        >
          <option>All</option>
          {transmissions.map((transmission) => (
            <option key={transmission}>{transmission}</option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium text-slate-700">
        Min Year
        <Input type="number" name="minYear" value={filters.minYear} min={yearBounds.min} max={yearBounds.max} onChange={update} />
      </label>
      <label className="text-sm font-medium text-slate-700">
        Max Year
        <Input type="number" name="maxYear" value={filters.maxYear} min={yearBounds.min} max={yearBounds.max} onChange={update} />
      </label>
    </div>
  );
}
