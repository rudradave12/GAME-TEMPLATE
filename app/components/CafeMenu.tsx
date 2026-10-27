import { useState } from "react";
import { FiCoffee, FiShoppingBag, FiTag } from "react-icons/fi";
import { siteConfig } from "~/config/siteConfig";

export default function CafeMenu() {
  const { kicker, heading, intro, categories, items, enabled } = siteConfig.cafe;
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  if (!enabled) return null;

  const filteredItems =
    selectedCategory === "ALL"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <section className="cafe-section" id="cafe" aria-labelledby="cafe-title">
      <div className="ps-section-heading">
        <div>
          <p className="ps-kicker">
            <FiCoffee aria-hidden="true" /> {kicker}
          </p>
          <h2 id="cafe-title">{heading}</h2>
        </div>
        <p>{intro}</p>
      </div>

      <div className="cafe-section__filters" role="group" aria-label="Filter cafe menu">
        <button
          type="button"
          className={`filter-chip ${selectedCategory === "ALL" ? "filter-chip--active" : ""}`}
          onClick={() => setSelectedCategory("ALL")}
          aria-pressed={selectedCategory === "ALL"}
        >
          All Items
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-chip ${selectedCategory === cat ? "filter-chip--active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
            aria-pressed={selectedCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="cafe-section__grid">
        {filteredItems.map((item) => (
          <article key={item.name} className="cafe-card">
            <div className="cafe-card__header">
              <span className="cafe-card__category">{item.category}</span>
              {item.tag && (
                <span className="cafe-card__tag">
                  <FiTag aria-hidden="true" /> {item.tag}
                </span>
              )}
            </div>
            <div className="cafe-card__body">
              <h3 className="cafe-card__name">{item.name}</h3>
              <p className="cafe-card__desc">{item.description}</p>
            </div>
            <div className="cafe-card__footer">
              <span className="cafe-card__price">{item.price}</span>
              <span className="cafe-card__station-hint">
                <FiShoppingBag aria-hidden="true" /> Served at your station
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
