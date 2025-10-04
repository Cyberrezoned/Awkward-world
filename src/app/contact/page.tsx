import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <h1 className="font-headline text-5xl md:text-7xl">Get in Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question, a comment, or just want to say hi? Drop us a line.
          </p>
        </div>
        <form className="mt-12 grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message..." className="min-h-[150px]" />
          </div>
          <Button type="submit" size="lg" className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  );
}
