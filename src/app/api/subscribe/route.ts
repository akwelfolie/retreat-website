import { NextResponse } from 'next/server'

const GROUP_ID = process.env.MAILERLITE_GROUP_ID // "175332566401811774"
const API_KEY = process.env.MAILERLITE_API_KEY

type MailerLiteError = {
  message?: string
  error?: string
  errors?: unknown
  [key: string]: unknown
}

function safeJsonParse(text: string): unknown {
  try {
    return JSON.parse(text) as unknown
  } catch {
    return { raw: text }
  }
}

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message
  if (typeof err === 'string') return err
  return 'Server error'
}

export async function POST(req: Request) {
  try {
    if (!GROUP_ID || !API_KEY) {
      return NextResponse.json(
        { error: 'Missing MAILERLITE_GROUP_ID or MAILERLITE_API_KEY' },
        { status: 500 },
      )
    }

    const body: unknown = await req.json()
    const email =
      typeof body === 'object' && body !== null && 'email' in body
        ? (body as { email?: unknown }).email
        : undefined

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'A valid email is required' }, { status: 400 })
    }

    const mlRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        groups: [GROUP_ID],
      }),
    })

    const text = await mlRes.text()
    const parsed = safeJsonParse(text)

    if (!mlRes.ok) {
      const data = (parsed ?? {}) as MailerLiteError
      return NextResponse.json(
        {
          error: data.message || data.error || 'MailerLite error',
          details: parsed,
        },
        { status: mlRes.status },
      )
    }

    return NextResponse.json({ ok: true, ml: parsed }, { status: 200 })
  } catch (err: unknown) {
    return NextResponse.json({ error: getErrorMessage(err) }, { status: 500 })
  }
}
