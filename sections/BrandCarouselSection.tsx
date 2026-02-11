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
      node.scrollLeft += 0.85;
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

  const scrollByBrand = (direction: "left" | "right") => {
    const node = trackRef.current;
    if (!node) return;
    const amount = direction === "left" ? -220 : 220;
    node.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="car-brands" aria-labelledby="brands-title" className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-amber-300/80">Our inventory by make</p>
          <h2 id="brands-title" className="mt-2 text-3xl font-bold text-slate-100 md:text-4xl">
            Popular makes
          </h2>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => scrollByBrand("left")}
            className="h-9 w-9 rounded-full border border-white/15 bg-white/5 text-lg text-slate-300 transition hover:border-amber-300 hover:text-amber-300"
            aria-label="Scroll brands left"
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={() => scrollByBrand("right")}
            className="h-9 w-9 rounded-full border border-white/15 bg-white/5 text-lg text-slate-300 transition hover:border-amber-300 hover:text-amber-300"
            aria-label="Scroll brands right"
          >
            &#8250;
          </button>
        </div>
      </div>

      <div className="relative mt-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#070b12] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#070b12] to-transparent" />

        <div
          ref={trackRef}
          className="relative flex cursor-grab gap-4 overflow-x-auto pb-2 [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
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
              className="group flex min-h-[112px] min-w-[190px] shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] px-5 py-4 transition hover:-translate-y-1 hover:border-amber-300/70"
              aria-label={`Browse ${make} inventory`}
            >
              <img
                src={brandLogos[make]}
                alt={`${make} logo`}
                loading="lazy"
                className="h-10 w-auto max-w-[130px] object-contain opacity-70 saturate-0 transition group-hover:opacity-100 group-hover:saturate-100"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
