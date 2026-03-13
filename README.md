# SMHF MVP

A simple static lead-gen starter for **Sell My House Fast**.

## Project Structure

- `index.html` — seller landing page
- `buyers.html` — buyer signup page
- `states/*.html` — 50 state landing pages
- `styles.css` — shared styles
- `script.js` — demo behavior and ZIP lookup
- `sitemap.xml` / `robots.txt` — SEO basics
- `keyword-priority-report.md` — keyword research notes

## Brand

| Key | Value |
|-----|-------|
| Site | SMHF |
| Full phrase | Sell My House Fast |
| AI agent | Rush |

## Local Preview

Open `index.html` directly in a browser, or run a local server:

```bash
npx serve .
```

## Deployment Checklist

1. Push all files to a GitHub repo and connect to Vercel (or upload directly).
2. ~~Find and replace all instances of `https://example.com`~~ — done, replaced with `https://smhf-mvp.vercel.app`.
3. Replace `action="#"` on all forms with your form endpoint (e.g., a Vercel serverless function at `/api/submit`).
4. Update footer copy with real contact info, privacy policy, and legal text.

## Roadmap

**Build first:**
- Seller intake form
- Buyer signup
- AI lead summary (Rush agent)
- Lead routing to buyers

**Defer for now:**
- Instant pricing engine
- Image scraping
- Complex CRM
- Heavy dashboards
