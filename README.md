# Interactive MM Website

Marketing site for **Interactive MM**, a Cincinnati-based product studio focused on purposeful software. The repo powers the public site at **https://interactivemm.com** (hosted on GitHub Pages) and highlights the studio's services, the Traction product line, and contact information for prospective clients.

---

## Table of Contents
- [About Interactive MM](#about-interactive-mm)
- [Website Structure](#website-structure)
- [App Store Connect](#app-store-connect)
- [Search Optimization](#search-optimization)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [Brand & Assets](#brand--assets)
- [Contact](#contact)

---

## About Interactive MM
Interactive MM builds software that merges innovation with clarity. The studio partners with founders, nonprofits, and mid-sized companies to deliver:
- Product strategy and discovery that surfaces the right problems to solve.
- Calm, accessible interfaces designed for everyday use.
- Reliable engineering that keeps products maintainable over time.

### Traction: ADHD-friendly productivity
The **Traction** sub-site documents the studio's flagship internal product—an ADHD-friendly task manager optimized for real-world scheduling. It is designed for Apple platforms with smart recurrence logic, sticky reminders, and spacious visuals that reduce cognitive overload.

---

## Website Structure

| Path | Purpose |
| --- | --- |
| `/index.html` | Home: the studio's apps first (Traction, KeyFlow), then client work and the journal. |
| `/traction/index.html` | Traction product page: features, Free vs Pro, privacy summary, support FAQ (`#support`), App Store link. |
| `/traction/privacy/index.html` | **Traction Privacy Policy** — the URL for App Store Connect and the in-app paywall. |
| `/traction/terms/index.html` | **Traction Terms of Use** — incorporates Apple's Standard EULA and adds the subscription terms. |
| `/keyflow/index.html` | Points to KeyFlow's own site, keyflow.homes. |
| `/insights/index.html` | Journal (two essays). |
| `/contact-us/index.html` | Support and new-project email addresses. |
| `/404.html` | Not-found page (GitHub Pages serves it automatically). |
| `/styles.css` | All styles. Plain CSS with custom properties; no framework or build step. |
| `/scripts.js` | Mobile menu, header hairline on scroll, footer year. |
| `/img/icons.svg` | SVG icon sprite, used as `<svg><use href="/img/icons.svg#i-name"/></svg>`. |

Every page repeats the same header and footer markup; when you change navigation, update it on every page.

---

## App Store Connect

- **Privacy Policy URL:** `https://interactivemm.com/traction/privacy/`
- **Terms of Use:** `https://interactivemm.com/traction/terms/` — keep Apple's standard EULA in App Store Connect and add a line to the App Description: `Terms of Use: https://interactivemm.com/traction/terms/`
- **Support URL:** `https://interactivemm.com/traction/#support`
- **App Store link:** `https://apps.apple.com/app/id6753903631` (App ID 6753903631), used by every `data-app-store-link` and the `apple-itunes-app` meta tag on `/traction/`.
- **App Store badge:** the badge is an HTML stand-in. Swap in Apple's official artwork from https://tools.applemarketingtools.com when convenient.

---

## Search Optimization
The site is optimized for search engines with:
- Descriptive page titles and meta descriptions targeted to brand and product keywords.
- Clear headings (`<h1>`/`<h2>`) that reflect the service offerings and product value.
- Canonical URLs, Open Graph/Twitter cards, and favicons on every page to improve sharing.
- JSON-LD structured data describing the organization, contact page, and Traction software preview.
- Robots directives and an XML sitemap (`/robots.txt`, `/sitemap.xml`) that surface high-value URLs to crawlers.
- Structured internal links connecting the home page, Traction product page, and contact form for crawlability.
- Static assets referenced with descriptive filenames (`logo.png`, `coding.png`, `traction-logo.png`).

For additional SEO enhancements, consider:
- Publishing blog content or case studies in a `/posts/` collection.
- Expanding structured data with FAQs or case studies when supporting content is live.
- Generating dedicated social preview images for each page and referencing them via Open Graph meta tags.
- Submitting the sitemap to Google Search Console and Bing Webmaster Tools for faster discovery.

---

## Local Development
Because this is a static site, development workflow is straightforward:

```bash
# 1) Install a basic static server if you don't have one
npm install --global serve

# 2) Run the dev server from the repo root
serve .
```

Then visit `http://localhost:3000` (or the port reported by your static server). Alternatively, open the HTML files directly in a browser for spot checks.

**Developer tips**
- No build step: plain HTML and CSS.
- Colours and type live as custom properties at the top of `styles.css` (`--coral`, the `--band-*` day colours, `--font`).
- When adjusting navigation, update the shared markup in each page to keep the experience consistent.

---

## Deployment
The site deploys via GitHub Pages:

1. Push this repository to the `main` branch of `developer-imm/imm-website`.
2. In GitHub, head to **Settings → Pages** and choose **Deploy from branch** (branch `main`, folder `/`).
3. For the custom domain:
   - Add `interactivemm.com` (and optionally `www.interactivemm.com`) under **Settings → Pages → Custom domain**.
   - Update DNS records with your domain registrar:  
     • `@` A-record → 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153  
     • `www` CNAME → `developer-imm.github.io`
4. Allow DNS changes to propagate and confirm GitHub Pages shows the domain as "Enforced HTTPS."

---

## Brand & Assets
- Studio logo: `img/logo.png`
- Traction app icon: `img/traction-logo.png`
- `img/coding.png` and `img/coding_collaboration.png` are no longer used by any page.

When adding new imagery, keep dimensions optimized (prefer WebP/AVIF for large assets) and provide descriptive alt text that mirrors the brand voice.

---

## Contact
- Product support: `support@interactivemm.com`
- New engagements: `developer@interactivemm.com`

Interactive MM is headquartered in Cincinnati, OH, and collaborates with clients remotely across the Midwest and beyond. For press or partnership inquiries, start with the contact emails above.

---

Questions or improvements? Open an issue or submit a pull request on GitHub.
