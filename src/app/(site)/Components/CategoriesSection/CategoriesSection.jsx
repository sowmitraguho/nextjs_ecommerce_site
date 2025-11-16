import React from 'react';
export default function CategoriesSection() {
    const categories = [
        {
            name: 'Lips',
            image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500',
            count: '120+ products'
        },
        {
            name: 'Eyes',
            image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500',
            count: '200+ products'
        },
        {
            name: 'Face',
            image: 'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=500',
            count: '150+ products'
        },
        {
            name: 'Tools',
            image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=500',
            count: '80+ products'
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-pink-300 via-pink-50 to-pink-300 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Shop By <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Category</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Find exactly what you need for your perfect look
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="aspect-square">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-white text-xl font-bold mb-1">{category.name}</h3>
                                <p className="text-pink-300 text-sm">{category.count}</p>
                            </div>
                            <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/20 transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};