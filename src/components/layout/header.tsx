
"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Logo from "@/components/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserNav } from "@/components/auth/user-nav";
import { CartIcon } from "@/components/cart/cart-icon";
import { cn } from "@/lib/utils";
import { useAppState } from "@/hooks/use-app-state";
import { ContactDialog } from "../contact/contact-dialog";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const { isAuthenticated } = useAppState();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!isAuthenticated || pathname === '/') {
    return null;
  }

  return (
    <div className={cn("sticky top-0 z-50 w-full transition-transform duration-300", isHidden ? '-translate-y-full' : 'translate-y-0')}>
      <div className="bg-primary text-primary-foreground text-center text-sm py-2 px-4">
        <p className="font-medium">NOW DELIVERING TO ALL LOCATIONS IN NIGERIA ✨</p>
      </div>
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className={cn("container transition-all duration-300", isScrolled ? 'h-16' : 'h-20 flex items-center')}>
          <div className={cn("flex w-full items-center justify-between", isScrolled ? '' : 'flex-col')}>

            <div className={cn(
              "w-full justify-between items-center",
              isScrolled ? 'hidden' : 'flex'
            )}>
              <div className="flex-1 md:flex-none">
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                    >
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle Menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="pr-0">
                    <Link
                      href="/home"
                      className="mr-6 flex items-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Logo />
                    </Link>
                    <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                      <div className="flex flex-col space-y-3">
                        {navLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                                "text-foreground transition-colors hover:text-foreground/80",
                                pathname === link.href ? "font-bold" : ""
                              )}
                          >
                            {link.label}
                          </Link>
                        ))}
                         <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                                "text-foreground transition-colors hover:text-foreground/80",
                                pathname === "/contact" ? "font-bold" : ""
                              )}
                          >
                            Contact
                          </Link>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
               <div className="flex-1 flex justify-center">
                <Link href="/home">
                    <Logo isScrolled={isScrolled} />
                </Link>
              </div>
               <div className="flex flex-1 items-center justify-end space-x-2">
                <ContactDialog />
                <ThemeToggle />
                <CartIcon />
                <UserNav />
              </div>
            </div>

            <div className={cn("w-full flex items-center transition-all duration-300", isScrolled ? 'h-16' : 'h-12')}>
                <div className="hidden md:flex items-center">
                  <Link href="/home" className={cn("mr-6", isScrolled ? 'block' : 'hidden')}>
                    <Logo isScrolled={isScrolled} />
                  </Link>
                  <nav className="flex items-center space-x-6 text-sm font-medium">
                    {navLinks.map((link) => (
                       <Link
                        key={link.href}
                        href={link.href}
                        className="relative transition-colors nav-link-indicator"
                        data-active={pathname === link.href}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="w-full flex-1 md:w-auto md:flex-none md:ml-auto">
                   <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search products..." className="pl-9" />
                   </div>
                </div>

                 <div className={cn("items-center space-x-2", isScrolled ? 'flex' : 'hidden')}>
                    <ContactDialog />
                    <ThemeToggle />
                    <CartIcon />
                    <UserNav />
                </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
