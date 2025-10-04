"use client"

import { useCart } from "@/hooks/use-cart";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { CartSheet } from "./cart-sheet";

export function CartIcon() {
  const { state } = useCart();
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Icons.shoppingBag className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <CartSheet />
    </Sheet>
  )
}
