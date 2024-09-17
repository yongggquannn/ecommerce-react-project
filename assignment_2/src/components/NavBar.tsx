import * as React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "../cart-context";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { CartView } from "./CartView";



export const NavBar = () => {
  const { cartItems, cartTotal, cartCount } = useCart();

  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="flex h-14 items-center justify-between text-black">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <ShoppingCart className="h-10 w-10" />
            <span className="font-bold inline-block">ShopNow</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/">Products</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2 justify-end">
          <Sheet>
              <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative pr-[8px]">
                  <ShoppingCart className="h-6 w-6" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 right-0 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                  <span className="sr-only">Shopping Cart</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="text-black">
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                  <SheetDescription>You have {cartItems.length} items in your cart</SheetDescription>
                </SheetHeader>
                <CartView />
                  <div className="flex flex-row justify-between mt-8">
                    <span className="font-bold mt-1">Total: ${cartTotal}</span>
                  <Button className="w-fit cursor-pointer" variant="outline">Proceed to Checkout</Button>
                  </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}

export default NavBar;