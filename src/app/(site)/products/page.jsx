"use client"

import { useEffect, useState } from "react"
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
import ProductCard from "../Components/ProductCard/ProductCard"

const PRODUCTS_PER_PAGE = 12

export default function MakeupPage() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState("All")
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
        //console.log('data', data);
        setProducts(data.products)

        const uniqueCategories = [...new Set(data.products.map(p => p.category).filter(Boolean))]
        setCategories(['All', ...uniqueCategories])
        //setActiveCategory(uniqueCategories[0] || "")
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
    <div className="bg-gradient-to-r from-pink-200 via-pink-100 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900   text-gray-900 dark:text-gray-100">

      {/* --- Hero --- */}
      <section className="bg-gradient-to-r from-pink-200 via-pink-100 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-pink-400">
            Explore Our Makeup Collection
          </h1>
          <p className="text-lg sm:text-xl dark:text-pink-200 max-w-2xl mx-auto text-pink-700">
            Browse premium beauty products by category.
          </p>
        </div>
      </section>

      {/* --- Search --- */}
      <div className="max-w-7xl mx-auto flex items-center justify-center py-6 ">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {paginatedProducts.map(product => (<ProductCard key={product._id} product={product} />
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
