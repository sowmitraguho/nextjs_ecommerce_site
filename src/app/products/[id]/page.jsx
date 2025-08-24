"use client"

import { use, useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import axios from "axios"
import ProductDetailsCard from "./Components/ProductDetailsCard"
import { useCart } from "@/Context/CartContext"
import { useSession } from "next-auth/react"


export default function page({params}) {
  const { id } = use(params);  
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <ProductDetailsCard product={product} />
    </div>
    </section>
  )
}
