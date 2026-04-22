import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const body = await request.json();

  const amount = Number(body.amount);

  if (amount <= 0) {
    return NextResponse.json(
      { message: "Invalid amount" },
      { status: 400 }
    );
  }

  await prisma.donation.create({
    data: {
      amount,
      userId,
      eventId: body.eventId
    }
  });

  await prisma.event.update({
    where: {
      id: body.eventId
    },
    data: {
      raised: {
        increment: amount
      }
    }
  });

  return NextResponse.json({ success: true });
}
