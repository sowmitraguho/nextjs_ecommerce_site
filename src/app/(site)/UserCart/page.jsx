"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/Context/CartContext";
import { useRouter } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";

export default function UserCart() {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();
  const router = useRouter();

  const handleDecreaseQuantity = (item) => {
    updateCartItemQuantity(item.product._id, item.quantity - 1);
  };
  const handleIncreaseQuantity = (item) => {
    updateCartItemQuantity(item.product._id, item.quantity + 1);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-pink-600 dark:text-pink-400">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className=" dark:text-gray-400 flex items-end justify-center gap-4 text-3xl text-pink-500"><FaCartShopping />Your cart is empty </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cart.map((item, index) => (
            <Card key={index} className="border rounded-2xl shadow-sm bg-white dark:bg-gray-900">
              <CardContent className="flex flex-col gap-4 justify-between px-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.image_link}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-800 dark:text-gray-200">{item.product.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400">Price: {item.product.price}</p>
                    <p className="text-gray-600 dark:text-gray-400">Quantity: {item.quantity}</p>
                    <p className="text-gray-600 dark:text-gray-400">Total: ${(parseFloat(item.product.price.replace('$', '')) * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button onClick={() => handleDecreaseQuantity(item)}> - </Button>
                  <p>Quantity: {item.quantity}</p>
                  <Button onClick={() => handleIncreaseQuantity(item)}> + </Button>
                </div>
                <div className="flex flex-row flex-wrap gap-2">
                  <Button
                    variant="outline"
                    className=" dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-700 font-medium"
                    onClick={() => router.push(`/products/${item._id}`)}
                  >
                    View Details
                  </Button>
                  <Button
                    //variant="destructive"
                    onClick={() => removeFromCart(item.product._id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium"
                  >
                    Remove
                  </Button>
                  <Button
                    //variant="destructive"
                    onClick={() => removeFromCart(item._id)}
                    className="bg-pink-500 hover:bg-pink-600 text-white font-medium"
                  >
                    Pay
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
