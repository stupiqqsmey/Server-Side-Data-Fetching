"use client";

import { ProductResponse } from "@/lib/types/product-response";
import { use } from "react";
import { CardProduct } from "@/components/i-card/product-card";

export default function ProductListClient({
  fetchProducts,
}: {
  fetchProducts: Promise<ProductResponse[]>;
}) {
  const products = use(fetchProducts);
  return (
    <div className="pt-20 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4   ">
      {products.map((product: ProductResponse) => (
        <CardProduct
          key={product.id}
          images={[product.images[0]]}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}
