---
name: Everest Asian Restaurant & Bar
description: Two Japanese-inflected worlds for one bilingual curry-house home page; one will ship after the client chooses.
colors:
  # Variant B, 暖簾 noren (b/style.css)
  b-cloth: "#123527"
  b-cloth-2: "#0C2419"
  b-washi: "#F3ECDC"
  b-washi-2: "#EAE1CC"
  b-gold: "#C9A45C"
  b-sumi: "#1A1714"
  b-ink-2: "#5B5346"
  b-ink-3: "#6E6350"
  b-rule: "#D8CCB0"
  b-verm: "#B5382A"
  # Variant C, 引札 hikifuda broadside (c/style.css)
  c-stock: "#F1E6C8"
  c-stock-2: "#E7DAB6"
  c-ink: "#1C1A17"
  c-red: "#B2202B"
  c-blue: "#1F3A93"
  c-mustard: "#E0A526"
typography:
  b-display:
    fontFamily: "Shippori Mincho, EB Garamond, Georgia, serif"
    fontSize: "clamp(44px, 7vw, 96px)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.12em"
  b-headline:
    fontFamily: "Shippori Mincho, EB Garamond, Georgia, serif"
    fontSize: "clamp(32px, 4vw, 48px)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.12em"
  b-title:
    fontFamily: "Shippori Mincho, EB Garamond, Georgia, serif"
    fontSize: "clamp(22px, 2.2vw, 28px)"
    fontWeight: 500
    letterSpacing: "0.06em"
  b-body:
    fontFamily: "Shippori Mincho, EB Garamond, Georgia, serif"
    fontSize: "clamp(16px, 1.5vw, 21px)"
    fontWeight: 400
    lineHeight: 2.2
  b-label:
    fontFamily: "Cinzel, Shippori Mincho, serif"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.26em"
  b-numeral:
    fontFamily: "EB Garamond, Shippori Mincho, serif"
    fontSize: "clamp(28px, 3vw, 36px)"
    fontWeight: 500
  b-ui:
    fontFamily: "Zen Kaku Gothic New, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.04em"
  c-display:
    fontFamily: "Dela Gothic One, Zen Kaku Gothic New, sans-serif"
    fontSize: "clamp(64px, 18.6vw, 268px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.02em"
  c-headline:
    fontFamily: "Dela Gothic One, Zen Kaku Gothic New, sans-serif"
    fontSize: "clamp(32px, 4.5vw, 56px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.04em"
  c-title:
    fontFamily: "Dela Gothic One, Zen Kaku Gothic New, sans-serif"
    fontSize: "clamp(24px, 3vw, 38px)"
    fontWeight: 400
    letterSpacing: "0.02em"
  c-body:
    fontFamily: "Zen Kaku Gothic New, system-ui, sans-serif"
    fontSize: "clamp(16px, 1.5vw, 21px)"
    fontWeight: 500
    lineHeight: 1.95
  c-label:
    fontFamily: "Anton, Zen Kaku Gothic New, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    letterSpacing: "0.24em"
  c-numeral:
    fontFamily: "Anton, Zen Kaku Gothic New, sans-serif"
    fontSize: "clamp(54px, 6vw, 86px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
rounded:
  none: "0"
  round: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  c-gutter: "clamp(16px, 3vw, 40px)"
  row: "16px"
  section-b: "clamp(64px, 9vw, 120px)"
components:
  b-button-green:
    backgroundColor: "{colors.b-cloth}"
    textColor: "{colors.b-washi}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "56px"
  b-button-green-hover:
    backgroundColor: "{colors.b-cloth-2}"
  b-button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.b-washi}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "56px"
  b-button-ink:
    backgroundColor: "transparent"
    textColor: "{colors.b-sumi}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "56px"
  b-button-ink-hover:
    backgroundColor: "{colors.b-sumi}"
    textColor: "{colors.b-washi}"
  b-tag-language:
    backgroundColor: "{colors.b-washi}"
    textColor: "{colors.b-sumi}"
    rounded: "{rounded.none}"
    width: "64px"
    height: "88px"
  b-tag-language-on:
    backgroundColor: "{colors.b-cloth}"
    textColor: "{colors.b-gold}"
  b-menu-tab:
    backgroundColor: "transparent"
    textColor: "{colors.b-sumi}"
    rounded: "{rounded.none}"
    padding: "18px 22px"
  b-menu-tab-current:
    backgroundColor: "{colors.b-cloth}"
    textColor: "{colors.b-washi}"
  b-seal:
    backgroundColor: "{colors.b-verm}"
    textColor: "{colors.b-washi}"
    rounded: "{rounded.none}"
    size: "72px"
  c-button-ink:
    backgroundColor: "{colors.c-ink}"
    textColor: "{colors.c-stock}"
    rounded: "{rounded.none}"
    padding: "0 34px"
    height: "64px"
  c-button-red:
    backgroundColor: "{colors.c-red}"
    textColor: "{colors.c-stock}"
    rounded: "{rounded.none}"
    padding: "0 34px"
    height: "64px"
  c-button-cream:
    backgroundColor: "{colors.c-stock}"
    textColor: "{colors.c-ink}"
    rounded: "{rounded.none}"
    padding: "0 34px"
    height: "64px"
  c-button-cream-hover:
    backgroundColor: "#FFFFFF"
  c-chip:
    backgroundColor: "transparent"
    textColor: "currentColor"
    rounded: "{rounded.none}"
    padding: "8px 12px"
  c-nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.c-ink}"
    padding: "10px 20px"
  c-nav-link-hover:
    backgroundColor: "{colors.c-ink}"
    textColor: "{colors.c-stock}"
  c-band-red:
    backgroundColor: "{colors.c-red}"
    textColor: "{colors.c-stock}"
    height: "clamp(40px, 6vw, 84px)"
---

# Design System: Everest Asian Restaurant & Bar

> **Status: two candidate worlds, one will ship.** The build carries two sibling variants of the same home page (`b/`, `c/`) sharing content, behaviour and a base stylesheet. The client picks one. When that happens, trim this file to the chosen world: delete the other variant's tokens from the frontmatter, its sections below, and its entries in `.impeccable/design.json`. The Shared Foundations section survives every outcome. Token keys are prefixed `b-` and `c-` so the trim is a deletion, not a rewrite. (A third variant, `a/` station sign, was removed from the repo; its tokens and rules are gone from this record. `shared/site.js` still dispatches an `everest:section` event that only the removed variant listened for; it is harmless and stays.)

## Overview

**Creative North Star: "Two Japanese Signs for One Curry House"**

Each variant reads the restaurant through a Japanese object that already tells people where to go and what it costs: a shop curtain, a printed handbill. The brief's constraint, "a bit Japanese in theme but not completely", lands as form rather than ornament. Neither uses cherry blossom, brush-stroke textures, or a dark full-bleed food photo with a gold serif. The logo's forest green and gold are the one thread both worlds pull from, tuned per world (B `#123527`/`#C9A45C`, C only carries the logo itself).

Density is high and informational in both. Prices, hours, phone number and address are typeset as headline material, not footnotes. The page is bilingual with Japanese as the default language and English switched in place; both worlds treat the two scripts as a single typographic system, with Latin set in a companion face that matches the Japanese face's weight and rhythm.

Motion is sparse and belongs to one signature per world: B parts a woven curtain as the page scrolls and lets it sway; C prints the headline off-register and stamps a hanko on load. Everything else transitions in 120ms or not at all, and `prefers-reduced-motion` collapses all of it.

**Key Characteristics:**
- Square-cornered, rule-driven layouts; radius is reserved for circles (logo, dots, hanko).
- JA-default bilingual type with a Latin companion face per world; Latin is set with wide tracking as a secondary voice, never as the display.
- One signal colour per world for Reserve / price / seal, kept scarce.
- Photographs are labelled placeholders (chip bottom-left) until the client supplies originals.
- Flat surfaces; shadow exists only where an object physically stands off the page (curtain panels, hanging tags, seal, logo crest).

## Colors

Each world is a small fixed palette (5 to 7 hues) with one paper, one ink, one brand green or its stand-in, one warm accent, and one signal red. Nothing is tinted by opacity except hairlines on dark grounds.

### Shared
- **Focus ring** (`--focus`, per variant): 3px solid outline offset 2px on every `:focus-visible`. B uses vermilion, C uses indigo. Fallback `#17357d`.
- **Selection** (`--sel` / `--sel-ink`): text selection is the world's gold on ink (B) or red on stock (C).
- **Placeholder chip**: `rgba(22,22,22,.72)` on `#f4f2ec`, hard-coded in `base.css` and identical in both worlds.

### Variant B, 暖簾 noren

Forest-green cloth, washi cream, gold hairlines, sumi, one vermilion seal.

#### Primary
- **Cloth Green** (`b-cloth`): the curtain panels (with a woven `repeating-linear-gradient` texture), the dinner section ground, the current menu tab, the selected language tag. Deepens to `b-cloth-2` on hover.
- **Vermilion** (`b-verm`): the hanko seal on the concept photo, spice dots, note text, the focus ring. The single hot colour.

#### Secondary
- **Old Gold** (`b-gold`): every hairline on a dark ground, framed-photo border, tag borders, prices on cloth, the Latin brand mark, the crest ring. Gold is a line, not a fill; the only gold fill is the `btn-gold` button (present in the stylesheet, hover `#d9b86e`).

#### Neutral
- **Washi** (`b-washi`): page ground, hanging tags, mobile bar. **Washi 2** (`b-washi-2`): photo and map placeholders.
- **Sumi** (`b-sumi`): text, hero ground, footer, 1px rules on washi. `b-ink-2`, `b-ink-3`: secondary and tertiary copy, kv keys, romaji.
- **Rule** (`b-rule`): 1px hairlines between rows on washi.

**The Hairline Gold Rule.** On cloth or sumi grounds every divider is 1px gold (solid or `rgba(201,164,92,.3–.35)`). Never a white or grey rule on a dark ground in this world.

### Variant C, 引札 hikifuda broadside

Poster-stock cream, black wood type, crimson and indigo ink passes, one mustard band.

#### Primary
- **Crimson** (`c-red`): the off-register ghost pass of the headline, the wide brand band, prices on light rows, the hanko stroke, the reserve band, selection. This world's red is generous, not scarce.
- **Indigo** (`c-blue`): the hero copy cell, the lunch-set label, the focus ring. Used as a full-bleed block, never as text on stock.

#### Secondary
- **Mustard** (`c-mustard`): prices on ink rows, the takeout box, course titles on ink, "TEL" and "毎日営業" labels. Reads as the third ink pass and only appears on ink or as a boxed fill.

#### Neutral
- **Poster Stock** (`c-stock`): page ground with a 5px dot screen (`radial-gradient(rgba(28,26,23,.06) 1px, transparent 1px)`). **Stock 2** (`c-stock-2`): map placeholder.
- **Wood Ink** (`c-ink`): text, all 4px/3px/2px rules, alternate fare rows, course column, hours band, footer.

**The Ink Pass Rule.** Only four inks exist: black, crimson, indigo, mustard. No tints, no greys; secondary copy is ink at reduced opacity (`.7`–`.85`) on the same stock.

## Typography

Both worlds load Google Fonts and share **Zen Kaku Gothic New** (400/500/700/900) as the Japanese gothic. Each world adds its own display and Latin companion.

### Shared bilingual rules

**The JA-Default Rule.** `<html lang="ja" data-lang="ja">` is the shipped default. Every translatable node carries `data-t="path.key"`; attributes use `data-t-attr="attr:key"`; rendered lists carry `data-list="name"` and are regenerated by `shared/site.js` on switch. Copy that is not in `shared/content.js` does not exist.

**The Companion Latin Rule.** Latin runs (romaji, "EVEREST", prices) are set in the world's Latin face via a class (`.cz` / `.gar` in B; `.cond` in C), always with wide tracking (0.2–0.34em) when it is a label and always secondary to the Japanese name at the same position.

**The Tabular Numeral Rule.** C sets `font-variant-numeric: tabular-nums` on `body`; prices and hours align in columns. B does not; its Garamond prices sit one per row and never stack.

### Variant B, noren
**Display / Body Font:** Shippori Mincho (with EB Garamond, Georgia). **Latin Display:** Cinzel. **Latin Numeral:** EB Garamond. **UI Font:** Zen Kaku Gothic New.
**Character:** mincho throughout, set light (500) and airy (line-height 1.7–2.2), with Cinzel capitals as a lapidary Latin voice and Garamond for prices. Gothic appears only for UI text (buttons, hours, item lists, notes).

- **Display** (500, `clamp(44px, 7vw, 96px)`, 1.0, 0.12em): the vertical エベレスト in the crest; in EN the Latin display uses Cinzel at `clamp(28px, 3.4vw, 50px)`, upright orientation.
- **Headline** (500, `clamp(32px, 4vw, 48px)`, 1.2, 0.12em): section titles (お品書き, dinner). Vertical section titles (`.sec-vt`) use `clamp(30px, 3.5vw, 44px)` at 0.3em.
- **Title** (500, `clamp(22px, 2.2vw, 28px)`, 0.06em): menu row names.
- **Body** (400, `clamp(16px, 1.5vw, 21px)`, 2.2): concept copy, max 30em.
- **Label** (Cinzel 400, 11px, 0.26em): romaji beside row names, course times, "k" keys in callouts (0.3em).
- **Numeral** (EB Garamond 500, `clamp(28px, 3vw, 36px)`): prices; yen at 18px.
- **UI** (Zen Kaku Gothic New 400/700, 12.5–15px, 1.7): item lists, notes, buttons (700, 15px, 0.12em).

**The Vertical Title Rule.** Concept and Access carry their titles in `writing-mode: vertical-rl` at desktop; at ≤900px they fall to horizontal with 0.2em tracking. Latin in vertical runs is `text-orientation: upright`.

### Variant C, hikifuda broadside
**Display Font:** Dela Gothic One (with Zen Kaku Gothic New). **Condensed Latin:** Anton. **Body / UI Font:** Zen Kaku Gothic New. **Brush:** Yuji Boku (used only inside the hanko SVG).
**Character:** wood-type poster. Dela Gothic One does every Japanese headline, name and key; Anton does every Latin line and every numeral; the gothic body runs at 500–900 so nothing on the sheet is light.

- **Display** (400, `clamp(64px, 18.6vw, 268px)`, 1.0, 0.02em): the headline word, printed twice (see Components). JS shrinks it to fit the band width.
- **Headline** (400, `clamp(32px, 4.5vw, 56px)`, 1.1, 0.04em): section titles; paired with an Anton alt at 18px/0.3em in crimson.
- **Title** (400, `clamp(24px, 3vw, 38px)`, 0.02em): fare-set names; dinner set names at 20px.
- **Body** (500, `clamp(16px, 1.5vw, 21px)`, 1.95): concept copy.
- **Label** (Anton 400, 15px, 0.24em): romaji beside fare names; band-top facts are gothic 900 at 14px/0.3em.
- **Numeral** (Anton 400, `clamp(54px, 6vw, 86px)`, 1.0): fare prices; the hero price at `clamp(130px, 13vw, 190px)`, 0.9.

**The Nothing Light Rule.** No text in this world is set below weight 500 (gothic) or in a thin display face.

## Layout

**Shared.** Mobile-first, one column at ≤900px, two-column grids above. Content width 1200px with a fluid gutter (`spacing.gutter` = `clamp(16px, 4vw, 48px)`; C uses `clamp(16px, 3vw, 40px)` because its cells are edge-to-edge). Breakpoints that recur across both worlds: **520px** (button stacks), **600px** (brand text hides), **760px** (mobile call/reserve bar appears; reserve buttons stack), **900px** (grids collapse to one column), **1000–1100px** (C's info grid and top nav). Sticky header at z-index 20, mobile bar at 30. `html { scroll-behavior: smooth }`, off under reduced motion.

**The Mobile Bar Rule.** At ≤760px a fixed two-cell bar (電話する / 予約する) sits at the bottom with `env(safe-area-inset-bottom)` padding, and the footer gains bottom padding (84–100px) so nothing is hidden behind it. Both worlds ship it; `@media print` hides it.

**Variant B.** Sections use the `section-b` rhythm (`clamp(64px, 9vw, 120px)`) and a three-column grid `auto 1fr 520px` where the first column is the vertical title. The hero is `100svh` with an absolutely positioned masthead, a three-column crest grid (34% / 34% / 32%) matching the three curtain panels, and a bottom "footline" that carries the hero copy left and hours/address right. Nav hides at ≤900px.

**Variant C.** No container gutters: the page is a stack of full-bleed bands separated by `--rule` (4px solid ink), every cell separated by the same rule. Grids are `1fr 1fr` (hero split, CTA pair, access buttons), `560px 1fr` (concept), `1fr 500px` (dinner), `1.2fr 1fr 1fr 1fr` (info). Fare rows alternate stock/ink. Inner cell padding is 22–28px vertical by `c-gutter` horizontal.

**The Full-Measure Band Rule (C).** Every band fills the viewport width; the only inner padding is the cell's own. There is no centred container.

## Elevation & Depth

Flat by default in both worlds. Depth is carried by rules and tonal blocks (paper vs ink vs green), not by shadow. Shadows exist only where the world's object physically stands off the page.

### Shadow Vocabulary
- **B Curtain panels** (`12px 0 30px rgba(0,0,0,.35)` left, `-12px 0 30px` right, `0 0 40px` centre): cloth hanging in front of the photo.
- **B Hanging tag** (`0 6px 14px rgba(0,0,0,.25)`) and **B Seal** (`0 6px 14px rgba(0,0,0,.2)`): small objects pinned to the surface.
- **B Crest** (`0 0 0 6px cloth, 0 0 0 8px gold, 0 30px 60px rgba(0,0,0,.5)`): the logo as a badge on the curtain; brand logo in the masthead gets a 2px gold ring only.
- **C**: no box-shadows anywhere. Depth is `mix-blend-mode: multiply` ink on stock and the 4px rule.

**The Object Shadow Rule.** A shadow is allowed only under something the world would physically hang or mount (curtain, tag, seal, crest). Buttons, cards, rows and nav never cast one; hover lifts are `translateY(-1px)` (B) or `translate(-2px,-2px)` (C) with no shadow.

## Shapes

Square corners are the default in both worlds (`rounded.none`). The only radii in the build:
- **Circles** (`50%`): logo image, spice numerals (26px), B language-tag pin (6px), B crest (logo at 160–300px).

Borders are structural: B uses 1px (sumi on washi, gold on cloth) for everything including buttons (1.5px); C uses 4px (`--rule`) for bands, 3px for buttons/nav/tabs/facts, 2px (`--rule2`) for list rows. Rotation is a signature, not a habit: C's hanko sits at -8deg, and B's curtain panels rotate ±1.2–1.5deg while parting. Photos are clipped by their `figure` with `overflow: hidden` and no radius.

## Components

### Shared: Placeholder photo chip
Every photograph carries `<span class="ph">仮写真・差し替え予定</span>` bottom-left (10px inset, 4px 7px padding, 11px Zen Kaku Gothic New, 0.06em, `#f4f2ec` on `rgba(22,22,22,.72)`). Remove the chip when the client's photo replaces the placeholder. Images are `object-fit: cover`.

### Shared: Language switch
`[data-lang]` buttons toggle `.on` and `aria-pressed`; the choice persists in `localStorage` and can be forced by `?lang=en`. Each world draws it in its own form (below).

### Shared: Skip link and focus
`.skip` (sumi `#161616` on white, 8px 12px) appears on focus at top-left. Every focusable element shows the world's `--focus` 3px outline.

### Variant B, noren

**Buttons.** Square, 1.5px border, 56px tall (48px `btn-sm`), 0 30px, Zen Kaku Gothic New 700/15px, 0.12em. Hover lifts 1px, 120ms.
- **Green** (`b-button-green`): cloth fill, washi text; hover `b-cloth-2`.
- **Outline** (`b-button-outline`): transparent, 80% washi border, for use on the hero; `.gold` modifier turns border and text gold.
- **Ink** (`b-button-ink`): transparent, sumi border; hover inverts.
- **Gold** (`btn-gold`): gold fill, sumi text; hover `#d9b86e`. Declared in the stylesheet; confirm it is placed before relying on it.

**Hanging language tags** (`b-tag-language`): 64×88px washi tags with a 1px gold border, a 6px gold pin dot, vertical mincho text (500/15px, 0.2em), object shadow; hang from the masthead at `margin-top: -32px`. Selected tag inverts to cloth/gold; hover drops 2px. At ≤900px: 34×56px, 11px text.

**Menu tabs** (`b-menu-tab`): 1px sumi bordered boxes, 18px 22px, title `clamp(18px,1.7vw,22px)` at 0.08em plus 14px hours; current inverts to cloth with gold hours; hover turns the border gold.

**Menu row** (`.row`): `1fr auto` grid, 26px vertical padding, 1px `b-rule` divider; name (`b-title`) beside a Cinzel romaji label; items in `b-ui`; Garamond price. Naan list uses a **dotted leader** (`.leader`, 1px dotted `b-ink-3`, `rgba(243,236,220,.4)` on cloth).

**Cards.** `.course`: 1px gold border on cloth, 22px 24px, name 22px mincho, price 26px Garamond gold, Cinzel 11px/0.26em time. `.call-gold` (1px gold border) and `.call-green` (cloth fill) callouts, 22px 24px, 15px/1.8.

**Framed photo + seal** (signature): the concept photo (560px tall) sits inside a 1px gold offset frame (20px offset down-left) with a 72px vermilion hanko (`b-seal`) hanging off the right edge, carrying 22px/700 vertical text. At ≤900px: 280px photo, 52px seal.

**Noren curtain** (signature): three absolutely positioned cloth panels (34% wide each, woven texture) below a 12px wooden rod (`linear-gradient(#5b4a34,#2e2419)`). `--part` (0–1) is set by `page.js` from `scrollY / (hero height × 0.7)`; left/right panels translate ±60% and rotate ∓1.5deg × `--part`, the centre lifts 12%, over 1.1s `cubic-bezier(.2,.8,.2,1)`. On hover-capable devices the hero itself parts to 46% / 6%. Inside each panel a `.sw` layer sways 6px / 0.25deg over 7s ease-in-out infinite, phase-offset -2.3s and -4.6s. On ≤900px the centre panel is hidden and the two remaining go 50.5% each. Under reduced motion the panels never move.

**Navigation.** Text links in the masthead (15px, 0.18em, washi; hover gold), hidden at ≤900px. No section tracking in B.

**Footer.** Sumi band; reserve row 56px padding, 1px `rgba(201,164,92,.3)` divider, title `clamp(26px,3vw,34px)`/500/0.12em; 12px/0.1em row at 75%.

### Variant C, hikifuda broadside

**Buttons.** Square, 3px ink border, 64px tall (50px `btn-sm`, 56px in the mobile bar), 0 34px, 900/17px, 0.08em. Hover `translate(-2px,-2px)` only; band buttons (`.band-cta`, `.access-btns`, `.mob-bar`) drop the border and the hover shift and are separated by the 4px rule instead.
- **Ink** (`c-button-ink`): ink fill, stock text.
- **Red** (`c-button-red`): crimson fill, stock text, crimson border; Reserve in the masthead.
- **Cream** (`c-button-cream`): stock fill, ink text; hover pure white.

**Chips** (`c-chip`): 2px `currentColor` border, 8px 12px, 14px/700; inherit stock or ink from the row.

**Navigation** (`.nav`, `.tabs`): a 3px ink box of 900-weight links separated by 3px rules; hover inverts a cell to ink/stock. Nav hides at ≤1100px. **Language box** (`.lang`): same construction with Anton 16px/0.14em cells, 44px tall.

**Off-register headline** (signature): `<h1 class="reg wood" data-w="…">` prints the word twice. `::before` repeats `attr(data-w)` in crimson offset `left: .015em; top: .011em`, the real span sits above; both `mix-blend-mode: multiply` so the overlap prints dark. `page.js` keeps `data-w` in sync on language change and shrinks the font until the word fits the band minus 40px.

**Hanko stamp** (signature): an inline SVG (double crimson ring, Yuji Boku 「本格」) at `clamp(76px, 8.5vw, 124px)`, rotated -8deg, multiplied; enters with `stamp` (scale 1.6 to 0.96 to 1, 500ms `cubic-bezier(.2,.8,.2,1)`, 400ms delay, `both`).

**Hero bands.** Top facts band (44px, gothic 900/14px/0.3em); name band (`clamp(120px,21vw,300px)` tall); crimson brand band (Anton, `clamp(19px,4vw,58px)`, 0.22em); split cell (price: indigo Dela key, crimson Anton 990 with wood 円/〜; copy: indigo cell with mustard sub-line); hours band (ink, mustard "毎日営業", Anton times, 40px tel); CTA pair.

**Fare row** (`.fare`): `1fr auto`, alternate rows invert to ink/stock; name (`c-title`) + Anton romaji at 70% + optional boxed crimson note (2px crimson border on stock); chips; price in crimson on stock rows, mustard on ink rows.

**Info grid.** Four rule-divided columns; 22px Dela headings; 14px/700 rows with 2px rules; spice levels as a crimson bar ramp (12px tall, 20px + 22px per level, Anton numeral, 900 label). **Takeout box**: mustard fill, 3px ink border, 40px big figure.

**Cards.** No cards. Dinner sets and courses are rows in rule-divided columns; the course column inverts to ink with mustard titles and a 4px stock rule under the heading.

**Footer.** Crimson reserve band (40px padding, title `clamp(28px,3.5vw,40px)`), then an ink row at 12px/700/0.08em with a 16px/0.3em tagline.

## Do's and Don'ts

### Do:
- **Do** keep Japanese as the default and English as a parallel: every visible string comes from `shared/content.js` via `data-t` / `data-list`; the header, hero and every list re-set in place on switch.
- **Do** set Latin in the world's companion face with wide tracking (0.2–0.34em) when it is a label, and at the same weight class as its Japanese neighbour when it is a name.
- **Do** keep every world's signal colour scarce as declared: B vermilion on seal/spice/notes; C crimson as an ink pass on bands and prices.
- **Do** ship the fixed mobile call/reserve bar at ≤760px with safe-area padding and footer clearance (84–100px).
- **Do** label every placeholder photo with the `.ph` chip until the client's originals replace it, and honour `assets/img/CREDITS.md` attribution if any placeholder ships.
- **Do** collapse all motion under `prefers-reduced-motion` (base.css forces 0.01ms; `page.js` in B and the reveal path bail early).
- **Do** use square corners; radius only for circles.

### Don't:
- **Don't** add shadows to buttons, rows, cards or navigation; shadows belong only to physically mounted objects (curtain, tags, seal, crest).
- **Don't** introduce a grey into C, or a white/grey divider onto a dark ground in B (gold hairlines only).
- **Don't** set body text below 16px at desktop or below weight 500 in C.
- **Don't** mix the worlds: no Cinzel or Garamond in C, no Dela Gothic One or 4px rules in B.
- **Don't** replace the Zen Kaku Gothic New / Shippori Mincho / Cinzel / EB Garamond / Dela Gothic One / Anton stacks with system display faces.
- **Don't** invent copy for a kicker or eyebrow above headlines; the shipped headings are the title and the alt only.
