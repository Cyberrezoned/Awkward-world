
"use client"

import Image from "next/image";
import Link from "next/link";
import { CreditCard, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export function CartSheet() {
  const { state, dispatch } = useCart();
  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };
  
  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  }

  return (
    <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
      <SheetHeader className="px-6">
        <SheetTitle>Shopping Bag ({state.items.length})</SheetTitle>
      </SheetHeader>
      <Separator />
      {state.items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center">
            <p className="text-lg font-medium text-muted-foreground">Your bag is empty.</p>
            <Button asChild variant="outline" className="mt-4">
                <Link href="/shop">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Start Shopping
                </Link>
            </Button>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto px-6">
            <ul className="divide-y divide-border">
              {state.items.map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium">
                        <h3>
                          <Link href={`/shop/${item.id.split('-')[0]}`}>{item.name}</Link>
                        </h3>
                        <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">Size: {item.size}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center">
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-10 text-center">{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex">
                        <Button variant="ghost" type="button" onClick={() => removeItem(item.id)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <SheetFooter className="px-6 py-6 sm:flex-col">
            <Separator className="my-2" />
            <div className="flex justify-between text-base font-medium">
              <p>Subtotal</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-muted-foreground">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
              <Button className="w-full" size="lg">
                <CreditCard className="mr-2 h-4 w-4" />
                Checkout
              </Button>
            </div>
            <div className="mt-4 flex justify-center text-center text-sm text-muted-foreground">
              <p>
                or{' '}
                <Link href="/shop" className="font-medium text-primary hover:text-primary/80">
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </SheetFooter>
        </>
      )}
    </SheetContent>
  );
}
