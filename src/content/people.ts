import type { StaticImageData } from 'next/image'
import type { IconName } from '@/components/SocialIcon'
import imagePlaceholder from '/public/stock/UL-hero-home.png'
import imageHeadshot from '/public/stock/headshot-placeholder.jpg'
import squareAlbeGutierrez from '/public/stock/speakers/square-albe-gutierrez.png'
import squareJosephineLauer from '/public/stock/speakers/square-josephine-lauer.png'
import squareSophiaChase from '/public/stock/speakers/square-sophia-chase.png'
import squareNishi from '/public/stock/speakers/square-nishi.png'
import bigNishi from '/public/stock/speakers/big-nishi.png'
import squareNicole from '/public/stock/speakers/big-nicole-sonne.png'

export type Social = { name: IconName; href: string }

export type Person = {
  name: string
  role: string
  bigImage: StaticImageData
  squareImage: StaticImageData
  socials: Social[]
  bio: string 
}

export const founders: Person[] = [
  {
    name: 'Nicole Sonnefeldt, MA (she/her)',
    role: 'Co-Founder',
    bigImage: imagePlaceholder,
    squareImage: squareNicole,
    socials: [
      { name: 'instagram', href: 'https://www.instagram.com/freeformcoaching/' },
      { name: 'website', href: 'https://www.freeformcoaching.com' },
    ],
    bio: "Nicole Sonnefeldt (she/her) is an alternative relationship coach & consultant & the founder of Freeform Coaching: Relationship Coaching for Conscious Non-Monogamy. A former trauma & couple's therapist with a Master's in Counseling Psychology from the Chicago School of Professional Psychology, she brings her experience and training in the psychology & physiology of trauma with her to Unleashed, along with her pleasure-positive, poly & kink-affirming stance as an alternative relationship coach. She assisted in curating the experiences and workshops at Unleashed with this background and knowledge, and looks forward to utilizing these skills to help create a trauma-informed, safe container for exploration and play for all presenters & attendees.",
  },
  {
    name: 'Ashley Summers',
    role: 'Co-Founder & Photographer',
    bigImage: imagePlaceholder,
    squareImage: imageHeadshot,
    socials: [
      { name: 'instagram', href: 'https://www.instagram.com/ashleysummersphotography' },
    ],
    bio: 'Long bio here. 4–7 sentences.',
  },
]

export const speakers: Person[] = [
  {
    name: 'Mistress Sophia Chase, MSW (she/her)',
    role: 'Pro-Domme',
    bigImage: imagePlaceholder,
    squareImage: squareSophiaChase,
    socials: [
      { name: 'instagram', href: 'https://www.instagram.com/dominasophiachicago/' },
      { name: 'facebook', href: 'https://www.facebook.com/mistresssophia/' },
      { name: 'website', href: 'https://ladysophia.com/' },
    ],
    bio: "Lady Sophia is a globally recognized professional dominatrix of 17 years, sex educator and kink lecturer, and the owner of Chicago Dungeon Rentals. She works with men, women, non-binary people, and couples in BDSM sessions designed to support exploration through trust, communication, and skilled, intentional play. Grounded in her Master of Social Work from the University of Chicago, her approach is risk-aware, consent-forward, and trauma-informed. Her expertise and years of experience have led her being featured on Showtime and Netflix, kink consulting roles on film projects, and guest lectures at Northwestern and other universities. She has also advocated for sex workers' rights in Washington, DC, and is internationally recognized for the quality of her client work.",
  },
  {
    name: 'Albe Gutierrez (Ms. Albe), MAATC (she/her/ella)',
    role: 'Opening, Workshop Presenter',
    bigImage: imagePlaceholder,
    squareImage: squareAlbeGutierrez,
    socials: [
    ],
    bio: "Albe Gutierrez (she/her/ella), Ms. Albe, is a bilingual psychotherapist and art therapist at Chicago Therapy Collective with over a decade of clinical experience within hospitals, community organizations and substance use treatment centers and a decade more of teaching experience as a fine arts, movement and burlesque instructor. She maintains a focus on LGBTQ+ community needs and resourcing, particularly for other trans women of color by providing therapy, surgical readiness letter writing, and arts activism.",
  },
  {
    name: 'Meg',
    role: 'Rigger/Shibari Performer',
    bigImage: imagePlaceholder,
    squareImage: imageHeadshot,
    socials: [
    ],
    bio: 'Short bio 2–3 sentences.',
  },
  {
    name: 'Nishi',
    role: 'Therapist',
    bigImage: bigNishi,
    squareImage: squareNishi,
    socials: [
    ],
    bio: 'Short bio 2–3 sentences.',
  },
  {
    name: 'Dr. Kres Ashford, PsyD, LCPC, CST',
    role: 'Relationship & Sex Therapist',
    bigImage: imagePlaceholder,
    squareImage: imageHeadshot,
    socials: [
      { name: 'instagram', href: 'https://www.instagram.com/dreatpraykink/' },
      { name: 'website', href: 'https://www.mindbodyintimacystudio.com' },
    ],
    bio: 'Short bio 2–3 sentences.',
  },
  {
    name: 'Josephine Lauer',
    role: 'Somatic Intimacy Coach & Tantra Practitioner',
    bigImage: imagePlaceholder,
    squareImage: squareJosephineLauer,
    socials: [
      { name: 'instagram', href: 'https://www.instagram.com/templeofloha' },
      { name: 'website', href: 'www.cur8chicago.com' },
    ],
    bio: "Josephine Lauer (she/her) is an Embodiment Guide, trauma-informed Somatic Intimacy Coach, Tantric Practitioner and Food Systems Consultant. She curates bold, brave, safe and sacred spaces for humans to explore their fullest, most authentic expressions, in order to achieve a more embodied existence via the harmonization of the mental, physical and emotional body. She is the founder of CUR8Chicago, a boutique consulting firm for embodied leaders, and Temple of Loha, an esoteric arts production house.  Josephine resides in Chicago, IL, is a Mother of 3 sons and travels often. Her podcast, Universal Intimacy, explores connections with the self, others, nature, and the cosmos via the intersection of Science, Spirituality and Sexuality.",
  },
]

// Getters (single source of truth)
export const getFounders = () => founders
export const getSpeakers = () => speakers
export const getAllPeople = () => [...founders, ...speakers]

