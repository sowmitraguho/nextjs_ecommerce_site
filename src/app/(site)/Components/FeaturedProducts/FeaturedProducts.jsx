"use client"

import ProductCard from "../ProductCard/ProductCard";
import { useProduct } from "@/Context/ProductContext";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";


export default function FeaturedProducts() {

  const { featuredProducts, loading } = useProduct();
  // const res = await fetch("/api/products")
  // const data = await res.json()
  //console.log('featured products ', featuredProducts);
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-pink-300 via-pink-50 to-pink-300 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-left text-pink-600 dark:text-pink-400 mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? [1, 2, 3, 4].map((_, index) => <ProductCardSkeleton key={index} />) :
            featuredProducts.map((product) => (<ProductCard key={product._id} product={product} />
            ))}
        </div>
      </div>
    </section>
  )
}

