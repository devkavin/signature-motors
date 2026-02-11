"use client";

import { useMemo, useState } from "react";
import InventoryCard from "@/components/InventoryCard";
import CarModal from "@/components/CarModal";
import { inventory, makes } from "@/data/inventory";
import { Car, FuelType, Transmission } from "@/types/car";

export default function InventorySection() {
  const [selected, setSelected] = useState<Car | null>(null);
  const [maxPrice, setMaxPrice] = useState(33000000);
  const [make, setMake] = useState("All");
  const [yearMin, setYearMin] = useState(2020);
  const [yearMax, setYearMax] = useState(2024);
  const [fuel, setFuel] = useState<FuelType | "All">("All");
  const [transmission, setTransmission] = useState<Transmission | "All">("All");

  const filtered = useMemo(
    () =>
      inventory.filter((car) =>
        car.price <= maxPrice &&
        (make === "All" || car.make === make) &&
        car.year >= yearMin &&
        car.year <= yearMax &&
        (fuel === "All" || car.fuelType === fuel) &&
        (transmission === "All" || car.transmission === transmission)
      ),
    [maxPrice, make, yearMin, yearMax, fuel, transmission]
  );

  return (
    <section id="inventory" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <h2 className="section-title">Choose the drive that signs your story.</h2>
      <p className="section-subtitle">Filter by budget, brand, and performance to discover vehicles curated for your next chapter.</p>

      <div className="mt-8 grid gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur md:grid-cols-3 lg:grid-cols-6">
        <label className="text-sm">Max price (LKR)
          <input type="range" min={9000000} max={33000000} step={250000} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full" />
          <span className="text-xs text-slate-400">{maxPrice.toLocaleString("en-LK")}</span>
        </label>
        <label className="text-sm">Make
          <select value={make} onChange={(e) => setMake(e.target.value)} className="mt-1 w-full rounded-md border border-white/20 bg-slate-900/60 px-2 py-2">
            <option>All</option>
            {makes.map((m) => <option key={m}>{m}</option>)}
          </select>
        </label>
        <label className="text-sm">Min year
          <input type="number" value={yearMin} min={2018} max={2024} onChange={(e) => setYearMin(Number(e.target.value))} className="mt-1 w-full rounded-md border border-white/20 bg-slate-900/60 px-2 py-2" />
        </label>
        <label className="text-sm">Max year
          <input type="number" value={yearMax} min={2018} max={2024} onChange={(e) => setYearMax(Number(e.target.value))} className="mt-1 w-full rounded-md border border-white/20 bg-slate-900/60 px-2 py-2" />
        </label>
        <label className="text-sm">Fuel
          <select value={fuel} onChange={(e) => setFuel(e.target.value as FuelType | "All")} className="mt-1 w-full rounded-md border border-white/20 bg-slate-900/60 px-2 py-2">
            <option>All</option>
            <option>Petrol</option><option>Diesel</option><option>Hybrid</option><option>Electric</option>
          </select>
        </label>
        <label className="text-sm">Transmission
          <select value={transmission} onChange={(e) => setTransmission(e.target.value as Transmission | "All")} className="mt-1 w-full rounded-md border border-white/20 bg-slate-900/60 px-2 py-2">
            <option>All</option><option>Automatic</option><option>Manual</option>
          </select>
        </label>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((car) => (
          <InventoryCard key={car.id} car={car} onSelect={setSelected} />
        ))}
      </div>

      <CarModal car={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
