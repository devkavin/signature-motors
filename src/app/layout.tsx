import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Signature Motors | Premium Pre-Owned Cars in Colombo',
  description: 'Browse certified inventory, estimate financing, evaluate trade-in values, and contact Signature Motors.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
