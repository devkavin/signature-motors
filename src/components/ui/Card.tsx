import { PropsWithChildren } from 'react';
import clsx from 'clsx';

export function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <article className={clsx('rounded-xl border border-slate-200 bg-white shadow-soft', className)}>{children}</article>;
}
