import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="container flex h-[calc(100vh-10rem)] items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="font-headline text-3xl">Login</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <LoginForm />
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
