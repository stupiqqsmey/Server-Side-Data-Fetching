// app/perfume/[id]/page.tsx
import { perfumeImages } from "../perfume";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function FullPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = perfumeImages.find((p) => p.id === id);
  if (!item) notFound();

  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
        <Image src={item.image} alt={item.name} width={500} height={500} className="object-contain" priority />
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">{item.name}</h1>
          <p className="text-2xl text-gray-600 mb-8 font-bold">$749.00</p>
          <button className="bg-black text-white px-8 py-4 rounded-xl">Purchase Now</button>
        </div>
      </div>
    </div>
  );
}