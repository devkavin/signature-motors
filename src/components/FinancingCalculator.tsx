'use client';

import { useMemo, useState } from 'react';
import { FinancingInput, FinancingResult } from '@/types';
import { Input } from '@/components/ui/Input';

function calculateFinancing(input: FinancingInput): FinancingResult {
  const monthlyRate = input.annualRate / 12 / 100;
  const factor = Math.pow(1 + monthlyRate, input.termMonths);
  const monthlyPayment = (input.principal * monthlyRate * factor) / (factor - 1);
  const totalCost = monthlyPayment * input.termMonths;
  const totalInterest = totalCost - input.principal;

  let balance = input.principal;
  const schedulePreview = Array.from({ length: 4 }).map((_, idx) => {
    const interest = balance * monthlyRate;
    const principal = monthlyPayment - interest;
    balance -= principal;
    return { month: idx + 1, principal, interest, balance: Math.max(balance, 0) };
  });

  return { monthlyPayment, totalInterest, totalCost, schedulePreview };
}

export function FinancingCalculator() {
  const [input, setInput] = useState<FinancingInput>({ principal: 8000000, termMonths: 60, annualRate: 12.5 });
  const result = useMemo(() => calculateFinancing(input), [input]);

  return (
    <section id="financing" className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900">Financing Calculator</h2>
      <div className="grid gap-4 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-3">
        <label className="text-sm font-medium">Principal (LKR)<Input type="number" value={input.principal} onChange={(e) => setInput({ ...input, principal: Number(e.target.value) })} /></label>
        <label className="text-sm font-medium">Term (Months)<Input type="number" value={input.termMonths} onChange={(e) => setInput({ ...input, termMonths: Number(e.target.value) })} /></label>
        <label className="text-sm font-medium">Interest Rate %<Input type="number" step="0.1" value={input.annualRate} onChange={(e) => setInput({ ...input, annualRate: Number(e.target.value) })} /></label>
      </div>
      <div className="rounded-xl bg-brand-50 p-4 text-sm text-brand-900">
        <p className="text-xl font-semibold">Monthly Payment: LKR {result.monthlyPayment.toFixed(0)}</p>
        <p>Total Interest: LKR {result.totalInterest.toFixed(0)} • Total Cost: LKR {result.totalCost.toFixed(0)}</p>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h3 className="font-semibold text-slate-900">Amortization Preview (first 4 months)</h3>
        <ul className="mt-2 space-y-1 text-sm text-slate-700">
          {result.schedulePreview.map((month) => (
            <li key={month.month}>
              Month {month.month}: Principal {month.principal.toFixed(0)} | Interest {month.interest.toFixed(0)} | Balance {month.balance.toFixed(0)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
