"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <h2 className="section-title">Frequently asked questions</h2>
      <p className="section-subtitle">Everything you need before booking your next visit.</p>

      <div className="mt-8 space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = open === idx;
          return (
            <div key={faq.question} className="rounded-xl border border-slate-200 bg-white">
              <button className="flex w-full items-center justify-between px-4 py-4 text-left font-semibold" onClick={() => setOpen(isOpen ? null : idx)}>
                {faq.question}
                <span>{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <p className="px-4 pb-4 text-sm text-slate-700">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
