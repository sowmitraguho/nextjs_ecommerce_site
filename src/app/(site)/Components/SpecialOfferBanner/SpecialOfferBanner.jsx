import React from 'react'

export default function SpecialOfferBanner() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-pink-600">
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-black/20 backdrop-blur-sm p-12 text-center">
                    <div className="relative z-10">
                        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
                            <span className="text-white font-semibold text-sm">LIMITED TIME OFFER</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
                            Get 30% Off Your First Order
                        </h2>
                        <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">
                            Sign up today and receive an exclusive discount on your first purchase
                        </p>
                        <button className="bg-white text-pink-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            Claim Your Discount
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
                </div>
            </div>
        </section>
    )
}
