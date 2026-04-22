import { NextResponse } from "next/server";
import stripe from "@/lib/stripe/client";

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "GolfGives Donation"
          },
          unit_amount: 2500
        },
        quantity: 1
      }
    ],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing` 
  });

  return NextResponse.json({
    url: session.url
  });
}
