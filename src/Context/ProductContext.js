'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      const fetchProducts = async () => {
        setLoading(true);
        try {
          const res = await fetch("/api/products")
          const data = await res.json()
          setProducts(data.products);
          setFeaturedProducts(data.featureProducts);
          setTopProducts(data.topProducts);
        } catch (err) {
          console.error(err)
        } finally {
          setLoading(false);
        }
          }
          fetchProducts()
        }, []);

  return (
    <ProductContext.Provider value={{ products, featuredProducts, topProducts, loading }}>
      {children}
    </ProductContext.Provider>
  )
}
export function useProduct() {
  return useContext(ProductContext);
}
