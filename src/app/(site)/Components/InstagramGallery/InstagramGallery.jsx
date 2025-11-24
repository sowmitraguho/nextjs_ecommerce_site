import React from 'react'
import { Heart } from 'lucide-react';
export default function InstagramGallery() {
    const images = [
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500',
        'https://images.unsplash.com/photo-1631214499500-2e34edcaccfe?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500',
        'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500',
        'https://images.unsplash.com/photo-1515688594390-b649af70d282?w=500'
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-pink-300 via-pink-50 to-pink-300 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Follow Us On <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Instagram</span>
                    </h2>
                    <p className="text-gray-600">@aurabeaute • Tag us for a chance to be featured</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer"
                        >
                            <img
                                src={image}
                                alt={`Instagram post ${index + 1}`}
                                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Heart className="text-white w-8 h-8" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
