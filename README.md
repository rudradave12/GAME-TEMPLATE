# 🎮 GameZone Commercial Website Template

A modern, high-performance commercial website template built for **gaming zones, esports arenas, gaming cafés, VR arcades, and console lounges**.

Engineered with **Remix (Single Page Application architecture) and Vite**, styled with a **custom high-performance CSS design system**, and structured with a **single centralized configuration file** for rapid client customization and repeated commercial deployment.

---

## 🌟 Product Overview

The **GameZone Website Template** is a complete, production-ready commercial website solution designed to give gaming venues a world-class digital presence. It combines cinematic visuals, PlayStation-grade typography, interactive gaming library filters, dynamic pricing displays, a cafe & snack bar menu, and one-click booking triggers.

Whether you operate a competitive PC esports center, a console gaming lounge with PS5 and PC stations, a racing simulation studio, or a casual gaming café, this template allows you to launch a customized, brand-aligned website in minutes simply by editing one configuration file.

---

## 🚀 Key Features

- **⚡ Centralized Client Configuration (`app/config/siteConfig.ts`)**:
  Customize brand name, logo, taglines, contact details, social links, operating hours, hero slides, pricing plans, cafe menu, FAQs, and game rules in one clean TypeScript file.
- **🎨 Cinematic Gaming Aesthetics**:
  Sleek dark theme with light-mode toggle, custom glow accents, glass-effect modals, and micro-interactions.
- **🕹️ Rich Interactive Game Library**:
  Filterable game catalogue with category tags, platform badges, live search, game detail pages, trailers, screenshot galleries, and arena guidelines.
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

## 💼 Commercial Multi-Client Licensing & Workflow

This codebase is licensed as a **commercial master template**. You may sell the final website to multiple clients or use it repeatedly across multiple client projects.

### The Multi-Client Deployment Model

```
                    ONE MASTER TEMPLATE REPOSITORY
               (https://github.com/rudradave12/GAME-TEMPLATE)
                                     │
      ┌──────────────────────────────┼──────────────────────────────┐
      ▼                              ▼                              ▼
CLIENT A PROJECT               CLIENT B PROJECT               CLIENT C PROJECT
• Download/Clone Copy          • Download/Clone Copy          • Download/Clone Copy
• Private Client GitHub        • Private Client GitHub        • Private Client GitHub
• Client A siteConfig.ts       • Client B siteConfig.ts       • Client C siteConfig.ts
• Client A Cloudflare Pages    • Client B Cloudflare Pages    • Client C Cloudflare Pages
• clientA-gaming.com           • clientB-arena.com            • clientC-lounge.com
```

### Recommended Workflow for Each Client

1. **Clone a fresh copy** from the master template repository:
   ```bash
   git clone https://github.com/rudradave12/GAME-TEMPLATE.git my-client-gaming-website
   cd my-client-gaming-website
   ```
2. **Initialize a private repository** for the client:
   ```bash
   git remote remove origin
   git remote add origin https://github.com/your-account/my-client-gaming-website.git
   git push -u origin main
   ```
3. **Customize Client Branding & Config** in `app/config/siteConfig.ts` (see guide below).
4. **Deploy to Client's Cloudflare Account** (or your agency Cloudflare account).
5. **Connect Client's Custom Domain**.

> **Note on Client Independence:**  
> Each client website operates 100% independently. There is no shared database, no shared state, no shared third-party API keys, and no shared local storage between client deployments. One client's updates will never affect another client.

---

## 🛠️ Technology Stack

- **Framework**: [Remix](https://remix.run/) v2.17+ (SPA Mode, `ssr: false`)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/) v5.4+
- **UI Library**: React 18, React DOM
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Feather, FontAwesome, Remix Icons)
- **Styling**: Vanilla CSS Design System with CSS Custom Properties and zero third-party utility bloat
- **Fonts**: Self-hosted Google Fonts via `@fontsource-variable/outfit`
- **Deployment Target**: Cloudflare Pages / Static Web Hosts

---

## 📋 Requirements

- **Node.js**: `>= 18.0.0` (v20.x recommended)
- **Package Manager**: `npm` (bundled with Node.js)

---

## ⚡ Quick Start & Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (with Hot Module Replacement)
npm run dev

# 3. Open in your browser
# Server runs at http://localhost:5173
```

To create a production build:

```bash
# Compile client assets and generate security hashes
npm run build
```

The production-ready bundle is output to `build/client/`.

---

## 🎨 Complete Customization Guide

All essential client information is modified through clean, typed configuration files without editing component architecture.

### 1. Central Configuration (`app/config/siteConfig.ts`)

Open `app/config/siteConfig.ts` to customize:

- **Brand Details**: Business name, short name, taglines, description, logo URL, favicon URL.
- **Contact Info**: Phone number, WhatsApp number, email address, physical address, Google Maps link, GPS coordinates.
- **Operating Hours**: Display hours, weekday schedule, weekend schedule, open/close times.
- **Social Media**: Discord, Instagram, X/Twitter, YouTube, Twitch, Facebook links.
- **Theme Settings**: Default theme (`dark` | `light`), accent colors, storage key.
- **Pricing & Rates**: Plan titles, badges, rate rows, currency symbol (`$`, `€`, `£`, `₹`).
- **Café & Snack Menu**: Item names, categories, prices, descriptions, and badges.
- **Booking Rules**: Walk-in policy, reservation deposit guidelines, ID requirements.
- **Venue Guidelines & Policies**: Code of conduct, age limits, session limits.
- **FAQs**: Questions and answers categorized by booking, hardware, and events.

### 2. Customizing Hero Slides (`app/data/heroslides.ts`)

Modify the 5 homepage hero slides:
- `title`: Slide headline (e.g. `BATTLE ARENA`, `RACING ZONE`)
- `tagline`: Subheading / description
- `category`: Genre badge
- `imageDesktop`: 16:9 widescreen image path (`/images/hero/...`)
- `imageMobilePortrait`: 9:16 mobile portrait image path (`/images/hero/...`)
- `btn1` / `btn2`: Action button text

### 3. Customizing the Game Catalog (`app/data/games.ts`)

Add, edit, or remove games in `app/data/games.ts`:
```typescript
{
  id: 1,
  title: "BATTLE ARENA",
  subtitle: "5v5 Tactical Competitive Shooter",
  category: "SHOOTING",
  playerType: "MULTIPLAYER",
  platforms: ["PC", "PS5"],
  status: "available",
  image: "/images/hero/battle-arena-desktop.jpg",
  description: "Coordinate your squad, master ability timing, and secure the objective.",
  screenshots: [
    { src: "/images/hero/battle-arena-desktop.jpg", alt: "Battle Arena tactical gameplay" },
  ],
  video: {
    type: "youtube",
    id: "dQw4w9WgXcQ", // 11-char ID or full YouTube URL (watch, embed, youtu.be, shorts)
  },
}
```

### 4. Replacing Brand Assets

- **Logo**: Replace `public/icons/logo.svg` or change `brand.logoUrl` in `siteConfig.ts`.
- **Favicon**: Update `brand.faviconUrl` in `siteConfig.ts`.
- **Hero Artwork**: Add images to `public/images/hero/` and update `heroslides.ts`.

---

## ☁️ Cloudflare Pages Deployment Guide

The template is optimized for **Cloudflare Pages** (Single Page Application mode with edge CDN caching).

### Step-by-Step Deployment:

1. **Log in to Cloudflare**:
   Navigate to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Compute (Workers) > Workers & Pages** (or **Pages**).
2. **Create an Application**:
   Click **Create application** > **Pages** > **Connect to Git**.
3. **Select Your Repository**:
   Authorize access to your GitHub account and choose the client repository (e.g. `my-client-gaming-website`).
4. **Configure Build Settings**:
   - **Project Name**: e.g. `gamezone-template-demo` (or client business name)
   - **Production Branch**: `main`
   - **Framework Preset**: `None` (or `Vite`)
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `build/client`
5. **Environment Variables**:
   Under **Environment variables (advanced)**, add:
   - `NODE_VERSION`: `20`
6. **Deploy**:
   Click **Save and Deploy**. Cloudflare will run `npm run build` and publish your site globally across 300+ edge data centers.
7. **Custom Domain**:
   Once deployed, navigate to **Custom domains** in your Cloudflare Pages project and connect your client's custom domain (e.g., `gamingarena.com`). DNS and SSL certificates are provisioned automatically.

---

## 📁 Project Directory Structure

```
gamezone-website-template/
├── app/
│   ├── config/
│   │   └── siteConfig.ts          # ⭐ CENTRAL CONFIGURATION (Brand, contact, pricing, cafe, FAQs)
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
│   │   ├── GameCard.tsx           # Reusable game card with responsive picture
│   │   ├── Experience.tsx         # Hardware specs and setup showcase
│   │   ├── Booking.tsx            # Booking rules, rates, and WhatsApp CTA
│   │   ├── FAQ.tsx                # Interactive accordion FAQ
│   │   ├── GameGuidelines.tsx     # Venue policies and gaming etiquette
│   │   ├── GTAOnlinePolicy.tsx    # Arena fair play & online policy component
│   │   ├── VideoModal.tsx         # Fullscreen YouTube trailer modal
│   │   └── Footer.tsx             # Location details, hours, and legal links
│   ├── data/
│   │   ├── games.ts               # Complete game catalog database
│   │   ├── heroslides.ts          # Hero carousel data (5 generic gaming slides)
│   │   ├── game-artwork.ts        # Responsive artwork mappings
│   │   └── top-ten-game-highlights.ts # Game spotlight data
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
│   ├── icons/
│   │   └── logo.svg               # Original GameZone cyber shield logo
│   ├── images/
│   │   └── hero/                  # High-res generic hero slide wallpapers
│   ├── _headers                   # Cloudflare security headers & CSP config
│   └── _redirects                 # SPA routing fallback for Cloudflare Pages
├── scripts/
│   └── write-csp-hashes.mjs       # Automated build script for CSP hashing
├── .env.example                   # Example environment configuration
├── LICENSE.txt                    # Commercial template license
├── package.json                   # Project metadata and dependencies
├── vite.config.ts                 # Vite & Remix SPA build configuration
└── wrangler.toml                  # Cloudflare Pages deployment configuration
```

---

## 📄 License & Commercial Terms

This software template is protected under the **Commercial Software Template License Agreement**. See [LICENSE.txt](./LICENSE.txt) for the complete legal text.

- **You MAY**: Use, customize, re-brand, and deploy this template to build and launch production websites for yourself or your paying clients.
- **You MAY NOT**: Resell, redistribute, lease, or sub-license the raw or modified template source code as a competing website template, theme, or digital download product.
