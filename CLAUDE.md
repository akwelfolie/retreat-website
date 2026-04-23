# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

Formatting is handled by Prettier with `prettier-plugin-tailwindcss` — run `npx prettier --write .` to format.

## Architecture

Next.js 15 App Router site with three pages: `/` (home), `/about`, and `/details` (tickets). Each page is assembled from multiple section components in `src/components/`.

**Key directories:**
- `src/app/` — pages and the `/api/subscribe` MailerLite endpoint
- `src/components/` — section components (page-specific) and `ui/` (reusable primitives)
- `src/content/people.ts` — all speaker/founder data with `getSpeakers()`, `getFounders()`, `getAllPeople()` exports
- `src/config/links.ts` — centralized external link constants (ticket purchase URL, etc.)

**Styling:** Tailwind CSS v4 with a custom dark theme defined in `src/styles/tailwind.css`. Custom color palettes: `blue-*`, `pink-*`, `gold-*`, `void-*`. The site uses a dark background (`bg-void-900`) with gradient accents. All styling is inline Tailwind utilities — no CSS modules.

**Environment variables required:**
- `MAILERLITE_API_KEY` — for the email subscription API route
- `MAILERLITE_GROUP_ID` — MailerLite group to add subscribers to

**Path alias:** `@/*` maps to `./src/*`
