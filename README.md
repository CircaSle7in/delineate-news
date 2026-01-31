# Delineate

**Multi-perspective news analysis that helps you understand WHY people think differently.**

[delineate.news](https://delineate.news)

## About

Delineate sorts news into what's verifiable, speculated, and disputed. We present multiple perspectives fairly, steelmanning each viewpoint rather than creating strawmen. Our goal is to promote genuine understanding across ideological divides.

### Core Principles

- **Facts, not conclusions** — We separate verifiable facts from interpretation
- **Steelman, don't strawman** — We present the strongest version of each perspective
- **Questions, not certainty** — We end with genuine questions, not manufactured conclusions
- **Full transparency** — Every analysis includes a complete audit trail of sources and claims

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** for navigation
- **react-helmet-async** for SEO

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sterlingblood/delineate.git
cd delineate

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # shadcn/ui-style components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   └── ThemeToggle.tsx
├── data/
│   └── news/        # Analysis data files
├── hooks/           # Custom React hooks
├── lib/             # Utilities
└── pages/           # Page components
    ├── Home.tsx
    ├── Analysis.tsx
    ├── NewsArticle.tsx
    ├── About.tsx
    ├── Contact.tsx
    └── NotFound.tsx
```

## Analysis Data Structure

Each analysis is stored as a TypeScript file in `src/data/news/` with the following structure:

- **Metadata** — Title, tags, dates, read time
- **Hook** — Compelling summary of the core tension
- **At a Glance** — Quick overview: what happened, what's disputed, why people disagree
- **Legal/Technical Framework** — Relevant context for understanding the issue
- **Key Findings** — Core facts established by the analysis
- **Evidence Divergence** — Where video/documents differ from official accounts
- **Expert Analysis** — What domain experts say (multiple perspectives)
- **Tension Map** — Key disagreements mapped out
- **Perspectives** — Steelmanned viewpoints with:
  - Summary
  - Representative quote
  - What this perspective emphasizes
  - What it minimizes
  - Loaded language used
- **Uncertainties** — What we still don't know
- **Questions** — Reflection questions for readers
- **Audit** — Full source list, claim verification, methodology notes

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

Or use the CLI:

```bash
npm i -g vercel
vercel
```

### Netlify

1. Push to GitHub
2. Import in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Contributing

We welcome contributions! Areas where we need help:

- **New analyses** — Research and write multi-perspective analyses
- **Fact-checking** — Verify claims and sources
- **Perspective review** — Ensure we're steelmanning fairly
- **Technical improvements** — UI/UX, accessibility, performance

## License

This project is open source. See LICENSE for details.

## Contact

- Email: hello@delineate.news
- GitHub: [@sterlingblood/delineate](https://github.com/sterlingblood/delineate)

---

*A civic service project. No ads. No engagement metrics. Just clarity.*
