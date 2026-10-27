/**
 * ==============================================================================
 * GAMEZONE WEBSITE TEMPLATE — CENTRAL SITE CONFIGURATION
 * ==============================================================================
 * 
 * Welcome to the GameZone template configuration file!
 * This file centralizes all business details, branding, contact info, pricing,
 * food/cafe menu, venue rules, FAQs, and SEO settings.
 * 
 * Changing your information here updates it across the entire website,
 * including navigation, footer, hero, about section, booking, rates,
 * structured data (Schema.org JSON-LD), and metadata.
 * 
 * @see README.md for the full Customization Guide.
 * ==============================================================================
 */

export interface PricingPlanRow {
  label: string;
  rate: string;
}

export interface PricingPlan {
  title: string;
  badge?: string;
  featured?: boolean;
  description?: string;
  rows: PricingPlanRow[];
}

export interface CafeMenuItem {
  name: string;
  category: "Drinks & Energy" | "Hot Bites & Pizza" | "Combos & Snacks";
  price: string;
  description: string;
  tag?: string;
}

export interface VenueRule {
  iconName: "userCheck" | "shield" | "wind" | "zap" | "lock" | "eye" | "clock" | "alert";
  title: string;
  subtitle: string;
  points: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface HighlightItem {
  iconName: "zap" | "monitor" | "wifi" | "activity";
  label: string;
}

export interface SiteConfig {
  /** Brand identity & corporate metadata */
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    subTagline: string;
    description: string;
    legalName: string;
    foundedYear: number;
    websiteUrl: string;
    logoUrl: string;
    faviconUrl: string;
  };

  /** Contact & venue location details */
  contact: {
    phoneDisplay: string;
    phoneRaw: string;
    whatsappDisplay: string;
    whatsappRaw: string;
    whatsappUrl: string;
    email: string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
    fullAddress: string;
    directionsUrl: string;
    geo: {
      latitude: string;
      longitude: string;
    };
  };

  /** Operating hours */
  hours: {
    display: string;
    weekdays: string;
    weekends: string;
    opens: string;
    closes: string;
    daysOfWeek: string[];
  };

  /** Social media links */
  social: {
    discord?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    twitch?: string;
    facebook?: string;
  };

  /** Theme and UI settings */
  theme: {
    storageKey: string;
    defaultTheme: "dark" | "light";
    themeColorLight: string;
    themeColorDark: string;
    primaryAccent: string;
  };

  /** About section content & statistics */
  about: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    stats: StatItem[];
  };

  /** Ticker highlights displayed beneath the hero */
  ticker: {
    label: string;
    items: HighlightItem[];
  };

  /** Pricing & rates configuration */
  pricing: {
    kicker: string;
    heading: string;
    intro: string;
    footnote: string;
    currencySymbol: string;
    currencyCode: string;
    plans: PricingPlan[];
  };

  /** Cafe, snacks & refreshments menu */
  cafe: {
    enabled: boolean;
    kicker: string;
    heading: string;
    intro: string;
    categories: Array<CafeMenuItem["category"]>;
    items: CafeMenuItem[];
  };

  /** Booking, reservation steps & policies */
  booking: {
    kicker: string;
    heading: string;
    intro: string;
    rulesHeading: string;
    rules: Array<{
      iconName: "mapPin" | "creditCard" | "shield" | "tag" | "clock" | "users";
      title: string;
      description: string;
    }>;
  };

  /** General venue & player guidelines */
  guidelines: {
    kicker: string;
    heading: string;
    intro: string;
    alertNotice: string;
    rules: VenueRule[];
  };

  /** Frequently asked questions */
  faqs: {
    kicker: string;
    heading: string;
    intro: string;
    items: FAQItem[];
  };

  /** Player experience section */
  experience: {
    kicker: string;
    heading: string;
    intro: string;
    cards: Array<{
      iconName: "monitor" | "wifi" | "coffee" | "zap";
      title: string;
      description: string;
    }>;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "GAMEZONE ARENA™",
    shortName: "GAMEZONE",
    tagline: "Your Ultimate Gaming Destination",
    subTagline: "Esports Arena · Next-Gen Consoles · Pro PC Battle Stations",
    description:
      "Premier gaming lounge and esports arena offering PlayStation 5, high-refresh 240Hz PC battle stations, low-latency fiber LAN, and premium refreshments.",
    legalName: "GameZone Arena LLC",
    foundedYear: 2024,
    websiteUrl: "https://gamezone-template-demo.pages.dev",
    logoUrl: "/icons/logo.svg",
    faviconUrl: "/icons/logo.svg",
  },

  contact: {
    phoneDisplay: "+1 (555) 234-5678",
    phoneRaw: "+15552345678",
    whatsappDisplay: "+1 (555) 234-5678",
    whatsappRaw: "15552345678",
    whatsappUrl: "https://wa.me/15552345678",
    email: "contact@gamezone-arena.com",
    streetAddress: "1042 Arena Boulevard, Suite 200",
    addressLocality: "Metro City",
    addressRegion: "California",
    postalCode: "90210",
    addressCountry: "US",
    fullAddress: "1042 Arena Boulevard, Suite 200, Metro City, CA 90210",
    directionsUrl: "https://maps.google.com/?q=GameZone+Arena",
    geo: {
      latitude: "37.7749",
      longitude: "-122.4194",
    },
  },

  hours: {
    display: "Open Daily · 10:00 AM – 11:00 PM",
    weekdays: "Mon–Thu · 10:00 AM – 10:00 PM",
    weekends: "Fri–Sun · 10:00 AM – Midnight",
    opens: "10:00",
    closes: "23:00",
    daysOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },

  social: {
    discord: "https://discord.gg/gamezone",
    instagram: "https://instagram.com/gamezonearena",
    twitter: "https://twitter.com/gamezonearena",
    youtube: "https://youtube.com/@gamezonearena",
    twitch: "https://twitch.tv/gamezonearena",
  },

  theme: {
    storageKey: "gamezone-theme",
    defaultTheme: "dark",
    themeColorLight: "#f5f8ff",
    themeColorDark: "#071321",
    primaryAccent: "#0066bd",
  },

  about: {
    kicker: "The GameZone Experience",
    heading: "A better way to play.",
    paragraphs: [
      "GAMEZONE ARENA is a premier gaming venue designed from the ground up for players who value performance, comfort, and precision. Whether you are competing with your squad, practicing for an upcoming tournament, or unwinding with friends, you'll feel right at home.",
      "Our stations feature PlayStation 5 consoles, Xbox Series X, and high-end esports PCs powered by top-tier graphics cards and 240Hz ultra-low latency displays for silky-smooth framerates.",
      "The arena atmosphere is carefully managed to remain friendly, respectful, and safe, allowing players of all skill levels to focus on what matters most: exceptional gaming.",
      "Browse our comprehensive game library featuring current AAA blockbusters, competitive shooters, tactical multiplayer hits, and family-friendly party games.",
      "Fuel your grind with gourmet snacks and chilled energy drinks directly at your station. Outside food policies are strictly maintained to protect hardware and ensure cleanliness.",
    ],
    stats: [
      { value: "240Hz", label: "Esports displays" },
      { value: "Gigabit", label: "Fiber LAN sync" },
      { value: "PS5 & PC", label: "Top-tier hardware" },
      { value: "Pro Gear", label: "Mechanical & headsets" },
    ],
  },

  ticker: {
    label: "Live at Arena",
    items: [
      { iconName: "zap", label: "PS5 · PC · Xbox" },
      { iconName: "monitor", label: "240Hz esports displays" },
      { iconName: "wifi", label: "Gigabit LAN ready" },
      { iconName: "activity", label: "Casual & competitive play" },
    ],
  },

  pricing: {
    kicker: "Transparent hourly rates",
    heading: "Pick a screen. Bring your squad.",
    intro:
      "All stations are billed on a flexible hourly basis. Discounted multi-hour passes and tournament rates are available at the front counter.",
    footnote:
      "Rates include access to our entire game library. For group events, LAN parties, and private room rentals, please contact our team.",
    currencySymbol: "$",
    currencyCode: "USD",
    plans: [
      {
        title: "Pro Gaming PC",
        description: "240Hz display, RTX 4080, mechanical keyboard & studio headset",
        rows: [
          { label: "1 hour pass", rate: "$7 / hr" },
          { label: "3 hour pass", rate: "$18 total" },
          { label: "5 hour grind pass", rate: "$28 total" },
          { label: "All-day pass", rate: "$45 flat" },
        ],
      },
      {
        title: "50″ 4K Console Lounge",
        description: "PlayStation 5 & Xbox Series X with low-latency HDR TVs",
        rows: [
          { label: "1 player", rate: "$8 / hr" },
          { label: "2 players (Co-op)", rate: "$14 / hr" },
          { label: "3 players", rate: "$18 / hr" },
          { label: "4 players (Squad)", rate: "$22 / hr" },
        ],
      },
      {
        title: "65″ OLED VIP Lounge",
        badge: "Most popular",
        featured: true,
        description: "Flagship 65″ 120Hz OLED screen, leather seating & surround sound",
        rows: [
          { label: "1 player", rate: "$12 / hr" },
          { label: "2 players", rate: "$20 / hr" },
          { label: "3 players", rate: "$26 / hr" },
          { label: "4 players", rate: "$32 / hr" },
        ],
      },
      {
        title: "Team LAN / Party Booth",
        description: "5 synchronized PCs or dual consoles for team matches & private sessions",
        rows: [
          { label: "5-Player PC Team", rate: "$30 / hr" },
          { label: "Dual Console Booth", rate: "$24 / hr" },
          { label: "2-Hour Birthday Party", rate: "$120 total" },
          { label: "Full Lockout (Inquire)", rate: "Custom" },
        ],
      },
    ],
  },

  cafe: {
    enabled: true,
    kicker: "Cafe & Refreshments",
    heading: "Fuel your game.",
    intro:
      "Keep your energy high with artisanal cold brews, energy drinks, and freshly prepared hot bites delivered straight to your gaming station.",
    categories: ["Drinks & Energy", "Hot Bites & Pizza", "Combos & Snacks"],
    items: [
      {
        name: "Monster Ultra / Red Bull",
        category: "Drinks & Energy",
        price: "$3.50",
        description: "Assorted chilled energy drinks (Original, Sugar-Free, Mango Loco).",
        tag: "Popular",
      },
      {
        name: "Iced Caramel Cold Brew",
        category: "Drinks & Energy",
        price: "$4.50",
        description: "Slow-steeped craft cold brew with sweet caramel and oat milk.",
      },
      {
        name: "Artisan Pepperoni Flatbread",
        category: "Hot Bites & Pizza",
        price: "$8.50",
        description: "Crispy thin crust with marinara, fresh mozzarella, and spicy pepperoni.",
        tag: "Hot",
      },
      {
        name: "Loaded Gamer Nachos",
        category: "Hot Bites & Pizza",
        price: "$7.50",
        description: "Tortilla chips with melted queso, jalapeños, salsa, and sour cream.",
      },
      {
        name: "Crispy Chicken Tenders & Fries",
        category: "Hot Bites & Pizza",
        price: "$9.00",
        description: "Golden tender strips served with seasoned fries and choice of dips.",
      },
      {
        name: "Pro Squad Combo Box",
        category: "Combos & Snacks",
        price: "$14.00",
        description: "Large fries, 2 canned drinks, and your choice of hot sliders or tenders.",
        tag: "Best Value",
      },
      {
        name: "Gourmet Popcorn & Candy Bag",
        category: "Combos & Snacks",
        price: "$4.00",
        description: "Buttery theater popcorn with assorted bite-sized gaming candy.",
      },
      {
        name: "Sparkling Flavored Seltzer",
        category: "Drinks & Energy",
        price: "$2.50",
        description: "Zero-calorie refreshing sparkling water with lime, berry, or peach.",
      },
    ],
  },

  booking: {
    kicker: "Reservations & Walk-Ins",
    heading: "Ready when you are.",
    intro:
      "Reserve in advance to guarantee your favorite station or walk in anytime. Call us or message on WhatsApp for instant slot confirmation.",
    rulesHeading: "Good sessions start with clear rules.",
    rules: [
      {
        iconName: "mapPin",
        title: "Walk-ins & Calls",
        description: "Drop in anytime or call ahead to check live station availability.",
      },
      {
        iconName: "creditCard",
        title: "Instant Confirmation",
        description: "Advance payments secure your preferred station and time slot immediately.",
      },
      {
        iconName: "shield",
        title: "Rescheduling Friendly",
        description: "Give us 2 hours notice to reschedule your play session with zero fees.",
      },
      {
        iconName: "tag",
        title: "Dedicated Gear",
        description: "Your assigned station remains reserved exclusively for your party.",
      },
      {
        iconName: "clock",
        title: "Zero Waiting Time",
        description: "Arrive at your booked time and start gaming with zero queue delays.",
      },
      {
        iconName: "users",
        title: "Group Discounts",
        description: "Parties of 4 or more receive special rates for multi-hour sessions.",
      },
    ],
  },

  guidelines: {
    kicker: "Official Arena Policies",
    heading: "Play bold. Play fair.",
    intro:
      "To ensure every player enjoys an immersive and safe experience, please review our house guidelines before your session.",
    alertNotice:
      "Safety notice: Entry is reserved for active players and their registered guests. Please arrive 5-10 minutes before your scheduled booking time.",
    rules: [
      {
        iconName: "userCheck",
        title: "Age & Entry",
        subtitle: "Ages 12+ or with guardian",
        points: [
          "Players under 12 must be accompanied by an adult.",
          "Government ID or student pass may be requested for age-rated titles.",
        ],
      },
      {
        iconName: "shield",
        title: "Zero Tolerance",
        subtitle: "Respect fellow players",
        points: [
          "Zero tolerance for toxicity, harassment, or verbal abuse.",
          "No smoking, vaping, or alcohol allowed inside the premises.",
          "Outside hot meals prohibited to protect electronics and hygiene.",
        ],
      },
      {
        iconName: "wind",
        title: "Clean Environment",
        subtitle: "Pristine battlestations",
        points: [
          "Sanitizing wipes available at every station.",
          "Keep drinks in spill-proof cups away from keyboards and consoles.",
          "Dispose of wrappers and trash in designated bins.",
        ],
      },
      {
        iconName: "zap",
        title: "Hardware Care",
        subtitle: "Handle equipment with respect",
        points: [
          "Please handle controllers, mice, and headsets with care.",
          "Intentional equipment damage will be charged at retail replacement value.",
          "Report any technical glitches to staff immediately for prompt resolution.",
        ],
      },
      {
        iconName: "lock",
        title: "Account Security",
        subtitle: "Bring your own accounts",
        points: [
          "Feel free to log into your Steam, Riot, Epic, or PSN accounts.",
          "All stations run automated system resets to wipe session logins on logout.",
          "Remember to log out of personal credentials before leaving.",
        ],
      },
      {
        iconName: "eye",
        title: "Age Ratings & Content",
        subtitle: "ESRB / PEGI compliance",
        points: [
          "Mature (M-rated) games require players to meet legal age thresholds.",
          "Inappropriate or adult-themed web browsing is strictly blocked.",
          "Immediate session forfeiture without refund for explicit content breaches.",
        ],
      },
      {
        iconName: "clock",
        title: "Session Timing",
        subtitle: "Punctual gameplay",
        points: [
          "Time counts from your reserved start slot.",
          "Extensions are subject to next-booking availability.",
          "Staff will give a 10-minute warning before your session concludes.",
        ],
      },
      {
        iconName: "alert",
        title: "Management Rights",
        subtitle: "Safe community space",
        points: [
          "Staff decisions regarding arena safety and code of conduct are final.",
          "Right of admission is reserved to maintain a welcoming atmosphere.",
        ],
      },
    ],
  },

  faqs: {
    kicker: "Got questions?",
    heading: "Frequently Asked Questions",
    intro:
      "Everything you need to know about visiting the arena, reserving stations, and gaming with us.",
    items: [
      {
        question: "Do I need to book in advance or can I walk in?",
        answer:
          "Walk-ins are always welcome! However, on weekends and peak evening hours (5 PM – 10 PM), stations fill up quickly. We strongly recommend booking ahead by phone or WhatsApp to guarantee your screen without waiting.",
      },
      {
        question: "Can I bring my own gaming peripherals (mouse, headset, controller)?",
        answer:
          "Yes! You are welcome to plug in your own USB mouse, keyboard, pro controller, or 3.5mm headset. Our staff can help you connect them cleanly without disrupting setup cables.",
      },
      {
        question: "Can I log into my own Steam, Epic Games, Riot, or PlayStation account?",
        answer:
          "Absolutely. You can log into your personal accounts to access your saved games, ranks, and cosmetic skins. All PCs and consoles feature automated reboot sandboxing that wipes temporary credentials upon session end.",
      },
      {
        question: "What platforms and consoles are available?",
        answer:
          "We offer PlayStation 5, Xbox Series X, and high-performance esports PCs equipped with 240Hz G-Sync displays and RTX series GPUs. We also host 65″ 4K 120Hz OLED lounge stations for multiplayer couch co-op.",
      },
      {
        question: "Is food and beverage available on site?",
        answer:
          "Yes! We offer energy drinks, artisan cold brews, snacks, and hot bites through our Cafe menu. To maintain equipment safety and hygiene, outside meals and open cups are not permitted in gaming areas.",
      },
      {
        question: "Do you host private LAN parties, birthdays, or esports tournaments?",
        answer:
          "Yes! We offer full and partial venue lockouts for birthdays, esports watch parties, local tournaments, and corporate game nights. Contact our management via phone or WhatsApp for custom group packages.",
      },
    ],
  },

  experience: {
    kicker: "Player Experience",
    heading: "Built for a smooth session.",
    intro:
      "We are committed to providing a top-tier gaming environment. Our facility prioritizes player comfort, high-performance gear, and an inclusive community atmosphere.",
    cards: [
      {
        iconName: "monitor",
        title: "High-End PCs",
        description: "Performance-first rigs with 240Hz monitors for competitive edge.",
      },
      {
        iconName: "wifi",
        title: "Gigabit Fiber LAN",
        description: "Ultra-low latency connections for flawless team multiplayer.",
      },
      {
        iconName: "coffee",
        title: "Cafe & Refreshments",
        description: "Cold brews, hot bites, and energy drinks delivered to your desk.",
      },
      {
        iconName: "zap",
        title: "Next-Gen Consoles",
        description: "PlayStation 5 and 4K displays for cinematic story & sports games.",
      },
    ],
  },
};

export default siteConfig;
