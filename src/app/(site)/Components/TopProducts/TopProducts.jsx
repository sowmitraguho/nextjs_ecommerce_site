"use client"

import ProductCard from "../ProductCard/ProductCard";
import { useProduct } from "@/Context/ProductContext";


export default function TopProducts() {
  const { topProducts } = useProduct();


  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-left text-pink-600 dark:text-pink-400 mb-12">
          Top Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topProducts.map((product) => (<ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
