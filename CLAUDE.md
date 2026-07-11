# PeakVO₂ × Accel Media — Launch Video Production Proposal

## What this is
An interactive, scroll-driven web proposal for **launch video production** (website hype reel +
social shorts) for PeakVO₂ Analytics (peakvo2fit.com) — portable metabolic testing device
($999 Core + app subscriptions), Bonners Ferry, ID. They inquired by phone (July 10, 2026)
asking for a video production quote. Cloned from the `antova-proposal` scaffold and slimmed
way down (Aaron: Antova had "way too much content for people to ingest").

Owner: Aaron Bareither, Accel Media.

## The pitch (2 parts, per Aaron's directive)
1. **Part One: clear content proposal + production price.** Launch Hype Reel (60–90s flagship
   + 30s homepage cut) and Social Short Series (three 15–30s verticals), all from ONE
   production day.
2. **Part Two: the performance partnership.** Same 3-pillar model as Antova, adapted for
   e-commerce: half-rate production, $750/mo campaign management, 5% of tracked sales.

## Stack
Astro 6 + Netlify. Single page (`src/pages/index.astro`, ~640 lines) with embedded CSS/JS, no
framework. NOT yet deployed and NOT yet in git (no repo initialized). Deploy pattern when
ready: Netlify project on the Accel Media team + `peakvo2.accelmediaads.com` CNAME
(accelmediaads.com is on Netlify DNS, subdomains auto-provision).

## Brand
`src/styles/peakvo2-brand.css` — matched to peakvo2fit.com (Squarespace): steel blue accent
`#4fa4d8` = hsl(203,64%,58%) from their site.css, deep navy `#1e2952` + royal `#2245c9` from
their section themes, cool near-black `#07090d`, **Roboto** (900 caps display / 400 body).
Fraunces italic kept for Aaron's signature. Same `--aw-*` variable contract as
Alderwood/Antova scaffolds. Wordmark rendered as text "PEAKVO<sub>2</sub>".

## Structure (round 3: two pages, per Aaron "first page very simple, only the content they
asked for, clear CTA to a secondary page for the partnership")
- **`/` (index.astro)**: Hero → A Note (2-paragraph letter) → The Content (2 deliverable
  cards + "Shot wherever it hits hardest" row: VERTICAL Stallion Performance embed
  `3y0nw2cqty` (native 720x1280, 9:16 frame) beside 2 setting cards: "In the studio" (cyc
  wall + custom lighting) / "On location" (outdoors), plus "Or both. We can get as creative
  as you want to get.") → The Quote (Standard/Partner table + partner-banner CTA "Why is the
  right column half price? → See how it works" linking /partnership) → Next Steps + CTAs.
- **`/partnership` (partnership.astro)**: hero-lite ("I only win when you sell devices") →
  3 pillars + requirements context line → Why Video (3 count-up stats) → Proof (3 case cards
  with photos) → close CTA (call / email / back to quote). Topbar has "← Back to the proposal".
Copy was deliberately trimmed hard in rounds 2-3 (Aaron: "a lot of text… overwhelming").
CAMFIT embed `w3n3z2jex3` was CUT in round 3 (Aaron: only Stallion, vertical).

## Key numbers (round 2, lowered per Aaron "prices a little steep"; still needs his sign-off)
- Launch Hype Reel (60–90s + 30s homepage cut): **$2,500 standard / $1,250 partner**
- Social Short Series (three 15–30s verticals): **$1,500 / $750**
- Full Launch Package (everything, one shoot day): **$3,500 / $1,750** (highlight row)
- Partnership: half-rate production + **$750/mo** campaign management + **5% of tracked sales**
- Pricing anchors: Antova rate card, HMOR (10 video ads $1,000 + $250 setup), APPROVALS.md
  ("brand video projects start around $2,500", "multi-video $5,000–$15,000")
- Why-video stats: 63% prefer short video to learn about a product / 65% conversion lift
  (4.8% vs 2.9%) / 85% of mobile video plays muted (Wyzowl 2026 + aggregated benchmarks)

## Media
- Wistia (Aaron's account, titles via public oEmbed): Stallion Performance Body Workout
  `3y0nw2cqty`, CAMFIT Loop Video `w3n3z2jex3`. Other on-brand candidates if needed:
  Messenger Bag Product Video `8flmjad1x9` (product/e-comm angle).
- Case photos in `public/work/` (1200px JPEG, sips-resized): `hmor.jpg` (from
  heavymetaloffroad.com Shopify hero, Tundra + rack), `warhorse.jpg` (local Warhorse repo
  `warhorse-painting-hero.jpg`), `familyflow.jpg` (familyflowchiropractic.com Squarespace CDN,
  adjustment photo 001A5649.jpg — camera filename, likely Aaron's own shoot).

## Case studies (deliberately qualitative — no unverified numbers)
- **HMOR**: 10 video ads → national Meta campaign, commission on tracked sales. No published
  numbers (client hasn't signed off).
- **Warhorse Painting**: brand film + site + tracked campaigns, performance partnership.
  Numbers unsettled as of Jul 2026.
- **Family Flow Chiropractic**: per Aaron, campaigns filled the schedule until ads were
  turned OFF. No stats on disk; claim is Aaron's own.
- Context note in Proof section: "I only publish campaign numbers clients have signed off on."

## Dev-environment quirk
The Claude in-app browser pane screenshots only render at scrollY=0 on this page; to visually
QA lower sections, set `document.body.style.transform='translateY(-Npx)'` with scroll at 0
(and remember to reset). Count-up stats appear frozen at low values in captures (rAF
throttling); they animate fine in real browsers. After editing the `<style>` block, restart
the dev server — Vite HMR served stale CSS once (rate table collapsed to 2 columns).

## Style rules
- **No em dashes anywhere in copy** (Aaron: reads as AI-written). En dashes in ranges OK.
- Letter greeting is generic ("PeakVO₂ team,") — swap in the contact's name once Aaron has it.

## Commands
`npm install` → `npm run dev` (local, launch.json entry `peakvo2-proposal`, port 4327) ·
`npm run build` → `dist/` (Netlify).

## Before sending
1. Aaron confirms every dollar figure (derived from past pricing, not quoted to client yet).
2. Swap "PeakVO₂ team" for the actual contact name from the inquiry call.
3. Confirm the shoot logistics claim (one production day, first cuts in two weeks) is
   deliverable.
4. Deploy to peakvo2.accelmediaads.com and send the link.
