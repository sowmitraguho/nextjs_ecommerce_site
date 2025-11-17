'use client';
import React, { useState } from 'react'
import { Search, SlidersHorizontal, Grid3x3, LayoutGrid, ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function SearchBox({sortedProducts}) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("featured");
    const [showFilters, setShowFilters] = useState(false);
    const [viewMode, setViewMode] = useState("grid");
    const clearSearch = () => {
        setSearch("");
    };
    return (
        <section className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

                    {/* Search Bar */}
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products or brands..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-12 pr-12 py-3 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-pink-400 dark:focus:border-pink-500 transition-colors"
                        />
                        {search && (
                            <button
                                onClick={clearSearch}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-3">
                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-pink-400 dark:focus:border-pink-500 cursor-pointer text-sm font-medium"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="name">Name: A to Z</option>
                        </select>

                        {/* View Toggle */}
                        <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-full transition-colors ${viewMode === 'grid'
                                    ? 'bg-pink-500 text-white'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-pink-500'
                                    }`}
                            >
                                <Grid3x3 className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('large-grid')}
                                className={`p-2 rounded-full transition-colors ${viewMode === 'large-grid'
                                    ? 'bg-pink-500 text-white'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-pink-500'
                                    }`}
                            >
                                <LayoutGrid className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Filter Toggle */}
                        <Button
                            onClick={() => setShowFilters(!showFilters)}
                            className="md:hidden bg-pink-500 hover:bg-pink-600 text-white rounded-full px-4 py-2"
                        >
                            <SlidersHorizontal className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    Showing <span className="font-semibold text-pink-600 dark:text-pink-400">{sortedProducts.length}</span> products
                    {activeCategory !== "All" && (
                        <span> in <span className="font-semibold">{activeCategory}</span></span>
                    )}
                </div>
            </div>
        </section>
    )
}
