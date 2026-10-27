import { siteConfig } from "~/config/siteConfig";

export default function AboutSection() {
  const { kicker, heading, paragraphs, stats } = siteConfig.about;

  return (
    <section className="lounge-intro" aria-labelledby="about-title">
      <div className="lounge-intro__grid">
        <div className="lounge-intro__copy">
          <p className="ps-kicker">{kicker}</p>
          <h2 id="about-title">{heading}</h2>
          {paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <aside className="lounge-intro__standard" aria-label="Game zone standards">
          <span className="lounge-intro__orb lounge-intro__orb--one" aria-hidden="true" />
          <span className="lounge-intro__orb lounge-intro__orb--two" aria-hidden="true" />
          <p className="ps-kicker">Our standards</p>
          <div className="lounge-intro__stats">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
