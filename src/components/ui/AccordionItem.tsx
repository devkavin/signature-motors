'use client';

import { PropsWithChildren, useId, useState } from 'react';

export function AccordionItem({ title, children }: PropsWithChildren<{ title: string }>) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      <button
        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left font-medium text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        onClick={() => setOpen((state) => !state)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        {title}
        <span aria-hidden>{open ? '−' : '+'}</span>
      </button>
      <div id={panelId} className={open ? 'block px-4 pb-4 text-sm text-slate-700' : 'hidden'}>
        {children}
      </div>
    </div>
  );
}
