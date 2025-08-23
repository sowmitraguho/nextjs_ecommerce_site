"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

// const topProducts = [
//   {
//     id: 1,
//     name: "Radiant Highlighter",
//     type: "Highlighter",
//     variant: "Golden Glow",
//     description: "Adds a radiant shine to your cheekbones and eyelids.",
//     price: "$22.99",
//     image: "https://shajgojgallery.com/wp-content/uploads/2024/12/IMAGIC-Lovers-Hug-Radiant-Highlighter.jpg",
//   },
//   {
//     id: 2,
//     name: "Matte Liquid Lipstick",
//     type: "Lipstick",
//     variant: "Berry Red",
//     description: "Long-lasting, highly pigmented liquid lipstick.",
//     price: "$19.50",
//     image: "https://luvit.com.bd/wp-content/uploads/2023/02/Flormar-Silk-Matte-Liquid-Lipstick-29-Warm-Rose.jpg",
//   },
//   {
//     id: 3,
//     name: "Velvet Blush",
//     type: "Blush",
//     variant: "Peach Pink",
//     description: "Soft and smooth blush with a natural finish.",
//     price: "$15.00",
//     image: "https://focallurebangladesh.com/wp-content/uploads/2025/01/51-x1hBdKgL._SL1000_.jpg",
//   },
//   {
//     id: 4,
//     name: "Precision Eyeliner",
//     type: "Eyeliner",
//     variant: "Intense Black",
//     description: "Waterproof and smudge-proof eyeliner for precise lines.",
//     price: "$13.99",
//     image: "https://www.ohsogo.com/cdn/shop/products/precision-eyeliner.png?v=1696414145&width=1500",
//   },
// ]

export default function TopProducts() {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
      const fetchProducts = async () => {
        try {
          const res = await fetch("/api/products")
          const data = await res.json()
          setTopProducts(data.topProducts)
        } catch (err) {
          console.error(err)
        }
      }
      fetchProducts()
    }, [])
  

  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-pink-600 dark:text-pink-400 mb-12">
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
