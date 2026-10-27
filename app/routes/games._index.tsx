import GameLibraryPage from "~/components/GameLibrarypage";
import Footer from "~/components/Footer";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { siteConfig } from "~/config/siteConfig";
import gameCatalogStyles from "~/styles/game-catalog.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: gameCatalogStyles },
];

export const meta: MetaFunction = () => [
  { title: `Game Library | ${siteConfig.brand.name}` },
  {
    name: "description",
    content: `Browse console and PC games available at ${siteConfig.brand.name}, explore featured titles, and watch high-definition trailers.`,
  },
];

export default function GamesIndexRoute() {
  return (
    <>
      <GameLibraryPage />
      <Footer />
    </>
  );
}
