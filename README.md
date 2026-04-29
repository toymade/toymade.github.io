# TOYMADE — Design System

> An independent design + code studio. Portfolio website. Black, white, and one red.

This design system codifies the visual language for TOYMADE — a small, opinionated
portfolio brand. The palette is deliberately reduced; the type does the heavy lifting.

## Sources

- **Logos**: `assets/toymade_logo_black.png`, `_white.png`, `_bg.png` — the lowercase `tm` mark.
- **Fonts**: Barlow + Barlow Condensed + Barlow SemiCondensed (full weight set, OTF, in `fonts/`).
- **Repo**: `github.com/toymade/toymade.github.io` was attached but is **empty / inaccessible**
  via the GitHub App — the tree endpoint returned 409 (no commits on `main`). All visual
  decisions below are derived from the user's brief (*"only black and white and red accent,
  clean, minimal, full interactive animation"*) plus the supplied logo + Barlow type kit.

⚠️ **If the live site has shipped designs you want this system to mirror, please re-share
the codebase or screenshots so this can be tightened against real source.**

---

## Index

| File | What it is |
| --- | --- |
| `colors_and_type.css` | Tokens — palette, semantic vars, type scale, spacing, motion, radii |
| `assets/` | Logo PNGs (black on light, white on dark, bg) |
| `fonts/` | Barlow OTFs (regular/condensed/semi-condensed), referenced by `colors_and_type.css` |
| `preview/*.html` | Design System tab cards (colors, type, spacing, components, brand) |
| `ui_kits/portfolio/` | Interactive recreation of the studio website (Home, Project, Lab, About, Journal) |
| `SKILL.md` | Cross-compatible skill manifest for Claude Code |

---

## CONTENT FUNDAMENTALS

**Voice.** First-person plural, lowercase confidence. *We make. We believe. We ship.* No
exclamation marks. No marketing-speak. The tone is a quiet practitioner who has done this
before and isn't trying to convince you of anything.

**Casing.** Headlines are `UPPERCASE`. Body and UI labels are sentence case. Eyebrows,
nav, tags, and meta lines are `UPPERCASE` with `0.16–0.20em` tracking — they read like
print captions, not buttons.

**You vs we.** *We* for the studio. *You* almost never appears in body copy — the studio
talks about itself and its work, not at the reader. Reserve *you* for direct CTAs ("get
in touch", "let's talk").

**Punctuation as ornament.** A red period at the end of a hero word is a signature move
("for the **web.**"). The em dash and the slash are used liberally as section separators
(`Selected work · 2024`, `Lisbon — Berlin`). The `→` arrow replaces the word "more".

**No emoji.** Ever. Use `→ ← ↗` and the red dot character motif for status.

**Specific examples.**
- Hero: *"We make soft machines for the web."*
- Eyebrow: *"— Independent design + code studio · Est. 2019"*
- Status: *"Available · 2025"* with a pulsing red dot
- CTA: *"Got a brief?  Let's talk."* (red question mark)
- Project meta: *"03 / 24 — WebGL · Branding · 2025"*

---

## VISUAL FOUNDATIONS

### Palette
Three values, no compromises. **Black `#0A0A0A`** (slightly off-pure for less harshness),
**White `#FAFAFA`** (slightly warm). **Red `#E50914`** is the *only* accent and is used
sparingly — one occurrence per screen is ideal. Red marks: a period, the live-dot, a
hovered link, a section accent word, an outlined-button hover state.

A neutral ramp (`--tm-ink-100` → `700`) exists for borders and muted text only — never
introduce a fourth hue.

### Type
**Barlow Condensed Black** for display. UPPERCASE. Tracking `-0.02em`. Line-height `0.85–0.9`.
At hero size it goes up to `clamp(80px, 16vw, 280px)`. **Barlow** for body, 15–16px,
line-height 1.6, weight 400. **No serif. No mono in chrome** — mono is only for code samples.

Italic + outlined (transparent fill, 2px stroke) is a recurring display treatment used to
create rhythm inside long uppercase headlines (`SOFT *machines*`).

### Spacing & layout
4px base. Sections use `--sp-9` (96px) or `--sp-10` (144px) of vertical air. Page padding
is `40px` desktop. Content max-width `1440px`. Grid is implicit — most layouts are CSS
flex/grid with `gap`, never margin-on-children.

### Backgrounds
Predominantly **flat solid color** — `--bg` (white) or `--bg-inverse` (black). The only
exception: `gradient-red` (red → black, 135°) used as a project-thumbnail placeholder
when no real imagery is available. **No textures, no noise, no patterns, no full-bleed
photography** in the chrome — imagery lives inside cards.

### Animation
Signature easing: **`cubic-bezier(0.22, 1, 0.36, 1)`** (expo-out). Default duration `240ms`,
slow `480ms` for thumbnail scales and section reveals, `900ms` for the hero entrance. The
marquee is the only `linear` motion. Page transitions cross-fade (no slides).

### Hover states
- **Buttons**: black → red OR ghost → fill black, `−2px` Y translate, no shadow.
- **Project rows**: black background slides up from below (480ms expo-out), text inverts
  to white, arrow shifts `+8px` and turns red.
- **Links**: a 1px underline collapses from full-width to 0 (left → right), text colour
  shifts to red. Reverse on un-hover.
- **Thumbnails**: inner element scales 1 → 1.05 over 600ms.

### Press states
`scale(0.97)` + darker red (`#C70710`). No bouncy springs.

### Borders
Always `1px` and always `--tm-black` or `--line` (`#E5E5E5`). Heavy frames use `2px` or
`4px` red — reserved for emphasis.

### Shadows
**Almost never used.** The system has `shadow-sm/md/lg` for floating menus or modals only.
Cards do not cast shadows. Depth comes from typography weight and contrast, not blur.

### Capsules vs gradients vs protection
There are no protection gradients. Text on imagery uses a **flat black bottom block** or
sits inside a black capsule — never a gradient overlay.

### Transparency & blur
Used only for the navigation bar (`mix-blend-mode: difference` for invert-on-scroll, no
backdrop-filter). Modals use a flat `rgba(10,10,10,0.65)` scrim, no blur.

### Cursor
A custom 12px red dot replaces the system cursor on the portfolio. On `[data-cursor]`
elements it grows to 64px and reveals a small uppercase label ("View →", "Open", "Read").
This is the brand's main interactive flourish.

### Corners & cards
- Default radius: **0**. Sharp corners are core.
- `--r-2` (2px) used only on inputs and small buttons if needed.
- `--r-pill` (999px) used only on tags/badges/status indicators.
- Cards have **no rounded corners, no shadows, no borders by default** — they're defined
  by their thumbnail block + caption row beneath.

### Imagery vibe
B&W photography, high-contrast, often cropped wide. When colour appears, it's saturated
red/black product shots. No warm/golden-hour pastels. No 3D-render look unless the project
itself is 3D.

### Layout rules
- Nav is fixed; uses `mix-blend-mode: difference`.
- Footer is full-bleed black.
- Sections are full-bleed; only inner content respects the 1440px container.
- One red-accent moment per section; never two.

---

## ICONOGRAPHY

The brand is **almost icon-free**. Iconography is intentionally replaced by:
1. **Typographic glyphs**: `→ ← ↗ ↘ ·` and the en/em dash. The right arrow is the studio's
   most-used icon, in headlines, in CTAs, in cursors.
2. **Geometric primitives**: a 6–14px red filled circle is the only "indicator" icon — it
   marks live status, separates marquee items, and serves as a list bullet.
3. **The `tm` lockup** itself, used as a favicon and small-format mark.

There is **no icon font**, no SVG icon set in this system, no Lucide/Heroicons. If a
design absolutely needs a UI icon (eg. menu/close in a modal), substitute thin-stroke
**Lucide** at `1.5px stroke / 18px` and FLAG it as a substitution.

**Emoji is not used.** Unicode punctuation (`→ ← · — / ° §`) is used instead.

---

## ⚠️ Substitutions / Caveats

- **Codebase unavailable.** The provided `toymade/toymade.github.io` repo is empty or
  inaccessible. This system was authored from the brief + supplied assets only. Please
  share the actual site source or screenshots if you want this tightened.
- **No real imagery** — project thumbnails are red→black gradient placeholders. Drop in
  real artwork when available.
- **Mono font**: `JetBrains Mono` is referenced but no OTF is shipped — falls back to
  system mono. Add the file to `fonts/` if you'll use it.
