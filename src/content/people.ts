import type { StaticImageData } from 'next/image'
import type { IconName } from '@/components/SocialIcon'
import imagePlaceholder from '/public/stock/UL-hero-home.png'
import imageHeadshot from '/public/stock/headshot-placeholder.jpg'

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
    name: 'Nicole Sonnefeldt',
    role: 'Co-Founder & Space Holder',
    bigImage: imagePlaceholder,
    squareImage: imageHeadshot,
    socials: [
      { name: 'instagram', href: '#0' },
      { name: 'facebook', href: '#0' },
      { name: 'website', href: '#0' },
    ],
    bio: 'Long bio here. 4–7 sentences.',
  },
  {
    name: 'Ashley Summers',
    role: 'Co-Founder & Photographer',
    bigImage: imagePlaceholder,
    squareImage: imageHeadshot,
    socials: [
      { name: 'instagram', href: '#0' },
      { name: 'facebook', href: '#0' },
      { name: 'website', href: '#0' },
    ],
    bio: 'Long bio here. 4–7 sentences.',
  },
]

export const speakers: Person[] = [
  {
    name: 'Lady Sophia',
    role: 'Workshop Presenter',
    bigImage: imagePlaceholder,
    squareImage: imageHeadshot,
    socials: [
      { name: 'instagram', href: '#0' },
      { name: 'facebook', href: '#0' },
    ],
    bio: 'Short bio 2–3 sentences.',
  },
  {
    name: 'Albe Gutierrez',
    role: 'Opening, Workshop Presenter',
    bigImage: imagePlaceholder,
    squareImage: imageHeadshot,
    socials: [
      { name: 'instagram', href: '#0' },
      { name: 'facebook', href: '#0' },
    ],
    bio: 'Short bio 2–3 sentences.',
  },
  {
    name: 'Meg',
    role: 'Rigger/Shibari Performer',
    bigImage: imagePlaceholder,
    squareImage: imageHeadshot,
    socials: [
      { name: 'instagram', href: '#0' },
      { name: 'facebook', href: '#0' },
    ],
    bio: 'Short bio 2–3 sentences.',
  },
  {
    name: 'Nishi',
    role: 'Workshop Presenter',
    bigImage: imagePlaceholder,
    squareImage: imageHeadshot,
    socials: [
      { name: 'instagram', href: '#0' },
      { name: 'facebook', href: '#0' },
    ],
    bio: 'Short bio 2–3 sentences.',
  },
]

// Getters (single source of truth)
export const getFounders = () => founders
export const getSpeakers = () => speakers
export const getAllPeople = () => [...founders, ...speakers]

