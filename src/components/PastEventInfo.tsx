import clsx from 'clsx'

type Props = {
  includedItems: string[]
}

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
      <p className="text-void-100 text-lg font-semibold">{children}</p>
    </div>
  )
}

export const PastEventInfo = ({ includedItems }: Props) => {
  return (
    <section className="mb-10 px-4 py-10 sm:px-6 md:py-12 lg:px-8">
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        <div className="mt-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">What was included</h2>
            <p className="text-void-200 mt-4 text-xl">
              Every ticket covered the full UNLEASHED experience — no add-ons, no surprises.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-(--breakpoint-xl) gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {includedItems.map((item, index) => (
              <InfoCard key={`included-${index}`} index={index}>
                {item}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
