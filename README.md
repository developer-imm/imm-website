# IMM Website

Static site for **Interactive MM** served via GitHub Pages.

## Structure
- `index.html` — home
- `traction.html` — Traction app page
- `404.html` — custom 404
- `img/logo.png` — Interactive MM logo
- `img/coding.png` — hero image
- `img/traction-logo.png` — Traction logo
- `assets/` — place downloads like CVs here

## Deploy (GitHub Pages)
1. Push this folder's contents to the `main` branch of `developer-imm/imm-website`.
2. Repo → **Settings → Pages** → Source: *Deploy from branch* (branch: `main`, folder: `/`).
3. (Optional) **Settings → Pages → Custom domain** to add your domain; update DNS:
   - `@` A → 185.199.108.153 / 109.153 / 110.153 / 111.153
   - `www` CNAME → `developer-imm.github.io`
