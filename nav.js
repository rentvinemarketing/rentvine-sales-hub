/* ============================================================
   Renders shared header + footer on every page.
   Internal-only. No demo CTAs.
   Uses <body data-page="..."> to set the active nav tab.

   Nav is a hamburger menu at every screen size. The top bar only
   ever shows the logo and the menu icon; everything else (page
   links, search, sales deck) lives inside the dropdown panel.
   ============================================================ */

const SALES_DECK_URL = "https://docs.google.com/presentation/d/1w-UMlS-f_C0Q6ed1d94xsrsAKsCB52BnEaAILceJeTo/edit";

const NAV_ICONS = {
  home:               '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 20V9.5z"/><path d="M9 21V12h6v9"/></svg>',
  "case-studies":     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>',
  reviews:            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  features:           '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  "industry-reports": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>',
  webinars:           '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
  outreach:           '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l1.6 5.5 5.5 1.6-5.5 1.6L12 16.7l-1.6-5.5L4.9 9.6l5.5-1.6L12 2.5z"/><path d="M18.5 13.5l.85 2.4 2.4.85-2.4.85-.85 2.4-.85-2.4-2.4-.85 2.4-.85.85-2.4z"/></svg>',
  competitors:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 8l-3 6a3 3 0 006 0z"/><path d="M19 8l-3 6a3 3 0 006 0z"/><path d="M5 8h14"/><path d="M8 21h8"/></svg>',
  "competitor-news":  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v2a2 2 0 002 2h1l4 4V5L6 9H5a2 2 0 00-2 2z"/><path d="M15 8a4 4 0 010 8"/><path d="M18 5a8 8 0 010 14"/></svg>'
};

const NAV_ITEMS = [
  { id: "home",              label: "home",                href: "index.html" },
  { id: "case-studies",      label: "case studies",        href: "case-studies.html" },
  { id: "reviews",           label: "reviews",              href: "reviews.html" },
  { id: "features",          label: "features",             href: "features.html" },
  { id: "webinars",          label: "webinars",             href: "webinars.html" },
  { id: "industry-reports",  label: "PR",                   href: "industry-reports.html" },
  { id: "outreach",          label: "outreach",             href: "outreach.html" },
  { id: "competitors",       label: "competitor analysis",  href: "competitors.html", divider: true },
  { id: "competitor-news",   label: "competitor news",      href: "competitor-news.html", badge: "new" }
];

function renderHeader() {
  const page = document.body.dataset.page || "home";

  document.body.insertAdjacentHTML("afterbegin", `
    <div class="internal-banner" role="note" aria-label="Internal use only">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      <span>for internal use only</span>
    </div>
    <header class="site-header">
      <div class="header-inner">
        <a class="logo" href="index.html" aria-label="Rentvine sales hub">
          <img src="rentvine-logo.png" alt="Rentvine" class="logo-img" />
          <span class="sub-brand">sales hub</span>
        </a>
        <button class="nav-hamburger-btn" id="navHamburgerBtn" type="button" aria-expanded="false" aria-controls="navMenuPanel" aria-label="Open navigation menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
      <div class="nav-menu-panel" id="navMenuPanel" hidden>
        <nav class="nav-menu-links">
          ${NAV_ITEMS.map(n => `
            ${n.divider ? '<div class="nav-menu-divider"></div>' : ''}
            <a href="${n.href}" class="nav-menu-link ${n.id === page ? 'active' : ''}">
              ${NAV_ICONS[n.id] || ''}
              <span>${n.label}</span>
              ${n.badge ? `<span class="nav-menu-badge">${n.badge}</span>` : ''}
            </a>
          `).join("")}
        </nav>
        <div class="nav-menu-divider"></div>
        <button class="nav-menu-link nav-menu-search" id="navMenuSearchBtn" type="button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <span>search</span>
          <kbd class="nav-menu-kbd">⌘K</kbd>
        </button>
        <div class="nav-menu-cta-row">
          <a class="btn btn-secondary nav-menu-cta" href="${SALES_DECK_URL}" target="_blank" rel="noopener">sales deck</a>
        </div>
      </div>
    </header>
  `);

  wireNavMenu();
}

function wireNavMenu() {
  const btn = document.getElementById("navHamburgerBtn");
  const panel = document.getElementById("navMenuPanel");
  const searchBtn = document.getElementById("navMenuSearchBtn");

  function openMenu() {
    panel.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    btn.classList.add("is-open");
  }
  function closeMenu() {
    panel.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    btn.classList.remove("is-open");
  }
  function toggleMenu() {
    if (panel.hidden) openMenu(); else closeMenu();
  }

  btn.addEventListener("click", e => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when clicking outside the panel/header
  document.addEventListener("click", e => {
    if (panel.hidden) return;
    if (panel.contains(e.target) || btn.contains(e.target)) return;
    closeMenu();
  });

  // Close on Escape
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !panel.hidden) closeMenu();
  });

  // Close after picking a link (page will navigate away, but keeps state clean for back/forward cache)
  panel.querySelectorAll(".nav-menu-link[href]").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Search trigger lives inside the menu, delegate to search.js
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      closeMenu();
      if (typeof openSearch === "function") openSearch();
    });
  }
}

function renderFooter() {
  document.body.insertAdjacentHTML("beforeend", `
    <footer class="site-footer">
      <div class="footer-simple">
        <p>This page is constantly being iterated. For suggestions or questions, message <a href="mailto:apolonia.bross@rentvine.com">Apol Bross</a>.</p>
      </div>
    </footer>
  `);
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});
