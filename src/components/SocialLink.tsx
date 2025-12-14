import clsx from 'clsx'
import Link from 'next/link'
import { SocialIcon } from '@/components/SocialIcon'
import type { IconName } from '@/components/SocialIcon'

type SocialLinkProps = {
  className?: string
  href: string
  icon: IconName
  size?: 'lg' | 'sm'
}

export function SocialLink({
  className,
  href,
  icon,
  size = 'lg',
}: SocialLinkProps) {
  return (
    <Link
      className={clsx(
        'group flex items-center justify-center rounded-full bg-dark-700 text-dark-300 transition duration-300 ease-in-out hover:bg-white',
        size === 'lg' ? 'h-12 w-12' : 'h-10 w-10',
        className,
      )}
      href={href}
    >
      <SocialIcon
        name={icon}
        className={clsx(
          'transition duration-300 ease-in-out group-hover:text-dark-900',
          size === 'lg' ? 'h-6 w-6' : 'h-5 w-5',
        )}
      />
    </Link>
  )
}
