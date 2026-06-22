/* ============================================================
   Global Search (cmd+K / ctrl+K)
   Searches across case studies, reviews, features, industry reports.
   Each result has a draft snippet button + link to source.
   ============================================================ */

function ensureSearchModal() {
  if (document.getElementById("globalSearchModal")) return;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="gs-modal" id="globalSearchModal" hidden>
      <div class="gs-bg" id="gsBg"></div>
      <div class="gs-content">
        <div class="gs-input-row">
          <svg class="gs-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" id="gsInput" placeholder="Search case studies, reviews, features, reports, tags..." autocomplete="off" spellcheck="false" />
          <kbd class="gs-esc">esc</kbd>
        </div>
        <div class="gs-filters" id="gsFilters">
          <span class="chip active vine" data-type="all">all</span>
          <span class="chip" data-type="case">case studies</span>
          <span class="chip" data-type="review">reviews</span>
          <span class="chip" data-type="feature">features</span>
          <span class="chip" data-type="webinar">webinars</span>
          <span class="chip" data-type="report">reports</span>
        </div>
        <div class="gs-results" id="gsResults">
          <div class="gs-empty">
            <div class="gs-empty-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <p>Type to search across the whole hub.</p>
            <p class="gs-empty-hint">Try <code>switching</code>, <code>accounting</code>, <code>AppFolio</code>, <code>onboarding</code>, or any tag.</p>
          </div>
        </div>
        <div class="gs-footer">
          <span><kbd>esc</kbd> close</span>
          <span><kbd>⌘ K</kbd> open from anywhere</span>
        </div>
      </div>
    </div>
  `);

  document.getElementById("gsBg").addEventListener("click", closeSearch);
  document.getElementById("gsInput").addEventListener("input", e => runSearch());
  document.getElementById("gsFilters").addEventListener("click", e => {
    const chip = e.target.closest(".chip"); if (!chip) return;
    document.querySelectorAll("#gsFilters .chip").forEach(c => c.classList.remove("active","vine"));
    chip.classList.add("active","vine");
    gsState.type = chip.dataset.type;
    runSearch();
  });
}

const gsState = { type: "all" };

function openSearch() {
  ensureSearchModal();
  document.getElementById("globalSearchModal").hidden = false;
  setTimeout(() => document.getElementById("gsInput").focus(), 30);
}
function closeSearch() {
  const m = document.getElementById("globalSearchModal");
  if (m) m.hidden = true;
}

/* -------- Search logic -------- */
function searchAll(query, typeFilter = "all") {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const results = [];

  // Case studies
  if ((typeFilter === "all" || typeFilter === "case") && typeof caseStudies !== "undefined") {
    caseStudies.forEach((c, i) => {
      const hay = [c.customer, c.role, c.quote, c.switchedLabel, c.locationLabel, c.unitsLabel, ...(c.tagsLabel || []), ...(c.tags || [])].join(" ").toLowerCase();
      if (hay.includes(q)) {
        results.push({
          type: "case", typeLabel: "case study", item: c,
          title: c.customer,
          subtitle: c.switchedLabel + " · " + c.locationLabel,
          snippet: c.quote,
          url: c.url,
          targetPage: "case-studies.html"
        });
      }
    });
  }

  // Reviews
  if ((typeFilter === "all" || typeFilter === "review") && typeof reviews !== "undefined") {
    reviews.forEach((r, i) => {
      if (r.exclude) return;          // hide tenant/vendor complaints
      if (r.stars <= 1) return;       // hide 1-star reviews
      const hay = [r.name, r.company, r.text, r.body, r.territory, r.source, ...(r.tags || [])].join(" ").toLowerCase();
      if (hay.includes(q)) {
        const source = r.source === 'g2' ? 'G2' : r.source === 'capterra' ? 'Capterra' : 'Google';
        const ter = r.territory && !/^(unknown|n\/?a)$/i.test(r.territory) ? r.territory : "";
        results.push({
          type: "review", typeLabel: source + " review", item: r,
          title: r.name + (r.company && !/^(unknown|n\/?a)$/i.test(r.company) ? " · " + r.company : ""),
          subtitle: `${"★".repeat(r.stars)} · ${fmtDate(r.date)}${ter ? " · " + ter : ""}`,
          snippet: r.body || r.text || "(no review text)",
          url: r.hsId ? hsUrl(r.hsId) : null,
          targetPage: "reviews.html"
        });
      }
    });
  }

  // Features
  if ((typeFilter === "all" || typeFilter === "feature") && typeof features !== "undefined") {
    features.forEach((f, i) => {
      const hay = [f.name, f.desc, f.category].join(" ").toLowerCase();
      if (hay.includes(q)) {
        results.push({
          type: "feature", typeLabel: "feature", item: f,
          title: f.name,
          subtitle: f.category + (f.released ? " · released " + fmtDate(f.released) : ""),
          snippet: f.desc,
          url: f.url,
          targetPage: "features.html"
        });
      }
    });
  }

  // Webinars
  if ((typeFilter === "all" || typeFilter === "webinar") && typeof webinars !== "undefined") {
    webinars.forEach((w, i) => {
      const hay = [w.title, w.desc, w.partner, ...(w.tags || [])].join(" ").toLowerCase();
      if (hay.includes(q)) {
        results.push({
          type: "webinar", typeLabel: "webinar", item: w,
          title: w.title,
          subtitle: w.partner + " · " + fmtDate(w.date),
          snippet: w.desc,
          url: w.url,
          targetPage: "webinars.html"
        });
      }
    });
  }

  // Reports
  if ((typeFilter === "all" || typeFilter === "report") && typeof industryReports !== "undefined") {
    industryReports.forEach((rep, i) => {
      const hay = [rep.title, rep.desc, rep.publisher, rep.audience, ...(rep.tags || []), ...(rep.stats || [])].join(" ").toLowerCase();
      if (hay.includes(q)) {
        results.push({
          type: "report", typeLabel: "report", item: rep,
          title: rep.title,
          subtitle: (rep.publisherShort || rep.publisher) + " · " + rep.year,
          snippet: rep.desc,
          url: rep.landingUrl || rep.url,
          targetPage: "industry-reports.html"
        });
      }
    });
  }

  return results;
}

function highlightMatch(text, q) {
  if (!text || !q) return text || "";
  const safe = String(text).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]));
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return safe.replace(new RegExp(`(${escaped})`, "gi"), '<mark class="gs-mark">$1</mark>');
}

let __gsResultsCache = [];

function runSearch() {
  const q = document.getElementById("gsInput").value;
  const wrap = document.getElementById("gsResults");

  if (!q.trim()) {
    wrap.innerHTML = `
      <div class="gs-empty">
        <div class="gs-empty-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
        <p>Type to search across the whole hub.</p>
        <p class="gs-empty-hint">Try <code>switching</code>, <code>accounting</code>, <code>AppFolio</code>, <code>onboarding</code>, or any tag.</p>
      </div>`;
    return;
  }

  const results = searchAll(q, gsState.type);
  __gsResultsCache = results;

  if (results.length === 0) {
    wrap.innerHTML = `<div class="gs-empty">
      <p>No matches for "<b>${q.replace(/[<>]/g, "")}</b>"</p>
      <p class="gs-empty-hint">Try a different keyword or pick a different type filter.</p>
    </div>`;
    return;
  }

  // Group by type for cleaner display
  const byType = { case: [], review: [], feature: [], webinar: [], report: [] };
  results.forEach((r, idx) => { r._idx = idx; byType[r.type].push(r); });

  const sectionLabels = {
    case: { label: "Case studies", count: byType.case.length },
    review: { label: "Reviews", count: byType.review.length },
    feature: { label: "Features", count: byType.feature.length },
    webinar: { label: "Webinars", count: byType.webinar.length },
    report: { label: "PR (press + reports)", count: byType.report.length }
  };

  let html = `<div class="gs-result-count">${results.length} result${results.length === 1 ? "" : "s"} for "<b>${q.replace(/[<>]/g, "")}</b>"</div>`;

  ["case", "review", "feature", "webinar", "report"].forEach(type => {
    if (!byType[type].length) return;
    html += `<div class="gs-section">
      <div class="gs-section-head">
        <span class="gs-section-label">${sectionLabels[type].label}</span>
        <span class="gs-section-count">${sectionLabels[type].count}</span>
      </div>`;
    byType[type].forEach(r => {
      const titleH = highlightMatch(r.title, q);
      const subH = highlightMatch(r.subtitle, q);
      const snipH = highlightMatch(r.snippet ? (r.snippet.length > 220 ? r.snippet.slice(0, 220) + "…" : r.snippet) : "", q);
      const openLink = r.url ? `<a class="gs-open" href="${r.url}" target="_blank" rel="noopener" title="Open source">↗</a>` : '<span class="gs-open disabled" title="No external link">·</span>';
      html += `
        <div class="gs-result" data-result-idx="${r._idx}">
          <div class="gs-result-main">
            <div class="gs-result-header">
              <span class="gs-type-badge ${r.type}">${r.typeLabel}</span>
              <span class="gs-result-title">${titleH}</span>
            </div>
            <div class="gs-result-sub">${subH}</div>
            <div class="gs-result-snippet">${snipH}</div>
          </div>
          <div class="gs-result-actions">
            <button class="share-btn gs-draft-btn" data-result-idx="${r._idx}" type="button">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l1.6 5.5 5.5 1.6-5.5 1.6L12 16.7l-1.6-5.5L4.9 9.6l5.5-1.6L12 2.5z"/><path d="M18.5 13.5l.85 2.4 2.4.85-2.4.85-.85 2.4-.85-2.4-2.4-.85 2.4-.85.85-2.4z"/></svg>
              draft
            </button>
            ${openLink}
          </div>
        </div>`;
    });
    html += `</div>`;
  });

  wrap.innerHTML = html;
}

/* -------- Wire draft buttons from search results -------- */
document.addEventListener("click", e => {
  const draft = e.target.closest(".gs-draft-btn");
  if (!draft) return;
  e.preventDefault();
  e.stopPropagation();
  const idx = parseInt(draft.dataset.resultIdx, 10);
  const r = __gsResultsCache[idx];
  if (r && typeof openShare === "function") openShare(r.type, r.item);
});

/* -------- Keyboard shortcuts -------- */
document.addEventListener("keydown", e => {
  // Cmd+K or Ctrl+K to open
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    openSearch();
    return;
  }
  // Esc to close
  if (e.key === "Escape") {
    const m = document.getElementById("globalSearchModal");
    if (m && !m.hidden) closeSearch();
  }
  // Forward slash to open (if not focused on an input)
  if (e.key === "/" && !["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)) {
    e.preventDefault();
    openSearch();
  }
});

/* -------- Auto-inject hero search bar on every page -------- */
function injectHeroSearch() {
  // Skip if page already has the inline hero search (no double-render)
  if (document.getElementById("heroSearchBtn")) {
    document.getElementById("heroSearchBtn").addEventListener("click", openSearch);
    return;
  }
  // Find the first .hero-inner on the page
  const heroInner = document.querySelector(".hero-inner");
  if (!heroInner) return;

  const html = `
    <button class="hero-search" id="heroSearchBtn" type="button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <span class="hero-search-placeholder">Search case studies, reviews, features, webinars, reports...</span>
      <kbd>⌘K</kbd>
    </button>
    <p class="hero-search-hint">Or press <kbd>⌘ K</kbd> from any page</p>
  `;
  heroInner.insertAdjacentHTML("beforeend", html);
  document.getElementById("heroSearchBtn").addEventListener("click", openSearch);
}

document.addEventListener("DOMContentLoaded", () => {
  // Wait a tick so nav.js has rendered the header / hero is present
  setTimeout(injectHeroSearch, 30);
});
