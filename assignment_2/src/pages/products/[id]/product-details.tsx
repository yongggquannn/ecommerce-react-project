"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "../../../components/ui/button";
import { Progress } from "../../../components/ui/progress";
import { ArrowLeft } from "lucide-react";
import { Product } from "../../../types";
import { getProduct } from "../../../products-service";
import ProductDetailsCard from "../../../components/ProductDetailsCard";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product>();
  const [progress, setProgress] = React.useState(13);

  useEffect(() => {
    if (id) {
      getProduct(id as string).then((product) => {
        setProduct(product);
      });
    }
  }, [id]);

  useEffect(() => {
    if (product) {
      const timer = setTimeout(() => setProgress(66), 500)
      return () => clearTimeout(timer)
    }
  }, [product]);

  return (
    <div className="mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-4" onClick={() => router.push("/")}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Button>
      {!product ? (
        <div className="flex justify-center items-center h-screen">
          <Progress className="w-[300px]" value={progress} max={100} />
        </div>
      ) : (
        <ProductDetailsCard product={product as Product} />
      )}
    </div>
  );
};

export default ProductDetails;
