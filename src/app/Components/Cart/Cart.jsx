"use client"

import { ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/Context/CartContext"
import { useSession } from "next-auth/react";


export default function Cart() {
  const { cartCount } = useCart();
  const { data: session } = useSession();

  return (
    <div className="relative">
      <ShoppingCart className="w-6 h-6 cursor-pointer" />
      {cartCount > 0 && (
        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-0 text-xs">
          {cartCount}
        </Badge>
      )}
    </div>
  )
}
