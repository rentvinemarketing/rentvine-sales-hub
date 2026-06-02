# Rentvine sales hub

Internal sales enablement site for Rentvine BDRs and AEs. Pure static HTML/CSS/JS — no build step, no backend.

## What's inside

- `index.html` — home, with the hero search bar and category cards
- `case-studies.html` — 6 customer wins, filterable
- `reviews.html` — 49 G2/Google/Capterra reviews from the Monday board, with HubSpot deep-links
- `features.html` — 24 features sorted newest-first, with collateral slots
- `webinars.html` — webinar recaps
- `industry-reports.html` — PM Trends + PropertyManagement.com VPI report
- `outreach.html` — LinkedIn DM + cold email generator with AI prompt export
- `style.css`, `nav.js`, `share.js`, `search.js`, `data.js` — shared assets
- `rentvine-logo.png` — brand logo
- `netlify.toml` — Netlify config (cache headers + redirects)

To update content, edit `data.js`. Everything else (filters, templates, search, snippets) reads from there.

## Deploy to Netlify

**Option 1: Drag and drop (60 seconds, no GitHub)**

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag this entire folder onto the page
3. Site is live at a `random-name.netlify.app` URL
4. Rename the URL in Netlify settings → "Domain management" → "Site name"

**Option 2: GitHub + Netlify (recommended for ongoing edits)**

1. Create a new private repo on GitHub (e.g. `rentvine-sales-hub`)
2. From this folder, push to GitHub:
   ```bash
   git remote add origin https://github.com/<your-user>/rentvine-sales-hub.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import from Git"
4. Pick the repo. Netlify auto-detects `netlify.toml`. No build command needed, publish directory is `.`
5. Click Deploy

Every push to `main` will redeploy automatically.

## Protect the site (recommended)

This is internal-only and has HubSpot deep-links. **Don't leave it publicly accessible.**

- **Netlify Pro ($19/mo)** → enable "Site password" or "Role-based access". One password, share with the team.
- **Netlify Identity (free)** → require team members to log in with email/Google.
- **Cloudflare Access** (free tier) → put the Netlify URL behind your Google Workspace.

## Common edits

- **Add a case study** → edit `caseStudies` in `data.js`
- **Add a review** → edit `reviews` in `data.js` (or re-import from Monday board 18407730790)
- **Add collateral to a feature** → set `video`, `image`, or `onePager` on the feature object in `data.js`. See the example comment at the top of the file.
- **Add a webinar** → edit `webinars` in `data.js`
- **Change the snippet templates** → edit `SNIPPET` in `share.js`
- **Change the outreach templates** → edit the `generate()` function in `outreach.html`

## Questions

Message Amy Lostutter (amy@rentvine.com).
