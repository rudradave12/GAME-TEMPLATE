import { Link, isRouteErrorResponse, useParams, useRouteError } from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer";
import GameDetailPage from "~/components/GameDetailPage";
import { siteConfig } from "~/config/siteConfig";
import { gameForSlug } from "~/data/games";
import gameCatalogStyles from "~/styles/game-catalog.css?url";
import gameDetailStyles from "~/styles/game-detail.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: gameCatalogStyles },
  { rel: "stylesheet", href: gameDetailStyles },
];

export const meta: MetaFunction = ({ params }) => {
  const game = gameForSlug(params.slug);
  if (!game) return [{ title: `Game not found | ${siteConfig.brand.name}` }];
  return [
    { title: `${game.title} | ${siteConfig.brand.name}` },
    {
      name: "description",
      content: `${game.subtitle}. Check availability, platforms, session guidance, and watch trailers at ${siteConfig.brand.name}.`,
    },
  ];
};

export default function GameDetailsRoute() {
  const { slug } = useParams();
  const game = gameForSlug(slug);

  return game ? (
    <>
      <GameDetailPage key={slug} game={game} />
      <Footer />
    </>
  ) : (
    <>
      <main className="game-detail-not-found" role="main">
        <div className="game-detail-not-found__content">
          <p className="game-detail-not-found__kicker">404 · GAME NOT FOUND</p>
          <h1>We couldn’t find that game.</h1>
          <p className="game-detail-not-found__desc">
            The title you requested{slug ? ` ("${slug}")` : ""} is not in our arena library. It may have moved or the link was mistyped.
          </p>
          <div className="game-detail-not-found__actions">
            <Link to="/games" className="rd-btn rd-btn--primary">
              Browse game library
            </Link>
            <Link to="/" className="rd-btn rd-btn--secondary">
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  return (
    <>
      <main className="game-detail-not-found" role="main">
        <div className="game-detail-not-found__content">
          <p className="game-detail-not-found__kicker">
            {is404 ? "404 · GAME NOT FOUND" : "GAME DETAILS UNAVAILABLE"}
          </p>
          <h1>{is404 ? "We couldn’t find that game." : "Unable to load game details"}</h1>
          <p className="game-detail-not-found__desc">
            {is404
              ? "That title is not currently in our arena collection. You can browse all available games below."
              : "An unexpected issue occurred while loading this game. Try browsing the library or return home."}
          </p>
          <div className="game-detail-not-found__actions">
            <Link to="/games" className="rd-btn rd-btn--primary">
              Browse game library
            </Link>
            <Link to="/" className="rd-btn rd-btn--secondary">
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

