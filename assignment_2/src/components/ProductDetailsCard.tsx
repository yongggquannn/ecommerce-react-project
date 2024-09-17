import { Product } from "../types";
import { useCart } from "../cart-context";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";


interface Props {
  product: Product;
}

const ProductDetailsCard = ({ product }: Props) => {
    const { addToCart } = useCart();

    const handleAddToCart = (product: Product) => {
        addToCart(product);
    };

    return (
        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-md"
          />
        <div id="details">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <p className="text-white mb-6">{product.description}</p>
          <Button onClick={() => handleAddToCart(product)} className="w-full md:w-auto">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    );
};

export default ProductDetailsCard;