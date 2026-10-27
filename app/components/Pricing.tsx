import { siteConfig } from "~/config/siteConfig";

export default function Pricing() {
  const { kicker, heading, intro, footnote, plans } = siteConfig.pricing;

  return (
    <section className="rate-section" aria-labelledby="rates-title">
      <div className="ps-section-heading">
        <div>
          <p className="ps-kicker">{kicker}</p>
          <h2 id="rates-title">{heading}</h2>
        </div>
        <p>{intro}</p>
      </div>

      <div className="rate-section__grid">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className={`rate-card${plan.featured ? " rate-card--featured" : ""}`}
          >
            {plan.featured && (
              <span className="rate-card__tag">{plan.badge || "Most popular"}</span>
            )}
            <h3>{plan.title}</h3>
            {plan.description && <p className="rate-card__desc">{plan.description}</p>}
            <ul>
              {plan.rows.map(({ label, rate }) => (
                <li key={label}>
                  <span>{label}</span>
                  <strong>{rate}</strong>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="rate-section__footnote">{footnote}</p>
    </section>
  );
}
