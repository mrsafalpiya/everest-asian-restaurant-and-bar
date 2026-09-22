# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS (user's choice, 2026-09-22). Design exploration happens first as three Claude Design artifacts of the full home page; the chosen direction is then built as a zero-dependency static site.

## Users

- **Primary:** residents of Tochigi City and the surrounding Tochigi prefecture area deciding where to eat lunch or dinner, mostly on a phone, often arriving from Tabelog, Google Maps or search. They read Japanese. Typical jobs: check today's hours, see lunch set prices, pick a spice level, find the address and parking, call or reserve.
- **Secondary:** English readers living or working nearby: foreign residents, factory and technical workers, the local Nepali and South Asian community, and occasional tourists. Same jobs, in English.
- **Groups:** parties of 5 or more evaluating the all-you-can-eat and all-you-can-eat-and-drink courses, which require reservation.
- **Families:** the kids set (under 10) and free naan/rice refills matter to this group.

Japanese is the default language; English is a full parallel version behind a visible language switch, not a partial translation.

## Product Purpose

The official website of Everest Asian Restaurant & Bar (エベレスト アジアンレストラン＆バー), an Indian and Nepali curry restaurant and bar at 122-1 Hinokuchi-cho, Tochigi City. It replaces a generic Wix template (businessdesignkusa.wixsite.com/website) that exists only in Japanese.

Success means a visitor can, within seconds, decide to come: understand what the restaurant is, see the menu and prices, know it is open today, and get to the door, the phone number or the Tabelog reservation page.

## Positioning

A chef who trained in India and Dubai, cooking authentic spice-driven curry deliberately tuned to the Japanese palate, in a Nepali-owned, "exotic atmosphere" room in a small Tochigi town. Five spice levels up to "無限" (infinite). Generous value: lunch sets from 990 yen with free naan or rice refills, 20% off takeout, and order-style all-you-can-eat courses for groups. The brand's own tagline: "Good food brings people together."

The cultural identity is Himalayan and South Asian (Nepal and India), served to a Japanese audience. The brief asks for a Japanese-inflected design language, "a bit Japanese in theme but not completely"; that is a binding visual constraint recorded here for new-work, not a product fact about the cuisine.

## Operating Context

- Single-location restaurant. Lunch 11:00–15:00 (L.O. 14:30), dinner 17:00–22:00 (L.O. 21:30), basically no closing day.
- Reservations by phone (050-5590-3163) or via Tabelog (https://tabelog.com/tochigi/A0902/A090203/9016016/). The old site's Wix reservation widget and online-ordering app were unused or empty and are not carried forward unless the client asks.
- Payment: cash or PayPay. Fully non-smoking, parking available, no private rooms.
- Access: about 6 minutes by car from the JR Ryomo Line (Omoigawa Station area). Most visitors drive.
- Menu changes are rare but prices are tax-inclusive and must be easy to update in static HTML.

## Capabilities and Constraints

- Content sections (from the existing site): Hero, Concept, Menu (lunch sets; dinner sets and à la carte; course and party), Access, and links to Tabelog. Full menu copy, prices and translations live in `../resources/website-content.md`.
- Bilingual: Japanese (default) and English, switched in-page without reload; both languages carry the full content, including menu items, spice-level names and access details. Japanese typography (mixed kanji/kana, vertical text where used) must be first-class, not an afterthought.
- Static site: no backend, no CMS. Language switching, menu tabs and any motion run in vanilla JS.
- Mobile-first traffic; the design must hold on a phone as well as desktop.
- Terminology: ランチセット (lunch sets), ディナー・単品 (dinner and à la carte), コース・パーティー (course and party), 辛さ 1 普通 → 5 無限 (spice levels), L.O. (last order), 税込 (tax included).
- Undecided: whether to add an Instagram or LINE link (none exist today); whether to keep an on-site reservation form (currently Tabelog and phone only).

## Brand Commitments

- Name: Everest Asian Restaurant & Bar / エベレスト アジアンレストラン＆バー. Copyright line: ©2025 エベレスト アジアンレストラン＆バー.
- Logo: `../resources/logo.png`, a circular badge: deep forest green field, gold border and gold "EVEREST" wordmark, Himalayan peaks against a sunset, a Nepali pagoda with prayer flags on the left, the Taj Mahal on the right, crossed gold fork and spoon, a lotus, and the tagline "GOOD FOOD BRINGS PEOPLE TOGETHER". Dominant colours sampled from the file: near-black green (#0D160E), gold (#CE9E49, #A2692D), snow white/blue-grey (#C5D1D2), sky blue (#457FAC). **The PNG is truncated: only about 1,110 of 1,221 rows decode. A clean export from the client is needed before launch.**
- Tagline: "Good food brings people together" (English, from the logo).
- Voice: warm, hospitable, plain-spoken; the Japanese copy on the old site is polite keigo (ご提供いたします).
- Binding visual constraint from the user: a design system that is "a bit Japanese in theme but not completely", with an exceptional hero section.

## Evidence on Hand

- Real content: complete menu with prices, concept copy, access details, hours, payment, facilities. Path: `../resources/website-content.md`.
- Logo: `../resources/logo.png` (damaged, see above).
- Client request (2026-09-22): an anime-style illustration of the chef making naan on the home page. It lives in the Concept section ("The Chef" slot). The artwork does not exist yet; the brief and prompt are in `.impeccable/assets/chef-naan-illustration-brief.md`. Until it arrives the slot is a labelled placeholder, never a drawn imitation.
- Photographs: none in the repo. The old Wix site has photos of curry, naan, tandoori dishes, the storefront and the dining room; the client can reuse those as the starting set. Designs should use clearly labelled photo slots for these, not fabricated imagery presented as the real restaurant.
- No testimonials, awards, press, review counts or star ratings are on hand. Do not invent any. Tabelog is linked but its rating is not quoted.
- No social media accounts, no email address.

## Product Principles

1. **Decide-to-come in one screen.** Hours, today's status, address, phone and reserve are always one tap away on mobile.
2. **The menu is the content.** Real dishes, real prices, spice levels and refill rules take precedence over decorative copy.
3. **Two languages, one site.** Japanese and English are equals in layout quality; the switch is obvious and never hides content.
4. **Himalayan warmth, Japanese restraint.** The restaurant is Nepali and Indian; the audience and the brief are Japanese. Both must be felt without cliché.
5. **Static and durable.** Anything the owner may need to change (prices, hours) is plain text in one place.

## Accessibility & Inclusion

- Bilingual users and non-native readers of both languages: keep sentences short, prices numeric, and icons paired with text.
- Spice levels must not rely on colour alone (the old site used a flame icon plus a number and label).
- Phone number and address must be real links (tel:, map).
