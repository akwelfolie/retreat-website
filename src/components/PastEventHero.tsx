type Props = {
  title: string
  subtitle: string
  date: string
  venue: string
  city: string
}

export const PastEventHero = ({ title, subtitle, date, venue, city }: Props) => {
  return (
    <section className="px-4 pt-12 sm:px-6 md:pt-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="mx-auto w-full max-w-4xl text-center lg:max-w-5xl">
          <div className="bg-void-700 ring-void-300/20 mb-6 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white ring-1">
            Past Event
          </div>

          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">{title}</h1>

          <p className="text-void-200 mx-auto mt-4 max-w-lg text-xl md:max-w-3xl">{subtitle}</p>

          <p className="text-void-400 mt-4 text-base">
            {date} · {venue} — {city}
          </p>
        </div>
      </div>
    </section>
  )
}
