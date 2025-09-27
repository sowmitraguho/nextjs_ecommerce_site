//'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import CardButton from '../Buttons/CardButton';

export default function ProductCard({ product }) {

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
        <CardButton id={product._id} />
      </CardFooter>
    </Card>
  );
}
