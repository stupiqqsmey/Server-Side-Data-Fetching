"use client"

import { CardProduct } from "@/components/i-card/product-card";
import { ProductResponse } from "@/lib/types/type";

//  create function to get data from api
const BASE_URL = process.env.NEXT_PUBLIC_API;

export default async function ProductsPage() {

    const res = await fetch(`${BASE_URL}/api/v1/products`);
    const products: ProductResponse[] = await res.json();
    return (
        <main className="container mx-auto">
            <section className="grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                    <CardProduct
                        key={product.id}
                        images={[product.images[0]]}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </section>
        </main>
    );
}