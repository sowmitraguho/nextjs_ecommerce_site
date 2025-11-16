"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item
  const addToCart = (product) => {
    setCart((prevCart) => {
      // 1. Check if the product is already in the cart

      const existingItemIndex = prevCart.findIndex(
        (item) => item.product._id === product._id // Assuming 'product' has a unique '_id'
      );

      // 2. If the item is found (existingItemIndex !== -1)
      if (existingItemIndex !== -1) {
        // Create a copy of the cart to avoid direct mutation
        const newCart = [...prevCart];

        newCart[existingItemIndex] = {
          ...newCart[existingItemIndex],
          quantity: newCart[existingItemIndex].quantity + 1,
        };

        // Return the new cart array
        return newCart;
      }
      // 3. If the item is NOT found
      else {
        // Add the new product with a quantity of 1
        return [...prevCart, { product: product, quantity: 1 }];
      }
    });
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.product._id !== id));
  };

  const updateCartItemQuantity = (id, quantity) => {
    console.log("Updating item with id:", id, "to quantity:", quantity);
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        {
          console.log("Checking item:", item);
          return item.product._id === id ? { ...item, quantity: quantity } : item;
        }
      )
    );
  };

  // Cart count
  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
