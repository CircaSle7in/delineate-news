# Delineate: News Analysis Workflow

A step-by-step process for creating multi-perspective news analysis.

---

## Overview

**Goal:** Transform a news topic into a structured analysis that helps readers understand WHY people think differently — not just what they think.

**Time estimate:** 15-20 hours across stages (can be spread over multiple sessions)

**Outputs:**
- JSON data files for the topic
- Page file for rendering
- Optional: written analysis document for review

---

## The Seven Stages

```
1. Topic Selection ──────► Manual decision
         │
         ▼
2. Source Collection ────► Semi-automated (parallelizable)
         │
         ▼
3. Claim Extraction ─────► Iterative (parallelizable per article)
         │
         ▼
4. Perspective Mapping ──► Human-guided synthesis
         │
         ▼
5. Gap Analysis ─────────► Requires human judgment
         │
         ▼
6. Question Generation ──► Human curation
         │
         ▼
7. Render & Publish ─────► Automated
```

---

## Stage 1: Topic Selection

**Effort:** 15-30 minutes
**Parallelizable:** No
**Automation:** Manual

### Criteria for good topics:

✓ Clear left/right framing exists (but isn't the whole story)
✓ Contested facts or interpretations
✓ Reasonable people genuinely disagree
✓ Affects real stakeholders with different interests
✓ Enough coverage exists to analyze (20+ sources minimum)

### Avoid initially:

✗ Personality-driven controversies (harder to steelman)
✗ Breaking news (need time for coverage to develop)
✗ Topics where one side is arguing in bad faith
✗ Fringe positions without real constituencies

### Output:
- Topic name/slug (e.g., `ice-minneapolis-raid`)
- Working headline
- Date range for coverage
- Initial list of known stakeholder groups

---

## Stage 2: Source Collection

**Effort:** 2-3 hours
**Parallelizable:** Yes (multiple searches simultaneously)
**Automation:** Semi-automated

### Discovery methods:

1. **Web search** — Primary method
   - Search topic across major outlets
   - Use date filters to scope coverage

2. **News APIs** (if available)
   - NewsAPI.org
   - The Guardian API
   - Google News RSS

3. **Manual addition**
   - Paywalled articles you have access to
   - Local news sources
   - Specialist publications

### Ensuring spectrum coverage:

Use AllSides or similar for outlet classification:

| Lean | Example Outlets |
|------|-----------------|
| Left | MSNBC, The Guardian, NPR, Vox |
| Center-Left | NYT, Washington Post, CNN |
| Center | AP, Reuters, local affiliates |
| Center-Right | WSJ, The Hill |
| Right | Fox News, Daily Caller, Washington Examiner |

**Target:** At least 5 sources from each lean category (minimum 25 total, ideal 50+)

### Output:
- `sources.json` with all collected articles
- Source count by political lean
- Gaps identified (which perspectives are underrepresented?)

---

## Stage 3: Claim Extraction

**Effort:** 3-4 hours
**Parallelizable:** Yes (per article)
**Automation:** AI-assisted with human review

### For each article, extract:

1. **Factual claims** — Things that could be verified
2. **Source attribution** — Who said it?
   - `firsthand` — Reporter witnessed, court documents, video
   - `official_statement` — Named official on record
   - `anonymous` — Unnamed sources
   - `expert` — Named expert/scholar
   - `editorial` — Opinion/analysis by writer
3. **Primary source links** — Where possible
4. **Contested flags** — Does this contradict other claims?

### Prompt template:

```
For this article about [TOPIC]:

1. Extract all factual claims (not opinions or analysis)
2. For each claim, identify:
   - The specific claim
   - Source type: firsthand | official_statement | anonymous | expert | editorial
   - Who is attributed (name/title if available)
   - Direct quote if available
   - Whether this conflicts with claims from other sources

Focus on paragraph-level claims, not sentence-level (avoid over-granularity).
```

### Granularity guidance:
- Too fine (sentence-level) = overwhelming, loses context
- Too coarse (article-level) = misses nuance
- Right level = paragraph-level, one claim per discrete assertion

### Output:
- `claims.json` with all extracted claims
- Claim count by source type
- List of contested/contradictory claims

---

## Stage 4: Perspective Mapping

**Effort:** 2-3 hours
**Parallelizable:** Partially
**Automation:** Human-guided

### Identify perspectives by framing patterns, not just politics

Don't just use Left/Center/Right. Look for:
- Federal/Law Enforcement perspective
- Civil Liberties/Progressive perspective
- Local/Community perspective
- Expert/Academic perspective
- Affected stakeholder perspectives

### For each perspective, identify:

```
- Core framing (how do they see this story?)
- Key emphases (what facts do they highlight?)
- Minimized aspects (what do they downplay?)
- Emotional tone
- Loaded language used
- Implied heroes and villains
- Proposed solutions or calls to action
- What's conspicuously absent
- Representative quotes (with attribution)
- Representative outlets
```

### Prompt template:

```
Based on these articles from [PERSPECTIVE] sources:

1. What's the core framing? (In one sentence, how do they see this story?)
2. What facts are emphasized vs. minimized?
3. What emotional tone and loaded language appear?
4. Who are the implied heroes and villains?
5. What solutions are proposed or implied?
6. What's conspicuously absent from this coverage?

Provide 2-3 representative quotes with outlet attribution.
```

### Balance check:

**Critical:** After drafting, ask: "Would someone who holds this perspective say 'yes, that's fair'?"

If a perspective feels thin or like a strawman, it needs more work:
- Add expert quotes supporting that view
- Include legal/policy frameworks they cite
- Find the strongest version of their argument

### Output:
- `perspectives.json` with 3-5 distinct perspectives
- Representative quotes for each
- Expert analysis (supporting and critical) where relevant

---

## Stage 5: Gap Analysis

**Effort:** 1-2 hours
**Parallelizable:** No (requires synthesis)
**Automation:** Human judgment required

### Questions to ask:

1. **Missing stakeholders**
   - Who is affected but not quoted?
   - Whose voice is absent from coverage?

2. **Missing timeframes**
   - What might happen 6 months from now?
   - What happened before this that provides context?

3. **Missing parallels**
   - What historical events are relevant but unmentioned?
   - What similar situations in other contexts might inform this?

4. **Manufactured certainty**
   - Where are sources expressing certainty about genuinely uncertain things?
   - What's being treated as settled that isn't?

5. **Second-order effects**
   - What downstream consequences aren't being discussed?
   - Who else might be affected?

### Prompt template:

```
Given this analysis of [TOPIC], identify coverage gaps:

1. What stakeholders are affected but not quoted or discussed?
2. What might happen 6 months or 2 years from now that isn't being considered?
3. What historical parallels are relevant but unmentioned?
4. Where are sources expressing certainty about genuinely uncertain things?
5. What would someone with no political priors want to know that isn't addressed?
```

### Output:
- `gaps.json` with identified coverage gaps
- Prioritized list (most significant first)
- Notes on why each gap matters

---

## Stage 6: Question Generation

**Effort:** 30 minutes
**Parallelizable:** No
**Automation:** Human curation

### Good questions vs. bad questions:

**Bad (leading, assumes conclusion):**
- "Isn't it concerning that...?"
- "Why won't [group] just...?"

**Bad (too vague):**
- "What do you think?"
- "Is this good or bad?"

**Good (promotes reflection):**
- "If [X claim] is true, what would that imply about [Y]?"
- "What would need to be true for [perspective A] and [perspective B] to both be partially right?"
- "What information would change your view on this?"
- "What question would you want answered before forming an opinion?"

### Target: 4-5 questions

Not more. Quality over quantity. Each question should:
- Emerge from a genuine tension in the analysis
- Not have an obvious "right" answer
- Invite the reader to think, not just react

### Output:
- `questions.json` with 4-5 open-ended questions
- Each linked to the tension it emerges from

---

## Stage 7: Render & Publish

**Effort:** 1-2 hours (mostly automated)
**Parallelizable:** N/A
**Automation:** Automated rendering, manual review

### File structure:

```
public/
└── topics/
    └── [topic-slug]/
        ├── metadata.json
        ├── claims.json
        ├── sources.json
        ├── perspectives.json
        ├── gaps.json
        └── questions.json

src/
└── data/
    └── news/
        └── [topic-slug].ts    # Imports and exports data
```

### Reading journey design:

The page should support three reading modes:

1. **7 seconds** — Title + At a Glance (3 bullets max)
2. **60 seconds** — Key findings + perspective summaries
3. **5+ minutes** — Full analysis, expert quotes, methodology

### Review checklist before publish:

- [ ] Would each perspective's proponents say "that's fair"?
- [ ] Are verification statuses accurate?
- [ ] Do questions promote reflection, not reaction?
- [ ] Is the 7-second version actually scannable?
- [ ] Are sources properly attributed?
- [ ] Is loaded language flagged, not adopted?

### Output:
- Live page at `/analysis/[topic-slug]`
- All JSON data files in place
- Optional: changelog for updates

---

## What to Automate vs. Keep Manual

### Automate:
- Source collection (search, API calls)
- Initial claim extraction (AI-assisted)
- Source bias classification (AllSides lookup)
- JSON file generation
- Page rendering

### Keep manual:
- Topic selection
- Gap analysis (requires synthesis)
- Question curation
- Final editorial review
- Perspective balance check
- Design decisions

---

## Common Pitfalls

### 1. Thin perspectives
**Symptom:** One perspective reads like a strawman
**Fix:** Add expert quotes, legal frameworks, find the strongest version

### 2. Over-granular claims
**Symptom:** Hundreds of sentence-level claims, overwhelming
**Fix:** Aggregate to paragraph-level, focus on discrete assertions

### 3. Leading questions
**Symptom:** Questions that reveal the "right" answer
**Fix:** Rewrite to be genuinely open-ended

### 4. Missing center
**Symptom:** Only partisan sources, no AP/Reuters/local
**Fix:** Actively seek neutral-framed coverage

### 5. Adopting loaded language
**Symptom:** Analysis uses terms like "raid" vs "operation" without noting the framing
**Fix:** Flag loaded terms, use neutral alternatives or quote directly

### 6. Your own lean showing
**Symptom:** One perspective gets more charitable treatment
**Fix:** Have someone with opposing views review, or explicitly check balance

---

## Iteration Expectations

This is not a one-shot process. Expect:

- **Version 1:** Initial draft, likely unbalanced
- **Version 2:** After balance check, add substance to thin perspectives
- **Version 3:** After gap analysis, add missing context
- **Version 3.x:** Design and clarity refinements

The ICE Minneapolis topic went through versions 2.0 → 3.2 → 3.3.

---

## Templates

See companion files:
- `schemas/topic-schema.json` — JSON schema for all data files
- `prompts/` — Prompt templates for each stage
