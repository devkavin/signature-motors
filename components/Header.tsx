"use client";

import { useState } from "react";
import clsx from "clsx";

const links = [
  ["Brands", "car-brands"],
  ["Inventory", "inventory"],
  ["Financing", "financing"],
  ["Trade-in", "tradein"],
  ["Reviews", "reviews"],
  ["FAQ", "faq"],
  ["Contact", "contact"]
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b12]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6" aria-label="Main navigation">
        <a href="#top" className="font-bold tracking-tight text-white">
          Signature Motors <span className="ml-2 hidden text-xs font-medium uppercase tracking-[0.2em] text-amber-300 md:inline">Drive your signature.</span>
        </a>

        <button
          type="button"
          className="rounded-md border border-white/30 p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>

        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-100 md:flex">
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className="transition hover:text-amber-300">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div id="mobile-menu" className={clsx("md:hidden", !open && "hidden")}>
        <ul className="space-y-1 border-t border-white/10 bg-[#070b12] px-4 py-3 text-sm font-medium text-slate-100">
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className="block rounded px-2 py-2 hover:bg-white/10" onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
