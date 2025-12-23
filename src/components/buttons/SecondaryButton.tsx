import Link from 'next/link'
import clsx from 'clsx'
import type { LinkProps } from 'next/link'

type PrimaryButtonProps = {
  className?: string
  children: React.ReactNode
  size?: 'sm' | 'lg'
  gradient?: string
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | LinkProps
)

const containerStyles =
  'flex relative justify-center items-center px-8 w-auto text-base font-medium leading-snug text-white group'
const circleStyles =
  'absolute top-0 left-0 z-10 block w-full h-full transition-all ease-in-out rounded-full bg-linear-to-r duration-250 md:w-14 md:group-hover:w-full'

const sizeStyles = {
  sm: 'h-12 md:h-14',
  lg: 'h-14',
}

export function SecondaryButton({
  className,
  size = 'lg',
  gradient = 'from-pink-600 to-pink-700/20',
  children,
  ...props
}: PrimaryButtonProps) {
  const containerClass = clsx(containerStyles, sizeStyles[size], className)
  const circleClass = clsx(circleStyles, gradient)

  if (props.href) {
    return (
      <Link className={containerClass} {...props}>
        <span className={circleClass} />
        <span className="relative z-20">{children}</span>
      </Link>
    )
  } else if (!('href' in props)) {
    return (
      <button className={containerClass} {...props}>
        <span className={circleClass} />
        <span className="relative z-20">{children}</span>
      </button>
    )
  }
}
