import type { StaticImageData } from 'next/image'
import type { IconName } from '@/components/SocialIcon'
import squareAlbeGutierrez from '/public/stock/speakers/square-albe-gutierrez.png'
import bigAlbe from '/public/stock/speakers/big-albe.png'
import squareJosephineLauer from '/public/stock/speakers/square-josephine.jpg'
import bigJosephine from '/public/stock/speakers/big-josephine.jpg'
import squareSophiaChase from '/public/stock/speakers/square-lady-sophia.jpeg'
import bigSophia from '/public/stock/speakers/big-lady-sophia.jpeg'
import squareNishi from '/public/stock/speakers/square-nishi.png'
import bigNishi from '/public/stock/speakers/big-nishi.png'
import squareNicole from '/public/stock/speakers/square-nicole.jpg'
import bigNicole from '/public/stock/speakers/big-nicole.png'
import squareAsh from '/public/stock/speakers/square-ash.jpg'
import bigAsh from '/public/stock/speakers/big-ash.jpeg'

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
    bigImage: bigNicole,
    squareImage: squareNicole,
    socials: [
      { name: 'instagram', href: 'https://www.instagram.com/freeformcoaching/' },
      { name: 'website', href: 'https://www.freeformcoaching.com' },
    ],
    bio: "Nicole Sonnefeldt (she/her) is an alternative relationship coach & consultant & the founder of Freeform Coaching: Relationship Coaching for Conscious Non-Monogamy. A former trauma & couple's therapist with a Master's in Counseling Psychology from the Chicago School of Professional Psychology, she brings her experience and training in the psychology & physiology of trauma with her to Unleashed, along with her pleasure-positive, poly & kink-affirming stance as an alternative relationship coach. She assisted in curating the experiences and workshops at Unleashed with this background and knowledge, and looks forward to utilizing these skills to help create a trauma-informed, safe container for exploration and play for all presenters & attendees.",
  },
  {
    name: 'Ashley Summers',
    role: 'Co-Founder',
    bigImage: bigAsh,
    squareImage: squareAsh,
    socials: [
      { name: 'instagram', href: 'https://www.instagram.com/ashleysummersphotography' },
    ],
    bio: 'Ash Summers is a Chicago-based creative with a background in special events and certification as a recreation therapist. For the past 11 years she has run her photography business with Chicago as her home base. She believes in freedom of expression through photography, videography, and living out loud. She saw a need for others to have a safe space in a community setting to explore topics that she is passionate about including unapologetically going for what you want in all areas of life. Her work and ethos centers on connection, authenticity, and real human moments.',
  },
]

export const speakers: Person[] = [
  {
    name: 'Mistress Sophia Chase, MSW (she/her)',
    role: 'Pro-Domme',
    bigImage: bigSophia,
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
    bigImage: bigAlbe,
    squareImage: squareAlbeGutierrez,
    socials: [
    ],
    bio: "Albe Gutierrez (she/her/ella), Ms. Albe, is a bilingual psychotherapist and art therapist at Chicago Therapy Collective with over a decade of clinical experience within hospitals, community organizations and substance use treatment centers and a decade more of teaching experience as a fine arts, movement and burlesque instructor. She maintains a focus on LGBTQ+ community needs and resourcing, particularly for other trans women of color by providing therapy, surgical readiness letter writing, and arts activism.",
  },
  // {
  //   name: 'Meg',
  //   role: 'Rigger/Shibari Performer',
  //   bigImage: imagePlaceholder,
  //   squareImage: imageHeadshot,
  //   socials: [
  //   ],
  //   bio: 'Short bio 2–3 sentences.',
  // },
  {
    name: 'Shanta “Nishi” Kanukollu, Ph. D',
    role: 'Psychotherapist',
    bigImage: bigNishi,
    squareImage: squareNishi,
    socials: [
      {name: 'instagram', href: 'https://www.instagram.com/snk_therapy'},
      {name: 'website', href: 'https://www.snktherapy.com/instagram'},
    ],
    bio: 'Dr. K is a trauma-informed psychotherapist who works with individuals from diverse cultural backgrounds, with a focus on communities of color. She values therapy as a collaborative, relational process and strives to create a compassionate space where clients can explore vulnerability while recognizing their strengths. As a first-generation Indian-American woman, Dr. K brings a culturally responsive lens to her work and has a particular interest in supporting South Asian individuals navigating depression, anxiety, trauma, marginalization, and intergenerational stress.',
  },
  // {
  //   name: 'Dr. Kres Ashford, PsyD, LCPC, CST',
  //   role: 'Relationship & Sex Therapist',
  //   bigImage: imagePlaceholder,
  //   squareImage: imageHeadshot,
  //   socials: [
  //     { name: 'instagram', href: 'https://www.instagram.com/dreatpraykink/' },
  //     { name: 'website', href: 'https://www.mindbodyintimacystudio.com' },
  //   ],
  //   bio: 'Short bio 2–3 sentences.',
  // },
  {
    name: 'Josephine Lauer',
    role: 'Somatic Intimacy Coach & Tantra Practitioner',
    bigImage: bigJosephine,
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

