"use client"
import { CardProduct } from "@/components/i-card/product-card";
import { ProductResponse } from "@/lib/types/type";
import Link from "next/link";
import { use } from "react";

//create function to get data from API

const BASE_URL = process.env.NEXT_PUBLIC_API;

export async function loadProduct() {
  const response = await fetch(`${BASE_URL}/api/v1/products`, {
    method: "GET",
    headers: {},
  });

  const data = await response.json();
  return data;
}

export async function getProductById(id: number) {
  const response = await fetch(`${BASE_URL}/api/v1/products/${id}`, {
    method: "GET",
    headers: {},
  });

  const product = await response.json();
  return product;
}

export default function ProductList({fetchProducts}:{fetchProducts: Promise<ProductResponse[]>}) {
  const products: ProductResponse[] = use(fetchProducts);

  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4  px-8 py-4 gap-4">
        {products.map((product, index) => (
          <Link href={`/products/${product.id}`} key={index}>
            <CardProduct
              key={index}
              images={product.images}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
