"use client";

import { useEffect, useState } from "react";
import { reviews } from "@/data/reviews";

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4200);

    return () => window.clearInterval(id);
  }, []);

  const active = reviews[index];

  return (
    <section id="reviews" className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="section-title">Driven by trust, signed by our clients.</h2>
        <p className="section-subtitle">Rated 4.9/5 from {reviews.length} verified buyer testimonials.</p>

        <div className="mt-8 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <article className="rounded-2xl border border-white/15 bg-slate-950/60 p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-100">{active.name}</h3>
                <span className="text-sm text-slate-400">{new Date(active.date).toLocaleDateString("en-GB")}</span>
              </div>
              <p className="mt-2 text-amber-500" aria-label={`${active.rating} out of 5 stars`}>
                {"★".repeat(active.rating)}{"☆".repeat(5 - active.rating)}
              </p>
              <p className="mt-3 text-base text-slate-200">“{active.comment}”</p>
            </article>

            <div className="flex items-center gap-2 md:flex-col">
              <button
                type="button"
                onClick={() => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
                className="rounded-md border border-white/25 px-3 py-2 text-sm font-semibold text-slate-100 hover:border-amber-300 hover:text-amber-300"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => setIndex((prev) => (prev + 1) % reviews.length)}
                className="rounded-md border border-white/25 px-3 py-2 text-sm font-semibold text-slate-100 hover:border-amber-300 hover:text-amber-300"
              >
                Next
              </button>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {reviews.map((review, idx) => (
              <button
                key={`${review.name}-${review.date}`}
                type="button"
                onClick={() => setIndex(idx)}
                className={`rounded-full border px-3 py-1 text-xs transition ${
                  idx === index
                    ? "border-amber-300 bg-amber-300/20 text-amber-200"
                    : "border-white/20 text-slate-300 hover:border-white/40"
                }`}
                aria-label={`Show testimonial ${idx + 1}`}
              >
                {review.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
