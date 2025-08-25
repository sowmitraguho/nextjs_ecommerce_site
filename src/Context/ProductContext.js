'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  useEffect(() => {
      const fetchProducts = async () => {
        try {
          const res = await fetch("/api/products")
          const data = await res.json()
          setProducts(data.products);
          setFeaturedProducts(data.featureProducts);
          setTopProducts(data.topProducts);
        } catch (err) {
          console.error(err)
        }
          }
          fetchProducts()
        }, []);

  return (
    <ProductContext.Provider value={{ products, featuredProducts, topProducts }}>
      {children}
    </ProductContext.Provider>
  )
}
export function useProduct() {
  return useContext(ProductContext);
}
