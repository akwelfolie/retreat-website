import Image from 'next/image'
import { Chip } from '@/components/ui/Chip'
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import { SecondaryButton } from '@/components/ui/buttons/SecondaryButton'
import { LocationPreview } from '@/components/LocationPreview'
import { LINKS } from '@/config/links'
import photo1 from '/public/stock/rozbot/bloodlust7626_websize.jpeg'
import photo2 from '/public/stock/rozbot/bloodlust7629_websize.jpeg'
import photo3 from '/public/stock/rozbot/bloodlust7630_websize.jpeg'
import photo4 from '/public/stock/rozbot/bloodlust7676_websize.jpeg'

const photos = [
  { src: photo1, alt: 'ROZBOT performance' },
  { src: photo2, alt: 'Drag show at Studio 205' },
  { src: photo3, alt: 'Pride Drag Plant Bingo night' },
  { src: photo4, alt: 'ROZBOT on stage' },
]

export const NextPreview = () => {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Chip>June 30 · 6:30–9 PM · Chicago, IL</Chip>

          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Pride Drag Plant Bingo
          </h2>

          <p className="text-void-200 mt-2 text-lg font-medium">
            Hosted by ROZBOT &amp; Unleashed · Studio 205
          </p>

          <p className="text-void-200 mt-4 text-xl">
            Get your daubers ready, plant lovers — we&apos;re bringing the PRIDE to the potting
            bench! An unforgettable evening of drag, plants, prizes, and pure charisma. All
            proceeds benefit Center On Halsted and Howard Brown.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton href={LINKS.tickets}>Get Tickets</PrimaryButton>
            <SecondaryButton href="/next-up">More Details</SecondaryButton>
          </div>
        </div>

        {/* Photo grid */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-16 lg:gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Location */}
        <LocationPreview />
      </div>
    </section>
  )
}
