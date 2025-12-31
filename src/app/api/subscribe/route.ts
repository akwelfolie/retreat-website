import { NextResponse } from 'next/server'

const GROUP_ID = process.env.MAILERLITE_GROUP_ID! // "175332566401811774"
const API_KEY = process.env.MAILERLITE_API_KEY!

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
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
    let data: any
    try {
      data = JSON.parse(text)
    } catch {
      data = { raw: text }
    }

    if (!mlRes.ok) {
      return NextResponse.json(
        { error: data?.message || data?.error || 'MailerLite error', details: data },
        { status: mlRes.status },
      )
    }

    return NextResponse.json({ ok: true, ml: data }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || 'Server error' },
      { status: 500 },
    )
  }
}
