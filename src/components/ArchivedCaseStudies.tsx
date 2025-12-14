'use client'

import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { useState, useEffect } from 'react'
import {
  IconCalendar,
  IconBrandHtml5,
  IconBrandTailwind,
} from '@tabler/icons-react'
import { SecondaryButton } from '@/components/buttons/SecondaryButton'
import type { CaseStudy as CaseStudyType } from '@/lib/caseStudies'
import type { IconProps } from '@tabler/icons-react'

export const ArchivedCaseStudies = ({
  caseStudies,
  categories,
}: {
  caseStudies: CaseStudyType[]
  categories: string[]
}) => {
  const [archivedCaseStudies, setArchivedCaseStudies] = useState(
    caseStudies.filter((caseStudy) => !caseStudy.featured),
  )
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    setArchivedCaseStudies(
      selectedCategory === 'all'
        ? caseStudies
        : caseStudies.filter(
            (caseStudy) => caseStudy.category === selectedCategory,
          ),
    )
  }, [selectedCategory, caseStudies])

  function CaseStudy({ caseStudy }: { caseStudy: CaseStudyType }) {
    const caseStudyPath = `/work/${caseStudy.slug}`
    const techIcons: Record<string, React.ComponentType<IconProps>> = {
      html: IconBrandHtml5,
      tailwind: IconBrandTailwind,
    }

    return (
      <div className="bg-dark-700 mx-auto max-w-lg rounded-3xl shadow-xl">
        <Link href={caseStudyPath}>
          <div className="relative h-64 w-full rounded-t-3xl bg-cover bg-center">
            <Image
              src={caseStudy.image}
              alt={caseStudy.name}
              fill
              className="h-full w-full rounded-t-3xl object-cover object-center"
              sizes="(min-width: 1280px) 28.5rem, (min-width: 1024px) 37.5vw, (min-width: 640px) 32rem, calc(100vw - 2rem)"
            />
            <p className="bg-linear-to-r from-dark-700 to-dark-800 ml-6 mt-4 inline-flex items-center justify-center rounded-r-full rounded-tl-full px-6 py-2 text-xs font-medium tracking-wide text-white lg:ml-4 xl:ml-6">
              {caseStudy.category}
            </p>
          </div>
        </Link>

        <div className="w-full p-6 lg:p-4 xl:p-6">
          <div className="flex w-full flex-wrap">
            <div className="flex w-1/2 items-center justify-start">
              <IconCalendar className="text-dark-400 h-5 w-5" stroke={1.5} />

              <div className="text-dark-400 ml-2 text-base font-medium leading-6">
                {caseStudy.date}
              </div>
            </div>
            <div className="flex w-1/2 justify-end space-x-1">
              {caseStudy.stack.map((tech, j) => {
                const Icon = techIcons[tech]
                return (
                  <Icon
                    className="text-dark-400 h-6 w-6"
                    key={`caseStudy-${caseStudy.name}-tech-stack-${j}`}
                    stroke={1.5}
                  />
                )
              })}
            </div>
          </div>
          <Link href={caseStudyPath}>
            <h3 className="mt-6 text-xl font-semibold leading-6 text-white md:text-2xl">
              {caseStudy.name}
            </h3>
          </Link>

          <p className="text-dark-300 mt-1 text-base leading-relaxed">
            {caseStudy.shortDescription}
          </p>
          <div className="mt-8 flex">
            <SecondaryButton size="sm" href={caseStudyPath}>
              Case study
            </SecondaryButton>
          </div>
        </div>
      </div>
    )
  }

  function Filters() {
    return (
      <div className="order-1 md:order-2 md:col-span-3">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">Filter Projects</h3>

          {/* Filters container */}
          <div className="mt-3 flex flex-wrap justify-center space-x-3 space-y-3 md:mt-6 md:flex-col md:justify-start md:space-x-0">
            {/* Filter */}
            <div>
              <button
                className={clsx(
                  'inline-flex items-center justify-center rounded-r-full rounded-tl-full px-6 py-2 text-sm font-medium tracking-wide text-white md:text-base',
                  selectedCategory == 'all'
                    ? 'bg-dark-700'
                    : 'bg-dark-600 hover:bg-dark-700 cursor-pointer duration-200 ease-in-out',
                )}
                onClick={() => setSelectedCategory('all')}
              >
                All
              </button>
            </div>

            {/* Filter */}
            {categories.map((category, index) => {
              return (
                <div key={`category-${index}`}>
                  <button
                    className={clsx(
                      'inline-flex items-center justify-center rounded-r-full rounded-tl-full px-6 py-2 text-sm font-bold tracking-wide text-white md:text-base',
                      selectedCategory == category
                        ? 'bg-dark-700'
                        : 'bg-dark-600 hover:bg-dark-700 cursor-pointer duration-200 ease-in-out',
                    )}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* Section text */}
      <div className="lg:max-w-(--breakpoint-xl) mx-auto max-w-xl text-center md:max-w-2xl lg:text-left">
        <p className="bg-linear-to-r from-dark-600 to-dark-700 inline-flex items-center justify-center rounded-r-full rounded-tl-full px-6 py-2 text-sm font-medium tracking-wide text-white">
          Explore
        </p>
        <div className="mt-6 grid w-full gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Filter through hundreds of our projects by industry
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-dark-300 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius
              mod tempor incididunt ut labore et.
            </p>
          </div>
        </div>
      </div>

      {/* Projects section */}
      <div className="max-w-(--breakpoint-xl) mx-auto mt-10 md:mt-12 lg:mt-16">
        <div className="grid md:grid-cols-12 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Projects container */}
          <div className="order-2 mt-12 overflow-hidden md:order-1 md:col-span-9 md:mt-0">
            {/* Projects container */}
            <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
              {archivedCaseStudies.map((caseStudy, index) => (
                <CaseStudy
                  key={`archived-case-study-${index}`}
                  caseStudy={caseStudy}
                />
              ))}
            </div>
          </div>

          {/* Filters */}
          <Filters />
        </div>
      </div>
    </section>
  )
}
