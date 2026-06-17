import type { RetreatMeta } from './types'

// Lightweight meta registry — safe to import in client components (no JSX/images).
// For full retreat content, import directly from the individual retreat file.
export const pastRetreats: RetreatMeta[] = [
  {
    slug: '06may26',
    name: 'Mini-UNLEASHED: Awaken Your Senses',
    date: 'May 6, 2026',
    dateShort: 'May 6, 2026',
    venue: 'Studio 205',
    city: 'Chicago, IL',
    status: 'past',
  },
  {
    slug: '21feb26',
    name: 'UNLEASHED February 2026',
    date: 'February 21, 2026',
    dateShort: 'Feb 21, 2026',
    venue: 'Le Loft',
    city: 'Chicago, IL',
    status: 'past',
  },
]
