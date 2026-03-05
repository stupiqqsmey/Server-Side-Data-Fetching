import { ProductRequest } from "../types/product-response";

//fetch data from API products
const baseApi = process.env.NEXT_PUBLIC_API;

export default async function Products(){
    const res = await fetch(`${baseApi}/api/v1/products`,{
        method:"GET",
        headers:{
            "Content-Type":"applciation/json"
        }
    })
    const data = await res.json();
    return data;
}

export async function AddProduct(product:ProductRequest){
    const data = await fetch(`${baseApi}/api/v1/products`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(product)
    })
    return await data.json();
}

