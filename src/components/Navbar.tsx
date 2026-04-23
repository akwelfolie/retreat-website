'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { IconChevronDown } from '@tabler/icons-react'
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import { LINKS, NAV_LINKS } from '@/config/links'
import { pastRetreats } from '@/content/retreats'
import Image from 'next/image'
import logo from '/public/stock/logo.png'

const action = {
  label: 'Buy Ticket',
  href: LINKS.tickets,
}

export const Navbar = () => {
  const pathname = usePathname()

  function Hamburger() {
    return (
      <PopoverButton
        className="group relative z-50 h-5 w-6 rotate-0 transform cursor-pointer transition duration-500 ease-in-out focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        <span className="bg-void-300 absolute top-0 left-0 block h-1 w-full rotate-0 transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-white group-data-open:top-2 group-data-open:left-1/2 group-data-open:w-0" />
        <span className="bg-void-300 absolute top-2 left-0 block h-1 w-full transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-white group-data-open:rotate-45" />
        <span className="bg-void-300 absolute top-2 left-0 block h-1 w-full transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-white group-data-open:-rotate-45" />
        <span className="bg-void-300 absolute top-4 left-0 block h-1 w-full rotate-0 transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-white group-data-open:top-2 group-data-open:left-1/2 group-data-open:w-0" />
      </PopoverButton>
    )
  }

  function MobileNav() {
    return (
      <div className="block md:hidden">
        <Popover>
          <Hamburger />

          <PopoverPanel
            transition
            as="div"
            className="absolute top-0 left-0 z-40 flex h-screen w-screen items-center justify-center bg-linear-to-tr from-blue-800 to-pink-900 data-closed:-translate-y-full data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
          >
            {({ close }) => (
              <div className="mx-auto flex w-full flex-col items-center justify-evenly space-y-8 p-4 text-xl">
                {NAV_LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    onClick={() => close()}
                    className={clsx(
                      'block rounded-full px-6 py-2 font-medium sm:inline-block',
                      pathname === link.href
                        ? 'bg-void-700 text-white'
                        : 'text-void-300 hover:bg-void-700 transition duration-200 ease-in-out hover:text-white',
                    )}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Past Events section */}
                {pastRetreats.length > 0 && (
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-void-400 text-sm font-semibold uppercase tracking-widest">
                      Past Events
                    </span>
                    {pastRetreats.map((retreat) => (
                      <Link
                        key={retreat.slug}
                        href={`/events/${retreat.slug}`}
                        onClick={() => close()}
                        className={clsx(
                          'block rounded-full px-6 py-2 font-medium sm:inline-block',
                          pathname === `/events/${retreat.slug}`
                            ? 'bg-void-700 text-white'
                            : 'text-void-300 hover:bg-void-700 transition duration-200 ease-in-out hover:text-white',
                        )}
                      >
                        {retreat.name}
                      </Link>
                    ))}
                  </div>
                )}

                <PrimaryButton href={action.href} className="h-14 text-lg">
                  {action.label}
                </PrimaryButton>
              </div>
            )}
          </PopoverPanel>
        </Popover>
      </div>
    )
  }

  return (
    <header className="bg-void-900">
      <nav className="mx-auto flex max-w-7xl items-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src={logo}
                alt="Unleashed logo"
                width={96}
                height={96}
                priority
                className="rounded-sm"
              />

              <span className="text-4xl font-black transition duration-200 ease-in-out">
                <span className="text-pink-400 group-hover:text-pink-200">UN</span>
                <span className="text-blue-400 group-hover:text-blue-200">LEASHED</span>
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="text-void-300 hidden items-center justify-between text-xl font-medium md:flex md:space-x-0.5 md:text-base lg:space-x-2">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={clsx(
                  'block rounded-full px-4 py-1 sm:inline-block',
                  pathname === link.href
                    ? 'bg-void-700 text-white'
                    : 'hover:bg-void-700 duration-200 ease-in-out hover:text-white',
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Past Events dropdown */}
            {pastRetreats.length > 0 && (
              <Popover className="relative">
                <PopoverButton
                  className={clsx(
                    'group flex cursor-pointer items-center gap-1 rounded-full px-4 py-1 focus:outline-hidden',
                    'hover:bg-void-700 duration-200 ease-in-out hover:text-white',
                  )}
                >
                  Past Events
                  <IconChevronDown
                    className="h-4 w-4 transition-transform duration-200 group-data-open:rotate-180"
                    stroke={2}
                  />
                </PopoverButton>

                <PopoverPanel className="bg-void-800 absolute left-0 top-full z-50 mt-2 w-64 rounded-2xl p-2 shadow-xl ring-1 ring-white/10">
                  {({ close }) => (
                    <div className="flex flex-col gap-1">
                      {pastRetreats.map((retreat) => (
                        <Link
                          key={retreat.slug}
                          href={`/events/${retreat.slug}`}
                          onClick={() => close()}
                          className="hover:bg-void-700 flex flex-col rounded-xl px-4 py-3 transition-colors"
                        >
                          <span className="text-sm font-semibold text-white">{retreat.name}</span>
                          <span className="text-void-300 text-xs">
                            {retreat.dateShort} · {retreat.venue}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </PopoverPanel>
              </Popover>
            )}
          </div>

          <div className="hidden md:block">
            <PrimaryButton href={action.href}>{action.label}</PrimaryButton>
          </div>

          <MobileNav />
        </div>
      </nav>
    </header>
  )
}
