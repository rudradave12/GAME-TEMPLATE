import {
  FiArrowUpRight,
  FiClock,
  FiCoffee,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiPhone,
  FiWifi,
  FiZap,
} from "react-icons/fi";
import { siteConfig } from "~/config/siteConfig";

const services = [
  { icon: FiZap, label: "PS5 & Next-Gen Consoles" },
  { icon: FiMonitor, label: "240Hz Pro PC Battlestations" },
  { icon: FiWifi, label: "Gigabit Low-Latency LAN" },
  { icon: FiCoffee, label: "Gourmet Cafe & Energy Drinks" },
];

export default function Footer() {
  const { brand, contact, hours } = siteConfig;

  return (
    <footer className="ps-footer">
      <div className="ps-footer__visit">
        <div>
          <p className="ps-kicker">Find the arena</p>
          <h2>Visit us in {contact.addressLocality}.</h2>
          <p>{contact.fullAddress}</p>
        </div>
        <div className="ps-footer__visit-actions">
          <a
            className="ps-button ps-button--primary"
            href={contact.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions <FiArrowUpRight aria-hidden="true" />
          </a>
          <a
            className="ps-button ps-button--quiet"
            href={`tel:${contact.phoneRaw}`}
          >
            Call {brand.shortName}
          </a>
        </div>
      </div>

      <div className="ps-footer__grid">
        <div className="ps-footer__brand">
          <div className="ps-footer__logo">
            <img src={brand.logoUrl} alt="" width="32" height="32" />
          </div>
          <h2>{brand.name}</h2>
          <p>{brand.description}</p>
          <span className="ps-footer__hours">
            <FiClock aria-hidden="true" /> {hours.display}
          </span>
        </div>

        <nav className="ps-footer__column" aria-label="Explore">
          <h3>Explore</h3>
          <a href="/#about">About the arena</a>
          <a href="/games">Game library</a>
          <a href="/#pricing">Rates & passes</a>
          <a href="/#cafe">Cafe & menu</a>
          <a href="/#booking">Book a station</a>
          <a href="/#faq">FAQ</a>
          <a href="/guidelines">Guidelines</a>
        </nav>

        <div className="ps-footer__column">
          <h3>Play your way</h3>
          <ul>
            {services.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon aria-hidden="true" /> {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="ps-footer__column ps-footer__column--contact">
          <h3>Contact</h3>
          <a href={contact.directionsUrl} target="_blank" rel="noopener noreferrer">
            <FiMapPin aria-hidden="true" /> <span>{contact.fullAddress}</span>
          </a>
          <a href={`tel:${contact.phoneRaw}`}>
            <FiPhone aria-hidden="true" /> {contact.phoneDisplay}
          </a>
          <a href={`mailto:${contact.email}`}>
            <FiMail aria-hidden="true" /> {contact.email}
          </a>
        </div>
      </div>

      <div className="ps-footer__bottom">
        <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
        <nav aria-label="Legal">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
