# TOYMADE Portfolio — UI Kit

Interactive recreation of the TOYMADE studio website. Single-page with view switching.

## Screens

- **Home** — Hero, marquee, indexed work list, featured grid, about, footer
- **Project** — Project hero, large media slot, footer
- **Lab** — Experiments grid
- **About** — Studio statement
- **Journal** — Indexed list of writing

## Components (`Components.jsx`)

- `Cursor` — Custom red dot cursor that grows + labels itself on `[data-cursor]` elements
- `Nav` — Fixed top nav with `mix-blend-mode: difference` so it inverts over dark sections
- `Hero` — Massive Barlow Condensed display headline w/ outlined italic + red period
- `Marquee` — Infinite horizontal scroll, black band w/ red dot separators
- `WorkRow` — Indexed list row with sliding-black-fill hover
- `WorkList` — Section wrapper for `WorkRow`s
- `GridCard` — Project card with scale-up thumbnail
- `About` — Black-section studio statement with red inline highlights
- `Footer` — Big "Got a brief?" CTA + links

## Conventions

- Cursor is hidden globally (`cursor: none`) — the custom `Cursor` is the only pointer
- Use `data-cursor="label"` on any clickable to show a label inside the enlarged red dot
- Headings are Barlow Condensed Black 900, uppercase, tight letterspacing
- Body is Barlow Regular at 15–16px / 1.6
- Red appears once per screen — period, accent word, or live dot
