//'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

export default function DashboardCard({ product }) {

    return (
        <Card key={product.id} className="flex flex-col rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 dark:bg-gray-800">
            <CardContent className="px-4 flex-1 -mt-4">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {product.name}
                </CardTitle>
                <p className="text-sm text-pink-500 dark:text-pink-400 font-medium">
                    {product.category} - {product.brand}
                </p>
                <p className="text-lg font-bold text-pink-600 dark:text-pink-400 my-3">
                    {product.price_sign || "$"}{product.price}
                </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2 px-4 -mt-6">
            </CardFooter>
        </Card>
    );
}
