# Signature Motors - Next.js Dealership Experience

A production-style single-page dealership website built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **React Three Fiber**.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Highlights

- Sticky anchor navigation with mobile hamburger menu and smooth scrolling.
- Hero section with procedural automotive 3D scene and reduced-motion fallback.
- Inventory filter system with typed client-side predicates and vehicle modal details.
- Reserve Test Drive form with validation and success feedback.
- Financing calculator with amortization preview.
- Trade-in estimator using deterministic valuation logic.
- Reviews, FAQ accordion, contact map + validated form, and attribution-aware footer.

## Project structure

- `src/app/` - App Router layout, page, global styles.
- `src/components/` - feature sections and reusable UI primitives.
- `src/data/` - inventory, FAQs, reviews, and dealership datasets.
- `src/types/` - typed domain models.
