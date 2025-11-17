"use client"

import React, { useEffect, useState } from 'react';

import { Search, SlidersHorizontal, Grid3x3, LayoutGrid, ChevronDown, X } from 'lucide-react';
import ProductCard from '../Components/ProductCard/ProductCard';
import SearchBox from '../Components/SearchBox/SearchBox';
import CategoryFilter from '../Components/CategoryFilter/CategoryFilter';
import ClearFilterButton from '../Components/Buttons/ClearFilterButton';
import PaginationSection from '../Components/Pagination/PaginationSection';

const PRODUCTS_PER_PAGE = 12;


export default function MakeupPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid"); // grid or large-grid

  useEffect(() => {
    setMounted(true);
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        console.log(data);
        setAllProducts(data.products);
        const uniqueCategories = [...new Set(data?.products?.map(p => p.category).filter(Boolean))];
        setCategories(['All', ...uniqueCategories]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  if (!mounted) return null;

  // Filter by category and search
  const filteredProducts = allProducts?.filter(
    p =>
      (activeCategory === "All" || p.category === activeCategory) &&
      (p.name.toLowerCase().includes(search.toLowerCase()) ||
        (p.brand && p.brand.toLowerCase().includes(search.toLowerCase())))
  );

  // Sort products
  let sortedProducts = [];
  if (filteredProducts?.length > 0) {
    console.log("No products found");
    sortedProducts = [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price) - parseFloat(b.price);
        case 'price-high':
          return parseFloat(b.price) - parseFloat(a.price);
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );



  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 min-h-screen">

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-r from-pink-100 to-pink-200 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-pink-600 dark:text-pink-400 font-semibold text-sm">SHOP COLLECTION</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 to-pink-700 dark:from-pink-400 dark:to-pink-600 bg-clip-text text-transparent">
            Discover Your Perfect Look
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Browse our curated collection of premium makeup products designed to enhance your natural beauty
          </p>
        </div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-pink-300/30 dark:bg-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-pink-400/30 dark:bg-pink-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Search & Filter Bar */}
      <SearchBox sortedProducts={sortedProducts} />

      {/* Categories Filter */}
      <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} setCurrentPage={setCurrentPage} categories={categories} showFilters={showFilters} />

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {paginatedProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 dark:bg-pink-900/30 rounded-full mb-4">
              <Search className="w-10 h-10 text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No products found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <ClearFilterButton />
          </div>
        ) : (
          <div className={`grid gap-6 ${viewMode === 'grid'
            ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}>
            {paginatedProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <PaginationSection totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}

    </div>
  );
}