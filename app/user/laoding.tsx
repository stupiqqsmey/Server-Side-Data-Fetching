import { SkeletonCard } from "@/components/I-skeleton/skeletonCard";

export default function ProdcutsLaoding(){
    return(
        <main className="container m-auto">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
            </section>
        </main>
    )
}