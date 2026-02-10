"use client";

import { useState } from "react";
import clsx from "clsx";

const links = [
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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6" aria-label="Main navigation">
        <a href="#top" className="font-bold tracking-tight text-brand-900">
          Signature Motors
        </a>

        <button
          type="button"
          className="rounded-md border border-slate-300 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>

        <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className="transition hover:text-brand-700">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div id="mobile-menu" className={clsx("md:hidden", !open && "hidden")}>
        <ul className="space-y-1 border-t border-slate-200 bg-white px-4 py-3 text-sm font-medium">
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className="block rounded px-2 py-2 hover:bg-slate-100" onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
