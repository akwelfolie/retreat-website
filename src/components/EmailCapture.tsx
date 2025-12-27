'use client'

import { useState } from 'react'
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import { Chip } from './ui/Chip'

type EmailCaptureProps = {
  tagline?: string
  headline?: string
  description?: string
  submitLabel?: string
}

export const EmailCapture = ({
  tagline = 'Stay in the loop',
  headline = 'Get retreat updates',
  description = 'Sign up to receive speaker announcements, schedule updates, and important details.',
  submitLabel = 'Notify me',
}: EmailCaptureProps) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('submitting')

    // TODO (later): call your API (POST /api/signup) and handle errors.
    // For now, just simulate success.
    await new Promise((r) => setTimeout(r, 400))

    setStatus('success')
  }

  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="mx-auto w-full rounded-3xl bg-void-700 border border-void-700 hover:border-gold-700/20 px-4 py-12 shadow-xl sm:p-16 lg:p-14 xl:p-16">
          <div className="w-full text-left">
            <Chip>
              {tagline}
            </Chip> 

            <div className="mt-4 md:mt-5">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                {headline}
              </h2>
              <p className="mt-3 max-w-2xl text-xl text-void-200 md:mt-5">
                {description}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-10">
            <label
              htmlFor="email"
              className="ml-0.5 text-sm font-medium text-void-200"
            >
              Email *
            </label>

            <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 w-full flex-1 rounded-2xl border-2 border-solid border-void-800 bg-void-800 p-4 text-sm font-medium text-white outline-hidden transition duration-200 ease-in-out focus:border-void-600 focus:outline-hidden"
                required
                disabled={status !== 'idle'}
              />

              <PrimaryButton
                type="submit"
                disabled={status !== 'idle'}
              >
                {status === 'submitting'
                  ? 'Submitting…'
                  : status === 'success'
                    ? 'You’re in'
                    : submitLabel}
              </PrimaryButton>
            </div>

            {status === 'success' && (
              <p className="mt-4 text-sm text-void-200">
                You’re signed up. Updates coming soon.
              </p>
            )}

            <p className="mt-4 text-xs text-void-200/80">
              We’ll only email you about Unleashed. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
