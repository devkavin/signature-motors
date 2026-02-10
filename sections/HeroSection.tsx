"use client";

import HeroCarScene from "@/components/HeroCarScene";
import useReducedMotion from "@/components/useReducedMotion";
import Image from "next/image";

export default function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        {reducedMotion ? (
          <div className="relative h-full w-full">
            <Image
              src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1800&q=80"
              alt="Luxury cars at Signature Motors"
              fill
              className="object-cover opacity-50"
            />
          </div>
        ) : (
          <HeroCarScene />
        )}
      </div>
      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-4 py-16 md:px-6">
        <div className="max-w-2xl rounded-2xl bg-slate-950/65 p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Colombo’s Trusted Premium Dealership</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">Drive home your next car with confidence.</h1>
          <p className="mt-4 text-base text-slate-200 md:text-lg">Explore inspected luxury and family vehicles, secure transparent financing, and reserve your test drive online in minutes.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#inventory" className="rounded-md bg-brand-500 px-5 py-3 font-semibold text-white hover:bg-brand-700">Browse Inventory</a>
            <a href="#contact" className="rounded-md border border-white/60 px-5 py-3 font-semibold hover:bg-white/10">Book a Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}
