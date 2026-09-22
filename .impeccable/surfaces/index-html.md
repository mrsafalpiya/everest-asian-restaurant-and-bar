---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface: Home page (Persuade)

Scope: the bilingual (JA default / EN) home page of Everest Asian Restaurant & Bar, delivered first as three Claude Design canvas directions (desktop 1440 + mobile 390 each), then built static. Audience: Tochigi locals on a phone deciding where to eat; secondary English readers nearby. Action: call, reserve on Tabelog, or come for lunch. Proof: the real menu and prices, hours, address, the chef's India/Dubai training. Constraints: no invented reviews or ratings; photos are labelled placeholders until the client supplies the Wix originals; logo PNG is damaged.

The user pinned "3 designs". Three full directions are presented as equals; the direction contract below is the assigned one (candidate 4 of the grounded list); the pick and the fused challenger ride as full alternates.

## Direction contract

THESIS: The home page is Japanese railway wayfinding for a curry house "6 minutes from Omoigawa": the station nameplate is the hero, the route map is the nav, the timetable is the hours, the fare table is the menu. It refuses the category default of a dark full-bleed food photo with a gold serif and a Reserve button.

OWN-WORLD: enamel white (#F4F2EC), sumi ink (#161616), the logo's forest green (#0F3D2E) as the line colour, the logo's gold (#CE9E49) as the arrow strip, one signal red (#C8102E) for RESERVE only. Gothic type throughout (Zen Kaku Gothic New for JA and Latin, Noto Sans JP 900 for the nameplate), tabular numerals, hairline rules, full-measure bands. Stations are filled/hollow circles on a green line; the current section is the filled one.

STORY: the visitor recognises the sign in under a second, reads the name in their language, sees lunch is ¥990 with free naan refills, sees it's open, and taps call or reserve.

FIRST VIEWPORT: full-bleed Everest-at-dusk photo (labelled placeholder) as the view from the platform; centred, a monumental enamel nameplate: hiragana reading small, エベレスト at 160px, EVEREST romaji beneath, a green line strip with gold arrow ends pointing left to 思川 Omoigawa and right to ランチ Lunch. Top: route-map nav with a JA|EN toggle drawn as a sign flip. Bottom-left of viewport: a timetable chip "本日 11:00–15:00 / 17:00–22:00". Primary action: RESERVE in red at the right end of the nav and repeated in the hours band.

FORM: Station nameplate (ekimei-hyō) wayfinding, position 4 in the grounded list (noren shopfront; o-shinagaki wooden menu plaques; ukiyo-e Everest woodblock; station signage; katazome/block-print textile; prayer-flag line; Showa curry-shop signage). Seed key 9f04678b. Raises: from Hatch Show Print, every menu band fills the full measure; from teletext, a fixed five-colour palette and nothing else; from the ASCII render, the timetable sits on a strict ch grid.

Alternates presented at full size: PICK = Noren shopfront (grounded #1; risk: the parting-curtain hero is familiar on Japanese restaurant sites). CHALLENGER fused = Hikifuda broadside (Hatch Show Print grammar in Japanese wood-type handbill form; verdict competitive: wins product clarity, holds audience identification). Declined: cyclorama, pickling calendar, ASCII, teletext, starship terminal.

Signature interaction: the language switch flips the nameplate's primary/secondary lines (JA-large/EN-small ↔ EN-large/JA-small) and every band re-sets in the other language without reload. Motion grammar: a single 320ms ease-out flip; route-map dot slides along the line as sections scroll.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Round 1 status (2026-09-22)

Three directions published to the Design canvas https://claude.ai/artifact/FVPk4fFLzLc6pLiCjG5iSp (A station sign = assigned, B noren = pick, C hikifuda broadside = fused challenger). Code-led (no image generation on this harness). Local render screenshots in `.impeccable/review/`. Finish review, DESIGN.md and the telemetry ping are deferred until the user locks a direction and the static build exists; the chosen direction's contract replaces the assigned one above if B or C wins.

## Round 2 status (2026-09-22): static build

User chose to build all three directions into one GitHub Pages project: `a/` Station Sign, `b/` Noren, `c/` Hikifuda broadside, sharing `shared/content.js` (bilingual content), `shared/site.js` (language switch + list rendering) and `shared/base.css`. Root `index.html` is a review chooser (noindex). Chef illustration deferred by the user; slot removed from the build. Real-viewport captures in `.impeccable/review/site/`. Detector run once; mechanical fixes applied. Finish review spawned; DESIGN.md to be written by the documenter after the fix round.

## Finish review outcome (2026-09-22)

Reviewer disposition after three verdict passes: **ship** for the scored fix list (all resolved). Disclosed and unchanged: B's curtain panels are flat CSS cloth (no hem/fold assets; raster generation unavailable this session); A's type is Zen Kaku Gothic New 900 for the nameplate and Archivo for Latin/numerals, an adaptation of the contract's "Noto Sans JP 900 / Zen Kaku Latin" line (accepted; contract OWN-WORLD updated by this note). Whole-surface approval was not claimed by the reviewer.
