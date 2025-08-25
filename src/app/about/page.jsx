"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import InviteForRegistration from "../Components/InviteForRegistration/InviteForRegistration"

export default function AboutPage() {
    return (
        <div className="bg-gradient-to-r from-pink-100 via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 min-h-screen">

            {/* --- Hero Section --- */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-pink-600 dark:text-pink-400">
                    About Us
                </h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
                    Discover who we are and why we’re passionate about providing premium beauty products
                    for everyone. Our mission is to empower confidence and creativity.
                </p>
            </section>

            {/* --- Our Story Section --- */}
            <section className="bg-gradient-to-r from-pink-100 via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">

                    {/* --- Left Side Image --- */}
                    <div className="flex-1">
                        <img
                            src="https://eyesarethestory.com/cdn/shop/files/eyesarethestory-collection_600x.png?v=1718632310"
                            alt="Our Story"
                            className="w-full h-auto rounded-2xl shadow-lg object-cover"
                        />
                    </div>

                    {/* --- Right Side Card --- */}
                    <div className="flex-1">
                        <Card className="rounded-2xl shadow-lg bg-pink-50 dark:bg-gray-800">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                                    Our Story
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4 text-justify">
                                <p>
                                    We started with a vision to make high-quality, cruelty-free makeup accessible
                                    to everyone. Over the years, we’ve grown into a trusted platform offering a
                                    wide range of products tailored for all skin tones and preferences.
                                </p>
                                <p>
                                    Partnering with top beauty brands, we carefully curate our collection to ensure
                                    each product delivers outstanding performance, quality, and value.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </section>


            {/* --- Mission Section --- */}
            <section className=" bg-gradient-to-r from-pink-100 via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
                    <Card className="flex-1 rounded-2xl shadow-lg bg-pink-50 dark:bg-gray-800">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                                Our Mission
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 dark:text-gray-300 space-y-4 text-justify">
                            <p>
                                Our mission is to inspire confidence through beauty. We provide premium, cruelty-free,
                                and high-performance products that empower self-expression and creativity.
                            </p>
                            <p>
                                We value diversity, sustainability, and innovation, continually expanding our offerings
                                to meet the needs and desires of our customers.
                            </p>
                        </CardContent>
                    </Card>
                    {/* --- Left Side Image --- */}
                    <div className="flex-1">
                        <img
                            src="https://www.gaiaherbs.com/cdn/shop/articles/jessica-johnston-Kuaf9ch8wiw-unsplash_1_1.jpg?v=1696823724&width=900"
                            alt="Our Story"
                            className="w-full h-auto rounded-2xl shadow-lg object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* --- Call to Action Section --- */}
            {/* <section className=" py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-pink-100 via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 bg-[url('https://img.freepik.com/premium-photo/set-decorative-cosmetics-brushes-black_106029-725.jpg')] bg-cover bg-center bg-no-repeat relative">
                <div className="absolute inset-0 bg-black/10 dark:bg-black/40"></div>
                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-4">
                        Join Our Community
                    </h2>
                    <p className="text-gray-100 dark:text-gray-100 max-w-xl mx-auto mb-6">
                        Subscribe to get the latest updates on our products, exclusive deals, and beauty tips.
                    </p>
                    <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-3">
                        Subscribe Now
                    </Button>
                </div>
            </section> */}
            <InviteForRegistration />
        </div>
    )
}
