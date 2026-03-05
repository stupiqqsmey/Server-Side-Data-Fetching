import { ProductResponse } from "@/lib/types/type";

// function to get product by id

async function getProductById(id: number){
    const data = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/products/${id}`);
    const product = await data.json();
    return product;
}
export default async function ProductDetail
({params,}: 
  { params: Promise<{ id: number }>}) {
    //  handle data from promise
    const{ id } = await params;
    const product : ProductResponse = await getProductById(id);

    return(
        <div className="container mx-auto">
            <h1>Product Detail Page</h1>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </div>
    )
}