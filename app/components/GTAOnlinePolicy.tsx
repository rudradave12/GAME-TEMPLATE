import { FiAlertTriangle } from "react-icons/fi";
import { siteConfig } from "~/config/siteConfig";

export const gtaOnlinePolicyText =
  "All competitive and open-world online sessions maintain strict community standards. In-game harassment, unauthorized third-party cheats, and violation of arena community rules are strictly prohibited. Violations will result in immediate session termination without refund.";

export default function GTAOnlinePolicy() {
  return (
    <section className="guidelines-gta" aria-labelledby="gta-policy-title">
      <div className="guidelines-gta__art">
        <picture>
          <img
            src="/images/hero/battle-arena-desktop.jpg"
            alt={`${siteConfig.brand.name} fair play policy`}
            width="456"
            height="456"
            loading="lazy"
            decoding="async"
            style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "12px" }}
          />
        </picture>
      </div>
      <div className="guidelines-gta__content">
        <div className="guidelines-gta__heading">
          <h2 id="gta-policy-title">Arena fair play & online policy</h2>
          <p className="ps-kicker"><FiAlertTriangle aria-hidden="true" /> Community guidelines</p>
        </div>
        <p>{gtaOnlinePolicyText}</p>
      </div>
    </section>
  );
}
