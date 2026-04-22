import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { validateEventInput } from "@/lib/validators/event";

export async function GET() {
  const events = await prisma.event.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });

  return NextResponse.json(events);
}

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();

    const data = validateEventInput(body);

    const event = await prisma.event.create({
      data: {
        ...data,
        startsAt: new Date(data.startsAt),
        userId
      }
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Unable to create event."
      },
      { status: 400 }
    );
  }
}
