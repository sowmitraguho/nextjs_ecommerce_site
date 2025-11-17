import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Star, 
  Check, 
  Package, 
  Shield, 
  Truck,
  ChevronLeft,
  ChevronRight,
  Info
} from 'lucide-react';

// Mock AddToCartButton component
const AddToCartButton = ({ product }) => (
  <Button className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-xl font-semibold text-lg py-6 shadow-lg hover:shadow-xl transition-all">
    <ShoppingCart className="w-5 h-5 mr-2" />
    Add to Cart
  </Button>
);

export default function ProductDetailsCard({ product }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock images array (in real app, you'd have multiple product images)
  const images = [
    product.image_link || product.api_featured_image,
    product.api_featured_image || product.image_link,
  ].filter(Boolean);

  const hasDiscount = product.original_price && product.original_price > product.price;
  const discountPercent = hasDiscount 
    ? Math.round(((product.original_price - product.price) / product.original_price) * 100)
    : 0;

  const features = [
    { icon: <Shield className="w-5 h-5" />, text: "Quality Guaranteed" },
    { icon: <Truck className="w-5 h-5" />, text: "Free Shipping Over $50" },
    { icon: <Package className="w-5 h-5" />, text: "Easy Returns" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400">{product.category || 'Products'}</a>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-semibold">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative group bg-gradient-to-br from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Badges */}
              <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                {hasDiscount && (
                  <div className="bg-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    -{discountPercent}% OFF
                  </div>
                )}
                {product.tag_list && product.tag_list[0] && (
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    {product.tag_list[0]}
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="aspect-square">
                <img
                  src={images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
                  </button>
                </>
              )}

              {/* Image Dots */}
              {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentImageIndex 
                          ? 'w-8 bg-pink-500' 
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex
                        ? 'border-pink-500 ring-2 ring-pink-200 dark:ring-pink-800'
                        : 'border-gray-200 dark:border-gray-700 hover:border-pink-300'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            
            {/* Brand */}
            <div>
              <p className="text-pink-600 dark:text-pink-400 font-bold uppercase tracking-wide text-sm mb-2">
                {product.brand || 'Premium Brand'}
              </p>
              
              {/* Product Name */}
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200 dark:fill-gray-700'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  4.8 (127 reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-pink-700 dark:from-pink-400 dark:to-pink-600 bg-clip-text text-transparent">
                  {product.price_sign || "$"}{product.price || "0.00"}
                </span>
                {hasDiscount && (
                  <>
                    <span className="text-2xl text-gray-400 line-through">
                      {product.price_sign || "$"}{product.original_price}
                    </span>
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">
                      Save {discountPercent}%
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Tax included. Shipping calculated at checkout.
              </p>
            </div>

            {/* Colors */}
            {product.product_colors && product.product_colors.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Available Colors
                  <span className="text-sm font-normal text-gray-600 dark:text-gray-400 ml-2">
                    ({product.product_colors.length} shades)
                  </span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.product_colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(i)}
                      className={`relative group`}
                      title={color.colour_name}
                    >
                      <div
                        className={`w-12 h-12 rounded-full border-4 transition-all ${
                          selectedColor === i
                            ? 'border-pink-500 ring-4 ring-pink-200 dark:ring-pink-800 scale-110'
                            : 'border-gray-300 dark:border-gray-600 hover:border-pink-300'
                        }`}
                        style={{ backgroundColor: color.hex_value }}
                      />
                      {selectedColor === i && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Check className="w-6 h-6 text-white drop-shadow-lg" />
                        </div>
                      )}
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {color.colour_name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold transition-colors"
                  >
                    -
                  </button>
                  <span className="px-8 py-3 font-bold text-gray-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-green-600 dark:text-green-400 font-semibold flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  In Stock
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <AddToCartButton product={product} />
              <Button
                onClick={() => setIsWishlisted(!isWishlisted)}
                variant="outline"
                className={`px-6 py-6 rounded-xl border-2 transition-all ${
                  isWishlisted
                    ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20'
                    : 'border-gray-300 dark:border-gray-700 hover:border-pink-300'
                }`}
              >
                <Heart 
                  className={`w-6 h-6 ${
                    isWishlisted 
                      ? 'fill-pink-500 text-pink-500' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                />
              </Button>
              <Button
                variant="outline"
                className="px-6 py-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-pink-300"
              >
                <Share2 className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </Button>
            </div>

            {/* Buy Now Button */}
            <Button className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-xl font-bold text-lg py-6 shadow-xl">
              Buy Now
            </Button>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400 mb-2">
                    {feature.icon}
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags */}
            {product.tag_list && product.tag_list.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4">
                {product.tag_list.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-16">
          <Card className="border-0 shadow-xl rounded-3xl bg-white dark:bg-gray-800">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center text-white">
                  <Info className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Product Description
                </h2>
              </div>
              <div 
                className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// // Demo with sample product
// function ProductDetailsDemo() {
//   const sampleProduct = {
//     id: 1036,
//     name: "Multi Purpose Powder - Blush & Eye",
//     brand: "rejuva minerals",
//     category: "eyeshadow",
//     price: "24.99",
//     original_price: "34.99",
//     price_sign: "$",
//     description: "Our Multi Purpose Pressed Powders may be used for blush or eye shadow. Blended with antioxidants from Certified Organic Fruits, Berries & Botanicals. Made without any gluten containing ingredients. Mica free Pink Parfait and Papaya will offer a natural, ultra sheer semi-matte finish. The petals from beautiful crushed red roses that are found in Pink Parfait, are valued for their natural color and delightful aroma that they provide! Acai Berry will offer a natural, ultra sheer satin finish (mica added). VEGAN.",
//     image_link: "https://www.purpicks.com/wp-content/uploads/2018/06/Rejuva-Minerals-Multi-Purpose-Powder-Blush-_-Eye-1.jpg",
//     api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/036/original/open-uri20180630-4-ign3hh?1530390384",
//     tag_list: ['EWG Verified', 'purpicks', 'Hypoallergenic', 'No Talc'],
//     product_colors: [
//       { hex_value: "#FFB6C1", colour_name: "Pink Parfait" },
//       { hex_value: "#FFDAB9", colour_name: "Papaya" },
//       { hex_value: "#8B008B", colour_name: "Acai Berry" }
//     ]
//   };

//   return <ProductDetailsCard product={sampleProduct} />;
// }