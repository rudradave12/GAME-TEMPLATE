import { Link } from "@remix-run/react";
import type { IconType } from "react-icons";
import { FiChevronRight, FiCoffee, FiMonitor, FiWifi, FiZap } from "react-icons/fi";
import { siteConfig } from "~/config/siteConfig";

const iconMap: Record<string, IconType> = {
  monitor: FiMonitor,
  wifi: FiWifi,
  coffee: FiCoffee,
  zap: FiZap,
};

export default function Experience() {
  const { kicker, heading, intro, cards } = siteConfig.experience;

  return (
    <section className="experience-section" aria-labelledby="experience-title">
      <div className="experience-section__copy">
        <p className="ps-kicker">{kicker}</p>
        <h2 id="experience-title">{heading}</h2>
        <p>{intro}</p>
        <Link to="/guidelines" className="ps-text-link">
          Read the arena guidelines <FiChevronRight aria-hidden="true" />
        </Link>
      </div>
      <div className="experience-section__cards">
        {cards.map(({ iconName, title, description }) => {
          const Icon = iconMap[iconName] || FiMonitor;
          return (
            <article key={title}>
              <Icon aria-hidden="true" />
              <strong>{title}</strong>
              <span>{description}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
