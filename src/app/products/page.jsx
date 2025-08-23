"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useRouter } from 'next/navigation'

const PRODUCTS_PER_PAGE = 10

export default function MakeupPage() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [mounted, setMounted] = useState(false)
  const [search, setSearch] = useState("")
  const router = useRouter();

  useEffect(() => {
    setMounted(true)
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products")
        const data = await res.json()
        console.log('data', data);
        setProducts(data.products)

        const uniqueCategories = [...new Set(data.products.map(p => p.category).filter(Boolean))]
        setCategories(['All', ...uniqueCategories])
        setActiveCategory(uniqueCategories[0] || "")
      } catch (err) {
        console.error(err)
      }
    }
    fetchProducts()
  }, [])

  if (!mounted) return null

  // Filter by category and search
  const filteredProducts = products.filter(
  p =>
    (activeCategory === "All" || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.brand && p.brand.toLowerCase().includes(search.toLowerCase())))
)

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  )

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setCurrentPage(1) // reset page when category changes
  }

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">

      {/* --- Hero --- */}
      <section className="bg-gradient-to-r from-pink-50 via-white to-pink-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Explore Our Makeup Collection
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Browse premium beauty products by category.
          </p>
        </div>
      </section>

      {/* --- Search --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* --- Categories --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-3">
        {categories.map(cat => (
          <Button
            key={cat}
            variant={cat === activeCategory ? "default" : "outline"}
            className="capitalize"
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* --- Products --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedProducts.map(product => (
          <Card key={product.id} className="flex flex-col rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 dark:bg-gray-800">
            <CardHeader className="p-0">
              <img
                src={product.image_link || product.api_featured_image}
                alt={product.name}
                className="rounded-t-2xl h-56 w-full object-cover"
              />
            </CardHeader>
            <CardContent className="p-4 flex-1">
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {product.name}
              </CardTitle>
              <p className="text-sm text-pink-500 dark:text-pink-400 font-medium">
                {product.category} - {product.brand}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {product.description?.slice(0, 70)}...
              </p>
              <p className="text-lg font-bold text-pink-600 dark:text-pink-400 mt-3">
                {product.price_sign || "$"}{product.price}
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2 p-4">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white w-full sm:w-1/2">
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-1/2 dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-700"
                onClick={() => router.push(`/products/${product._id}`)}
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* --- Pagination --- */}
      {totalPages > 1 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center">
          <Pagination currentpage={currentPage} totalpages={totalPages}>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i + 1} page={i + 1}>
                  <PaginationLink href="#" onClick={() => setCurrentPage(i + 1)}>
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}
