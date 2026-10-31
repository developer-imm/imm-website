---
name: Interactive MM
description: Home of an independent iPhone, iPad, and Mac studio and its lead app, Traction.
colors:
  coral: "#e5603c"
  coral-ink: "#b8431f"
  coral-deep: "#a63c1b"
  coral-wash: "#fdeee7"
  band-today: "#fbe2d2"
  band-today-row: "#fef3ec"
  band-tomorrow: "#fbefc2"
  band-tomorrow-row: "#fffaea"
  band-week: "#d9f0dc"
  band-week-row: "#f1faf2"
  band-next: "#d8e8f9"
  band-next-row: "#f0f6fd"
  bg: "#ffffff"
  bg-soft: "#f5f5f7"
  bg-sunk: "#ececf0"
  ink: "#1d1d1f"
  ink-2: "#48484d"
  ink-3: "#6b6b70"
  line: "#e3e3e8"
  line-strong: "#d2d2d7"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, system-ui, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, system-ui, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, system-ui, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, system-ui, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.8vw, 1.35rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, system-ui, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  prose:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, system-ui, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, system-ui, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  sm: "12px"
  md: "16px"
  card: "22px"
  app-card: "26px"
  lg: "32px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 5vw, 40px)"
  wrap: "1120px"
  section: "clamp(72px, 10vw, 128px)"
  section-tight: "clamp(56px, 7vw, 88px)"
  tile: "clamp(28px, 4vw, 44px)"
  grid-gap: "20px"
  row: "22px"
components:
  button-primary:
    backgroundColor: "{colors.coral-ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.coral-deep}"
    textColor: "{colors.bg}"
  button-quiet:
    backgroundColor: "{colors.bg-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-quiet-hover:
    backgroundColor: "{colors.bg-sunk}"
  nav-link:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
  nav-link-active:
    backgroundColor: "{colors.bg-soft}"
    textColor: "{colors.ink}"
  pro-tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "2px 8px 3px"
  feature-icon:
    backgroundColor: "{colors.coral-wash}"
    textColor: "{colors.coral-ink}"
    rounded: "{rounded.sm}"
    size: "44px"
  panel-soft:
    backgroundColor: "{colors.bg-soft}"
    rounded: "{rounded.lg}"
    padding: "clamp(28px, 4vw, 40px)"
  summary-box:
    backgroundColor: "{colors.bg-soft}"
    rounded: "{rounded.card}"
    padding: "26px 28px"
  notification:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.card}"
    padding: "12px 14px"
---

# Design System: Interactive MM

## Overview

**Creative North Star: "The App, Shown Straight"**

The site is an Apple-native product page played at the category standard: white ground, cool neutral greys, one coral action colour, and Traction's own day-band tints carried out of the app and onto the page. Nothing is staged as a metaphor. The hero is an HTML-built iPhone showing the real All Tasks screen; feature sections hold faithful renditions of the app's own objects (notifications, the What Now? card, a dictation bubble, a recurrence week) sitting on band-tinted panels. The page's job is to let the product be seen plainly and calmly.

Density is low and the hierarchy is single-voiced: one large bold headline, one grey lead, one action per block. Sections alternate white and soft grey; lists are hairline-ruled rather than boxed; page-level containers are flat and only the app's own objects lift. Motion is one authored moment on load (the phone settles, then the reminder arrives) and short state transitions; nothing loops. The incumbent editorial look (cream ground, serif display) and the generic three-card SaaS row were rejected for this world.

**Key Characteristics:**
- White and cool-grey ground with a single coral action colour.
- Traction's four day-band tints (peach, butter, mint, sky) as the only secondary colours.
- Large continuous rounded corners; pill-shaped controls.
- Shadows only on rendered app objects; the page itself stays flat.
- Hairline-ruled lists instead of card grids.
- One-colour line icons from a single 24px sprite.

## Colors

A neutral Apple-grey page with one warm accent and four soft tints borrowed from the app.

### Primary
- **Traction Coral** (coral): the app's own accent. Fills and icons only: list and feature icons, the in-phone FAB and sticky glyph, the focus ring, the 404 numeral. Never body-size text on white.
- **Coral Ink** (coral-ink): the text-safe coral (5.1:1 on white). Links, link-arrows, the primary button fill, feature-icon glyphs, active in-app tab.
- **Coral Deep** (coral-deep): hover for links and the primary button.
- **Coral Wash** (coral-wash): the tile behind feature icons.

### Secondary
- **Today Peach** (band-today / band-today-row), **Tomorrow Butter** (band-tomorrow / band-tomorrow-row), **This Week Mint** (band-week / band-week-row), **Next Week Sky** (band-next / band-next-row): Traction's day bands exactly as the app draws them. The stronger value is the band header; the paler `-row` value is the task row beneath it. On the page they become the stacked band strip on the Traction tile and the 160deg row-to-band gradients behind feature art.

### Neutral
- **White** (bg): page ground, in-app cards, the Free plan column.
- **Soft Grey** (bg-soft): alternating sections, footer, quiet buttons, nav hover and current state, secondary panels (KeyFlow row, contact doors, summary box).
- **Sunk Grey** (bg-sunk): quiet-button hover.
- **Ink** (ink): headings, strong text, the Pro tag.
- **Ink 2** (ink-2): leads, prose body, nav links, answers.
- **Ink 3** (ink-3): meta, dates, supporting lines under list titles, footer links.
- **Hairline** (line) and **Strong Hairline** (line-strong): row dividers; the strong value caps the top of a ruled list and the footer base.

### Named Rules
**The Two Corals Rule.** Coral (#e5603c) fills and draws; Coral Ink carries text and the primary button. A coral surface that holds white text uses Coral Ink, never the lighter coral.

**The Bands Are the App's Rule.** The day-band tints appear only in the app's order and meaning (Today, Tomorrow, This Week, Next Week) or as the panel behind a rendition of the app. They are not general-purpose pastel accents.

## Typography

**Display Font:** the Apple system display face (SF Pro Display), falling back through Segoe UI, Roboto, Helvetica Neue, Arial
**Body Font:** the Apple system text face (SF Pro Text), same fallbacks

**Character:** the app's own platform voice: heavy, tightly tracked headlines over a plain, roomy text face. Weight and tracking carry the hierarchy; there is one family.

### Hierarchy
- **Display** (700, clamp 2.6 to 4.5rem, 1.02, -0.035em): the single page H1 in the hero and the 404 headline.
- **Headline** (700, clamp 2 to 3rem, 1.06, -0.03em): section headings and feature headings; app-tile names run it at clamp 1.8 to 2.4rem. Essay titles use a close cousin (clamp 1.8 to 2.5rem, -0.028em).
- **Title** (650, 1.3rem, 1.25, -0.015em): door headings, journal post titles. List-item titles inside ruled lists are 650 at body size.
- **Lead** (400, clamp 1.15 to 1.35rem, 1.45, Ink 2): one paragraph under a headline, capped at 34em.
- **Body** (400, 17px, 1.55): default text. Long-form legal and journal prose opens to 1.65 line height at 42rem measure, in Ink 2 with Ink for strong text and headings.
- **Label** (500 to 600, 15px): nav links (15px/500), meta rows, platforms line, table text. Footer column heads are 13px/650 in sentence case.

### Named Rules
**The Weight-Not-Case Rule.** Hierarchy is built from size, weight (650 to 700), and negative tracking. Headings and labels stay in sentence case; the only all-caps text is the short PRO product badge.

**The 650 Rule.** Semibold-plus titles sit at 650, between the 600 of controls and the 700 of headlines.

## Layout

A single centred column (1120px plus a fluid 20 to 40px gutter each side). Sections breathe at clamp 72 to 128px vertical padding, or clamp 56 to 88px for tight sections, and alternate white with soft grey to separate topics without rules. A section head is capped at 40rem with its lead 18px below and the content clamp 40 to 64px below that.

Two-column splits do the composing: the hero runs 1.08fr copy to 0.92fr phone; feature rows run equal halves with art alternating sides, clamp 80 to 144px apart; the studio, privacy, and contact blocks are copy beside a ruled list. Legal and journal pages use a 220px sticky table of contents beside a 42rem prose column. Everything collapses to one column at 880px (900px for long-form, 720px for paired lists and contact doors, 760px for plans); the header nav becomes a dropdown sheet at 720px. Tile and panel interiors pad clamp 28 to 44px; grids of tiles gap 20px; ruled list rows pad 22 to 26px vertically.

**The Ruled-List Rule.** Groups of features, services, posts, and FAQs are rows divided by hairlines (icon column, then a 650 title over an Ink 3 line), never a grid of boxed cards.

## Elevation & Depth

The page is flat: sections, tiles, doors, plans, and panels carry no shadow and separate by tone (white against soft grey) or a 1px hairline ring. Depth belongs to the objects the app itself would render: the iPhone, notifications, the What Now? and recurrence cards, the dictation bubble, the in-phone FAB and tab bar, and app icons. Their shadows are soft and multi-layered, cool-tinted (rgba 16,16,24), and never offset hard.

### Shadow Vocabulary
- **Device** (`box-shadow: 0 2px 4px rgba(16,16,24,0.06), 0 24px 48px -12px rgba(16,16,24,0.22), 0 48px 96px -24px rgba(16,16,24,0.18)`): the iPhone frame only.
- **Float** (`box-shadow: 0 1px 2px rgba(16,16,24,0.08), 0 12px 32px -8px rgba(16,16,24,0.24)`): in-app cards, notifications, and bubbles resting on feature art.
- **App icon** (`box-shadow: 0 1px 2px rgba(0,0,0,0.08), 0 8px 20px -8px rgba(0,0,0,0.3)`): app icons at 64 to 96px; the spread scales with icon size.

### Named Rules
**The App-Objects-Only Rule.** If the element is something Traction draws on a phone, it may float. If it is part of the website, it stays flat.

## Shapes

Large, soft, continuous corners throughout. Page containers (tiles, feature art, plans, contact doors) round at 32px; secondary panels and notifications at 22px; in-app cards at 26px; inner rows and steps at 16px; small tiles (feature icon, recurrence day) at 12px. Every interactive control (buttons, nav links, tags, the menu toggle, in-app tabs) is a full pill. App icons keep the iOS squircle ratio (about 23% of their size: 15px at 64, 17px at 72, 22px at 96). The phone's corner and bezel scale from its width rather than fixed pixels. Borders are hairlines only; the one asymmetric shape is the speech bubble (22px with an 8px tail corner).

## Components

### Buttons
Soft, Apple-weight pills.
- **Shape:** full pill (999px), 48px tall, 22px side padding, 16px/600 text, optional 18px trailing arrow.
- **Primary:** Coral Ink fill, white text. Hover deepens to Coral Deep; the arrow slides 3px right.
- **Quiet:** Soft Grey fill, Ink text; hover to Sunk Grey.
- **Press:** scale to 0.98 on the expressive ease-out curve.
- **Link-arrow:** a text link in Coral Ink at 600 with a 16px arrow that slides 3px on hover; used for "Explore", "All posts", and in-tile actions.
- **App Store:** the black badge sits beside the primary button as the download action (see Do's and Don'ts on its stand-in status).

### Tags
- **Pro tag:** a small Ink pill (12px/700, 0.04em tracking, white text) set after a heading or plan name to mark Traction Pro features. It is the only filled tag in the system.

### Cards / Containers
- **App tile:** 32px corners, clamp 28 to 44px padding, no shadow. The Traction tile is a warm off-white panel with the four day bands stacked down its right third, labelled in the app's order; on narrow screens the bands move to a strip along the bottom. Secondary products sit in a full-width Soft Grey row beneath it, not a rival card.
- **Feature art panel:** 32px corners, 380px min height, a 160deg gradient from a band's row tint to its header tint; holds one floating app object.
- **Plans:** two columns inside one 32px container with a 1px hairline ring; the Pro column takes a faint warm tint and coral check icons, Free takes green checks.
- **Door / summary box:** Soft Grey panels (32px and 22px) with a title, a short Ink 2 paragraph, and one action.

### Navigation
Sticky 64px header, white at 80% with an 18px saturated blur; a hairline appears under it once the page scrolls. Brand mark (30px, 8px corners) and name at 17px/650 on the left; nav links on the right as 15px/500 Ink 2 pills that fill Soft Grey on hover and for the current page. Below 720px a 44px pill toggle opens a white dropdown sheet with 17px links in 14px-cornered rows; it closes on link tap, outside tap, and Escape. Legal and journal pages add a sticky table of contents with a 1px left rail that darkens to Ink on hover.

### Ruled Lists and FAQ
Rows between hairlines, capped by a Strong Hairline. Each row is a 24 to 28px coral line icon, a 650 title, and an Ink 3 supporting line. The FAQ uses native disclosure rows (1.1rem/600) with a chevron that rotates 180deg on open and a hover shift to Coral Ink.

### Phone Rendition (signature)
An HTML iPhone (1206:2622 ratio, width clamp 260 to 318px) whose every dimension scales from its width. Inside: a peach status area, the All Tasks title bar, day-band headers over tinted task rows with Ink 3 meta, a coral FAB, and a frosted pill tab bar with the active tab in a 13% coral wash. A notification banner seats inside the top of the screen on the Traction page. On load (motion allowed only) the phone rises 28px and settles over 1.1s, the hero copy staggers in by 60ms steps, and the notification drops in 0.85s later.

### Icons
One sprite of 24px line icons: 1.75 stroke (2 for arrow and chevron, 2.25 for check), round caps and joins, drawn in currentColor. Coral in lists and features, Ink 2 in the privacy facts, green for Free-plan checks.

## Do's and Don'ts

### Do:
- **Do** use Coral Ink for any coral that carries or sits behind text, and plain Coral only for icons, fills, and the 2.5px focus ring (3px offset).
- **Do** take secondary colour only from the four day bands, in the app's order and meaning.
- **Do** keep page containers flat and give soft, cool, multi-layer shadows only to app renditions and app icons.
- **Do** round controls as full pills and containers at 32px; keep app icons at the iOS squircle ratio.
- **Do** group features, services, posts, and questions as hairline-ruled rows with a line icon, a 650 title, and an Ink 3 line.
- **Do** keep one primary action per block, and limit motion to the single load sequence and sub-300ms state transitions, all disabled under reduced motion.
- **Do** draw icons from the shared 24px line sprite in currentColor.

### Don't:
- **Don't** return to the cream ground and serif display of the previous editorial site.
- **Don't** lay out features as a row of three boxed cards.
- **Don't** put shadows on sections, tiles, plans, or doors.
- **Don't** use the day-band tints as decorative pastels detached from the app's days.
- **Don't** set body-size text in Traction Coral on white; it fails AA.
- **Don't** add a second accent hue or a filled tag style beyond the Pro tag.
