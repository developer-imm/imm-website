# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: people looking at a studio app.** Mostly prospective and current Traction users: adults with ADHD, or anyone who finds starting and finishing tasks hard. They arrive from the App Store, a search, or a shared link and want to know what Traction is, whether it fits, and where to get it. App Review reviewers and existing subscribers also land on the legal pages (privacy, terms) from the App Store listing and the in-app paywall.
- **Secondary: prospective clients.** Founders and teams who might hire the studio for a build. The site gives them a smaller path; client work is no longer the lead.

## Product Purpose

interactivemm.com is the home of Interactive MM LLC, an independent software studio in Cincinnati, Ohio, and of its apps. Success: a visitor understands Traction quickly and gets to the App Store; the legal pages are clear enough to pass App Review and to actually answer a subscriber's questions; client prospects can still find the studio and get in touch.

## Positioning

Apps made by one independent developer ("Made by one independent developer: thank you." is the paywall's own line). Traction is an ADHD-friendly to-do app for the days it's hard to start or hard to keep going: sticky reminders that come back until the task is done, recurrence rules that mirror real life, "What Now?" picking the next task with a small first step, and on-device speech and Apple Intelligence.

## Operating Context

- Static site on GitHub Pages at interactivemm.com (CNAME), no build step. Google Analytics tag G-DNZ7PH8VR9 on every page.
- Pages: home, /traction/, /keyflow/ (points out to keyflow.homes), /insights/ (two essays), /contact-us/, 404. New: /traction/privacy/ and /traction/terms/, linked from the App Store listing and the Traction paywall.
- Traction ships on iPhone, iPad, and Mac (monthly plan not sold on Mac). Bundle ID imm.Traction.

## Capabilities and Constraints

**Traction facts (from the app source, Oct 2026):**
- Always free: tasks, lists, and reminders; speaking your tasks (dictation); Siri, Shortcuts, and widgets; streak, points, and the shop.
- Traction Pro (auto-renewing subscription, `com.interactivemm.traction.sub.v1.monthly` and `.yearly`, introductory free trial): streak rest days, sticky reminders, Calendar tab, subtask suggestions (Apple Intelligence), a first step in What Now?, two Pro app icons. The paywall tagline is "Extra help for the days it's hard to start, or hard to keep going."
- Data: tasks are stored on the device and synced through the user's iCloud (CloudKit); the studio has no server holding tasks. Anonymous usage analytics go through TelemetryDeck with no identifier and no task content; the user can turn them off in Settings › Help & Tips › Share Anonymous Usage (moved from Your Stats; the old in-app privacy text still said Your Stats). Dictation uses on-device speech recognition (SpeechAnalyzer; microphone and speech permissions). Apple Intelligence (Foundation Models, on device) powers subtask suggestions, What Now? first steps, and splitting dictated text into tasks. Calendar access (full access permission) shows events alongside tasks and lets the user create or edit events through the system editor. Completed tasks are kept 30 days and deleted tasks removed after 30 days. Open task titles are indexed in on-device Spotlight for Siri and Spotlight. Purchases go through Apple StoreKit; the monthly plan is not sold on Mac.
- Prices are set in App Store Connect and vary by region. The site never states prices.

**Undecided:** the App Store URL (pending launch; the Traction page carries a marked placeholder until it's known).

## Brand Commitments

- Company: Interactive MM LLC, Cincinnati, Ohio. Governing law for terms: Ohio.
- Contacts: support@interactivemm.com (product support, billing, privacy and data deletion requests); developer@interactivemm.com (new projects).
- Assets: `img/logo.png` (studio mark), `img/traction-logo.png` (Traction app icon). KeyFlow has its own identity at keyflow.homes; this site only points to it.

## Evidence on Hand

- Real: the Traction feature set and Free/Pro split above, in-app copy, the app icon, two Insights essays (24 Oct 2025).
- Absent, not to be fabricated: App Store ratings, reviews, download counts, press, testimonials, client logos, case studies, prices.
- The Insights essay's "testers say reduced context switching by 40%" is existing copy whose source is unverified.

## Product Principles

1. Products first: Traction is the lead, the studio is the maker behind it, and client work is a quieter door.
2. Say what the app actually does, in plain words; never invent a claim.
3. Legal pages are for people, not only for reviewers: short, plainly worded, and accurate to the code.
4. Calm, not loud. The audience is easily overloaded; one clear action per screen.

## Accessibility & Inclusion

ADHD and other attention differences are the core audience: low clutter, a clear hierarchy, no autoplaying or perpetual motion, respect for `prefers-reduced-motion`, WCAG 2.2 AA contrast and focus states.
