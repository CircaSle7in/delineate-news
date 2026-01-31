# Delineate — Visual Identity & Design System

*A publication for careful thinking*

---

## 1. Brand Essence

### What Delineate Is

**Delineate is a place, not a voice.**

It exists to:
- Slow readers down
- Create conditions for thinking
- Represent complexity fairly
- Separate facts, interpretation, and uncertainty clearly

It is not trying to persuade, provoke, or activate.

### What Delineate Is Not

- Not a news brand
- Not a media startup
- Not an activist platform
- Not a personal blog
- Not opinion-forward

**Test:** If any design choice feels expressive, clever, or assertive, it is likely off-brand.

---

## 2. Core Design Philosophy

### Primary Principle

**Beauty as a condition for trust.**

Design should feel: deliberate, restrained, calm, fair, durable.

Design should disappear once reading begins.

### Secondary Principles

**Procedural legitimacy**
- All viewpoints receive the same visual treatment
- No typographic hierarchy implies ideological hierarchy

**Editorial dignity**
- Typography signals seriousness and care
- Nothing should feel hurried or optimized for attention

**Silence over signal**
- White space is structural, not decorative
- Calmness is intentional

---

## 3. Wordmark

### Specification

- **Text:** DELINEATE
- **Case:** Small caps presentation
- **Typeface:** High-contrast modern editorial serif
- **Color:** Near-black (#1C1917) on warm off-white (#FAF9F6)

### Usage Rules

- Wordmark is typography-only
- No icons, symbols, or embellishments
- No outlines, shadows, gradients, or effects
- Appears as a title, not a badge
- Minimum clear space: height of the letter E

### File Location

`/public/images/delineate-wordmark.png`

---

## 4. Typography

### Display / Headlines

**Purpose:** Editorial gravity

- Serif family aligned with wordmark aesthetic
- High contrast, calm rhythm
- No condensed or ultra-wide variants

**Usage:** Article titles, section headers, page headers

**Suggested faces:** Playfair Display, Cormorant, Libre Baskerville, or similar editorial serif

### Body Text

**Purpose:** Long-form reading comfort

- Neutral, highly legible serif or serif-adjacent
- Slight warmth preferred over clinical neutrality
- Comfortable x-height

**Suggested faces:** Source Serif Pro, Lora, Merriweather, or system serif

**Rules:**
- Line length: 65-75 characters optimal
- Line height: 1.6-1.8 for body text
- No novelty fonts

### Metadata / Labels

**Purpose:** Clarity without hierarchy

Examples: `VERIFIED`, `SPECULATED`, `DISPUTED`, `SOURCES`, `CONTEXT`

**Rules:**
- Uppercase, smaller than body
- Consistent treatment across all categories
- **No color-coding that implies value judgment**

---

## 5. Color System

### Primary Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary text | Near-black / charcoal | #1C1917 |
| Background | Warm off-white / paper | #FAF9F6 |
| Secondary text | Warm gray | #78716C |
| Borders/dividers | Light warm gray | #E7E5E4 |

This is the default mode. Dark mode inverts thoughtfully.

### Dark Mode

| Role | Color | Hex |
|------|-------|-----|
| Primary text | Warm white | #FAFAF9 |
| Background | Near-black | #0C0A09 |
| Secondary text | Warm gray | #A8A29E |
| Borders/dividers | Dark warm gray | #292524 |

### Accent (Use Sparingly)

- Muted, desaturated tones only
- Acceptable: soft sage, warm gray, muted blue-gray
- **No bright colors**
- **No red/blue political signaling**

**Critical:** Color must never imply correctness, urgency, or ideology.

### What We Removed

Previous guidelines used green/amber/teal to color-code VERIFIED/SPECULATED/DISPUTED. This has been intentionally removed. Color-coding epistemic states creates implicit hierarchy — green feels "good," amber feels "warning."

Instead, we use consistent typographic treatment: labels, spacing, and weight shifts distinguish categories without editorializing.

---

## 6. Layout & Spatial System

### Grid Philosophy

- Geometry lives in structure, not decoration
- Consistent column systems
- Rigorous margin alignment
- Avoid asymmetry that feels expressive

### White Space

- White space is a feature, not empty area
- Err toward more space than feels necessary
- Space slows reading intentionally

### Page Rhythm

- Calm vertical flow
- No visual "hooks" or attention grabs
- Subtle, rare dividers
- No aggressive section breaks

---

## 7. Content Presentation

### Separation of Epistemic States

Facts, interpretation, and uncertainty must be visually distinguishable **without hierarchy**.

**Good:**
- Consistent labels (VERIFIED, SPECULATED, DISPUTED)
- Subtle spacing differences
- Typographic shifts (size, weight, style)

**Bad:**
- Color coding that implies correctness
- Visual emphasis that editorializes
- Larger treatment for "verified" vs "disputed"

### Quotes & Sources

- Treated respectfully and equally
- No pull-quote dramatization
- No oversized or stylized quotes
- Sources appear calm, legible, and equivalent

---

## 8. Motion & Interaction

### Philosophy

Motion should never attract attention. Use motion only to: orient, clarify, confirm action.

### Rules

- Subtle fades (150-200ms)
- Gentle transitions
- No bounces, slides, or expressive animation
- No parallax or kinetic effects

---

## 9. Imagery & Graphics

### Photography

- Prefer none unless strictly necessary
- If used: documentary tone, neutral framing, no dramatization
- No stock-photo energy

### Charts & Diagrams

- Clean, neutral, legible
- No color implying value
- No persuasive framing
- Prefer grayscale with single muted accent if needed

---

## 10. Voice in UI

Even interface copy should feel: careful, respectful, non-assumptive.

**Avoid:**
- Calls to action with urgency
- Emotive language
- Persuasive phrasing

**Instead of:** "Don't miss this analysis!"
**Write:** "Read the full analysis"

---

## 11. Hard Stops (What to Avoid)

- Startup branding tropes
- Icons explaining the brand
- Clever typographic tricks
- Trend-driven layouts
- Attention-optimized UI
- Opinion-forward visual hierarchy
- Breaking news aesthetics
- Social engagement patterns

**If a design choice makes Delineate feel like it has an opinion, stop.**

---

## 12. The Test

Every page or component must pass this question:

> **Does this feel like a fair surface for disagreement?**

If yes → on brand
If no → revise

---

## 13. Implementation Notes

### Tech Stack

- React + Vite + TypeScript
- Tailwind CSS
- Deployed as static site

### Font Loading

```html
<!-- Google Fonts - Editorial Serif -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Source+Serif+Pro:wght@400;600&display=swap" rel="stylesheet">
```

### Tailwind Extensions

```javascript
// tailwind.config.ts
colors: {
  paper: '#FAF9F6',
  ink: '#1C1917',
  stone: {
    150: '#E7E5E4',
    350: '#A8A29E',
    850: '#292524',
    950: '#0C0A09',
  }
}
```

### File Structure

```
public/
├── images/
│   └── delineate-wordmark.png
src/
├── styles/
│   └── typography.css
```

---

## Summary

| Element | Value |
|---------|-------|
| Primary text | #1C1917 (light) / #FAFAF9 (dark) |
| Background | #FAF9F6 (light) / #0C0A09 (dark) |
| Display font | Playfair Display (or similar editorial serif) |
| Body font | Source Serif Pro (or similar readable serif) |
| Voice | Careful, direct, non-assumptive |
| Feel | Calm, fair, durable — like a library |

---

*"Delineate is a place, not a voice."*
