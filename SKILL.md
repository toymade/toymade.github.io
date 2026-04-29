---
name: toymade-design
description: Use this skill to generate well-branded interfaces and assets for TOYMADE — an independent portfolio studio brand. Black + white + one signal red, heavy Barlow Condensed display type, sharp corners, no emoji, custom red-dot cursor. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files (`colors_and_type.css`, the `preview/` cards, the `ui_kits/portfolio/` recreation).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick rules

- Three colors only: `#0A0A0A` black, `#FAFAFA` white, `#E50914` red. **One red moment per screen.**
- Display type: Barlow Condensed Black 900, UPPERCASE, `-0.02em` tracking, `0.85` line-height.
- Body: Barlow Regular at 15–16px / 1.6.
- Sharp corners (radius 0). Pills only on tags. No shadows on cards.
- Signature easing `cubic-bezier(0.22, 1, 0.36, 1)`, 240ms default, 480ms for big reveals.
- Custom red-dot cursor on prototypes (see `ui_kits/portfolio/Components.jsx → Cursor`).
- No emoji. Use `→ ← · — /` instead.
- First-person plural voice. Lowercase. No exclamation marks.
