import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function AuthButtons() {
  const { userId } = await auth();

  if (userId) {
    return <UserButton />;
  }

  return (
    <div className="flex items-center gap-3">
      <SignInButton mode="modal">
        <button className="text-sm font-semibold">Sign In</button>
      </SignInButton>

      <SignUpButton mode="modal">
        <button className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white">
          Get Started
        </button>
      </SignUpButton>
    </div>
  );
}
