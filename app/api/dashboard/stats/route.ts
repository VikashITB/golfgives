import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const totalEvents = await prisma.event.count({
    where: {
      userId
    }
  });

  const raised = await prisma.event.aggregate({
    _sum: {
      raised: true
    },
    where: {
      userId
    }
  });

  const donations = await prisma.donation.count({
    where: {
      event: {
        userId
      }
    }
  });

  return NextResponse.json({
    totalEvents,
    totalRaised: raised._sum.raised || 0,
    donations
  });
}
