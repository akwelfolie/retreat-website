'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import { LINKS } from '@/config/links'


const navbar = {
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Tickets', href: LINKS.tickets },
  ],
  action: {
    label: 'Buy Ticket',
    href: LINKS.tickets,
  },
}

export const Navbar = () => {
  const pathname = usePathname()

  function Hamburger() {
    return (
      <PopoverButton
        className="group relative z-50 h-5 w-6 rotate-0 transform cursor-pointer transition duration-500 ease-in-out focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        <span className="absolute left-0 top-0 block h-1 w-full rotate-0 transform rounded-full bg-void-300 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-white group-data-open:left-1/2 group-data-open:top-2 group-data-open:w-0" />
        <span className="absolute left-0 top-2 block h-1 w-full transform rounded-full bg-void-300 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-white group-data-open:rotate-45" />
        <span className="absolute left-0 top-2 block h-1 w-full transform rounded-full bg-void-300 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-white group-data-open:-rotate-45" />
        <span className="absolute left-0 top-4 block h-1 w-full rotate-0 transform rounded-full bg-void-300 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-white group-data-open:left-1/2 group-data-open:top-2 group-data-open:w-0" />
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
            className="absolute left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-linear-to-tr from-blue-800 to-pink-900 data-closed:-translate-y-full data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in"
          >
            <div className="mx-auto flex w-full flex-col items-center justify-evenly space-y-8 p-4 text-xl">
              {navbar.navigation.map((link, index) => (
                <Link
                  href={link.href}
                  key={`mobile-nav-link-${index}`}
                  className={clsx(
                    'block rounded-full px-6 py-2 font-medium sm:inline-block',
                    pathname === link.href
                      ? 'bg-void-700 text-white'
                      : 'text-void-300 transition duration-200 ease-in-out hover:bg-void-700 hover:text-white',
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <PrimaryButton
                href={navbar.action.href}
                className="h-14 text-lg"
              >
                {navbar.action.label}
              </PrimaryButton>
            </div>
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
            {/* Large logo */}
            <Link
              href="/"
              className="group block text-2xl font-black md:hidden lg:block"
            >
              <span className="text-white transition duration-200 ease-in-out group-hover:text-void-300">
                Unleashed
              </span>
            </Link>

            {/* Small logo for mobile screens */}
            <Link
              href="/"
              className="group hidden text-3xl font-black md:block lg:hidden"
            >
              <span className="text-white transition duration-200 ease-in-out group-hover:text-void-300">
                U
              </span>
            </Link>
          </div>

          {/* Main menu for large screens */}
          <div className="hidden items-center justify-between text-xl font-medium text-void-300 md:flex md:space-x-0.5 md:text-base lg:space-x-2">
            {navbar.navigation.map((link, index) => (
              <Link
                href={link.href}
                key={`desktop-nav-link-${index}`}
                className={clsx(
                  'block rounded-full px-4 py-1 sm:inline-block',
                  pathname === link.href
                    ? 'bg-void-700 text-white'
                    : 'duration-200 ease-in-out hover:bg-void-700 hover:text-white',
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            <PrimaryButton
              href={navbar.action.href}
            >
              {navbar.action.label}
            </PrimaryButton>
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}
