import Image, { type StaticImageData } from 'next/image'
import clsx from 'clsx'
import { Chip } from './ui/Chip'
import { SocialLink } from '@/components/SocialLink'
import { getSpeakers } from '@/content/people'


const speakers = getSpeakers()

export const SpeakerDetails = () => {
  return (
    <section className="pb-10 pt-10 md:pb-12 md:pt-20 lg:pt-36">
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        {speakers.map((speaker, index) => (
          <div
            key={`speaker-${index}`}
            className={clsx(
              'w-full px-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-x-12 lg:px-6 xl:gap-x-36',
              index > 0 && 'mt-6 md:mt-8 lg:mt-12',
            )}
          >
            {/* Text */}
            <div
              className={clsx(
                'flex flex-col justify-center px-4 sm:px-6 lg:px-0',
                index % 2 === 0 ? 'md:order-2 md:pl-0' : 'md:pr-0',
              )}
            >
                <div className="hidden lg:block">
                    <Chip>{speaker.role}</Chip>
                </div>
              <h3 className="mt-4 text-3xl font-bold text-white lg:text-4xl">
                {speaker.name}
              </h3>

              <p className="mt-4 text-lg text-void-200 md:mt-6">
                {speaker.bio}
              </p>

              {/* Social links */}
              <div className="mt-6 flex gap-2">
                {speaker.socials.map((social, i) => (
                  <SocialLink
                    key={`speaker-${index}-social-${i}`}
                    size="lg"
                    href={social.href}
                    icon={social.name}
                  />
                ))}
              </div>
            </div>

            {/* Image */}
            <div
              className={clsx(
                'relative mt-10 aspect-12/11 w-full md:mt-0',
                index % 2 === 0
                  ? 'md:order-1 md:rounded-r-3xl lg:rounded-l-3xl'
                  : 'md:rounded-l-3xl lg:rounded-r-3xl',
              )}
            >
              <Image
                src={speaker.bigImage}
                fill
                alt={speaker.name}
                className={clsx(
                  'absolute inset-0 size-full ring-1 ring-void-300/20 object-cover object-center shadow-xl',
                  index % 2 === 0
                    ? 'md:rounded-r-3xl lg:rounded-l-3xl'
                    : 'md:rounded-l-3xl lg:rounded-r-3xl',
                )}
                sizes="(min-width: 1280px) 34rem, (min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
