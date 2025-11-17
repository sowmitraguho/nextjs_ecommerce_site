"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Users, Award, TrendingUp, Shield } from 'lucide-react';

// Mock InviteForRegistration component
const InviteForRegistration = () => (
  <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-pink-500 to-pink-600 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-photo/set-decorative-cosmetics-brushes-black_106029-725.jpg')] bg-cover bg-center opacity-20"></div>
    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Join Our Beauty Community
      </h2>
      <p className="text-pink-50 max-w-xl mx-auto mb-6">
        Subscribe to get the latest updates on our products, exclusive deals, and beauty tips delivered to your inbox.
      </p>
      <Button className="bg-white text-pink-600 hover:bg-pink-50 rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
        Subscribe Now
      </Button>
    </div>
  </section>
);

export default function AboutPage() {
    const values = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Cruelty-Free",
            description: "We never test on animals and partner only with ethical brands"
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Premium Quality",
            description: "Handpicked products that deliver exceptional results"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Inclusive Beauty",
            description: "Products for all skin tones, types, and preferences"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Trusted Brands",
            description: "Partnering with the world's leading beauty innovators"
        }
    ];

    const stats = [
        { number: "500K+", label: "Happy Customers" },
        { number: "2000+", label: "Products Available" },
        { number: "50+", label: "Premium Brands" },
        { number: "99%", label: "Satisfaction Rate" }
    ];

    return (
        <div className="bg-gradient-to-br from-pink-100 via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 min-h-screen">

            {/* Hero Section - Enhanced */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-pink-300/30 dark:from-pink-900/20 dark:to-pink-800/20"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-block bg-pink-200 dark:bg-pink-900/50 rounded-full px-6 py-2 mb-6">
                        <span className="text-pink-800 dark:text-pink-200 font-semibold text-sm">OUR STORY</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 to-pink-700 dark:from-pink-400 dark:to-pink-600 bg-clip-text text-transparent">
                        Beauty That Empowers
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        We're not just selling makeup—we're building a movement where everyone feels confident, beautiful, and empowered to express their unique style.
                    </p>
                </div>
                <div className="absolute top-10 right-10 w-32 h-32 bg-pink-300/20 dark:bg-pink-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-400/20 dark:bg-pink-500/20 rounded-full blur-3xl"></div>
            </section>

            {/* Stats Section - New */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-pink-700 dark:from-pink-400 dark:to-pink-600 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section - Redesigned */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <img
                                src="https://eyesarethestory.com/cdn/shop/files/eyesarethestory-collection_600x.png?v=1718632310"
                                alt="Our Story"
                                className="relative w-full h-[500px] rounded-3xl shadow-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>

                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-900/30 rounded-full px-4 py-2">
                                <TrendingUp className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                                <span className="text-pink-700 dark:text-pink-300 font-semibold text-sm">EST. 2020</span>
                            </div>
                            
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                                Where It All <span className="bg-gradient-to-r from-pink-500 to-pink-700 dark:from-pink-400 dark:to-pink-600 bg-clip-text text-transparent">Began</span>
                            </h2>
                            
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                <p>
                                    What started as a simple dream has blossomed into a thriving beauty destination trusted by thousands. We began with a clear vision: <strong className="text-pink-600 dark:text-pink-400">make high-quality, cruelty-free makeup accessible to everyone.</strong>
                                </p>
                                <p>
                                    Today, we've partnered with the world's most innovative beauty brands, carefully curating every product to ensure it meets our rigorous standards for quality, performance, and ethics.
                                </p>
                                <p>
                                    Our journey is just beginning, and we're honored to have you as part of our growing community.
                                </p>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                                    Shop Now
                                </Button>
                                <Button variant="outline" className="border-2 border-pink-500 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-full px-6 py-3">
                                    Learn More
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Our Values Section - New */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            What We <span className="bg-gradient-to-r from-pink-500 to-pink-700 dark:from-pink-400 dark:to-pink-600 bg-clip-text text-transparent">Stand For</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Our values guide everything we do, from product selection to customer service
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <div className="relative bg-pink-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl text-white mb-4 shadow-lg">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section - Redesigned */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-900/30 rounded-full px-4 py-2">
                                <Shield className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                                <span className="text-pink-700 dark:text-pink-300 font-semibold text-sm">OUR MISSION</span>
                            </div>
                            
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                                Inspiring Confidence <span className="bg-gradient-to-r from-pink-500 to-pink-700 dark:from-pink-400 dark:to-pink-600 bg-clip-text text-transparent">Through Beauty</span>
                            </h2>
                            
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                <p>
                                    We exist to <strong className="text-pink-600 dark:text-pink-400">inspire confidence through beauty.</strong> Every product we offer is chosen with care, ensuring it's cruelty-free, high-performance, and designed to help you express your authentic self.
                                </p>
                                <p>
                                    We celebrate diversity, champion sustainability, and embrace innovation. Our commitment goes beyond selling products—we're building a community where everyone belongs.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div className="space-y-2">
                                    <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">100%</div>
                                    <div className="text-gray-600 dark:text-gray-400">Cruelty-Free Products</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">24/7</div>
                                    <div className="text-gray-600 dark:text-gray-400">Customer Support</div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <img
                                src="https://www.gaiaherbs.com/cdn/shop/articles/jessica-johnston-Kuaf9ch8wiw-unsplash_1_1.jpg?v=1696823724&width=900"
                                alt="Our Mission"
                                className="relative w-full h-[500px] rounded-3xl shadow-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Timeline Section - New */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-white dark:from-gray-900 dark:to-gray-950">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Our <span className="bg-gradient-to-r from-pink-500 to-pink-700 dark:from-pink-400 dark:to-pink-600 bg-clip-text text-transparent">Journey</span>
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {[
                            { year: "2020", title: "The Beginning", desc: "Founded with a vision to democratize premium beauty" },
                            { year: "2021", title: "Rapid Growth", desc: "Reached 100K+ customers and expanded our product range" },
                            { year: "2023", title: "Going Global", desc: "Launched international shipping to 50+ countries" },
                            { year: "2025", title: "Innovation First", desc: "Introduced AI-powered shade matching technology" }
                        ].map((milestone, index) => (
                            <div key={index} className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 w-24 text-right">
                                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 dark:from-pink-400 dark:to-pink-600 bg-clip-text text-transparent">
                                        {milestone.year}
                                    </div>
                                </div>
                                <div className="relative flex-shrink-0">
                                    <div className="w-4 h-4 bg-pink-500 rounded-full ring-4 ring-pink-200 dark:ring-pink-900"></div>
                                    {index < 3 && <div className="absolute top-4 left-2 w-0.5 h-16 bg-pink-300 dark:bg-pink-800"></div>}
                                </div>
                                <div className="flex-1 pb-8">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{milestone.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <InviteForRegistration />

        </div>
    );
}