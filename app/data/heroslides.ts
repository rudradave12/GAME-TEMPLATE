/* ================================================================
   HERO SLIDES DATA
   ─────────────────────────────────────────────────────────────
   Each slide has:

   IMAGES (shown immediately as the responsive hero artwork)
   • imageDesktop        — 16:9 widescreen,  e.g. 1920×1080
   • imageMobilePortrait — 9:16 portrait,    e.g.  828×1792
   • imageMobileLandscape— 16:9 landscape,   e.g. 1792× 828

   BUTTONS
   • btn1 / btn2

   Each breakpoint references an appropriately sized still image. Keeping the
   landing hero image-led avoids downloading large autoplay videos before a
   visitor has chosen to watch a trailer.
   ================================================================ */

export type HeroSlide = {
  id: number;
  title: string;
  tagline: string;
  category: string;

  /* ── Responsive artwork ── */
  imageDesktop:         string;
  imageMobilePortrait:  string;
  imageMobileLandscape: string;

  /* ── Buttons ── */
  btn1: string;
  btn2: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "BATTLE ARENA",
    tagline: "5V5 TACTICAL COMPETITIVE FIREFIGHT",
    category: "TACTICAL FPS",

    imageDesktop:         "/images/hero/battle-arena-desktop.jpg",
    imageMobilePortrait:  "/images/hero/battle-arena-mobile.jpg",
    imageMobileLandscape: "/images/hero/battle-arena-desktop.jpg",

    btn1: "EXPLORE ARENA",
    btn2: "FPS ACTION",
  },

  {
    id: 2,
    title: "RACING ZONE",
    tagline: "HIGH SPEED MULTIPLAYER DRIFT CIRCUIT",
    category: "ARCADE RACING",

    imageDesktop:         "/images/hero/racing-zone-desktop.jpg",
    imageMobilePortrait:  "/images/hero/racing-zone-mobile.jpg",
    imageMobileLandscape: "/images/hero/racing-zone-desktop.jpg",

    btn1: "VIEW TRACKS",
    btn2: "ARCADE RACING",
  },

  {
    id: 3,
    title: "ACTION ZONE",
    tagline: "SQUAD-BASED SPECIAL COMBAT MISSIONS",
    category: "CO-OP ACTION",

    imageDesktop:         "/images/hero/action-zone-desktop.jpg",
    imageMobilePortrait:  "/images/hero/action-zone-mobile.jpg",
    imageMobileLandscape: "/images/hero/action-zone-desktop.jpg",

    btn1: "JOIN SQUAD",
    btn2: "MULTIPLAYER",
  },

  {
    id: 4,
    title: "GAME NIGHT",
    tagline: "COMMUNITY ESPORTS & WEEKEND TOURNAMENTS",
    category: "ESPORTS ARENA",

    imageDesktop:         "/images/hero/game-night-desktop.jpg",
    imageMobilePortrait:  "/images/hero/game-night-mobile.jpg",
    imageMobileLandscape: "/images/hero/game-night-desktop.jpg",

    btn1: "VIEW EVENTS",
    btn2: "COMMUNITY",
  },

  {
    id: 5,
    title: "SPORTS ARENA",
    tagline: "NEXT-GEN TOURNAMENTS & CHAMPIONSHIP LEAGUES",
    category: "SPORTS SIM",

    imageDesktop:         "/images/hero/sports-arena-desktop.jpg",
    imageMobilePortrait:  "/images/hero/sports-arena-mobile.jpg",
    imageMobileLandscape: "/images/hero/sports-arena-desktop.jpg",

    btn1: "BOOK CONSOLE",
    btn2: "SPORTS LOUNGE",
  },
];
