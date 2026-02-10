import Link from "next/link";
import Image from "next/image";
import { perfumeImages } from "./perfume";

export default function PerfumePage() {
  return (
    <div className="bg-white min-h-screen p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 uppercase tracking-widest text-gray-800">
          Featured Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {perfumeImages.map((p) => (
            <div key={p.id} className="group flex flex-col items-center">
              {/* Image Container with defined Height */}
              <div className="relative w-full h-80 bg-[#f9f9f9] rounded-2xl mb-6 overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-xl">
            
                <Link href={`/perfume/${p.id}`}>
                  <Image 
                    src={p.image} 
                    alt={p.name} 
                    fill 
                    sizes="(max-width: 768px) 80vw, 20vw"
                    className="object-contain p-8 group-hover:scale-110 transition-transform duration-700" 
                  />
                </Link>
              </div>

              {/* Product Info */}
              <div className="text-center space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">{p.name}</h2>
                
                {/* 5-Star Rating */}
                <div className="flex justify-center text-[#ffc107] text-lg">
                  ★★★★★
                </div>

                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl font-black text-black">${p.price}</span>
                </div>

                <button className="mt-4 text-sm font-bold uppercase tracking-tighter border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}