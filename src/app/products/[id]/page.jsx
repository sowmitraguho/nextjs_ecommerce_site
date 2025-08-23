"use client"

import { use, useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import axios from "axios"

export default function page({params}) {
  const { id } = use(params);  
  const router = useRouter()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      //console.log('Fetching product with id:', id, typeof(id));
      try {
        const res = await axios.get("/api/products");
        const data = res.data
        //console.log(data.products);
        let prod = data?.products ? data.products.find((p) => p._id.toString() === id) : null;
        if (!prod) {
          prod = data?.topProducts?.find((p) => p._id.toString() === id) || null;
        }
        if (!prod) {
          prod = data?.featureProducts?.find((p) => p._id.toString() === id) || null;
        }
        setProduct(prod)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) return <p className="text-center py-20">Loading...</p>
  if (!product) return <p className="text-center py-20">Product not found</p>

  return (
    <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-pink-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Button
        onClick={() => router.back()}
        className="mb-6 bg-pink-500 hover:bg-pink-600 text-white"
      >
        ← Back
      </Button>

      <Card className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl shadow-md dark:bg-gray-800">
        {/* Product Image */}
        <CardHeader className="flex-1 p-0">
          <img
            src={product.image_link || product.api_featured_image}
            alt={product.name}
            className="rounded-2xl w-full h-auto object-cover"
          />
        </CardHeader>

        {/* Product Details */}
        <CardContent className="flex-1">
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {product.name}
          </CardTitle>

          <p className="text-pink-600 dark:text-pink-400 font-semibold mb-2">
            {product.brand} - {product.category}
          </p>

          <p className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            {product.price_sign || "$"}
            {product.price}
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>

          {/* Tags */}
          {product.tag_list && product.tag_list.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tag_list.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-800 dark:bg-pink-800 dark:text-pink-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Colors */}
          {product.product_colors && product.product_colors.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Colors:</h3>
              <div className="flex flex-wrap gap-2">
                {product.product_colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border border-gray-300"
                    title={color.colour_name}
                    style={{ backgroundColor: color.hex_value }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-4 mt-6">
            <Button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full"
            >
              Buy Now
            </Button>
            <Button className="px-6 py-3 border bg-white border-pink-500 text-pink-500 hover:bg-rose-500 hover:text-white rounded-full"
            >
              Add To Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </section>
  )
}
