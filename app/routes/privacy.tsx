import { useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import { siteConfig } from "~/config/siteConfig";

export const meta: MetaFunction = () => [
  { title: `Privacy Policy — ${siteConfig.brand.name}` },
  {
    name: "description",
    content: `Learn what information ${siteConfig.brand.name} handles when you browse the site, reserve a session, or contact us.`,
  },
];

const SECTIONS = [
  {
    id: "introduction",
    heading: "Introduction",
    content: (
      <>
        <p>
          {siteConfig.brand.name} is the public-facing brand for our gaming venue located at{" "}
          {siteConfig.contact.fullAddress}. This Privacy Policy explains how we handle information
          when you browse this website, contact us, arrange a play session by phone or messaging, or
          visit our facility. The website does not collect invasive tracking data and serves as an
          informative portal for gamers.
        </p>
        <p>
          If you have questions about this policy or information you have shared with us, please
          email{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="legal-link">
            {siteConfig.contact.email}
          </a>{" "}
          or call{" "}
          <a href={`tel:${siteConfig.contact.phoneRaw}`} className="legal-link">
            {siteConfig.contact.phoneDisplay}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    content: (
      <>
        <p>We collect only the information necessary to provide you with our services:</p>
        <ul className="legal-list">
          <li>
            <strong>Contact Information:</strong> Your name, phone number, email address, or other
            details you choose to share when calling, messaging, or visiting in person.
          </li>
          <li>
            <strong>Session Requests:</strong> The station or console platform, requested date/time,
            party size, and duration provided when booking.
          </li>
          <li>
            <strong>At-Venue Records:</strong> Time slot allocation and receipt records necessary for
            operational integrity.
          </li>
        </ul>
        <p>
          Please do not send passwords, social security numbers, or sensitive financial documents
          through our chat or messaging channels.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    heading: "How We Use Your Information",
    content: (
      <>
        <p>The information we collect is used solely for legitimate operational purposes:</p>
        <ul className="legal-list">
          <li>Responding to inquiries and managing gaming session reservations.</li>
          <li>Sending confirmation details via the communication channel you initiated.</li>
          <li>Providing on-site technical support and resolving service issues.</li>
          <li>Improving website performance and station availability schedules.</li>
          <li>Complying with applicable local laws and regulations.</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information to third-party advertisers.</p>
      </>
    ),
  },
  {
    id: "cookies-and-analytics",
    heading: "Analytics & Cookies",
    content: (
      <>
        <p>
          We prioritize speed and privacy. We do not use third-party tracking cookies or marketing
          pixels. Standard aggregate web server metrics (such as page response times and browser
          types) may be analyzed to improve site loading speed and layout responsiveness across devices.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    heading: "Data Retention & Security",
    content: (
      <>
        <p>
          Reservation contact logs are retained only as long as necessary for administrative and
          accounting purposes. In addition, gaming stations at our arena are rebooted with automated
          sandboxing tools between sessions to purge temporary player logs.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "Contact Us",
    content: (
      <>
        <p>If you have any questions or concerns regarding this Privacy Policy, please get in touch:</p>
        <div className="legal-contact-block">
          <div className="legal-contact-row">
            <span className="legal-contact-label">Brand / Venue</span>
            <span className="legal-contact-value">{siteConfig.brand.name}</span>
          </div>
          <div className="legal-contact-row">
            <span className="legal-contact-label">Address</span>
            <span className="legal-contact-value">{siteConfig.contact.fullAddress}</span>
          </div>
          <div className="legal-contact-row">
            <span className="legal-contact-label">Email</span>
            <a href={`mailto:${siteConfig.contact.email}`} className="legal-contact-value legal-link">
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="legal-contact-row">
            <span className="legal-contact-label">Phone / WhatsApp</span>
            <a href={`tel:${siteConfig.contact.phoneRaw}`} className="legal-contact-value legal-link">
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </>
    ),
  },
];

export default function PrivacyRoute() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <main className="legal-page" aria-labelledby="privacy-policy-title">
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
          <h1 id="privacy-policy-title" className="legal-title">
            Privacy Policy
          </h1>
          <p className="legal-meta">Last updated: {new Date().getFullYear()}</p>
          <p className="legal-intro">
            {siteConfig.brand.name} is committed to handling your information responsibly and
            transparently. This policy covers our website and gaming venue services.
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
            <a href="/privacy" className="legal-foot__link legal-foot__link--active">
              Privacy
            </a>
            <span className="legal-foot__sep">|</span>
            <a href="/terms" className="legal-foot__link">
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
