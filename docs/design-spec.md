# Design Spec — "Terminal Notebook"

Source of truth for tokens and patterns. Extracted from the approved mockup at
`docs/mockups/direction-terminal-v1.html`. Every component in `src/` should pull
from these tokens via Tailwind utilities — never a raw hex or arbitrary bracket value.

## Concept

A terminal session crossed with a lab notebook: monospace for chrome, labels,
code, and data; serif for prose. Section eyebrows are shell-comment style
(`# about`) because that's a real, meaningful label style in this domain, not
decoration. All chart/accent colors were run through the dataviz skill's
`validate_palette.js` (contrast + OKLab chroma-floor checks) rather than picked
by eye.

## Color tokens

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#EDF1EF` | `#14120F` | page background |
| `--surface` | `#F7F9F8` | `#1F1C17` | cards, panels, terminal block |
| `--surface-2` | `#E3E9E6` | `#2A251D` | hover fill, callouts, inline `code` |
| `--fg` | `#1B211E` | `#EDE6D6` | body text |
| `--muted` | `#4F5954` | `#A89E8D` | secondary text, labels |
| `--accent` | `#8A520D` | `#E8A33D` | primary accent (amber/phosphor) — CTAs, radar fill, cursor, eyebrow `#` |
| `--accent-hover` | `#6F4109` | `#F0B55E` | primary button hover |
| `--accent-2` | `#005f8f` | `#00A9BC` | links, focus ring, progress done, active toggle |
| `--metric` | `#2A6B02` | `#7FA65C` | status/verified-metric numbers only — never reused as a 4th categorical series |
| `--chart` | `#005f8f` | `#00A6B9` | single-series bar fill (dark is one step under accent-2 to pass the dataviz validator's dark L band 0.48–0.67) |
| `--border` | `rgba(27,33,30,.16)` | `rgba(237,230,214,.16)` | hairlines |
| `--border-strong` | `rgba(27,33,30,.34)` | `rgba(237,230,214,.34)` | hover border, ghost button border |
| `--shadow` / `--shadow-lg` | `rgba(27,33,30,.10/.22)` | `rgba(0,0,0,.45/.65)` | resting / lifted elevation |
| `--wip-bg` | accent 11% | accent 14% | "In progress" pill |
| `--done-bg` | metric 11% | metric 16% | "Complete" / "decided" pill |
| `--track` | `#D6DEDA` | `#383128` | empty progress segments |
| `--grid` | fg 10% | fg 10% | chart gridlines |

All three accent colors individually clear 4.5:1 text contrast against both
`--bg` and `--surface` in their own theme (computed, not eyeballed — see
conversation for the exact contrast ratios). Light and dark values are tuned
independently per the dataviz skill's guidance, not a naive invert.

## Typography

- **Body**: `ui-serif, "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif` — 17px base, 1.6 line-height, max 65ch measure.
- **Mono** (headlines, labels, nav, data, code, stats): `ui-monospace, "SF Mono", "JetBrains Mono", "Fira Code", Menlo, Consolas, "Liberation Mono", monospace`.
- System stacks only — deliberate choice for authenticity (a real terminal renders in the visitor's own monospace font) and to avoid CSP/webfont-loading issues.
- Type scale: `xs` 0.75rem · `sm` 0.875rem · `base` 1.0625rem · `lg` 1.25rem · `xl` 1.5rem · `2xl` 2rem · `3xl` 2.75rem.
- Uppercase labels get `letter-spacing: 0.03–0.08em`.

## Spacing / radius / shadow scale

- Spacing step (px): 4, 8, 12, 16, 24, 32, 48, 64, 96 — no one-off values outside this scale.
- Radius tokens: `rounded-chip` 4px (badges/tags), `rounded-btn` 6px (buttons, toggles), `rounded-card` 10px (cards, panels, terminal block).
- Elevation: `shadow-rest` (`0 1px 2px var(--shadow)`) on cards at rest; `shadow-lift` (`0 14px 30px -18px var(--shadow-lg)`) on card hover/focus; `shadow-terminal` on the hero block.
- Rhythm: container `max-w-page` 880px (16px gutter on phones, 24px from `sm`); sections 56px vertical (44px on phones); hero 64/56; card gap 24px.
- Type tokens added: `text-label` 13px (eyebrows, stat labels, chips, pills), `text-md` 15px (terminal), `text-card` 21px (card titles), `text-name` 26px (hero name), `text-display` 42px (project h1; 32px on phones).

## Component patterns

- **Window chrome nav**: sticky top, blurred translucent bg, three status dots (decorative, not data — exempt from the categorical palette rules), monospace path + nav links.
- **Terminal block**: `surface` bg, 1px `border`, mono type, `$` prompts in `accent-2`, output indented, blinking block cursor in `accent` (disabled under `prefers-reduced-motion`).
- **Buttons**: min-height 44px, 6px radius. Primary = solid `accent` bg / `bg` text, hover `accent-hover`; ghost = `border-strong` border, hover fills `surface-2` with an `fg` border. Arrows are the shared `Icon` SVGs, never Unicode glyphs.
- **Toggles**: ≥44×44, hover fills `surface-2`; the active language is `accent-2` and underlined (not colour alone).
- **Cards**: `surface` bg, 1px `border`, 10px radius, padding 24/26, `shadow-rest`. The title link's `::after` makes the whole card clickable; hover/keyboard focus lift 2px, `border-strong`, `shadow-lift`, title + "view project" turn `accent-2`; focus adds a 2px `accent-2` ring offset 3px.
- **Status pills**: In progress (half-circle icon, `wip-bg`), Complete (check icon, `done-bg`), decided (`done-bg`), planned (dashed outline). Always a word, never colour alone.
- **Progress**: thin segmented bar (one 6px segment per step, 3px gap, done = `accent-2`, to do = `track`) on cards; numbered 8-step tracker on the project page.
- **Bar chart** (`charts/BarChart.tsx`): HTML/CSS, 14px bars with a 4px data-end radius, always from 0, values direct-labelled in text ink, hatching for a secondary state, `role="img"` + full `aria-label`.
- **Motion**: one short `rise` entrance on the hero/page header and 150ms hover transitions, all disabled under `prefers-reduced-motion`.
- **Stat**: mono, `tabular-nums`, number in `metric` color when it's a real/verified figure; muted italic placeholder (e.g. `[F1 pending]`) when data is not yet final — never fabricate a number to fill the slot.
- **Badge/tag**: mono, `xs`, bordered, `muted` text.
- **Radar chart**: single-hue (`accent`) identity chart — no legend needed (title names the one series), recessive grid rings/spokes in `border`, ≥4px vertex markers, caption discloses when values are illustrative/unconfirmed.

## Breakpoints

Mobile-first; stack to single column below 640px (matches Tailwind's default `sm`). Skills section grid (`320px | 1fr`) collapses to one column below 640px.

## Dark/light

Real build uses `next-themes` with `attribute="class"` — dark tokens live under
`.dark`, not `prefers-color-scheme`/`data-theme` (that pairing was only for the
standalone Artifact mockup, which has no theme-provider JS).
