import type { IconType } from "react-icons";
import { FiActivity, FiMonitor, FiWifi, FiZap } from "react-icons/fi";
import { siteConfig } from "~/config/siteConfig";

const iconMap: Record<string, IconType> = {
  zap: FiZap,
  monitor: FiMonitor,
  wifi: FiWifi,
  activity: FiActivity,
};

export default function EsportsTicker() {
  const { label, items } = siteConfig.ticker;

  return (
    <section className="ps-play-strip" aria-label="Arena highlights">
      <div className="ps-play-strip__inner">
        <span className="ps-play-strip__label">
          <i aria-hidden="true" /> {label}
        </span>
        <div className="ps-play-strip__items">
          {items.map(({ iconName, label: itemLabel }) => {
            const Icon = iconMap[iconName] || FiZap;
            return (
              <span key={itemLabel}>
                <Icon aria-hidden="true" /> {itemLabel}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
