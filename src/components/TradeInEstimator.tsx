'use client';

import { useMemo, useState } from 'react';
import { makeModelMap, makes } from '@/data/inventory';
import { TradeInInput, TradeInResult } from '@/types';
import { Input } from '@/components/ui/Input';

function estimateTradeIn(input: TradeInInput): TradeInResult {
  const age = new Date().getFullYear() - input.year;
  const baseValue = Math.max(2500000, 15000000 - age * 650000 - input.mileage * 8);
  const conditionMultiplier = {
    Excellent: 1.08,
    Good: 1,
    Fair: 0.9,
    'Needs Repair': 0.78
  }[input.condition];
  const brandModifier = ['Toyota', 'Honda', 'BMW', 'Mercedes-Benz', 'Audi'].includes(input.make) ? 1.05 : 0.96;

  const adjusted = baseValue * conditionMultiplier * brandModifier;
  return {
    lowEstimate: Math.round(adjusted * 0.94),
    highEstimate: Math.round(adjusted * 1.06),
    assumptions: [
      'Estimate assumes clean title and no unresolved mechanical faults.',
      'Final quote depends on inspection, service records, and tire/body condition.',
      'Mileage and model demand in Colombo are weighted in the valuation.'
    ]
  };
}

const initialMake = makes[0] ?? 'Toyota';
const initialModel = makeModelMap[initialMake]?.[0] ?? 'Corolla Cross';

export function TradeInEstimator() {
  const [input, setInput] = useState<TradeInInput>({ year: 2019, make: initialMake, model: initialModel, mileage: 55000, condition: 'Good' });
  const result = useMemo(() => estimateTradeIn(input), [input]);
  const availableModels = makeModelMap[input.make] ?? [];

  const onMakeChange = (make: string) => {
    const nextModel = makeModelMap[make]?.[0] ?? '';
    setInput((current) => ({ ...current, make, model: nextModel }));
  };

  return (
    <section id="trade-in" className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900">Trade-in Estimator</h2>
      <div className="grid gap-4 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-2">
        <label className="text-sm font-medium">Year<Input type="number" value={input.year} onChange={(e) => setInput({ ...input, year: Number(e.target.value) })} /></label>
        <label className="text-sm font-medium">
          Make
          <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" value={input.make} onChange={(e) => onMakeChange(e.target.value)}>
            {makes.map((make) => (
              <option key={make} value={make}>{make}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium">
          Model
          <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" value={input.model} onChange={(e) => setInput({ ...input, model: e.target.value })}>
            {availableModels.map((model) => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium">Mileage (km)<Input type="number" value={input.mileage} onChange={(e) => setInput({ ...input, mileage: Number(e.target.value) })} /></label>
        <label className="text-sm font-medium">Condition
          <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" value={input.condition} onChange={(e) => setInput({ ...input, condition: e.target.value as TradeInInput['condition'] })}>
            <option>Excellent</option><option>Good</option><option>Fair</option><option>Needs Repair</option>
          </select>
        </label>
      </div>
      <div className="rounded-xl bg-slate-900 p-4 text-white">
        <p className="text-lg font-semibold">Estimated range: LKR {result.lowEstimate.toLocaleString()} - {result.highEstimate.toLocaleString()}</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-200">{result.assumptions.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>
  );
}
