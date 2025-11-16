import React from 'react';
import { Sparkles, Heart, Leaf, ShieldCheck } from 'lucide-react';
// 2. Brand Values Section
export default function BrandValuesSection() {
    const values = [
        {
            icon: <Leaf className="w-8 h-8" />,
            title: 'Natural Ingredients',
            description: 'Powered by nature, perfected by science'
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: 'Cruelty Free',
            description: 'Never tested on animals, always ethical'
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: 'Dermatologist Tested',
            description: 'Safe for all skin types, clinically proven'
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: 'Premium Quality',
            description: 'Luxury products at accessible prices'
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-pink-300 via-pink-50 to-pink-300 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Why Choose <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Us</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 dark:bg-gray-800"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full text-white mb-4">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-gray-100">{value.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};