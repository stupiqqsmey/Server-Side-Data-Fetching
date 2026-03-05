import UploadProduct from "@/components/form/product-upload";
import { Categories
 } from "@/lib/data/categories";
import React from "react";

export default function CreateProduct() {
  const categories = Categories();
  return (
    <div className="container w-100 mx-auto">
      <UploadProduct categories={categories} />
    </div>
  );
}
