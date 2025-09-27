"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize] = useState(10) // Number of products per page
  const router = useRouter()

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products")
        const data = await res.json()
        setProducts(data.products || [])
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  // Delete product
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return
    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" })
      if (res.ok) {
        setProducts(products.filter((p) => p._id !== id))
      } else {
        console.error("Failed to delete product")
      }
    } catch (error) {
      console.error(error)
    }
  }

  // Pagination calculations
  const totalPages = Math.ceil(products.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedProducts = products.slice(startIndex, endIndex)

  return (
    <div className="p-6  bg-pink-50 dark:bg-gray-900 rounded-md border border-pink-300  dark:border-gray-700">
      <h1 className="text-4xl text-pink-600 text-center font-bold mb-6">All Products</h1>

      {loading ? (
        <div className="space-y-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow className=" border-b-pink-500">
                <TableHead>Name</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Added Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedProducts.map((product) => (
                <TableRow className=" border-b-pink-500" key={product._id}>
                  <TableCell className="font-semibold">{product.name}</TableCell>
                  <TableCell>
                    <img
                      src={product.image_link}
                      alt={product.name}
                      width={50}
                      height={50}
                      className="rounded-md"
                    />
                  </TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    {new Date(product.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => router.push(`/dashboard/updateProduct/${product._id}`)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination controls */}
          <div className="flex justify-center mt-4 gap-2 border border-t-pink-500 pt-4">
            <Button
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="border bg-white border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
            >
              Previous
            </Button>
            <span className="flex items-center px-2">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="border bg-white border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
