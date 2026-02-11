"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { makes } from "@/data/inventory";

const brandLogos: Record<string, string> = {
  Audi: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Audi_logo_detail.svg",
  BMW: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  Honda: "https://upload.wikimedia.org/wikipedia/commons/3/38/Honda.svg",
  Hyundai: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg",
  Kia: "https://upload.wikimedia.org/wikipedia/commons/1/13/Kia-logo.png",
  Mazda: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Mazda_logo_with_emblem.svg",
  Nissan: "https://upload.wikimedia.org/wikipedia/commons/2/23/Nissan_2020_logo.svg",
  Toyota: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
  Volvo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Volvo-logo.svg"
};

export default function BrandCarouselSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [startLeft, setStartLeft] = useState(0);

  const baseBrands = useMemo(() => makes, []);
  const carouselBrands = useMemo(() => [...baseBrands, ...baseBrands, ...baseBrands], [baseBrands]);

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;

    const oneSetWidth = node.scrollWidth / 3;
    node.scrollLeft = oneSetWidth;
  }, [carouselBrands]);

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;

    const keepInfinite = () => {
      const oneSetWidth = node.scrollWidth / 3;
      if (node.scrollLeft <= oneSetWidth * 0.5) {
        node.scrollLeft += oneSetWidth;
      } else if (node.scrollLeft >= oneSetWidth * 1.5) {
        node.scrollLeft -= oneSetWidth;
      }
    };

    const id = window.setInterval(() => {
      if (isDragging) return;
      node.scrollLeft += 1;
      keepInfinite();
    }, 16);

    node.addEventListener("scroll", keepInfinite, { passive: true });

    return () => {
      node.removeEventListener("scroll", keepInfinite);
      window.clearInterval(id);
    };
  }, [isDragging]);

  const onDragStart = (clientX: number) => {
    const node = trackRef.current;
    if (!node) return;
    setIsDragging(true);
    setDragStartX(clientX);
    setStartLeft(node.scrollLeft);
  };

  const onDragMove = (clientX: number) => {
    const node = trackRef.current;
    if (!node || !isDragging) return;
    const delta = clientX - dragStartX;
    node.scrollLeft = startLeft - delta;
  };

  return (
    <section id="car-brands" aria-labelledby="brands-title" className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-slate-950/50 p-6 shadow-2xl backdrop-blur md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.18),transparent_42%),radial-gradient(circle_at_80%_85%,rgba(56,189,248,0.18),transparent_38%)]" />

        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Signature Brands</p>
            <h2 id="brands-title" className="mt-2 text-2xl font-bold text-slate-50 md:text-3xl">Explore top car brands in Sri Lanka.</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Browse premium stock from {makes.join(", ")} and quickly jump into available inventory.
            </p>
          </div>
          <a
            href="#inventory"
            className="rounded-md border border-white/25 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-amber-300 hover:text-amber-300"
          >
            View all available cars
          </a>
        </div>

        <div
          ref={trackRef}
          className="relative mt-6 flex cursor-grab gap-3 overflow-x-auto pb-2 [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
          onMouseDown={(e) => onDragStart(e.clientX)}
          onMouseMove={(e) => onDragMove(e.clientX)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
          onTouchEnd={() => setIsDragging(false)}
          aria-label="Car brand logo carousel"
        >
          {carouselBrands.map((make, idx) => (
            <a
              key={`${make}-${idx}`}
              href="#inventory"
              className="flex min-h-24 min-w-[170px] shrink-0 items-center justify-center rounded-full border border-white/25 bg-slate-950/75 px-6 py-4 shadow-lg transition hover:-translate-y-1 hover:border-amber-300/80"
              aria-label={`Browse ${make} inventory`}
            >
              <img
                src={brandLogos[make]}
                alt={`${make} logo`}
                loading="lazy"
                className="h-10 w-auto max-w-[120px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
