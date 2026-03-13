# SMHF MVP — Claude Code Context

## Project Overview

**SMHF** (Sell My House Fast) is a static lead-gen MVP. No build system, no framework, no npm. All files are plain HTML, CSS, and vanilla JS served directly from the filesystem or a static host (e.g. Vercel).

**AI agent brand name:** Rush — does intake cleanup, lead card creation, and buyer routing. Not a pricing engine.

---

## File Structure

```
smhf-mvp/
├── index.html              # Main seller landing page
├── buyers.html             # Buyer signup page
├── states/                 # 50 state landing pages (alabama.html … wyoming.html)
│   └── *.html
├── styles.css              # Single shared stylesheet (all pages)
├── script.js               # ZIP lookup + demo form behavior
├── sitemap.xml             # SEO sitemap (placeholder URLs)
├── robots.txt              # SEO robots file
└── keyword-priority-report.md  # Keyword research notes
```

State pages reference `../styles.css` (one directory up). Root pages reference `styles.css` directly.

---

## Tech Stack & Conventions

- **Pure static HTML/CSS/JS** — no build step, no bundler, no npm
- **CSS custom properties** defined in `:root` in `styles.css`; never use hardcoded color values
- **Font:** Inter (system fallback chain in CSS)
- **ZIP lookup:** uses the public `https://api.zippopotam.us/us/{zip}` API in `script.js`
- **Forms:** all use `data-demo-form` attribute; `script.js` intercepts submit when `action="#"` and shows a demo alert
- **No JS framework** — use vanilla DOM APIs only

Key CSS variables:
```css
--brand: #4f7cff
--bg: #0f1115
--panel: #171a21
--text: #f5f7fb
--line: #262b36
--radius: 18px
--max: 1180px (container max-width)
```

---

## Placeholder Values to Replace Before Launch

These exist throughout the codebase and must be swapped before going live:

| Placeholder | Replace with |
|---|---|
| ~~`https://example.com`~~ | Done — replaced with `https://smhf-mvp.vercel.app` |
| `action="#"` on all forms | Vercel API route or Formspree endpoint |
| Footer demo copy and `© 2026 SMHF. Demo…` notices | Real legal/contact text |

---

## Common Tasks

### Adding or editing a state page
All state pages follow the same structure. Use an existing one (e.g. `states/florida.html`) as the template. Key differences per state:
- `<title>`, `<meta name="description">`, `<link rel="canonical">` — update for the state
- `<h1>` and hero paragraph — localize the copy
- The seller form is identical across all state pages

### Updating the seller or buyer form
Forms live in `index.html` (`#seller-form`) and `buyers.html` (`#buyer-form`). The `data-demo-form` attribute on `<form>` triggers the demo intercept in `script.js`. Remove this attribute and set `action` to a real endpoint to activate.

### Changing styles
All styles are in `styles.css`. Use the existing CSS variables. Do not add inline styles except where they already exist in the HTML (footer brand color overrides).

### Adding a new page
- Copy the structure from `index.html` or `buyers.html`
- Link `styles.css` (or `../styles.css` if in a subdirectory)
- Add `<script src="script.js">` (or `../script.js`) before `</body>`
- Add the page to `sitemap.xml`

---

## What Rush (AI Agent) Should Do

Rush is scoped intentionally small for the MVP:
1. Turn messy seller notes into structured lead card data
2. Score urgency from the seller's timeline and situation
3. Route the lead to buyers by state, ZIP, and buy box

Rush does **not** need to be a valuation engine at this stage.

---

## MVP Scope Boundaries

**In scope:**
- Seller intake form
- Buyer signup
- AI lead summary (Rush)
- Lead routing to buyers

**Out of scope for now:**
- Instant pricing engine
- Image scraping (use seller uploads instead)
- Complex CRM or dashboards
- Paid ads across all 50 states before conversion data exists
