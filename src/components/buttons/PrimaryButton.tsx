import Link, { LinkProps } from 'next/link'
import clsx from 'clsx'

type PrimaryButtonProps = {
  className?: string
  children: React.ReactNode
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | LinkProps
)

export function PrimaryButton({
  className = 'hover:bg-dark-900 h-14',
  children,
  ...props
}: PrimaryButtonProps) {
  const baseClassName =
    'duration-250 text-dark-900 flex w-auto items-center justify-center rounded-full bg-white px-8 py-3 font-semibold leading-snug transition ease-in-out hover:text-white focus:outline-hidden cursor-pointer'

  if (props.href) {
    return (
      <Link className={clsx(baseClassName, className)} {...props}>
        {children}
      </Link>
    )
  } else if (!('href' in props)) {
    return (
      <button className={clsx(baseClassName, className)} {...props}>
        {children}
      </button>
    )
  }
}
