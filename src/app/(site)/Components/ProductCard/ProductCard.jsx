'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { useRouter } from 'next/navigation';
//import { useRouter } from 'next/router';
import React from 'react'
import AddToCartButton from '../AddToCartButton/AddToCartButton';

export default function ProductCard({ product }) {
    const router = useRouter(); 
  

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
                {product.price_sign || "$"}{product.price}
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2 px-4 -mt-6">
              <AddToCartButton product={product} />
              <Button
                variant="outline"
                className="w-full sm:w-1/2 dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-700"
                onClick={() => router.push(`/products/${product._id}`)}
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
  );
}
