import { Product } from "../types";
import ProductCard from "./ProductCard";


type Props = {
    products: Product[];
};

const ProductList = ({ products }: Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
};

export default ProductList