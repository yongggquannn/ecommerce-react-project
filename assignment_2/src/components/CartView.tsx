import { CartItem } from "../types";
import { useCart } from "../cart-context";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";


export const CartView = () => {
  const { cartItems, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (productId: number, quantity: number) => {
    updateCartItemQuantity(productId, quantity);
  };

  return (
    <div className="mt-8">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.product.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{item.product.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    ${item.product.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span>{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
