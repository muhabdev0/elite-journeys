# ALASWANI Tourism & Transport — Bilingual Landing Page

A production-ready, responsive Arabic/English landing page that closely mirrors the reference: dark cinematic hero with luxury black van, gold accents, cream service section, destinations carousel, and dark contact footer.

## Scope

Single-page site at `/` with full bilingual support (AR-RTL default, EN-LTR), male-only or no-people imagery, premium feel.

## Design system (src/styles.css)

- Palette (oklch tokens):
  - `--background` cream ivory (#faf6ef)
  - `--foreground` deep navy (#0f1729)
  - `--primary` rich gold/amber (#c9a14a) + `--primary-glow` warmer amber
  - `--card` off-white, soft shadows
  - `--hero-overlay` midnight navy gradient
- Radius: 1.25rem cards, full pills for buttons
- Shadows: `--shadow-elegant`, `--shadow-card` soft layered
- Fonts via `<link>` in `__root.tsx`:
  - Arabic: Tajawal (display + body)
  - Latin: Playfair Display (headings) + Inter (body)
- Direction handled by `<html dir lang>` driven by language state

## i18n

- Lightweight context `LanguageProvider` (`src/lib/i18n.tsx`) storing `lang: 'ar'|'en'` in localStorage; default `ar`.
- Sets `document.documentElement.dir` and `lang` on change.
- `useT()` returns strings from a single `translations` object covering nav, hero, features, CTAs, stats, services, destinations, footer.
- Language switcher pill (globe icon) in header toggles AR ⇄ EN.

## Components (src/components/site/)

- `Header.tsx` — semi-transparent over hero, logo (text mark "ALASWANI / Tourism & Transport" with gold A), nav links, active gold underline, language pill, mobile hamburger (Sheet) with smooth slide.
- `Hero.tsx` — full-bleed background (generated cinematic European scene + black luxury van composite), dark navy gradient overlay, large bilingual headline with gold accent on second line, subtitle, 4 feature chips with gold icons (Users, ShieldCheck, MapPin, Car), primary gold CTA + outlined secondary CTA with phone icon.
- `StatsStrip.tsx` — dark rounded panel overlapping hero bottom (negative margin), 4 cells with gold numbers / white labels, responsive 2x2 → 4-col.
- `Services.tsx` — cream bg, gold eyebrow + bold heading, 4 cards (image top, circular gold icon badge overlapping image, title, description, gold "More" pill); hover lift; equal heights via grid.
- `Destinations.tsx` — heading + Embla carousel (already-available via shadcn `carousel`), rounded image cards with gradient label overlay, gold circular prev/next controls; touch friendly.
- `Footer.tsx` — dark band, WhatsApp green circle icon + phone `+31 6 44444226`, support line, centered logo mark, social icons (Instagram/Facebook/TikTok/YouTube) with hover gold.

## Images

Generated via imagegen and saved under `src/assets/`:
1. `hero-bg.jpg` — cinematic European canal/windmill/tulip scene at golden hour (no people).
2. `hero-van.png` (transparent) — black luxury Mercedes-style van, 3/4 front angle.
3. `service-transport.jpg` — black luxury van on European street (no people).
4. `service-tours.jpg` — Amsterdam canal houses, scenic (no people).
5. `service-driver.jpg` — male professional driver in suit by car, smiling, thumbs up.
6. `service-vip.jpg` — premium luggage set on cobblestone (no people).
7. Destinations (7): Amsterdam, Paris, Brussels, Prague, Zurich, Interlaken, Vienna — all scenic, no people.

All prompts explicitly exclude female figures; people only allowed in driver image (male).

## Route

- `src/routes/index.tsx` — composes sections, sets bilingual `head()` meta (title/description/og swapped via default AR copy; static at SSR is fine since lang toggles client-side).
- `__root.tsx` — wrap `<Outlet/>` in `LanguageProvider`; add Google Fonts `<link>` entries; keep existing QueryClientProvider.

## Responsive

- Tailwind breakpoints: hero stacks at `md`, services `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`, stats `grid-cols-2 md:grid-cols-4`, destinations carousel `basis-[80%] sm:basis-1/2 lg:basis-1/4`.
- Use `min-w-0` + `truncate` patterns in header row.

## Accessibility

- Semantic `<header><main><section><footer>`, single H1 in hero, aria-labels on icon buttons, alt text per image, focus-visible rings in gold, keyboard-navigable carousel and menu.

## Out of scope

- No backend, no booking form submission (CTAs are anchors/`tel:`/`https://wa.me/`).
- No additional routes; everything on `/`.

Confirm to proceed and I'll build it.