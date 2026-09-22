# Everest Asian Restaurant & Bar website

A static site for エベレスト アジアンレストラン＆バー in Tochigi City. No framework, no build step. Japanese loads by default and every page has an English switch.

## Layout

```
index.html        review page that links the three candidates (noindex)
a/  b/  c/        the three home-page directions: station sign, noren, hikifuda broadside
shared/content.js all copy, menu items, prices, hours and access details in Japanese and English
shared/site.js    language switch, list rendering, current-section tracking, reveals
shared/base.css   reset and shared basics
assets/img/       photos (placeholders, see CREDITS.md) and the logo
PRODUCT.md        product record (Impeccable)
DESIGN.md         design system record for the three worlds
```

Each variant has its own `index.html`, `style.css` and `page.js`. The page script holds that variant's list templates and its signature motion. Static strings carry `data-t="path.in.content"` and lists render from `content.js` into `[data-list]` containers.

## Editing content

Edit `shared/content.js`. Every string exists twice, under `ja` and `en`. Prices are strings such as `"1,210"`. The hours and last-order times also appear as literal text in each hero, so change them there too.

## Language

The switch stores the choice in `localStorage` and reads `?lang=en` or `?lang=ja` from the URL.

## Deploy to GitHub Pages

1. Push this folder as the repository root. The `.nojekyll` file is included.
2. In the repository settings, open Pages, choose "Deploy from a branch", and select `main` with the root folder.
3. The site is served at `https://<user>.github.io/<repo>/`. The variants live at `/a/`, `/b/` and `/c/`.

All paths are relative, so the project works at any base path. Once a direction is chosen, move its three files to the root, change `../shared` to `shared` and `../assets` to `assets` in them, delete the other two folders, and trim DESIGN.md to that world.

## Before launch

- Replace every photo in `assets/img/` with the restaurant's own and remove the placeholder chips (the `.ph` elements).
- Replace `assets/img/logo.png` with a clean export. The supplied PNG is truncated.
- The client asked for an anime-style illustration of the chef making naan. The brief is in `.impeccable/assets/`.
