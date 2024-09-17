import React from "react";
import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { LaptopMinimal, Gem, Shirt } from "lucide-react";


type Props = {
  categories: string[];
};

const ProductCategories = ({ categories }: Props) => {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`categories/${category}/products`);
  };

  const categoryIcon = (category: string) => {
    switch (category) {
      case "electronics":
        return <LaptopMinimal className="h-6 w-6" />;
      case "jewelery":
        return <Gem className="h-6 w-6" />;
      default:
        return <Shirt className="h-6 w-6" />;
    };
  };

  return (
    <section className="border-b">
      <div className="py-4 flex flex-col">
        <h2 className="flex text-lg font-semibold mb-4 justify-center md:justify-start">Categories</h2>
        <div className="flex flex-col justify-between items-center pt-[16px] md:flex-row text-black">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="h-auto w-[200px] mt-[16px] flex flex-col items-center justify-center"
              onClick={() => handleCategoryClick(category)}
            >
              {categoryIcon(category)}
              <span className="text-lg font-semibold text-black">{category}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;