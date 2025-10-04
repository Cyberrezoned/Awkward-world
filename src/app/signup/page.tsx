import { SignupForm } from "@/components/auth/signup-form"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="container flex h-[calc(100vh-10rem)] items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="font-headline text-3xl">Sign Up</h1>
          <p className="text-balance text-muted-foreground">
            Create an account to get started.
          </p>
        </div>
        <SignupForm />
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
