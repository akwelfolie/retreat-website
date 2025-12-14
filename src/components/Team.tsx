import Image from 'next/image'
import { SocialLink } from '@/components/SocialLink'
import staffImage1 from '/public/stock/team/team-01.jpg'
import staffImage2 from '/public/stock/team/team-02.jpg'
import staffImage3 from '/public/stock/team/team-03.jpg'
import staffImage4 from '/public/stock/team/team-04.jpg'
import staffImage5 from '/public/stock/team/team-05.jpg'
import staffImage6 from '/public/stock/team/team-06.jpg'
import type { IconName } from '@/components/SocialIcon'
import type { StaticImageData } from 'next/image'

const team: {
  name: string
  job: string
  image: StaticImageData
  socials: { name: IconName; href: string }[]
}[] = [
  {
    name: 'Kaylen Meyer',
    job: 'CEO',
    image: staffImage1,
    socials: [
      { name: 'instagram', href: '#0' },
      { name: 'facebook', href: '#0' },
      { name: 'twitter', href: '#0' },
    ],
  },
  {
    name: 'Coriss Ambady',
    job: 'Lead Developer',
    image: staffImage2,
    socials: [
      { name: 'instagram', href: '#0' },
      { name: 'facebook', href: '#0' },
      { name: 'twitter', href: '#0' },
    ],
  },
  {
    name: 'Lester Mccall',
    job: 'Senior Designer',
    image: staffImage3,
    socials: [
      { name: 'instagram', href: '#0' },
      { name: 'facebook', href: '#0' },
      { name: 'twitter', href: '#0' },
    ],
  },
  {
    name: 'Misha Mustafa',
    job: 'Studio Artist',
    image: staffImage4,
    socials: [
      { name: 'instagram', href: '#0' },
      { name: 'facebook', href: '#0' },
      { name: 'twitter', href: '#0' },
    ],
  },
  {
    name: 'Stefan Stefancik',
    job: 'Designer',
    image: staffImage5,
    socials: [
      { name: 'instagram', href: '#0' },
      { name: 'facebook', href: '#0' },
      { name: 'twitter', href: '#0' },
    ],
  },
  {
    name: 'Vivien Smith',
    job: 'Developer',
    image: staffImage6,
    socials: [
      { name: 'instagram', href: '#0' },
      { name: 'facebook', href: '#0' },
      { name: 'twitter', href: '#0' },
    ],
  },
]

export const Team = () => {
  return (
    <section className="px-4 pb-14 pt-12 sm:px-6 md:pb-20 md:pt-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        {/* Section text */}
        <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
          <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-linear-to-r from-dark-600 to-dark-700 px-6 py-2 text-sm font-medium tracking-wide text-white">
            The team
          </p>
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Decades of experience in design and development
          </h2>
          <p className="mt-6 text-xl text-dark-300">
            Our diverse team unites industry veterans and innovative minds, all
            committed to delivering transformative digital experiences.
          </p>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:mt-16 lg:gap-x-12 lg:gap-y-16">
          {team.map((member, i) => (
            <div
              key={`team-member-${i}`}
              className="flex flex-col items-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="h-64 w-64 rounded-3xl object-cover object-center shadow-xl"
                sizes="16rem"
              />
              <div className="mt-4 text-center">
                <div className="text-xl font-semibold text-white">
                  {member.name}
                </div>
                <div className="text-lg font-medium text-dark-400">
                  {member.job}
                </div>

                {/* Social media links */}
                <div className="mt-2 flex justify-center space-x-2">
                  {member.socials.map((socialLink, j) => (
                    <SocialLink
                      key={`member-${i}-social-link-${j}`}
                      size="sm"
                      href={socialLink.href}
                      icon={socialLink.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
