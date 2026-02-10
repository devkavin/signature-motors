# Signature Motors — Single-Page Car Sale Web App

A production-ready, responsive single-page dealership application for **Signature Motors** built with **Next.js (TypeScript)**, **TailwindCSS**, and **Three.js** using `@react-three/fiber` + `@react-three/drei`.

## Features

- Sticky responsive navigation with mobile hamburger menu
- Full-viewport hero with interactive 3D car scene and reduced-motion fallback
- Inventory section with advanced filters and 9 complete vehicle listings
- Vehicle details modal with gallery, specs, and test-drive reservation form validation
- Financing calculator with monthly payment computation and amortization preview
- Trade-in estimator with make/model dependent logic and computed value range
- Customer reviews with aggregate rating
- FAQ accordion with 8 detailed Q&A entries
- Contact form with validation + success state
- Colombo dealership address, contact details, hours, and real map embed
- Footer with legal/social links and attribution notes

## Tech Stack

- Next.js 15
- React 19 + TypeScript
- TailwindCSS 3
- Three.js + @react-three/fiber + @react-three/drei

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Project Structure

- `app/` — Next.js app router entry, layout, and global styles
- `sections/` — reusable page sections (hero, inventory, financing, trade-in, reviews, faq, contact)
- `components/` — shared UI and interactive components
- `data/` — typed inventory, reviews, FAQ, and trade-in catalog data
- `types/` — TypeScript interfaces
- `utils/` — formatting and business logic helpers
