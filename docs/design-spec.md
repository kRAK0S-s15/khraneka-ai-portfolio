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
| `--surface` | `#E3E9E6` | `#1D1A15` | cards, terminal block |
| `--surface-2` | `#D8E0DC` | `#262119` | nested/hover surface |
| `--fg` | `#1B211E` | `#EDE6D6` | body text |
| `--muted` | `#5B6560` | `#9C9282` | secondary text, labels |
| `--accent` | `#8A520D` | `#E8A33D` | primary accent (amber/phosphor) — CTAs, radar fill, cursor |
| `--accent-2` | `#005f8f` | `#00A9BC` | links, secondary interactive |
| `--metric` | `#2e7602` | `#7FA65C` | status/verified-metric numbers only — never reused as a 4th categorical series |
| `--border` | `rgba(27,33,30,.14)` | `rgba(237,230,214,.14)` | hairlines |
| `--shadow` | `rgba(27,33,30,.10)` | `rgba(0,0,0,.45)` | card elevation |

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
- Radius: 4px (badges/tags), 5–6px (buttons, terminal block), 8px (cards).
- Elevation: one shadow only — `0 8px 24px -12px var(--shadow)` on the hero terminal block and hover states; flat elsewhere.

## Component patterns

- **Window chrome nav**: sticky top, blurred translucent bg, three status dots (decorative, not data — exempt from the categorical palette rules), monospace path + nav links.
- **Terminal block**: `surface` bg, 1px `border`, mono type, `$` prompts in `accent-2`, output indented, blinking block cursor in `accent` (disabled under `prefers-reduced-motion`).
- **Buttons**: primary = solid `accent` bg / `bg`-colored text; ghost = bordered, transparent, hover fills `surface`.
- **Cards**: `surface` bg, 1px `border`, 8px radius, no shadow at rest.
- **Stat**: mono, `tabular-nums`, number in `metric` color when it's a real/verified figure; muted italic placeholder (e.g. `[F1 pending]`) when data is not yet final — never fabricate a number to fill the slot.
- **Badge/tag**: mono, `xs`, bordered, `muted` text.
- **Radar chart**: single-hue (`accent`) identity chart — no legend needed (title names the one series), recessive grid rings/spokes in `border`, ≥4px vertex markers, caption discloses when values are illustrative/unconfirmed.

## Breakpoints

Mobile-first; stack to single column below 640px (matches Tailwind's default `sm`). Skills section grid (`320px | 1fr`) collapses to one column below 640px.

## Dark/light

Real build uses `next-themes` with `attribute="class"` — dark tokens live under
`.dark`, not `prefers-color-scheme`/`data-theme` (that pairing was only for the
standalone Artifact mockup, which has no theme-provider JS).
