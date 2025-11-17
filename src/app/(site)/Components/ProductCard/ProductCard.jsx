//'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import CardButton from '../Buttons/CardButton';
import { Star } from 'lucide-react';

export default function ProductCard({ product }) {
  //console.log(product)
  const rating = product.rating || 4.5;
  return (
    <Card key={product.id} className="flex flex-col rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 dark:bg-gray-800">
      <CardHeader className=" p-0">
        <img
          src={product.image_link || product.api_featured_image}
          alt={product.name}
          className="rounded-t-2xl h-56 w-full object-cover -mt-6"
        />
      </CardHeader>
      <CardContent className="px-4 flex-1 -mt-4">

        {/* Rating */}
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : i < rating
                    ? 'fill-yellow-200 text-yellow-400'
                    : 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700'
                  }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            ({rating})
          </span>
        </div>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {product.name}
        </CardTitle>
        <p className="text-sm text-pink-500 dark:text-pink-400 font-medium">
          {product.category} - {product.brand}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {product.description?.slice(0, 70)}...
        </p>
        <p className="text-lg font-bold text-pink-600 dark:text-pink-400 my-3">
          {product.price_sign || "$"}{product.price == "0.0" ? "20.00" : product.price}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2 px-4 -mt-6">
        <AddToCartButton product={product} />
        <CardButton id={product._id} />
      </CardFooter>
    </Card>
  );
}
