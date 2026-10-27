import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";
import { siteConfig } from "~/config/siteConfig";
import { gameSlug, games } from "~/data/games";

const GAMES_PER_DAY = 6;
const ROTATION_START_DAY = Math.floor(Date.UTC(2026, 0, 1) / 86_400_000);

function getDayIndex(date: Date) {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000);
}

function getDailyFeaturedGames(date: Date) {
  if (!games.length) return [];
  const offset = ((getDayIndex(date) - ROTATION_START_DAY) * GAMES_PER_DAY) % games.length;
  const start = (offset + games.length) % games.length;
  return Array.from({ length: GAMES_PER_DAY }, (_, index) => games[(start + index) % games.length]);
}

const featuredImages: Record<number, string> = {
  41: "/images/featured/gta-vi.jpg",
  1: "/images/featured/cod-blackops-7.jpg",
  2: "/images/featured/gta-online.jpg",
  3: "/images/featured/valorant.jpg",
  4: "/images/featured/counter-strike-2.jpg",
  5: "/images/featured/apex-legends.jpg",
};

export default function GameLibraryHome() {
  const [featuredGames, setFeaturedGames] = useState(() => games.slice(0, GAMES_PER_DAY));

  useEffect(() => {
    const updateFeaturedGames = () => setFeaturedGames(getDailyFeaturedGames(new Date()));
    updateFeaturedGames();
    const timer = window.setInterval(updateFeaturedGames, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="featured-library" aria-labelledby="featured-library-title">
      <div className="ps-section-heading featured-library__heading">
        <div>
          <p className="ps-kicker">{siteConfig.brand.shortName} Lineup</p>
          <h2 id="featured-library-title">Your next game night starts here.</h2>
          <p>
            Curated featured games refresh daily. Browse our full title collection by genre, platform,
            and availability.
          </p>
        </div>
        <Link to="/games" className="ps-button ps-button--quiet">
          Explore the full library <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>

      <div className="featured-library__grid">
        {featuredGames.map((game, index) => (
          <Link
            key={game.id}
            to={`/games/${gameSlug(game.title)}`}
            className={`featured-game featured-game--${index + 1}`}
            aria-label={`Open ${game.title} details`}
          >
            <div className="featured-game__media">
              <img
                src={featuredImages[game.id] ?? game.image}
                alt={game.title}
                loading="lazy"
                decoding="async"
              />
              <span className={`featured-game__status featured-game__status--${game.status}`}>
                {game.status === "upcoming"
                  ? "Coming soon"
                  : game.status === "unavailable"
                    ? "Unavailable"
                    : "Available to play"}
              </span>
              <span className="featured-game__play">
                <FiPlay aria-hidden="true" />
              </span>
            </div>
            <div className="featured-game__content">
              <p>
                {game.category} · {game.platforms.join(" / ")}
              </p>
              <h3>{game.title}</h3>
              <span>{game.subtitle}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
