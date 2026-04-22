import { NextResponse } from "next/server";
import stripe from "@/lib/stripe/client";

export async function POST() {
  const session =
    await stripe.billingPortal.sessions.create({
      customer: "cus_demo",
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard` 
    });

  return NextResponse.json({
    url: session.url
  });
}
