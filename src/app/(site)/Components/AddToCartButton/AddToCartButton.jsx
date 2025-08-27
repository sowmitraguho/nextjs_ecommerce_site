'use client'

import { Button } from '@/components/ui/button';
import { useCart } from '@/Context/CartContext';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function AddToCartButton({ product }) {
    const router = useRouter();
    const { addToCart } = useCart();
    const { data: session } = useSession();
    const handleAddToCart = () => {
        if (!session) {
            router.push("/auth/signin");
        } else {
            addToCart(product);
        }
    };
    return (
        <Button onClick={handleAddToCart} className="bg-pink-500 hover:bg-pink-600 text-white w-full sm:w-1/2">
            Add to Cart
        </Button>
    )
}
