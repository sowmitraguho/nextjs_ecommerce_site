import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, Headphones } from 'lucide-react';
import Image from 'next/image';
import ContactForm from '../Components/ContactForm/ContactForm';

export default function ContactPage() {


  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "support@aurabeaute.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+8801551300300",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "11/12, Mirpur, Dhaka",
      description: "Bangladesh"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-pink-100 via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 min-h-screen">

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-pink-300/30 dark:from-pink-900/20 dark:to-pink-800/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-pink-200 dark:bg-pink-900/50 rounded-full px-6 py-2 mb-6">
            <span className="text-pink-800 dark:text-pink-200 font-semibold text-sm">GET IN TOUCH</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 to-pink-700 dark:from-pink-400 dark:to-pink-600 bg-clip-text text-transparent">
            We'd Love to Hear From You
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Have questions about our products? Need beauty advice? Our friendly team is here to help you shine.
          </p>
        </div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-300/20 dark:bg-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-400/20 dark:bg-pink-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Contact Methods Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl text-white mb-4 shadow-lg">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-pink-600 dark:text-pink-400 font-semibold mb-1">
                    {method.content}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {method.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}

            <ContactForm />

            {/* Right Section - Image & Info */}
            <div className="space-y-8">
              {/* Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <Image
                  src="https://i.ibb.co/fGGQPY26/woman-model-girl-makeup-telephone.jpg"
                  alt="Contact us"
                  width={600}
                  height={400}
                  className="relative w-full rounded-3xl shadow-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Additional Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Business Hours</h3>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Mon-Fri:</strong> 9:00 AM - 6:00 PM<br />
                    <strong>Sat:</strong> 10:00 AM - 4:00 PM<br />
                    <strong>Sun:</strong> Closed
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white">
                      <Headphones className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Support</h3>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    24/7 customer support available via email and chat
                  </p>
                </div>
              </div>

              {/* FAQ Highlight */}
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-2">Need Quick Answers?</h3>
                <p className="text-pink-50 mb-4">
                  Check out our FAQ page for instant solutions to common questions
                </p>
                <Button className="bg-white text-pink-600 hover:bg-pink-50 rounded-full px-6 py-2 font-semibold">
                  View FAQ
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Find Us on the Map
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                11/12, Mirpur, Dhaka, Bangladesh
              </p>
              <Button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-2">
                Open in Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}