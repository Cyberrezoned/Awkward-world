

import { ContactForm } from "@/components/contact/contact-form";

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
        <div className="mt-12">
            <ContactForm />
        </div>
      </div>
    </div>
  );
}
