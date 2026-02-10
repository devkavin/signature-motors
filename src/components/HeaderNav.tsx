'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const links = [
  { id: 'inventory', label: 'Inventory' },
  { id: 'financing', label: 'Financing' },
  { id: 'trade-in', label: 'Trade-in' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
];

export function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('inventory');
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    links.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) buttonRef.current?.focus();
  }, [isOpen]);

  const content = (
    <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <Link
            href={`#${link.id}`}
            className={`block rounded-md px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
              active === link.id ? 'bg-brand-50 text-brand-600' : 'text-slate-700 hover:bg-slate-100'
            }`}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Primary">
        <a href="#top" className="text-lg font-bold text-brand-900">
          Signature Motors
        </a>
        <button
          ref={buttonRef}
          className="rounded-md border border-slate-300 px-3 py-2 text-sm md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((state) => !state)}
        >
          {isOpen ? 'Close menu' : 'Open menu'}
        </button>
        <div className="hidden md:block">{content}</div>
      </nav>
      <div id="mobile-nav" className={`${isOpen ? 'block' : 'hidden'} border-t border-slate-200 bg-white px-4 py-3 md:hidden`}>
        {content}
      </div>
    </header>
  );
}
