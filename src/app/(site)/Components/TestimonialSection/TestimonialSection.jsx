// 3. Testimonials Section
export default function TestimonialsSection() {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            rating: 5,
            text: 'Absolutely love the quality! The lipsticks stay on all day and the colors are stunning.',
            image: 'https://i.pravatar.cc/150?img=1'
        },
        {
            name: 'Emily Chen',
            rating: 5,
            text: 'Best makeup shop ever! Fast shipping and the products are exactly as described.',
            image: 'https://i.pravatar.cc/150?img=5'
        },
        {
            name: 'Maria Garcia',
            rating: 5,
            text: 'The foundation matches my skin perfectly. Finally found my go-to brand!',
            image: 'https://i.pravatar.cc/150?img=9'
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-pink-300 via-pink-50 to-pink-300 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">
                        What Our <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Customers Say</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Join thousands of happy customers who trust us for their beauty needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 dark:from-gray-800 dark:to-gray-900"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100">{testimonial.name}</h4>
                                    <div className="flex text-pink-500">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 italic dark:text-gray-300">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};