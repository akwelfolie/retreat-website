import Image from 'next/image'
import clsx from 'clsx'
import { Chip } from './ui/Chip'
import { SocialLink } from '@/components/SocialLink'
import { getSpeakers } from '@/content/people'

function RenderBio({ text }: { text: string }) {
  return (
    <>
      {text.split('\n\n').map((p, i) => (
        <p
          key={i}
          className={clsx(
            'text-base text-void-200 md:text-lg',
            i > 0 && 'mt-5',
          )}
        >
          {p}
        </p>
      ))}
    </>
  )
}

export const SpeakerDetails = () => {
  const speakers = getSpeakers()

  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 md:pb-16 md:pt-14 lg:px-8 lg:pt-20">
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        {/* Header (optional, but helps separate from Founders) */}
        <div className="mx-auto w-full max-w-3xl text-center">
          <Chip>Speakers</Chip>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Meet the voices of Unleashed
          </h2>
          <p className="mt-4 text-lg text-void-200 md:text-xl">
            Practitioners and educators joining us for the weekend.
          </p>
        </div>

        <div className="mt-12 space-y-10 md:mt-14 lg:mt-16">
          {speakers.map((speaker, index) => {
            const flipped = index % 2 === 1

            return (
              <div
                key={`speaker-${index}`}
                className="
                  grid items-stretch gap-6 rounded-3xl
                  bg-void-500/40 p-6 shadow-xl ring-1 ring-white/10
                  h-auto
                  md:h-[560px]
                  lg:h-[600px]
                  lg:grid-cols-12
                  lg:gap-10
                  lg:p-10
                "
              >
                {/* Image */}
                <div
                  className={clsx(
                    'relative overflow-hidden rounded-3xl ring-1 ring-void-300/20 shadow-xl',
                    'h-64 md:h-full lg:col-span-5',
                    flipped ? 'lg:order-2' : 'lg:order-1',
                  )}
                >
                  <Image
                    src={speaker.bigImage}
                    alt={speaker.name}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    priority={index === 0}
                  />

                  {/* Mobile chip over image */}
                  <div className="absolute left-5 top-5 lg:hidden">
                    <Chip>{speaker.role}</Chip>
                  </div>
                </div>

                {/* Text */}
                <div
                  className={clsx(
                    'lg:col-span-7',
                    flipped ? 'lg:order-1' : 'lg:order-2',
                  )}
                >
                  <div className="hidden lg:block">
                    <Chip>{speaker.role}</Chip>
                  </div>

                  <h3 className="mt-4 text-3xl font-bold text-white lg:text-4xl">
                    {speaker.name}
                  </h3>

                  <div className="mt-4  max-h-[340px] overflow-y-auto pr-2">
                    <RenderBio text={speaker.bio} />
                  </div>

                  {!!speaker.socials?.length && (
                    <div className="mt-8 flex gap-2">
                      {speaker.socials.map((social, i) => (
                        <SocialLink
                          key={`speaker-${index}-social-${i}`}
                          size="lg"
                          href={social.href}
                          icon={social.name}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
