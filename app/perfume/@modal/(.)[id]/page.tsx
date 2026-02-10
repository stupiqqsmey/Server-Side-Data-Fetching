import Image from "next/image";
import Link from "next/link";
import { perfumeImages } from "../../perfume";

export default async function PerfumeModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = perfumeImages.find((p) => p.id === id);

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-6 animate-in fade-in duration-300">
      <div className="bg-white rounded-[2.5rem] max-w-4xl w-full shadow-2xl flex flex-col md:flex-row relative overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Yellow Close Button from your sample */}
        <Link href="/perfume" className="absolute top-8 right-8 z-20 bg-[#ffeb3b] text-black p-2 rounded-xl shadow-lg hover:rotate-90 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </Link>

        {/* Left Side: Large Image */}
        <div className="w-full md:w-1/2 bg-[#fafafa] p-16 flex items-center justify-center">
          <div className="relative w-full h-[400px]">
            <Image src={product.image} alt={product.name} fill className="object-contain" priority />
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/2 p-16 flex flex-col justify-center text-left">
          <h1 className="text-4xl font-black text-gray-900 mb-2">{product.name}</h1>
          <div className="text-[#ffc107] text-xl mb-6">★★★★★</div>
          
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Experience the luxury of Chanel. This premium fragrance offers a long-lasting, sophisticated scent.
          </p>

  
          <button className="w-full bg-black text-white py-5 rounded-2xl text-xl font-bold hover:bg-gray-800 transition-all shadow-xl active:scale-95">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}