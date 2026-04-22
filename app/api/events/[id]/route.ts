import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { validateEventInput } from "@/lib/validators/event";

type RouteProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  _request: Request,
  { params }: RouteProps
) {
  const { id } = await params;
  const event = await prisma.event.findUnique({
    where: {
      id
    }
  });

  if (!event) {
    return NextResponse.json(
      { message: "Event not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(event);
}

export async function PATCH(
  request: Request,
  { params }: RouteProps
) {
  try {
    const { id } = await params;
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const existing = await prisma.event.findUnique({
      where: {
        id
      }
    });

    if (!existing || existing.userId !== userId) {
      return NextResponse.json(
        { message: "Forbidden" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const data = validateEventInput(body);

    const updated = await prisma.event.update({
      where: {
        id
      },
      data: {
        ...data,
        startsAt: new Date(data.startsAt)
      }
    });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Unable to update event."
      },
      { status: 400 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: RouteProps
) {
  const { id } = await params;
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const existing = await prisma.event.findUnique({
    where: {
      id
    }
  });

  if (!existing || existing.userId !== userId) {
    return NextResponse.json(
      { message: "Forbidden" },
      { status: 403 }
    );
  }

  await prisma.event.delete({
    where: {
      id
    }
  });

  return NextResponse.json({ success: true });
}
