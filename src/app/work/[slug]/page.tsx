import { CaseStudyHero } from '@/components/CaseStudyHero'
import { AboutCaseStudy } from '@/components/AboutCaseStudy'
import { CaseStudyStats } from '@/components/CaseStudyStats'
import { CaseStudyFeatures } from '@/components/CaseStudyFeatures'
import { CallToAction } from '@/components/CallToAction'
import { getCaseStudy, getAllCaseStudies } from '@/lib/caseStudies'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)

  return {
    title: `${caseStudy.name} - Crator`,
    description: caseStudy.shortDescription,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)

  return (
    <>
      {caseStudy?.hero && <CaseStudyHero data={caseStudy} />}
      {caseStudy?.about && <AboutCaseStudy data={caseStudy.about} />}
      {caseStudy?.statsSection && (
        <CaseStudyStats data={caseStudy.statsSection} />
      )}
      {caseStudy?.featuresSection && (
        <CaseStudyFeatures data={caseStudy.featuresSection} />
      )}
      <CallToAction />
    </>
  )
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies()

  const paths = caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))

  return paths
}

export const dynamicParams = false
