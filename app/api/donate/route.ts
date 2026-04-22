import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('STRIPE_SECRET_KEY is not configured')
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-02-24.acacia',
})

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
  }

  try {
    const { amount, charityName, campaignId, donorName, message } = await req.json()

    if (!amount || amount < 100) {
      return NextResponse.json({ error: 'Minimum donation is $1' }, { status: 400 })
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Donation — ${charityName}`,
            description: message || `Supporting ${charityName} via GolfGives`,
          },
          unit_amount: amount, // in cents
        },
        quantity: 1,
      }],
      metadata: {
        charityName,
        campaignId: campaignId ?? '',
        donorName: donorName ?? '',
        message: message ?? '',
      },
      success_url: `${appUrl}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/?donate=cancelled`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
