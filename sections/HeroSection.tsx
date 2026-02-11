"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 240));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-[calc(100vh-76px)] overflow-hidden text-white">
      <div className="absolute inset-0" style={{ transform: `translateY(${offset * 0.18}px)` }}>
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=2200&q=80"
            alt="Modern performance car at Signature Motors"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04070fd9] via-[#071325ba] to-[#03070fa3]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(125,211,252,0.22),transparent_45%)]" />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl items-center px-4 py-16 md:px-6">
        <div className="max-w-3xl rounded-3xl border border-white/20 bg-slate-900/50 p-7 shadow-2xl backdrop-blur md:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-amber-200">Colombo’s Signature Showroom Experience</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-7xl">Drive your signature.</h1>
          <p className="mt-5 max-w-2xl text-base text-slate-200 md:text-xl">
            Meet a modern lineup of bold luxury and family-ready cars, curated for immediate confidence on the road.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#inventory" className="rounded-md bg-amber-500 px-6 py-3 font-semibold text-[#1c1405] transition hover:bg-amber-400">
              Browse Signature Stock
            </a>
            <a href="#contact" className="rounded-md border border-white/70 px-6 py-3 font-semibold transition hover:bg-white/15">
              Book a Private Consultation
            </a>
          </div>
          <a href="#inventory" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100">
            Scroll to discover cars
            <span className="inline-block animate-bounce">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
