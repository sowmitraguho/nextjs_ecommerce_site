import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function CardButton({ id }) {
    const router = useRouter();
    return (
        <Button
            variant="outline"
            className="w-full sm:w-1/2 dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => router.push(`/products/${id}`)}
        >
            View Details
        </Button>
    )
}
