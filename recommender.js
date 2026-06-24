/* ============================================================
   Problem Recommender (rule-based, "feels like AI")
   Takes a free-text problem from the home page and returns
   ranked recommendations across all content types.
   ============================================================ */

const INTENT_RULES = [
  { kw: ["switch","switching","leaving","evaluating","appfolio","propertyware","buildium","rent manager","doorloop","yardi","tenantcloud"],
    intent: "switching",
    boostTags: ["switching","migration"],
    types: ["case","press","report","feature"] },
  { kw: ["account","accounting","ledger","reconcil","trust","audit","books","statement","fees","late fee","gaap"],
    intent: "accounting",
    boostTags: ["accounting"],
    types: ["feature","case","review"] },
  { kw: ["maintenance","work order","work orders","vendor","vendors","repair","ticket","tickets","fixie"],
    intent: "maintenance",
    boostTags: ["maintenance"],
    types: ["feature","review"] },
  { kw: ["ai","artificial intelligence","agent","mcp","claude","chatgpt","automation","automate"],
    intent: "ai",
    boostTags: ["ai","mcp"],
    types: ["feature","press"] },
  { kw: ["mobile","phone","ios","android","app","on the go","field"],
    intent: "mobile",
    boostTags: [],
    boostFeatures: ["Mobile app"],
    types: ["feature"] },
  { kw: ["website","smartsite","pmw","leads","seo","ranking","property management website"],
    intent: "websites",
    boostTags: ["websites","pmw"],
    boostFeatures: ["Smartsites (with PMW)"],
    types: ["feature"] },
  { kw: ["api","integration","integrate","hubspot","zapier","plaid","showmojo","leadsimple","tech stack","stack"],
    intent: "api",
    boostTags: ["api","integrations"],
    boostFeatures: ["Open API"],
    types: ["feature","case","review"] },
  { kw: ["support","response","help","team","onboard","onboarding","training"],
    intent: "support",
    boostTags: ["support","onboarding"],
    types: ["review","case","feature"] },
  { kw: ["owner","payout","payment","pay","statement","trust me","trust"],
    intent: "owner-payments",
    boostTags: ["accounting"],
    boostFeatures: ["Owner payment workflow","Owner statements"],
    types: ["feature","case"] },
  { kw: ["screening","applicant","tenant screening","background","credit"],
    intent: "screening",
    boostTags: [],
    boostFeatures: ["Tenant screening"],
    types: ["feature"] },
  { kw: ["lease","sign","esign","esignature","rentsign","document"],
    intent: "leasing",
    boostTags: [],
    boostFeatures: ["Leasing & RentSign"],
    types: ["feature"] },
  { kw: ["scale","growing","growth","doors","portfolio","add doors","acquisition"],
    intent: "growth",
    boostTags: ["growth"],
    types: ["case","feature"] },
  { kw: ["vpi","compare","competitor","ranked","best","number 1","#1","review","awards"],
    intent: "competitive",
    boostTags: ["vpi","ranked-1","competitive-data"],
    types: ["press","report"] },
  { kw: ["price","pricing","cost","afford","fee","budget"],
    intent: "pricing",
    boostTags: [],
    types: ["press","report","feature"] },
  { kw: ["report","dashboard","analytics","kpi","data"],
    intent: "reporting",
    boostTags: [],
    boostFeatures: ["Dashboards & reports"],
    types: ["feature"] },
  { kw: ["portal","owner portal","tenant portal","vendor portal","visibility"],
    intent: "portals",
    boostTags: [],
    boostFeatures: ["Interactive portals"],
    types: ["feature"] },
  { kw: ["insurance","liability","damage","compliance"],
    intent: "insurance",
    boostTags: [],
    boostFeatures: ["Rentvine insurance"],
    types: ["feature"] },
  { kw: ["webinar","recording","watch","video"],
    intent: "webinars",
    boostTags: [],
    types: ["webinar"] }
];

function detectIntents(q) {
  const lower = q.toLowerCase();
  const matched = [];
  INTENT_RULES.forEach(rule => {
    let hit = 0;
    rule.kw.forEach(k => {
      // Whole-word match (so "app" in "AppFolio" doesn't trigger "mobile")
      const esc = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp("\\b" + esc + "\\b", "i");
      if (re.test(lower)) hit++;
    });
    if (hit > 0) matched.push({ rule, hits: hit });
  });
  return matched;
}

function scoreItem(item, type, q, intents) {
  const lower = q.toLowerCase();
  const words = lower.split(/\s+/).filter(w => w.length > 3);
  let hay = "";

  if (type === "case") {
    hay = [item.customer, item.role, item.quote, item.outreachHook, item.switchedLabel, item.locationLabel, item.unitsLabel, ...(item.tagsLabel || []), ...(item.tags || [])].join(" ");
  } else if (type === "review") {
    if (item.exclude || item.stars <= 1) return -1; // hidden
    hay = [item.name, item.company, item.text, item.body, item.territory, ...(item.tags || [])].join(" ");
  } else if (type === "feature") {
    hay = [item.name, item.desc, item.category, item.outreachAngle, ...(item.benefits || [])].join(" ");
  } else if (type === "report" || type === "press") {
    hay = [item.title, item.desc, item.publisher, item.audience, ...(item.stats || []), ...(item.tags || [])].join(" ");
  } else if (type === "webinar") {
    hay = [item.title, item.desc, item.partner, ...(item.tags || [])].join(" ");
  }
  hay = hay.toLowerCase();

  let score = 0;

  // Per-word literal matching
  words.forEach(w => { if (hay.includes(w)) score += 1; });

  // Intent-driven boosts
  intents.forEach(({ rule, hits }) => {
    // Type relevance
    const typeKey = (type === "report" || type === "press") ? (rule.types.includes("press") || rule.types.includes("report") ? type : null) : (rule.types.includes(type) ? type : null);
    if (typeKey) score += 3 * hits;

    // Tag boost
    if (rule.boostTags && (item.tags || []).some(t => rule.boostTags.includes(t))) {
      score += 4 * hits;
    }
    // Feature-name boost
    if (rule.boostFeatures && item.name && rule.boostFeatures.includes(item.name)) {
      score += 8 * hits;
    }
    // Press release prioritization for competitive intent
    if (rule.intent === "competitive" && item.type === "press") {
      score += 5;
    }
  });

  // Recency tiebreaker (small)
  if (type === "review" || type === "press" || type === "report" || type === "webinar") {
    const d = item.date || item.released || null;
    if (d) {
      const ageDays = (Date.now() - new Date(d).getTime()) / (24 * 60 * 60 * 1000);
      if (ageDays < 180) score += 0.5;
    }
  }
  if (type === "feature" && item.released) {
    const ageDays = (Date.now() - new Date(item.released).getTime()) / (24 * 60 * 60 * 1000);
    if (ageDays < 180) score += 0.3;
  }

  return score;
}

function recommend(query, opts = {}) {
  const max = opts.max || 8;
  const q = query.trim();
  if (!q) return { intents: [], results: [], explanation: "" };

  const intents = detectIntents(q);
  const all = [];

  if (typeof caseStudies !== "undefined") {
    caseStudies.forEach(c => all.push({ type: "case", item: c, score: scoreItem(c, "case", q, intents) }));
  }
  if (typeof reviews !== "undefined") {
    reviews.forEach(r => all.push({ type: "review", item: r, score: scoreItem(r, "review", q, intents) }));
  }
  if (typeof features !== "undefined") {
    features.forEach(f => all.push({ type: "feature", item: f, score: scoreItem(f, "feature", q, intents) }));
  }
  if (typeof industryReports !== "undefined") {
    industryReports.forEach(r => all.push({ type: r.type === "press" ? "press" : "report", item: r, score: scoreItem(r, "report", q, intents) }));
  }
  if (typeof webinars !== "undefined") {
    webinars.forEach(w => all.push({ type: "webinar", item: w, score: scoreItem(w, "webinar", q, intents) }));
  }

  // Drop negatives (excluded reviews returned -1)
  const filtered = all.filter(r => r.score > 0);
  filtered.sort((a, b) => b.score - a.score);

  // Diversify the top results — at most 3 of any single type in the top 8
  const out = [];
  const typeCounts = {};
  for (const r of filtered) {
    const t = r.type;
    if ((typeCounts[t] || 0) >= 3) continue;
    out.push(r);
    typeCounts[t] = (typeCounts[t] || 0) + 1;
    if (out.length >= max) break;
  }

  // Build a human explanation
  let explanation = "";
  if (intents.length) {
    const tops = intents.map(i => i.rule.intent).slice(0, 3);
    explanation = `I picked up on: <b>${tops.join("</b>, <b>")}</b>.`;
  } else if (out.length) {
    explanation = `Best keyword matches across the hub.`;
  } else {
    explanation = `No matches found. Try a different angle — e.g. "AppFolio reconciliation problems" or "owner statements".`;
  }

  return { intents, results: out, explanation };
}

/* -------- Render the response panel -------- */
function renderRecommendationResults(query) {
  const wrap = document.getElementById("rcmdResults");
  if (!wrap) return;

  const { results, explanation } = recommend(query);

  if (!results.length) {
    wrap.innerHTML = `
      <div class="rcmd-bubble">
        <div class="rcmd-bot-label">Sales hub</div>
        <p>${explanation}</p>
      </div>`;
    wrap.hidden = false;
    return;
  }

  const cards = results.map(r => {
    const { type, item } = r;
    const typeLabel = ({ case: "case study", review: "review", feature: "feature", press: "press release", report: "industry report", webinar: "webinar" })[type];
    const badgeClass = ({ case: "case", review: "review", feature: "feature", press: "press", report: "report", webinar: "webinar" })[type];

    let title = "", snippet = "", url = "", subline = "";
    if (type === "case") {
      title = item.customer;
      subline = item.switchedLabel + " · " + item.locationLabel;
      snippet = item.outreachHook || item.quote;
      url = item.url;
    } else if (type === "review") {
      const source = item.source === 'g2' ? 'G2' : item.source === 'capterra' ? 'Capterra' : 'Google';
      title = item.name + (item.company && !/^(unknown|n\/?a)$/i.test(item.company) ? " · " + item.company : "");
      subline = "★".repeat(item.stars) + " · " + source;
      snippet = item.body || item.text || "";
      url = item.hsId ? hsUrl(item.hsId) : null;
    } else if (type === "feature") {
      title = item.name;
      subline = item.category + (item.released ? " · released " + fmtDate(item.released) : "");
      snippet = item.outreachAngle || item.desc;
      url = item.url;
    } else if (type === "press" || type === "report") {
      title = item.title;
      subline = (item.publisherShort || item.publisher);
      snippet = item.desc;
      url = item.landingUrl || item.url;
    } else if (type === "webinar") {
      title = item.title;
      subline = item.partner;
      snippet = item.desc;
      url = item.url;
    }
    const linkAttr = url ? `href="${url}" target="_blank" rel="noopener"` : '';
    const tag = url ? "a" : "div";
    return `
      <${tag} class="rcmd-card" ${linkAttr}>
        <div class="rcmd-card-head">
          <span class="rcmd-type-badge ${badgeClass}">${typeLabel}</span>
          <span class="rcmd-card-sub">${subline}</span>
        </div>
        <div class="rcmd-card-title">${title}</div>
        <div class="rcmd-card-snippet">${snippet ? (snippet.length > 220 ? snippet.slice(0, 220) + '…' : snippet) : ''}</div>
      </${tag}>`;
  }).join("");

  wrap.innerHTML = `
    <div class="rcmd-bubble">
      <div class="rcmd-bot-label">Sales hub recommendations</div>
      <p>${explanation} Here's what I'd grab:</p>
    </div>
    <div class="rcmd-grid">${cards}</div>
    <div class="rcmd-foot">
      <button class="rcmd-clear-btn" type="button" id="rcmdClear">clear</button>
      <span class="rcmd-tip">Tip: also try the ⌘K keyword search for a literal text lookup.</span>
    </div>
  `;
  wrap.hidden = false;

  document.getElementById("rcmdClear").addEventListener("click", () => {
    wrap.hidden = true;
    wrap.innerHTML = "";
    const input = document.getElementById("rcmdInput");
    if (input) input.value = "";
  });
}

/* -------- Wire up home page input -------- */
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const form = document.getElementById("rcmdForm");
    if (!form) return;
    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = document.getElementById("rcmdInput");
      const q = input.value.trim();
      if (q.length < 4) return;
      renderRecommendationResults(q);
    });
    // Suggested chips (preset problems)
    document.querySelectorAll(".rcmd-suggest").forEach(chip => {
      chip.addEventListener("click", () => {
        const input = document.getElementById("rcmdInput");
        input.value = chip.dataset.q;
        renderRecommendationResults(chip.dataset.q);
      });
    });
  }, 40);
});
