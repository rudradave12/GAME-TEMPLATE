import type { IconType } from "react-icons";
import {
  FiArrowUpRight,
  FiClock,
  FiCreditCard,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiShield,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { siteConfig } from "~/config/siteConfig";

const iconMap: Record<string, IconType> = {
  mapPin: FiMapPin,
  creditCard: FiCreditCard,
  shield: FiShield,
  tag: FiTag,
  clock: FiClock,
  users: FiUsers,
};

export default function Booking() {
  const { kicker, heading, intro, rulesHeading, rules } = siteConfig.booking;
  const { contact, hours } = siteConfig;

  return (
    <section className="booking-section" aria-labelledby="booking-title">
      <div className="booking-section__intro">
        <p className="ps-kicker">{kicker}</p>
        <h2 id="booking-title">{heading}</h2>
        <p>{intro}</p>
        <div className="booking-section__facts" aria-label="Booking information">
          <span>
            <FiClock aria-hidden="true" /> {hours.display}
          </span>
          <span>
            <FiMapPin aria-hidden="true" /> {contact.addressLocality}, {contact.addressRegion}
          </span>
        </div>
      </div>

      <div className="booking-section__actions">
        <article className="booking-card booking-card--call">
          <span className="booking-card__icon">
            <FiPhone aria-hidden="true" />
          </span>
          <p>Fastest confirmation</p>
          <h3>Call for a session</h3>
          <a href={`tel:${contact.phoneRaw}`}>
            {contact.phoneDisplay} <FiArrowUpRight aria-hidden="true" />
          </a>
          <span>{hours.weekdays}</span>
        </article>
        <article className="booking-card">
          <span className="booking-card__icon booking-card__icon--green">
            <FiMessageCircle aria-hidden="true" />
          </span>
          <p>Instant messaging</p>
          <h3>Book on WhatsApp</h3>
          <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp <FiArrowUpRight aria-hidden="true" />
          </a>
          <span>Fast replies during store opening hours.</span>
        </article>
      </div>

      <section className="booking-section__rules" aria-labelledby="booking-rules-title">
        <div>
          <p className="ps-kicker">Arena policy</p>
          <h3 id="booking-rules-title">{rulesHeading}</h3>
        </div>
        <div className="booking-section__rules-grid">
          {rules.map(({ iconName, title, description }) => {
            const Icon = iconMap[iconName] || FiClock;
            return (
              <article key={title}>
                <Icon aria-hidden="true" />
                <div>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
}
