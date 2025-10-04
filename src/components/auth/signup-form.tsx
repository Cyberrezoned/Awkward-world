"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignupForm() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Max Robinson" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required />
      </div>
      <Button type="submit" className="w-full">
        Create an account
      </Button>
      <Button variant="outline" className="w-full">
        Sign up with Google
      </Button>
    </div>
  )
}
