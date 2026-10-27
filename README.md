# 🎮 GameZone Website Template

A modern, high-performance commercial website template built for **gaming zones, esports arenas, gaming cafés, VR arcades, and console lounges**.

Engineered with **Remix (Single Page Application architecture) and Vite**, styled with a **custom high-performance CSS design system**, and structured with a **single centralized configuration file** for rapid client customization.

---

## 🌟 Product Overview

The **GameZone Website Template** is a complete, production-ready website solution designed to give gaming venues a world-class digital presence. It combines cinematic visuals, PlayStation-grade typography, interactive gaming library filters, dynamic pricing displays, a cafe & snack bar menu, and one-click booking triggers.

Whether you operate a competitive PC esports center, a console gaming lounge with PS5 and PC stations, a racing simulation studio, or a casual gaming café, this template allows you to launch in minutes simply by editing one configuration file.

---

## 🚀 Key Features

- **⚡ Centralized Configuration (`app/config/siteConfig.ts`)**:
  Customize brand name, logo, taglines, contact details, social links, operating hours, hero slides, pricing plans, cafe menu, FAQs, and game rules in one clean TypeScript file.
- **🎨 Cinematic Gaming Aesthetics**:
  Sleek dark theme with light-mode toggle, custom glow accents, glass-effect modals, and micro-interactions.
- **🕹️ Rich Interactive Game Library**:
  Filterable game catalogue with category tags, platform badges, search, game detail pages, trailers, screenshots, and guidelines.
- **📺 Seamless YouTube Trailer Playback**:
  Native fullscreen trailer player with custom HUD controls, supporting raw IDs and all YouTube URL formats (`watch?v=`, `youtu.be/`, `embed/`, `shorts/`), plus direct safe external YouTube links (`target="_blank" rel="noopener noreferrer"`).
- **💳 Tiered Pricing Cards**:
  Customizable hourly rates, multi-hour passes, VIP esports packages, and membership tiers.
- **🍔 Gaming Café & Snack Bar Section**:
  Interactive menu with category filters (Drinks & Energy, Hot Bites & Pizza, Combos & Snacks) and station delivery callouts.
- **📅 Smart Booking & Contact System**:
  WhatsApp booking integration, direct phone call triggers, Google Maps directions, and contact form modal.
- **❓ Interactive FAQ Accordion**:
  Accessible, smooth-collapsing FAQ component answering booking, platform, and group party questions.
- **📱 100% Responsive Design**:
  Four dedicated responsive layout tiers: Desktop (1101px+), Tablet (701px–1100px), Mobile Portrait (<=700px), and Mobile/Tablet Landscape.
- **🛡️ Cloudflare Pages Ready & CSP Hardened**:
  Single Page Application (SPA) mode with pre-configured static asset routing and automated Content Security Policy (CSP) hashing.
- **🔍 SEO & Schema.org Structured Data**:
  Pre-configured OpenGraph metadata, Twitter Cards, LocalBusiness schema, and BreadcrumbList JSON-LD.

---

## 🛠️ Technology Stack

- **Framework**: [Remix](https://remix.run/) v2.17+ (SPA Mode, `ssr: false`)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/) v5.4+
- **UI Library**: React 18, React DOM
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Feather, Remix Icons, Lucide, Heroicons, FontAwesome)
- **Styling**: Vanilla CSS Design System with CSS Custom Properties and zero third-party utility bloat
- **Fonts**: Self-hosted Google Fonts via `@fontsource-variable/outfit`
- **Deployment Target**: Cloudflare Pages / Static Web Hosts

---

## 📋 Requirements

- **Node.js**: `>= 18.0.0` (v20.x or v22.x recommended)
- **Package Manager**: `npm` (comes with Node.js), `pnpm`, or `yarn`

---

## ⚡ Quick Start & Installation

Clone or extract the template files to your workspace, then run:

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server (with HMR)
npm run dev

# 3. Open in your browser
# Server will be running at http://localhost:5173
```

To create a production-ready build:

```bash
# Compile client assets and generate security hashes
npm run build
```

The production bundle will be generated in `build/client/`.

---

## 🎨 Complete Customization Guide

Everything is engineered so you **do not** have to search through dozens of nested JSX components to change basic client details.

### 1. Central Configuration (`app/config/siteConfig.ts`)

Open `app/config/siteConfig.ts`. Here you will find:

```typescript
export const siteConfig = {
  brand: {
    name: "GAMEZONE ARENA",
    shortName: "GAMEZONE",
    tagline: "Your Ultimate Gaming Destination",
    description: "Experience elite PC and console gaming...",
    foundedYear: 2026,
    websiteUrl: "https://gamezone-example.com",
    logoUrl: "/icons/logo.svg",
    faviconUrl: "/icons/icon-192.png",
  },
  contact: {
    phoneDisplay: "+1 (555) 234-5678",
    phoneRaw: "+15552345678",
    whatsappDisplay: "+1 (555) 234-5678",
    whatsappUrl: "https://wa.me/15552345678?text=...",
    email: "arena@gamezone-example.com",
    fullAddress: "100 Esports Way, Suite 400, Metro City, 10001",
    directionsUrl: "https://maps.google.com/?q=...",
  },
  // Operating hours, pricing plans, cafe menu, FAQs, and guidelines...
};
```

### 2. Changing Pricing & Plans
In `app/config/siteConfig.ts`, modify `siteConfig.pricing`:
```typescript
{
  title: "Console Lounge",
  badge: "Best for Casuals",
  rows: [
    { label: "1 Hour Session", rate: "$8 / hr" },
    { label: "3 Hour Pass", rate: "$20" },
  ],
}
```

### 3. Updating the Cafe & Snacks Menu
In `app/config/siteConfig.ts`, modify `siteConfig.cafeMenu`:
```typescript
{
  name: "Loaded Gamer Nachos",
  category: "Hot Bites & Pizza",
  price: "$7.50",
  description: "Crispy tortilla chips topped with melted cheese, jalapeños...",
  tag: "Popular",
}
```

### 4. Updating Games Catalog
Games are stored in `app/data/games.ts`. You can add, edit, or remove games:
```typescript
{
  id: 1,
  title: "CALL OF DUTY BLACK OPS 7",
  subtitle: "Tactical First-Person Shooter",
  category: "SHOOTING",
  playerType: "MULTIPLAYER",
  platforms: ["PS5"],
  status: "available",
  image: "/images/cod-blackops-7-optimized.webp",
  video: {
    type: "youtube",
    id: "ynivqJZJOH4", // Or full URL: https://www.youtube.com/watch?v=ynivqJZJOH4
  },
}
```

### 5. Replacing Images & Logos
- **Logo**: Replace `public/icons/logo.svg` or change `brand.logoUrl` in `siteConfig.ts`.
- **Game Posters & Thumbnails**: Store new game covers in `public/images/`.
- **Hero Backgrounds**: Store hero banners in `public/images/hero/`.

### 6. Changing Brand Accent Colors
Open `app/styles/site.css` and adjust the CSS variables:
```css
:root {
  --blue: #0066bd;
  --blue-dark: #004f91;
  --canvas: #071321;
}
```

---

## ☁️ Deployment Guide

### Deploying to Cloudflare Pages (Recommended)

1. **Connect your GitHub repository** to Cloudflare Pages.
2. Configure your build settings:
   - **Framework Preset**: None or Vite
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `build/client`
   - **Node.js Version**: Set Environment Variable `NODE_VERSION` to `20`
3. Click **Save and Deploy**. Cloudflare Pages will automatically build and distribute the site to edge data centers worldwide.

### Deploying to Vercel, Netlify, or Any Static Host

Since the template outputs pure static assets to `build/client/`:
- **Build command**: `npm run build`
- **Publish directory**: `build/client`

A `_headers` file is automatically generated in `build/client/` providing hardened security headers, cache policies, and Content Security Policies.

---

## 📁 Folder Structure

```
gamezone-website-template/
├── app/
│   ├── config/
│   │   └── siteConfig.ts          # ⭐ CENTRAL CONFIGURATION (Edit brand, contact, pricing, cafe, FAQs)
│   ├── components/                # Modular UI components
│   │   ├── Navbar.tsx             # Responsive header navigation & theme switcher
│   │   ├── CinematicHero.tsx      # Full-width cinematic hero slideshow
│   │   ├── EsportsTicker.tsx      # Live announcement and tournament ribbon
│   │   ├── About.tsx              # Venue highlights and milestone counters
│   │   ├── Pricing.tsx            # Gaming session and membership plans
│   │   ├── CafeMenu.tsx           # Snack bar and beverage catalog
│   │   ├── GameLibraryHome.tsx    # Homepage featured games showcase
│   │   ├── GameLibrarypage.tsx    # Filterable catalog page
│   │   ├── GameDetailPage.tsx     # Game profile with trailer player and specs
│   │   ├── Experience.tsx         # Hardware specs and setup showcase
│   │   ├── Booking.tsx            # Booking rules, rates, and WhatsApp CTA
│   │   ├── FAQ.tsx                # Interactive accordion FAQ
│   │   ├── GameGuidelines.tsx     # Venue policies and gaming etiquette
│   │   └── Footer.tsx             # Location details, hours, and legal links
│   ├── data/
│   │   ├── games.ts               # Complete game catalog database
│   │   ├── heroslides.ts          # Hero carousel data
│   │   └── game-artwork.ts        # Responsive artwork mappings
│   ├── routes/                    # Remix file-based route controllers
│   │   ├── _index.tsx             # Main landing page
│   │   ├── games._index.tsx       # Dedicated game catalog route
│   │   ├── games.$slug.tsx        # Dynamic game detail route
│   │   ├── guidelines.tsx         # Dedicated guidelines page
│   │   ├── privacy.tsx            # Privacy policy
│   │   └── terms.tsx              # Terms of service
│   ├── styles/                    # High-performance Vanilla CSS system
│   │   ├── site.css               # Core tokens, color variables, spacing
│   │   ├── app.css                # Base stylesheet bundle
│   │   ├── navbar.css             # Header & mobile drawer styles
│   │   ├── cinematic-hero.css     # Hero slider styling
│   │   ├── cafe-and-faq.css       # Cafe menu & FAQ accordion styles
│   │   └── ...                    # Section-specific styles
│   ├── utils/
│   │   └── youtube.ts             # YouTube URL extraction, embed, and watch utilities
│   └── root.tsx                   # Master HTML document & SEO schemas
├── public/                        # Static public assets (images, icons, manifest)
├── scripts/
│   └── write-csp-hashes.mjs       # Automated build script for CSP hashing
├── .env.example                   # Example environment configuration
├── LICENSE.txt                    # Commercial template license
├── package.json                   # Project metadata and dependencies
├── vite.config.ts                 # Vite & Remix SPA build configuration
└── wrangler.toml                  # Cloudflare Pages deployment configuration
```

---

## 🔧 Troubleshooting

### 1. `npm install` throws peer dependency warnings
- Run `npm install --legacy-peer-deps` if using older or customized npm versions.

### 2. Changes to `siteConfig.ts` are not showing up immediately
- Vite includes Hot Module Replacement (HMR). If a browser tab holds older cached state, perform a hard refresh (`Ctrl + Shift + R` or `Cmd + Shift + R`).
- For theme changes, clear `localStorage` via browser developer tools if you changed default theme values.

### 3. Images not loading
- Ensure all custom images are placed inside the `public/` folder and referenced with absolute paths (e.g. `/images/my-image.webp`).

---

## 📄 License

This template is licensed under the **Commercial Template License Agreement**. See [LICENSE.txt](./LICENSE.txt) for complete details. You may use this template to build client or commercial websites, but redistribution or resale of the original source code as a competing template is strictly prohibited.
