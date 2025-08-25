"use client"

import ProductCard from "../ProductCard/ProductCard";
import { useProduct } from "@/Context/ProductContext";


export default function FeaturedProducts() {

  const { featuredProducts } = useProduct();

  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-left text-pink-600 dark:text-pink-400 mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (<ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

       