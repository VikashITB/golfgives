import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="container flex min-h-[80vh] items-center justify-center">
      <SignUp />
    </main>
  );
}
