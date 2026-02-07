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

type Status = 'idle' | 'submitting' | 'success' | 'error'

export const EmailCapture = ({
  tagline = 'Stay in the loop',
  headline = 'This is your permission to Unleash',
  description = 'Join our mailing list for exclusive updates & offerings.',
  submitLabel = 'Notify me',
}: EmailCaptureProps) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const cleaned = email.trim().toLowerCase()
    if (!cleaned) return

    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleaned }),
      })

      const data = await res.json().catch(() => null)

      if (!res.ok) {
        // Try to extract MailerLite-style validation errors
        const mlErrors =
          data?.details?.errors &&
          typeof data.details.errors === 'object' &&
          Object.values(data.details.errors).flat().join(' ')

        const msg =
          mlErrors ||
          data?.error ||
          data?.message ||
          'Something went wrong. Please try again.'

        setErrorMessage(msg)
        setStatus('error')
        return
      }

      setStatus('success')
      setEmail('') // reset on success
    } catch (err) {
      console.error(err)
      setErrorMessage('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'
  const isSuccess = status === 'success'

  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="mx-auto w-full rounded-3xl bg-void-700 border border-void-400/20 px-4 py-12 shadow-xl sm:p-16 lg:p-14 xl:p-16">
          <div className="w-full text-left">
            <Chip>{tagline}</Chip>

            <div className="mt-4 md:mt-5">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                {headline}
              </h2>
              <p className="mt-3 max-w-2xl text-xl text-void-200 md:mt-5">
                {description}
              </p>
            </div>
          </div>

          {/* idle → show form (also keep it visible on error so they can retry) */}
          {!isSuccess && (
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
                  className="h-14 w-full flex-1 rounded-2xl border-2 border-solid border-void-800 bg-void-800 p-4 text-sm font-medium text-white outline-hidden transition duration-200 ease-in-out focus:border-void-600"
                  required
                  disabled={isSubmitting}
                />

                <PrimaryButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting…' : submitLabel}
                </PrimaryButton>
              </div>

              {/* error */}
              {status === 'error' && (
                <p className="mt-4 text-sm text-pink-200">
                  {errorMessage || 'Something went wrong. Please try again.'}
                </p>
              )}

              <p className="mt-4 text-xs text-void-200/80">
                We’ll only email you about UNLEASHED. Unsubscribe anytime.
              </p>
            </form>
          )}

          {/* success */}
          {isSuccess && (
            <div className="mt-10">
              <p className="text-lg text-void-100">
                You’re in!
              </p>
              <p className="mt-3 text-xs text-void-200/80">
                We’ll only email you about UNLEASHED. Unsubscribe anytime.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
