import React from 'react'
import ProductCard from '../Components/ProductCard/ProductCard';

export default function page() {
    // --- Fake Product Data ---
const fakeProducts = [
  {
    id: 'prod_001',
    image: 'https://placehold.co/300x200/F4D7DA/262626?text=Foundation',
    title: 'Radiant Glow Foundation',
    variant: 'Warm Beige (30ml)',
    description: 'Achieve a flawless, luminous complexion with our long-lasting, hydrating foundation.',
    price: 35.00,
  },
  {
    id: 'prod_002',
    image: 'https://placehold.co/300x200/E3C2D2/262626?text=Lipstick',
    title: 'Velvet Matte Lipstick',
    variant: 'Ruby Red',
    description: 'Intense color and a comfortable matte finish that lasts all day. Vegan & Cruelty-Free.',
    price: 22.50,
  },
  {
    id: 'prod_003',
    image: 'https://placehold.co/300x200/C8BFE7/262626?text=Eyeshadow',
    title: 'Aurora Eyeshadow Palette',
    variant: 'Sunset Dream (12 Shades)',
    description: 'A captivating palette with shimmering and matte shades for endless eye looks.',
    price: 48.00,
  },
  {
    id: 'prod_004',
    image: 'https://placehold.co/300x200/D0F0C0/262626?text=Mascara',
    title: 'Lash Amplify Mascara',
    variant: 'Intense Black',
    description: 'Volumize and lengthen your lashes with this smudge-proof, defining mascara.',
    price: 19.99,
  },
  {
    id: 'prod_005',
    image: 'https://placehold.co/300x200/F8D4C0/262626?text=Blush',
    title: 'Petal Flush Blush',
    variant: 'Peachy Pink',
    description: 'A silky-smooth powder blush that adds a natural, healthy flush to your cheeks.',
    price: 28.00,
  },
  {
    id: 'prod_006',
    image: 'https://placehold.co/300x200/BEE3F8/262626?text=Highlighter',
    title: 'Moonbeam Liquid Highlighter',
    variant: 'Rose Gold (15ml)',
    description: 'Liquid illuminator for a radiant, dewy glow. Buildable and blendable formula.',
    price: 32.00,
  },
  {
    id: 'prod_007',
    image: 'https://placehold.co/300x200/F0BAD0/262626?text=Primer',
    title: 'Pore Minimizing Primer',
    variant: 'Clear (30ml)',
    description: 'Create a smooth canvas for makeup, minimize pores, and prolong wear.',
    price: 27.00,
  },
  {
    id: 'prod_008',
    image: 'https://placehold.co/300x200/F5CBA7/262626?text=Setting+Spray',
    title: 'All-Day Setting Spray',
    variant: 'Mist (100ml)',
    description: 'Lock in your look for hours with this lightweight, refreshing setting spray.',
    price: 24.00,
  },
  {
    id: 'prod_009',
    image: 'https://placehold.co/300x200/D9F7D4/262626?text=Concealer',
    title: 'Flawless Coverage Concealer',
    variant: 'Light Neutral (6ml)',
    description: 'Full-coverage concealer that brightens dark circles and hides imperfections.',
    price: 21.00,
  },
  {
    id: 'prod_010',
    image: 'https://placehold.co/300x200/FFD9EE/262626?text=Eyeliner',
    title: 'Precision Liquid Eyeliner',
    variant: 'Jet Black',
    description: 'Achieve sharp, precise lines with this long-wearing, waterproof liquid eyeliner.',
    price: 18.00,
  },
  {
    id: 'prod_011',
    image: 'https://placehold.co/300x200/F0F0B0/262626?text=Lip+Gloss',
    title: 'Crystal Shine Lip Gloss',
    variant: 'Clear Sparkle',
    description: 'Non-sticky formula for a high-shine, plumped-up lip look.',
    price: 15.50,
  },
  {
    id: 'prod_012',
    image: 'https://placehold.co/300x200/CCEEFF/262626?text=Brow+Gel',
    title: 'Brow Sculpting Gel',
    variant: 'Transparent',
    description: 'Tame and define your brows for a polished, long-lasting finish.',
    price: 16.00,
  },
];
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fakeProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
