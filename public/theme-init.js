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
    preload.href = isPortrait ? "/images/hero/battle-arena-mobile.jpg" : "/images/hero/battle-arena-desktop.jpg";
    preload.fetchPriority = "high";
    document.head.appendChild(preload);
  }

})();
