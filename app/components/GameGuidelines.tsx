import type { IconType } from "react-icons";
import {
  FiAlertTriangle,
  FiClock,
  FiEye,
  FiLock,
  FiShield,
  FiUserCheck,
  FiWind,
  FiZap,
} from "react-icons/fi";
import { siteConfig } from "~/config/siteConfig";

const iconMap: Record<string, IconType> = {
  userCheck: FiUserCheck,
  shield: FiShield,
  wind: FiWind,
  zap: FiZap,
  lock: FiLock,
  eye: FiEye,
  clock: FiClock,
  alert: FiAlertTriangle,
};

export type Guideline = {
  icon: IconType;
  title: string;
  subtitle: string;
  points: string[];
};

export const guidelines: Guideline[] = siteConfig.guidelines.rules.map((rule) => ({
  icon: iconMap[rule.iconName] || FiShield,
  title: rule.title,
  subtitle: rule.subtitle,
  points: rule.points,
}));

export default function GameGuidelines() {
  const { kicker, heading, intro, alertNotice } = siteConfig.guidelines;

  return (
    <section className="guidelines-rules" aria-labelledby="guidelines-rules-title">
      <header className="guidelines-rules__heading">
        <p className="ps-kicker">{kicker}</p>
        <h2 id="guidelines-rules-title">{heading}</h2>
        <p>{intro}</p>
      </header>
      <div className="guidelines-rules__alert" role="alert">
        <FiAlertTriangle aria-hidden="true" />
        <p>{alertNotice}</p>
      </div>
      <div className="guidelines-rules__grid">
        {guidelines.map(({ icon: Icon, title, subtitle, points }) => (
          <article key={title}>
            <Icon aria-hidden="true" />
            <div>
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
            <ul>
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
