import Head from "next/head";
import  ProductList  from "../components/ProductList";
import { getCategories, getProducts } from "../products-service";
import { Product } from "../types";
import ProductsCategories from "../components/ProductCategories";
type Props = {
  products: Product[];
  categories: string[];
};

export default function Home({ products, categories }: Props) {
  return (
    <>
      <Head>
        <title>Product List</title>
        <meta
          name="description"
          content="Discover the best deals and shop for your favorite products at our online store. With a wide range of categories and brands, our eCommerce app makes shopping easy and convenient. Get free shipping on orders over $50 and enjoy hassle-free returns. Download our app now and start shopping!"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
        <ProductsCategories categories={categories} />
        <ProductList products={products} />
    </>
  );
}

export async function getStaticProps() {
  const products: Product[] = await getProducts();
  const categories: string[] = await getCategories();
  return {
    props: {
      products,
      categories,
    },
  };
}