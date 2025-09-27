
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export default function ProductCardSkeleton() {
    return (
        <Card className="flex flex-col rounded-2xl shadow-md transition dark:bg-gray-800">
            <CardHeader className="p-0">
                <Skeleton
                    className="rounded-t-2xl h-56 w-full -mt-6"
                />
            </CardHeader>
            <CardContent className="px-4 flex-1 -mt-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-2" />
                <div className="mt-4 space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-[90%]" />
                </div>
                <Skeleton className="h-6 w-1/4 my-3" />
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2 px-4 -mt-6">
                <Skeleton className="h-10 w-full sm:w-1/2" />
                <Skeleton className="h-10 w-full sm:w-1/2" />
            </CardFooter>
        </Card>
    );
}