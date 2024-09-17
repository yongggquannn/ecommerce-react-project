import React from "react";
import { Product } from "../types";
import { useCart } from "../cart-context";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
    product: Product;
}

const ProductCard = ({ product }: Props) => {
    const { addToCart } = useCart();
    const router = useRouter();
  
    const handleAddToCartClick = (product: Product) => {
      addToCart(product);
    };

    return (
        <Card className="flex flex-col justify-between">
          <Link href={`/products/${product?.id}/product-details`}>
          <CardHeader>
            <img
              alt={product.title}
              className="aspect-square object-cover w-full rounded-md"
              height={300}
              src={product.image}
              width={300}
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-lg">{product.title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">{product.description}</p>
          </CardContent>
          </Link>
          <CardFooter className="flex justify-between mt-auto">
            <span className="font-bold text-lg">${product.price}</span>
            <Button size="sm" onClick={() => handleAddToCartClick(product)}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to cart
            </Button>
          </CardFooter>
        </Card>
      );
    };
    
    export default ProductCard;
