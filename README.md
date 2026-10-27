# 🎮 GameZone Website Template

A modern, high-performance commercial website template built for **gaming zones, esports arenas, gaming cafés, VR arcades, and console lounges**.

Engineered with **Remix (Single Page Application architecture) and Vite**, styled with a **custom high-performance CSS design system**, and structured with a **single centralized configuration file** for rapid client customization.

---

## 🌟 Product Overview

The **GameZone Website Template** is a complete, production-ready website solution designed to give gaming venues a world-class digital presence. It combines cinematic visuals, PlayStation-grade typography, interactive gaming library filters, dynamic pricing calculators, a cafe & snack bar menu, and one-click booking triggers.

Whether you operate a competitive PC esports center, a console gaming lounge with PS5 and Xbox Series X stations, a racing simulation studio, or a casual gaming café, this template allows you to launch in minutes simply by editing one configuration file.

---

## 🚀 Key Features

- **⚡ Centralized Configuration (pp/config/siteConfig.ts)**:
  Customize brand name, logo, taglines, contact details, social links, operating hours, hero slides, pricing plans, cafe menu, FAQs, and game rules in one clean TypeScript file.
- **🎨 Cinematic Gaming Aesthetics**:
  Sleek dark theme with light-mode toggle, custom glow accents, glass-effect modals, and micro-interactions.
- **🕹️ Rich Interactive Game Library**:
  Filterable game catalogue with category tags, platform badges, search, game detail pages, trailers, screenshots, and system requirements.
- **💳 Tiered Pricing Cards**:
  Customizable hourly rates, multi-hour passes, VIP esports packages, and membership tiers.
- **🍔 Gaming Café & Snack Bar Section**:
  Interactive menu with category filters (Bites, Burgers, Cold Drinks, Hot Brews) and quick station delivery callouts.
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

- **Framework**: [Remix](https://remix.run/) v2.17+ (SPA Mode, ssr: false)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/) v5.4+
- **UI Library**: React 18, React DOM
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Feather, Remix Icons, Lucide, Heroicons, Phosphor)
- **Styling**: Vanilla CSS Design System with CSS Custom Properties and zero third-party utility bloat
- **Fonts**: Self-hosted Google Fonts via @fontsource-variable/outfit
- **Deployment Target**: Cloudflare Pages / Static Web Hosts

---

## 📋 Requirements

- **Node.js**: 18.0.0 or later (20.x or 22.x recommended)
- **Package Manager**: 
pm (comes with Node.js), pnpm, or yarn

---

## ⚡ Quick Start & Installation

Clone or extract the template files to your workspace, then run:

`ash
# 1. Install dependencies
npm install

# 2. Start the local development server (with HMR)
npm run dev

# 3. Open in your browser
# Server will be running at http://localhost:5173
`

To create a production-ready build:

`ash
# Compile client assets and generate security hashes
npm run build
`

The production bundle will be generated in uild/client/.

---

## 🎨 Complete Customization Guide

Everything is engineered so you **do not** have to search through dozens of nested JSX components to change basic client details.

### 1. Central Configuration (pp/config/siteConfig.ts)

Open pp/config/siteConfig.ts. Here you will find:

`	ypescript
export const siteConfig = {
  brand: {
    name: "GAMEZONE ARENA",
    tagline: "Your Ultimate Gaming Destination",
    description: "Experience elite PC and console gaming...",
    establishedYear: 2026,
    logoText: "GAMEZONE",
    logoAccent: "ARENA",
    logoSvg: "/icons/logo.svg",
  },
  contact: {
    phone: "+1 (555) 234-5678",
    phoneRaw: "+15552345678",
    whatsapp: "+1 (555) 234-5678",
    whatsappLink: "https://wa.me/15552345678?text=...",
    email: "arena@gamezone-example.com",
    address: {
      street: "100 Esports Way, Suite 400",
      area: "Downtown Tech District",
      city: "Metro City",
      state: "State",
      postalCode: "10001",
      country: "US",
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?...",
  },
  // Operating hours, pricing plans, cafe menu, FAQs, and guidelines...
};
`

### 2. Changing Pricing & Plans
In pp/config/siteConfig.ts, modify siteConfig.pricing.plans:
`	ypescript
{
  id: "standard",
  name: "Regular Station",
  price: 10,
  unit: "/ hour",
  badge: "Best Value",
  features: ["High-refresh 240Hz monitor", "Full game library access", ...],
}
`

### 3. Updating the Cafe & Snacks Menu
In pp/config/siteConfig.ts, modify siteConfig.cafe.items:
`	ypescript
{
  id: "c1",
  name: "Loaded Gamer Nachos",
  category: "Bites",
  price: ".50",
  description: "Crispy tortilla chips topped with melted cheese, jalapeños...",
  tag: "Popular",
}
`

### 4. Updating Games Catalog
Games are stored in pp/data/games.ts. You can add, edit, or remove games:
`	ypescript
{
  id: "cyberpunk-2077",
  title: "Cyberpunk 2077: Phantom Liberty",
  category: "Action RPG",
  genre: "Open World RPG",
  rating: 9.3,
  platform: ["PC Ultra", "PS5"],
  poster: "/images/games/cyberpunk.webp",
  description: "...",
}
`

### 5. Replacing Images & Logos
- **Logo**: Replace public/icons/logo.svg or change rand.logoSvg in siteConfig.ts.
- **Game Posters**: Store new game covers in public/images/games/.
- **Hero Backgrounds**: Store hero banners in public/images/.

### 6. Changing Brand Accent Colors
Open pp/styles/design-system.css and adjust the CSS custom properties:
`css
:root {
  --color-accent-primary: #00d2ff;     /* Neon Cyan */
  --color-accent-secondary: #ff007f;   /* Neon Magenta */
  --color-bg-base: #0a0a0c;            /* Background Deep Black */
}
`

---

## ☁️ Deployment Guide

### Deploying to Cloudflare Pages (Recommended)

1. **Connect your GitHub repository** to Cloudflare Pages.
2. Configure your build settings:
   - **Framework Preset**: None or Vite
   - **Build Command**: 
pm run build
   - **Build Output Directory**: uild/client
   - **Node.js Version**: Set Environment Variable NODE_VERSION to 20
3. Click **Save and Deploy**. Cloudflare Pages will automatically build and distribute the site to edge data centers worldwide.

### Deploying to Vercel, Netlify, or Any Static Host

Since the template outputs pure static assets to uild/client/:
- **Build command**: 
pm run build
- **Publish directory**: uild/client

A _headers file is automatically generated in uild/client/ providing hardened security headers, cache policies, and Content Security Policies.

---

## 📁 Folder Structure

`
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
│   │   └── games.ts               # Complete game catalog database
│   ├── routes/                    # Remix file-based route controllers
│   │   ├── _index.tsx             # Main landing page
│   │   ├── games._index.tsx       # Dedicated game catalog route
│   │   ├── games..tsx        # Dynamic game detail route
│   │   ├── guidelines.tsx         # Dedicated guidelines page
│   │   ├── privacy.tsx            # Privacy policy
│   │   └── terms.tsx              # Terms of service
│   ├── styles/                    # High-performance Vanilla CSS system
│   │   ├── design-system.css      # Core tokens, color variables, spacing
│   │   ├── app.css                # Base stylesheet bundle
│   │   ├── navbar.css             # Header & mobile drawer styles
│   │   ├── cinematic-hero.css     # Hero slider styling
│   │   ├── cafe-and-faq.css       # Cafe menu & FAQ accordion styles
│   │   └── ...                    # Section-specific styles
│   └── root.tsx                   # Master HTML document & SEO schemas
├── public/                        # Static public assets (images, icons, manifest)
├── scripts/
│   └── write-csp-hashes.mjs       # Automated build script for CSP hashing
├── .env.example                   # Example environment configuration
├── LICENSE.txt                    # Commercial template license
├── package.json                   # Project metadata and dependencies
├── vite.config.ts                 # Vite & Remix SPA build configuration
└── wrangler.toml                  # Cloudflare Pages deployment configuration
`

---

## 🔧 Troubleshooting

### 1. 
pm install throws peer dependency warnings
- Run 
pm install --legacy-peer-deps if using older or customized npm versions.

### 2. Changes to siteConfig.ts are not showing up immediately
- Vite includes Hot Module Replacement (HMR). If a browser tab holds older cached state, perform a hard refresh (Ctrl + Shift + R or Cmd + Shift + R).
- For theme changes, clear localStorage via browser developer tools if you changed default theme values.

### 3. Images not loading
- Ensure all custom images are placed inside the public/ folder and referenced with absolute paths (e.g. /images/my-image.webp).

---

## 📄 License

This template is licensed under the **Commercial Template License Agreement**. See [LICENSE.txt](./LICENSE.txt) for complete details. You may use this template to build client or commercial websites, but redistribution or resale of the original source code as a competing template is strictly prohibited.
