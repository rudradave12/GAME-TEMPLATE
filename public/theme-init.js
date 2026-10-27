(() => {
  try {
    const theme = localStorage.getItem("gamezone-theme") || "dark";
    document.documentElement.dataset.theme = theme === "light" ? "light" : "dark";
  } catch {
    document.documentElement.dataset.theme = "dark";
  }

  // Preload primary hero visual on homepage
  if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    const isPortrait = window.matchMedia("(max-width: 1100px) and (orientation: portrait)").matches;
    const preload = document.createElement("link");
    preload.rel = "preload";
    preload.as = "image";
    preload.href = isPortrait ? "/images/valorant-mobile-portraite.jpg" : "/images/hero/valorant.jpg";
    preload.fetchPriority = "high";
    document.head.appendChild(preload);
  }

  // Preload library card artwork when accessing /games
  if (window.location.pathname === "/games") {
    const preload = document.createElement("link");
    preload.rel = "preload";
    preload.as = "image";
    preload.type = "image/avif";
    preload.href = "/images/cards/gta-online.avif";
    preload.setAttribute("imagesrcset", "/images/cards/320/gta-online.avif 320w, /images/cards/gta-online.avif 640w");
    preload.setAttribute("imagesizes", "(max-width: 700px) calc(min(82vw, 340px) - 43px), (max-width: 1100px) calc(32vw - 48px), calc(30vw - 48px)");
    preload.fetchPriority = "high";
    document.head.appendChild(preload);
  }
})();
