"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

// const products = [
//   {
//     id: 1,
//     name: "Velvet Matte Lipstick",
//     type: "Lipstick",
//     variant: "Crimson Red",
//     description: "Long-lasting matte finish with a smooth texture for everyday wear.",
//     price: "$18.99",
//     image: "https://bazaarica.com/wp-content/uploads/2024/06/10024051_01jpgheight475width475.jpeg",
//   },
//   {
//     id: 2,
//     name: "Glow Foundation",
//     type: "Foundation",
//     variant: "Warm Beige",
//     description: "Lightweight foundation that blends seamlessly for a natural glow.",
//     price: "$29.99",
//     image: "https://www.revolutionbeauty.com/dw/image/v2/BCZJ_PRD/on/demandware.static/-/Sites-revbe-master-catalog/default/dw07c4b483/images/hi-res/Conceal%20&%20Glow%20Master%20Image.jpg",
//   },
//   {
//     id: 3,
//     name: "Silky Smooth Eyeliner",
//     type: "Eyeliner",
//     variant: "Jet Black",
//     description: "Waterproof and smudge-proof eyeliner for all-day wear.",
//     price: "$12.50",
//     image: "https://m.media-amazon.com/images/I/61ET664T76L._UF894,1000_QL80_.jpg",
//   },
//   {
//     id: 4,
//     name: "Luxury Blush Palette",
//     type: "Blush",
//     variant: "Rose Pink",
//     description: "Highly pigmented blush palette with a silky smooth texture.",
//     price: "$24.00",
//     image: "https://m.media-amazon.com/images/I/71nIwFSrmqL._UF1000,1000_QL80_.jpg",
//   },
// ]

export default function FeaturedProducts() {
  const [featureProducts, setFeatureProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products")
        const data = await res.json()
        setFeatureProducts(data.featureProducts)
      } catch (err) {
        console.error(err)
      }
        }
        fetchProducts()
      }, [])
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-pink-600 dark:text-pink-400 mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureProducts.map((product) => (<ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

       