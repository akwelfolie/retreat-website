import Image from 'next/image'
import clsx from 'clsx'
import { Chip } from '@/components/ui/Chip'
import { SocialLink } from '@/components/SocialLink'
import { getFounders } from '@/content/people'

function RenderBio({ text }: { text: string }) {
  // Optional: if you store bios with \n\n for paragraphs
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

export const Founders = () => {
  const founders = getFounders()

  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="mt-12 space-y-12 lg:mt-16 lg:space-y-16">
          {founders.map((founder, index) => {
            const flipped = index % 2 === 1

            return (
              <div
                key={`founder-${index}`}
                className={clsx(
                  'grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10',
                )}
              >
                {/* Image */}
                <div
                  className={clsx(
                    'relative h-72 overflow-hidden rounded-3xl shadow-xl ring-1 ring-void-300/20 sm:h-96 lg:col-span-7 lg:h-auto',
                    flipped ? 'lg:order-2' : 'lg:order-1',
                  )}
                >
                  <Image
                    src={founder.bigImage}
                    alt={founder.name}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    priority={index === 0}
                  />

                  {/* Mobile chip over image */}
                  <div className="absolute left-2 top-2 lg:hidden">
                    <Chip>{founder.role}</Chip>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={clsx(
                    'rounded-3xl bg-void-500 p-6 shadow-xl ring-1 ring-white/10 sm:p-8 lg:col-span-5 lg:p-10',
                    flipped ? 'lg:order-1' : 'lg:order-2',
                  )}
                >
                  <div className="flex h-full flex-col">
                    {/* Desktop chip */}
                    <div className="hidden lg:block">
                      <Chip>{founder.role}</Chip>
                    </div>

                    <h3 className="mt-4 text-3xl font-bold text-white lg:text-4xl">
                      {founder.name}
                    </h3>

                    <div className="mt-4">
                      {/* If your bio is a single long paragraph, you can just do <p> */}
                      <RenderBio text={founder.bio} />
                    </div>

                    <div className="mt-8 flex gap-2">
                      {founder.socials.map((social, i) => (
                        <SocialLink
                          key={`founder-${index}-social-${i}`}
                          size="lg"
                          href={social.href}
                          icon={social.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
