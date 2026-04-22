import { headers } from "next/headers";
import { NextResponse } from "next/server";
import stripe from "@/lib/stripe/client";

export async function POST(request: Request) {
  const body = await request.text();

  const signature =
    (await headers()).get("stripe-signature") || "";

  try {
    stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );

    return NextResponse.json({
      received: true
    });
  } catch {
    return NextResponse.json(
      { message: "Invalid webhook" },
      { status: 400 }
    );
  }
}
