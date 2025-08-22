"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Velvet Matte Lipstick",
    type: "Lipstick",
    variant: "Crimson Red",
    description: "Long-lasting matte finish with a smooth texture for everyday wear.",
    price: "$18.99",
    image: "https://bazaarica.com/wp-content/uploads/2024/06/10024051_01jpgheight475width475.jpeg"
  },
  {
    id: 2,
    name: "Glow Foundation",
    type: "Foundation",
    variant: "Warm Beige",
    description: "Lightweight foundation that blends seamlessly for a natural glow.",
    price: "$29.99",
    image: "https://www.revolutionbeauty.com/dw/image/v2/BCZJ_PRD/on/demandware.static/-/Sites-revbe-master-catalog/default/dw07c4b483/images/hi-res/Conceal%20&%20Glow%20Master%20Image.jpg"
  },
  {
    id: 3,
    name: "Silky Smooth Eyeliner",
    type: "Eyeliner",
    variant: "Jet Black",
    description: "Waterproof and smudge-proof eyeliner for all-day wear.",
    price: "$12.50",
    image: "https://m.media-amazon.com/images/I/61ET664T76L._UF894,1000_QL80_.jpg"
  },
  {
    id: 4,
    name: "Luxury Blush Palette",
    type: "Blush",
    variant: "Rose Pink",
    description: "Highly pigmented blush palette with a silky smooth texture.",
    price: "$24.00",
    image: "https://m.media-amazon.com/images/I/71nIwFSrmqL._UF1000,1000_QL80_.jpg"
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-12 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col rounded-2xl shadow-md hover:shadow-lg transition">
              <CardHeader className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={300}
                  className="rounded-t-2xl h-56 w-full object-cover"
                />
              </CardHeader>
              <CardContent className="p-4 flex-1">
                <CardTitle className="text-lg font-semibold text-gray-800">{product.name}</CardTitle>
                <p className="text-sm text-pink-500 font-medium">{product.type} - {product.variant}</p>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                <p className="text-lg font-bold text-pink-600 mt-3">{product.price}</p>
              </CardContent>
              <CardFooter className="flex justify-between gap-2 p-4">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white w-1/2">Add to Cart</Button>
                <Button variant="outline" className="w-1/2">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
