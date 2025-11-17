// "use client"

// import { use, useEffect, useState } from "react"
// import { useParams, useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import axios from "axios"
// import ProductDetailsCard from "./Components/ProductDetailsCard"



// export default function page({params}) {
//   const { id } = use(params);  
//   const router = useRouter();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       //console.log('Fetching product with id:', id, typeof(id));
//       try {
//         const res = await axios.get("/api/products");
//         const data = res.data
//         //console.log(data.products);
//         let prod = data?.products ? data.products.find((p) => p._id.toString() === id) : null;
//         if (!prod) {
//           prod = data?.topProducts?.find((p) => p._id.toString() === id) || null;
//         }
//         if (!prod) {
//           prod = data?.featureProducts?.find((p) => p._id.toString() === id) || null;
//         }
//         setProduct(prod)
//       } catch (err) {
//         console.error(err)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchProduct()
//   }, [id])


//   if (loading) return <p className="text-center py-20">Loading...</p>
//   if (!product) return <p className="text-center py-20">Product not found</p>

//   return (
//     <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-pink-100 dark:bg-gray-900">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <Button
//         onClick={() => router.back()}
//         className="mb-6 bg-pink-500 hover:bg-pink-600 text-white"
//       >
//         ← Back
//       </Button>
//       <ProductDetailsCard product={product} />
//     </div>
//     </section>
//   )
// }

"use client"

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  Loader2,
  AlertCircle,
  ShoppingBag,
  TrendingUp,
  Star,
  Heart
} from 'lucide-react';
import ProductDetailsCard from './Components/ProductDetailsCard';

// Mock ProductDetailsCard - replace with your actual component
// const ProductDetailsCard = ({ product }) => (
//   <Card className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl shadow-md bg-pink-50 dark:bg-gray-800">
//     <div className="flex-1 p-0">
//       <img
//         src={product.image_link || product.api_featured_image}
//         alt={product.name}
//         className="rounded-2xl w-full h-auto object-cover"
//       />
//     </div>
//     <div className="flex-1 flex flex-col justify-between">
//       <div>
//         <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
//           {product.name}
//         </h2>
//         <p className="text-pink-600 dark:text-pink-400 font-semibold mb-2">
//           {product.brand} - {product.category}
//         </p>
//         <p className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
//           {product.price_sign || "$"}{product.price}
//         </p>
//         <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>
//       </div>
//       <div className="flex gap-4 mt-6">
//         <Button className="bg-pink-500 hover:bg-pink-600 text-white flex-1">
//           Buy Now
//         </Button>
//         <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white flex-1">
//           Add to Cart
//         </Button>
//       </div>
//     </div>
//   </Card>
// );

export default function ProductDetailsPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        let prod = data?.products ? data.products.find((p) => p._id.toString() === params.id) : null;
        if (!prod) {
          prod = data?.topProducts?.find((p) => p._id.toString() === params.id) || null;
        }
        if (!prod) {
          prod = data?.featureProducts?.find((p) => p._id.toString() === params.id) || null;
        }

        setProduct(prod);

        // Get related products from same category
        if (prod && data?.products) {
          const related = data.products
            .filter(p => p.category === prod.category && p._id !== prod._id)
            .slice(0, 4);
          setRelatedProducts(related);
        }
      } catch (err) {
        console.error(err);
        // // Mock data for demo
        // setProduct({
        //   _id: params?.id || '1',
        //   name: "Premium Makeup Product",
        //   brand: "Luxury Beauty",
        //   category: "Lips",
        //   price: "24.99",
        //   price_sign: "$",
        //   description: "A premium beauty product designed to enhance your natural glow.",
        //   image_link: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500"
        // });
        // setRelatedProducts([
        //   {
        //     _id: '2',
        //     name: "Radiant Glow Foundation",
        //     brand: "Perfect Skin",
        //     category: "Face",
        //     price: "39.99",
        //     price_sign: "$",
        //     image_link: "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=500"
        //   },
        //   {
        //     _id: '3',
        //     name: "Smokey Eyes Palette",
        //     brand: "ColorMagic",
        //     category: "Eyes",
        //     price: "44.99",
        //     price_sign: "$",
        //     image_link: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500"
        //   }
        // ]);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [params?.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 dark:bg-pink-900/30 rounded-full mb-4">
            <Loader2 className="w-10 h-10 text-pink-500 animate-spin" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Loading Product
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Please wait while we fetch the details...
          </p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
            <AlertCircle className="w-10 h-10 text-red-500" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Product Not Found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Sorry, we couldn't find the product you're looking for. It may have been removed or is temporarily unavailable.
          </p>
          <Button
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-full px-8 py-3 font-semibold shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">

      {/* Header Section with Back Button */}
      <section className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => window.history.back()}
              variant="ghost"
              className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/30 group-hover:bg-pink-200 dark:group-hover:bg-pink-900/50 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="font-semibold">Back to Shopping</span>
            </Button>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="hidden sm:flex items-center gap-2 border-2 border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-600 rounded-full px-4 py-2"
              >
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Save</span>
              </Button>
              <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-full px-6 py-2 font-semibold shadow-lg">
                <ShoppingBag className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Continue Shopping</span>
                <span className="sm:hidden">Shop</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductDetailsCard product={product} />
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center text-white">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                You May Also Like
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Similar products in {product.category || 'this category'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct._id}
                className="group cursor-pointer overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-800">
                  <img
                    src={relatedProduct.image_link || relatedProduct.api_featured_image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4 space-y-2">
                  <p className="text-xs text-pink-600 dark:text-pink-400 font-bold uppercase">
                    {relatedProduct.brand}
                  </p>
                  <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2 text-sm">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
                          }`}
                      />
                    ))}
                  </div>
                  <p className="text-lg font-bold text-pink-600 dark:text-pink-400">
                    {relatedProduct.price_sign || "$"}{relatedProduct.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Trust Badges Section */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🚚", title: "Free Shipping", desc: "On orders over $50" },
              { icon: "🔒", title: "Secure Payment", desc: "100% secure checkout" },
              { icon: "↩️", title: "Easy Returns", desc: "30-day return policy" },
              { icon: "💬", title: "24/7 Support", desc: "Always here to help" }
            ].map((badge, idx) => (
              <div key={idx} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                <div className="text-4xl mb-3">{badge.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {badge.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {badge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Stay Updated with Latest Offers
          </h2>
          <p className="text-pink-50 mb-8 text-lg">
            Subscribe to get exclusive deals and beauty tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-4 focus:ring-pink-300 text-gray-900"
            />
            <Button className="bg-white text-pink-600 hover:bg-gray-100 rounded-full px-8 py-4 font-bold shadow-xl">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}