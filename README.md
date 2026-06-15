# Debt Resolution Federation — UK Debt Help Website

A static, single-page React website for **Debt Resolution Federation** — a UK debt-help and IVA specialist company (since 2013). Built with **Vite + React** and crafted to feel like a trusted, regulated UK debt-charity service.

## Features

- Sticky header with logo, top contact bar, and free-advice phone number
- Striking serif/Inter typography matching the brand mark
- Hero with eligibility-check form
- Trust bar with FCA-aware/regulatory cues
- About section with founding story and values
- Six-step "How It Works" timeline
- Six debt-solution cards (IVA, DMP, DRO, Trust Deed, Bankruptcy, Consolidation)
- Stats band, "Why Choose Us" grid, testimonial carousel
- Accordion FAQ
- Full contact section with callback form (success state)
- Footer with regulatory disclaimers and signposts to free debt charities (StepChange, MoneyHelper, Citizens Advice, etc.)
- Fully responsive (mobile / tablet / desktop)

## Tech

- React 18 + Vite
- `react-icons` for iconography
- Plain modern CSS (no framework) using CSS variables driven from the brand palette

## Brand palette

| Role         | Token                | Hex       |
|--------------|----------------------|-----------|
| Deep green   | `--brand-green-900`  | `#0B3A20` |
| Brand green  | `--brand-green-800`  | `#0F4D2A` |
| Lime accent  | `--brand-lime-500`   | `#B8D332` |
| Cream BG     | `--cream-50`         | `#FDF4EF` |
| Ink          | `--ink-900`          | `#0E1A13` |

## Run locally

```bash
npm install
npm run dev
```

The dev server starts on http://localhost:5173.

## Build for production

```bash
npm run build
npm run preview
```

The static output lands in `dist/` and can be deployed to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, etc.).

## Project structure

```
src/
├── assets/
│   └── logo.jpeg                 # Your logo
├── components/
│   ├── TopBar.jsx + .css         # Hours, address, phone
│   ├── Header.jsx + .css         # Sticky nav, logo, mobile menu
│   ├── Hero.jsx + .css           # Headline + eligibility form
│   ├── TrustBar.jsx + .css       # Accreditation cues
│   ├── About.jsx + .css          # Story + values
│   ├── HowItWorks.jsx + .css     # 6-step process
│   ├── Solutions.jsx + .css      # 6 debt solutions
│   ├── Stats.jsx + .css          # KPI band
│   ├── WhyUs.jsx + .css          # 6 reasons grid
│   ├── Testimonials.jsx + .css   # Carousel
│   ├── FAQ.jsx + .css            # Accordion
│   ├── CTA.jsx + .css            # Conversion banner
│   ├── Contact.jsx + .css        # Form + details
│   └── Footer.jsx + .css         # Disclaimers + links
├── App.jsx, App.css
├── index.css                     # Theme tokens & globals
└── main.jsx
```

## Replacing the logo

Drop a new image at `src/assets/logo.jpeg` (or update the import path in `Header.jsx` and `Footer.jsx`).

## Notes on regulatory wording

The footer includes a clear, FCA-aware "Important Information" notice and signposts to free debt charities. Replace the placeholder Privacy / Cookie / Terms links and add the company's actual FCA / Insolvency Practitioner registration numbers before going live.
