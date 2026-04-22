import { auth } from "@clerk/nextjs/server";

export async function getCurrentUser() {
  const session = await auth();

  return {
    userId: session.userId
  };
}

export async function requireUser() {
  const session = await auth();

  if (!session.userId) {
    throw new Error("Unauthorized");
  }

  return session.userId;
}
