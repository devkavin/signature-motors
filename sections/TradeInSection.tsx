"use client";

import { useMemo, useState } from "react";
import { tradeInCatalog } from "@/data/tradein";
import { estimateTradeIn } from "@/utils/tradein";
import { currencyLKR } from "@/utils/format";

const conditions = ["Excellent", "Good", "Fair", "Poor"];

export default function TradeInSection() {
  const makes = Object.keys(tradeInCatalog);
  const [year, setYear] = useState(2018);
  const [make, setMake] = useState(makes[0]);
  const [model, setModel] = useState(tradeInCatalog[makes[0]][0]);
  const [mileage, setMileage] = useState(85000);
  const [condition, setCondition] = useState("Good");

  const range = useMemo(() => estimateTradeIn({ year, make, mileage, condition }), [year, make, mileage, condition]);

  return (
    <section id="tradein" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <h2 className="section-title">Trade-in estimator</h2>
      <p className="section-subtitle">Get an instant estimate range before your showroom appraisal.</p>

      <div className="mt-8 grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-card lg:grid-cols-2">
        <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <label className="text-sm">Year
            <input type="number" min={2005} max={2024} value={year} onChange={(e) => setYear(Number(e.target.value))} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </label>
          <label className="text-sm">Make
            <select value={make} onChange={(e) => {const nextMake = e.target.value; setMake(nextMake); setModel(tradeInCatalog[nextMake][0]);}} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2">
              {makes.map((m) => <option key={m}>{m}</option>)}
            </select>
          </label>
          <label className="text-sm">Model
            <select value={model} onChange={(e) => setModel(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2">
              {tradeInCatalog[make].map((m) => <option key={m}>{m}</option>)}
            </select>
          </label>
          <label className="text-sm">Mileage (km)
            <input type="number" min={0} value={mileage} onChange={(e) => setMileage(Number(e.target.value))} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </label>
          <label className="text-sm sm:col-span-2">Condition
            <select value={condition} onChange={(e) => setCondition(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2">
              {conditions.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
        </form>
        <div className="rounded-xl bg-brand-900 p-6 text-white">
          <p className="text-sm uppercase tracking-wide text-brand-50">Estimated trade-in value</p>
          <p className="mt-3 text-3xl font-bold">{currencyLKR(range.min)} – {currencyLKR(range.max)}</p>
          <p className="mt-3 text-sm text-slate-200">Final offer may vary after physical inspection, service history review, and market-demand validation for the {year} {make} {model}.</p>
        </div>
      </div>
    </section>
  );
}
