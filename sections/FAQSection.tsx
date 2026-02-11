"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <h2 className="section-title">Questions before you drive your signature?</h2>
      <p className="section-subtitle">Everything you need before your showroom visit.</p>

      <div className="mt-8 space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = open === idx;
          return (
            <div key={faq.question} className="rounded-xl border border-white/15 bg-white/5 backdrop-blur">
              <button className="flex w-full items-center justify-between px-4 py-4 text-left font-semibold" onClick={() => setOpen(isOpen ? null : idx)}>
                {faq.question}
                <span>{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <p className="px-4 pb-4 text-sm text-slate-300">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
