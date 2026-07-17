/* ============================================================
   Share/Snippet Generator
   Adds a "share" button to every card. Click → modal with an
   editable, pre-filled snippet + copy-to-clipboard.
   ============================================================ */

/* -------- Registry. Pages call setShareItems(type, items) after each render. -------- */
window.__shareData = window.__shareData || {};
function setShareItems(type, items) {
  window.__shareData[type] = items;
}
function getShareItem(type, idx) {
  return (window.__shareData[type] || [])[idx];
}

/* -------- Snippet templates -------- */
const SNIPPET = {
  case: (c) => {
    const switchedFrom = {
      appfolio: "moved off AppFolio",
      propertyware: "made the switch from Propertyware",
      legacy: "swapped out their old software"
    }[c.switched] || "switched to Rentvine";
    const pdfLine = c.pdfUrl ? `\nPDF version: ${c.pdfUrl}` : "";
    const hook = c.outreachHook || `${c.customer} ${switchedFrom} and shared what changed.`;
    const outcomes = c.keyOutcomes && c.keyOutcomes.length
      ? "\n\nWhat changed:\n" + c.keyOutcomes.slice(0, 3).map(o => "· " + o).join("\n")
      : "";
    return `Hi [first name],

This case study might be helpful as we continue our conversation.

${hook}${outcomes}

${c.url}${pdfLine}

Thanks,
[your name]`;
  },

  feature: (f) => {
    const angle = f.outreachAngle || f.desc;
    const benefitsBlock = f.benefits && f.benefits.length
      ? "\n\nWhat stands out:\n" + f.benefits.slice(0, 4).map(b => "· " + b).join("\n")
      : "";
    const descBlock = (f.outreachAngle && f.desc && f.desc !== f.outreachAngle)
      ? `\n\nWhere it lives in the product:\n${f.desc}`
      : "";
    const videoLine = f.video && f.video.url ? `\nWatch a 60-90 second walkthrough: ${f.video.url}` : "";
    const imageLine = f.image && f.image.url ? `\nScreenshot for context: ${f.image.url}` : "";
    const media = (videoLine || imageLine) ? "\n" + videoLine + imageLine : "";
    return `Hi [first name],

Thought this might be helpful for you and your team.

${angle}${benefitsBlock}${descBlock}${media}

Full feature page: ${f.url}

If it lands, I can show it live in about 10 minutes.

Thanks,
[your name]`;
  },

  review: (r) => {
    const source = r.source === 'g2' ? 'G2' : r.source === 'capterra' ? 'Capterra' : 'Google';
    const co = r.company && !/^(unknown|n\/?a)$/i.test(r.company) ? `, ${r.company}` : "";
    const ter = r.territory && !/^(unknown|n\/?a)$/i.test(r.territory) ? ` (${r.territory})` : "";
    // Prefer the longer body (G2 review highlight) over the title.
    const text = r.body || r.text || "(see full review on the source)";
    return `Hi [first name],

Came across this ${source} review and thought it might be helpful for you and your team:

"${text}"
${r.name}${co}${ter}

Thanks,
[your name]`;
  },

  report: (rep) => {
    const body = rep.snippet || `Sharing ${rep.title}.`;
    const isPress = rep.type === "press";
    const statsBlock = rep.stats && rep.stats.length
      ? "\n\n" + (isPress ? "Highlights:" : "A few highlights worth your time:") + "\n" + rep.stats.slice(0, 3).map(s => "· " + s).join("\n")
      : "";
    const bestFor = rep.audience ? `\n\nBest for: ${rep.audience}` : "";
    const readingTime = isPress ? "Quick read." : "Worth a 10-minute skim before our next chat.";
    return `Hi [first name],

${body}${statsBlock}${bestFor}

${rep.url}

${readingTime}

Thanks,
[your name]`;
  },

  webinar: (w) => {
    const lead = w.outreachAngle || w.snippet || `Sharing a recent webinar with ${w.partner}: ${w.title}.`;
    const takeaways = w.takeaways && w.takeaways.length
      ? "\n\nKey takeaways from the recording:\n" + w.takeaways.slice(0, 4).map(t => "· " + t).join("\n")
      : "";
    return `Hi [first name],

${lead}${takeaways}

${w.url}

Thanks,
[your name]`;
  },

  competitorNews: (n) => {
    const link = n.url || "";
    const linkLine = link ? `\n${link}` : "";
    return `Hi [first name],

Thought you'd want to see this. ${n.summary}

${n.title}${linkLine}

Thanks,
[your name]`;
  }
};

/* -------- Modal -------- */
function ensureShareModal() {
  if (document.getElementById("shareModal")) return;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="share-modal" id="shareModal" hidden>
      <div class="share-modal-bg"></div>
      <div class="share-modal-content">
        <div class="share-modal-head">
          <div>
            <span class="share-modal-eyebrow" id="shareEyebrow">snippet</span>
            <h3 id="shareTitle">Share snippet</h3>
          </div>
          <button class="share-modal-close" id="shareClose" aria-label="Close">×</button>
        </div>
        <p class="share-modal-help">Replace <code>[first name]</code> and <code>[your name]</code>. Edit anything else if you like, then copy.</p>
        <textarea class="share-modal-text" id="shareText" spellcheck="false"></textarea>
        <div class="share-modal-actions">
          <span class="share-modal-status" id="shareStatus"></span>
          <button class="btn btn-primary share-copy-btn" id="shareCopy">copy to clipboard</button>
        </div>
      </div>
    </div>
  `);
  // Wire close
  document.getElementById("shareClose").addEventListener("click", closeShare);
  document.querySelector("#shareModal .share-modal-bg").addEventListener("click", closeShare);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeShare(); });
  // Wire copy
  document.getElementById("shareCopy").addEventListener("click", () => {
    const text = document.getElementById("shareText").value;
    const status = document.getElementById("shareStatus");
    try {
      navigator.clipboard.writeText(text).then(() => {
        status.textContent = "✓ copied";
        status.classList.add("ok");
        setTimeout(() => { status.textContent = ""; status.classList.remove("ok"); }, 1800);
      });
    } catch {
      // Fallback for non-clipboard environments
      const ta = document.getElementById("shareText");
      ta.select();
      document.execCommand("copy");
      status.textContent = "✓ copied";
      status.classList.add("ok");
      setTimeout(() => { status.textContent = ""; status.classList.remove("ok"); }, 1800);
    }
  });
}

function openShare(type, item) {
  ensureShareModal();
  const builder = SNIPPET[type];
  if (!builder) return;
  const titleMap = {
    case: ["case study", "Share this case study"],
    feature: ["feature", "Share this feature"],
    review: ["review", "Share this review"],
    report: ["report", "Share this report"],
    webinar: ["webinar", "Share this webinar"],
    competitorNews: ["competitor news", "Share this update"]
  };
  const [eyebrow, title] = titleMap[type];
  document.getElementById("shareEyebrow").textContent = eyebrow;
  document.getElementById("shareTitle").textContent = title;
  document.getElementById("shareText").value = builder(item);
  document.getElementById("shareStatus").textContent = "";
  document.getElementById("shareModal").hidden = false;
  setTimeout(() => {
    const ta = document.getElementById("shareText");
    ta.focus();
    ta.setSelectionRange(0, 0);
  }, 50);
}

function closeShare() {
  const m = document.getElementById("shareModal");
  if (m) m.hidden = true;
}

/* -------- Global click handler. Captures share-btn taps on any card. -------- */
document.addEventListener("click", e => {
  const btn = e.target.closest(".share-btn");
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  const type = btn.dataset.shareType;
  const idx = parseInt(btn.dataset.shareIdx, 10);
  const item = getShareItem(type, idx);
  if (item) openShare(type, item);
});

/* -------- Helper for cards to insert the share button HTML --------
   Icon is a dual sparkle. Signals AI-generated draft snippet.
*/
function shareBtnHtml(type, idx) {
  return `<span class="share-btn" data-share-type="${type}" data-share-idx="${idx}" title="Generate a draft snippet" role="button" tabindex="0">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l1.6 5.5 5.5 1.6-5.5 1.6L12 16.7l-1.6-5.5L4.9 9.6l5.5-1.6L12 2.5z"/><path d="M18.5 13.5l.85 2.4 2.4.85-2.4.85-.85 2.4-.85-2.4-2.4-.85 2.4-.85.85-2.4z"/></svg>
    draft
  </span>`;
}
