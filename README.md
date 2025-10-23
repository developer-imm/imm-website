# Interactive MM Website

Marketing site for **Interactive MM**, a Cincinnati-based product studio focused on purposeful software. The repo powers the public site at **https://interactivemm.com** (hosted on GitHub Pages) and highlights the studio's services, the Traction product line, and contact information for prospective clients.

---

## Table of Contents
- [About Interactive MM](#about-interactive-mm)
- [Website Structure](#website-structure)
- [Key Features](#key-features)
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

| Path | Purpose | Highlights |
| --- | --- | --- |
| `/index.html` | Landing page | Company positioning, service pillars, navigation to key pages. |
| `/traction/index.html` | Product deep dive | Early access info, feature list, waitlist form, TestFlight status. |
| `/contact-us/index.html` | Lead capture | Direct support & development contact addresses, expectations for response. |
| `/404.html` | Custom not-found | Tailored fallback experience for broken links. |
| `/img/` | Brand imagery | Logos, hero shots, product art used across the site. |
| `/styles.css` | Shared styling | CSS variables, layout utilities, custom animation and theming. |
| `/robots.txt` | Crawl directives | Allows major crawlers and publishes the sitemap location. |
| `/sitemap.xml` | Sitemap | Enumerates primary site URLs for search engines. |

All pages share a layout with a responsive navigation menu, Tailwind CSS via CDN, and progressive enhancement for small device menus and build tagging.

---

## Key Features
- **Modern visual design:** Gradient glassmorphism, motion presets, and typography (Inter family) aligned with the Interactive MM brand.
- **Responsive menu:** Accessible mobile navigation managed with progressively enhanced JavaScript.
- **Live build badge:** Includes a script that, on production, fetches the latest Git commit SHA and displays a build tag.
- **Waitlist integration:** Traction page links to a Google Form endpoint, enabling quick collection of testers.
- **Accessibility-minded:** Uses semantic HTML elements, descriptive `alt` attributes on all imagery, and focusable controls.

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
- Tailwind is loaded from the CDN, so no build step is required.
- Use `styles.css` to define custom CSS variables (`--bg`, `--text`, `--accent`) and reusable components.
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
- Primary logo: `img/logo.png`
- Traction product logo: `img/traction-logo.png`
- Hero imagery: `img/coding.png`, `img/coding_collaboration.png`

When adding new imagery, keep dimensions optimized (prefer WebP/AVIF for large assets) and provide descriptive alt text that mirrors the brand voice.

---

## Contact
- Product support: `support@interactivemm.com`
- New engagements: `developer@interactivemm.com`

Interactive MM is headquartered in Cincinnati, OH, and collaborates with clients remotely across the Midwest and beyond. For press or partnership inquiries, start with the contact emails above.

---

Questions or improvements? Open an issue or submit a pull request on GitHub.
