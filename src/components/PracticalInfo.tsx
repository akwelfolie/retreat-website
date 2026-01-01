import clsx from 'clsx'
import Link from 'next/link'
import { Chip } from './ui/Chip'

const includedItems = [
  'Speakers',
  'Immersive workshops',
  'Saturday evening: dinner with performances, followed by DJ & dancing',
  'Coffee, tea & snacks throughout both days',
  'Swag bag with goodies from our sponsors',
  'Dinner catered by Perilla Steakhouse',
]

const notIncludedItems = [
  'Lodging is not included in the ticket price',
  'L7 has offered a block of rooms at a discounted rate for overnight stays',
  'Transportation to and from the venue',
]

type CardProps = {
  children: React.ReactNode
  index: number
}

function InfoCard({ children, index }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-3xl px-8 py-6 shadow-xl ring-1 ring-white/10 transition-all duration-300',
        index % 2 === 0 ? 'bg-blue-800/80' : 'bg-pink-800/80',
      )}
    >
      <p className="text-lg font-semibold text-void-100">{children}</p>
    </div>
  )
}

export const PracticalInfo = () => {
  return (
    <section className="mt-10 px-4 py-10 sm:px-6 md:py-12 lg:px-8">
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        {/* Section header */}
        <div className="mx-auto max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
          <Chip>Practical Info</Chip>
        </div>

        {/* WHAT'S INCLUDED */}
        <div className="mt-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What’s included
            </h2>
            <p className="mt-4 text-xl text-void-200">
              Your ticket covers the full Unleashed experience — no add-ons, no
              surprises.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-(--breakpoint-xl) gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item, index) => (
              <InfoCard key={`included-${index}`} index={index}>
                {item.includes('Perilla') ? (
                  <>
                    Dinner catered by{' '}
                    <Link
                      href="https://www.perillachicago.com/perilla-steakhouse-overview/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
                    >
                      Perilla Steakhouse
                    </Link>
                  </>
                ) : (
                  item
                )}
              </InfoCard>
            ))}
          </div>
        </div>

        {/* WHAT'S NOT INCLUDED */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What’s not included
            </h2>
            <p className="mt-4 text-xl text-void-200">
              A few things to plan for separately.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-(--breakpoint-xl) gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {notIncludedItems.map((item, index) => (
              <InfoCard key={`not-included-${index}`} index={index}>
                {item}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
