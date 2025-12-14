import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface CaseStudyHero {
  tagline: string
  headline: string
  keyPoints: {
    label: string
    text: string
    icon: string
  }[]
}

export interface CaseStudyAbout {
  tagline: string
  text: string
}

export interface CaseStudyStatsSection {
  tagline: string
  headline: string
  text: string
  action: {
    href: string
    label: string
  }
  stats: {
    label: string
    value: string
  }[]
}

export interface CaseStudyFeaturesSection {
  tagline: string
  headline: string
  text: string
  features: {
    tagline: string
    headline: string
    text: string
    image: {
      src: string
      alt: string
    }
  }[]
}

export interface CaseStudy {
  slug: string
  name: string
  shortDescription: string
  category: string
  image: string
  date: string
  featured?: boolean
  stack: string[]
  hero: CaseStudyHero
  about: CaseStudyAbout
  statsSection: CaseStudyStatsSection
  featuresSection: CaseStudyFeaturesSection
}

export function getCaseStudy(slug: string): CaseStudy {
  const markdownWithMeta = fs.readFileSync(
    path.join('src/case-studies', slug + '.md'),
    'utf-8',
  )

  const { data } = matter(markdownWithMeta)

  return data as CaseStudy
}

export function getAllCaseStudies(): CaseStudy[] {
  const files = fs.readdirSync(path.join('src/case-studies'))

  const caseStudyData = files.map((filename) => {
    const fileContents = fs.readFileSync(
      path.join('src/case-studies', filename),
      'utf8',
    )

    const { data } = matter(fileContents)
    const slug = filename.replace('.md', '')

    return { ...data, slug } as CaseStudy
  })

  return caseStudyData
}

export function getCaseStudyCategories(): string[] {
  const caseStudies = getAllCaseStudies()
  const uniqueCategories = Array.from(
    new Set(caseStudies.map((caseStudy) => caseStudy.category)),
  )

  return uniqueCategories
}
