import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signature Motors | Premium Cars in Colombo",
  description:
    "Discover premium pre-owned and brand-new vehicles at Signature Motors in Colombo, Sri Lanka.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
