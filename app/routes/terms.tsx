import { useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import { siteConfig } from "~/config/siteConfig";

export const meta: MetaFunction = () => [
  { title: `Terms & Conditions — ${siteConfig.brand.name}` },
  {
    name: "description",
    content: `Terms for using the ${siteConfig.brand.name} website and gaming venue, including session rules, reservations, and third-party game trademarks.`,
  },
];

const SECTIONS = [
  {
    id: "acceptance",
    heading: "Acceptance of Terms",
    content: (
      <>
        <p>
          By accessing or using this website or visiting our gaming center located at{" "}
          {siteConfig.contact.fullAddress}, you agree to be bound by these Terms &amp; Conditions.
        </p>
        <p>These terms apply to all visitors, players, and customers of {siteConfig.brand.name}.</p>
      </>
    ),
  },
  {
    id: "about-venue",
    heading: `About ${siteConfig.brand.shortName}`,
    content: (
      <>
        <p>
          {siteConfig.brand.name} is an entertainment venue offering gaming consoles, PC battle
          stations, and LAN gaming sessions. This website provides information about available titles,
          rates, rules, and reservation options.
        </p>
        <p>
          This is an experiential venue and not an online digital distribution marketplace. Game
          trademarks, titles, and cover artwork are displayed to inform visitors about available games.
        </p>
      </>
    ),
  },
  {
    id: "code-of-conduct",
    heading: "Arena Code of Conduct",
    content: (
      <>
        <p>To ensure a premier experience for all guests, players agree to follow our code of conduct:</p>
        <ul className="legal-list">
          <li>
            <strong>Respectful Behavior:</strong> Harassment, discriminatory language, and toxic
            behavior toward players or arena staff are strictly prohibited.
          </li>
          <li>
            <strong>Hardware Integrity:</strong> Equipment must be handled with appropriate care.
            Intentional damage to displays, controllers, or PCs will be billed at full replacement cost.
          </li>
          <li>
            <strong>Age &amp; Ratings:</strong> Players must satisfy age recommendations for
            mature-rated games.
          </li>
          <li>
            <strong>Clean Space:</strong> Only snacks and drinks purchased at the arena cafe may be
            consumed at gaming desks.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "bookings-and-rates",
    heading: "Bookings, Payments & Rates",
    content: (
      <>
        <p>Station rates and booking policies are governed as follows:</p>
        <ul className="legal-list">
          <li>
            <strong>Hourly Billing:</strong> Sessions are tracked strictly from the reserved start time.
          </li>
          <li>
            <strong>Advance Bookings:</strong> Advance reservations ensure immediate station availability.
          </li>
          <li>
            <strong>Rescheduling:</strong> Sessions may be rescheduled with at least 2 hours notice.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    heading: "Trademarks & Intellectual Property",
    content: (
      <>
        <p>
          All video game titles, publisher names, character art, logos, and box arts displayed on this
          website are trademarks and property of their respective owners (e.g. Sony Interactive
          Entertainment, Microsoft, Valve, Riot Games, Rockstar Games, Electronic Arts, Activision).
        </p>
        <p>
          {siteConfig.brand.name} is an independent entertainment lounge and is not officially
          endorsed by or directly affiliated with these game publishers. Third-party media is shown for
          descriptive identification purposes only.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "Contact Information",
    content: (
      <>
        <p>For inquiries regarding these terms, please contact management:</p>
        <div className="legal-contact-block">
          <div className="legal-contact-row">
            <span className="legal-contact-label">Venue</span>
            <span className="legal-contact-value">{siteConfig.brand.name}</span>
          </div>
          <div className="legal-contact-row">
            <span className="legal-contact-label">Location</span>
            <span className="legal-contact-value">{siteConfig.contact.fullAddress}</span>
          </div>
          <div className="legal-contact-row">
            <span className="legal-contact-label">Email</span>
            <a href={`mailto:${siteConfig.contact.email}`} className="legal-contact-value legal-link">
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="legal-contact-row">
            <span className="legal-contact-label">Phone</span>
            <a href={`tel:${siteConfig.contact.phoneRaw}`} className="legal-contact-value legal-link">
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </>
    ),
  },
];

export default function TermsRoute() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <main className="legal-page" aria-labelledby="terms-title">
      <div className="legal-hero">
        <div className="legal-hero__inner">
          <a href="/" className="legal-back">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="12"
              height="12"
            >
              <polyline points="10 4 6 8 10 12" />
            </svg>
            Back to Home
          </a>
          <span className="legal-eyebrow">Legal</span>
          <h1 id="terms-title" className="legal-title">
            Terms &amp; Conditions
          </h1>
          <p className="legal-meta">Last updated: {new Date().getFullYear()}</p>
          <p className="legal-intro">
            These terms govern your visit to {siteConfig.brand.name} and use of our website. Please
            review them prior to booking a station.
          </p>
        </div>
      </div>

      <div className="legal-body">
        <div className="legal-body__inner">
          <nav className="legal-toc" aria-label="Table of contents">
            <span className="legal-toc__label">Contents</span>
            <ol className="legal-toc__list">
              {SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="legal-toc__link">
                    <span className="legal-toc__num">{String(i + 1).padStart(2, "0")}</span>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal-sections">
            {SECTIONS.map((s, i) => (
              <section key={s.id} id={s.id} className="legal-section">
                <div className="legal-section__num">{String(i + 1).padStart(2, "0")}</div>
                <div className="legal-section__body">
                  <h2 className="legal-section__heading">{s.heading}</h2>
                  <div className="legal-section__content">{s.content}</div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <div className="legal-foot">
        <div className="legal-foot__inner">
          <span>© {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</span>
          <nav className="legal-foot__nav">
            <a href="/privacy" className="legal-foot__link">
              Privacy
            </a>
            <span className="legal-foot__sep">|</span>
            <a href="/terms" className="legal-foot__link legal-foot__link--active">
              Terms
            </a>
            <span className="legal-foot__sep">|</span>
            <a href="/" className="legal-foot__link">
              Home
            </a>
          </nav>
        </div>
      </div>
    </main>
  );
}
