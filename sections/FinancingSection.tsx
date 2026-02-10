"use client";

import { useMemo, useState } from "react";
import { amortizationPreview, getMonthlyPayment } from "@/utils/finance";
import { currencyLKR } from "@/utils/format";

export default function FinancingSection() {
  const [principal, setPrincipal] = useState(8500000);
  const [term, setTerm] = useState(60);
  const [rate, setRate] = useState(11.5);

  const monthly = useMemo(() => getMonthlyPayment(principal, rate, term), [principal, rate, term]);
  const rows = useMemo(() => amortizationPreview(principal, rate, term), [principal, rate, term]);

  return (
    <section id="financing" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="section-title">Financing calculator</h2>
        <p className="section-subtitle">Estimate monthly payments instantly and review an early amortization preview.</p>

        <div className="mt-8 grid gap-6 rounded-2xl border border-slate-200 p-6 shadow-card lg:grid-cols-2">
          <div className="space-y-4">
            <label className="block text-sm">Loan amount (LKR)
              <input type="number" min={500000} step={50000} value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="block text-sm">Term (months)
              <input type="range" min={12} max={84} step={6} value={term} onChange={(e) => setTerm(Number(e.target.value))} className="w-full" />
              <span className="text-xs text-slate-500">{term} months</span>
            </label>
            <label className="block text-sm">Interest rate (%)
              <input type="number" min={0} max={30} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <div className="rounded-lg bg-brand-50 p-4 text-brand-900">
              <p className="text-sm">Estimated monthly payment</p>
              <p className="text-3xl font-bold">{currencyLKR(monthly)}</p>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold">Amortization (first 6 months)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    <th className="py-2">Month</th><th>Payment</th><th>Interest</th><th>Principal</th><th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.month} className="border-b border-slate-100">
                      <td className="py-2">{row.month}</td>
                      <td>{currencyLKR(row.payment)}</td>
                      <td>{currencyLKR(row.interest)}</td>
                      <td>{currencyLKR(row.principal)}</td>
                      <td>{currencyLKR(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
