"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { Icons } from "@/components/icons";
import { useUser } from "@/firebase";

export default function Footer() {
  const user = useUser();
  const pathname = usePathname();

  const noAuthPages = ['/login', '/signup', '/'];
  if (user.loading || !user.data || noAuthPages.includes(pathname)) {
    return null;
  }

  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Celebrating nonconformity through fashion.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-4">
            <div>
              <h3 className="font-headline text-lg">Shop</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/shop?category=tees" className="text-sm text-muted-foreground hover:text-foreground">Tees</Link></li>
                <li><Link href="/shop?category=outerwear" className="text-sm text-muted-foreground hover:text-foreground">Outerwear</Link></li>
                <li><Link href="/shop?category=bottoms" className="text-sm text-muted-foreground hover:text-foreground">Bottoms</Link></li>
                <li><Link href="/shop?category=accessories" className="text-sm text-muted-foreground hover:text-foreground">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg">About</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">Our Story</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg">Support</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Shipping & Returns</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg">Stay in the Loop</h3>
              <p className="mt-4 text-sm text-muted-foreground">Get updates on new drops and exclusive deals.</p>
              <form className="mt-4 flex">
                <Input type="email" placeholder="Your email" className="min-w-0 flex-1" />
                <Button type="submit" className="ml-2">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} AWKWORLD. All rights reserved.</p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Icons.twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Icons.instagram className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Icons.facebook className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
