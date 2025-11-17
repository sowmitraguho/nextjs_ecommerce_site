'use client';
import { SlidersHorizontal } from 'lucide-react'
import React, { useState } from 'react'

export default function CategoryFilter({ setCurrentPage, categories, showFilters, activeCategory, setActiveCategory }) {


    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    return (
        <section className={`${showFilters || 'hidden md:block'} bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center gap-3 mb-4">
                    <SlidersHorizontal className="w-5 h-5 text-pink-500" />
                    <h3 className="font-bold text-gray-900 dark:text-white">Filter by Category</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${cat === activeCategory
                                ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg transform scale-105'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}
