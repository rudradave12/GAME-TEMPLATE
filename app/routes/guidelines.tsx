import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { FiArrowUpRight, FiShield } from "react-icons/fi";
import Footer from "~/components/Footer";
import GameGuidelines from "~/components/GameGuidelines";
import GTAOnlinePolicy from "~/components/GTAOnlinePolicy";
import { siteConfig } from "~/config/siteConfig";

export const meta: MetaFunction = () => [
  { title: `Guidelines | ${siteConfig.brand.name}` },
  {
    name: "description",
    content: `Read the ${siteConfig.brand.name} visitor, equipment care, session guidelines, and gameplay rules before your visit.`,
  },
];

export default function GuidelinesRoute() {
  return (
    <main className="guidelines-page">
      <section className="guidelines-hero">
        <div>
          <p className="ps-kicker">
            <FiShield aria-hidden="true" /> {siteConfig.brand.shortName} · Arena Hub
          </p>
          <h1>Play bold. Play fair.</h1>
          <p>Clear rules keep every session safe, focused, and welcoming for all players.</p>
          <Link to="/games" className="ps-button ps-button--primary">
            Browse the game library <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
      <GameGuidelines />
      <GTAOnlinePolicy />
      <Footer />
    </main>
  );
}
