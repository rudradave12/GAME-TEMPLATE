import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
  useRouteError,
} from "@remix-run/react";
import { useEffect } from "react";
import Navbar from "~/components/Navbar";
import { siteConfig } from "~/config/siteConfig";
import gameCatalogStyles from "~/styles/game-catalog.css?url";
import gameDetailStyles from "~/styles/game-detail.css?url";
import gameLibraryShellStyles from "~/styles/game-library-shell.css?url";
import { gameArtworkBySlug, sourceArtworkWidths } from "~/data/game-artwork";

const serializedGameArtworkBySlug = JSON.stringify(gameArtworkBySlug);
const serializedSourceArtworkWidths = JSON.stringify(sourceArtworkWidths);

/* ================= STYLES ================= */
import appStyles from "~/styles/app.css?url";

/* Keep theme selection and the critical artwork hint inline in the document. */
const preHydrationScript = `(() => {
  try {
    const theme = localStorage.getItem("${siteConfig.theme.storageKey}") || "${siteConfig.theme.defaultTheme}";
    document.documentElement.dataset.theme = theme === "light" ? "light" : "dark";
  } catch {
    document.documentElement.dataset.theme = "${siteConfig.theme.defaultTheme}";
  }

  // Cloudflare Pages serves this SPA shell for deep links. Update the static
  // homepage metadata immediately so direct route loads advertise their URL
  // before the client router hydrates.
  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  const canonicalPath = pathSegments.length ? "/" + pathSegments.join("/") : "/";
  const canonicalUrl = "${siteConfig.brand.websiteUrl}" + canonicalPath;
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) canonicalLink.href = canonicalUrl;
  const openGraphUrl = document.querySelector('meta[property="og:url"]');
  if (openGraphUrl) openGraphUrl.content = canonicalUrl;

  const addImageHint = (href, imageSrcset, imageSizes, imageType) => {
    const preload = document.createElement("link");
    preload.rel = "preload";
    preload.as = "image";
    preload.href = href;
    if (imageSrcset) preload.imageSrcset = imageSrcset;
    if (imageSizes) preload.imageSizes = imageSizes;
    if (imageType) preload.type = imageType;
    preload.fetchPriority = "high";
    document.head.appendChild(preload);
  };
  const addStyleHint = (href) => {
    const preload = document.createElement("link");
    preload.rel = "preload";
    preload.as = "style";
    preload.href = href;
    preload.fetchPriority = "high";
    document.head.appendChild(preload);
  };
  const addModuleHint = (href) => {
    if (!href || href.startsWith("__GAMEZONE_")) return;
    const preload = document.createElement("link");
    preload.rel = "modulepreload";
    preload.href = href;
    preload.fetchPriority = "high";
    document.head.appendChild(preload);
  };

  const path = window.location.pathname;
  addStyleHint(path === "/games" ? "${gameLibraryShellStyles}" : "${appStyles}");
  if (path === "/games") addModuleHint("__GAMEZONE_GAMES_INDEX_MODULE__");
  else if (/^\\/games\\/[^/]+$/.test(path)) addModuleHint("__GAMEZONE_GAMES_SLUG_MODULE__");

  if (path === "/" || path === "/index.html") {
    const isPortrait = window.matchMedia("(max-width: 1100px) and (orientation: portrait)").matches;
    addImageHint(isPortrait ? "/images/hero/battle-arena-mobile.jpg" : "/images/hero/battle-arena-desktop.jpg");
  }

  if (path === "/games") {
    addStyleHint("${gameCatalogStyles}");
  }

  const gameArt = ${serializedGameArtworkBySlug};
  const artworkWidths = ${serializedSourceArtworkWidths};
  const responsiveHint = (image) => {
    const sourceWidth = artworkWidths[image];
    if (!sourceWidth) return { src: image, srcset: undefined };
    const stem = image.replace(/\\.[a-z0-9]+$/i, "");
    const candidates = [480, 800, 1280]
      .filter((width) => sourceWidth > width)
      .map((width) => stem + "-" + width + ".webp " + width + "w");
    candidates.push(image + " " + sourceWidth + "w");
    return {
      src: sourceWidth > 800 ? stem + "-800.webp" : image,
      srcset: candidates.join(", "),
    };
  };
  const gameSlug = path.match(/^\\/games\\/([^/]+)$/)?.[1];
  if (gameSlug) {
    addStyleHint("${gameCatalogStyles}");
    addStyleHint("${gameDetailStyles}");
  }
  const isPortrait = window.matchMedia("(max-width: 700px) and (orientation: portrait)").matches;
  const isFcPortrait = gameSlug === "ea-sports-fc-27" && isPortrait;
  const isValorantSmall = gameSlug === "valorant" && window.matchMedia("(max-width: 700px)").matches;
  const isGtaOnline = gameSlug === "gta-online";
  const isFc = gameSlug === "ea-sports-fc-27";
  const baseGameImage = gameSlug && gameArt[gameSlug];
  const gameImage = isFcPortrait
    ? "/images/fc-27-mobile-480.avif"
    : isValorantSmall
      ? "/images/cards/valorant.avif"
      : isGtaOnline
        ? "/images/gta-online-hero-900.avif"
        : isFc
          ? "/images/fc-27-optimized.avif"
          : baseGameImage;
  const baseResponsiveHint = baseGameImage ? responsiveHint(baseGameImage) : null;
  const gameImageSrcset = gameSlug === "forza-horizon-6"
    ? "/images/forza-horizon-6-480.webp 480w, /images/forza-horizon-6-800.webp 800w, /images/forza-horizon-6-1280.webp 1280w, /images/forza-horizon-6-optimized.webp 1920w"
    : isFcPortrait
      ? "/images/fc-27-mobile-480.avif 480w, /images/fc-27-mobile-640.avif 640w"
      : isValorantSmall
        ? "/images/cards/320/valorant.avif 320w, /images/cards/valorant.avif 640w"
        : isGtaOnline
          ? "/images/gta-online-hero-480.avif 480w, /images/gta-online-hero-900.avif 900w"
          : gameImage === baseGameImage
            ? baseResponsiveHint?.srcset
            : undefined;
  const gameImageSizes = isFcPortrait || isValorantSmall || isGtaOnline
    ? "100vw"
    : gameImage === baseGameImage
      ? "(max-width: 1480px) 100vw, 1480px"
      : undefined;
  const gameImageType = isFc || isValorantSmall || isGtaOnline ? "image/avif" : undefined;
  if (gameImage) {
    addImageHint(
      gameImage === baseGameImage ? baseResponsiveHint?.src : gameImage,
      gameImageSrcset,
      gameImageSizes,
      gameImageType
    );
  }
})();`;

/* ================================================================
   SEO: MetaFunction — Powered by centralized siteConfig
   ================================================================ */
export const meta: MetaFunction = ({ location }) => {
  const canonicalPath = location.pathname.replace(/\/+$/, "") || "/";
  const canonicalUrl = `${siteConfig.brand.websiteUrl}${canonicalPath}`;

  return [
    /* ── Core ── */
    { title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}` },
    {
      name: "description",
      content: siteConfig.brand.description,
    },
    {
      name: "keywords",
      content:
        "gaming lounge, esports center, gaming cafe, PS5 gaming, PC gaming, LAN gaming, gaming arena, console lounge, game library",
    },
    { name: "author", content: siteConfig.brand.name },
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    { name: "revisit-after", content: "7 days" },
    { name: "language", content: "English" },
    { name: "rating", content: "general" },

    /* ── Open Graph ── */
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:title", content: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}` },
    { property: "og:description", content: siteConfig.brand.description },
    { property: "og:image", content: `${siteConfig.brand.websiteUrl}/images/cod-7-new-landscape.jpg` },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: `${siteConfig.brand.name} Gaming Venue` },
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: siteConfig.brand.name },
    { tagName: "link", rel: "canonical", href: canonicalUrl },

    /* ── Twitter / X Card ── */
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}` },
    { name: "twitter:description", content: siteConfig.brand.description },
    { name: "twitter:image", content: `${siteConfig.brand.websiteUrl}/images/cod-7-new-landscape.jpg` },
    { name: "twitter:image:alt", content: `${siteConfig.brand.name} Gaming Venue` },

    /* ── Mobile / PWA ── */
    { name: "theme-color", content: siteConfig.theme.themeColorDark },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-title", content: siteConfig.brand.shortName },
    { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
    { name: "format-detection", content: "telephone=yes" },
    { name: "msapplication-TileColor", content: siteConfig.theme.themeColorDark },

    /* ── Geo targeting ── */
    { name: "geo.region", content: "US-CA" },
    { name: "geo.placename", content: `${siteConfig.contact.addressLocality}, ${siteConfig.contact.addressRegion}` },
    { name: "geo.position", content: `${siteConfig.contact.geo.latitude};${siteConfig.contact.geo.longitude}` },
    { name: "ICBM", content: `${siteConfig.contact.geo.latitude}, ${siteConfig.contact.geo.longitude}` },

    /* ── Referrer Policy ── */
    { name: "referrer", content: "strict-origin-when-cross-origin" },
  ];
};

/* ================================================================
   LINKS — Icons & Manifest
   ================================================================ */
export const links: LinksFunction = () => [
  { rel: "icon", href: siteConfig.brand.logoUrl, type: "image/svg+xml" },
  { rel: "manifest", href: "/manifest.webmanifest" },
  { rel: "ard", href: "/.well-known/ard.json", type: "application/ld+json" },
  { rel: "ai-catalog", href: "/.well-known/ai-catalog.json", type: "application/json" },
];

/* ================================================================
   STRUCTURED DATA — Local Business (Schema.org JSON-LD)
   ================================================================ */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EntertainmentBusiness"],
  "@id": `${siteConfig.brand.websiteUrl}/#business`,
  "name": siteConfig.brand.name,
  "description": siteConfig.brand.description,
  "url": siteConfig.brand.websiteUrl,
  "telephone": siteConfig.contact.phoneRaw,
  "priceRange": `${siteConfig.pricing.currencySymbol}7 - ${siteConfig.pricing.currencySymbol}35`,
  "currenciesAccepted": siteConfig.pricing.currencyCode,
  "paymentAccepted": "Cash, Credit Card, Debit Card, Apple Pay, Google Pay",
  "image": [`${siteConfig.brand.websiteUrl}/images/cod-7-new-landscape.jpg`],
  "logo": `${siteConfig.brand.websiteUrl}${siteConfig.brand.logoUrl}`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.contact.streetAddress,
    "addressLocality": siteConfig.contact.addressLocality,
    "addressRegion": siteConfig.contact.addressRegion,
    "postalCode": siteConfig.contact.postalCode,
    "addressCountry": siteConfig.contact.addressCountry,
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": siteConfig.contact.geo.latitude,
    "longitude": siteConfig.contact.geo.longitude,
  },
  "hasMap": siteConfig.contact.directionsUrl,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": siteConfig.hours.daysOfWeek,
      "opens": siteConfig.hours.opens,
      "closes": siteConfig.hours.closes,
    },
  ],
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "PlayStation 5 Gaming", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "High-End Gaming PC", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "240Hz Esports Display", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Gigabit Fiber LAN", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Air Conditioning & Lounge Seating", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Snacks & Refreshment Cafe", "value": true },
  ],
};

/* ── Breadcrumb structured data ── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteConfig.brand.websiteUrl}/` },
    { "@type": "ListItem", "position": 2, "name": "Game Library", "item": `${siteConfig.brand.websiteUrl}/games` },
    { "@type": "ListItem", "position": 3, "name": "Pricing", "item": `${siteConfig.brand.websiteUrl}/#pricing` },
    { "@type": "ListItem", "position": 4, "name": "Booking", "item": `${siteConfig.brand.websiteUrl}/#booking` },
  ],
};

/* ── Website structured data ── */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.brand.websiteUrl}/#website`,
  "url": siteConfig.brand.websiteUrl,
  "name": siteConfig.brand.name,
  "description": siteConfig.brand.description,
  "inLanguage": "en-US",
  "publisher": {
    "@id": `${siteConfig.brand.websiteUrl}/#business`,
  },
};

/* ================================================================
   HASH SCROLL — works with static SPA routing
   ================================================================ */
function HashScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    setTimeout(() => {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 120);
  }, [location]);

  return null;
}

/* ================================================================
   APP ROOT
   ================================================================ */
export default function App() {
  const location = useLocation();
  const pageStyles = location.pathname === "/games" ? gameLibraryShellStyles : appStyles;

  return (
    <html lang="en" dir="ltr" data-theme={siteConfig.theme.defaultTheme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <Meta />
        <script dangerouslySetInnerHTML={{ __html: preHydrationScript }} />
        <link rel="stylesheet" href={pageStyles} />
        <Links />

        {/* ── Local Business JSON-LD ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* ── Breadcrumb JSON-LD ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* ── Website JSON-LD ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>

      <body>
        <HashScrollHandler />
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/* SPA mode generates the Cloudflare Pages index from this component. */
export function HydrateFallback() {
  return (
    <html lang="en" dir="ltr" data-theme={siteConfig.theme.defaultTheme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <Meta />
        <script dangerouslySetInnerHTML={{ __html: preHydrationScript }} />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  const status = isRouteErrorResponse(error) ? error.status : 500;
  const heading = status === 404 ? "Page not found" : "Something went wrong";
  const message =
    status === 404
      ? "That page doesn't exist — it may have moved, or the link was mistyped."
      : "An unexpected error occurred. Try again, or head back to the home page.";

  return (
    <html lang="en" dir="ltr" data-theme={siteConfig.theme.defaultTheme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>{`${status} · ${heading} | ${siteConfig.brand.name}`}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="rd-error">
          <div className="rd-error__panel">
            <p className="rd-error__code">{status}</p>
            <h1 className="rd-error__title">{heading}</h1>
            <p className="rd-error__text">{message}</p>
            <div className="rd-error__actions">
              <a href="/" className="rd-btn rd-btn--primary">Back to home</a>
              <a href="/games" className="rd-btn rd-btn--secondary">Browse games</a>
            </div>
          </div>
        </main>
        <Scripts />
      </body>
    </html>
  );
}
