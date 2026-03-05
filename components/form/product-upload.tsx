"use client";

import React, { use, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, PackagePlus, RotateCcw } from "lucide-react";

import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { CategoryType } from "@/lib/types/category-response";
import { ProductRequest } from "@/lib/types/product-response";
import { AddProduct } from "@/lib/data/product";
import { UploadImage } from "@/lib/data/images";
import ImagesUpload from "./images-form";

const formSchema = z.object({
  title: z
    .string()
    .min(0, "Product title must be at least 5 characters long."),
  price: z.coerce.number().min(1, "Price must be greater than 0"),
  description: z
    .string()
    .min(5, "Description must be at least 5 characters long."),
  categoryId: z.string().min(1, "Please select a category"),
  images: z.array(z.any()).min(1, "At least one image is required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ProductUpload({
  categories,
}: {
  categories: Promise<CategoryType[]>;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const resolvedCategories = use(categories);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      categoryId: "",
      images: [],
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      // 1. Upload Image first
      const imageFormData = new FormData();
      imageFormData.append("file", values.images[0]);
      const uploadRes = await UploadImage(imageFormData);

      // 2. Insert Product
      const productData: ProductRequest = {
        ...values,
        images: [uploadRes.location],
      };

      const resData = await AddProduct(productData);
      console.log(productData)
      
      if (resData?.id) {
        form.reset();
        alert("Product created successfully!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong during upload.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-card rounded-xl border shadow-sm">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Create New Product</h1>
        <p className="text-muted-foreground text-sm">Fill in the details below to list your product.</p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Details */}
          <div className="space-y-6">
            <Controller
              control={form.control}
              name="title"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Product Name</FieldLabel>
                  <Input placeholder="e.g. Wireless Headphones" {...field} />
                  {fieldState.error && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
               <Controller
                control={form.control}
                name="categoryId"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Category</FieldLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {resolvedCategories.map((c) => (
                          <SelectItem key={c.id} value={c.id.toString()}>
                            {c.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.error && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                control={form.control}
                name="price"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Price ($)</FieldLabel>
                    <Input type="number" placeholder="0.00" {...field} />
                    {fieldState.error && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>

            <Controller
              control={form.control}
              name="description"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Description</FieldLabel>
                  <Textarea 
                    placeholder="Tell us about the product features..." 
                    className="min-h-[120px] resize-none" 
                    {...field} 
                  />
                  {fieldState.error && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </div>

          {/* Right Column: Media */}
          <div className="space-y-6">
            <Controller
              control={form.control}
              name="images"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Product Images</FieldLabel>
                  <div className="mt-1">
                    <ImagesUpload
                      value={field.value}
                      onImagesChange={field.onChange}
                    />
                  </div>
                  {fieldState.error && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 pt-4 border-t">
          <Button 
            type="button" 
            variant="ghost" 
            onClick={() => form.reset()}
            disabled={isSubmitting}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button 
            type="submit" 
            className="min-w-[140px]" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <PackagePlus className="w-4 h-4 mr-2" />
            )}
            {isSubmitting ? "Uploading..." : "Publish Product"}
          </Button>
        </div>
      </form>
    </div>
  );
}