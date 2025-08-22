'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import React from 'react'

export default function ProductCard({ product }) {
  return (
    <Card className="flex flex-col h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover object-center"
        // Fallback for broken images
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x200/CCCCCC/666666?text=No+Image'; }}
      />
      <CardHeader className="p-4 pb-2 flex-grow">
        <CardTitle className="text-lg font-semibold leading-tight">{product.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mt-1">
          {product.variant}
        </CardDescription>
        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-xl font-bold text-foreground">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 p-4 pt-0">
        <Button className="w-full flex items-center gap-2">
          <ShoppingCart className="h-4 w-4" /> Add to Cart
        </Button>
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
